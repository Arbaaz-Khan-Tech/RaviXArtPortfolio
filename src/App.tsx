import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import BuyMeCoffee from './pages/BuyMeCoffee';
import { SmoothScroll } from './components/SmoothScroll';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        // Smooth follow effect
        const x = e.clientX;
        const y = e.clientY;
        
        cursorRef.current.animate({
          left: `${x}px`,
          top: `${y}px`
        }, { duration: 500, fill: "forwards" });
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Add hover listeners for interactive elements
    const handleLinkHover = () => setIsHovering(true);
    const handleLinkLeave = () => setIsHovering(false);

    const addListeners = () => {
      const links = document.querySelectorAll('a, button, .cursor-pointer');
      links.forEach(link => {
        link.addEventListener('mouseenter', handleLinkHover);
        link.addEventListener('mouseleave', handleLinkLeave);
      });
    };

    // Initial add
    addListeners();

    // Re-add listeners on DOM changes (simple observer)
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('mousemove', moveCursor);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 hidden md:flex justify-center items-center ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div 
        className={`rounded-full bg-accent mix-blend-difference transition-all duration-300 ease-out ${
          isHovering ? 'w-16 h-16' : 'w-3 h-3'
        }`}
      />
    </div>
  );
};

const Layout = () => {
  const { pathname } = useLocation();
  const hideFooter = ['/work', '/about', '/contact', '/buy-me-coffee'].includes(pathname);

  return (
    <SmoothScroll>
      <div className="min-h-screen text-text-primary selection:bg-accent selection:text-white flex flex-col">
        <ScrollToTop />
        <CustomCursor />
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/buy-me-coffee" element={<BuyMeCoffee />} />
            </Routes>
          </AnimatePresence>
        </main>
        {!hideFooter && <Footer />}
      </div>
    </SmoothScroll>
  );
};

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
