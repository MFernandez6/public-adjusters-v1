"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Different styling for home page vs other pages
  const headerClasses = isHomePage
    ? "sticky top-0 z-50 w-full border-b border-white/20 bg-white/10 backdrop-blur-md"
    : "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60";

  const topBarClasses = isHomePage
    ? "hidden md:flex items-center justify-between py-2 text-sm text-gray-200 border-b border-white/20"
    : "hidden md:flex items-center justify-between py-2 text-sm text-muted-foreground border-b";

  const iconClasses = isHomePage ? "text-primary-outline" : "text-primary";
  const licenseClasses = isHomePage
    ? "font-semibold text-white bg-primary/20 px-3 py-1 rounded-md"
    : "font-semibold text-primary";

  const titleClasses = isHomePage
    ? "text-xl font-bold text-white"
    : "text-xl font-bold text-primary";
  const subtitleClasses = isHomePage
    ? "text-sm text-gray-200"
    : "text-sm text-muted-foreground";

  const navLinkClasses = isHomePage
    ? "text-sm font-medium text-white transition-colors hover:text-primary-outline"
    : "text-sm font-medium transition-colors hover:text-primary";

  const mobileButtonClasses = isHomePage
    ? "border-white text-white hover:bg-white hover:text-primary"
    : "";

  const sheetClasses = isHomePage
    ? "bg-white/10 backdrop-blur-md border-white/20"
    : "";

  const mobileNavClasses = isHomePage
    ? "text-lg font-medium text-white transition-colors hover:text-primary-outline"
    : "text-lg font-medium transition-colors hover:text-primary";

  const mobileBorderClasses = isHomePage
    ? "border-t border-white/20"
    : "border-t";

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className={topBarClasses}>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className={`h-4 w-4 ${iconClasses}`} />
              <span>(786) 417-3869</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className={`h-4 w-4 ${iconClasses}`} />
              <span>Claims@FernandezAdjusters.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className={licenseClasses}>License: XXXXXXX</span>
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
              <h1 className={titleClasses}>Fernandez Public Adjusters</h1>
              <p className={subtitleClasses}>Licensed Public Adjusters</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={navLinkClasses}>
              Home
            </Link>
            <Link href="/services" className={navLinkClasses}>
              Services
            </Link>
            <Link href="/about" className={navLinkClasses}>
              About
            </Link>
            <Link href="/contact" className={navLinkClasses}>
              Contact
            </Link>
            <Link href="/blog" className={navLinkClasses}>
              Blog
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
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
                className={mobileButtonClasses}
              >
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className={sheetClasses}>
              <nav className="flex flex-col space-y-4 mt-8">
                <Link href="/" className={mobileNavClasses}>
                  Home
                </Link>
                <Link href="/services" className={mobileNavClasses}>
                  Services
                </Link>
                <Link href="/about" className={mobileNavClasses}>
                  About
                </Link>
                <Link href="/contact" className={mobileNavClasses}>
                  Contact
                </Link>
                <Link href="/blog" className={mobileNavClasses}>
                  Blog
                </Link>
                <div className={`pt-4 ${mobileBorderClasses}`}>
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
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
