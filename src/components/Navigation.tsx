import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { Menu, X, Globe, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export const Navigation = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.features'), path: '/features' },
    { name: t('nav.pricing'), path: '/pricing' },
    { name: t('nav.demo'), path: '/demo' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFCFB]/80 backdrop-blur-md border-b border-[#E5E1DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-[#FF8A65] rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
              <Heart className="text-white w-6 h-6 " fill="currentColor" />
            </div>
            <span className="text-xl font-bold tracking-tight text-[#2D3436]">
              Manage <span className="text-[#FF8A65]">Family</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium transition-colors hover:text-[#FF8A65]",
                    isActive ? "text-[#FF8A65]" : "text-[#636E72]"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
            
            <div className="h-6 w-px bg-[#E5E1DA]" />
            
            <button
              onClick={() => setLanguage(language === 'en' ? 'km' : 'en')}
              className="flex items-center gap-2 text-sm font-medium text-[#636E72] hover:text-[#FF8A65] transition-colors"
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? 'ភាសាខ្មែរ' : 'English'}
            </button>

            <Link
              to="/signup"
              className="px-6 py-2.5 bg-[#FF8A65] text-white rounded-full text-sm font-semibold hover:bg-[#E76F51] transition-all hover:shadow-lg hover:shadow-orange-200 active:scale-95"
            >
              {t('nav.startFree')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
             <button
              onClick={() => setLanguage(language === 'en' ? 'km' : 'en')}
              className="p-2 text-[#636E72]"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#636E72]"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FDFCFB] border-b border-[#E5E1DA]"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "block px-3 py-4 text-base font-medium rounded-lg",
                      isActive ? "bg-orange-50 text-[#FF8A65]" : "text-[#636E72] hover:bg-gray-50"
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="pt-4">
                <Link
                  to="/signup"
                  className="block w-full text-center px-6 py-4 bg-[#FF8A65] text-white rounded-xl text-base font-semibold"
                >
                  {t('nav.startFree')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
