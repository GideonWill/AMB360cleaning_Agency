import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import PageShell from './components/PageShell';
import Chatbot from './components/Chatbot';

function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-24 pb-20">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageShell>
                <Home />
              </PageShell>
            }
          />
          <Route
            path="/about"
            element={
              <PageShell>
                <AboutPage />
              </PageShell>
            }
          />
          <Route
            path="/services"
            element={
              <PageShell>
                <ServicesPage />
              </PageShell>
            }
          />
          <Route
            path="/contact"
            element={
              <PageShell>
                <ContactPage />
              </PageShell>
            }
          />
          <Route
            path="/portfolio"
            element={
              <PageShell>
                <PortfolioPage />
              </PageShell>
            }
          />
        </Routes>
      </main>
      <Chatbot />
      <Footer />
    </div>
  );
}

export default App;
