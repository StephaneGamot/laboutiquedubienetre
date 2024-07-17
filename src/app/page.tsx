"use client";
import { useState, useEffect } from "react";
import Hero from "./../components/Hero";
import { ProductInterface } from "@/interface/ProductInterface";
import HeroData from "../data/heroData.json";

export default function Home() {
	const [products, setProducts] = useState<ProductInterface[]>(HeroData as ProductInterface[]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		// No need to fetch, data is imported directly
		setProducts(HeroData as ProductInterface[]);
	}, []);

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<main className="bg-white py-12">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
				<h1 className="text-3xl font-semibold tracking-tight text-emerald-800 sm:text-4xl lg:text-5xl">La Boutique du Bien-être & Spiritualité</h1>
				<p className="mt-4 max-w-2xl text-lg text-emerald-700 mx-auto">Découvrez notre collection de produits spirituels et de méditation, soigneusement sélectionnés pour votre bien-être.</p>
				<Hero products={products} />
			</div>
		</main>
	);
}
