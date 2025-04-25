"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "/placeholder.svg?height=100&width=100",
    text: "Kajol captured our family so beautifully! The photos are natural, authentic, and truly reflect our personalities. We couldn't be happier with the results!",
    service: "Family Session",
  },
  {
    id: 2,
    name: "Michael & Emma",
    image: "/placeholder.svg?height=100&width=100",
    text: "Our maternity photoshoot with Kajol was an amazing experience. She made us feel comfortable and the photos perfectly captured this special time in our lives.",
    service: "Maternity Session",
  },
  {
    id: 3,
    name: "Rebecca Taylor",
    image: "/placeholder.svg?height=100&width=100",
    text: "Kajol has an incredible talent for capturing newborns. The photos of our baby boy are absolutely precious and will be treasured forever.",
    service: "Baby Session",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section className="py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary-800 mb-4">Client Love</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Read what my clients have to say about their photography experience.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-neutral-50 p-8 md:p-12 text-center"
            >
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                ))}
              </div>
              <p className="text-neutral-600 italic mb-6">"{testimonials[current].text}"</p>
              <div className="flex items-center justify-center">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonials[current].image || "/placeholder.svg"}
                    alt={testimonials[current].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-primary-800">{testimonials[current].name}</h4>
                  <p className="text-sm text-neutral-500">{testimonials[current].service}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-neutral-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-primary-800" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-neutral-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-primary-800" />
          </button>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setAutoplay(false)
                setCurrent(index)
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === current ? "bg-primary-600 w-4" : "bg-neutral-300 hover:bg-neutral-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
