import React from 'react';

const Tour = () => {
  return (
    <section id="tour" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">World Tour 2024</h2>
        <div className="grid gap-6">
          {/* Dates de tournée */}
          <div className="tour-date p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold">Paris, France</h3>
            <p className="text-lg">15 Mars 2024 - L'Olympia</p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded">
              Billets
            </button>
          </div>
          {/* Ajoutez d'autres dates ici */}
        </div>
      </div>
    </section>
  );
};

export default Tour;