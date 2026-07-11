export const SITE_URL = "https://www.alexmassage.fr";
export const BUSINESS_ID = `${SITE_URL}/#business`;

/* Entité business complète — émise sur l'accueil et la page contact.
   L'@id unique permet à Google de fusionner toutes les mentions. */
export const businessLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": BUSINESS_ID,
  name: "Alex Massage",
  description:
    "Massage bien-être à domicile à Toulouse : californien, ayurvédique et sportif, en solo ou en duo.",
  url: `${SITE_URL}/`,
  telephone: "+33771838010",
  email: "contact@alexmassage.fr",
  priceRange: "€€",
  image: `${SITE_URL}/og-image.jpg`,
  /* Service Area Business : pas d'adresse publique (prestation à domicile,
     fiche Google en mode « zone desservie ») — la zone remplace l'adresse. */
  geo: { "@type": "GeoCoordinates", latitude: 43.60446, longitude: 1.44421 },
  /* Profils externes vérifiés — fiche Google Business Profile ;
     ajouter ensuite PagesJaunes / Facebook / Instagram quand ils existent. */
  sameAs: ["https://maps.app.goo.gl/kkjPhqm5aJjqnFJ3A"],
  areaServed: [
    { "@type": "City", name: "Toulouse" },
    { "@type": "City", name: "Muret" },
    { "@type": "City", name: "Colomiers" },
    { "@type": "City", name: "Blagnac" },
    { "@type": "City", name: "Tournefeuille" },
    { "@type": "City", name: "Balma" },
    { "@type": "City", name: "Labège" },
    { "@type": "City", name: "Ramonville-Saint-Agne" },
    { "@type": "City", name: "Castanet-Tolosan" },
    { "@type": "City", name: "Saint-Orens-de-Gameville" },
    { "@type": "City", name: "Plaisance-du-Touch" },
    {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 43.60446,
        longitude: 1.44421,
      },
      geoRadius: "30000",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Massage relaxant / californien à domicile à Toulouse",
      },
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        minPrice: 30,
        priceCurrency: "EUR",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Massage énergétique / abhyanga à domicile à Toulouse",
      },
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        minPrice: 50,
        priceCurrency: "EUR",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Massage suédois / sportif à domicile à Toulouse",
      },
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        minPrice: 50,
        priceCurrency: "EUR",
      },
    },
  ],
};

/* Référence courte vers l'entité — à utiliser en `provider`, `worksFor`, etc. */
export const businessRef = {
  "@type": "HealthAndBeautyBusiness",
  "@id": BUSINESS_ID,
  name: "Alex Massage",
};
