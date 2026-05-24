"use client";

import React from "react";
import { OilIcon, FilterIcon, BrakeIcon, SparkIcon } from "@/components/product-icons";
import { Category } from "@/lib/products";

const iconMap: Record<Category, typeof OilIcon> = {
  "Motoröl": OilIcon,
  "Filter": FilterIcon,
  "Bremsen": BrakeIcon,
  "Zündung": SparkIcon,
};

interface CategoryIconProps {
  category: Category;
  className?: string;
}

export function CategoryIcon({ category, className }: CategoryIconProps) {
  const Icon = iconMap[category];
  return <Icon className={className} />;
}
