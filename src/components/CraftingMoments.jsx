import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { PlayCircle, X } from 'lucide-react';

const CraftingMoments = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Crafting Moments, At <span className="text-green-600">9ONECAFE</span>
            </h2>
            
            <p className="text-gray-500 mb-8">
              At 9ONE Café, each creation reflects our passion for flavor and quality — 
              where every cup and slice tells a story.
            </p>

            {/* Watch Button */}
            <Button
              onClick={() => setIsOpen(true)}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <PlayCircle className="mr-2 h-6 w-6" />
              Watch the Story
            </Button>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-80 lg:h-full rounded-2xl shadow-2xl overflow-hidden"
          >
            <img
              className="w-full h-full object-cover"
              alt="A baker decorating a cake with precision"
              src="/videos/9oneimage.jpeg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Video Container */}
            <motion.div
              className="relative bg-black rounded-xl shadow-2xl overflow-hidden w-[90%] md:w-[70%] max-w-3xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button (above video) */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition z-50"
                style={{ zIndex: 60 }}
              >
                <X className="h-6 w-6" />
              </button>

              {/* Local Video Player */}
              <video
                controls
                autoPlay
                className="w-full h-auto z-40"
                style={{ position: 'relative' }}
              >
                <source src="/videos/9one-story.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CraftingMoments;
