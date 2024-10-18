import React from 'react';
import { Puzzle, Rocket, Brain, Shapes } from 'lucide-react';

const games = [
  { id: 1, name: 'Puzzle Adventure', icon: Puzzle, color: 'bg-blue-400' },
  { id: 2, name: 'Space Explorer', icon: Rocket, color: 'bg-green-400' },
  { id: 3, name: 'Brain Teasers', icon: Brain, color: 'bg-yellow-400' },
  { id: 4, name: 'Memory Match', icon: Shapes, color: 'bg-pink-400' },
];

interface GameGridProps {
  onGameSelect: (gameName: string) => void;
}

export const GameGrid: React.FC<GameGridProps> = ({ onGameSelect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      {games.map((game) => (
        <div 
          key={game.id} 
          className={`game-button ${game.color} p-6 flex flex-col items-center justify-center cursor-pointer`}
          onClick={() => onGameSelect(game.name)}
        >
          <game.icon size={48} className="text-white mb-4" />
          <h3 className="text-xl font-bold text-white text-center">{game.name}</h3>
        </div>
      ))}
    </div>
  );
};