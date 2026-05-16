import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'km';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.demo': 'Interactive Demo',
    'nav.login': 'Login',
    'nav.startFree': 'Start Free',
    'hero.title': 'One App for Your Whole Family',
    'hero.subtitle': 'Simplify family life in Cambodia. Manage shared calendars, tasks, expenses, and memories all in one place.',
    'hero.cta': 'Create Free Family Account',
    'hero.noCard': 'No credit card needed',
    'stats.families': '12,450+',
    'stats.familiesLabel': 'Cambodian Families',
    'stats.tasks': '1M+',
    'stats.tasksLabel': 'Tasks Completed',
    'features.title': 'Everything Your Family Needs',
    'features.calendar.title': 'Shared Calendar',
    'features.calendar.desc': 'Sync everyone’s schedule, from school events to Khmer holidays.',
    'features.tasks.title': 'Task Manager',
    'features.tasks.desc': 'Assign chores and track progress with fun rewards.',
    'features.expenses.title': 'Expense Sharing',
    'features.expenses.desc': 'Budget together and track household spending easily.',
    'features.memories.title': 'Milestone Tracking',
    'features.memories.desc': 'Save precious family moments in a private secure space.',
    'demo.title': 'Try It Yourself',
    'demo.subtitle': 'Experience how Manage the Family works with our interactive dashboard.',
    'pricing.title': 'Simple, Transparent Pricing',
    'pricing.monthly': 'Monthly',
    'pricing.yearly': 'Yearly (Save 20%)',
    'pricing.free.name': 'Basic',
    'pricing.free.price': '$0',
    'pricing.premium.name': 'Premium',
    'pricing.premium.price': '$4.99',
    'pricing.cta': 'Get Started',
    'footer.tagline': 'Simplifying family harmony across Southeast Asia.',
    'footer.rights': '© 2026 Manage the Family. All rights reserved.',
    'signup.step1.title': 'Create Your Family Space',
    'signup.step1.sub': 'Start your 14-day free trial of Premium. No commitment.',
    'signup.step2.title': 'Invite Your Family',
    'signup.step2.sub': 'Organization is better together. Add your family members now or later.',
    'signup.step3.title': 'Welcome Home!',
    'signup.step3.sub': 'Your family space is ready. You\'re now being redirected to your dashboard.',
    'signup.cta': 'Continue',
    'signup.invite': 'Send Invitations',
  },
  km: {
    'nav.home': 'ទំព័រដើម',
    'nav.features': 'មុខងារ',
    'nav.pricing': 'តម្លៃ',
    'nav.demo': 'សាកល្បង',
    'nav.login': 'ចូលប្រើ',
    'nav.startFree': 'ចាប់ផ្ដើមឥតគិតថ្លៃ',
    'hero.title': 'កម្មវិធីតែមួយសម្រាប់គ្រួសារទាំងមូលរបស់អ្នក',
    'hero.subtitle': 'សម្រួលជីវិតគ្រួសារក្នុងប្រទេសកម្ពុជា។ គ្រប់គ្រងប្រតិទិនរួម ភារកិច្ច ចំណាយ និងការចងចាំទាំងអស់នៅកន្លែងតែមួយ។',
    'hero.cta': 'បង្កើតគណនីគ្រួសារឥតគិតថ្លៃ',
    'hero.noCard': 'មិនត្រូវការកាតឥណទាន',
    'stats.families': '១២,៤៥០+',
    'stats.familiesLabel': 'គ្រួសារកម្ពុជា',
    'stats.tasks': '១លាន+',
    'stats.tasksLabel': 'ភារកិច្ចបានបញ្ចប់',
    'features.title': 'អ្វីគ្រប់យ៉ាងដែលគ្រួសារអ្នកត្រូវការ',
    'features.calendar.title': 'ប្រតិទិនរួមគ្នា',
    'features.calendar.desc': 'ធ្វើសមកាលកម្មកាលវិភាគរបស់អ្នករាល់គ្នា ពីព្រឹត្តិការណ៍សាលារហូតដល់បុណ្យជាតិ។',
    'features.tasks.title': 'អ្នកគ្រប់គ្រងភារកិច្ច',
    'features.tasks.desc': 'ចាត់ចែងការងារផ្ទះ និងតាមដានវឌ្ឍនភាពជាមួយរង្វាន់សប្បាយៗ។',
    'features.expenses.title': 'ការចែករំលែកចំណាយ',
    'features.expenses.desc': 'រៀបចំថវិកាជាមួយគ្នា និងតាមដានការចំណាយក្នុងផ្ទះយ៉ាងងាយស្រួល។',
    'features.memories.title': 'ការតាមដានអនុស្សាវរីយ៍',
    'features.memories.desc': 'រក្សាទុកគ្រាគ្រួសារដ៏មានតម្លៃនៅក្នុងកន្លែងសុវត្ថិភាពឯកជន។',
    'demo.title': 'សាកល្បងដោយខ្លួនឯង',
    'demo.subtitle': 'បទពិសោធន៍ពីរបៀបដែល "គ្រប់គ្រងគ្រួសារ" ដំណើរការជាមួយផ្ទាំងគ្រប់គ្រងអន្តរកម្មរបស់យើង។',
    'pricing.title': 'តម្លៃសាមញ្ញ និងតម្លាភាព',
    'pricing.monthly': 'ប្រចាំខែ',
    'pricing.yearly': 'ប្រចាំឆ្នាំ (បញ្ចុះតម្លៃ ២០%)',
    'pricing.free.name': 'មូលដ្ឋាន',
    'pricing.free.price': '$០',
    'pricing.premium.name': 'ពិសេស',
    'pricing.premium.price': '$៤.៩៩',
    'pricing.cta': 'ចាប់ផ្ដើម',
    'footer.tagline': 'សម្រួលដល់ភាពចុះសម្រុងគ្នានៃគ្រួសារនៅទូទាំងអាស៊ីអាគ្នេយ៍។',
    'footer.rights': '© ២០២៦ រក្សាសិទ្ធិគ្រប់យ៉ាងដោយ Manage the Family។',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir={language === 'km' ? 'ltr' : 'ltr'} className={language === 'km' ? 'font-khmer' : 'font-sans'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
