import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { motion } from 'motion/react';
import { Check, Zap, Shield, ShieldCheck, Heart, Users } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Pricing() {
  const { t } = useLanguage();
  const [isYearly, setIsYearly] = React.useState(true);

  const plans = [
    {
      name: t('pricing.free.name'),
      price: '$0',
      desc: 'Perfect for small families getting started.',
      features: [
        'Shared Family Calendar',
        'Up to 5 Family Members',
        'Basic Task Management',
        '2GB Photo Storage',
        'Mobile App Access',
        'Standard Email Support'
      ],
      cta: 'Start Free',
      popular: false
    },
    {
      name: t('pricing.premium.name'),
      price: isYearly ? '$3.99' : '$4.99',
      period: 'per month',
      desc: 'The best experience for busy families.',
      features: [
        'Everything in Basic',
        'Unlimited Family Members',
        'Advanced Task (Rewards & Gamification)',
        'Joint Expense Tracking & Budgeting',
        '50GB Secure Photo Storage',
        'Priority 24/7 Khmer Support',
        'Location Sharing & Geofencing',
        'Meal Planning & Recipe Sync'
      ],
      cta: 'Go Premium',
      popular: true
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#FDFCFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#2D3436] mb-6">{t('pricing.title')}</h1>
          <p className="text-xl text-[#636E72] mb-12 max-w-2xl mx-auto">Choose the plan that fits your family's journey. No hidden fees, cancel anytime.</p>
          
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={cn("text-sm font-bold", !isYearly ? "text-[#FF8A65]" : "text-[#636E72]")}>{t('pricing.monthly')}</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-16 h-8 bg-gray-200 rounded-full relative p-1 transition-colors"
            >
              <motion.div 
                animate={{ x: isYearly ? 32 : 0 }}
                className="w-6 h-6 bg-white rounded-full shadow-sm"
              />
            </button>
            <span className={cn("text-sm font-bold flex items-center gap-2", isYearly ? "text-[#FF8A65]" : "text-[#636E72]")}>
              {t('pricing.yearly')}
              <span className="px-2 py-0.5 bg-green-100 text-green-600 text-[10px] rounded-full uppercase tracking-widest">Best Value</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "relative p-8 md:p-12 rounded-[40px] border transition-all",
                plan.popular 
                  ? "bg-[#2D3436] text-white border-[#2D3436] shadow-2xl scale-105 z-10" 
                  : "bg-white border-[#E5E1DA] text-[#2D3436] hover:border-orange-200"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-[#FF8A65] text-white text-xs font-bold rounded-full uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={cn("text-sm", plan.popular ? "text-gray-400" : "text-[#636E72]")}>{plan.desc}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
                {plan.period && <span className={cn("text-sm", plan.popular ? "text-gray-400" : "text-[#636E72]")}>/{plan.period}</span>}
              </div>

              <button
                className={cn(
                  "w-full py-4 rounded-2xl font-bold mb-10 transition-all active:scale-95",
                  plan.popular 
                    ? "bg-[#FF8A65] text-white hover:bg-[#E76F51] shadow-xl shadow-orange-900/40" 
                    : "bg-orange-50 text-[#FF8A65] hover:bg-orange-100"
                )}
              >
                {plan.cta}
              </button>

              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-6">What's included:</p>
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <div className={cn("mt-0.5 p-0.5 rounded-full", plan.popular ? "bg-[#FF8A65]/20 text-[#FF8A65]" : "bg-orange-50 text-[#FF8A65]")}>
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security & Data Privacy Section */}
        <div className="mt-24 p-12 bg-white rounded-[40px] border border-[#E5E1DA] text-center max-w-4xl mx-auto">
           <div className="inline-flex py-3 px-6 bg-blue-50 rounded-full text-blue-600 font-bold mb-8 items-center gap-2">
             <ShieldCheck className="w-6 h-6" />
             Bank-Level Security & Private Data
           </div>
           <h2 className="text-3xl font-bold mb-8">Your family data is sacred.</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
             <div>
               <div className="font-bold mb-2">End-to-End Encryption</div>
               <p className="text-sm text-[#636E72]">Your private photos and chats are encrypted and never shared with third parties.</p>
             </div>
             <div>
                <div className="font-bold mb-2">GDPR Compliant</div>
                <p className="text-sm text-[#636E72]">We follow strict international data protection laws to keep your family safe.</p>
             </div>
             <div>
                <div className="font-bold mb-2">Khmer Privacy Policy</div>
                <p className="text-sm text-[#636E72]">Full privacy terms available in Khmer for complete transparency.</p>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
}
