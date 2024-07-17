"use client";

import { useEffect, useState } from "react";
import Others from "@/components/products/Others";
import { OthersInterface } from "@/interface/OthersInterface";
import othersData from "@/data/othersData.json";

export default function OthersPage() {
	const [products, setProducts] = useState<OthersInterface[]>([]);

	useEffect(() => {
		setProducts(othersData);
	}, []);

	if (products.length === 0) {
		return <div>Loading...</div>;
	}

	return (
		<main className="bg-white py-12">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
				<h1 className="text-3xl font-semibold tracking-tight text-emerald-800 sm:text-4xl lg:text-5xl">La Boutique du Bien-être & Spiritualité</h1>
				<p className="mt-4 max-w-2xl text-lg text-emerald-700 mx-auto">Découvrez notre collection de lampes de sel soigneusement sélectionnées pour votre bien-être.</p>
				<Others products={products} />
			</div>
		</main>
	);
}
