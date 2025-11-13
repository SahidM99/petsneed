'use client';

import React, { useState } from 'react';

const productCategories = {
  'Pet Food': [
    { name: 'Dry Dog Food', desc: 'Complete nutrition for all breeds and life stages', brands: 'Pedigree, Royal Canin, Drools, Farmina', icon: '🍖' },
    { name: 'Wet Dog Food', desc: 'Flavorful meals in cans and pouches', brands: 'Pedigree, Cesar, Purina', icon: '🥫' },
    { name: 'Cat Food', desc: 'Complete meals for feline health', brands: 'Whiskas, Royal Canin, Me-O', icon: '🐱' },
    { name: 'Breed-Specific Formulas', desc: 'Tailored nutrition for specific breeds', brands: 'Royal Canin, Farmina', icon: '🏆' },
    { name: 'Puppy & Kitten Food', desc: 'Growth formulas for young pets', brands: 'Royal Canin, Drools, Whiskas', icon: '🐕' },
    { name: 'Small Pet Food', desc: 'Pellets and mixes for rabbits, hamsters, guinea pigs', brands: 'Vitapol, Taiyo', icon: '🐹' },
    { name: 'Bird Food', desc: 'Seeds, pellets, and treats for birds', brands: 'Vitapol, Taiyo', icon: '🦜' },
    { name: 'Fish Feed', desc: 'Flakes, pellets, and live feed options', brands: 'Taiyo, Takara, Tetra', icon: '🐠' },
  ],
  'Treats': [
    { name: 'Training Treats', desc: 'Perfect for positive reinforcement training', brands: 'Choostix, Meat Up, SmartHeart', icon: '🎯' },
    { name: 'Chew Sticks', desc: 'Long-lasting chews for dental health', brands: 'Pedigree, Choostix', icon: '🦴' },
    { name: 'Jerky Strips', desc: 'Real meat treats dogs love', brands: 'Meat Up, Choostix', icon: '🥓' },
    { name: 'Biscuits', desc: 'Crunchy rewards in various flavors', brands: 'Pedigree, Choostix, Meat Up', icon: '🍪' },
    { name: 'Dental Chews', desc: 'Reduce plaque and freshen breath', brands: 'Pedigree, Greenies-style', icon: '🦷' },
    { name: 'Natural Treats', desc: 'Wholesome treats with no artificial additives', brands: 'Various', icon: '🌿' },
    { name: 'Catnip Products', desc: 'Dried catnip and catnip-infused treats', brands: 'Various', icon: '🌱' },
    { name: 'Lickable Treats', desc: 'Creamy treats in convenient tubes', brands: 'Me-O, Inaba-style', icon: '👅' },
  ],
  'Toys': [
    { name: 'Chew Toys', desc: 'Safe, durable toys for aggressive chewers', brands: 'Kong-style, Rubber toys', icon: '🔴' },
    { name: 'Plush Toys', desc: 'Soft, cuddly companions for gentle play', brands: 'Various squeaky toys', icon: '🧸' },
    { name: 'Interactive Toys', desc: 'Toys that make sound and engage pets', brands: 'Squeaky balls, Interactive puzzles', icon: '🎾' },
    { name: 'Cat Teasers', desc: 'Wand toys with feathers and strings', brands: 'Feather wands, String toys', icon: '🪶' },
    { name: 'Laser Pointers', desc: 'Interactive chase toys for cats', brands: 'Various laser toys', icon: '🔦' },
    { name: 'Scratching Posts', desc: 'Essential for healthy cat claws', brands: 'Sisal posts, Cardboard scratchers', icon: '🪵' },
    { name: 'Cat Tunnels', desc: 'Collapsible tunnels for hiding and playing', brands: 'Various play tunnels', icon: '🌊' },
    { name: 'Puzzle Toys', desc: 'Mental stimulation through play', brands: 'Treat-dispensing, Hide-and-seek', icon: '🧩' },
  ],
  'Accessories': [
    { name: 'Collars & Leashes', desc: 'Comfortable, adjustable, and stylish', brands: 'Nylon, Leather, Reflective', icon: '🔗' },
    { name: 'Harnesses', desc: 'Secure and comfortable walking gear', brands: 'Vest, No-pull, Step-in', icon: '🎽' },
    { name: 'Feeding Bowls', desc: 'Durable, easy-to-clean food and water bowls', brands: 'Stainless steel, Ceramic', icon: '🥣' },
    { name: 'Water Dispensers', desc: 'Fresh water fountains and gravity feeders', brands: 'Automatic, Filtered', icon: '💧' },
    { name: 'Pet Beds', desc: 'Comfortable sleeping spots for rest', brands: 'Orthopedic, Bolster, Cave', icon: '🛏️' },
    { name: 'Mats & Blankets', desc: 'Cozy layers for warmth and comfort', brands: 'Fleece, Sherpa, Waterproof', icon: '🧣' },
    { name: 'Litter Boxes', desc: 'Essential for indoor cats', brands: 'Covered, Open, Self-cleaning', icon: '📦' },
    { name: 'Carriers & Crates', desc: 'Safe transport for vet visits and travel', brands: 'Soft-sided, Hard plastic', icon: '🧳' },
    { name: 'ID Tags', desc: 'Custom identification for pet safety', brands: 'Engraved metal, QR code', icon: '🏷️' },
    { name: 'Pet Clothing', desc: 'Jackets, sweaters, and costumes', brands: 'Winter coats, Raincoats', icon: '👕' },
  ],
  'Grooming': [
    { name: 'Shampoos', desc: 'Gentle cleansing for healthy coats', brands: 'Anti-fungal, Tick/flea, Medicated', icon: '🧴' },
    { name: 'Conditioners', desc: 'Moisturizing formulas for soft fur', brands: 'Detangling, Shine enhancers', icon: '💧' },
    { name: 'Brushes & Combs', desc: 'Remove loose fur and prevent matting', brands: 'Slicker, Pin, Bristle, Flea comb', icon: '🪮' },
    { name: 'De-Shedding Tools', desc: 'Reduce shedding by up to 90%', brands: 'FURminator-style, Rake, Glove', icon: '✨' },
    { name: 'Nail Clippers', desc: 'Safe, sharp trimmers for all sizes', brands: 'Guillotine, Scissor, Grinder', icon: '✂️' },
    { name: 'Ear Cleaning Wipes', desc: 'Gentle cleaning for healthy ears', brands: 'Alcohol-free, Soothing formula', icon: '👂' },
    { name: 'Eye Wipes', desc: 'Remove tear stains and debris', brands: 'pH-balanced, Non-irritating', icon: '👁️' },
    { name: 'Pet Perfumes', desc: 'Fresh scents between baths', brands: 'Lavender, Vanilla, Baby powder', icon: '🌸' },
    { name: 'Toothbrushes', desc: 'Dental care for fresh breath', brands: 'Chicken, Beef, Mint flavored', icon: '🪥' },
  ],
  'Health': [
    { name: 'Deworming Tablets', desc: 'Regular parasite prevention', brands: 'Trusted veterinary formulas', icon: '💊' },
    { name: 'Tick & Flea Prevention', desc: 'Topical treatments and collars', brands: 'Spot-on, Oral, Collar, Spray', icon: '🐜' },
    { name: 'Antiseptic Sprays', desc: 'Clean and protect minor wounds', brands: 'Wound care sprays', icon: '🩹' },
    { name: 'Wound Creams', desc: 'Promote faster recovery', brands: 'Antibacterial, Soothing', icon: '🧴' },
    { name: 'Vitamins & Supplements', desc: 'Support overall health and vitality', brands: 'Multivitamins, Joint support', icon: '💊' },
    { name: 'Probiotics', desc: 'Digestive health support', brands: 'Powder, Chews', icon: '🧬' },
    { name: 'Joint Supplements', desc: 'Mobility support for aging pets', brands: 'Glucosamine, Chondroitin', icon: '🦴' },
    { name: 'Ear Drops', desc: 'Treatment for ear infections and mites', brands: 'Antibacterial, Anti-fungal', icon: '💧' },
    { name: 'Eye Drops', desc: 'Relief for eye irritation and infections', brands: 'Dry eyes, Redness relief', icon: '👁️' },
    { name: 'First Aid Kit', desc: 'Essential supplies for emergencies', brands: 'Bandages, Gauze, Scissors', icon: '🩺' },
  ],
};

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState<string>('Pet Food');

  return (
    <div>
      {/* Tab Bar */}
      <div className="border-b border-gray-200 mb-12 overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 min-w-max pb-2">
          {Object.keys(productCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-3 font-poppins font-semibold whitespace-nowrap transition-all ${
                activeTab === category
                  ? 'text-primary border-b-4 border-primary'
                  : 'text-text-medium hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productCategories[activeTab as keyof typeof productCategories].map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-400 hover:-translate-y-2 overflow-hidden"
          >
            <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                <span className="text-4xl">{product.icon}</span>
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-xl mb-2">{product.name}</h4>
              <p className="text-text-medium mb-3 leading-relaxed">{product.desc}</p>
              <p className="text-sm text-primary font-semibold">
                {product.brands}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
