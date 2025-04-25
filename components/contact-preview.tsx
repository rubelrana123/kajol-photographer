"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ContactPreview() {
  return (
    <section className="py-20 px-4 md:px-6 bg-primary-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary-800 mb-4">
            Ready to Book Your Session?
          </h2>
          <p className="text-neutral-600 mb-8">
            I'd love to hear about your photography needs and create a custom session that perfectly captures your
            special moments.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-primary-700 text-white px-8 py-3 hover:bg-primary-800 transition-colors"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
