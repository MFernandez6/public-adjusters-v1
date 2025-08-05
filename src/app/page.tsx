"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Shield,
  DollarSign,
  Clock,
  Users,
  Star,
  Phone,
  Building,
  FileText,
  Award,
  Wind,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
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
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              {t("hero.title")}
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-semibold border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/contact">{t("hero.getFreeEvaluation")}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-semibold border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="tel:786-417-3869">
                  <Phone className="h-5 w-5 mr-2" />
                  {t("hero.callNow")}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action - New Claims */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in-up">
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  {t("services.newClaimTitle")}
                </h2>
                <p className="text-lg text-gray-200 leading-relaxed">
                  {t("services.newClaimDesc")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Link href="/contact">{t("services.startClaim")}</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Link href="tel:786-417-3869">
                      <Phone className="h-4 w-4 mr-2" />
                      {t("hero.callNow")}
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 animate-fade-in-up animation-delay-200">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                    <span className="font-semibold text-white">
                      {t("services.immediateResponse")}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                    <span className="font-semibold text-white">
                      {t("services.properDocumentation")}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                    <span className="font-semibold text-white">
                      {t("services.policyReview")}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                    <span className="font-semibold text-white">
                      {t("services.expertGuidance")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Delayed & Denied Claims */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 animate-fade-in-left">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                    <span className="font-semibold text-white">
                      {t("services.insuranceAdvocacy")}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                    <span className="font-semibold text-white">
                      {t("services.redTapeNavigation")}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                    <span className="font-semibold text-white">
                      {t("services.unreasonableDemands")}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                    <span className="font-semibold text-white">
                      {t("services.personalRepresentation")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-6 animate-fade-in-right">
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  {t("services.delayedDeniedClaims")}
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {t("services.delayedDeniedClaimsDesc")}
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Link href="/contact">{t("services.reviewClaim")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits of Hiring a Public Adjuster */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12 animate-fade-in-up">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                {t("services.benefitsTitle")}
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                {t("services.benefitsSubtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-up animation-delay-100">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <FileText className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                  </div>
                  <CardTitle className="text-white">
                    {t("services.policyReview")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">
                    {t("services.policyReviewDesc")}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-up animation-delay-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center mb-4 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                    <DollarSign className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                  </div>
                  <CardTitle className="text-white">
                    {t("services.fairCostEstimation")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">
                    {t("services.fairCostEstimationDesc")}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-up animation-delay-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <Users className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                  </div>
                  <CardTitle className="text-white">
                    {t("services.expertAdvocacy")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">
                    {t("services.expertAdvocacyDesc")}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-up animation-delay-400">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center mb-4 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                    <Award className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                  </div>
                  <CardTitle className="text-white">
                    {t("services.fairSettlement")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">
                    {t("services.fairSettlementDesc")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Commercial Claims */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in-left">
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  {t("services.commercialClaims")}
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {t("services.commercialClaimsDesc")}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Building className="h-5 w-5 text-orange-400 drop-shadow-lg" />
                    <span className="text-sm font-medium text-white">
                      {t("services.largeLossClaims")}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <DollarSign className="h-5 w-5 text-orange-400 drop-shadow-lg" />
                    <span className="text-sm font-medium text-white">
                      {t("services.businessInterruption")}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-orange-400 drop-shadow-lg" />
                    <span className="text-sm font-medium text-white">
                      {t("services.expertCoordination")}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-orange-400 drop-shadow-lg" />
                    <span className="text-sm font-medium text-white">
                      {t("services.provenResults")}
                    </span>
                  </div>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Link href="/services">{t("common.learnMore")}</Link>
                </Button>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 animate-fade-in-right">
                <h3 className="text-xl font-bold text-white mb-4">
                  {t("services.recordSpeaks")}
                </h3>
                <p className="text-gray-300">
                  {t("services.recordSpeaksDesc")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Residential Claims */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 animate-fade-in-left">
                <h3 className="text-xl font-bold text-white mb-4">
                  {t("services.whatsYourClaimWorth")}
                </h3>
                <p className="text-gray-200">
                  {t("services.whatsYourClaimWorthDesc")}
                </p>
              </div>
              <div className="space-y-6 animate-fade-in-right">
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  {t("services.residentialClaims")}
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {t("services.residentialClaimsDesc")}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Building className="h-5 w-5 text-orange-400 drop-shadow-lg" />
                    <span className="text-sm font-medium text-white">
                      {t("services.propertyDamage")}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Wind className="h-5 w-5 text-orange-400 drop-shadow-lg" />
                    <span className="text-sm font-medium text-white">
                      {t("services.stormDamage")}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-orange-400 drop-shadow-lg" />
                    <span className="text-sm font-medium text-white">
                      {t("services.fairTreatment")}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-orange-400 drop-shadow-lg" />
                    <span className="text-sm font-medium text-white">
                      {t("services.quickPayment")}
                    </span>
                  </div>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Link href="/services">
                    {t("services.viewSuccessStories")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Fernandez */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12 animate-fade-in-up">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                {t("services.whyChooseFernandez")}
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                {t("services.whyChooseFernandezDesc")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-up animation-delay-100">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                  </div>
                  <CardTitle className="text-white">
                    {t("services.provenExperience")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">
                    {t("services.provenExperienceDesc")}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-up animation-delay-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                  </div>
                  <CardTitle className="text-white">
                    {t("services.policyholderChampions")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">
                    {t("services.policyholderChampionsDesc")}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-up animation-delay-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-4">
                    <DollarSign className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                  </div>
                  <CardTitle className="text-white">
                    {t("services.maximumSettlements")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">
                    {t("services.maximumSettlementsDesc")}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-up animation-delay-400">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                  </div>
                  <CardTitle className="text-white">
                    {t("services.personalService")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">
                    {t("services.personalServiceDesc")}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-up animation-delay-500">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                  </div>
                  <CardTitle className="text-white">
                    {t("services.noUpfrontFees")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">
                    {t("services.noUpfrontFeesDesc")}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-up animation-delay-600">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                  </div>
                  <CardTitle className="text-white">
                    {t("services.provenResults")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">
                    {t("services.provenResultsDesc")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-white">
                {t("testimonials.title")}
              </h2>
              <p className="text-xl text-gray-200">
                {t("testimonials.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-up animation-delay-100">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  </div>
                  <p className="text-gray-200 mb-4 italic">
                    {t("testimonials.testimonial1")}
                  </p>
                  <p className="font-semibold text-white">
                    {t("testimonials.client1")}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-up animation-delay-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  </div>
                  <p className="text-gray-200 mb-4 italic">
                    {t("testimonials.testimonial2")}
                  </p>
                  <p className="font-semibold text-white">
                    {t("testimonials.client2")}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-up animation-delay-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  </div>
                  <p className="text-gray-200 mb-4 italic">
                    {t("testimonials.testimonial3")}
                  </p>
                  <p className="font-semibold text-white">
                    {t("testimonials.client3")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 animate-fade-in-up">
              {t("cta.title")}
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              {t("cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-semibold border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="tel:786-417-3869">
                  <Phone className="h-5 w-5 mr-2" />
                  {t("hero.callNow")}
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-semibold border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/contact">{t("hero.getFreeEvaluation")}</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
