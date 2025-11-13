import React from 'react';
import { Heart, Users, Store, Star, Check } from 'lucide-react';
import Hero from '@/components/Hero';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

export const metadata = {
  title: "About Pet's Need | Trusted Pet Care Center in Alipore, Kolkata",
  description: "Learn about Pet's Need - Alipore's complete pet care center serving 3000+ happy pet parents. Professional grooming, veterinary care, quality supplies. 5.0★ rated with 242+ reviews. Visit us in South Kolkata.",
};

const values = [
  {
    title: 'Compassion',
    description: 'Every pet deserves to be treated with patience, kindness, and respect. We approach every interaction—from nervous first-time groomings to urgent vet visits—with empathy and understanding.',
    icon: Heart,
    emoji: '🤝',
  },
  {
    title: 'Quality',
    description: 'We never compromise on the products we sell or the services we provide. From the brands on our shelves to the training of our team, we maintain high standards in everything we do.',
    icon: Check,
    emoji: '⭐',
  },
  {
    title: 'Convenience',
    description: 'Pet care shouldn\'t be complicated. By bringing grooming, veterinary services, and shopping under one roof, we save you time and give you peace of mind knowing all your pet\'s needs are covered.',
    icon: Store,
    emoji: '🏪',
  },
  {
    title: 'Trust',
    description: 'We earn your trust through transparency, consistency, and genuine care. When you choose Pet\'s Need, you\'re choosing a partner who will always put your pet\'s wellbeing first.',
    icon: Heart,
    emoji: '❤️',
  },
];

const stats = [
  { value: '5.0★', label: '242+ Google Reviews', icon: Star },
  { value: '3000+', label: 'Happy Pet Parents', icon: Users },
  { value: '3', label: 'Experienced Veterinarians', icon: Users },
  { value: '10 AM - 10 PM', label: 'Open Daily', icon: Store },
];

const allReviews = [
  {
    name: 'Imran Rahaman',
    rating: 5,
    text: 'I recently visited Pet\'s Need, and I was blown away by the exceptional service, wide range of products, and dedication to animal welfare. As a pet owner, it\'s essential to find a reliable and trustworthy store that caters to all my furry friend\'s needs, and Pet\'s Need exceeded my expectations in every way.',
  },
  {
    name: 'KOUMARI NAG',
    rating: 5,
    text: 'Very good experience. Extremely satisfied with the gentle and professional way they handled my Shitzu while grooming 👍😊',
  },
  {
    name: 'Nasreen Khan',
    rating: 5,
    text: 'Excellent place. Dam good service, caring and cooperative staff members. I can never trust any other place over this. Thank you.',
  },
  {
    name: 'Rabin Halder',
    rating: 5,
    text: 'This is the best place for my pet because it\'s very neat and clean and comfortable for my pet and all pet foods and doctors are available here and specially the grooming services are too good 👍',
  },
  {
    name: 'Sneha Dasgupta',
    rating: 5,
    text: 'I bring my dogs for grooming here, they do a wonderful job every time. Very friendly and Amar da does a good job.',
  },
  {
    name: 'Nausheen Iqbal',
    rating: 5,
    text: 'Best services within affordable rates. Staff\'s behaviour is very good. Premium quality food. Overall amazing 💯💯',
  },
  {
    name: 'NexGen Tech',
    rating: 5,
    text: 'THIS IS THE BEST PETS CLINIC AND BEST PET PARLOUR IN KOLKATA YOU CAN SEE AND FIND AROUND KOLKATA IT IS BETTER THAN PAW AVENUE AND OTHERS',
  },
  {
    name: 'Dona Saha',
    rating: 5,
    text: 'Awesome place. Thank you Pets Need... My Leo & Coco is so much happy 😄',
  },
  {
    name: 'Zaid Nawaz',
    rating: 5,
    text: 'Best pet\'s parlour in Kolkata. Must visit grooming rate also vary low cost. Must be visit all pet\'s lover everything available what you want for your pet\'s like food, accessories, doctor available also. Thank you Pet\'s Need and team for your best service.',
  },
  {
    name: 'JYOTI PINTO',
    rating: 5,
    text: 'I like the grooming service of this Clinic. The groomer is highly professional and very patient. I recommend pet parents to come here.',
  },
  {
    name: 'Sanchita Bhanja',
    rating: 5,
    text: 'Good service. Expert groomer & doctor available here. Pet\'s medicine, foods & others available here.',
  },
  {
    name: 'Swapna Banerjee',
    rating: 5,
    text: 'This grooming parlour is a very good place for the pets. All the staffs are very very cooperative and supportive. The groomers are very professional and caring. My pets were very comfortable to them. I am fully satisfied with their work. Thank you all ...🙏',
  },
];

const areas = [
  'Alipore', 'New Alipore', 'Kidderpore', 'Behala', 'Taratala', 'Mominpore',
  'Ekbalpur', 'Majherhat', 'Bhowanipore', 'Kalighat', 'Hastings', 'Watganj',
  'Garden Reach', 'Chetla', 'Sahapur', 'Tollygunge', 'Lake Gardens',
  'Behala Chowrasta', 'Parnashree', 'Barisha',
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Pet's Need"
        subtitle="Your neighborhood pet care partner in Alipore, Kolkata. Caring for pets and their families since day one."
      />

      {/* Our Story */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-center">Our Story</h2>
          <div className="space-y-6 text-lg leading-relaxed text-text-medium">
            <p>
              Pet's Need was born from a simple belief: every pet deserves exceptional care close to home. What started as a small neighborhood shop has grown into Alipore's trusted complete pet care center, serving thousands of happy pet families across South Kolkata.
            </p>
            <p>
              We understand the bond between pets and their parents because we're pet lovers ourselves. We know that choosing where to take your furry friend for care isn't just about convenience—it's about trust. That's why we've built Pet's Need to be the kind of place we'd want to bring our own pets: clean, welcoming, staffed by people who genuinely care, and stocked with products and services that meet the highest standards.
            </p>
            <p>
              Every wagging tail that walks through our door, every purr of contentment during a grooming session, every relieved pet parent leaving our clinic with their healthy companion—these moments remind us why we do what we do. We're not just a business; we're part of the Alipore community, and your pet's happiness is our greatest reward.
            </p>
            <p>
              Whether you're here for a quick checkup, a complete grooming session, or just picking up your pet's favorite treats, you'll always find friendly faces ready to help. We take the time to know you and your pet, remember your preferences, and provide personalized care that makes every visit feel special.
            </p>
            <p>
              Thank you for trusting Pet's Need with your beloved companions. We're honored to be part of your pet care journey, and we look forward to serving you and your furry, feathered, or scaled friends for years to come.
            </p>
          </div>
        </div>
      </Section>

      {/* Our Mission */}
      <Section background="accent">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white">
            <div className="p-8 md:p-12 text-center">
              <h2 className="mb-6 text-dark-teal">Our Mission</h2>
              <p className="text-xl text-text-medium leading-relaxed">
                To provide comprehensive, compassionate, and convenient pet care that enriches the lives of pets and their families throughout Kolkata. We're committed to combining professional expertise with genuine warmth, making quality pet care accessible to every pet parent in our community.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Our Values */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="mb-4">Our Values</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index}>
              <div className="p-8 text-center">
                <div className="text-6xl mb-4">{value.emoji}</div>
                <h3 className="text-2xl mb-4">{value.title}</h3>
                <p className="text-text-medium leading-relaxed">{value.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Stats Section */}
      <Section background="gradient">
        <div className="text-center text-white">
          <h2 className="mb-16">Why Choose Pet's Need</h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index}>
                  <Icon className="w-12 h-12 mx-auto mb-4" />
                  <div className="text-5xl font-fredoka font-semibold mb-2">{stat.value}</div>
                  <div className="text-xl">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* All Reviews */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="mb-4">What Our Customers Say</h2>
          <p className="text-xl text-text-medium">
            Real reviews from real pet parents in Kolkata
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allReviews.map((review, index) => (
            <Card key={index}>
              <div className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-text-medium mb-6 leading-relaxed">&quot;{review.text}&quot;</p>
                <p className="font-semibold text-text-dark">{review.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Serving Areas */}
      <Section background="cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-8">Serving South Kolkata</h2>
          <p className="text-lg text-text-medium mb-8 leading-relaxed">
            Located in the heart of Alipore, Pet's Need proudly serves pet families throughout South Kolkata including:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {areas.map((area, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white rounded-full text-text-dark font-medium shadow-sm"
              >
                {area}
              </span>
            ))}
          </div>
          <p className="text-text-medium mt-8">
            Our convenient Diamond Harbour Road location makes us easily accessible from anywhere in the area.
          </p>
        </div>
      </Section>
    </>
  );
}
