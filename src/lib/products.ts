export type Category = "Motoröl" | "Filter" | "Bremsen" | "Zündung";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  sku: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "oil-5w30-1",
    name: "Castrol Edge 5W-30",
    description: "Vollsynthetisches Motoröl für moderne Ottomotoren und Dieselmotoren. Hervorragende Leistung bei extremen Temperaturen.",
    price: 24.99,
    category: "Motoröl",
    sku: "CAST-5W30-5L",
    inStock: true,
  },
  {
    id: "oil-5w30-2",
    name: "Liqui Moly Leichtlauf 5W-30",
    description: "Hochwertiges Leichtlaufmotorenöl mit Molybdän-Disulfid (MoS₂) Additiv. Reduziert Reibung und Verschleiß.",
    price: 29.49,
    category: "Motoröl",
    sku: "LIQ-5W30-5L",
    inStock: true,
  },
  {
    id: "oil-10w40-1",
    name: "Castrol GTX 10W-40",
    description: "Halbsynthetisches Motoröl für ältere Fahrzeuge und hohe Laufleistung. Zuverlässiger Schutz gegen Schlammablagerungen.",
    price: 18.99,
    category: "Motoröl",
    sku: "CAST-10W40-5L",
    inStock: true,
  },
  {
    id: "oil-10w40-2",
    name: "Aral SuperTronic 10W-40",
    description: "Premium-Motoröl mit hochwertigem Additivpaket für lange Ölwechselintervalle und maximalen Motorschutz.",
    price: 22.49,
    category: "Motoröl",
    sku: "ARAL-10W40-5L",
    inStock: true,
  },
  {
    id: "filter-air-1",
    name: "Bosch Luftfilter S0105",
    description: "Hochwertiger Luftfilter für optimale Luftreinigung. Passt für VW Golf, Audi A3, Seat Leon und weitere Modelle.",
    price: 14.99,
    category: "Filter",
    sku: "BOSCH-AF-S0105",
    inStock: true,
  },
  {
    id: "filter-air-2",
    name: "Mann-Filter C 30 005",
    description: "Premium Luftfilter mit hoher Staubaufnahmekapazität. Langlebig und zuverlässig für saubere Motorluft.",
    price: 12.49,
    category: "Filter",
    sku: "MANN-C30005",
    inStock: true,
  },
  {
    id: "filter-oil-1",
    name: "Bosch Ölfilter F026407183",
    description: "Präzisions-Ölfilter mit hoher Schmutzaufnahmekapazität. Für optimale Ölreinigung und Motorschutz.",
    price: 8.99,
    category: "Filter",
    sku: "BOSCH-OF-F026",
    inStock: true,
  },
  {
    id: "filter-oil-2",
    name: "Mann-Filter HU 7008z",
    description: "Hochwertiger Ölfilter für moderne Motoren mit Start-Stopp-System. Langlebige Konstruktion.",
    price: 11.29,
    category: "Filter",
    sku: "MANN-HU7008Z",
    inStock: true,
  },
  {
    id: "brake-pad-1",
    name: "ATE Ceramic Bremsbeläge",
    description: "Keramische Bremsbeläge für reduzierten Bremsstaub und leiseres Bremsen. Passend für viele BMW und Mercedes Modelle.",
    price: 49.99,
    category: "Bremsen",
    sku: "ATE-CERAMIC-BP",
    inStock: true,
  },
  {
    id: "brake-pad-2",
    name: "Brembo P 85 020",
    description: "Sportliche Bremsbeläge für optimale Bremsleistung. Ideal für anspruchsvolle Fahrer und Kurvenfahrten.",
    price: 64.49,
    category: "Bremsen",
    sku: "BREMBO-P85020",
    inStock: true,
  },
  {
    id: "brake-disc-1",
    name: "Brembo Bremsscheiben Satz",
    description: "Hochleistungs-Bremsscheiben aus kohlenstoffhaltigem Gusseisen. Verbesserte Kühlung und längere Lebensdauer.",
    price: 89.99,
    category: "Bremsen",
    sku: "BREMBO-DISC-SET",
    inStock: true,
  },
  {
    id: "spark-ngk-1",
    name: "NGK Iridium Zündkerzen",
    description: "Premium Iridium-Zündkerzen für optimale Zündung und verbesserte Kraftstoffeffizienz. Passend für viele asiatische Fahrzeuge.",
    price: 39.99,
    category: "Zündung",
    sku: "NGK-IRIDIUM-4X",
    inStock: true,
  },
  {
    id: "spark-bosch-1",
    name: "Bosch Platinum Zündkerzen",
    description: "Platin-Zündkerzen mit vier Elektroden für langlebige und zuverlässige Zündung. Für europäische Fahrzeuge.",
    price: 34.49,
    category: "Zündung",
    sku: "BOSCH-PLAT-4X",
    inStock: true,
  },
  {
    id: "spark-denso-1",
    name: "Denso TT Zündkerzen",
    description: "Twin-Tip Technologie für effizientere Verbrennung und bessere Beschleunigung. Günstige Alternative ohne Qualitätsverlust.",
    price: 28.99,
    category: "Zündung",
    sku: "DENSO-TT-4X",
    inStock: true,
  },
];

export const categories: Category[] = ["Motoröl", "Filter", "Bremsen", "Zündung"];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category);
}
