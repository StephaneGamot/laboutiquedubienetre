"use client";

import { useEffect, useState } from "react";
import EncensResine from "@/components/products/encens/EncensResine";
import { EncensInterface } from "@/interface/EncensInterface";
import ResineData from "@/data/encens/encensResineData.json";

export default function EncensResinePage() {
	const [products, setProducts] = useState<EncensInterface[]>([]);

	useEffect(() => {
		// Simulate fetching data from an API or a file
		setProducts(ResineData);
	}, []);

	if (!products) {
		return <div>Loading...</div>;
	}

	return (
		<main className="bg-white py-12">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
				<h1 className="text-3xl font-semibold tracking-tight text-emerald-800 sm:text-4xl lg:text-5xl">La Boutique du Bien-être & Spiritualité</h1>
				<p className="mt-4 max-w-2xl text-lg text-emerald-700 mx-auto">Découvrez notre collection de bijoux soigneusement sélectionnés pour votre bien-être.</p>
				<EncensResine products={products} />
			</div>
		</main>
	);
}
