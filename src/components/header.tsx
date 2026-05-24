"use client";

import React from "react";
import Link from "next/link";
import { CartDrawer } from "./cart-drawer";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/online-shop" className="flex items-center gap-2">
          <svg viewBox="0 0 32 32" className="h-8 w-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="10" cy="22" r="6" />
            <circle cx="22" cy="22" r="6" />
            <path d="M4 22h2M14 22h4M26 22h2" strokeWidth="2" />
            <path d="M8 18l4-10h8l4 10" />
          </svg>
          <span className="text-xl font-bold tracking-tight">AutoteileShop</span>
        </Link>
        <CartDrawer />
      </div>
    </header>
  );
}
