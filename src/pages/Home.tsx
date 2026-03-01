import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, ArrowRight, Coffee, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { RevealText } from '../components/RevealText';
import { LiquidImage } from '../components/LiquidImage';
import { useRef, useState } from 'react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-24 overflow-hidden">
      <motion.div
        style={{ y: y1, opacity }}
        className="text-center z-10 max-w-7xl mx-auto w-full flex flex-col items-center"
      >
        {/* Portrait with doodle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-70 mb-12 relative"
        >
          {/* Hand-drawn doodle circles */}
          <svg
            className="absolute -inset-5 w-[calc(100%+40px)] h-[calc(100%+40px)] z-0 pointer-events-none"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M 200 30 C 310 25, 375 90, 378 200 C 381 310, 310 375, 200 372 C 90 369, 28 305, 25 200 C 22 95, 85 35, 200 30"
              stroke="#00326f"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.7, 0.7, 0] }}
              transition={{ duration: 4, delay: 0.5, ease: "easeInOut", times: [0, 0.3, 0.7, 1], repeat: Infinity, repeatDelay: 1 }}
            />
            <motion.path
              d="M 195 22 C 320 18, 388 85, 385 205 C 382 320, 315 382, 195 385 C 80 388, 18 315, 20 195 C 22 80, 82 26, 195 22"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              stroke="#00326f"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.5, 0.5, 0] }}
              transition={{ duration: 4, delay: 0.7, ease: "easeInOut", times: [0, 0.3, 0.7, 1], repeat: Infinity, repeatDelay: 1 }}
            />
            <motion.path
              d="M 210 18 C 330 22, 392 95, 388 210 C 384 330, 320 390, 205 388 C 85 386, 15 320, 18 198 C 21 82, 90 14, 210 18"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              stroke="#00326f"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 4, delay: 0.9, ease: "easeInOut", times: [0, 0.3, 0.7, 1], repeat: Infinity, repeatDelay: 1 }}
            />
          </svg>

          <div className="aspect-square overflow-hidden rounded-lg relative z-10 rotate-2 shadow-lg">
            <img
              src="/RAVI_HERO2.png"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>

        {/* Showreel */}
        <div className="relative w-full max-w-4xl aspect-video overflow-hidden shadow-2xl mb-12">
          {isPlaying ? (
            <iframe
              src="https://www.youtube.com/embed/iTL9WKZdSoA?autoplay=1&rel=0"
              title="Showreel "
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              onClick={() => setIsPlaying(true)}
              className="relative w-full h-full group cursor-pointer block"
            >
              <img
                src="https://img.youtube.com/vi/iTL9WKZdSoA/maxresdefault.jpg"
                alt="Showreel "
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform duration-300">
                  <Play fill="white" className="text-white ml-1" size={32} />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 text-white text-left">
                <h2 className="font-sans text-3xl">Showreel </h2>
              </div>
            </button>
          )}
        </div>
        
        {/* <RevealText 
          text="Artist & Visual Designer" 
          className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-text-primary mb-6 justify-center"
          delay={0.6}
        /> */}

      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-sans italic text-2xl md:text-3xl text-text-primary text-center z-10 mt-12"
      >
        "Chasing a higher form of creativity"
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-text-secondary">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-text-secondary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

const FreeResources = () => {
  const resources = [
    { image: "/2272852.jpg", link: "https://drive.google.com/drive/folders/1ws-lJdaDuYZ2iOFXV3KxYMek9SaPz8JW?usp=sharing" },
    { image: "https://picsum.photos/seed/res2/400/400", link: "https://drive.google.com/drive/folders/1hFs9L6-3D_bK2seOv2hv_W1QkKCAgB8K?usp=sharing" },
    { image: "https://picsum.photos/seed/res3/400/400", link: "https://drive.google.com/drive/folders/10BN7MTnNA-oPmV1GM1B2m-kAVoEbGN9V?usp=sharing" },
    { image: "https://picsum.photos/seed/res4/400/400", link: "https://drive.google.com/drive/folders/19hRVU_9YneINDNMq0yIG9jMDUyjoGJbj?usp=sharing" },
    { image: "https://picsum.photos/seed/res5/400/400", link: "https://drive.google.com/drive/folders/19hRVU_9YneINDNMq0yIG9jMDUyjoGJbj?usp=sharing" },
    { image: "https://picsum.photos/seed/res6/400/400", link: "https://drive.google.com/drive/folders/1fbFobzGgXAZsZbkwOVfYV0KlA8HHgN5z?usp=sharing" },
    { image: "https://picsum.photos/seed/res7/400/400", link: "https://drive.google.com/drive/folders/1qDe7EqC0QyckyhNql7LnNABJCzIaVXys?usp=sharing" },
    { image: "https://picsum.photos/seed/res8/400/400", link: "https://drive.google.com/drive/folders/1DMtdMYA7RanY1c9AoJGWi7pc9AXK83Sw?usp=sharing" },
    { image: "https://picsum.photos/seed/res9/400/400", link: "https://drive.google.com/drive/folders/1IHe_4mSP7ABV4FgVGYGK5upuT0f9TfEf?usp=sharing" },

  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto">
      <div className="mb-16 text-center">
        <RevealText
          text="Free Resources"
          tag="h2"
          className="font-sans text-4xl md:text-5xl text-text-primary justify-center mb-4 tracking-[0.15em]"
        />
        <p className="font-sans text-sm text-text-secondary  tracking-widest">High-quality resources for creatives who value art</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        {resources.map((resource, index) => (
          <motion.a
            key={index}
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="aspect-square overflow-hidden rounded-lg relative group cursor-pointer block"
          >
            <LiquidImage src={resource.image} alt={`Resource ${index + 1}`} className="w-full h-full" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-sans text-xs uppercase tracking-widest border border-white/50 px-4 py-2 rounded-full backdrop-blur-sm">Download</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

const SupportSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white/50 border-y border-divider/30">
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Buy Me Coffee */}
        <div className="flex flex-col items-start space-y-6">
          <h3 className="font-sans text-3xl text-text-primary">Support my work</h3>
          <p className="font-sans text-text-secondary leading-relaxed text-2xl">
No Pressure          </p>
          <Link 
            to="/buy-me-coffee" 
            className="flex items-center gap-3 bg-[#FFDD00] text-[#1A1A1A] px-8 py-4 rounded-full hover:bg-[#FFE940] transition-colors duration-300 group font-semibold"
          >
            <Coffee size={20} className="group-hover:rotate-12 transition-transform" />
            <span className="font-sans text-sm uppercase tracking-widest">Buy Me a Coffee</span>
          </Link>
        </div>

        {/* GPay QR */}
        <div className="flex flex-col items-center md:items-end">
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-divider rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="w-48 h-48 rounded-lg overflow-hidden">
              <img src="/Buy me a coffee - G Pay.png" alt="GPay QR Code" loading="lazy" decoding="async" className="w-full h-full object-contain" />
            </div>
            <div className="text-center mt-4 font-sans text-xs uppercase tracking-widest text-text-secondary">
              Scan to Pay via GPay
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PortfolioScroll = () => {
  const items: { type: 'youtube' | 'instagram'; id: string; title: string }[] = [
    { type: "youtube", id: "iTL9WKZdSoA", title: "Cinematic Travel" },
    { type: "youtube", id: "N9Ysp7_Zt00", title: "Cinematic Travel" },
    { type: "youtube", id: "sgt5Sff4iDA", title: "Urban Exploration" },
    { type: "youtube", id: "-kIIgeAqLSY", title: "Digital Art Process" },
    { type: "youtube", id: "Ww7aFD4xRuo", title: "Motion Graphics Reel" },
    { type: "youtube", id: "1_t6cLVjnw8", title: "Brand Identity Showcase" },
    { type: "youtube", id: "hUmm0J_fyqQ", title: "Brand Identity Showcase" },
    { type: "instagram", id: "DKqvTP4z_1b", title: "Instagram Reel" },
    { type: "youtube", id: "bKExeMzC8SA", title: "Visual Narrative" },
  ];

  return (
    <section className="py-32 overflow-hidden bg-[#111] text-[#F5F1EB]">
      <div className="px-6 md:px-12 mb-16 flex justify-between items-end max-w-[1400px] mx-auto">
        <div>
          <h2 className="font-sans text-4xl md:text-6xl mb-4 tracking-[0.15em]">PORTFOLIO EXAMPLES</h2>
        </div>
        <div className="hidden md:flex gap-2 opacity-60">
          <ArrowRight size={24} />
        </div>
      </div>

      <div className="flex gap-8 px-6 md:px-12 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
        {items.map((item, index) => (
          <motion.a
            key={index}
            href={item.type === 'youtube' ? `https://youtu.be/${item.id}` : `https://www.instagram.com/reel/${item.id}/`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className={`flex-none snap-start group cursor-pointer block ${item.type === 'instagram' ? 'w-[60vw] md:w-[280px]' : 'w-[85vw] md:w-[calc(50%-1rem)]'}`}
          >
            {item.type === 'youtube' ? (
              <div className="aspect-video bg-white/5 rounded-lg overflow-hidden mb-6 relative">
                <img
                  src={`https://img.youtube.com/vi/${item.id}/maxresdefault.jpg`}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                    <Play fill="white" size={24} />
                  </div>
                </div>
              </div>
            ) : (
              <div className="aspect-[9/16] bg-white/5 rounded-lg overflow-hidden mb-6 relative">
                <iframe
                  src={`https://www.instagram.com/reel/${item.id}/embed/`}
                  title={item.title}
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                />
              </div>
            )}
            <div className="border-t border-white/10 pt-4">
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

const ThumbnailGrid = () => {
  const thumbnails = [
    { image: "/Thumb1.jpg", title: "Thumbnail 1" },
    { image: "/Thumb2.jpg", title: "Thumbnail 2" },
    { image: "/Thumb3.jpg", title: "Thumbnail 3" },
    { image: "/Thumb4.jpg", title: "Thumbnail 4" },
    { image: "/Thumb5.jpg", title: "Thumbnail 5" },
    { image: "/Thumb6.jpg", title: "Thumbnail 6" },
    { image: "/Thumb7.jpg", title: "Thumbnail 7" },
    { image: "/Thumb8.jpg", title: "Thumbnail 8" },
    { image: "/Thumb9.jpg", title: "Thumbnail 9" },
    { image: "/Thumb10.jpg", title: "Thumbnail 10" },
      { image: "/Thumb11.jpg", title: "Thumbnail 12" },
        { image: "/Thumb12.jpg", title: "Thumbnail 12" },
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-[#111] text-[#F5F1EB]">
      <div className="mb-16 text-center max-w-[1400px] mx-auto">
        <h2 className="font-sans text-4xl md:text-6xl mb-4 tracking-[0.15em]">THUMBNAILS</h2>
        <p className="font-sans text-sm opacity-60 tracking-widest">YouTube thumbnail designs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[1400px] mx-auto">
        {thumbnails.map((thumb, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ delay: index * 0.05, duration: 0.6 }}
            className="group cursor-pointer"
          >
            <div className="aspect-video overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-500">
              <img
                src={thumb.image}
                alt={thumb.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Ravi Singh — Artist & Visual Designer</title>
        <meta name="description" content="Portfolio of Ravi Singh — a video editor, artist, and creative media professional specializing in visual storytelling, motion design, and thumbnail design." />
      </Helmet>
      <Hero />
      <FreeResources />
      <SupportSection />
      <PortfolioScroll />
      <ThumbnailGrid />
    </motion.div>
  );
};

export default Home;
