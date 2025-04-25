"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const categories = [
  { name: "Family", slug: "family" },
  { name: "Maternity", slug: "maternity" },
  { name: "Baby", slug: "baby" },
  { name: "Couple", slug: "couple" },
  { name: "Model", slug: "model" },
  { name: "Corporate", slug: "corporate" },
]

const featuredImages = [
  {
    src: "/placeholder.svg?height=600&width=400",
    alt: "Family portrait",
    category: "family",
  },
  {
    src: "/placeholder.svg?height=600&width=400",
    alt: "Maternity session",
    category: "maternity",
  },
  {
    src: "/placeholder.svg?height=600&width=400",
    alt: "Baby portrait",
    category: "baby",
  },
  {
    src: "/placeholder.svg?height=600&width=400",
    alt: "Couple session",
    category: "couple",
  },
  {
    src: "/placeholder.svg?height=600&width=400",
    alt: "Model portrait",
    category: "model",
  },
  {
    src: "/placeholder.svg?height=600&width=400",
    alt: "Corporate headshot",
    category: "corporate",
  },
]

export default function FeaturedWork() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredImages =
    activeCategory === "all" ? featuredImages : featuredImages.filter((img) => img.category === activeCategory)

  return (
    <section className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary-800 mb-4">Featured Work</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Browse through a selection of my favorite photography sessions capturing precious moments and genuine
            emotions.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 text-sm transition-colors ${
              activeCategory === "all"
                ? "text-primary-800 border-b-2 border-primary-500"
                : "text-neutral-500 hover:text-primary-600"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => setActiveCategory(category.slug)}
              className={`px-4 py-2 text-sm transition-colors ${
                activeCategory === category.slug
                  ? "text-primary-800 border-b-2 border-primary-500"
                  : "text-neutral-500 hover:text-primary-600"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="gallery-item"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={400}
                height={600}
                className="w-full h-[400px] object-cover"
              />
              <div className="gallery-overlay">
                <Link
                  href={`/portfolio/${image.category}`}
                  className="text-white bg-black/40 px-6 py-3 hover:bg-black/60 transition-colors"
                >
                  View Gallery
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-block border border-primary-600 text-primary-600 px-8 py-3 hover:bg-primary-600 hover:text-white transition-colors"
          >
            View All Work
          </Link>
        </div>
      </div>
    </section>
  )
}
