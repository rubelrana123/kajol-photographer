"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutPage() {
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
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary-800 mb-4">About Me</h1>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Learn more about my journey as a photographer and my approach to capturing your special moments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[600px] w-full"
            >
              <Image
                src="/placeholder.svg?height=900&width=600"
                alt="Kajol Photographer"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-playfair font-bold text-primary-800 mb-6">Hello, I'm Kajol</h2>
              <p className="text-neutral-600 mb-4">
                I'm a Brisbane-based photographer with a passion for capturing the beauty in everyday moments. My
                journey in photography began over 8 years ago, and I've had the privilege of documenting countless
                special occasions for families across Queensland.
              </p>
              <p className="text-neutral-600 mb-4">
                My style is characterized by natural light, authentic emotions, and timeless compositions. I believe
                that the best photographs are those that tell a story and evoke genuine feelings.
              </p>
              <p className="text-neutral-600 mb-4">
                When I'm not behind the camera, you can find me exploring Brisbane's beautiful parks with my family,
                experimenting with new recipes in the kitchen, or planning my next travel adventure.
              </p>
              <p className="text-neutral-600 mb-4">
                I specialize in family, maternity, baby, couple, model, and corporate photography, bringing a unique and
                personal touch to each session. My goal is to create a relaxed and enjoyable experience that results in
                beautiful, timeless images you'll treasure for years to come.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-neutral-50 p-8 md:p-12 text-center max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-playfair font-bold text-primary-800 mb-6">My Photography Philosophy</h3>
            <p className="text-neutral-600 mb-4">
              I believe that photography is about more than just taking pictures – it's about preserving memories,
              emotions, and connections. My approach is to create a comfortable environment where you can be yourself,
              allowing me to capture authentic moments that truly reflect who you are.
            </p>
            <p className="text-neutral-600">
              Every session is tailored to your unique story and vision. Whether it's documenting the joy of a growing
              family, the anticipation of new life, or the love between partners, I'm committed to creating images that
              you'll cherish for generations to come.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-6 bg-neutral-100">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary-800 mb-4">My Approach</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">What you can expect when working with me</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-playfair font-bold text-primary-800 mb-4">Before the Session</h3>
              <p className="text-neutral-600">
                We'll start with a consultation to discuss your vision, location preferences, and any specific moments
                you'd like to capture. I'll provide guidance on what to wear and how to prepare to ensure a smooth and
                enjoyable experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-playfair font-bold text-primary-800 mb-4">During the Session</h3>
              <p className="text-neutral-600">
                My sessions are relaxed and fun. I'll provide gentle direction while allowing natural moments to unfold.
                Whether you're comfortable in front of the camera or not, I'll ensure you feel at ease throughout our
                time together.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-playfair font-bold text-primary-800 mb-4">After the Session</h3>
              <p className="text-neutral-600">
                I carefully select and edit each image to ensure they meet my high standards. Within two weeks, you'll
                receive an online gallery of beautifully edited images. I also offer printing services to help you
                display your memories in your home.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
