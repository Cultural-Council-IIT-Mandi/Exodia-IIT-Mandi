"use client";

import { useEffect } from "react";
const p5 = typeof window !== "undefined" ? require("p5") : null;


const P5Background = () => {
  if (typeof window === "undefined") return; // Prevents errors during server-side rendering

  useEffect(() => {
    const sketch = (p) => {
      const CELL_SIZE = 40;
      const COLOR_R = 255;  // Red
      const COLOR_G = 215;  // Green
      const COLOR_B = 0;    // Blue (Golden Yellow)

      const STARTING_ALPHA = 200;
      const BACKGROUND_COLOR = 31;
      const PROB_OF_NEIGHBOR = 0.5;
      const AMT_FADE_PER_FRAME = 5;

      let colorWithAlpha;
      let numRows;
      let numCols;
      let currentRow = -2;
      let currentCol = -2;
      let allNeighbors = [];

      p.setup = () => {
        let cnv = p.createCanvas(p.windowWidth, p.windowHeight);
        cnv.style("position", "fixed"); // Fix canvas position
        cnv.style("top", "0");
        cnv.style("left", "0");
        cnv.style("z-index", "-1"); // Send it to background
        colorWithAlpha = p.color(COLOR_R, COLOR_G, COLOR_B, STARTING_ALPHA);
        p.noFill();
        p.strokeWeight(1);
        numRows = Math.ceil(p.windowHeight / CELL_SIZE);
        numCols = Math.ceil(p.windowWidth / CELL_SIZE);
      };

      p.draw = () => {
        p.background(BACKGROUND_COLOR);

        let row = Math.floor(p.mouseY / CELL_SIZE);
        let col = Math.floor(p.mouseX / CELL_SIZE);

        if (row !== currentRow || col !== currentCol) {
          currentRow = row;
          currentCol = col;
          allNeighbors.push(...getRandomNeighbors(row, col));
        }

        let x = col * CELL_SIZE;
        let y = row * CELL_SIZE;

        p.stroke(colorWithAlpha);
        p.rect(x, y, CELL_SIZE, CELL_SIZE);

        for (let neighbor of allNeighbors) {
          let neighborX = neighbor.col * CELL_SIZE;
          let neighborY = neighbor.row * CELL_SIZE;
          neighbor.opacity = Math.max(0, neighbor.opacity - AMT_FADE_PER_FRAME);
          p.stroke(COLOR_R, COLOR_G, COLOR_B, neighbor.opacity);
          p.rect(neighborX, neighborY, CELL_SIZE, CELL_SIZE);
        }

        allNeighbors = allNeighbors.filter((neighbor) => neighbor.opacity > 0);
      };

      function getRandomNeighbors(row, col) {
        let neighbors = [];
        for (let dRow = -1; dRow <= 1; dRow++) {
          for (let dCol = -1; dCol <= 1; dCol++) {
            let neighborRow = row + dRow;
            let neighborCol = col + dCol;
            let isCurrentCell = dRow === 0 && dCol === 0;
            let isInBounds =
              neighborRow >= 0 &&
              neighborRow < numRows &&
              neighborCol >= 0 &&
              neighborCol < numCols;
            if (!isCurrentCell && isInBounds && Math.random() < PROB_OF_NEIGHBOR) {
              neighbors.push({
                row: neighborRow,
                col: neighborCol,
                opacity: 255,
              });
            }
          }
        }
        return neighbors;
      }

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        numRows = Math.ceil(p.windowHeight / CELL_SIZE);
        numCols = Math.ceil(p.windowWidth / CELL_SIZE);
      };
    };

    const myP5 = new p5(sketch);

    return () => {
      myP5.remove();
    };
  }, []);

  return null; // No JSX needed since p5.js handles rendering
};

export default P5Background;
