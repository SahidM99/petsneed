import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, Mail, MapPin, Clock, Star } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-teal text-white">
      <div className="container-custom px-5 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Branding */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🐾</span>
              <span className="font-fredoka text-2xl font-semibold">Pet's Need</span>
            </Link>
            <p className="text-gray-300 mb-4">
              All the love, all the care.<br />
              Your pet's happy place in Alipore, Kolkata.
            </p>
            <div className="flex items-center gap-2 text-yellow-400">
              <Star className="w-5 h-5 fill-current" />
              <span className="font-semibold">5.0</span>
              <span className="text-gray-300">• 242+ Reviews</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-fredoka text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'Grooming', href: '/grooming' },
                { name: 'Clinic', href: '/clinic' },
                { name: 'Products', href: '/products' },
                { name: 'About', href: '/about' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-all hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h3 className="font-fredoka text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Pet Grooming</li>
              <li>Veterinary Care</li>
              <li>Pet Supplies & Food</li>
              <li>Health & Pharmacy</li>
              <li>Dog Grooming Kolkata</li>
              <li>Cat Grooming Kolkata</li>
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div>
            <h3 className="font-fredoka text-xl font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:7411576879"
                  className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>7411576879</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917411576879"
                  className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <MessageCircle className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>WhatsApp Us</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@petsneed.in"
                  className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>contact@petsneed.in</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  10/1D, Diamond Harbour Rd<br />
                  Alipore, Kolkata 700027
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Open Daily: 10 AM - 10 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-300 text-sm">
          © {currentYear} Pet's Need. All rights reserved. | Trusted Pet Care Center in Alipore, Kolkata
        </div>
      </div>
    </footer>
  );
}
