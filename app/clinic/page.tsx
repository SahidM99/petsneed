import React from 'react';
import { Stethoscope, Phone, Heart, Syringe, Activity, Home, FileText, Users, AlertCircle } from 'lucide-react';
import Hero from '@/components/Hero';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Accordion from '@/components/ui/Accordion';

export const metadata = {
  title: "Vet Clinic in Alipore Kolkata | Veterinary Doctor Near Me | Pet's Need",
  description: "Trusted veterinary clinic in Alipore, Kolkata. Experienced vets provide checkups, vaccinations, treatments for dogs, cats, birds. Serving South Kolkata. Call 7411576879 for appointment.",
};

const doctors = [
  {
    name: 'Dr. Amit Chatterjee',
    credentials: 'BVSc & AH',
    experience: '8 years',
    specialization: 'Small Animal Medicine & Surgery',
    description: 'Dr. Chatterjee completed his veterinary degree from West Bengal University of Animal & Fishery Sciences and has been caring for pets across Kolkata for nearly a decade. He specializes in internal medicine, diagnostics, and routine surgical procedures, with a gentle approach that puts nervous pets at ease.',
  },
  {
    name: 'Dr. Priya Banerjee',
    credentials: 'BVSc & AH, MVSc',
    experience: '6 years',
    specialization: 'Preventive Care & Pet Nutrition',
    description: 'Dr. Banerjee holds both bachelor\'s and master\'s degrees in veterinary science, with advanced training in preventive medicine and animal nutrition. She\'s passionate about educating pet parents on proper diet, weight management, and wellness programs that keep pets thriving throughout their lives.',
  },
  {
    name: 'Dr. Arjun Das',
    credentials: 'BVSc & AH',
    experience: '7 years',
    specialization: 'Emergency Care & Surgical Procedures',
    description: 'Dr. Das brings extensive experience in emergency veterinary medicine and has performed hundreds of successful surgeries. His calm demeanor and quick decision-making make him invaluable during critical situations. He\'s also skilled at post-operative care and rehabilitation guidance.',
  },
];

const services = [
  {
    title: 'General Consultation',
    description: 'Walk-in consultations for common pet health concerns including digestive issues, skin problems, behavioral changes, lethargy, or anything that seems unusual. Our vets perform thorough physical examinations and provide clear diagnosis and treatment plans. We also offer nutritional advice and behavioral counseling to address feeding concerns, weight management, and training challenges.',
    icon: Stethoscope,
  },
  {
    title: 'Vaccination & Preventive Care',
    description: 'Protect your pet from serious diseases with our comprehensive vaccination programs. We administer puppy and kitten vaccine series, annual booster shots, and anti-rabies vaccinations required by law. Our preventive care includes regular deworming schedules, tick and flea treatment programs, and parasite prevention.',
    icon: Syringe,
  },
  {
    title: 'Diagnostics',
    description: 'Accurate diagnosis starts with thorough examination. We perform complete physical examinations checking eyes, ears, mouth, heart, lungs, abdomen, skin, and coat. For suspected internal issues, we can arrange basic laboratory tests including blood work, stool analysis, and urine tests through our partner diagnostic facilities.',
    icon: Activity,
  },
  {
    title: 'Treatment Services',
    description: 'We treat a wide range of health issues right here in Alipore. Common treatments include fever management, bacterial and viral infections, wound care and minor injury treatment, dehydration therapy with fluid administration, poisoning first-aid and emergency stabilization, and skin conditions including allergies and fungal infections.',
    icon: Heart,
  },
  {
    title: 'Minor Surgical Procedures',
    description: 'When doctor availability permits, we perform routine surgical procedures including spaying and neutering, wound suturing and abscess drainage, lump and cyst removals, and other minor surgical interventions. All procedures are performed with appropriate anesthesia and pain management.',
    icon: Stethoscope,
  },
  {
    title: 'Home Visit Services',
    description: 'Can\'t bring your pet to the clinic? Our doctors provide at-home veterinary visits for aged, immobile, or extremely anxious pets. Home visits include checkups, vaccinations, follow-up consultations, and health assessments in the comfort of your own home. Please call to check doctor availability and service area coverage.',
    icon: Home,
  },
  {
    title: 'Pet Health Certificates',
    description: 'Planning to travel with your pet? We provide fit-to-travel certificates and health documentation required for interstate travel, airline journeys, and relocation. We\'ll conduct a thorough health examination and complete all necessary paperwork to ensure your pet meets travel requirements.',
    icon: FileText,
  },
];

const wellnessTips = [
  'Regular Checkups: Annual vet visits catch problems early',
  'Stay Current on Vaccines: Prevention is better than treatment',
  'Quality Nutrition: Feed age-appropriate, quality food',
  'Maintain Healthy Weight: Obesity causes serious health issues',
  'Dental Care: Brush teeth regularly, provide dental chews',
  'Parasite Prevention: Monthly tick/flea treatment in Kolkata\'s climate',
  'Exercise Daily: Physical activity keeps body and mind healthy',
  'Fresh Water Always: Hydration is crucial, especially in summer',
  'Grooming Routine: Regular grooming prevents skin issues',
  'Watch for Changes: You know your pet best—trust your instincts',
];

const urgentSigns = [
  'Difficulty breathing or persistent coughing',
  'Severe vomiting or diarrhea, especially with blood',
  'Refusal to eat or drink for more than 24 hours',
  'Lethargy, weakness, or collapse',
  'Seizures or loss of consciousness',
  'Visible injuries, bleeding, or limping',
  'Swollen or painful abdomen',
  'Straining to urinate or defecate',
  'Sudden behavior changes or signs of pain',
  'Exposure to toxins or poisonous substances',
];

const faqItems = [
  {
    question: 'Do you handle emergency cases?',
    answer: 'We provide first-aid and stabilization for many urgent situations during our operating hours. For life-threatening emergencies outside our doctor\'s availability or beyond our facility\'s scope, we can guide you to 24-hour emergency veterinary hospitals in Kolkata.',
  },
  {
    question: 'How much do consultations cost?',
    answer: 'Please call us for current consultation fees and treatment costs. Prices vary based on the services needed, and we\'re always transparent about costs before proceeding with treatment.',
  },
  {
    question: 'Can I get pet medicines from your pharmacy?',
    answer: 'Yes! Our pharmacy stocks commonly needed pet medications, supplements, vitamins, and preventive treatments. Prescription medications are dispensed when the doctor is available or with a valid prescription from another vet.',
  },
  {
    question: 'Do you treat birds and small animals?',
    answer: 'Yes, we provide care for rabbits, hamsters, guinea pigs, parrots, and other birds. Our vets have experience with various species beyond just dogs and cats.',
  },
  {
    question: 'Is payment required immediately?',
    answer: 'Yes, payment is typically required at the time of service. We accept cash and digital payments for your convenience.',
  },
];

export default function ClinicPage() {
  return (
    <>
      <Hero
        title="Veterinary Clinic in Alipore, Kolkata"
        subtitle="Expert veterinary care for your dog, cat, or small pet. From checkups to vaccinations to treatments, our experienced vets are here when your furry friend needs us most."
        primaryCTA={{ text: 'Call for Appointment', href: 'tel:7411576879' }}
      />

      {/* Important Notice */}
      <div className="bg-accent py-6">
        <div className="container-custom px-5 md:px-12">
          <div className="flex items-start gap-4 max-w-4xl mx-auto">
            <AlertCircle className="w-6 h-6 text-dark-teal flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-dark-teal text-lg mb-1">
                📞 Please call before visiting for clinic services
              </p>
              <p className="text-dark-teal">
                Clinic hours vary based on doctor availability. Our store and grooming services are open daily 10 AM - 10 PM. Call 7411576879 to confirm doctor availability before your visit.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl leading-relaxed text-text-medium">
            Your pet's health is our priority. At Pet's Need Veterinary Clinic in Alipore, Kolkata, we provide comprehensive medical care for dogs, cats, rabbits, birds, and other small animals. Our qualified veterinarians bring years of experience treating everything from routine checkups and vaccinations to infections, injuries, and health concerns. We believe in clear communication—we'll always explain what's happening with your pet and discuss treatment options in language you understand. Whether you need preventive care, diagnosis, or treatment, we're here to keep your best friend healthy and happy.
          </p>
        </div>
      </Section>

      {/* Meet Our Team */}
      <Section background="cream">
        <div className="text-center mb-16">
          <h2 className="mb-4">Meet Our Veterinary Team</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <Card key={index}>
              <div className="p-8 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl mb-2">{doctor.name}</h3>
                <p className="text-primary font-semibold mb-1">{doctor.credentials}</p>
                <p className="text-text-medium mb-2">Experience: {doctor.experience}</p>
                <p className="text-text-dark font-semibold mb-4">Specialization: {doctor.specialization}</p>
                <p className="text-text-medium leading-relaxed">{doctor.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Our Services */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="mb-4">Our Veterinary Services</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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

      {/* When to Visit */}
      <Section background="accent">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-center text-dark-teal">When to Visit the Vet</h2>
          <Card>
            <div className="p-8 md:p-12">
              <p className="text-lg text-text-dark mb-6 font-semibold">
                Some situations need immediate veterinary attention. Contact us right away if your pet shows any of these signs:
              </p>
              <ul className="space-y-3">
                {urgentSigns.map((sign, index) => (
                  <li key={index} className="flex items-start gap-3 text-text-medium">
                    <span className="text-primary font-bold text-xl">•</span>
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>
              <p className="text-text-medium mt-6 italic">
                For routine checkups, vaccinations, or non-urgent concerns, please call 7411576879 to schedule an appointment based on doctor availability.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Pet Wellness Tips */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="mb-4">Pet Wellness Tips</h2>
          <p className="text-xl text-text-medium">Keep Your Pet Healthy Year-Round</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {wellnessTips.map((tip, index) => (
            <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <p className="text-text-medium">{tip}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Clinic FAQs */}
      <Section background="cream">
        <div className="text-center mb-16">
          <h2 className="mb-4">Clinic FAQs</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion items={faqItems} />
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="text-center text-white">
          <h2 className="mb-6">Schedule Your Pet's Checkup</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Keep your furry friend healthy and happy with regular veterinary care. Call Pet's Need at 7411576879 to book an appointment with our experienced vets in Alipore, Kolkata. We serve pet parents throughout South Kolkata including Behala, Tollygunge, New Alipore, Kalighat, and surrounding areas.
          </p>
          <Button href="tel:7411576879" className="bg-white text-primary hover:bg-gray-100">
            <Phone className="w-5 h-5" />
            Call for Appointment
          </Button>
        </div>
      </Section>
    </>
  );
}
