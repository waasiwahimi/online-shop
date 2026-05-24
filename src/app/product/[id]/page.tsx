import React from "react";
import Link from "next/link";
import { products, getProductById } from "@/lib/products";
import { CartClient } from "./cart-client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

const iconMap: Record<string, string> = {
  "Motoröl": "oil",
  "Filter": "filter",
  "Bremsen": "brake",
  "Zündung": "spark",
};

function getCategoryIconSvg(category: string): React.ReactNode {
  const icon = iconMap[category];
  if (icon === "oil") {
    return (
      <svg viewBox="0 0 64 64" className="h-48 w-48 text-primary opacity-80" fill="currentColor">
        <rect x="16" y="10" width="32" height="44" rx="4" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M20 20h24M20 28h24M20 36h16" stroke="currentColor" strokeWidth="2" />
        <path d="M24 46h16" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
        <rect x="26" y="2" width="12" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }
  if (icon === "filter") {
    return (
      <svg viewBox="0 0 64 64" className="h-48 w-48 text-primary opacity-80" fill="currentColor">
        <path d="M8 10h48l-18 24v16l-12 4v-20L8 10z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <line x1="16" y1="18" x2="48" y2="18" stroke="currentColor" strokeWidth="2" />
        <line x1="20" y1="26" x2="44" y2="26" stroke="currentColor" strokeWidth="2" />
        <circle cx="32" cy="40" r="2" fill="currentColor" />
        <line x1="32" y1="42" x2="32" y2="50" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }
  if (icon === "brake") {
    return (
      <svg viewBox="0 0 64 64" className="h-48 w-48 text-primary opacity-80" fill="currentColor">
        <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="32" cy="32" r="12" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="32" cy="32" r="4" fill="currentColor" />
        <path d="M32 8v12M32 44v12M8 32h12M44 32h12" stroke="currentColor" strokeWidth="2" />
        <line x1="16.7" y1="16.7" x2="25.5" y2="25.5" stroke="currentColor" strokeWidth="2" />
        <line x1="38.5" y1="38.5" x2="47.3" y2="47.3" stroke="currentColor" strokeWidth="2" />
        <line x1="47.3" y1="16.7" x2="38.5" y2="25.5" stroke="currentColor" strokeWidth="2" />
        <line x1="25.5" y1="38.5" x2="16.7" y2="47.3" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 64 64" className="h-48 w-48 text-primary opacity-80" fill="currentColor">
      <rect x="24" y="6" width="16" height="36" rx="2" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M28 42v12M36 42v12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="28" cy="18" r="3" fill="currentColor" />
      <circle cx="36" cy="30" r="3" fill="currentColor" />
      <path d="M16 12l-4-4M16 24l-4 4M48 12l4-4M48 24l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function getCategoryIconSmallSvg(category: string): React.ReactNode {
  const icon = iconMap[category];
  if (icon === "oil") {
    return (
      <svg viewBox="0 0 64 64" className="h-12 w-12 text-primary opacity-60 flex-shrink-0" fill="currentColor">
        <rect x="16" y="10" width="32" height="44" rx="4" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M20 20h24M20 28h24M20 36h16" stroke="currentColor" strokeWidth="2" />
        <path d="M24 46h16" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
        <rect x="26" y="2" width="12" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }
  if (icon === "filter") {
    return (
      <svg viewBox="0 0 64 64" className="h-12 w-12 text-primary opacity-60 flex-shrink-0" fill="currentColor">
        <path d="M8 10h48l-18 24v16l-12 4v-20L8 10z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <line x1="16" y1="18" x2="48" y2="18" stroke="currentColor" strokeWidth="2" />
        <line x1="20" y1="26" x2="44" y2="26" stroke="currentColor" strokeWidth="2" />
        <circle cx="32" cy="40" r="2" fill="currentColor" />
        <line x1="32" y1="42" x2="32" y2="50" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }
  if (icon === "brake") {
    return (
      <svg viewBox="0 0 64 64" className="h-12 w-12 text-primary opacity-60 flex-shrink-0" fill="currentColor">
        <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="32" cy="32" r="12" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="32" cy="32" r="4" fill="currentColor" />
        <path d="M32 8v12M32 44v12M8 32h12M44 32h12" stroke="currentColor" strokeWidth="2" />
        <line x1="16.7" y1="16.7" x2="25.5" y2="25.5" stroke="currentColor" strokeWidth="2" />
        <line x1="38.5" y1="38.5" x2="47.3" y2="47.3" stroke="currentColor" strokeWidth="2" />
        <line x1="47.3" y1="16.7" x2="38.5" y2="25.5" stroke="currentColor" strokeWidth="2" />
        <line x1="25.5" y1="38.5" x2="16.7" y2="47.3" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12 text-primary opacity-60 flex-shrink-0" fill="currentColor">
      <rect x="24" y="6" width="16" height="36" rx="2" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M28 42v12M36 42v12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="28" cy="18" r="3" fill="currentColor" />
      <circle cx="36" cy="30" r="3" fill="currentColor" />
      <path d="M16 12l-4-4M16 24l-4 4M48 12l4-4M48 24l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Produkt nicht gefunden</h1>
        <p className="text-muted-foreground mb-6">Das gesuchte Produkt existiert nicht.</p>
        <Link href="/online-shop">
          <Button>Zurück zur Startseite</Button>
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link href="/online-shop" className="text-sm text-muted-foreground hover:text-primary">
          ← Zurück zur Übersicht
        </Link>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <div className="flex items-center justify-center bg-muted rounded-lg p-12">
          {getCategoryIconSvg(product.category)}
        </div>

        <div className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-2">
              {product.category}
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
            <p className="text-sm text-muted-foreground mt-1">SKU: {product.sku}</p>
          </div>

          <p className="text-muted-foreground leading-relaxed">{product.description}</p>

          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-primary">
              {product.price.toFixed(2).replace('.', ',')} €
            </span>
            {product.inStock ? (
              <Badge variant="default" className="bg-green-600 text-white hover:bg-green-700">
                Auf Lager
              </Badge>
            ) : (
              <Badge variant="destructive">Nicht verfügbar</Badge>
            )}
          </div>

          <CartClient productId={product.id} inStock={product.inStock} />
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <>
          <Separator className="my-8" />
          <h2 className="text-2xl font-bold mb-6">Ähnliche Produkte</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} href={`/online-shop/product/${p.id}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      {getCategoryIconSmallSvg(p.category)}
                      <div>
                        <h3 className="font-medium line-clamp-1">{p.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {p.price.toFixed(2).replace('.', ',')} €
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
