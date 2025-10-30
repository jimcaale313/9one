import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
const TikTokIcon = props => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2859 3333" {...props} shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd">
    <path d="M2081 0c55 473 319 755 778 785v532c-266 26-494-60-770-225v995c0 1264-1378 1659-1788 516-52-146-56-394-5-541 45-126 109-215 200-281 93-68 202-100 321-97 122 3 233 40 333 112 102 73 185 169 247 282v-957c-56-289-380-482-736-466-350 16-633 249-633 605 0 353 283 602 633 602s633-249 633-602v-778c21-4 41-8 62-12z" fill="currentColor" />
  </svg>;
const Footer = () => {
  const socialLinks = [{
    icon: Facebook,
    href: 'https://facebook.com/',
    label: 'Facebook'
  }, {
    icon: Instagram,
    href: 'https://instagram.com/nineone_cafe',
    label: 'Instagram'
  }, {
    icon: TikTokIcon,
    href: 'https://tiktok.com/@nineonecafe',
    label: 'TikTok'
  }];
  const quickLinks = [{
    name: 'Home',
    href: '/'
  }, {
    name: 'Menu',
    href: '/menu'
  }];
  return <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img src="https://horizons-cdn.hostinger.com/587f7367-974c-4b76-a36a-4340892fd783/chatgpt-image-oct-4-2025-05_45_20-am-kMZVH.png" alt="9ONE Café Logo" className="h-10 w-auto" />
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Premium coffee culture in the heart of Hargeisa — where every cup tells a story.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map(social => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300" aria-label={social.label}>
                  <social.icon className="w-5 h-5" />
                </a>)}
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} viewport={{
          once: true
        }}>
            <span className="text-lg font-semibold text-green-400 mb-4 block">Quick Links</span>
            <ul className="space-y-3">
              {quickLinks.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>)}
               <li>
                  <a href="#contact" onClick={e => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }} className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                    Contact
                  </a>
                </li>
            </ul>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} viewport={{
          once: true
        }}>
            <span className="text-lg font-semibold text-green-400 mb-4 block">Contact Info</span>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Hargeisa, Somaliland</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">+252 568385</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">info@9onecafe.com</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} viewport={{
          once: true
        }}>
            <span className="text-lg font-semibold text-green-400 mb-4 block">Opening Hours</span>
            <div className="space-y-2 text-gray-300">
              <p>Daily: 7:00 AM - 12:00 AM</p>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} viewport={{
        once: true
      }} className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} 9ONE Café. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>;
};
export default Footer;
