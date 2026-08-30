import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { INDIVIDUAL_BROWNIES, CURATED_BOXES, BrownieItem, CuratedBox } from '../../../lib/products';
import ProductDetailClient from './ProductDetailClient';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const brownieParams = INDIVIDUAL_BROWNIES.map((b) => ({ id: b.id }));
  const boxParams = CURATED_BOXES.map((box) => ({ id: box.id }));
  return [...brownieParams, ...boxParams];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const brownie = INDIVIDUAL_BROWNIES.find((b) => b.id === id);
  const box = CURATED_BOXES.find((b) => b.id === id);
  const item = brownie || box;

  if (!item) {
    return { title: 'Product Not Found | The Brownie Hub' };
  }

  return {
    title: `${item.name} — Handcrafted Artisanal Brownie | The Brownie Hub Chennai`,
    description: item.description,
    openGraph: {
      title: `${item.name} | The Brownie Hub`,
      description: item.description,
      images: [item.image],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const brownie = INDIVIDUAL_BROWNIES.find((b) => b.id === id);
  const box = CURATED_BOXES.find((b) => b.id === id);

  if (!brownie && !box) {
    notFound();
  }

  // Get related products for the pairing recommendation section
  const relatedItems = INDIVIDUAL_BROWNIES.filter((b) => b.id !== id).slice(0, 4);

  return (
    <div className="product-page-wrapper">
      <div className="product-page-container">
        {/* Breadcrumbs Navigation */}
        <nav className="product-breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="crumb-separator">&rsaquo;</span>
          <Link href="/menu">Menu</Link>
          <span className="crumb-separator">&rsaquo;</span>
          <span className="crumb-current">{brownie ? brownie.name : box?.name}</span>
        </nav>

        {/* Client Interactive Product Showcase */}
        <ProductDetailClient
          product={brownie || box!}
          isBox={Boolean(box)}
          relatedItems={relatedItems}
        />
      </div>
    </div>
  );
}
