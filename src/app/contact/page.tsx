"use client";

import Contact from "@/components/contact";
import { EncensInterface } from "@/interface/EncensInterface";
import encensData from "@/data/encens/encensData.json";

export default function ContactPage() {
	return (
		<main className="bg-white py-12">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
				<h1 className="text-3xl font-semibold tracking-tight text-emerald-800 sm:text-4xl lg:text-5xl">La Boutique du Bien-être & Spiritualité</h1>
				<Contact />
			</div>
		</main>
	);
}
