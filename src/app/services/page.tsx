"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  DollarSign,
  Clock,
  Home,
  Building,
  Car,
  Zap,
  Droplets,
  Flame,
  Wind,
  CheckCircle,
  Phone,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ServicesPage() {
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
              <h1 className="text-4xl lg:text-5xl font-bold text-white">
                {t("services.title")}
              </h1>
              <p className="text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">
                {t("services.subtitle")}
              </p>
            </div>

            {/* Property Damage Claims */}
            <section className="mb-16">
              <div className="text-center space-y-4 mb-12 animate-fade-in-up animation-delay-100">
                <h2 className="text-3xl font-bold text-white">
                  {t("services.propertyDamage")}
                </h2>
                <p className="text-lg text-gray-200">
                  {t("services.propertyDamageSubtitle")}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-up animation-delay-200">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      <Flame className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                    </div>
                    <CardTitle className="text-white">
                      {t("services.fireDamage")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-200 mb-4">
                      {t("services.fireDamageDesc")}
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400 drop-shadow-lg" />
                        <span className="text-gray-200">
                          {t("services.structuralDamageAssessment")}
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400 drop-shadow-lg" />
                        <span className="text-gray-200">
                          {t("services.smokeSootDamage")}
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400 drop-shadow-lg" />
                        <span className="text-gray-200">
                          {t("services.personalPropertyInventory")}
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-up animation-delay-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      <Droplets className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                    </div>
                    <CardTitle className="text-white">
                      {t("services.waterDamage")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-200 mb-4">
                      {t("services.waterDamageDesc")}
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400 drop-shadow-lg" />
                        <span className="text-gray-200">
                          {t("services.floodDamageAssessment")}
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400 drop-shadow-lg" />
                        <span className="text-gray-200">
                          {t("services.moldRemediationCosts")}
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400 drop-shadow-lg" />
                        <span className="text-gray-200">
                          {t("services.structuralDryingDocumentation")}
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-up animation-delay-400">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      <Wind className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                    </div>
                    <CardTitle className="text-white">
                      {t("services.stormDamage")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-200 mb-4">
                      {t("services.stormDamageDesc")}
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400 drop-shadow-lg" />
                        <span className="text-gray-200">
                          {t("services.roofDamageAssessment")}
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400 drop-shadow-lg" />
                        <span className="text-gray-200">
                          {t("services.windowSidingDamage")}
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400 drop-shadow-lg" />
                        <span className="text-gray-200">
                          {t("services.debrisRemovalCosts")}
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Business Claims */}
            <section className="mb-16">
              <div className="text-center space-y-4 mb-12 animate-fade-in-up animation-delay-500">
                <h2 className="text-3xl font-bold text-white">
                  {t("services.businessClaims")}
                </h2>
                <p className="text-lg text-gray-200">
                  {t("services.businessClaimsSubtitle")}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-up animation-delay-600">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      <Building className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                    </div>
                    <CardTitle className="text-white">
                      {t("services.commercialProperty")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-200 mb-4">
                      {t("services.commercialPropertyDesc")}
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400 drop-shadow-lg" />
                        <span className="text-gray-200">
                          {t("services.buildingDamageAssessment")}
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400 drop-shadow-lg" />
                        <span className="text-gray-200">
                          {t("services.equipmentInventoryLoss")}
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400 drop-shadow-lg" />
                        <span className="text-gray-200">
                          {t("services.businessInterruptionClaims")}
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400 drop-shadow-lg" />
                        <span className="text-gray-200">
                          {t("services.extraExpenseCoverage")}
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-up animation-delay-700">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      <DollarSign className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                    </div>
                    <CardTitle className="text-white">
                      {t("services.businessInterruption")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-200 mb-4">
                      {t("services.businessInterruptionDesc")}
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400 drop-shadow-lg" />
                        <span className="text-gray-200">
                          {t("services.lostIncomeCalculation")}
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400 drop-shadow-lg" />
                        <span className="text-gray-200">
                          {t("services.operatingExpenseCoverage")}
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400 drop-shadow-lg" />
                        <span className="text-gray-200">
                          {t("services.extendedPeriodIndemnity")}
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400 drop-shadow-lg" />
                        <span className="text-gray-200">
                          {t("services.contingentBusinessInterruption")}
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Specialized Services */}
            <section className="mb-16">
              <div className="text-center space-y-4 mb-12 animate-fade-in-up animation-delay-800">
                <h2 className="text-3xl font-bold text-white">
                  {t("services.specializedServices")}
                </h2>
                <p className="text-lg text-gray-200">
                  {t("services.specializedServicesDesc")}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 text-center animate-fade-in-up animation-delay-900">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full mx-auto mb-4 flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      <Zap className="h-8 w-8 text-orange-400 drop-shadow-lg" />
                    </div>
                    <h3 className="font-semibold mb-2 text-white">
                      {t("services.electricalDamage")}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {t("services.electricalDamageDesc")}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 text-center animate-fade-in-up animation-delay-1000">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full mx-auto mb-4 flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      <Car className="h-8 w-8 text-orange-400 drop-shadow-lg" />
                    </div>
                    <h3 className="font-semibold mb-2 text-white">
                      {t("services.vehicleDamage")}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {t("services.vehicleDamageDesc")}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 text-center animate-fade-in-up animation-delay-1100">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full mx-auto mb-4 flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      <Home className="h-8 w-8 text-orange-400 drop-shadow-lg" />
                    </div>
                    <h3 className="font-semibold mb-2 text-white">
                      {t("services.personalProperty")}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {t("services.personalPropertyDesc")}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 text-center animate-fade-in-up animation-delay-1200">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full mx-auto mb-4 flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      <Shield className="h-8 w-8 text-orange-400 drop-shadow-lg" />
                    </div>
                    <h3 className="font-semibold mb-2 text-white">
                      {t("services.liabilityClaims")}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {t("services.liabilityClaimsDesc")}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-white/10 backdrop-blur-md py-16 rounded-lg border border-white/20 animate-fade-in-up animation-delay-1300">
              <div className="text-center space-y-6">
                <h2 className="text-3xl font-bold text-white">
                  {t("services.needHelpWithClaim")}
                </h2>
                <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                  {t("services.ctaDescription")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    size="lg"
                  >
                    <Link href="/contact">{t("common.getFreeEvaluation")}</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Link href="tel:786-417-3869">
                      <Phone className="h-4 w-4 mr-2" />
                      {t("common.callPhone")}
                    </Link>
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
