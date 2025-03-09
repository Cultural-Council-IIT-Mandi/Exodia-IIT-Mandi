"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";

const p5 = typeof window !== "undefined" ? require("p5") : null;

const P5StarsBackground = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const sketch = (p) => {
      let isMobile = p.windowWidth < 768; // Detect if it's a mobile device
      const NUM_STARS = !isMobile ? 400 : 200; // Fewer stars for mobile
      const BASE_COLOR = [255, 255, 255]; // White for normal stars
      const GOLDEN_COLOR = [255, 255, 255]; // Golden color for glow
      const HOVER_RADIUS = 180; // Max distance for glowing effect
      const STAR_SIZE = 1; // Smaller star size for mobile
      const MAX_GLOW_SIZE = !isMobile ? 9 : 6; // Max size when glowing

      let stars = [];

      p.setup = () => {
        let cnv = p.createCanvas(p.windowWidth, p.windowHeight);
        cnv.style("position", "fixed");
        cnv.style("top", "0");
        cnv.style("left", "0");
        cnv.style("z-index", "-1");
        p.noStroke();

        // Generate fewer stars for mobile with random properties
        for (let i = 0; i < NUM_STARS; i++) {
          stars.push({
            x: p.random(p.width),
            y: p.random(p.height),
            size: STAR_SIZE,
            baseColor: BASE_COLOR,
            glowFactor: 0,
            flickerSpeed: p.random(0.02, 0.1), // Random speed for twinkling effect
            isActive: p.random() < 0.2, // Randomly decide if a star is twinkling
          });
        }
      };

      p.draw = () => {
        p.background(10, 10, 30); // Dark background for space effect

        for (let star of stars) {
          let glowStrength = 0;

          if (!isMobile) {
            // Desktop: Glow on Mouse Hover
            let d = p.dist(p.mouseX, p.mouseY, star.x, star.y);
            glowStrength = 1 - p.constrain(d / HOVER_RADIUS, 0, 1);
          } else {
            // Mobile: Only a few stars twinkle
            if (star.isActive) {
              glowStrength = p.noise(star.x * 0.01, star.y * 0.01, p.frameCount * star.flickerSpeed);
            }
          }

          star.glowFactor = p.lerp(star.glowFactor, glowStrength, 0.1);

          let r = p.lerp(star.baseColor[0], GOLDEN_COLOR[0], star.glowFactor);
          let g = p.lerp(star.baseColor[1], GOLDEN_COLOR[1], star.glowFactor);
          let b = p.lerp(star.baseColor[2], GOLDEN_COLOR[2], star.glowFactor);

          let starSize = p.lerp(STAR_SIZE, MAX_GLOW_SIZE, star.glowFactor);

          p.fill(r, g, b);
          p.ellipse(star.x, star.y, starSize);
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        isMobile = p.windowWidth < 768;
      };
    };

    if (p5) {
      const myP5 = new p5(sketch);
      return () => {
        myP5.remove();
      };
    }
  }, []);

  return null;
};

export default dynamic(() => Promise.resolve(P5StarsBackground), {
  ssr: false,
});
