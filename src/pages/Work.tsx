import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { X } from 'lucide-react';

interface Artwork {
  id: number;
  src: string;
  alt: string;
  orientation: 'portrait' | 'landscape' | 'square';
}

const artworks: Artwork[] = [
  { id: 1, src: "/B&W_LAdy_Original.jpg", alt: "Untitled", orientation: "portrait" },
  { id: 2, src: "/IMG_3959.jpg", alt: "Artwork II", orientation: "portrait" },
  { id: 3, src: "/IMG_3960.jpg", alt: "Artwork III", orientation: "portrait" },
  { id: 4, src: "/IMG_3961.jpg", alt: "Artwork IV", orientation: "portrait" },
  { id: 5, src: "/IMG_3962.jpg", alt: "Artwork V", orientation: "portrait" },
  { id: 6, src: "/IMG_3965.jpg", alt: "Artwork VI", orientation: "portrait" },
    { id: 7, src: "/IMG_20200919_102434_HHT_Original (1).jpg", alt: "Artwork VII", orientation: "landscape" },

  { id: 8, src: "/IMG_20200514_181839_HDR-01_Original.jpg", alt: "Artwork VIII", orientation: "landscape" },
];

const Lightbox = ({ artwork, onClose }: { artwork: Artwork; onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-6 md:p-12"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
      >
        <X size={28} />
      </button>

      <motion.img
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        src={artwork.src}
        alt={artwork.alt}
        className="max-w-full max-h-full object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  );
};

const Work = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const heroArtwork = artworks[0];
  const galleryArtworks = artworks.slice(1);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="pt-32 pb-24 min-h-screen"
    >
      <Helmet>
        <title>Art — Ravi Singh</title>
        <meta name="description" content="Explore the art gallery of Ravi Singh — original artworks, portraits, and visual compositions." />
      </Helmet>

      {/* Museum Title */}
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto mb-24 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="font-sans text-xs uppercase tracking-[0.3em] text-text-secondary block mb-6"
        >
          The Gallery
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-sans text-5xl md:text-7xl text-text-primary mb-6"
        >
          Art
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-24 h-px bg-text-primary/30 mx-auto"
        />
      </div>

      {/* Hero Piece — full width centerpiece */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="px-6 md:px-12 max-w-5xl mx-auto mb-8 cursor-pointer"
        onClick={() => setSelectedArtwork(heroArtwork)}
      >
        <div className="bg-white p-4 md:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.08)]">
          <img
            src={heroArtwork.src}
            alt={heroArtwork.alt}
            className="w-full h-auto"
          />
        </div>
      </motion.div>

      {/* Hero Label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="px-6 md:px-12 max-w-5xl mx-auto mb-40 text-center"
      >
        <span className="font-sans text-3xl md:text-5xl font-light text-text-primary uppercase tracking-[0.15em]">{heroArtwork.alt}</span>
      </motion.div>

      {/* Gallery Wall — staggered museum layout */}
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto">
        {/* Row 1: Two portraits side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-32">
          {galleryArtworks.slice(0, 2).map((artwork, i) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className={`${i === 1 ? 'md:mt-24' : ''}`}
            >
              <div
                className="bg-white p-3 md:p-6 shadow-[0_4px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-shadow duration-500 cursor-pointer group"
                onClick={() => setSelectedArtwork(artwork)}
              >
                <div className="overflow-hidden">
                  <img
                    src={artwork.src}
                    alt={artwork.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
              <div className="mt-4 text-center px-1">
                <span className="font-sans text-2xl md:text-4xl font-light text-text-primary uppercase tracking-[0.15em]">
                  {artwork.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Row 2: Single large centered piece */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto mb-32"
        >
          <div
            className="bg-white p-3 md:p-6 shadow-[0_4px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-shadow duration-500 cursor-pointer group"
            onClick={() => setSelectedArtwork(galleryArtworks[2])}
          >
            <div className="overflow-hidden">
              <img
                src={galleryArtworks[2].src}
                alt={galleryArtworks[2].alt}
                className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>
          </div>
          <div className="mt-4 text-center px-1">
            <span className="font-sans text-2xl md:text-4xl font-light text-text-primary uppercase tracking-[0.15em]">
              {galleryArtworks[2].alt}
            </span>
          </div>
        </motion.div>

        {/* Row 3: Three pieces */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-32">
          {galleryArtworks.slice(3, 6).map((artwork, i) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className={`${i === 1 ? 'md:mt-16' : ''}`}
            >
              <div
                className="bg-white p-3 md:p-5 shadow-[0_4px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-shadow duration-500 cursor-pointer group"
                onClick={() => setSelectedArtwork(artwork)}
              >
                <div className="overflow-hidden">
                  <img
                    src={artwork.src}
                    alt={artwork.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
              <div className="mt-4 text-center px-1">
                <span className="font-sans text-2xl md:text-4xl font-light text-text-primary uppercase tracking-[0.15em]">
                  {artwork.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Row 4: Single landscape wide */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mb-32"
        >
          <div
            className="bg-white p-3 md:p-6 shadow-[0_4px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-shadow duration-500 cursor-pointer group"
            onClick={() => setSelectedArtwork(galleryArtworks[6])}
          >
            <div className="overflow-hidden">
              <img
                src={galleryArtworks[6].src}
                alt={galleryArtworks[6].alt}
                className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>
          </div>
          <div className="mt-4 text-center px-1">
            <span className="font-sans text-2xl md:text-4xl font-light text-text-primary uppercase tracking-[0.15em]">
              {galleryArtworks[6].alt}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 text-center max-w-3xl mx-auto px-6"
      >
        <p className="font-sans italic text-2xl md:text-3xl text-text-primary">
          "Art lies deep within us, with our emotions"
        </p>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedArtwork && (
          <Lightbox
            artwork={selectedArtwork}
            onClose={() => setSelectedArtwork(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Work;
