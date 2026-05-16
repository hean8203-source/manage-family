import React from 'react';
import { useLanguage } from './LanguageContext';
import { Heart, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-[#2D3436] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#FF8A65] rounded-xl flex items-center justify-center">
                <Heart className="text-white w-6 h-6" fill="currentColor" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Manage <span className="text-[#FF8A65]">Family</span>
              </span>
            </Link>
            <p className="text-[#B2BEC3] max-w-sm mb-8">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF8A65] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF8A65] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF8A65] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">{t('nav.features')}</h4>
            <ul className="space-y-4 text-[#B2BEC3]">
              <li><Link to="/features" className="hover:text-white transition-colors">{t('features.calendar.title')}</Link></li>
              <li><Link to="/features" className="hover:text-white transition-colors">{t('features.tasks.title')}</Link></li>
              <li><Link to="/features" className="hover:text-white transition-colors">{t('features.expenses.title')}</Link></li>
              <li><Link to="/features" className="hover:text-white transition-colors">{t('features.memories.title')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-[#B2BEC3]">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[#B2BEC3] text-sm">
          <p>{t('footer.rights')}</p>
          <div className="flex gap-8">
            <span>Made with ❤️ for Families</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
