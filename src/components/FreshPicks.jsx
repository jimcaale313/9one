import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom'; // ✅ added for internal navigation

const FreshPicks = () => {
  const products = [
    {
      category: 'Coffee',
      name: '9ONE Signature Cappuccino',
      imageAlt: 'A cup of 9ONE Signature Cappuccino with latte art',
      imageSrc: 'https://images.unsplash.com/photo-1568228156290-45edbd928166'
    },
    {
      category: 'Desserts',
      name: 'Double Chocolate Brownie',
      imageAlt: 'A rich double chocolate brownie on a plate',
      imageSrc: 'https://images.unsplash.com/photo-1688279431233-059ae8385d31'
    },
    {
      category: 'Smoothies',
      name: 'Strawberry Smoothie',
      imageAlt: 'A refreshing strawberry smoothie in a glass',
      imageSrc: 'https://images.unsplash.com/photo-1692001124072-19162bd75bca'
    },
    {
      category: 'Cakes',
      name: 'Carrot Cake Slice',
      imageAlt: 'A slice of carrot cake with cream cheese frosting',
      imageSrc: 'https://images.unsplash.com/photo-1595080623215-c4321eab9fbf'
    },
    {
      category: 'Pastries',
      name: 'Butter Croissant Set',
      imageAlt: 'A set of fresh butter croissants',
      imageSrc: 'https://images.unsplash.com/photo-1588496417403-d04662a2c3ce'
    },
    {
      category: 'Muffins',
      name: 'Chocolate Muffin (2 pcs)',
      imageAlt: 'Two chocolate muffins',
      imageSrc: 'https://images.unsplash.com/photo-1611672410433-9de0deb6192e'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            OUR FRESH <span className="text-gradient">PICKS</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Indulge in our hand-picked selection of freshly baked cakes, cupcakes, and pastries made with the finest ingredients.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt={product.imageAlt}
                  src={product.imageSrc}
                />
              </div>

              {/* Details */}
              <div className="p-6 text-center">
                <p className="text-sm text-green-600 font-semibold mb-2">
                  {product.category}
                </p>
                <h3 className="text-lg font-bold text-gray-800 mb-3 h-14">
                  {product.name}
                </h3>

                {/* ✅ Internal Link to /menu page */}
                <Link to="/menu" className="w-full">
                  <Button
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-full transition-all duration-300"
                  >
                    <Eye className="mr-2 h-5 w-5" />
                    View Full Menu
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreshPicks;
