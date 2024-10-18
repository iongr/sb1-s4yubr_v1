import React from 'react';
import { Gamepad2 } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-purple-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Gamepad2 size={32} className="text-yellow-300" />
          <span className="text-2xl font-bold">KidPlay Zone</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-yellow-300 transition-colors duration-300">Home</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition-colors duration-300">Games</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition-colors duration-300">For Parents</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};