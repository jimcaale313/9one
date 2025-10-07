import React from 'react';
import { motion } from 'framer-motion';

const WelcomeMessage = () => {
  return (
    <motion.p
      className='text-xl md:text-2xl text-white max-w-2xl mx-auto'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      At 9ONE Café <span className='font-semibold text-purple-300'>Horizons</span>, every cup of coffee and every slice of cake is crafted with care — blending rich flavors, cozy ambiance, and genuine hospitality.
    </motion.p>
  );
};

export default WelcomeMessage;