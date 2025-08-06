"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Shield } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty(
        "--scroll-offset",
        scrollY.toString()
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Fixed Background Image with Parallax */}
      <div className="fixed inset-0 z-0 parallax-bg">
        <Image
          src="/birdseye.jpg"
          alt="Aerial view background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content with Parallax Effect */}
      <div className="relative z-10 content-above-bg">
        <div className="py-20">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center space-y-6 mb-12 animate-fade-in-up">
              <h1 className="text-3xl lg:text-4xl font-bold text-white">
                {t("contact.title")}
              </h1>
              <p className="text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">
                {t("contact.subtitle")}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-xl border-0 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-left">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">
                    {t("contact.sendMessage")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="firstName"
                          className="text-sm font-medium text-white"
                        >
                          {t("contact.firstName")} *
                        </label>
                        <Input
                          id="firstName"
                          required
                          className="bg-white/20 border-white/20 text-white placeholder:text-gray-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="lastName"
                          className="text-sm font-medium text-white"
                        >
                          {t("contact.lastName")} *
                        </label>
                        <Input
                          id="lastName"
                          required
                          className="bg-white/20 border-white/20 text-white placeholder:text-gray-300"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="text-sm font-medium text-white"
                        >
                          {t("contact.phoneNumber")} *
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          className="bg-white/20 border-white/20 text-white placeholder:text-gray-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-white"
                        >
                          {t("contact.emailAddress")} *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          required
                          className="bg-white/20 border-white/20 text-white placeholder:text-gray-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="claimType"
                        className="text-sm font-medium text-white"
                      >
                        {t("contact.claimType")}
                      </label>
                      <select
                        id="claimType"
                        className="w-full px-3 py-2 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white/20 text-white"
                      >
                        <option value="" className="text-gray-800">
                          {t("contact.selectClaimType")}
                        </option>
                        <option value="property" className="text-gray-800">
                          {t("contact.propertyDamage")}
                        </option>
                        <option value="business" className="text-gray-800">
                          {t("contact.businessInterruption")}
                        </option>
                        <option value="storm" className="text-gray-800">
                          {t("contact.stormDamage")}
                        </option>
                        <option value="fire" className="text-gray-800">
                          {t("contact.fireDamage")}
                        </option>
                        <option value="water" className="text-gray-800">
                          {t("contact.waterDamage")}
                        </option>
                        <option value="other" className="text-gray-800">
                          {t("contact.other")}
                        </option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-white"
                      >
                        {t("contact.describeClaim")} *
                      </label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder={t("contact.claimDetailsPlaceholder")}
                        required
                        className="bg-white/20 border-white/20 text-white placeholder:text-gray-300"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      size="lg"
                    >
                      {t("contact.sendMessage")}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Office Info */}
                <Card className="shadow-lg border-0 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-right">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">
                      {t("contact.officeInformation")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-orange-400 drop-shadow-lg mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-white">
                          Fernandez Public Adjusters, LLC
                        </p>
                        <p className="text-gray-200">
                          1700 NW North River Drive
                        </p>
                        <p className="text-gray-200">Miami, Florida 33125</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-orange-400 drop-shadow-lg flex-shrink-0" />
                      <a
                        href="tel:786-417-3869"
                        className="hover:underline text-white"
                      >
                        (786) 417-3869
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-orange-400 drop-shadow-lg flex-shrink-0" />
                      <a
                        href="mailto:Claims@FernandezAdjusters.com"
                        className="hover:underline text-white"
                      >
                        Claims@FernandezAdjusters.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="h-5 w-5 text-orange-400 drop-shadow-lg flex-shrink-0" />
                      <span className="font-semibold text-white">
                        License: XXXXXXX
                      </span>
                    </div>
                  </CardContent>
                </Card>

                {/* Hours */}
                <Card className="shadow-lg border-0 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-right animation-delay-100">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">
                      {t("contact.businessHours")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-3 mb-4">
                      <Clock className="h-5 w-5 text-orange-400 drop-shadow-lg flex-shrink-0" />
                      <span className="font-semibold text-white">
                        {t("contact.available247")}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-200">
                      <div className="flex justify-between">
                        <span>{t("contact.mondayFriday")}</span>
                        <span>8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{t("contact.saturday")}</span>
                        <span>9:00 AM - 3:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{t("contact.sunday")}</span>
                        <span>{t("contact.emergencyCallsOnly")}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Emergency CTA */}
                <Card className="shadow-lg border-0 bg-primary text-primary-foreground animate-fade-in-right animation-delay-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      {t("contact.emergencyCall")}
                    </h3>
                    <p className="mb-4 opacity-90">
                      {t("contact.emergencyDesc")}
                    </p>
                    <Button
                      asChild
                      variant="secondary"
                      className="w-full bg-gray-800/80 backdrop-blur-md border border-gray-600 text-white hover:bg-gray-700/80 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      size="lg"
                    >
                      <a href="tel:786-417-3869">
                        <Phone className="h-4 w-4 mr-2" />
                        (786) 417-3869
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
