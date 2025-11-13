'use client';

import React, { useState, useEffect } from 'react';
import { Star, Phone, ArrowDown } from 'lucide-react';
import Button from './ui/Button';

interface HeroProps {
  title: string;
  subtitle: string;
  showCarousel?: boolean;
  showRating?: boolean;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  images?: string[];
}

export default function Hero({
  title,
  subtitle,
  showCarousel = false,
  showRating = false,
  primaryCTA,
  secondaryCTA,
  images = [],
}: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (showCarousel && images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [showCarousel, images.length]);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center pt-20">
      <div className="container-custom px-5 md:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 relative z-10">
            <h1 className="text-gradient">{title}</h1>
            <p className="text-xl text-text-medium leading-relaxed max-w-2xl">
              {subtitle}
            </p>

            {/* CTAs */}
            {(primaryCTA || secondaryCTA) && (
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {primaryCTA && (
                  <Button href={primaryCTA.href} variant="primary">
                    <Phone className="w-4 h-4" />
                    {primaryCTA.text}
                  </Button>
                )}
                {secondaryCTA && (
                  <Button
                    href={secondaryCTA.href}
                    variant="secondary"
                    onClick={secondaryCTA.href === '#services' ? scrollToServices : undefined}
                  >
                    {secondaryCTA.text}
                    <ArrowDown className="w-4 h-4" />
                  </Button>
                )}
              </div>
            )}

            {/* Rating Badge */}
            {showRating && (
              <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold text-text-dark">5.0</span>
                <span className="text-text-medium">• 242+ Happy Reviews</span>
              </div>
            )}
          </div>

          {/* Carousel or Static Image */}
          {showCarousel && images.length > 0 && (
            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-800 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              ))}

              {/* Dots Navigation */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === currentImageIndex
                        ? 'bg-white w-8'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
