import React, { useEffect, useRef, useState } from 'react';

interface Vector {
  x: number;
  y: number;
}

interface Ship {
  position: Vector;
  velocity: Vector;
  angle: number;
  thrust: boolean;
  rotating: 'left' | 'right' | 'none';
}

interface Planet {
  position: Vector;
  radius: number;
  color: string;
}

interface Asteroid {
  position: Vector;
  velocity: Vector;
  radius: number;
}

const SPACE_SCALE = 10; // 1 pixel = 10 kilometers
const SHIP_SIZE = 15;
const THRUST_FORCE = 0.02;
const ROTATION_SPEED = 4; // degrees per frame

const SpaceGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ship, setShip] = useState<Ship>({
    position: { x: 400, y: 300 },
    velocity: { x: 0, y: 0 },
    angle: 0,
    thrust: false,
    rotating: 'none',
  });

  const planets: Planet[] = [
    { position: { x: 200, y: 200 }, radius: 30, color: '#2ecc71' },
    { position: { x: 600, y: 400 }, radius: 40, color: '#3498db' },
  ];

  const asteroids: Asteroid[] = Array.from({ length: 10 }, () => ({
    position: {
      x: Math.random() * 800,
      y: Math.random() * 600,
    },
    velocity: {
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2,
    },
    radius: Math.random() * 10 + 5,
  }));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle keyboard input
    const keys: { [key: string]: boolean } = {};

    const handleKeyDown = (e: KeyboardEvent) => {
      keys[e.key] = true;
      setShip(prev => {
        const next = { ...prev };
        if (e.key === 'ArrowLeft') next.rotating = 'left';
        if (e.key === 'ArrowRight') next.rotating = 'right';
        if (e.key === 'ArrowUp') next.thrust = true;
        return next;
      });
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keys[e.key] = false;
      setShip(prev => {
        const next = { ...prev };
        if (e.key === 'ArrowLeft' && prev.rotating === 'left') next.rotating = 'none';
        if (e.key === 'ArrowRight' && prev.rotating === 'right') next.rotating = 'none';
        if (e.key === 'ArrowUp') next.thrust = false;
        return next;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Game loop
    let animationFrameId: number;

    const update = () => {
      // Update ship state
      setShip(prev => {
        const next = { ...prev };
        
        // Rotation
        if (next.rotating === 'left') next.angle = prev.angle - ROTATION_SPEED;
        if (next.rotating === 'right') next.angle = prev.angle + ROTATION_SPEED;

        // Thrust
        if (next.thrust) {
          const angleRad = (next.angle * Math.PI) / 180;
          next.velocity.x += Math.cos(angleRad) * THRUST_FORCE;
          next.velocity.y += Math.sin(angleRad) * THRUST_FORCE;
        }

        // Apply velocity
        next.position.x += next.velocity.x;
        next.position.y += next.velocity.y;

        // Wrap around screen edges
        if (next.position.x > 800) next.position.x = 0;
        if (next.position.x < 0) next.position.x = 800;
        if (next.position.y > 600) next.position.y = 0;
        if (next.position.y < 0) next.position.y = 600;

        return next;
      });

      // Update asteroids
      asteroids.forEach(asteroid => {
        asteroid.position.x += asteroid.velocity.x;
        asteroid.position.y += asteroid.velocity.y;

        if (asteroid.position.x > 800) asteroid.position.x = 0;
        if (asteroid.position.x < 0) asteroid.position.x = 800;
        if (asteroid.position.y > 600) asteroid.position.y = 0;
        if (asteroid.position.y < 0) asteroid.position.y = 600;
      });

      // Draw everything
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, 800, 600);

      // Draw planets
      planets.forEach(planet => {
        ctx.beginPath();
        ctx.arc(planet.position.x, planet.position.y, planet.radius, 0, Math.PI * 2);
        ctx.fillStyle = planet.color;
        ctx.fill();
      });

      // Draw asteroids
      asteroids.forEach(asteroid => {
        ctx.beginPath();
        ctx.arc(asteroid.position.x, asteroid.position.y, asteroid.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#888';
        ctx.fill();
      });

      // Draw ship
      ctx.save();
      ctx.translate(ship.position.x, ship.position.y);
      
      ctx.rotate(ship.angle * 1000);

      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(SHIP_SIZE, 0);
      ctx.lineTo(-SHIP_SIZE, SHIP_SIZE/2);
      ctx.lineTo(-SHIP_SIZE, -SHIP_SIZE/2);
      ctx.closePath();
      ctx.stroke();

      // Draw thrust
      if (ship.thrust) {
        ctx.beginPath();
        ctx.moveTo(-SHIP_SIZE, SHIP_SIZE/2);
        ctx.lineTo(-SHIP_SIZE * 1.5, 0);
        ctx.lineTo(-SHIP_SIZE, -SHIP_SIZE/2);
        ctx.strokeStyle = '#f00';
        ctx.stroke();
      }

      ctx.restore();

      animationFrameId = requestAnimationFrame(update);
    };

    update();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={600}
      style={{ border: '1px solid #333' }}
    />
  );
};

export default SpaceGame;