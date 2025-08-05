"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/10 backdrop-blur-md">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm text-gray-200 border-b border-white/20">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-primary-outline" />
              <span>(786) 417-3869</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-primary-outline" />
              <span>Claims@FernandezAdjusters.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-semibold text-white bg-primary/20 px-3 py-1 rounded-md">
              License: XXXXXXX
            </span>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">
                F
              </span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">
                Fernandez Public Adjusters
              </h1>
              <p className="text-sm text-gray-200">Licensed Public Adjusters</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-white transition-colors hover:text-primary-outline"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-white transition-colors hover:text-primary-outline"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-white transition-colors hover:text-primary-outline"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-white transition-colors hover:text-primary-outline"
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-white transition-colors hover:text-primary-outline"
            >
              Blog
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              asChild
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Link href="tel:786-417-3869">
                <Phone className="h-4 w-4 mr-2" />
                Free Consultation
              </Link>
            </Button>
          </div>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="outline"
                size="icon"
                className="border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-white/10 backdrop-blur-md border-white/20"
            >
              <nav className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/"
                  className="text-lg font-medium text-white transition-colors hover:text-primary-outline"
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="text-lg font-medium text-white transition-colors hover:text-primary-outline"
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium text-white transition-colors hover:text-primary-outline"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-lg font-medium text-white transition-colors hover:text-primary-outline"
                >
                  Contact
                </Link>
                <Link
                  href="/blog"
                  className="text-lg font-medium text-white transition-colors hover:text-primary-outline"
                >
                  Blog
                </Link>
                <div className="pt-4 border-t border-white/20">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Link href="tel:786-417-3869">
                      <Phone className="h-4 w-4 mr-2" />
                      Free Consultation
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
