import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface CarouselSlide {
  image: string;
  title?: string;
  description?: string;
  link?: string;
}

interface HeroCarouselProps {
  slides: CarouselSlide[];
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 1,
      zIndex: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      zIndex: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 1,
      zIndex: 0
    })
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const previousSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-3xl bg-black my-8" style={{ aspectRatio: '3/2' }}>
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0 }
          }}
          className="absolute w-full h-full"
        >
          <div className="relative w-full h-full">
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title || "Carousel image"}
              className="w-full h-full object-cover object-center"
              style={{ willChange: 'transform' }}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={previousSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[rgba(213,17,42,255)]/10 hover:bg-[rgba(213,17,42,255)]/20 p-2 rounded-full backdrop-blur-sm transition-colors z-20"
      >
        <ArrowLeft className="w-6 h-6 text-[rgba(213,17,42,255)]" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[rgba(213,17,42,255)]/10 hover:bg-[rgba(213,17,42,255)]/20 p-2 rounded-full backdrop-blur-sm transition-colors z-20"
      >
        <ArrowRight className="w-6 h-6 text-[rgba(213,17,42,255)]" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-white w-6'
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
