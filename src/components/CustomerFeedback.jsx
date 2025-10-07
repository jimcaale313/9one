import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const CustomerFeedback = () => {
  const reviews = [
    {
      name: 'Ayaan Mohamed',
      date: 'October 2, 2025',
      feedback:
        'The best café in Hargeisa! The cappuccino was smooth and creamy — absolutely loved the cozy vibe and friendly service.',
      rating: 5,
    },
    {
      name: 'Jimale Osman',
      date: 'july 6, 2025',
      feedback:
        'As a coffee enthusiast, I’ve tried many brews — but 9ONE Café’s V60 pour-over is simply exceptional. You can taste the freshness, balance, and passion in every cup. It’s a true specialty coffee experience right here in Hargeisa or somaliland .',
      rating: 5,
      featured: true,
    },
    {
      name: 'Hodan Yusuf',
      date: 'September 28, 2025',
      feedback:
        '9ONE Café’s browni cake and basbusa is unbeatable. Every bite tastes fresh and delicious — my go-to spot for desserts!',
      rating: 5,
    },
    {
      name: 'Abdi Ahmed',
      date: 'September 25, 2025',
      feedback:
        'Amazing service and rich coffee flavor! Their butter croissant set is perfect for breakfast.',
      rating: 4,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            CUSTOMER <span className="text-gradient">FEEDBACK</span>
          </h2>
          <p className="text-lg text-gray-600">
            Hear what our lovely guests say about their experience at 9ONE Café.
          </p>
        </motion.div>

        {/* Reviews */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-4 text-yellow-400">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">“{review.feedback}”</p>
              <div className="text-sm text-gray-500 mb-2">{review.date}</div>
              <h3 className="text-lg font-semibold text-gray-900">
                — {review.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;
