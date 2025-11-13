import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import Hero from '@/components/Hero';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Accordion from '@/components/ui/Accordion';

export const metadata = {
  title: "Contact Pet's Need | Pet Care Center in Alipore Kolkata | Get Directions",
  description: "Contact Pet's Need at 10/1D Diamond Harbour Rd, Alipore, Kolkata. Call 7411576879 for grooming, vet services, pet supplies. Open daily 10 AM-10 PM. Serving South Kolkata pet families.",
};

const contactCards = [
  {
    title: 'Call Us',
    icon: Phone,
    emoji: '📞',
    primary: '7411576879',
    secondary: 'Talk to our team',
    href: 'tel:7411576879',
  },
  {
    title: 'WhatsApp Us',
    icon: MessageCircle,
    emoji: '💬',
    primary: 'Quick responses',
    secondary: 'Chat with us now',
    href: 'https://wa.me/917411576879',
  },
  {
    title: 'Visit Us',
    icon: MapPin,
    emoji: '📍',
    primary: '10/1D, Diamond Harbour Rd',
    secondary: 'Alipore, Kolkata 700027',
    href: 'https://www.google.com/maps/place/Pet\'s+Need/@22.5403,88.3247',
  },
  {
    title: 'Email Us',
    icon: Mail,
    emoji: '✉️',
    primary: 'contact@petsneed.in',
    secondary: 'We\'ll reply soon',
    href: 'mailto:contact@petsneed.in',
  },
];

const faqItems = [
  {
    question: 'What\'s the best way to reach you?',
    answer: 'For immediate assistance, call us at 7411576879. For non-urgent questions, you can also WhatsApp us or email contact@petsneed.in.',
  },
  {
    question: 'Do I need an appointment?',
    answer: 'For grooming and shopping, walk-ins are welcome daily from 10 AM to 10 PM. For veterinary services, please call ahead to confirm doctor availability.',
  },
  {
    question: 'Is parking available?',
    answer: 'Yes, parking is available near our location on Diamond Harbour Road, Alipore.',
  },
  {
    question: 'How do I get directions?',
    answer: 'Click "Get Directions" on our contact cards or map, or search "Pet\'s Need Alipore" on Google Maps. We\'re easily accessible from all parts of South Kolkata.',
  },
];

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Come Say Hi!"
        subtitle="Visit us in Alipore, give us a call, or send a message. We're here to help with all your pet care needs."
      />

      {/* Quick Contact Cards */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="mb-4">Get in Touch</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <a
                key={index}
                href={card.href}
                className="group"
              >
                <Card>
                  <div className="p-8 text-center h-full flex flex-col items-center justify-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                      {card.emoji}
                    </div>
                    <h3 className="text-2xl mb-3 group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-text-dark font-semibold mb-1">{card.primary}</p>
                    <p className="text-text-medium">{card.secondary}</p>
                  </div>
                </Card>
              </a>
            );
          })}
        </div>
      </Section>

      {/* Store Hours */}
      <Section background="cream">
        <div className="max-w-4xl mx-auto">
          <Card>
            <div className="p-8 md:p-12">
              <div className="flex items-center justify-center gap-3 mb-8">
                <Clock className="w-8 h-8 text-primary" />
                <h2 className="text-center">Store Hours</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center p-6 bg-accent rounded-lg">
                  <h3 className="text-2xl mb-4 text-dark-teal">Store, Grooming & Pharmacy</h3>
                  <p className="text-xl text-dark-teal font-semibold">Open Daily</p>
                  <p className="text-3xl font-fredoka text-dark-teal mt-2">10:00 AM - 10:00 PM</p>
                </div>

                <div className="text-center p-6 bg-white rounded-lg border-2 border-primary">
                  <h3 className="text-2xl mb-4 text-primary">Veterinary Clinic</h3>
                  <p className="text-lg text-text-medium mb-3">Please call before visiting</p>
                  <p className="text-text-medium">Doctor availability varies</p>
                  <p className="text-primary font-semibold mt-4">Call 7411576879 to confirm</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Map and Address */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="mb-4">Visit Our Store</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Map */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.5!2d88.3247!3d22.5403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDMyJzI1LjEiTiA4OMKwMTknMjguOSJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pet's Need Location"
              />
            </div>
          </div>

          {/* Address */}
          <div className="lg:col-span-2">
            <Card>
              <div className="p-8">
                <h3 className="text-2xl mb-6">Location</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-text-dark mb-1">Pet's Need</p>
                      <p className="text-text-medium">
                        10/1D, Diamond Harbour Road<br />
                        Alipore, Kolkata<br />
                        West Bengal 700027
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-text-dark mb-1">Phone</p>
                      <a
                        href="tel:7411576879"
                        className="text-text-medium hover:text-primary transition-colors"
                      >
                        7411576879
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-text-dark mb-1">Email</p>
                      <a
                        href="mailto:contact@petsneed.in"
                        className="text-text-medium hover:text-primary transition-colors"
                      >
                        contact@petsneed.in
                      </a>
                    </div>
                  </div>

                  <div className="pt-4">
                    <a
                      href="https://www.google.com/maps/place/Pet's+Need/@22.5403,88.3247"
                      className="btn-primary w-full justify-center"
                    >
                      <MapPin className="w-5 h-5" />
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Have Questions */}
      <Section background="cream">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="mb-4">Have Questions?</h2>
          <p className="text-xl text-text-medium">
            Check out our FAQ section for quick answers, or give us a call at 7411576879. We're always happy to help!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion items={faqItems} />
        </div>
      </Section>
    </>
  );
}
