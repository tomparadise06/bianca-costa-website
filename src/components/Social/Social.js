import React from 'react';

const Social = () => {
  return (
    <section id="social" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Réseaux Sociaux</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Instagram Feed */}
          <div className="social-card">
            <h3 className="text-xl font-bold mb-4">Instagram</h3>
            {/* Intégration Instagram */}
          </div>
          {/* Autres réseaux sociaux */}
        </div>
      </div>
    </section>
  );
};

export default Social;