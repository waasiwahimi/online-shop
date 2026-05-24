"use client";

import React from "react";
import Link from "next/link";
import { products, getProductById, type Category } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { OilIcon, FilterIcon, BrakeIcon, SparkIcon } from "@/components/product-icons";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = React.useState<Category | "Alle">("Alle");

  const filteredProducts =
    activeCategory === "Alle" ? products : products.filter((p) => p.category === activeCategory);

  const categories: { label: Category | "Alle"; icon?: typeof OilIcon }[] = [
    { label: "Alle" },
    { label: "Motoröl", icon: OilIcon },
    { label: "Filter", icon: FilterIcon },
    { label: "Bremsen", icon: BrakeIcon },
    { label: "Zündung", icon: SparkIcon },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-3">AutoteileShop</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Ihr zuverlässiger Partner für hochwertige Autoersatzteile. Motoröl, Filter, Bremsen und Zündkerzen – alles was Ihr Fahrzeug braucht.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((cat) => (
          <Button
            key={cat.label}
            variant={activeCategory === cat.label ? "default" : "outline"}
            onClick={() => setActiveCategory(cat.label)}
          >
            {cat.icon && <cat.icon className="h-4 w-4 mr-1.5" />}
            {cat.label}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          <p className="text-lg">Keine Produkte in dieser Kategorie gefunden.</p>
        </div>
      )}
    </div>
  );
}
