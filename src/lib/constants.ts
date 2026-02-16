export const SITE_NAME = "Slaagsnel";
export const SITE_DESCRIPTION =
  "Rijschool Slaagsnel - Betaalbare en kwalitatieve rijlessen. 80 minuten per les, alle examenroutes, en een vast bedrag tot aan je rijbewijs.";
export const SITE_URL = "https://slaagsnel.nl";

export const WHATSAPP_NUMBER = "31624657933";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const PHONE_NUMBER = "+31 6 24657933";


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
