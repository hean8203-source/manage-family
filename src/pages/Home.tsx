import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../components/LanguageContext';
import { Calendar, CheckSquare, Wallet, Camera, ArrowRight, Star, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-[#FF8A65]" />,
      title: t('features.calendar.title'),
      desc: t('features.calendar.desc'),
    },
    {
      icon: <CheckSquare className="w-8 h-8 text-[#FF8A65]" />,
      title: t('features.tasks.title'),
      desc: t('features.tasks.desc'),
    },
    {
      icon: <Wallet className="w-8 h-8 text-[#FF8A65]" />,
      title: t('features.expenses.title'),
      desc: t('features.expenses.desc'),
    },
    {
      icon: <Camera className="w-8 h-8 text-[#FF8A65]" />,
      title: t('features.memories.title'),
      desc: t('features.memories.desc'),
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full text-[#FF8A65] text-sm font-bold mb-6">
              <Star className="w-4 h-4 fill-current" />
              Rated #1 Family App in Cambodia
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#2D3436] leading-[1.1] mb-8">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-[#636E72] leading-relaxed mb-10 max-w-lg">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/signup"
                className="px-8 py-5 bg-[#FF8A65] text-white rounded-full text-lg font-bold hover:bg-[#E76F51] transition-all flex items-center justify-center gap-2 group hover:shadow-xl hover:shadow-orange-200"
              >
                {t('hero.cta')}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/demo"
                className="px-8 py-5 bg-white border-2 border-[#E5E1DA] text-[#2D3436] rounded-full text-lg font-bold hover:border-[#FF8A65] hover:text-[#FF8A65] transition-all flex items-center justify-center gap-2"
              >
                View Live Demo
              </Link>
            </div>
            <p className="text-sm text-[#B2BEC3]">{t('hero.noCard')}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://picsum.photos/seed/happyfamily/800/800"
                alt="Happy Family"
                className="w-full h-full object-cover aspect-square"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF8A65]/20 to-transparent pointer-events-none" />
            </div>
            
            {/* Floating UI elements for "SaaS visual" */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-sm font-bold">New Memory Added!</span>
              </div>
              <img src="https://picsum.photos/seed/moment/100/100" className="w-40 h-24 object-cover rounded-lg" referrerPolicy="no-referrer" />
            </motion.div>

             <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-10 -left-10 bg-[#2D3436] text-white p-6 rounded-2xl shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-[#FF8A65]" />
                <span className="text-lg font-bold">Family Chat</span>
              </div>
              <p className="text-sm text-gray-400">Mom: Who’s getting groceries today?</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-y border-[#E5E1DA] py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#2D3436] mb-2">{t('stats.families')}</div>
            <div className="text-[#636E72] font-medium">{t('stats.familiesLabel')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#2D3436] mb-2">{t('stats.tasks')}</div>
            <div className="text-[#636E72] font-medium">{t('stats.tasksLabel')}</div>
          </div>
          <div className="text-center">
             <div className="text-4xl font-bold text-[#2D3436] mb-2">99.9%</div>
             <div className="text-[#636E72] font-medium">Data Security</div>
          </div>
          <div className="text-center">
             <div className="text-4xl font-bold text-[#2D3436] mb-2">24/7</div>
             <div className="text-[#636E72] font-medium">Khmer Support</div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#FDFCFB]/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D3436] mb-6">{t('features.title')}</h2>
            <div className="w-24 h-2 bg-[#FF8A65] mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-10 bg-white rounded-[32px] border border-[#E5E1DA] shadow-sm hover:shadow-xl hover:shadow-orange-100 transition-all"
              >
                <div className="mb-6 inline-flex p-4 bg-orange-50 rounded-2xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2D3436] mb-4">{feature.title}</h3>
                <p className="text-[#636E72] leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Teaser */}
      <section className="py-24 bg-[#2D3436] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h2 className="text-3xl md:text-5xl font-bold mb-16">Trusted by 12k+ Families</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[1, 2, 3].map((i) => (
               <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 text-left">
                  <div className="flex gap-1 mb-6 text-[#FF8A65]">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-lg italic mb-6">"Since we started using Manage the Family, our home in Phnom Penh has been so much more organized. The Khmer calendar integration is a life-saver!"</p>
                  <div className="flex items-center gap-4">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} className="w-12 h-12 rounded-full" referrerPolicy="no-referrer" />
                    <div>
                      <div className="font-bold">Sovan M.</div>
                      <div className="text-sm text-gray-400">Family of 5</div>
                    </div>
                  </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#FF8A65] to-[#E76F51] rounded-[48px] p-12 md:p-24 text-center text-white relative overflow-hidden">
           <div className="relative z-10">
             <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to transform your family life?</h2>
             <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">Join the modern Cambodian families managing their life with ease and peace of mind.</p>
             <Link
                to="/signup"
                className="inline-flex items-center gap-2 px-10 py-6 bg-white text-[#FF8A65] rounded-full text-xl font-bold hover:shadow-2xl transition-all active:scale-95"
              >
                {t('nav.startFree')}
                <Zap className="w-6 h-6 fill-current" />
              </Link>
           </div>
           
           {/* Abstract shapes */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl" />
        </div>
      </section>
    </div>
  );
}
