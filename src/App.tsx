/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './components/LanguageContext';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Demo from './pages/Demo';
import Pricing from './pages/Pricing';
import Features from './pages/Features';
import Signup from './pages/Signup';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="features" element={<Features />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="demo" element={<Demo />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
