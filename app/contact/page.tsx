"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Instagram, Facebook } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

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
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary-800 mb-4">Get in Touch</h1>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              I'd love to hear from you! Fill out the form below to inquire about a session or ask any questions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-2xl font-playfair font-bold text-primary-800 mb-6">Contact Information</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-neutral-800">Phone</h3>
                    <p className="text-neutral-600">+61 (0) 400 123 456</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-neutral-800">Email</h3>
                    <p className="text-neutral-600">contact@kajolphotographer.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-neutral-800">Location</h3>
                    <p className="text-neutral-600">Brisbane, Queensland, Australia</p>
                    <p className="text-neutral-600 text-sm mt-1">
                      Available for sessions throughout Brisbane and surrounding areas
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-playfair font-bold text-primary-800 mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-100 p-3 rounded-full text-primary-700 hover:bg-primary-100 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-100 p-3 rounded-full text-primary-700 hover:bg-primary-100 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-neutral-300 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-neutral-300 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-1">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-neutral-300 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                  >
                    <option value="">Select a service</option>
                    <option value="family">Family Session</option>
                    <option value="maternity">Maternity Session</option>
                    <option value="baby">Baby Session</option>
                    <option value="couple">Couple Session</option>
                    <option value="model">Model Portfolio</option>
                    <option value="corporate">Corporate/Headshots</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-2 border border-neutral-300 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center bg-primary-700 text-white px-6 py-3 hover:bg-primary-800 transition-colors disabled:bg-primary-400"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
                {isSubmitted && (
                  <div className="text-green-600 font-medium">
                    Thank you for your message! I'll get back to you soon.
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
