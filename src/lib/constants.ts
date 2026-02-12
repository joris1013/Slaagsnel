export const SITE_NAME = "Slaagsnel";
export const SITE_DESCRIPTION =
  "Rijschool Slaagsnel - Betaalbare en kwalitatieve rijlessen. 80 minuten per les, alle examenroutes, en een vast bedrag tot aan je rijbewijs.";
export const SITE_URL = "https://slaagsnel.nl";

export const WHATSAPP_NUMBER = "31624657933";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const PHONE_NUMBER = "+31 6 24657933";

// Google Maps - Vul hier later het adres / locatie in
export const MAPS_QUERY = "Rijschool+Nederland"; // Vervang met exact adres
export const MAPS_EMBED_URL = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${MAPS_QUERY}`;
// Als je geen API key hebt, gebruik dan deze gratis variant:
export const MAPS_IFRAME_URL = `https://maps.google.com/maps?q=${MAPS_QUERY}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

export const ADDRESS = {
  street: "Straatnaam 1", // Vul later in
  city: "Amsterdam", // Vul later in
  zip: "1000 AA", // Vul later in
};

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#voordelen", label: "Voordelen" },
  { href: "#prijzen", label: "Prijzen" },
  { href: "#examen", label: "Examen" },
  { href: "#inschrijven", label: "Inschrijven" },
  { href: "#contact", label: "Contact" },
];

export const PRIJZEN = {
  losse_les: {
    title: "Losse Les",
    price: 75,
    duration: "80 min",
    description: "Probeer vrijblijvend een les",
    features: [
      "80 minuten per les",
      "Flexibel inplannen",
      "Ervaren instructeur",
    ],
  },
  totaalpakket: {
    title: "Totaalpakket",
    price: null, // Vast bedrag - later invullen
    priceLabel: "Vast bedrag",
    description: "Alles-in-1 tot aan je rijbewijs",
    features: [
      "Lessen van 80 minuten",
      "Tot aan je rijbewijs",
      "Alle examenroutes",
      "Geen verborgen kosten",
      "Theorie ondersteuning",
    ],
    highlighted: true,
  },
  examen_actie: {
    title: "Examen Actie",
    price: 180,
    originalPrice: 280,
    description: "Aanmelden voor het praktijkexamen",
    features: [
      "CBR examenaanmelding",
      "Examentraining inbegrepen",
      "Alle examenroutes geoefend",
    ],
  },
};
