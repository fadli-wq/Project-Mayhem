import { Routes, Route } from 'react-router-dom'

import NavbarComponent from './components/NavbarComponent';
import FaqComponent from './components/FaqComponent';
import FooterComponent from './components/FooterComponent';

import HomePage from './pages/HomePage';
import KelasPage from './pages/KelasPage';
import TestimonialPage from './pages/TestimonialPage';
import FaqPage from './pages/FaqPage';
import SyaratKetenPage from './pages/SyaratKetenPage';

function App() {
  return <div>
    <NavbarComponent />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/kelas" element={<KelasPage />} />
      <Route path="/testimonial" element={<TestimonialPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/syaratketen" element={<SyaratKetenPage />} />
    </Routes>

    <FooterComponent />
  </div>;
}

export default App