import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../components/LanguageContext';
import { Heart, Users, ShieldCheck, ArrowRight, CheckCircle2, Mail, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(step + 1);
    }, 1000);
  };

  const handleComplete = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/demo');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex items-center justify-center p-4 pt-32 pb-20">
      <div className="max-w-xl w-full bg-white rounded-[40px] shadow-2xl border border-[#E5E1DA] overflow-hidden">
        <div className="p-8 md:p-12">
          {/* Progress Bar */}
          <div className="flex gap-2 mb-10">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                  s <= step ? 'bg-[#FF8A65]' : 'bg-gray-100'
                }`}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div>
                  <h1 className="text-3xl font-bold text-[#2D3436] mb-2">{t('signup.step1.title')}</h1>
                  <p className="text-[#636E72]">{t('signup.step1.sub')}</p>
                </div>

                <form onSubmit={handleNext} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#2D3436]">Family Name</label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        required
                        type="text"
                        placeholder="e.g. The Hean Family"
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-orange-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#2D3436]">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          required
                          type="email"
                          placeholder="name@email.com"
                          className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-orange-200"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#2D3436]">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          required
                          type="password"
                          placeholder="••••••••"
                          className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-orange-200"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    disabled={loading}
                    className="w-full py-5 bg-[#FF8A65] text-white rounded-2xl font-bold hover:bg-[#E76F51] transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Continue <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>

                <div className="flex items-center gap-2 p-4 bg-blue-50 rounded-2xl text-blue-600 text-sm">
                  <ShieldCheck className="w-5 h-5 shrink-0" />
                  Your data is encrypted and protected by Cambodian privacy laws.
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div>
                  <h1 className="text-3xl font-bold text-[#2D3436] mb-2">{t('signup.step2.title')}</h1>
                  <p className="text-[#636E72]">{t('signup.step2.sub')}</p>
                </div>

                <div className="space-y-4">
                   {[1, 2].map((i) => (
                    <div key={i} className="flex gap-2">
                      <div className="flex-1 relative">
                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          placeholder="Member email address"
                          className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-orange-200"
                        />
                      </div>
                      <select className="bg-gray-100 border-none rounded-2xl px-4 text-sm font-bold">
                        <option>Parent</option>
                        <option>Teen</option>
                        <option>Child</option>
                      </select>
                    </div>
                  ))}
                  
                  <button className="flex items-center gap-2 text-[#FF8A65] font-bold text-sm">
                    <Heart className="w-4 h-4 fill-current" /> Add another family member
                  </button>
                </div>

                <div className="pt-4 space-y-4">
                  <button
                    onClick={handleNext}
                    className="w-full py-5 bg-[#FF8A65] text-white rounded-2xl font-bold hover:bg-[#E76F51] transition-all"
                  >
                    Send Invitations
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="w-full py-3 text-[#636E72] font-semibold hover:text-[#2D3436]"
                  >
                    I'll do this later
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="w-12 h-12 text-green-500" />
                </div>
                <h1 className="text-4xl font-bold text-[#2D3436] mb-4">{t('signup.step3.title')}</h1>
                <p className="text-[#636E72] mb-12 max-w-sm mx-auto">
                  {t('signup.step3.sub')}
                </p>

                <button
                  onClick={handleComplete}
                  className="w-full py-5 bg-[#2D3436] text-white rounded-2xl font-bold hover:bg-black transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    "Go to Dashboard"
                  )}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
