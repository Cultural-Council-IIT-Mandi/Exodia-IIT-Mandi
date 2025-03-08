"use client";

import { useEffect, useRef, useState } from "react";

const CustomCursorAnshul = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<{ x: number; y: number }[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Hide cursor globally
    document.documentElement.style.cursor = 'none';
    document.body.style.cursor = 'none';
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d')!;
    let animationId: number;

    const config = {
      curvePoints: 40,     // Reduced from 80 to make tail shorter
      curveLerp: 0.45,     // Slightly reduced for smoother movement
      radius1: 4,          // Regular cursor size (reduced from 5)
      radius2: 10,         // Hover size (reduced from 30)
      velocityTreshold: 15, // Increased to make it less sensitive
      sleepRadiusX: 0,     // Removed sleep effect (was 100)
      sleepRadiusY: 0,     // Removed sleep effect (was 100)
      sleepTimeCoefX: 0,   // Removed sleep effect
      sleepTimeCoefY: 0    // Removed sleep effect
    };

    // Initialize points at mouse position
    const initPoints = () => {
      pointsRef.current = Array(config.curvePoints).fill(null).map(() => ({
        x: mouseRef.current.x,
        y: mouseRef.current.y
      }));
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      // Initialize points if not already done
      if (pointsRef.current.length === 0) {
        initPoints();
      }
    };

    // Track hover state on interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('a, button, [role="button"], input, select, textarea, [data-cursor-hover]')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      setIsHovering(false);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const updatePoints = () => {
      timeRef.current += 1;
      
      // Update first point with mouse position (sleep effect removed)
      pointsRef.current[0] = {
        x: mouseRef.current.x,
        y: mouseRef.current.y
      };

      // Update rest of points with lerp
      for (let i = 1; i < pointsRef.current.length; i++) {
        const point = pointsRef.current[i];
        const prevPoint = pointsRef.current[i - 1];
        
        point.x += (prevPoint.x - point.x) * config.curveLerp;
        point.y += (prevPoint.y - point.y) * config.curveLerp;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (pointsRef.current.length === 0) return;

      // Calculate velocity
      const velocity = Math.hypot(
        pointsRef.current[0].x - pointsRef.current[1].x,
        pointsRef.current[0].y - pointsRef.current[1].y
      );
      
      // Determine radius based on velocity and hover state
      let radius = config.radius1;
      if (isHovering) {
        radius = config.radius2;
      } else if (velocity > config.velocityTreshold) {
        radius = Math.min(config.radius1 * 1.5, config.radius2); // Cap the max size
      }

      // Draw the curve with multiple passes for neon effect
      const drawCurve = (width: number, alpha: number) => {
        ctx.beginPath();
        ctx.moveTo(pointsRef.current[0].x, pointsRef.current[0].y);
        
        // Only use portion of the points for the tail to make it shorter
        const visiblePoints = Math.min(Math.max(10, Math.floor(config.curvePoints * 0.6)), pointsRef.current.length);
        
        for (let i = 1; i < visiblePoints - 1; i++) {
          const xc = (pointsRef.current[i].x + pointsRef.current[i + 1].x) / 2;
          const yc = (pointsRef.current[i].y + pointsRef.current[i + 1].y) / 2;
          ctx.quadraticCurveTo(pointsRef.current[i].x, pointsRef.current[i].y, xc, yc);
        }

        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.lineWidth = width;
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.shadowBlur = 15;  // Reduced blur
        ctx.shadowColor = '#ffd700';
        ctx.stroke();
      };

      // Outer glow (reduced)
      drawCurve(radius * 1.5, 0.1);
      // Middle glow
      drawCurve(radius * 1.2, 0.2);
      // Inner glow
      drawCurve(radius * 0.8, 0.5);
      // Core
      drawCurve(radius * 0.5, 1);
    };

    const animate = () => {
      updatePoints();
      draw();
      animationId = requestAnimationFrame(animate);
    };

    // Initialize
    handleResize();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    document.addEventListener('mouseover', handleMouseOver, true);
    document.addEventListener('mouseout', handleMouseOut, true);
    initPoints();
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mouseover', handleMouseOver, true);
      document.removeEventListener('mouseout', handleMouseOut, true);
      // Restore cursor
      document.documentElement.style.cursor = 'auto';
      document.body.style.cursor = 'auto';
    };
  }, [isHovering]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-[9999]"
      />
      <style jsx global>{`
        * {
          cursor: none !important;
        }
        
        /* Ensure the cursor effect works on all interactive elements */
        a, button, [role="button"], input, select, textarea, [data-cursor-hover] {
          cursor: none !important;
        }
      `}</style>
    </>
  );
};

export default CustomCursorAnshul;