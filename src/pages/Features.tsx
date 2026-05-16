import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { motion } from 'motion/react';
import { Calendar, CheckSquare, Wallet, Camera, Heart, MessageSquare, MapPin, Coffee } from 'lucide-react';

export default function Features() {
  const { t } = useLanguage();

  const allFeatures = [
    {
      icon: <Calendar className="w-10 h-10 text-orange-500" />,
      title: 'Sync Shared Calendars',
      desc: 'Manage appointments, school events, and Khmer holidays in one unified view. Everyone stays on the same page.',
      details: ['Khmer Calendar integration', 'Smart event reminders', 'Sync with Google/Apple iCal']
    },
    {
      icon: <CheckSquare className="w-10 h-10 text-blue-500" />,
      title: 'Gamified Chore Tracking',
      desc: 'Assign tasks to kids and reward them for completions. Make helping around the house fun and rewarding.',
      details: ['Reward points system', 'Recurring tasks', 'Assign to multiple members']
    },
    {
      icon: <Wallet className="w-10 h-10 text-green-500" />,
      title: 'Joint Expense Budgeting',
      desc: 'Track household bills, groceries, and shared expenses. Get clear reports on where the family money goes.',
      details: ['Budget vs Actual reporting', 'Receipt scanning (Premium)', 'Payment reminders']
    },
    {
      icon: <Camera className="w-10 h-10 text-purple-500" />,
      title: 'Private Family Memories',
      desc: 'A secure vault for the families most precious photos and videos. No ads, no data tracking, just memories.',
      details: ['Full resolution storage', 'Comment on moments', 'Milestone auto-grouping']
    },
    {
      icon: <MapPin className="w-10 h-10 text-red-500" />,
      title: 'Smart Location Sharing',
      desc: 'See where everyone is in real-time. Get alerts when the kids arrive safely at school or home.',
      details: ['Geofencing alerts', 'Real-time tracking', 'Battery-safe technology']
    },
    {
       icon: <Coffee className="w-10 h-10 text-[#795548]" />,
       title: 'Family Meal Planner',
       desc: 'Tired of asking "What’s for dinner?". Plan meals for the week and auto-generate grocery lists.',
       details: ['Weekly meal grid', 'Recipe storage', 'Auto-grocery list sync']
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#FDFCFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-[#2D3436] mb-8">One Home for Your Every Need.</h1>
          <p className="text-xl text-[#636E72]">We’ve built every tool with the modern Southeast Asian family in mind — simple, secure, and supportive.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {allFeatures.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[40px] border border-[#E5E1DA] hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-100 transition-all flex flex-col"
            >
              <div className="mb-8 inline-flex p-5 bg-gray-50 rounded-[28px]">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#2D3436] mb-4">{f.title}</h3>
              <p className="text-[#636E72] leading-relaxed mb-8">{f.desc}</p>
              
              <div className="mt-auto pt-8 border-t border-gray-100 space-y-3">
                {f.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-sm font-medium text-[#2D3436]">
                    <div className="w-1.5 h-1.5 bg-[#FF8A65] rounded-full" />
                    {detail}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Teaser */}
        <section className="mt-32 p-12 md:p-24 bg-[#2D3436] rounded-[48px] text-white text-center">
           <h2 className="text-3xl md:text-5xl font-bold mb-12">Works on all your devices.</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {['iOS App', 'Android App', 'Web Portal', 'Apple Watch'].map((device) => (
               <div key={device} className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                 <div className="font-bold">{device}</div>
                 <div className="text-xs text-gray-400">Available Now</div>
               </div>
             ))}
           </div>
        </section>

      </div>
    </div>
  );
}
