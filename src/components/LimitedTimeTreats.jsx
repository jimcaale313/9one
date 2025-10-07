import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Tag, Gift, Truck } from 'lucide-react';

const LimitedTimeTreats = () => {
  const { toast } = useToast();

  const handleAction = (deal) => {
    toast({
      title: `🚧 ${deal} feature isn't implemented yet!`,
      description: "Don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const deals = [
    {
      icon: Tag,
      title: 'Flat 50% OFF!',
      description: 'On all cupcakes & mini cakes — for a limited time only.',
      buttonText: 'Order Now',
      action: 'Order'
    },
    {
      icon: Gift,
      title: 'Buy 1 Get 1 Free!',
      description: 'Grab your favorite pastries and get another one absolutely free every Friday.',
      buttonText: 'Grab This Deal',
      action: 'BOGO Deal'
    },
    {
      icon: Truck,
      title: 'Free Delivery!',
      description: 'Enjoy free delivery on orders above $20. Sweet deal, right?',
      buttonText: 'Shop Now',
      action: 'Free Delivery'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            LIMITED TIME <span className="text-gradient">TREATS</span>
          </h2>
          <p className="text-lg text-gray-600">Sweetest Deals Just for You!</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {deals.map((deal, index) => (
            <motion.div
              key={deal.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 text-center flex flex-col items-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <deal.icon className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{deal.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{deal.description}</p>
              <Button
                onClick={() => handleAction(deal.action)}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 w-full"
              >
                {deal.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LimitedTimeTreats;