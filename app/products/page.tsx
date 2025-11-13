import React from 'react';
import { Check } from 'lucide-react';
import Hero from '@/components/Hero';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Accordion from '@/components/ui/Accordion';
import ProductTabs from '@/components/ProductTabs';

export const metadata = {
  title: "Pet Supplies in Alipore Kolkata | Pet Food, Toys, Accessories | Pet's Need",
  description: "Quality pet supplies in Alipore - food, toys, accessories, health products for dogs, cats, birds, small pets. Brands: Royal Canin, Pedigree, Drools, Farmina. Visit our store near Tollygunge!",
};

const reasons = [
  'Wide Selection: Products for dogs, cats, birds, fish, and small animals',
  'Trusted Brands: Royal Canin, Pedigree, Drools, Farmina, Whiskas, and more',
  'Expert Advice: Our staff helps you choose the right products',
  'Quality Assured: We stock only safe, tested pet products',
  'Convenient Location: Easy to reach from anywhere in South Kolkata',
  'Pharmacy Available: Health products and medicines in stock',
];

const faqItems = [
  {
    question: 'Do you offer delivery?',
    answer: 'Currently, we operate as a walk-in store. Visit us in Alipore to shop our full range of products. Our convenient location makes shopping easy for pet parents across Kolkata.',
  },
  {
    question: 'Can I return products?',
    answer: 'Please check products before purchase. For any concerns about product quality or issues, speak with our team in-store and we\'ll do our best to help.',
  },
  {
    question: 'Do you stock prescription medications?',
    answer: 'Yes, our pharmacy stocks common prescription medications. These are dispensed when our veterinarian is available or with a valid prescription from another vet.',
  },
  {
    question: 'What if you don\'t have what I\'m looking for?',
    answer: 'We\'re always happy to help! If we don\'t currently stock an item, let us know and we\'ll see if we can order it for you or recommend suitable alternatives.',
  },
  {
    question: 'Are your products authentic?',
    answer: 'Absolutely. We source all products through authorized distributors and official brand channels to ensure authenticity and quality.',
  },
];

export default function ProductsPage() {
  return (
    <>
      <Hero
        title="Pet Supplies in Alipore, Kolkata"
        subtitle="Everything your dog, cat, bird, or small pet needs—all in one store. Quality food, fun toys, comfy accessories, and health essentials from brands you trust. Visit us in Alipore to browse our full selection!"
      />

      {/* Introduction */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl leading-relaxed text-text-medium">
            At Pet's Need, we stock hundreds of pet care products for every species, breed, and life stage. Whether you're looking for nutritious food, entertaining toys, practical accessories, or health supplies, you'll find it here in our Alipore store. We carefully select items from trusted brands to ensure quality, safety, and value. Can't find what you need? Just ask—we're always happy to help you find the perfect products for your pet.
          </p>
        </div>
      </Section>

      {/* Product Categories with Tabs */}
      <Section background="cream">
        <div className="text-center mb-16">
          <h2 className="mb-4">Browse Our Products</h2>
          <p className="text-xl text-text-medium">
            Select a category to explore our range
          </p>
        </div>

        <ProductTabs />
      </Section>

      {/* Visit Store CTA */}
      <Section background="accent">
        <div className="text-center">
          <h2 className="mb-6 text-dark-teal">Visit Our Store to Explore Our Full Range!</h2>
          <p className="text-xl text-dark-teal/80 mb-8 max-w-2xl mx-auto">
            We stock hundreds of items beyond what's listed here. Come browse our complete selection at 10/1D Diamond Harbour Road, Alipore, Kolkata. Our friendly team will help you find exactly what your pet needs. Open daily 10 AM to 10 PM!
          </p>
          <Button href="/contact" variant="primary">
            Get Store Directions
          </Button>
        </div>
      </Section>

      {/* Why Shop Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="mb-4">Why Shop at Pet's Need</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-4 h-4 text-white" />
              </div>
              <p className="text-text-medium">{reason}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Products FAQ */}
      <Section background="cream">
        <div className="text-center mb-16">
          <h2 className="mb-4">Products FAQ</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion items={faqItems} />
        </div>
      </Section>
    </>
  );
}
