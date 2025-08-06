"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  DollarSign,
  Clock,
  Users,
  CheckCircle,
  Star,
  Target,
  Award,
  GraduationCap,
  Building,
  Scale,
  Phone,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutPage() {
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
            <div className="text-center space-y-6 mb-16 animate-fade-in-up">
              <h1 className="text-4xl lg:text-5xl font-bold text-white">
                {t("about.title")}
              </h1>
              <p className="text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">
                {t("about.subtitle")}
              </p>
            </div>

            {/* Founder Spotlight */}
            <section className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 animate-fade-in-left">
                  <Badge variant="secondary" className="mb-4">
                    {t("about.founderLeadAdjuster")}
                  </Badge>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white">
                    Miguel Angel Fernandez
                  </h2>
                  <p className="text-lg text-gray-200">
                    {t("about.founderDescription")}
                  </p>

                  {/* Key Qualifications */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <GraduationCap className="h-5 w-5 text-orange-400 drop-shadow-lg" />
                      <span className="text-sm font-medium text-white">
                        {t("about.masterDegree")}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-orange-400 drop-shadow-lg" />
                      <span className="text-sm font-medium text-white">
                        {t("about.magnaCumLaude")}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Building className="h-5 w-5 text-orange-400 drop-shadow-lg" />
                      <span className="text-sm font-medium text-white">
                        {t("about.propertyDamageSpecialist")}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Scale className="h-5 w-5 text-orange-400 drop-shadow-lg" />
                      <span className="text-sm font-medium text-white">
                        {t("about.legalInsuranceExperience")}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Badge
                      variant="outline"
                      className="text-white border-white/20"
                    >
                      {t("about.license")}
                    </Badge>
                  </div>
                </div>

                {/* Founder Photo Placeholder */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white/20 animate-fade-in-right">
                  <div className="w-full h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 bg-primary rounded-full mx-auto flex items-center justify-center">
                        <span className="text-3xl font-bold text-primary-foreground">
                          MF
                        </span>
                      </div>
                      <p className="text-gray-200">
                        {t("about.professionalPhoto")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Biography */}
            <section className="mb-20">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-8 text-center animate-fade-in-up">
                  {t("about.professionalBackground")}
                </h3>
                <div className="prose prose-lg max-w-none">
                  <div className="space-y-6 text-gray-200 leading-relaxed">
                    <p>
                      <strong>Miguel Angel Fernandez</strong>{" "}
                      {t("about.biographyIntro")}
                    </p>

                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border-l-4 border-primary border border-white/20">
                      <h4 className="font-semibold text-white mb-3">
                        {t("about.academicExcellence")}
                      </h4>
                      <p className="text-gray-200">
                        {t("about.academicExcellenceDesc")}
                      </p>
                    </div>

                    <p>{t("about.careerExperience")}</p>

                    <p>{t("about.constructionBackground")}</p>

                    <p>{t("about.commitment")}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Team Section */}
            <section className="mb-20">
              <div className="text-center space-y-4 mb-12 animate-fade-in-up">
                <h2 className="text-3xl font-bold text-white">
                  {t("about.ourTeam")}
                </h2>
                <p className="text-lg text-gray-200">
                  {t("about.teamDescription")}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-up animation-delay-100">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full mx-auto mb-4 flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      <Shield className="h-8 w-8 text-orange-400 drop-shadow-lg" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {t("about.claimsSpecialists")}
                    </h3>
                    <p className="text-gray-200">
                      {t("about.claimsSpecialistsDesc")}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-up animation-delay-200">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full mx-auto mb-4 flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      <Award className="h-8 w-8 text-orange-400 drop-shadow-lg" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {t("about.legalExperts")}
                    </h3>
                    <p className="text-gray-200">
                      {t("about.legalExpertsDesc")}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-up animation-delay-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full mx-auto mb-4 flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      <Users className="h-8 w-8 text-orange-400 drop-shadow-lg" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {t("about.clientAdvocates")}
                    </h3>
                    <p className="text-gray-200">
                      {t("about.clientAdvocatesDesc")}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="mb-20">
              <div className="text-center space-y-4 mb-12 animate-fade-in-up">
                <h2 className="text-3xl font-bold text-white">
                  {t("about.whyChooseUs")}
                </h2>
                <p className="text-lg text-gray-200">
                  {t("about.whyChooseUsDesc")}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start space-x-4 animate-fade-in-up animation-delay-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <Target className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {t("about.provenResults")}
                    </h3>
                    <p className="text-gray-200">
                      {t("about.provenResultsDesc")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 animate-fade-in-up animation-delay-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <Shield className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {t("about.licensedInsured")}
                    </h3>
                    <p className="text-gray-200">
                      {t("about.licensedInsuredDesc")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 animate-fade-in-up animation-delay-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <Users className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {t("about.personalService")}
                    </h3>
                    <p className="text-gray-200">
                      {t("about.personalServiceDesc")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 animate-fade-in-up animation-delay-400">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <Award className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {t("about.expertKnowledge")}
                    </h3>
                    <p className="text-gray-200">
                      {t("about.expertKnowledgeDesc")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 animate-fade-in-up animation-delay-500">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <CheckCircle className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {t("about.noUpfrontFees")}
                    </h3>
                    <p className="text-gray-200">
                      {t("about.noUpfrontFeesDesc")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 animate-fade-in-up animation-delay-600">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <Star className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {t("about.clientSatisfaction")}
                    </h3>
                    <p className="text-gray-200">
                      {t("about.clientSatisfactionDesc")}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-white/10 backdrop-blur-md py-16 rounded-lg border border-white/20 animate-fade-in-up animation-delay-700">
              <div className="text-center space-y-6">
                <h2 className="text-3xl font-bold text-white">
                  {t("about.readyToGetStarted")}
                </h2>
                <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                  {t("about.ctaDescription")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    size="lg"
                  >
                    <Link href="/contact">Get Free Evaluation</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Link href="tel:786-417-3869">
                      <Phone className="h-4 w-4 mr-2" />
                      Call (786) 417-3869
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
