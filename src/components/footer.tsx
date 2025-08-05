"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative w-10 h-10 bg-gradient-to-br from-primary-foreground via-primary-foreground/90 to-primary-foreground/70 rounded-xl flex items-center justify-center shadow-lg group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl"></div>
                <span className="relative text-primary font-extrabold text-xs tracking-wider drop-shadow-sm">
                  FPA
                </span>
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full shadow-sm animate-pulse"></div>
              </div>
              <h3 className="text-lg font-bold">Fernandez Public Adjusters</h3>
            </div>
            <p className="text-sm opacity-90">
              Licensed public adjusters fighting for your rights and maximizing
              your claim settlements.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com"
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Information</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>1700 NW North River Drive</p>
                  <p>Miami, Florida 33125</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <Link href="tel:786-417-3869" className="hover:underline">
                  (786) 417-3869
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <Link
                  href="mailto:Claims@FernandezAdjusters.com"
                  className="hover:underline"
                >
                  Claims@FernandezAdjusters.com
                </Link>
              </div>
              <div className="pt-2">
                <p className="font-semibold">License: XXXXXXX</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link
                href="/services"
                className="block opacity-80 hover:opacity-100 transition-opacity"
              >
                Our Services
              </Link>
              <Link
                href="/about"
                className="block opacity-80 hover:opacity-100 transition-opacity"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="block opacity-80 hover:opacity-100 transition-opacity"
              >
                Contact
              </Link>
              <Link
                href="/blog"
                className="block opacity-80 hover:opacity-100 transition-opacity"
              >
                Blog
              </Link>
              <Link
                href="/privacy"
                className="block opacity-80 hover:opacity-100 transition-opacity"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="block opacity-80 hover:opacity-100 transition-opacity"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Newsletter</h4>
            <p className="text-sm opacity-90">
              Subscribe to our newsletter for the latest tips, updates, and
              news!
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-3 py-2 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
              />
              <Button type="submit" className="w-full" size="sm">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm opacity-80">
            © Copyright 2025 | Fernandez Public Adjusters, LLC | All Rights
            Reserved
          </div>
          <div className="flex items-center space-x-4">
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-semibold border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-6 py-2"
            >
              <Link href="tel:786-417-3869">
                <Phone className="h-4 w-4 mr-2" />
                Get A Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
