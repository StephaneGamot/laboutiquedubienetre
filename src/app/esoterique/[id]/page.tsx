"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { EsotericInterface } from "@/interface/EsotericInterface";
import esoteriqueData from "@/data/esoteriqueData.json";
import Image from "next/image";
import { StarIcon as SolidStarIcon } from "@heroicons/react/20/solid";
import { StarIcon as OutlineStarIcon } from "@heroicons/react/24/outline";
import { Disclosure, DisclosureButton, DisclosurePanel, RadioGroup, Radio, TabGroup, TabList, Tab, TabPanel, TabPanels } from "@headlessui/react";
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function ProductDetailsPage() {
	const params = useParams();
	const id = Array.isArray(params.id) ? params.id[0] : params.id;
	const [product, setProduct] = useState<EsotericInterface | null>(null);
	const [selectedColor, setSelectedColor] = useState<string | undefined>("");

	useEffect(() => {
		if (id) {
			const foundProduct = esoteriqueData.find((p) => p.id === parseInt(id, 10));
			setProduct(foundProduct || null);
			if (foundProduct && foundProduct.colors) {
				setSelectedColor(foundProduct.colors[0].name);
			}
		}
	}, [id]);

	if (!product) {
		return <div>Loading...</div>;
	}

	const renderStars = (rating: number) => {
		const fullStars = Math.floor(rating);
		const halfStar = rating % 1 !== 0;
		const emptyStars = 5 - Math.ceil(rating);

		return (
			<div className="flex items-center">
				{[...Array(fullStars)].map((_, index) => (
					<SolidStarIcon key={index} className="text-yellow-400 h-5 w-5 flex-shrink-0" aria-hidden="true" />
				))}
				{halfStar && <SolidStarIcon className="text-yellow-400 h-5 w-5 flex-shrink-0" style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" }} aria-hidden="true" />}
				{[...Array(emptyStars)].map((_, index) => (
					<OutlineStarIcon key={index} className="text-gray-300 h-5 w-5 flex-shrink-0" aria-hidden="true" />
				))}
			</div>
		);
	};

	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
					<TabGroup className="flex flex-col-reverse">
						<div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
							<TabList className="grid grid-cols-4 gap-6">
								{product.images?.map((image, index) => (
									<Tab
										key={image.id}
										className="group relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4">
										<span className="sr-only">{image.name}</span>
										<span className="absolute inset-0 overflow-hidden rounded-md">
											<Image
												alt={image.alt}
												src={image.src}
												className="h-full w-full object-cover object-center"
												width={200}
												height={300}
												priority={index === 0} // Add priority to the first image
											/>
										</span>
										<span
											aria-hidden="true"
											className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-[selected]:ring-emerald-800"
										/>
									</Tab>
								))}
							</TabList>
						</div>

						<TabPanels className="aspect-h-1 aspect-w-1 w-full">
							{product.images?.map((image) => (
								<TabPanel key={image.id}>
									<Image
										alt={image.alt}
										src={image.src}
										className="h-full w-full object-cover object-center sm:rounded-lg"
										width={200}
										height={300}
										priority={image.id === 1} // Add priority to the first image
									/>
								</TabPanel>
							))}
						</TabPanels>
					</TabGroup>

					<div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
						<h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
						<div className="mt-3">
							<h2 className="sr-only">Information sur le produit ciblé</h2>
							<p className="text-3xl tracking-tight text-gray-900">{product.price}</p>
						</div>

						<div className="mt-3">
							<h3 className="sr-only">Notes</h3>
							{renderStars(product.rating)}
							<p className="sr-only">{product.rating} jusque 5 étoiles</p>
						</div>

						<div className="mt-6">
							<h3 className="sr-only">Description</h3>
							<div dangerouslySetInnerHTML={{ __html: product.description || "No description available." }} className="space-y-6 text-base text-gray-700" />
						</div>

						<form className="mt-6">
							{product.colors && (
								<div>
									<h3 className="text-sm font-medium text-gray-600">Color</h3>
									<fieldset aria-label="Choose a color" className="mt-2">
										<RadioGroup value={selectedColor} onChange={setSelectedColor} className="flex items-center space-x-3">
											{product.colors.map((color) => (
												<Radio
													key={color.name}
													value={color.name}
													aria-label={color.name}
													className={classNames(
														color.selectedColor,
														"relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1"
													)}>
													<span aria-hidden="true" className={classNames(color.bgColor, "h-8 w-8 rounded-full border border-black border-opacity-10")} />
												</Radio>
											))}
										</RadioGroup>
									</fieldset>
								</div>
							)}

							<div className="mt-10 flex">
								<button
									type="submit"
									className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-emerald-700 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full">
									Ajouter au panier
								</button>

								<button type="button" className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
									<HeartIcon aria-hidden="true" className="h-6 w-6 flex-shrink-0" />
									<span className="sr-only">Ajouter aux favoris</span>
								</button>
							</div>
						</form>

						{product.details && (
							<section aria-labelledby="details-heading" className="mt-12">
								<h2 id="details-heading" className="sr-only">
									Informations supplémentaires
								</h2>
								<div className="divide-y divide-gray-200 border-t">
									{product.details.map((detail) => (
										<Disclosure key={detail.name} as="div">
											<h3>
												<DisclosureButton className="group relative flex w-full items-center justify-between py-6 text-left">
													<span className="text-sm font-medium text-gray-900 group-data-[open]:text-emerald-800">{detail.name}</span>
													<span className="ml-6 flex items-center">
														<PlusIcon aria-hidden="true" className="block h-6 w-6 text-gray-400 group-hover:text-gray-500 group-data-[open]:hidden" />
														<MinusIcon aria-hidden="true" className="hidden h-6 w-6 text-indigo-400 group-hover:text-emerald-700 group-data-[open]:block" />
													</span>
												</DisclosureButton>
											</h3>
											<DisclosurePanel className="prose prose-sm pb-6">
												<ul role="list">
													{detail.items.map((item) => (
														<li key={item}>{item}</li>
													))}
												</ul>
											</DisclosurePanel>
										</Disclosure>
									))}
								</div>
							</section>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
