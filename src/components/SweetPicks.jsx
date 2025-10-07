import React from 'react';
import { motion } from 'framer-motion';

const picks = [
  {
    name: 'Chocolate Cake',
    description: 'Rich and moist chocolate cake with fudge layers.',
    imageAlt: 'A slice of rich chocolate fudge cake',
    imageText: 'Decadent chocolate fudge cake on a plate'
  },
  {
    name: 'Mini Cupcake',
    description: 'Delightful mini cupcakes topped with creamy strawberry frosting.',
    imageAlt: 'A small cupcake with pink strawberry frosting',
    imageText: 'Mini cupcake with strawberry frosting and sprinkles'
  },
  {
    name: 'Vanilla Muffin',
    description: 'Soft and fluffy vanilla muffin topped with sugar glaze.',
    imageAlt: 'A fluffy vanilla muffin with a sugar glaze',
    imageText: 'Classic vanilla muffin with a sweet glaze'
  },
  {
    name: 'Fruit Pastry',
    description: 'Creamy pastry loaded with fresh seasonal fruits.',
    imageAlt: 'A pastry topped with various fresh fruits like kiwi and berries',
    imageText: 'Colorful fruit pastry with cream filling'
  }
];

const SweetPicks = () => {
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
            SWEET <span className="text-gradient">PICKS</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our most loved and handpicked cakes, baked fresh every day with premium ingredients. Whether it's a birthday, anniversary, or just a sweet craving — our signature collection is made to impress.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {picks.map((pick, index) => (
            <motion.div
              key={pick.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative h-56">
                <img
                  className="w-full h-full object-cover"
                  alt={pick.imageAlt}
                 src="https://images.unsplash.com/photo-1654356813311-46834a69313c" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{pick.name}</h3>
                <p className="text-gray-600">{pick.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SweetPicks;