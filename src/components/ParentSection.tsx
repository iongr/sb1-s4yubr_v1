import React from 'react';
import { BookOpen, Shield } from 'lucide-react';

export const ParentSection: React.FC = () => {
  return (
    <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-3xl text-purple-800 mb-4">For Parents</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-start space-x-4">
          <BookOpen size={24} className="text-green-500 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Educational Resources</h3>
            <p className="text-gray-600">Discover how our games support your child's learning and development.</p>
            <a href="#" className="text-blue-500 hover:underline mt-2 inline-block">Learn More</a>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Shield size={24} className="text-red-500 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Safety Information</h3>
            <p className="text-gray-600">Learn about our commitment to providing a safe online environment for children.</p>
            <a href="#" className="text-blue-500 hover:underline mt-2 inline-block">Read Our Safety Guide</a>
          </div>
        </div>
      </div>
    </section>
  );
};