"use client";

import { useEffect, useState } from "react";
import Encens from "@/components/products/encens/Encens";
import { EncensInterface } from "@/interface/EncensInterface";
import EncensStickData from "@/data/encens/encensStickData.json";

export default function EncensBatonsPage() {
	const [products, setProducts] = useState<EncensInterface[]>([]);

	useEffect(() => {
		// Simulate fetching data from a local file
		setProducts(EncensStickData);
	}, []);

	if (!products) {
		return <div>Loading...</div>;
	}

	return (
		<main className="bg-white py-12">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
				<h1 className="text-3xl font-semibold tracking-tight text-emerald-800 sm:text-4xl lg:text-5xl">Les batons d&apos;encens</h1>
				<p className="mt-4 max-w-2xl text-lg text-emerald-700 mx-auto">Découvrez notre collection d&apos;encens soigneusement sélectionnés pour votre bien-être.</p>
				<Encens products={products} />
			</div>
		</main>
	);
}
