"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function AboutPreview() {
  return (
    <section className="py-20 px-4 md:px-6 bg-neutral-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px] w-full"
          >
            <Image src="/about.jpeg?height=800&width=600" alt="Kajol Photographer" fill className="object-cover" />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-lg max-w-xs hidden lg:block">
              <p className="text-primary-800 italic font-playfair text-lg">
                "I believe in capturing authentic moments that tell your unique story."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary-800 mb-6">Hello, I'm Kajol</h2>
            <p className="text-neutral-600 mb-4">
              I'm a Brisbane-based photographer with a passion for capturing the beauty in everyday moments. My journey
              in photography began over 5 years ago, and I've had the privilege of documenting countless special
              occasions for families across Queensland.
            </p>
            <p className="text-neutral-600 mb-6">
              My style is characterized by natural light, authentic emotions, and timeless compositions. I specialize in
              family, maternity, baby, couple, model, and corporate photography, bringing a unique and personal touch to
              each session.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-primary-700 hover:text-primary-900 font-medium"
            >
              Learn more about me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
