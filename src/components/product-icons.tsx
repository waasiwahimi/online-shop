"use client";

import React from "react";

export function OilIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="currentColor">
      <rect x="16" y="10" width="32" height="44" rx="4" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M20 20h24M20 28h24M20 36h16" stroke="currentColor" strokeWidth="2" />
      <path d="M24 46h16" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
      <rect x="26" y="2" width="12" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function FilterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="currentColor">
      <path d="M8 10h48l-18 24v16l-12 4v-20L8 10z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <line x1="16" y1="18" x2="48" y2="18" stroke="currentColor" strokeWidth="2" />
      <line x1="20" y1="26" x2="44" y2="26" stroke="currentColor" strokeWidth="2" />
      <circle cx="32" cy="40" r="2" fill="currentColor" />
      <line x1="32" y1="42" x2="32" y2="50" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function BrakeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="currentColor">
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

export function SparkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="currentColor">
      <rect x="24" y="6" width="16" height="36" rx="2" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M28 42v12M36 42v12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="28" cy="18" r="3" fill="currentColor" />
      <circle cx="36" cy="30" r="3" fill="currentColor" />
      <path d="M16 12l-4-4M16 24l-4 4M48 12l4-4M48 24l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

export function MinusIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

export function PlusIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

export function TrashIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <line x1="10" y1="11" x2="10" y2="17" />
      <line x1="14" y1="11" x2="14" y2="17" />
    </svg>
  );
}

export function getCategoryIcon(category: string) {
  switch (category) {
    case "Motoröl":
      return OilIcon;
    case "Filter":
      return FilterIcon;
    case "Bremsen":
      return BrakeIcon;
    case "Zündung":
      return SparkIcon;
    default:
      return OilIcon;
  }
}
