"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import { getCategoryIcon } from "@/components/product-icons";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem, items } = useCart();
  const inCart = items.find((item) => item.product.id === product.id);

  const Icon = getCategoryIcon(product.category);

  return (
    <Card className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <Badge variant="secondary">{product.category}</Badge>
          {!product.inStock && (
            <Badge variant="destructive">Nicht verfügbar</Badge>
          )}
        </div>
        <div className="flex justify-center py-4">
          <Icon className="h-20 w-20 text-primary opacity-80" />
        </div>
        <CardTitle className="text-lg leading-tight">
          <Link href={`/online-shop/product/${product.id}`} className="hover:text-primary transition-colors">
            {product.name}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground line-clamp-3">{product.description}</p>
        <p className="text-xs text-muted-foreground mt-2">SKU: {product.sku}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between pt-2 border-t">
        <span className="text-xl font-bold text-primary">
          {product.price.toFixed(2).replace('.', ',')} €
        </span>
        <Button
          onClick={() => addItem(product.id)}
          disabled={!product.inStock}
          size="sm"
        >
          {inCart ? `Im Warenkorb (${inCart.quantity})` : "In den Warenkorb"}
        </Button>
      </CardFooter>
    </Card>
  );
}
