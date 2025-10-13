import Script from 'next/script';

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "QUICKLIGHT Solar and Lighting Solutions Inc.",
    "image": "https://quicklight.pinoyentrepreneur.me/Hero.jpeg",
    "url": "https://quicklight.pinoyentrepreneur.me",
    "telephone": "+639176269698",
    "email": "info@quicklight.pinoyentrepreneur.me",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Altica Arcade, Circumferential Road",
      "addressLocality": "Antipolo City",
      "addressRegion": "Rizal",
      "addressCountry": "PH"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "12:00"
      }
    ],
    "sameAs": [
      "https://web.facebook.com/QuicklightSolar"
    ],
    "description": "QUICKLIGHT offers affordable and reliable solar panel systems, solar street lights, and traffic solutions in the Philippines. We help you lower your bills and embrace clean energy.",
    "hasOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Grid-Tied Home Solar Systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Net Metering & Power Quality Analysis"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Solar Street Lights"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "HVAC Solutions"
          }
        }
      ]
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
