"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail, Globe, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
  ];

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode as "en" | "es");
    setIsLanguageOpen(false);
  };

  const getCurrentLanguageName = () => {
    return languages.find((lang) => lang.code === language)?.name || "English";
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-700/50 bg-gray-900/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm text-gray-300 border-b border-gray-700/50">
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
            <span className="font-semibold text-white bg-primary/30 px-3 py-1 rounded-md">
              License: XXXXXXX
            </span>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo - Clickable to home page */}
          <Link
            href="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
          >
            <div className="relative w-14 h-14 bg-gradient-to-br from-primary via-primary/90 to-primary/70 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              <span className="relative text-primary-foreground font-extrabold text-xs tracking-wider drop-shadow-sm">
                FPA
              </span>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full shadow-sm animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">
                Fernandez Public Adjusters
              </h1>
              <p className="text-sm text-gray-300">
                {t("nav.licensedPublicAdjusters")}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-white transition-colors hover:text-primary-outline"
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-white transition-colors hover:text-primary-outline"
            >
              {t("nav.services")}
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-white transition-colors hover:text-primary-outline"
            >
              {t("nav.about")}
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-white transition-colors hover:text-primary-outline"
            >
              {t("nav.contact")}
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-white transition-colors hover:text-primary-outline"
            >
              {t("nav.blog")}
            </Link>
          </nav>

          {/* Desktop Language Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              >
                <Globe className="h-4 w-4 mr-2" />
                {getCurrentLanguageName()}
                <ChevronDown className="h-4 w-4 ml-2 transition-transform duration-200" />
              </Button>

              {isLanguageOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-xl z-50">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageChange(language.code)}
                      className="w-full px-4 py-3 text-left text-white hover:bg-white/20 transition-colors duration-200 flex items-center space-x-3 first:rounded-t-lg last:rounded-b-lg"
                    >
                      <span className="text-lg">{language.flag}</span>
                      <span className="font-medium">{language.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Button
              asChild
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Link href="tel:786-417-3869">
                <Phone className="h-4 w-4 mr-2" />
                {t("nav.freeConsultation")}
              </Link>
            </Button>
          </div>

          {/* Mobile menu - Sheet has built-in click-outside functionality */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="outline"
                size="icon"
                className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-semibold border border-slate-500/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-gray-900/95 backdrop-blur-md border-gray-700/50"
            >
              <nav className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/"
                  className="text-lg font-medium text-white transition-colors hover:text-primary-outline"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("nav.home")}
                </Link>
                <Link
                  href="/services"
                  className="text-lg font-medium text-white transition-colors hover:text-primary-outline"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("nav.services")}
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium text-white transition-colors hover:text-primary-outline"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("nav.about")}
                </Link>
                <Link
                  href="/contact"
                  className="text-lg font-medium text-white transition-colors hover:text-primary-outline"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("nav.contact")}
                </Link>
                <Link
                  href="/blog"
                  className="text-lg font-medium text-white transition-colors hover:text-primary-outline"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("nav.blog")}
                </Link>

                {/* Mobile Language Switcher */}
                <div className="pt-4 border-t border-gray-700/50">
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-gray-300 mb-2">
                      {t("nav.languageIdioma")}
                    </h3>
                    <div className="space-y-2">
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          onClick={() => {
                            handleLanguageChange(language.code);
                            setIsMobileMenuOpen(false);
                          }}
                          className="w-full px-4 py-3 text-left text-white hover:bg-white/20 transition-colors duration-200 rounded-lg flex items-center space-x-3"
                        >
                          <span className="text-lg">{language.flag}</span>
                          <span className="font-medium">{language.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Link href="tel:786-417-3869">
                      <Phone className="h-4 w-4 mr-2" />
                      {t("nav.freeConsultation")}
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Click outside to close language dropdown */}
      {isLanguageOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsLanguageOpen(false)}
        />
      )}
    </header>
  );
}
