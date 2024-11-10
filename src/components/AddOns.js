import React from 'react';

// Decor Add-ons Imports
import candlepath from './assets/images/add-ons/candlepath.jpeg';
import floralcandlepath from './assets/images/add-ons/floralcandlepath.jpeg';
import ledletter from './assets/images/add-ons/ledletter.jpeg';
import lednumbers from './assets/images/add-ons/lednumbers.jpeg';
import partyprops from './assets/images/add-ons/partyprops.jpeg';
import photoclippings from './assets/images/add-ons/photoclippings.jpeg';
import smokeeffect from './assets/images/add-ons/smokeeffect.jpg';

// Cake Imports
import almondcrunch from './assets/images/cakes/almondcrunchcake.jpeg';
import blackforest from './assets/images/cakes/BlackForestCake.jpeg';
import blueberry from './assets/images/cakes/blueberrycake.jpeg';
import butterscotch from './assets/images/cakes/butterscotch.jpeg';
import chocochip from './assets/images/cakes/chocochipcake.jpeg';
import chocolate from './assets/images/cakes/chocolatecake.jpeg';
import pineapple from './assets/images/cakes/pineapplecake.jpeg';
import pistachio from './assets/images/cakes/pistacake.jpeg';
import redvelvet from './assets/images/cakes/redvelvetcake.jpeg';
import strawberry from './assets/images/cakes/strawberryCake.jpeg';
import whiteforest from './assets/images/cakes/whiteforestcake.jpeg';

// Menu Imports
import menu01 from './assets/images/menu/01.jpg';
import menu02 from './assets/images/menu/02.jpg';
import menu03 from './assets/images/menu/03.jpg';
import menu04 from './assets/images/menu/04.jpg';

const addOns = [
  { id: 1, name: 'Candle Path', image: candlepath, price: '₹299' },
  { id: 2, name: 'Floral Candle Path', image: floralcandlepath, price: '₹299' },
  { id: 3, name: 'LED Letters', image: ledletter, price: '₹299' },
  { id: 4, name: 'LED Numbers', image: lednumbers, price: '₹299' },
  { id: 5, name: 'Party Props', image: partyprops, price: '₹299' },
  { id: 6, name: 'Photo Clippings', image: photoclippings, price: '₹299' },
  { id: 7, name: 'Smoke Effect', image: smokeeffect, price: '₹299' },
];

const cakes = [
  { id: 1, name: 'Almond Crunch Cake', image: almondcrunch, price: '₹499' },
  { id: 2, name: 'Black Forest Cake', image: blackforest, price: '₹499' },
  { id: 3, name: 'Blueberry Cake', image: blueberry, price: '₹599' },
  { id: 4, name: 'Butterscotch Cake', image: butterscotch, price: '₹499' },
  { id: 5, name: 'Choco Chip Cake', image: chocochip, price: '₹549' },
  { id: 6, name: 'Chocolate Cake', image: chocolate, price: '₹599' },
  { id: 7, name: 'Pineapple Cake', image: pineapple, price: '₹499' },
  { id: 8, name: 'Pistachio Cake', image: pistachio, price: '₹649' },
  { id: 9, name: 'Red Velvet Cake', image: redvelvet, price: '₹699' },
  { id: 10, name: 'Strawberry Cake', image: strawberry, price: '₹549' },
  { id: 11, name: 'White Forest Cake', image: whiteforest, price: '₹699' },
];

const menu = [
  { id: 1, image: menu01 },
  { id: 2, image: menu02 },
  { id: 3, image: menu03 },
  { id: 4, image: menu04 },
];

const AddOns = () => {
  return (
    <div className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[#f0c137] mb-12 transition-all duration-500 transform hover:scale-105">
          Our Add-Ons
        </h2>

        {/* Decor Add-Ons Section */}
        <h2 className="text-4xl font-bold text-left text-[#f0c137] mb-8">Decors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {addOns.map((addOn) => (
            <div
              key={addOn.id}
              className="bg-[#ededed] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-[#f0c137] duration-300"
            >
              <img
                src={addOn.image}
                alt={addOn.name}
                className="w-full h-48 object-cover bg-black rounded-t-lg transition-all duration-500 transform hover:rotate-3"
              />
              <h3 className="text-xl font-semibold text-black mt-4">{addOn.name}</h3>
              <p className="text-lg text-black mt-2">{addOn.price}</p>
            </div>
          ))}
        </div>

        {/* Cakes Section */}
        <h2 className="text-4xl font-bold text-left text-[#f0c137] my-8">Cakes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cakes.map((cake) => (
            <div
              key={cake.id}
              className="bg-[#ededed] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-[#f0c137] duration-300"
            >
              <img
                src={cake.image}
                alt={cake.name}
                className="w-full h-48 object-cover bg-black rounded-t-lg transition-all duration-500 transform hover:rotate-3"
              />
              <h3 className="text-xl font-semibold text-black mt-4">{cake.name}</h3>
              <p className="text-lg text-black mt-2">{cake.price}</p>
            </div>
          ))}
        </div>

        {/* Menu Section */}
        <h2 className="text-4xl font-bold text-left text-[#f0c137] my-8">Our Menu</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {menu.map((item) => (
            <div
              key={item.id}
              className=" rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-[#000000] duration-300"
            >
              <img
                src={item.image}
                alt={`Menu Item ${item.id}`}
                className="w-full h-64 object-cover bg-black rounded-t-lg transition-all duration-500 transform hover:rotate-3"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddOns;
