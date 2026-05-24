"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";

interface CartClientProps {
  productId: string;
  inStock: boolean;
}

export function CartClient({ productId, inStock }: CartClientProps) {
  const { addItem, items, updateQuantity } = useCart();
  const inCart = items.find((item) => item.product.id === productId);

  return (
    <div className="flex items-center gap-3">
      {inCart ? (
        <>
          <Button
            variant="outline"
            size="icon"
            onClick={() => updateQuantity(productId, inCart.quantity - 1)}
          >
            −
          </Button>
          <span className="text-lg font-medium w-8 text-center">{inCart.quantity}</span>
          <Button variant="outline" size="icon" onClick={() => addItem(productId)}>
            +
          </Button>
        </>
      ) : (
        <Button
          size="lg"
          onClick={() => addItem(productId)}
          disabled={!inStock}
          className="w-full sm:w-auto"
        >
          In den Warenkorb
        </Button>
      )}
    </div>
  );
}
