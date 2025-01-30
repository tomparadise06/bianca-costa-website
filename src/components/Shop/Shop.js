import React from 'react';

const Shop = () => {
  return (
    <section id="shop" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Boutique</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Articles */}
          <div className="shop-item">
            <img src="/merch-1.jpg" alt="Merch" className="w-full h-auto" />
            <h3 className="text-xl font-bold mt-4">T-Shirt Tour 2024</h3>
            <p className="text-lg">29.99 €</p>
            <button className="mt-4 px-6 py-2 bg-black text-white rounded">
              Acheter
            </button>
          </div>
          {/* Ajoutez d'autres articles ici */}
        </div>
      </div>
    </section>
  );
};

export default Shop;