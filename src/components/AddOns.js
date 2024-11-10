import React from 'react';
import candlepath from './assets/images/add-ons/candlepath.jpeg';
import floralcandlepath from './assets/images/add-ons/floralcandlepath.jpeg';
import ledletter from './assets/images/add-ons/ledletter.jpeg';
import lednumbers from './assets/images/add-ons/lednumbers.jpeg';
import partyprops from './assets/images/add-ons/partyprops.jpeg';
import photoclippings from './assets/images/add-ons/photoclippings.jpeg';
import smokeeffect from './assets/images/add-ons/smokeeffect.jpg';

const addOns = [
  {
    id: 1,
    name: 'Candle Path',
    image: candlepath,
    price: '₹299',
  },
  {
    id: 2,
    name: 'Floral Candle Path',
    image: floralcandlepath,
    price: '₹299',
  },
  {
    id: 3,
    name: 'LED Letters',
    image: ledletter,
    price: '₹299',
  },
  {
    id: 4,
    name: 'LED Numbers',
    image: lednumbers,
    price: '₹299',
  },
  {
    id: 5,
    name: 'Party Props',
    image: partyprops,
    price: '₹299',
  },
  {
    id: 6,
    name: 'Photo Clippings',
    image: photoclippings,
    price: '₹299',
  },
  {
    id: 7,
    name: 'Smoke Effect',
    image: smokeeffect,
    price: '₹299',
  },
];

const AddOns = () => {
  return (
    <div className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[#f0c137] mb-12 transition-all duration-500 transform hover:scale-105">
          Our Add-Ons
        </h2>

        {/* Add-Ons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {addOns.map((addOn) => (
            <div
              key={addOn.id}
              className="bg-[#fff] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-[#f0c137] duration-300"
            >
              <img
                src={addOn.image}
                alt={addOn.name}
                className="w-full h-48 object-cover bg-black rounded-t-lg transition-all duration-500 transform hover:rotate-3"
              />
              <h3 className="text-xl font-semibold text-clack mt-4">{addOn.name}</h3>
              <p className="text-lg text-black mt-2">{addOn.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddOns;
