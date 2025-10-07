import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    {
      src: "https://horizons-cdn.hostinger.com/587f7367-974c-4b76-a36a-4340892fd783/3663c90058367fe0a1a16e6b9644260d.jpg",
      alt: "Delicious breakfast spread with pancakes, waffles, and crepes on a wooden table"
    },
    {
      src: "https://horizons-cdn.hostinger.com/587f7367-974c-4b76-a36a-4340892fd783/a150dcb008514fa8c1fb58bda71d6f0c.jpg",
      alt: "Three refreshing cold beverages with 9one branding, including a blue lemonade, caramel coffee, and berry iced tea"
    },
    {
      src: "https://horizons-cdn.hostinger.com/587f7367-974c-4b76-a36a-4340892fd783/afb860cb652725863b9c0980085214d8.jpg",
      alt: "Stack of fluffy pancakes topped with butter, strawberries, and powdered sugar"
    },
    {
      src: "https://horizons-cdn.hostinger.com/587f7367-974c-4b76-a36a-4340892fd783/27f2f417f564ee704cf2bdd4164002a8.jpg",
      alt: "Overhead view of a cafe table with various breakfast dishes and coffee cups"
    },
    {
      src: "https://horizons-cdn.hostinger.com/587f7367-974c-4b76-a36a-4340892fd783/2fa0895932abeddaf8b67671f213f2b9.jpg",
      alt: "Wide shot of a cafe interior with multiple tables set with breakfast items and modern decor"
    },
    {
      src: "https://horizons-cdn.hostinger.com/587f7367-974c-4b76-a36a-4340892fd783/e9226657ee08d5c9d5ff5a5a82984258.jpg",
      alt: "Close-up of a stack of pancakes with strawberries, banana, and syrup, next to a coffee cup"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Our <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a visual journey through our beautiful space and experience the 9one atmosphere
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer h-80"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold text-lg">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;