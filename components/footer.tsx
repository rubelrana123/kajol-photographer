import Link from "next/link"
import { Instagram, Facebook, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-neutral-100 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4 text-primary-800">Kajol Photographer</h3>
            <p className="text-sm text-neutral-600 mb-4 max-w-xs">
              Brisbane-based photographer specializing in capturing timeless moments with a natural and heartfelt
              approach.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-primary-600 transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-primary-600 transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="mailto:contact@kajolphotographer.com"
                className="text-neutral-600 hover:text-primary-600 transition-colors"
              >
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4 text-primary-800">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors">
                About
              </Link>
              <Link href="/portfolio" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors">
                Portfolio
              </Link>
              <Link href="/prices" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors">
                Prices
              </Link>
              <Link href="/reviews" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors">
                Reviews
              </Link>
              <Link href="/contact" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4 text-primary-800">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-600" />
                <span className="text-sm text-neutral-600">+61 (0) 400 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-600" />
                <span className="text-sm text-neutral-600">contact@kajolphotographer.com</span>
              </div>
              <p className="text-sm text-neutral-600 mt-2">Brisbane, Queensland, Australia</p>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-200 mt-10 pt-6 text-center">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Kajol Photographer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
