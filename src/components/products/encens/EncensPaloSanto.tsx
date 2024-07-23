import Image from "next/image";
import { StarIcon } from "@heroicons/react/20/solid";
import { EncensInterface } from "@/interface/EncensInterface";
import Link from "next/link";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

interface EncensPaloSantoProps {
	products: EncensInterface[];
}

export default function EncensPorteEncens({ products }: EncensPaloSantoProps) {
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
				<h2 className="sr-only">Porte encens</h2>

				<div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
					{products.map((product) => (
						<div key={product.id} className="group relative border-b border-r border-gray-200 p-4 sm:p-6">
							<div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
								<Image alt={product.imageAlt} src={product.imageSrc} className="h-full w-full object-cover object-center" width={200} height={300} />
							</div>
							<div className="pb-4 pt-10 text-center">
								<h3 className="text-sm font-medium text-gray-900">
									<Link href={`/encens/batons/${product.id}`}>
										<span aria-hidden="true" className="absolute inset-0" />
										{product.name}
									</Link>
								</h3>
								<div className="mt-3 flex flex-col items-center">
									<p className="sr-only">{product.rating} sur 5 étoiles</p>
									<div className="flex items-center">
										{[0, 1, 2, 3, 4].map((rating) => (
											<StarIcon key={rating} aria-hidden="true" className={classNames(product.rating > rating ? "text-yellow-400" : "text-gray-200", "h-5 w-5 flex-shrink-0")} />
										))}
									</div>
									<p className="mt-1 text-sm text-gray-500">{product.reviewCount} évaluations</p>
								</div>
								<p className="mt-4 text-base font-medium text-gray-900">{product.price}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
