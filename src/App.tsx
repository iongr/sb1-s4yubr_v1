import React, { useState } from 'react';
import { GameGrid } from './components/GameGrid';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ParentSection } from './components/ParentSection';
import MemoryMatch from './components/MemoryMatch';

function App() {
  const [currentGame, setCurrentGame] = useState<string | null>(null);

  const handleBackToHome = () => {
    setCurrentGame(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {currentGame === 'Memory Match' ? (
          <MemoryMatch onBack={handleBackToHome} />
        ) : (
          <>
            <h1 className="text-4xl md:text-6xl text-center text-purple-800 mb-8 animate-bounce">Welcome to KidPlay Zone!</h1>
            <GameGrid onGameSelect={setCurrentGame} />
            <ParentSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;