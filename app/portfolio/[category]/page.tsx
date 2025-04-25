"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, X } from "lucide-react"

// This would normally come from a CMS or API
const portfolioData = {
  family: {
    title: "Family Photography",
    description: "Capturing the love and connection between family members in natural, candid moments.",
    images: Array(9)
      .fill(null)
      .map((_, i) => ({
        id: i,
        src: `/placeholder.svg?height=800&width=600&text=Family ${i + 1}`,
        alt: `Family portrait ${i + 1}`,
      })),
  },
  maternity: {
    title: "Maternity Photography",
    description: "Celebrating the beauty and anticipation of motherhood with elegant portraits.",
    images: Array(9)
      .fill(null)
      .map((_, i) => ({
        id: i,
        src: `/placeholder.svg?height=800&width=600&text=Maternity ${i + 1}`,
        alt: `Maternity portrait ${i + 1}`,
      })),
  },
  baby: {
    title: "Baby Photography",
    description: "Preserving the precious early days of your little one with gentle, timeless imagery.",
    images: Array(9)
      .fill(null)
      .map((_, i) => ({
        id: i,
        src: `/placeholder.svg?height=800&width=600&text=Baby ${i + 1}`,
        alt: `Baby portrait ${i + 1}`,
      })),
  },
  couple: {
    title: "Couple Photography",
    description: "Documenting the love and connection between partners in romantic settings.",
    images: Array(9)
      .fill(null)
      .map((_, i) => ({
        id: i,
        src: `/placeholder.svg?height=800&width=600&text=Couple ${i + 1}`,
        alt: `Couple portrait ${i + 1}`,
      })),
  },
  model: {
    title: "Model Photography",
    description: "Creative portrait sessions that showcase personality and style.",
    images: Array(9)
      .fill(null)
      .map((_, i) => ({
        id: i,
        src: `/placeholder.svg?height=800&width=600&text=Model ${i + 1}`,
        alt: `Model portrait ${i + 1}`,
      })),
  },
  corporate: {
    title: "Corporate Photography",
    description: "Professional headshots and branding imagery for businesses and individuals.",
    images: Array(9)
      .fill(null)
      .map((_, i) => ({
        id: i,
        src: `/placeholder.svg?height=800&width=600&text=Corporate ${i + 1}`,
        alt: `Corporate portrait ${i + 1}`,
      })),
  },
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const category = params.category
  const portfolioCategory = portfolioData[category as keyof typeof portfolioData]

  if (!portfolioCategory) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-playfair font-bold text-primary-800 mb-4">Category Not Found</h1>
          <p className="text-neutral-600 mb-6">The category you're looking for doesn't exist.</p>
          <Link
            href="/portfolio"
            className="inline-block bg-primary-700 text-white px-6 py-3 hover:bg-primary-800 transition-colors"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="mb-8">
            <Link href="/portfolio" className="inline-flex items-center text-primary-700 hover:text-primary-900 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary-800 mb-4">
                {portfolioCategory.title}
              </h1>
              <p className="text-neutral-600 max-w-2xl">{portfolioCategory.description}</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="gallery-grid"
          >
            {portfolioCategory.images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="gallery-item"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={600}
                  height={800}
                  className="w-full h-[400px] object-cover"
                />
                <div className="gallery-overlay">
                  <span className="text-white">View Larger</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-neutral-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
              <span className="sr-only">Close</span>
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[80vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={portfolioCategory.images[selectedImage].src || "/placeholder.svg"}
                alt={portfolioCategory.images[selectedImage].alt}
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
