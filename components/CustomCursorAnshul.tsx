"use client";

import { useEffect, useRef } from "react";

const CustomCursorAnshul = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<{ x: number; y: number }[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const lastMoveTimeRef = useRef(Date.now());
  const timeRef = useRef(0);
  const isClickingRef = useRef(false);
  const velocityRef = useRef(0);
  const prevMouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d')!;
    let animationId: number;

    const config = {
      maxPoints: 18,
      minPoints: 15, // Increased min points for more consistent tail length
      curveLerp: 0.2, // Reduced for smoother following
      baseWidth: 3,
      glowWidth: 8,
      idleRadius: 8,
      idleSpeed: 0.002,
      maxVelocity: 40,
      idleTimeout: 150,
      smoothingFactor: 0.6,
      minDistance: 3,
      maxDistance: 12
    };

    const initPoints = (numPoints: number) => {
      const { x, y } = mouseRef.current;
      pointsRef.current = Array(numPoints).fill(null).map(() => ({ x, y }));
      prevMouseRef.current = { x, y };
    };

    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      const prevMouse = prevMouseRef.current;
      
      // Smooth mouse movement
      const smoothX = prevMouse.x + (e.clientX - prevMouse.x) * config.smoothingFactor;
      const smoothY = prevMouse.y + (e.clientY - prevMouse.y) * config.smoothingFactor;
      
      const dx = smoothX - prevMouse.x;
      const dy = smoothY - prevMouse.y;
      velocityRef.current = Math.sqrt(dx * dx + dy * dy);
      
      mouseRef.current = { x: smoothX, y: smoothY };
      prevMouseRef.current = { x: smoothX, y: smoothY };
      lastMoveTimeRef.current = currentTime;

      // Maintain more consistent point count
      const targetPoints = Math.min(
        Math.max(
          config.minPoints,
          Math.floor(config.minPoints + (velocityRef.current / config.maxVelocity) * 
          (config.maxPoints - config.minPoints))
        ),
        config.maxPoints
      );

      if (pointsRef.current.length !== targetPoints) {
        const newPoints = [];
        for (let i = 0; i < targetPoints; i++) {
          const index = (i / (targetPoints - 1)) * (pointsRef.current.length - 1);
          const lowIndex = Math.floor(index);
          const highIndex = Math.ceil(index);
          const t = index - lowIndex;
          
          const point1 = pointsRef.current[lowIndex];
          const point2 = pointsRef.current[Math.min(highIndex, pointsRef.current.length - 1)];
          
          newPoints.push({
            x: point1.x + (point2.x - point1.x) * t,
            y: point1.y + (point2.y - point1.y) * t
          });
        }
        pointsRef.current = newPoints;
      }
    };

    const handleMouseDown = () => {
      isClickingRef.current = true;
    };

    const handleMouseUp = () => {
      isClickingRef.current = false;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const updatePoints = () => {
      timeRef.current += 1;
      const currentTime = Date.now();
      const isIdle = currentTime - lastMoveTimeRef.current > config.idleTimeout;

      let targetX = mouseRef.current.x;
      let targetY = mouseRef.current.y;

      if (isIdle) {
        const angle = timeRef.current * config.idleSpeed;
        targetX += Math.cos(angle) * config.idleRadius;
        targetY += Math.sin(angle * 1.5) * config.idleRadius;
      }

      // Update first point with smooth tracking
      if (pointsRef.current.length > 0) {
        const firstPoint = pointsRef.current[0];
        const lerpFactor = isIdle ? 0.1 : 0.4;
        firstPoint.x += (targetX - firstPoint.x) * lerpFactor;
        firstPoint.y += (targetY - firstPoint.y) * lerpFactor;
      }

      // Update remaining points with distance constraints
      for (let i = 1; i < pointsRef.current.length; i++) {
        const point = pointsRef.current[i];
        const prevPoint = pointsRef.current[i - 1];
        
        // Calculate direction from previous point
        const dx = prevPoint.x - point.x;
        const dy = prevPoint.y - point.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Gradually decrease lerp factor along the tail
        const tailProgress = i / pointsRef.current.length;
        const lerpFactor = config.curveLerp * (1 - tailProgress * 0.5);
        
        // Maintain minimum distance and prevent sudden movements
        if (distance > config.minDistance) {
          // Apply smoother movement with direction preservation
          const moveX = dx * lerpFactor;
          const moveY = dy * lerpFactor;
          
          point.x += moveX;
          point.y += moveY;
        }
      }
    };

    const drawNeonPath = (width: number, color: string, blur: number, alpha: number = 1) => {
      if (pointsRef.current.length < 2) return;

      ctx.beginPath();
      
      // Start path
      const startPoint = pointsRef.current[0];
      ctx.moveTo(startPoint.x, startPoint.y);
      
      // Draw smooth curve through points
      for (let i = 1; i < pointsRef.current.length - 2; i++) {
        const current = pointsRef.current[i];
        const next = pointsRef.current[i + 1];
        
        const cx = (current.x + next.x) * 0.5;
        const cy = (current.y + next.y) * 0.5;
        
        ctx.quadraticCurveTo(current.x, current.y, cx, cy);
      }
      
      // Connect last two points
      const lastTwo = pointsRef.current.slice(-2);
      if (lastTwo.length === 2) {
        ctx.quadraticCurveTo(
          lastTwo[0].x,
          lastTwo[0].y,
          lastTwo[1].x,
          lastTwo[1].y
        );
      }

      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.lineWidth = width;
      ctx.strokeStyle = color;
      ctx.shadowBlur = blur;
      ctx.shadowColor = color;
      ctx.globalAlpha = alpha;
      ctx.stroke();
      ctx.globalAlpha = 1;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (pointsRef.current.length === 0) return;

      const colors = isClickingRef.current ? 
        { glow: '#ff4444', core: '#fff' } : 
        { glow: '#ffd700', core: '#fff' };

      drawNeonPath(config.glowWidth * 1.5, colors.glow, 25, 0.1);
      drawNeonPath(config.glowWidth, colors.glow, 20, 0.2);
      drawNeonPath(config.glowWidth * 0.7, colors.glow, 15, 0.3);
      drawNeonPath(config.baseWidth * 1.5, colors.glow, 10, 0.5);
      drawNeonPath(config.baseWidth, colors.core, 5, 1);
    };

    const animate = () => {
      updatePoints();
      draw();
      animationId = requestAnimationFrame(animate);
    };

    handleResize();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('resize', handleResize);
    initPoints(config.minPoints);
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[9999]"
    />
  );
};

export default CustomCursorAnshul;