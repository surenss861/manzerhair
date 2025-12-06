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
