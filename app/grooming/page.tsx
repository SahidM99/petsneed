import React from 'react';
import { Scissors, Sparkles, Heart, Phone } from 'lucide-react';
import Hero from '@/components/Hero';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Accordion from '@/components/ui/Accordion';

export const metadata = {
  title: "Pet Grooming in Kolkata | Dog & Cat Grooming Alipore | Pet's Need",
  description: "Professional pet grooming services in Alipore, Kolkata for dogs, cats, and small animals. Expert groomers, safe products, gentle handling. Book grooming near Behala, Tollygunge. Call 7411576879 today!",
};

const services = [
  {
    title: 'Full Grooming Packages',
    description: 'Our comprehensive grooming includes a soothing bath, blow-dry, stylish haircut, coat trimming and shaping, sanitary trim, and paw pad trimming. Perfect for dogs and cats who need the complete spa experience. Every session is tailored to your pet\'s breed, coat type, and comfort level.',
    icon: Sparkles,
  },
  {
    title: 'Basic Grooming',
    description: 'For routine maintenance, our basic grooming covers bath, nail clipping, and ear cleaning. We also offer dedicated de-shedding and brushing sessions to keep your home fur-free, plus tick and flea baths with medicated washes when needed.',
    icon: Scissors,
  },
  {
    title: 'Special Treatments',
    description: 'Treat your pet to something extra! We offer spa sessions with aromatherapy shampoos, teeth cleaning and breath freshening for better oral health, and coat conditioning masks with anti-shedding treatments to keep their coat shiny and healthy.',
    icon: Heart,
  },
  {
    title: 'Grooming for Cats',
    description: 'Cats deserve pampering too! We specialize in long-hair and Persian-specific grooming, including gentle de-matting, thorough brushing, and supervised cat baths with careful drying. Our groomers understand feline behavior and work patiently to make the experience calm and positive.',
    icon: Heart,
  },
  {
    title: 'Puppy & Kitten Intro Grooming',
    description: 'First grooming experience? We offer gentle introduction sessions designed for puppies and kittens. These short, positive sessions help young pets get comfortable with grooming early on, setting them up for a lifetime of stress-free grooming visits.',
    icon: Heart,
  },
];

const seasonalTips = [
  {
    season: '🌞 Summer Grooming',
    period: '(March - June)',
    tips: 'Keep your pet cool during Kolkata\'s hot months with summer coat thinning. Regular brushing removes excess undercoat and improves air circulation. Schedule baths more frequently to help them stay fresh, and don\'t forget paw pad moisturizing—hot pavements can dry out their pads. Consider a shorter haircut for long-haired breeds, but never shave double-coated dogs completely as their coat protects them from heat too.',
  },
  {
    season: '🌧️ Monsoon Grooming',
    period: '(July - September)',
    tips: 'The rainy season brings humidity and moisture—perfect conditions for fungal infections and skin issues. Keep your pet\'s coat completely dry after walks, paying special attention to paws, underarms, and ears. Increase grooming frequency to prevent matting in long-haired pets. Use anti-fungal shampoos if recommended by your vet, and check for ticks more often as they thrive in monsoon conditions.',
  },
  {
    season: '❄️ Winter Grooming',
    period: '(November - February)',
    tips: 'Cold weather means dry skin for pets too. Switch to moisturizing shampoos and consider coat conditioning treatments to prevent flaking and itching. Brush regularly to distribute natural oils throughout their coat. For short-haired breeds sensitive to cold, you might reduce bath frequency slightly, but never skip brushing. Paw care is crucial—cold surfaces and winter dryness can crack paw pads, so use pet-safe moisturizers.',
  },
  {
    season: '🪔 Festival Season Grooming',
    period: '(Diwali, Durga Puja)',
    tips: 'Special occasions call for special grooming! Book your pet\'s pre-festival grooming session early—these are busy times in Kolkata. A fresh groom helps your pet look their best for family photos and celebrations. We offer festive grooming packages that include bath, haircut, nail trim, ear cleaning, and even pet-safe cologne. Remember to keep your pet calm during fireworks season by maintaining their regular grooming routine—familiarity brings comfort during stressful times.',
  },
  {
    season: '🌸 Spring Grooming',
    period: '(February - March)',
    tips: 'Spring is shedding season! As the weather warms up, dogs and cats shed their winter coats. Schedule professional de-shedding treatments to remove loose fur before it takes over your home. This is also a great time for a thorough coat inspection—check for any skin issues that may have developed under the thick winter coat. Spring cleaning applies to pets too!',
  },
];

const faqItems = [
  {
    question: 'How often should I get my dog groomed?',
    answer: 'It depends on breed and coat type. Long-haired breeds like Shih Tzus, Golden Retrievers, and Persians benefit from grooming every 4-6 weeks. Short-haired pets typically need grooming every 8-12 weeks. We\'ll recommend a schedule based on your pet\'s specific needs.',
  },
  {
    question: 'Is grooming stressful for cats?',
    answer: 'Not when done properly! Our groomers are trained in feline handling and create a calm, quiet environment. Many cats relax once they realize grooming feels good. We take breaks if needed and never force a stressed cat.',
  },
  {
    question: 'Can you groom aggressive or anxious pets?',
    answer: 'We have experience with nervous pets and use gentle handling techniques. For extremely anxious pets, we recommend shorter sessions or consulting with your vet about mild sedation options for their comfort and safety.',
  },
  {
    question: 'Do you use safe products?',
    answer: 'Absolutely. We use only pet-safe, dermatologically tested shampoos and products. For pets with sensitive skin or allergies, we offer hypoallergenic and medicated options.',
  },
  {
    question: 'How long does grooming take?',
    answer: 'Basic grooming typically takes 1-2 hours, while full grooming packages take 2-3 hours depending on your pet\'s size, coat condition, and temperament. You\'re welcome to wait or we can call you when they\'re ready.',
  },
];

export default function GroomingPage() {
  return (
    <>
      <Hero
        title="Pet Grooming in Kolkata"
        subtitle="Gentle, professional grooming that keeps your dog or cat looking great and feeling even better. Book your pet's spa day at Pet's Need in Alipore today."
        primaryCTA={{ text: 'Book Grooming Appointment', href: 'tel:7411576879' }}
      />

      {/* Introduction */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl leading-relaxed text-text-medium">
            A clean, comfortable pet is a happy pet. At Pet's Need, we offer complete grooming services for dogs, cats, and small animals right here in Alipore, Kolkata. Whether your furry friend needs a simple bath and nail trim or a full grooming makeover, our experienced groomers treat every pet with patience, care, and professionalism. We use safe, pet-friendly products and create a stress-free environment so your pet actually enjoys their grooming session.
          </p>
        </div>
      </Section>

      {/* Our Grooming Services */}
      <Section background="cream">
        <div className="text-center mb-16">
          <h2 className="mb-4">Our Grooming Services</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index}>
                <div className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl mb-4">{service.title}</h3>
                  <p className="text-text-medium leading-relaxed">{service.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Seasonal Grooming Tips */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="mb-4">Seasonal Grooming Tips</h2>
          <p className="text-xl text-text-medium">
            Different seasons in Kolkata require different grooming approaches
          </p>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {seasonalTips.map((tip, index) => (
            <Card key={index}>
              <div className="p-8">
                <h3 className="text-2xl mb-2">
                  {tip.season}
                </h3>
                <p className="text-primary font-semibold mb-4">{tip.period}</p>
                <p className="text-text-medium leading-relaxed">{tip.tips}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why Professional Grooming Matters */}
      <Section background="accent">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-6 text-center text-dark-teal">Why Professional Grooming Matters</h2>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-md">
            <p className="text-lg leading-relaxed text-text-medium">
              Regular grooming isn't just about looks—it's essential for your pet's health and happiness. Professional groomers can spot skin issues, lumps, parasites, or infections early, often before you notice them at home. Proper nail trimming prevents painful overgrowth and posture problems. Ear cleaning reduces infection risk. De-shedding minimizes hairballs in cats and keeps your home cleaner. Plus, many pets genuinely enjoy the attention and pampering from experienced groomers who know exactly how to make them comfortable. At Pet's Need in Alipore, we combine health-focused care with that spa day feeling every pet deserves.
            </p>
          </div>
        </div>
      </Section>

      {/* Grooming FAQs */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="mb-4">Grooming FAQs</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion items={faqItems} />
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="text-center text-white">
          <h2 className="mb-6">Book Your Pet's Grooming Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to pamper your pet? Call us at 7411576879 to schedule a grooming appointment at Pet's Need in Alipore, Kolkata. Walk-ins are welcome daily from 10 AM to 10 PM, but appointments ensure minimal wait time.
          </p>
          <Button href="tel:7411576879" className="bg-white text-primary hover:bg-gray-100">
            <Phone className="w-5 h-5" />
            Call to Book Now
          </Button>
        </div>
      </Section>
    </>
  );
}
