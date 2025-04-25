"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "/placeholder.svg?height=100&width=100",
    text: "Kajol captured our family so beautifully! The photos are natural, authentic, and truly reflect our personalities. We couldn't be happier with the results!",
    service: "Family Session",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael & Emma",
    image: "/placeholder.svg?height=100&width=100",
    text: "Our maternity photoshoot with Kajol was an amazing experience. She made us feel comfortable and the photos perfectly captured this special time in our lives.",
    service: "Maternity Session",
    rating: 5,
  },
  {
    id: 3,
    name: "Rebecca Taylor",
    image: "/placeholder.svg?height=100&width=100",
    text: "Kajol has an incredible talent for capturing newborns. The photos of our baby boy are absolutely precious and will be treasured forever.",
    service: "Baby Session",
    rating: 5,
  },
  {
    id: 4,
    name: "David & Lisa",
    image: "/placeholder.svg?height=100&width=100",
    text: "We had our engagement photos taken by Kajol and the results were stunning. She has an eye for beautiful compositions and made us feel so at ease during the shoot.",
    service: "Couple Session",
    rating: 5,
  },
  {
    id: 5,
    name: "Jennifer Wilson",
    image: "/placeholder.svg?height=100&width=100",
    text: "I needed professional headshots for my business and Kajol delivered beyond my expectations. She was professional, efficient, and the photos are perfect for my brand.",
    service: "Corporate Session",
    rating: 5,
  },
  {
    id: 6,
    name: "Mark Thompson",
    image: "/placeholder.svg?height=100&width=100",
    text: "Kajol photographed our family reunion and captured so many special moments. Her ability to blend into the background while still getting amazing shots is impressive.",
    service: "Family Session",
    rating: 5,
  },
  {
    id: 7,
    name: "Sophia Chen",
    image: "/placeholder.svg?height=100&width=100",
    text: "My modeling portfolio needed updating and Kajol understood exactly what I was looking for. The photos are creative, professional, and showcase my range perfectly.",
    service: "Model Session",
    rating: 5,
  },
  {
    id: 8,
    name: "James & Robert",
    image: "/placeholder.svg?height=100&width=100",
    text: "Our couple's photoshoot with Kajol was such a fun experience. She made us laugh and captured our relationship beautifully. Highly recommend!",
    service: "Couple Session",
    rating: 5,
  },
]

export default function ReviewsPage() {
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
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary-800 mb-4">Client Reviews</h1>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Read what my clients have to say about their photography experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 shadow-sm border border-neutral-100"
              >
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                  ))}
                </div>
                <p className="text-neutral-600 italic mb-6">"{review.text}"</p>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image src={review.image || "/placeholder.svg"} alt={review.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800">{review.name}</h4>
                    <p className="text-sm text-neutral-500">{review.service}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-playfair font-bold text-primary-800 mb-4">Ready to Create Your Own Story?</h3>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              I'd love to work with you to capture your special moments. Contact me today to book your session.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary-700 text-white px-8 py-3 hover:bg-primary-800 transition-colors"
            >
              Book Your Session
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
