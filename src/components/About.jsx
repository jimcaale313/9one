import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Users, Award, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Coffee,
      title: 'Premium Coffee',
      description: 'Carefully selected beans from the finest coffee regions'
    },
    {
      icon: Users,
      title: 'Community Space',
      description: 'A welcoming environment for friends, families, and professionals'
    },
    {
      icon: Award,
      title: 'Quality Service',
      description: 'Exceptional service that exceeds your expectations'
    },
    {
      icon: Clock,
      title: 'Always Fresh',
      description: 'Fresh roasted coffee and daily prepared food items'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-gradient">9one</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Located in the vibrant city of Hargeisa, Somaliland, 9one Cafe represents a new era of coffee culture. 
            We combine modern aesthetics with traditional hospitality to create an unforgettable experience for every guest.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://horizons-cdn.hostinger.com/587f7367-974c-4b76-a36a-4340892fd783/f322aa3880b327d3eef43972aaad0d31.jpg"
              alt="9one Cafe Interior Design"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
            <p className="text-gray-600 leading-relaxed">
              9one Cafe was born from a passion for creating spaces where people connect, ideas flourish, and 
              exceptional coffee is served. Our modern design reflects the progressive spirit of Hargeisa while 
              honoring the rich coffee traditions of the region.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every detail, from our carefully curated interior to our expertly crafted beverages, 
              is designed to provide you with an experience that goes beyond just great coffee.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;