"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"

const pricingCategories = [
  {
    id: "family",
    name: "Family",
  },
  {
    id: "maternity",
    name: "Maternity",
  },
  {
    id: "baby",
    name: "Baby",
  },
  {
    id: "couple",
    name: "Couple",
  },
  {
    id: "model",
    name: "Model",
  },
  {
    id: "corporate",
    name: "Corporate",
  },
]

const pricingData = {
  family: [
    {
      name: "Mini Session",
      price: "$250",
      description: "Perfect for quick family updates",
      features: ["30-minute session", "1 location", "15 digital images", "Online gallery", "Print release"],
    },
    {
      name: "Standard Session",
      price: "$450",
      description: "Our most popular family package",
      features: [
        "1-hour session",
        "1-2 locations",
        "30 digital images",
        "Online gallery",
        "Print release",
        "10 professional prints (5x7)",
      ],
      popular: true,
    },
    {
      name: "Extended Session",
      price: "$650",
      description: "Comprehensive family documentation",
      features: [
        "2-hour session",
        "Multiple locations",
        "All digital images (50+)",
        "Online gallery",
        "Print release",
        "Custom photo album",
        "Wall art credit ($100)",
      ],
    },
  ],
  maternity: [
    {
      name: "Basic Maternity",
      price: "$300",
      description: "Simple maternity documentation",
      features: ["45-minute session", "1 location", "15 digital images", "Online gallery", "Print release"],
    },
    {
      name: "Glowing Mama",
      price: "$500",
      description: "Our most popular maternity package",
      features: [
        "1-hour session",
        "1-2 locations",
        "2 outfit changes",
        "30 digital images",
        "Online gallery",
        "Print release",
        "10 professional prints (5x7)",
      ],
      popular: true,
    },
    {
      name: "Luxury Maternity",
      price: "$750",
      description: "The ultimate maternity experience",
      features: [
        "2-hour session",
        "Multiple locations",
        "3 outfit changes",
        "All digital images (50+)",
        "Online gallery",
        "Print release",
        "Custom photo album",
        "Wall art credit ($100)",
      ],
    },
  ],
  baby: [
    {
      name: "Newborn Simplicity",
      price: "$350",
      description: "Sweet and simple newborn session",
      features: ["1-hour session", "In-home or studio", "15 digital images", "Online gallery", "Print release"],
    },
    {
      name: "Newborn Complete",
      price: "$550",
      description: "Our most popular newborn package",
      features: [
        "2-hour session",
        "In-home or studio",
        "Multiple setups",
        "30 digital images",
        "Online gallery",
        "Print release",
        "10 professional prints (5x7)",
      ],
      popular: true,
    },
    {
      name: "Baby's First Year",
      price: "$1200",
      description: "Document your baby's first year milestones",
      features: [
        "4 sessions (newborn, 3, 6, and 12 months)",
        "45 minutes each",
        "20 digital images per session",
        "Online gallery",
        "Print release",
        "Custom photo album at completion",
      ],
    },
  ],
  couple: [
    {
      name: "Sweet & Simple",
      price: "$250",
      description: "Quick couple's session",
      features: ["30-minute session", "1 location", "15 digital images", "Online gallery", "Print release"],
    },
    {
      name: "Love Story",
      price: "$450",
      description: "Our most popular couple's package",
      features: [
        "1-hour session",
        "1-2 locations",
        "30 digital images",
        "Online gallery",
        "Print release",
        "10 professional prints (5x7)",
      ],
      popular: true,
    },
    {
      name: "Romantic Getaway",
      price: "$650",
      description: "Extended couple's session",
      features: [
        "2-hour session",
        "Multiple locations",
        "All digital images (50+)",
        "Online gallery",
        "Print release",
        "Custom photo album",
        "Wall art credit ($100)",
      ],
    },
  ],
  model: [
    {
      name: "Portfolio Starter",
      price: "$300",
      description: "Basic portfolio building session",
      features: [
        "45-minute session",
        "1 location",
        "2 outfit changes",
        "15 digital images",
        "Online gallery",
        "Commercial use license",
      ],
    },
    {
      name: "Portfolio Builder",
      price: "$500",
      description: "Our most popular model package",
      features: [
        "1.5-hour session",
        "2 locations",
        "3 outfit changes",
        "30 digital images",
        "Online gallery",
        "Commercial use license",
        "Basic retouching",
      ],
      popular: true,
    },
    {
      name: "Portfolio Pro",
      price: "$750",
      description: "Comprehensive portfolio development",
      features: [
        "3-hour session",
        "Multiple locations",
        "Unlimited outfit changes",
        "All digital images (50+)",
        "Online gallery",
        "Commercial use license",
        "Advanced retouching",
        "Styling consultation",
      ],
    },
  ],
  corporate: [
    {
      name: "Professional Headshot",
      price: "$200",
      description: "Quick professional headshot session",
      features: ["30-minute session", "Studio setting", "5 digital images", "Online gallery", "Commercial use license"],
    },
    {
      name: "Business Branding",
      price: "$500",
      description: "Our most popular corporate package",
      features: [
        "1-hour session",
        "Studio or office location",
        "Multiple setups",
        "15 digital images",
        "Online gallery",
        "Commercial use license",
        "Basic retouching",
      ],
      popular: true,
    },
    {
      name: "Corporate Complete",
      price: "$1200",
      description: "Full team and branding photography",
      features: [
        "Half-day session (4 hours)",
        "On-location",
        "Team headshots",
        "Group photos",
        "Environmental portraits",
        "Product/service imagery",
        "All digital images",
        "Commercial use license",
      ],
    },
  ],
}

export default function PricesPage() {
  const [activeCategory, setActiveCategory] = useState("family")

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
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary-800 mb-4">Pricing</h1>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Transparent pricing for all your photography needs. Each package is designed to provide exceptional value.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {pricingCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 transition-colors ${
                  activeCategory === category.id
                    ? "bg-primary-700 text-white"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingData[activeCategory as keyof typeof pricingData].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`border ${plan.popular ? "border-primary-500 shadow-lg" : "border-neutral-200"} relative`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 text-sm">Most Popular</div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-primary-800 mb-2">{plan.name}</h3>
                  <p className="text-neutral-600 text-sm mb-4">{plan.description}</p>
                  <p className="text-3xl font-bold text-primary-700 mb-6">{plan.price}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary-600 mr-2 shrink-0 mt-0.5" />
                        <span className="text-neutral-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block text-center py-2 px-4 transition-colors ${
                      plan.popular
                        ? "bg-primary-700 text-white hover:bg-primary-800"
                        : "border border-primary-700 text-primary-700 hover:bg-primary-50"
                    }`}
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-neutral-50 p-8 max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-playfair font-bold text-primary-800 mb-4">Custom Packages</h3>
            <p className="text-neutral-600 mb-6">
              Need something specific? I'm happy to create a custom package tailored to your unique needs and vision.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-primary-700 text-white px-6 py-3 hover:bg-primary-800 transition-colors"
            >
              Contact Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
