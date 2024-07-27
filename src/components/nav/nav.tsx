"use client";
import { useState, useEffect } from "react";
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/react";
import { MagnifyingGlassIcon, ShoppingBagIcon, Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import Logo from "./../../../public/Images/logo.webp";

interface NavigationItem {
  name: string;
  description?: string;
  href: string;
}

interface NavigationCategory {
  name: string;
  items: NavigationItem[];
}

interface Navigation {
  categories: NavigationCategory[];
  other: NavigationItem[];
}

const products: NavigationItem[] = [
  { name: "Bols tibétains", description: "Bols chantants en métal.", href: "/bols-tibetains" },
  { name: "Encens", description: "Encens naturels pour méditation.", href: "/encens" },
  { name: "Purification", description: "Sauge pour purification énergétique.", href: "/purification" },
  { name: "Bougies", description: "Bougies parfumées apaisantes.", href: "/bougies" },
  { name: "Bijoux", description: "Bijoux spirituels faits à la main.", href: "/bijoux" },
  { name: "Spiritualité", description: "Articles pour votre chemin spirituel.", href: "/spiritualite" },
  { name: "Vie saine", description: "Produits pour un mode de vie sain.", href: "/vie-saine" },
  { name: "Pierres minérales", description: "Pierres et cristaux énergétiques.", href: "/pierre-minerale" },
  { name: "Lampes", description: "Lampes de sel ou sélénite", href: "/lampes" },
  { name: "Esotérique", description: "Articles esotériques", href: "/esoterique" },
  { name: "Gua Sha", description: "Produits gua sha", href: "/gua-sha" },
  { name: "autres", description: "Un peu de tout", href: "/autre" },
];

const about: NavigationItem[] = [
  { name: "Testimonials", href: "#", description: "Avis de nos clients." },
  { name: "Mentions légales", href: "#", description: "Informations légales." },
  { name: "Confidentialité", href: "#", description: "Politique de confidentialité." },
  { name: "Termes et conditions", href: "#", description: "Conditions d'utilisation." },
  { name: "Livraison", href: "#", description: "Infos sur la livraison." },
  { name: "Paiement", href: "#", description: "Options de paiement." },
  { name: "FAQ", href: "#", description: "Questions fréquentes." },
];

const navigation: Navigation = {
  categories: [
    {
      name: "Produits",
      items: products,
    },
    {
      name: "A propos",
      items: about,
    },
  ],
  other: [{ name: "Contact", href: "/contact" }],
};

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePopover, setActivePopover] = useState<string | null>(null);

  useEffect(() => {
    if (activePopover) {
      const timer = setTimeout(() => {
        setActivePopover(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [activePopover]);

  return (
    <div className="bg-black text-white">
      <header className="relative bg-black z-10">
        <nav aria-label="Top" className="sticky top-0 mx-auto max-w-7xl sm:px-6 lg:px-8 bg-black shadow">
          <div className="flex flex-col lg:flex-row items-center justify-between border-b border-gray-700 px-4 sm:px-0">
            <div className="flex w-full items-center justify-between lg:hidden">
              <button
                type="button"
                className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-800"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
              </button>
              <Link href="/" className="flex items-center">
                <span className="sr-only">La boutique du bien-etre & spiritualité</span>
                <Image className="h-12  w-auto" src={Logo} alt="Logo représentant une fleur de lotus" />
              </Link>
              <Link href="#" className="group -m-2 flex items-center p-2">
                <ShoppingBagIcon aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-emerald-700" />
                <span className="ml-2 text-sm font-medium text-white group-hover:text-emerald-700">0</span>
                <span className="sr-only">items in cart, view bag</span>
              </Link>
            </div>
            <div className="w-full py-2 lg:hidden">
              <input
                type="text"
                placeholder="Recherche..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-700 focus:border-emerald-700"
              />
            </div>
            <div className="hidden lg:flex items-center justify-between h-20 w-full">
              <div className="flex items-center">
                <Link href="/" className="flex items-center">
                  <span className="sr-only">La boutique du bien-etre & spiritualité</span>
                  <Image className="h-12  w-auto" src={Logo} alt="Logo représentant une fleur de lotus" />
                </Link>
              </div>
              <div className="flex-grow mx-4">
                <input
                  type="text"
                  placeholder="Recherche..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-700 focus:border-emerald-700"
                />
              </div>
              <div className="flex items-center space-x-4">
                <Link href="#" className="text-sm font-semibold leading-6 text-white hover:text-emerald-700">
                  Log in <span aria-hidden="true">&rarr;</span>
                </Link>
               
                <Link href="#" className="group -m-2 flex items-center p-2">
                  <ShoppingBagIcon aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-emerald-700" />
                  <span className="ml-2 text-sm font-medium text-white group-hover:text-emerald-700">0</span>
                  <span className="sr-only">items in cart, view bag</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="border-b border-gray-700 px-4 sm:px-0 flex items-center justify-center lg:h-16">
            <PopoverGroup className="hidden lg:flex lg:flex-1 lg:justify-center">
              <div className="flex space-x-8 overflow-x-auto px-4 sm:overflow-visible whitespace-nowrap">
                {navigation.categories.map((category, categoryIdx) => (
                  <Popover
                    key={categoryIdx}
                    className="flex"
                    onMouseEnter={() => setActivePopover(category.name)}
                    onMouseLeave={() => setActivePopover(null)}
                  >
                    <div className="relative flex">
                      <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-white transition-colors duration-200 ease-out hover:text-emerald-700 data-[open]:bg-black data-[open]:text-emerald-700">
                        {category.name}
                      </PopoverButton>
                    </div>

                    <PopoverPanel
                      className={`absolute inset-x-0 top-full text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in sm:text-sm ${
                        activePopover === category.name ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-black shadow" />
                      <div className="relative bg-black">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 pb-2 pt-2">
                            {category.items.map((item) => (
                              <div key={item.name} className="flex flex-col items-start">
                                <Link href={item.href} className="text-sm font-bold text-white hover:text-emerald-700">
                                  {item.name}
                                </Link>
                                <p className="mt-1 text-sm text-gray-400">{item.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </PopoverPanel>
                  </Popover>
                ))}
                {navigation.other.map((item) => (
                  <a key={item.name} href={item.href} className="flex items-center text-sm font-medium text-white hover:text-emerald-700">
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverGroup>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.categories.map((category, categoryIdx) => (
                  <Popover key={categoryIdx} className="flex w-full">
                    <PopoverButton className="flex w-full items-center justify-between px-3 py-2 text-base font-medium text-white hover:bg-gray-900  hover:text-emerald-600 data-[open]:bg-black data-[open]:text-white">
                      {category.name}
                      <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </PopoverButton>
                    <PopoverPanel className="w-full bg-black">
                      <div className="grid grid-cols-1 gap-x-6 gap-y-4 px-4 pt-4 pb-8 bg-black text-white">
                        {category.items.map((item) => (
                          <Link key={item.name} href={item.href} className="text-sm font-medium text-white hover:text-emerald-600">
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </PopoverPanel>
                  </Popover>
                ))}
                {navigation.other.map((item) => (
                  <Link key={item.name} href={item.href} className="block w-full px-3 py-2 text-base font-medium text-white hover:text-emerald-600">
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="border-t border-gray-700 pt-4 pb-3">
                <div className="space-y-1 px-2">
                  <Link href="#" className="block px-3 py-2 text-base font-medium text-white hover:text-emerald-600">
                    Log in
                  </Link>
                  
                  <Link href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon aria-hidden="true" className="h-6 w-6 ml-2 flex-shrink-0 text-gray-400 group-hover:text-emerald-600" />
                    <span className="ml-2 text-sm font-medium text-white group-hover:text-emerald-600">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
}
