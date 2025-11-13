import React from 'react';
import { Scissors, Stethoscope, ShoppingBag, Store, Users, Heart, Star, Check } from 'lucide-react';
import Hero from '@/components/Hero';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Accordion from '@/components/ui/Accordion';

export const metadata = {
  title: "Pet's Need | Complete Pet Care Center in Alipore, Kolkata | Grooming, Vet, Supplies",
  description: "Pet's Need is Alipore's trusted all-in-one pet care center offering professional grooming, veterinary services, and quality pet supplies for dogs, cats, and small pets. 5.0★ rated. Open daily 10 AM-10 PM. Call 7411576879.",
};

const heroImages = [
  'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920&q=80',
  'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1920&q=80',
  'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1920&q=80',
  'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1920&q=80',
];

const services = [
  {
    title: 'Pet Grooming',
    description: 'Spa-like pampering for your furry friends. Safe baths, stylish cuts, de-shedding, and seasonal grooming to keep them looking and feeling their best.',
    icon: Scissors,
    image: 'https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=800&q=80',
    href: '/grooming',
  },
  {
    title: 'Veterinary Clinic',
    description: 'Expert veterinary care when you need it most. Checkups, vaccinations, treatments, and trusted health advice from experienced doctors in Kolkata.',
    icon: Stethoscope,
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=800&q=80',
    href: '/clinic',
  },
  {
    title: 'Pet Store',
    description: 'Everything for your pet\'s happiness in one place. Quality food, fun toys, comfy accessories, health essentials from trusted brands like Royal Canin, Drools, and more.',
    icon: ShoppingBag,
    image: 'https://images.unsplash.com/photo-1548946526-f69e2424cf45?w=800&q=80',
    href: '/products',
  },
];

const values = [
  {
    title: 'All-in-One Convenience',
    description: 'Vet care, grooming, and shopping—all under one roof in Alipore. Save time while giving your pet the best.',
    icon: Store,
  },
  {
    title: 'Experienced Team',
    description: 'Qualified veterinarians and professional groomers who treat every pet with patience, care, and expertise.',
    icon: Users,
  },
  {
    title: 'Quality You Can Trust',
    description: 'Carefully selected food, toys, medicines, and accessories from brands pet parents across Kolkata rely on.',
    icon: Check,
  },
  {
    title: '3000+ Happy Pet Parents',
    description: 'Trusted by pet families across Alipore, Behala, Tollygunge, and beyond. Join our caring community today.',
    icon: Heart,
  },
];

const testimonials = [
  {
    name: 'Imran Rahaman',
    rating: 5,
    text: 'I was blown away by the exceptional service, wide range of products, and dedication to animal welfare. Pet\'s Need exceeded my expectations in every way.',
  },
  {
    name: 'KOUMARI NAG',
    rating: 5,
    text: 'Extremely satisfied with the gentle and professional way they handled my Shitzu while grooming. Very good experience!',
  },
  {
    name: 'Rabin Halder',
    rating: 5,
    text: 'Best place for my pet—neat, clean, comfortable. All pet foods and doctors are available, and the grooming services are too good!',
  },
];

const productCategories = [
  { name: 'Pet Food', emoji: '🍖', description: 'Premium nutrition for all breeds' },
  { name: 'Treats', emoji: '🦴', description: 'Healthy rewards & snacks' },
  { name: 'Toys', emoji: '🎾', description: 'Fun & engaging playtime' },
  { name: 'Accessories', emoji: '🎒', description: 'Collars, beds & more' },
  { name: 'Grooming', emoji: '✂️', description: 'Shampoos & brushes' },
  { name: 'Health', emoji: '💊', description: 'Medicines & supplements' },
];

const faqItems = [
  {
    question: 'Do I need an appointment for the vet?',
    answer: 'For clinic services, please call us at 7411576879 before visiting to check doctor availability. Our store and grooming services welcome walk-ins daily from 10 AM to 10 PM.',
  },
  {
    question: 'Do you groom cats?',
    answer: 'Absolutely! We offer gentle, professional grooming for cats, including long-haired breeds like Persians. Our experienced groomers handle every pet with care and patience.',
  },
  {
    question: 'What brands do you carry in your store?',
    answer: 'We stock popular and trusted brands like Pedigree, Royal Canin, Drools, Farmina, Whiskas, SmartHeart, and more for dogs, cats, birds, and small animals.',
  },
  {
    question: 'Is parking available near your center?',
    answer: 'Yes, parking is available near our location at 10/1D Diamond Harbour Road, Alipore. We\'re easily accessible from all parts of South Kolkata.',
  },
  {
    question: 'What are your hours of operation?',
    answer: 'Our store, grooming, and pharmacy are open daily from 10 AM to 10 PM. For clinic services, please call before visiting as doctor availability varies.',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="All the Love, All the Care. All in One Place."
        subtitle="Your pet's happy place in Alipore! We offer expert vet care, joyful grooming, and all the supplies your best friend deserves."
        showCarousel={true}
        showRating={true}
        primaryCTA={{ text: 'Book an Appointment', href: 'tel:7411576879' }}
        secondaryCTA={{ text: 'Explore Services', href: '#services' }}
        images={heroImages}
      />

      {/* Trust Bar */}
      <div className="bg-accent py-8">
        <div className="container-custom px-5 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-2">
              <Check className="w-6 h-6 text-dark-teal" />
              <span className="font-semibold text-dark-teal">5.0 Star Rating on Google</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Check className="w-6 h-6 text-dark-teal" />
              <span className="font-semibold text-dark-teal">3000+ Happy Pet Parents</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Check className="w-6 h-6 text-dark-teal" />
              <span className="font-semibold text-dark-teal">All-in-One Pet Care Center</span>
            </div>
          </div>
        </div>
      </div>

      {/* All Your Pet's Needs Section */}
      <Section id="services">
        <div className="text-center mb-16">
          <h2 className="mb-4">All Your Pet's Needs</h2>
          <p className="text-xl text-text-medium max-w-3xl mx-auto">
            From playtime to checkups, we've got you covered under one friendly roof. Quality care for dogs, cats, and small pets across Alipore and South Kolkata.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index}>
                <div className="relative h-64 mb-6">
                  <div
                    className="absolute inset-0 rounded-t-2xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-3">{service.title}</h3>
                  <p className="text-text-medium mb-6">{service.description}</p>
                  <Button href={service.href} variant="secondary">
                    Learn More & Book
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section background="accent">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-dark-teal">Why Pet Parents Trust Us</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <h4 className="mb-3 text-dark-teal">{value.title}</h4>
                <p className="text-dark-teal/80">{value.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="mb-4">What Pet Parents Say</h2>
          <p className="text-xl text-text-medium">
            Don't just take our word for it—hear from families who trust us with their furry friends.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <div className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-text-medium mb-6 leading-relaxed">&quot;{testimonial.text}&quot;</p>
                <p className="font-semibold text-text-dark">{testimonial.name}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            href="https://www.google.com/maps/place/Pet's+Need/@22.5403,88.3247"
            variant="secondary"
          >
            Read All 242+ Reviews on Google
          </Button>
        </div>
      </Section>

      {/* Product Preview Section */}
      <Section background="cream">
        <div className="text-center mb-16">
          <h2 className="mb-4">Our In-Store Products</h2>
          <p className="text-xl text-text-medium max-w-3xl mx-auto">
            We stock hundreds of items from trusted brands. Visit us in Alipore to browse our full selection for dogs, cats, and small pets.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {productCategories.map((category, index) => (
            <Card key={index} className="text-center">
              <div className="p-6">
                <div className="text-5xl mb-3">{category.emoji}</div>
                <h4 className="text-lg mb-2">{category.name}</h4>
                <p className="text-sm text-text-medium">{category.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button href="/products" variant="primary">
            Visit Our Store to Explore Full Range!
          </Button>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion items={faqItems} />
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="text-center text-white">
          <h2 className="mb-6">Come Say Hi!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Visit us at 10/1D Diamond Harbour Road, Alipore, or give us a call. We're here to make your pet's day brighter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:7411576879"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3.5 rounded-lg font-poppins font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg inline-flex items-center justify-center gap-2"
            >
              Call Now
            </a>
            <a
              href="https://www.google.com/maps/place/Pet's+Need/@22.5403,88.3247"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-poppins font-semibold transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              Get Directions
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
