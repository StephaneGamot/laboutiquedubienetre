"use client";

import { useEffect, useState } from 'react';
import VieSaine from '@/components/products/VieSaine';
import { VieSaineInterface } from '@/interface/VieSaineInterface';
import VieSaineData from '@/data/vieSaineData.json';

export default function VieSainePage() {
  const [products, setProducts] = useState<VieSaineInterface[]>([]);

  useEffect(() => {
    // Simulate fetching data from a local file
    setProducts(VieSaineData);
  }, []);

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <main className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-emerald-800 sm:text-4xl lg:text-5xl">
          La Boutique du Bien-être & Spiritualité
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-emerald-700 mx-auto">
          Découvrez notre collection d&apos;encens soigneusement sélectionnés pour votre bien-être.
        </p>
        <VieSaine products={products} />
      </div>
    </main>
  );
}
