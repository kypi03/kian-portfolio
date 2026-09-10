import React, { useEffect, useRef } from 'react';

interface ScientificCanvasProps {
  darkMode: boolean;
}

export const ScientificCanvas: React.FC<ScientificCanvasProps> = ({ darkMode }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particles simulating electrochemical ions / lattice nodes
    const nodeCount = 38;
    const nodes: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      phase: number;
      type: 'cation' | 'anion' | 'lattice';
    }[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 2 + 1.2,
        phase: Math.random() * Math.PI * 2,
        type: i % 3 === 0 ? 'lattice' : i % 3 === 1 ? 'cation' : 'anion'
      });
    }

    let time = 0;

    const render = () => {
      time += 0.008;
      ctx.clearRect(0, 0, width, height);

      const strokeColor = darkMode ? 'rgba(44, 130, 201, 0.12)' : 'rgba(26, 101, 158, 0.09)';
      const goldAccent = darkMode ? 'rgba(214, 168, 79, 0.35)' : 'rgba(214, 168, 79, 0.25)';
      const latticeColor = darkMode ? 'rgba(203, 213, 225, 0.4)' : 'rgba(7, 26, 43, 0.3)';

      // Subtle electrode boundary at bottom-right
      const electrodeGradient = ctx.createLinearGradient(width - 250, 0, width, height);
      electrodeGradient.addColorStop(0, 'transparent');
      electrodeGradient.addColorStop(1, darkMode ? 'rgba(11, 41, 66, 0.3)' : 'rgba(217, 222, 227, 0.25)');
      ctx.fillStyle = electrodeGradient;
      ctx.fillRect(width - 260, 0, 260, height);

      // Draw subtle lattice lines between close nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            const alpha = (1 - dist / 140) * (darkMode ? 0.14 : 0.09);
            ctx.strokeStyle = (i + j) % 7 === 0 ? goldAccent : `rgba(26, 101, 158, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // Draw and update nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        // Wrap around boundaries
        if (n.x < 0) n.x = width;
        if (n.x > width) n.x = 0;
        if (n.y < 0) n.y = height;
        if (n.y > height) n.y = 0;

        ctx.beginPath();
        const pulse = Math.sin(time + n.phase) * 0.5 + 1;
        ctx.arc(n.x, n.y, n.radius * pulse, 0, Math.PI * 2);

        if (n.type === 'lattice') {
          ctx.fillStyle = latticeColor;
        } else if (n.type === 'cation') {
          ctx.fillStyle = darkMode ? '#2C82C9' : '#1A659E';
        } else {
          ctx.fillStyle = darkMode ? 'rgba(214, 168, 79, 0.7)' : 'rgba(180, 130, 40, 0.6)';
        }
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
};
