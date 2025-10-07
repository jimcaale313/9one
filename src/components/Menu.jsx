import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');
  const { toast } = useToast();

  const handleOrder = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const categories = [
    { id: 'coffee', name: 'Coffee' },
    { id: 'beverages', name: 'Beverages' },
    { id: 'food', name: 'Food' },
    { id: 'desserts', name: 'Desserts' }
  ];

  const menuItems = {
    coffee: [
      { name: 'Espresso', price: '$3.50', description: 'Rich and bold single shot' },
      { name: 'Cappuccino', price: '$4.50', description: 'Perfect balance of espresso and steamed milk' },
      { name: 'Latte', price: '$5.00', description: 'Smooth espresso with velvety milk foam' },
      { name: 'Americano', price: '$4.00', description: 'Espresso with hot water for a clean taste' },
      { name: 'Mocha', price: '$5.50', description: 'Chocolate and espresso harmony' },
      { name: 'Macchiato', price: '$4.75', description: 'Espresso marked with a dollop of foam' }
    ],
    beverages: [
      { name: 'Fresh Orange Juice', price: '$4.00', description: 'Freshly squeezed oranges' },
      { name: 'Green Tea', price: '$3.00', description: 'Premium loose leaf green tea' },
      { name: 'Iced Tea', price: '$3.50', description: 'Refreshing cold brewed tea' },
      { name: 'Smoothie Bowl', price: '$6.50', description: 'Mixed berry smoothie with toppings' },
      { name: 'Hot Chocolate', price: '$4.50', description: 'Rich Belgian chocolate drink' },
      { name: 'Mint Lemonade', price: '$4.25', description: 'Fresh mint and lemon refresher' }
    ],
    food: [
      { name: 'Avocado Toast', price: '$8.50', description: 'Sourdough with fresh avocado and herbs' },
      { name: 'Breakfast Sandwich', price: '$9.00', description: 'Egg, cheese, and choice of meat' },
      { name: 'Caesar Salad', price: '$10.50', description: 'Crisp romaine with classic dressing' },
      { name: 'Grilled Panini', price: '$11.00', description: 'Choice of fillings on artisan bread' },
      { name: 'Soup of the Day', price: '$7.50', description: 'Chef\'s daily selection' },
      { name: 'Quinoa Bowl', price: '$12.00', description: 'Healthy grain bowl with vegetables' }
    ],
    desserts: [
      { name: 'Tiramisu', price: '$6.50', description: 'Classic Italian coffee-flavored dessert' },
      { name: 'Chocolate Cake', price: '$5.50', description: 'Rich dark chocolate layer cake' },
      { name: 'Cheesecake', price: '$6.00', description: 'New York style with berry compote' },
      { name: 'Croissant', price: '$3.50', description: 'Buttery French pastry' },
      { name: 'Muffin', price: '$4.00', description: 'Daily selection of fresh baked muffins' },
      { name: 'Cookies', price: '$2.50', description: 'Homemade chocolate chip cookies' }
    ]
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-gradient">Menu</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted selection of premium beverages and delicious food items
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'border-green-600 text-green-600 hover:bg-green-50'
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Menu Items */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {menuItems[activeCategory].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-xl font-semibold text-gray-900">{item.name}</h4>
                <span className="text-lg font-bold text-green-600">{item.price}</span>
              </div>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <Button
                onClick={handleOrder}
                size="sm"
                className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg"
              >
                Order Now
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;