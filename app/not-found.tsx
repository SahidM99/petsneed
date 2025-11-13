import React from 'react';
import { Home, ShoppingBag, Phone } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-5 py-20">
      <div className="max-w-2xl mx-auto text-center">
        {/* Illustration */}
        <div className="mb-8 animate-float">
          <div className="text-9xl mb-4">🐕</div>
        </div>

        {/* Content */}
        <h1 className="text-gradient mb-6">
          Oops! This Page Went to the Park
        </h1>

        <p className="text-xl text-text-medium mb-12 max-w-lg mx-auto">
          We couldn't find what you're looking for. Maybe it's chasing squirrels? Let's get you back on track.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="primary">
            <Home className="w-5 h-5" />
            Go Home
          </Button>

          <Button href="/products" variant="secondary">
            <ShoppingBag className="w-5 h-5" />
            Browse Products
          </Button>

          <Button href="tel:7411576879" variant="secondary">
            <Phone className="w-5 h-5" />
            Call Us
          </Button>
        </div>

        {/* Error Code */}
        <div className="mt-16">
          <p className="text-text-light text-sm">Error 404 - Page Not Found</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
