"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const images = [
  "/DSC04518.webp?height=1080&width=1920",
  "/DSC01130.webp?height=1080&width=1920",
  "/DSC09452.webp?height=1080&width=1920",
]

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-screen w-full ">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src || "/DSC04518.webp"}
            alt={`Hero image ${index + 1}`}
            fill
            priority
            className="object-cover"
          />

          {/* Darken whole background */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Add top shadow gradient */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/40 to-transparent z-10" />
        </div>
      ))}

      {/* Text content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-4 drop-shadow-md">
            Capturing Timeless Moments
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 drop-shadow-md max-w-2xl mx-auto">
            Brisbane-based photographer specializing in family, maternity, baby, couple, model, and corporate portraits
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-white text-primary-800 hover:bg-primary-50 border border-white px-6 py-3 rounded-none"
            >
              <a href="/portfolio">
                View Portfolio <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-transparent text-white hover:bg-white/10 border border-white px-6 py-3 rounded-none"
            >
              <a href="/contact">Book a Session</a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentImage ? "bg-white w-4" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
