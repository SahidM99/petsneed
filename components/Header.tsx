'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import Button from './ui/Button';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Grooming', href: '/grooming' },
  { name: 'Clinic', href: '/clinic' },
  { name: 'Products', href: '/products' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md h-16'
          : 'bg-white/80 backdrop-blur-md h-20'
      }`}
    >
      <nav className="container-custom h-full flex items-center justify-between px-5 md:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
          <span className="text-2xl">🐾</span>
          <span className="font-fredoka text-2xl font-semibold">Pet's Need</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`font-quicksand font-medium transition-colors hover:text-primary ${
                pathname === item.href ? 'text-primary' : 'text-text-dark'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Button href="tel:7411576879" variant="primary">
            <Phone className="w-4 h-4" />
            Call Now
          </Button>
          <Button
            href="https://wa.me/917411576879"
            variant="icon"
            className="text-white hover:text-white"
          >
            <MessageCircle className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-text-dark hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 bg-white z-40 lg:hidden overflow-y-auto">
          <div className="container-custom px-5 py-8">
            <div className="flex flex-col gap-4">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-fredoka text-2xl py-3 border-b border-gray-100 transition-all hover:text-primary hover:translate-x-2 ${
                    pathname === item.href ? 'text-primary' : 'text-text-dark'
                  }`}
                  style={{
                    animation: `slideInRight 0.3s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <Button href="tel:7411576879" variant="primary" className="w-full justify-center">
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
              <Button href="https://wa.me/917411576879" variant="secondary" className="w-full justify-center">
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
}
