import React from 'react';

export default function StructuredData() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://petsneed.in',
    name: "Pet's Need",
    image: 'https://petsneed.in/og-image.jpg',
    url: 'https://petsneed.in',
    telephone: '7411576879',
    email: 'contact@petsneed.in',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '10/1D, Diamond Harbour Road',
      addressLocality: 'Alipore',
      addressRegion: 'WB',
      postalCode: '700027',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '22.5403',
      longitude: '88.3247',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '10:00',
        closes: '22:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '242',
    },
    sameAs: [
      'https://www.google.com/maps/place/Pet\'s+Need/@22.5403,88.3247',
    ],
  };

  const veterinaryCareSchema = {
    '@context': 'https://schema.org',
    '@type': 'VeterinaryCare',
    name: "Pet's Need Veterinary Clinic",
    address: {
      '@type': 'PostalAddress',
      streetAddress: '10/1D, Diamond Harbour Road',
      addressLocality: 'Alipore',
      addressRegion: 'West Bengal',
      postalCode: '700027',
      addressCountry: 'IN',
    },
    telephone: '7411576879',
    url: 'https://petsneed.in/clinic',
  };

  const petStoreSchema = {
    '@context': 'https://schema.org',
    '@type': 'PetStore',
    name: "Pet's Need",
    description: 'Quality pet supplies for dogs, cats, birds, and small animals in Alipore, Kolkata',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '10/1D, Diamond Harbour Road',
      addressLocality: 'Alipore',
      addressRegion: 'West Bengal',
      postalCode: '700027',
      addressCountry: 'IN',
    },
    telephone: '7411576879',
    url: 'https://petsneed.in/products',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(veterinaryCareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(petStoreSchema) }}
      />
    </>
  );
}
