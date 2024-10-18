import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-600 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="flex items-center justify-center">
          Made with <Heart size={16} className="text-red-500 mx-1" /> for kids everywhere
        </p>
        <p className="mt-2 text-sm">© 2024 KidPlay Zone. All rights reserved.</p>
      </div>
    </footer>
  );
};