import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const data = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "✅ Message Sent!",
          description: "Thank you for reaching out. We'll get back to you soon!",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      toast({
        title: "❌ Oops! Something went wrong.",
        description: "Could not send your message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: MapPin, title: 'Location', details: 'Hargeisa, Somaliland' },
    { icon: Phone, title: 'Phone', details: '+252 638833831' },
    { icon: Mail, title: 'Email', details: 'info@9onecafe.com' },
    { icon: Clock, title: 'Hours', details: '7:00 AM - 12:00 AM Daily' }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Visit us, call us, or send us a message.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-800">{info.title}</p>
                    <p className="text-gray-600">{info.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Send a Message</h3>
            <form 
              action="https://formspree.io/f/info@9onecafe.com" 
              method="POST"
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors bg-white" placeholder="Your Name" required />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors bg-white" placeholder="Your Email" required />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none bg-white" placeholder="Your Message..." required />
              </div>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors text-base">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;