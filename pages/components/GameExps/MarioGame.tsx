import React, { useState, useEffect, useCallback } from 'react';

interface GameState {
  position: { x: number; y: number };
  velocity: number;
  isJumping: boolean;
  direction: 'left' | 'right';
}

const MarioGame: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    position: { x: 50, y: 340 }, // Start at ground level
    velocity: 0,
    isJumping: false,
    direction: 'right',
  });

  const gravity = -0.8;
  const jumpForce = 15;
  const moveSpeed = 5;
  const groundLevel = 70; // Matches initial Y position
  const marioHeight = 60;

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    setGameState(prev => {
      const newState = { ...prev };
      
      switch(e.key) {
        case 'ArrowLeft':
          newState.position.x = Math.max(0, prev.position.x - moveSpeed);
          newState.direction = 'left';
          break;
        case 'ArrowRight':
          newState.position.x = Math.min(600, prev.position.x + moveSpeed);
          newState.direction = 'right';
          break;
        case ' ':
          if (!prev.isJumping) {
            newState.velocity = jumpForce;
            newState.isJumping = true;
          }
          break;
      }
      return newState;
    });
  }, []);

  const updateGame = useCallback(() => {
    setGameState(prev => {
      let newVelocity = prev.velocity + gravity;
      let newY = prev.position.y + newVelocity;
      
      // Ground collision
      if (newY < groundLevel) {
        newY = groundLevel;
        newVelocity = 0;
        if (prev.isJumping) {
          return { ...prev, position: { ...prev.position, y: newY }, velocity: newVelocity, isJumping: false };
        }
      }

      return {
        ...prev,
        position: { ...prev.position, y: newY },
        velocity: newVelocity,
      };
    });
  }, []);

  useEffect(() => {
    const gameLoop = setInterval(updateGame, 1000/60);
    return () => clearInterval(gameLoop);
  }, [updateGame]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div style={{
      width: '800px',
      height: '400px',
      backgroundColor: 'skyblue',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Ground - now properly aligned with Mario's base */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        width: '100%',
        height: `${groundLevel}px`,
        backgroundColor: 'green',
      }} />
      
      {/* Mario - positioned relative to bottom */}
      <div style={{
        position: 'absolute',
        left: gameState.position.x,
        bottom: gameState.position.y,
        width: '40px',
        height: `${marioHeight}px`,
        backgroundColor: gameState.direction === 'right' ? 'red' : 'darkred',
        transform: `scaleX(${gameState.direction === 'right' ? 1 : -1})`,
        transition: 'left 0.1s linear',
      }} />
    </div>
  );
};

export default MarioGame;