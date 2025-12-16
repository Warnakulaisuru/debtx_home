import React, { useEffect, useRef } from "react";

const SnowCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    // const snowflakes = Array.from({ length: 120 }, () => ({
    //   x: Math.random() * width,
    //   y: Math.random() * height,
    //   size: Math.random() * 6 + 6,
    //   speed: Math.random() * 1 + 0.5,
    //   rotation: Math.random() * Math.PI,
    //   rotationSpeed: Math.random() * 0.01,
    // }));

    const snowflakes = Array.from({ length: 40 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 3 + 4,
      speed: Math.random() * 0.4 + 0.2,
      rotation: Math.random() * Math.PI,
      rotationSpeed: Math.random() * 0.003,
    }));

    const drawSnowflake = (x, y, size, rotation) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.strokeStyle = "white";
      ctx.lineWidth = 1;

      for (let i = 0; i < 6; i++) {
        ctx.rotate(Math.PI / 3);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, size);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, size * 0.5);
        ctx.lineTo(size * 0.2, size * 0.7);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, size * 0.5);
        ctx.lineTo(-size * 0.2, size * 0.7);
        ctx.stroke();
      }

      ctx.restore();
    };

    const animate = () => {
      // ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.clearRect(0, 0, width, height);

      snowflakes.forEach((flake) => {
        drawSnowflake(flake.x, flake.y, flake.size, flake.rotation);
        flake.y += flake.speed;
        flake.rotation += flake.rotationSpeed;

        if (flake.y > height) {
          flake.y = -10;
          flake.x = Math.random() * width;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
};

export default SnowCanvas;
