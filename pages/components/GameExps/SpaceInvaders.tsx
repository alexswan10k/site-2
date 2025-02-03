import React, { useState, useEffect, useCallback } from 'react';

interface Position {
  x: number;
  y: number;
}

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 400;
const PLAYER_SIZE = 30;
const INVADER_SIZE = 25;
const BULLET_SIZE = 5;

const SpaceInvaders: React.FC = () => {
  const [playerX, setPlayerX] = useState(CANVAS_WIDTH / 2);
  const [invaders, setInvaders] = useState<Position[]>(initializeInvaders());
  const [bullets, setBullets] = useState<Position[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  function initializeInvaders(): Position[] {
    const invaders = [];
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 8; col++) {
        invaders.push({ x: col * 50 + 30, y: row * 40 + 30 });
      }
    }
    return invaders;
  }

  const movePlayer = useCallback((e: KeyboardEvent) => {
    if (gameOver) return;
    const speed = 20;
    if (e.key === 'ArrowLeft') {
      setPlayerX(x => Math.max(0, x - speed));
    } else if (e.key === 'ArrowRight') {
      setPlayerX(x => Math.min(CANVAS_WIDTH - PLAYER_SIZE, x + speed));
    }
  }, [gameOver]);

  const shoot = useCallback((e: KeyboardEvent) => {
    if (e.key === ' ' && !gameOver) {
      setBullets(prev => [...prev, { x: playerX + PLAYER_SIZE / 2, y: CANVAS_HEIGHT - 40 }]);
    }
  }, [playerX, gameOver]);

  useEffect(() => {
    window.addEventListener('keydown', movePlayer);
    window.addEventListener('keydown', shoot);
    return () => {
      window.removeEventListener('keydown', movePlayer);
      window.removeEventListener('keydown', shoot);
    };
  }, [movePlayer, shoot]);

  useEffect(() => {
    if (gameOver) return;

    const moveInvaders = () => {
      setInvaders(prev => {
        const moveDown = prev.some(inv => 
          direction === 'right' 
            ? inv.x >= CANVAS_WIDTH - INVADER_SIZE - 5 
            : inv.x <= 5
        );

        return prev.map(inv => ({
          x: inv.x + (moveDown ? 0 : direction === 'right' ? 2 : -2),
          y: inv.y + (moveDown ? 10 : 0)
        }));
      });

      setDirection(prev => prev === 'right' ? 'left' : 'right');
    };

    const invaderInterval = setInterval(moveInvaders, 500);
    return () => clearInterval(invaderInterval);
  }, [direction, gameOver]);

  useEffect(() => {
    const moveBullets = () => {
      setBullets(prev => 
        prev
          .filter(b => b.y > 0)
          .map(b => ({ ...b, y: b.y - 4 }))
      );
    };

    const bulletInterval = setInterval(moveBullets, 16);
    return () => clearInterval(bulletInterval);
  }, []);

  useEffect(() => {
    const checkCollisions = () => {
      setBullets(prevBullets => {
        const newBullets = [...prevBullets];
        const newInvaders = [...invaders];
        
        for (let i = newBullets.length - 1; i >= 0; i--) {
          const bullet = newBullets[i];
          for (let j = newInvaders.length - 1; j >= 0; j--) {
            const invader = newInvaders[j];
            if (
              bullet.x >= invader.x &&
              bullet.x <= invader.x + INVADER_SIZE &&
              bullet.y >= invader.y &&
              bullet.y <= invader.y + INVADER_SIZE
            ) {
              newBullets.splice(i, 1);
              newInvaders.splice(j, 1);
              setScore(s => s + 100);
              break;
            }
          }
        }
        
        setInvaders(newInvaders);
        return newBullets;
      });
    };

    const collisionInterval = setInterval(checkCollisions, 16);
    return () => clearInterval(collisionInterval);
  }, [invaders]);

  useEffect(() => {
    if (invaders.some(inv => inv.y >= CANVAS_HEIGHT - 50)) {
      setGameOver(true);
    }
  }, [invaders]);

  return (
    <div style={{ position: 'relative', width: CANVAS_WIDTH, height: CANVAS_HEIGHT, backgroundColor: 'black' }}>
      {/* Player */}
      <div style={{
        position: 'absolute',
        left: playerX,
        bottom: 10,
        width: PLAYER_SIZE,
        height: 20,
        backgroundColor: 'blue'
      }} />

      {/* Invaders */}
      {invaders.map((inv, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: inv.x,
          top: inv.y,
          width: INVADER_SIZE,
          height: 20,
          backgroundColor: 'green'
        }} />
      ))}

      {/* Bullets */}
      {bullets.map((bullet, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: bullet.x,
          top: bullet.y,
          width: BULLET_SIZE,
          height: 10,
          backgroundColor: 'red'
        }} />
      ))}

      {/* Score */}
      <div style={{ position: 'absolute', top: 10, left: 10, color: 'white' }}>
        Score: {score}
      </div>

      {gameOver && (
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          color: 'red',
          fontSize: '2em'
        }}>
          GAME OVER
        </div>
      )}
    </div>
  );
};

export default SpaceInvaders;