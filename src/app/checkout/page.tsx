"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function CheckoutPage() {
  const { items, totalPrice, totalItems, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-lg">
        <Card className="text-center">
          <CardContent className="pt-8 pb-8">
            <div className="mb-4">
              <svg viewBox="0 0 24 24" className="h-16 w-16 mx-auto text-green-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold mb-2">Bestellung erfolgreich!</h1>
            <p className="text-muted-foreground mb-6">
              Vielen Dank für Ihre Bestellung. Dies ist ein Prototyp – keine echte Zahlung wurde durchgeführt.
            </p>
            <Link href="/online-shop">
              <Button>Zurück zum Shop</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Warenkorb ist leer</h1>
        <p className="text-muted-foreground mb-6">Fügen Sie Produkte hinzu, um zur Kasse zu gehen.</p>
        <Link href="/online-shop">
          <Button>Zum Shop</Button>
        </Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
  };

  const shipping = totalPrice >= 50 ? 0 : 5.99;
  const finalTotal = totalPrice + shipping;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link href="/online-shop" className="text-sm text-muted-foreground hover:text-primary">
          ← Zurück zum Shop
        </Link>
      </div>

      <h1 className="text-3xl font-bold tracking-tight mb-8">Kasse</h1>

      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Lieferadresse</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Name</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Max Mustermann"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">E-Mail</label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="max@beispiel.de"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Straße und Hausnummer</label>
                  <Input
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Musterstraße 123"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">PLZ</label>
                    <Input
                      required
                      value={formData.zip}
                      onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                      placeholder="12345"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Stadt</label>
                    <Input
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="Berlin"
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full mt-4">
                  Bestellung aufgeben (Simuliert)
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800">
              <strong>Hinweis:</strong> Dies ist ein Prototyp. Es wird keine echte Zahlung oder Lieferung durchgeführt.
            </p>
          </div>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Zusammenfassung</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">{item.product.name}</p>
                    <p className="text-sm text-muted-foreground">{item.quantity}x {item.product.price.toFixed(2).replace('.', ',')} €</p>
                  </div>
                  <p className="font-medium">
                    {(item.product.price * item.quantity).toFixed(2).replace('.', ',')} €
                  </p>
                </div>
              ))}

              <Separator />

              <div className="flex justify-between">
                <span className="text-muted-foreground">Zwischensumme ({totalItems} Artikel)</span>
                <span>{totalPrice.toFixed(2).replace('.', ',')} €</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Versand</span>
                <span className={shipping === 0 ? "text-green-600 font-medium" : ""}>
                  {shipping === 0 ? "Kostenlos" : `${shipping.toFixed(2).replace('.', ',')} €`}
                </span>
              </div>
              {shipping === 0 && (
                <p className="text-xs text-green-600">Gratis Versand ab 50 € erreicht!</p>
              )}

              <Separator />

              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">Gesamtsumme</span>
                <span className="text-2xl font-bold text-primary">
                  {finalTotal.toFixed(2).replace('.', ',')} €
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
