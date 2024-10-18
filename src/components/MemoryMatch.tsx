import React, { useState, useEffect } from 'react';
import { Shapes, Home } from 'lucide-react';

const CARDS = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];

interface MemoryMatchProps {
  onBack: () => void;
}

const MemoryMatch: React.FC<MemoryMatchProps> = ({ onBack }) => {
  const [cards, setCards] = useState<string[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [solved, setSolved] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const shuffledCards = [...CARDS, ...CARDS]
      .sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setFlipped([]);
    setSolved([]);
    setMoves(0);
  };

  const handleCardClick = (index: number) => {
    if (flipped.length === 2 || flipped.includes(index) || solved.includes(index)) return;
    
    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);
    setMoves((prevMoves) => prevMoves + 1);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (cards[first] === cards[second]) {
        setSolved((prevSolved) => [...prevSolved, first, second]);
      }
      setTimeout(() => setFlipped([]), 1000);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl text-purple-800">Memory Match</h1>
        <button 
          onClick={onBack}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors flex items-center"
        >
          <Home size={20} className="mr-2" /> Back to Home
        </button>
      </div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl">Moves: {moves}</p>
        <button 
          onClick={initializeGame}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
        >
          New Game
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`h-24 flex items-center justify-center text-4xl cursor-pointer rounded-lg transition-all duration-300 ${
              flipped.includes(index) || solved.includes(index)
                ? 'bg-yellow-300'
                : 'bg-purple-600'
            }`}
            onClick={() => handleCardClick(index)}
          >
            {flipped.includes(index) || solved.includes(index) ? card : <Shapes size={32} className="text-white" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryMatch;