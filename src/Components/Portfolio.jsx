import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css'; // Import the CSS file

function Portfolio() {
  const [filter, setFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    { id: 1, category: 'brand', imgSrc: '/images/item-1.jpg', name: 'Label Tag Mockup' },
    { id: 2, category: 'design', imgSrc: '/images/item-2.jpg', name: '3D Bag Mockup' },
    { id: 3, category: 'photos', imgSrc: '/images/item-3.jpg', name: 'Coffee Cup Design' },
    { id: 4, category: 'brand', imgSrc: '/images/item-4.jpg', name: 'Label Tag Mockup' },
    { id: 5, category: 'design', imgSrc: '/images/item-5.jpg', name: 'T-shirt Design' },
    { id: 6, category: 'photos', imgSrc: '/images/item-6.jpg', name: 'Packaging Box Mockup' },
  ];

  const filteredItems = filter === 'all' ? items : items.filter(item => item.category === filter);

  return (
    <section className="bg-[#101010] min-h-screen">
      <div className="container px-12 py-20 md:px-8 lg:px-16 mx-auto">
      <Link to="/" className="fixed top-4 right-4 text-white text-5xl font-normal z-20">
          &times;
        </Link>
        {selectedItem && (
          <button
            onClick={() => setSelectedItem(null)}
            className="fixed top-4 right-4 text-white text-5xl font-normal z-20"
            aria-label="Close"
          >
            &times;
          </button>
        )}
        <p className="text-center text-[#7E7E7E] text-lg">
          Showcasing some of my best work
        </p>
        <h1 className="text-center text-white text-5xl font-bold py-4">
          Portfolio
        </h1>
        <div className="flex justify-center">
          <div className="bg-customGreen h-1 animate-continuousExpand"></div>
        </div>

        <ul className="text-gray-400 flex gap-5 py-20 justify-center">
          {['all', 'brand', 'design', 'photos'].map(category => (
            <li key={category}>
              <button
                onClick={() => setFilter(category)}
                className={`focus:outline-none ${filter === category ? 'text-green-500' : ''}`}
                aria-pressed={filter === category}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="portfolio-item">
              <div className="relative">
                <img
                  src={item.imgSrc}
                  alt={`Portfolio Item ${item.id}`}
                  className="w-full h-auto"
                />
                <div className="overlay">
                  <div className="overlay-content">
                    <h5>{item.name}</h5>
                    <Link to="#" onClick={() => setSelectedItem(item)}>
                      More Info
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedItem && (
          <div className="fixed inset-0 bg-[#101010] bg-opacity-80 flex items-center justify-center z-30">
            <div className="p-8 w-96 h-[80%] bg-[#202020] rounded flex flex-col items-center justify-center">
              <img
                src={selectedItem.imgSrc}
                alt={selectedItem.name}
                className="w-full h-auto mb-4"
              />
              <h5 className="text-white text-xl mb-2">{selectedItem.name}</h5>
              <button
                onClick={() => setSelectedItem(null)}
                className="text-[#3CCC4B] mt-4 hover:text-[#50FC00]"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Portfolio;
