import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const menuImages = [
  { id: 1, src: "https://horizons-cdn.hostinger.com/587f7367-974c-4b76-a36a-4340892fd783/6a47bc5196251d019ac1fbc87dfe99c0.jpg", alt: "9ONE Cafe Menu Cover" },
  { id: 2, src: "https://horizons-cdn.hostinger.com/587f7367-974c-4b76-a36a-4340892fd783/8defaa50bf43fd09dbf3be4f94122062.jpg", alt: "9ONE Cafe Breakfast Menu" },
  { id: 3, src: "https://horizons-cdn.hostinger.com/587f7367-974c-4b76-a36a-4340892fd783/8f482c16c9cbb0d252a6989b311c16b8.jpg", alt: "9ONE Cafe Breakfast Menu Part 2" },
  { id: 4, src: "https://horizons-cdn.hostinger.com/587f7367-974c-4b76-a36a-4340892fd783/128006d2ac0bd5f0679d8d30efbda6f9.jpg", alt: "9ONE Cafe Main Course and Pasta Menu" },
  { id: 5, src: "https://horizons-cdn.hostinger.com/587f7367-974c-4b76-a36a-4340892fd783/b797825b3e8abe7778a89954d37dada1.jpg", alt: "9ONE Cafe Burgers and Sandwiches Menu" },
  { id: 6, src: "https://horizons-cdn.hostinger.com/587f7367-974c-4b76-a36a-4340892fd783/767b121885807734f485be5c713ed2c3.jpg", alt: "9ONE Cafe Hot Coffee and Ice Lattes Menu" },
  { id: 7, src: "https://horizons-cdn.hostinger.com/587f7367-974c-4b76-a36a-4340892fd783/be39069d0eae786f92b48c965b373a14.jpg", alt: "9ONE Cafe Hot Tea, Ice Teas and Cakes Menu" },
  { id: 9, src: "https://horizons-cdn.hostinger.com/587f7367-974c-4b76-a36a-4340892fd783/3615894efba4e6714e3e2bd6f9a0a725.jpg", alt: "9ONE Cafe Frappe, Ice Lattes and Mojitos Menu" },
  { id: 10, src: "https://horizons-cdn.hostinger.com/587f7367-974c-4b76-a36a-4340892fd783/0e363917a4d45588b17d7b84dc866e20.jpg", alt: "9ONE Cafe Hot Tea, Ice Teas and Cakes Menu Part 2" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const MenuPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Helmet>
        <title>Our Menu - 9one Cafe</title>
        <meta name="description" content="Explore the delicious offerings at 9one Cafe. Browse our full menu gallery." />
      </Helmet>
      <div className="pt-24 bg-gray-50 min-h-screen">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
                Our <span className="text-gradient">Menu</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover our carefully crafted selection of premium beverages and delicious food items. Click any image to view fullscreen.
              </p>
            </motion.div>
          </div>

          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuImages.map((image) => (
                <motion.div
                  key={image.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer relative"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="aspect-w-3 aspect-h-4">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-3 bg-white/80 rounded-full">
                      <ZoomIn className="w-8 h-8 text-gray-900" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1, transition: { delay: 0.3 } }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute top-4 right-4 z-10 text-white bg-black/50 rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
              <span className="sr-only">Close</span>
            </motion.button>
            <motion.div
              layoutId={`card-${selectedImage.id}`}
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MenuPage;