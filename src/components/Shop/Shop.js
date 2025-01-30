import React, { useState } from 'react';
import './Shop.css';

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: "T-Shirt Tour 2024",
      category: "clothing",
      price: 35,
      image: "/assets/shop/tshirt.jpg",
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 2,
      name: "Album Vinyle",
      category: "music",
      price: 25,
      image: "/assets/shop/vinyl.jpg"
    },
    {
      id: 3,
      name: "Tote Bag",
      category: "accessories",
      price: 20,
      image: "/assets/shop/totebag.jpg"
    }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <section id="shop" className="shop">
      <h2 className="section-title">BOUTIQUE</h2>
      
      <div className="shop-categories">
        <button 
          className={selectedCategory === 'all' ? 'active' : ''}
          onClick={() => setSelectedCategory('all')}
        >
          TOUT
        </button>
        <button 
          className={selectedCategory === 'clothing' ? 'active' : ''}
          onClick={() => setSelectedCategory('clothing')}
        >
          VÊTEMENTS
        </button>
        <button 
          className={selectedCategory === 'music' ? 'active' : ''}
          onClick={() => setSelectedCategory('music')}
        >
          MUSIQUE
        </button>
        <button 
          className={selectedCategory === 'accessories' ? 'active' : ''}
          onClick={() => setSelectedCategory('accessories')}
        >
          ACCESSOIRES
        </button>
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="price">{product.price}€</p>
              {product.sizes && (
                <div className="size-selector">
                  {product.sizes.map(size => (
                    <button key={size}>{size}</button>
                  ))}
                </div>
              )}
              <button className="add-to-cart">AJOUTER AU PANIER</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Shop;