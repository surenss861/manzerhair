// Schema.org structured data for SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "@id": "https://www.manzerhair.com/#organization",
  name: "Manzer Hair Studio",
  alternateName: "Manzer Hair",
  url: "https://www.manzerhair.com",
  logo: "https://www.manzerhair.com/manzer-logo.avif",
  image: "https://www.manzerhair.com/og-image.jpg",
  description:
    "Green Circle certified sustainable hair salon in Toronto's Danforth neighborhood (Greektown, Toronto East). Award-winning stylists offering PPD-free color, cruelty-free products, and expert hair services.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1993 Danforth Ave",
    addressLocality: "Toronto",
    addressRegion: "ON",
    postalCode: "M4C 1J6",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "43.6819",
    longitude: "-79.3042",
  },
  telephone: "+1-416-XXX-XXXX",
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "17:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://www.instagram.com/manzerhair",
    "https://www.facebook.com/manzerhair",
  ],
  areaServed: [
    {
      "@type": "City",
      name: "Toronto",
    },
    {
      "@type": "Neighborhood",
      name: "Danforth",
    },
    {
      "@type": "Neighborhood",
      name: "Greektown",
    },
    {
      "@type": "Area",
      name: "Toronto East",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Hair Salon Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Haircuts",
          description: "Precision cuts tailored to your face shape and style. Starting at $85.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hair Colouring",
          description: "PPD-free color techniques including balayage and highlights. Starting at $150.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Balayage & Blonde",
          description: "Specialized blonde techniques and hand-painted balayage. Starting at $200.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bridal Hair",
          description: "Complete bridal hair services including trials and day-of styling.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hair Treatments",
          description: "Keratin smoothing, deep conditioning, and scalp therapy. Starting at $120.",
        },
      },
    ],
  },
  award: "Green Circle Certified",
  knowsAbout: [
    "Sustainable Hair Care",
    "PPD-Free Hair Color",
    "Cruelty-Free Products",
    "Eco-Friendly Salon Practices",
  ],
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Hair Salon Services",
  provider: {
    "@type": "BeautySalon",
    name: "Manzer Hair Studio",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Toronto",
    },
    {
      "@type": "Neighborhood",
      name: "Danforth",
    },
    {
      "@type": "Neighborhood",
      name: "Greektown",
    },
  ],
  description:
    "Eco-friendly hair salon services in Toronto's Danforth neighborhood (Greektown, Toronto East). Green Circle certified, PPD-free color, cruelty-free products.",
};

// Enhanced LocalBusiness schema with Reviews
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.manzerhair.com/#localbusiness",
  name: "Manzer Hair Studio",
  image: "https://www.manzerhair.com/manzer-logo.avif",
  url: "https://www.manzerhair.com",
  telephone: "+1-416-XXX-XXXX",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1993 Danforth Ave",
    addressLocality: "Toronto",
    addressRegion: "ON",
    postalCode: "M4C 1J6",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "43.6819",
    longitude: "-79.3042",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "17:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Sarah M.",
      },
      datePublished: "2024-01-15",
      reviewBody: "Manzer transformed not just my hair, but my confidence.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Jessica K.",
      },
      datePublished: "2024-02-20",
      reviewBody: "I've been coming here for three years. The stylists are artists.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
  ],
  sameAs: [
    "https://www.instagram.com/manzerhair",
    "https://www.facebook.com/manzerhair",
    "https://g.page/r/manzer-hair-studio",
  ],
};

// FAQ Schema for common questions
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Manzer Hair Studio offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer custom cuts, balayage, dimensional highlights, root touch-ups, professional styling, and hair treatments. All services use eco-friendly, PPD-free color and cruelty-free products.",
      },
    },
    {
      "@type": "Question",
      name: "Do you accept walk-ins?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recommend booking in advance to ensure availability with your preferred stylist. Some stylists have limited weekly slots, so booking ahead is best.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Manzer Hair Studio eco-friendly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are Green Circle certified, use PPD-free color, cruelty-free products, and sustainable salon practices. We're committed to reducing our environmental impact while delivering premium hair services.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Manzer Hair Studio located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We're located at 1993 Danforth Ave in Toronto's Danforth neighborhood (Greektown). We're easily accessible by TTC and have parking available.",
      },
    },
    {
      "@type": "Question",
      name: "What are your hours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We're open Monday through Saturday from 9:00 AM to 7:00 PM, and Sunday from 10:00 AM to 5:00 PM.",
      },
    },
  ],
};

