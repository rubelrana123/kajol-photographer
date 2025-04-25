"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const categories = [
  {
    name: "Family",
    slug: "family",
    description: "Capturing the love and connection between family members in natural, candid moments.",
  },
  {
    name: "Maternity",
    slug: "maternity",
    description: "Celebrating the beauty and anticipation of motherhood with elegant portraits.",
  },
  {
    name: "Baby",
    slug: "baby",
    description: "Preserving the precious early days of your little one with gentle, timeless imagery.",
  },
  {
    name: "Couple",
    slug: "couple",
    description: "Documenting the love and connection between partners in romantic settings.",
  },
  {
    name: "Model",
    slug: "model",
    description: "Creative portrait sessions that showcase personality and style.",
  },
  {
    name: "Corporate",
    slug: "corporate",
    description: "Professional headshots and branding imagery for businesses and individuals.",
  },
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  return (
    <div className="pt-20">
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary-800 mb-4">Portfolio</h1>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Browse through my work and discover the moments I've had the privilege to capture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {categories.map((category, index) => (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group overflow-hidden"
              >
                <Link href={`/portfolio/${category.slug}`}>
                  <div className="relative h-[400px] w-full overflow-hidden">
                    <Image
                      src={`/DSC04518.webp?height=600&width=400&text=${category.name}`}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                      <h2 className="text-2xl font-playfair font-bold text-white mb-2">{category.name}</h2>
                      <p className="text-white/90 max-w-xs">{category.description}</p>
                      <span className="mt-4 inline-block border border-white text-white px-4 py-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Gallery
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
