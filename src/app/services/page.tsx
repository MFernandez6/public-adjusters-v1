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

export default function ServicesPage() {
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
                Our Services
              </h1>
              <p className="text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">
                We handle all types of insurance claims to ensure you receive
                the maximum settlement you deserve. No claim is too big or too
                small.
              </p>
            </div>

            {/* Property Damage Claims */}
            <section className="mb-16">
              <div className="text-center space-y-4 mb-12 animate-fade-in-up animation-delay-100">
                <h2 className="text-3xl font-bold text-white">
                  Property Damage Claims
                </h2>
                <p className="text-lg text-gray-200">
                  Comprehensive coverage for all types of property damage
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-up animation-delay-200">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      <Flame className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                    </div>
                    <CardTitle className="text-white">Fire Damage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-200 mb-4">
                      Complete fire damage assessment and documentation. We
                      ensure all damage is properly documented and valued.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400 drop-shadow-lg" />
                        <span className="text-gray-200">
                          Structural damage assessment
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400 drop-shadow-lg" />
                        <span className="text-gray-200">
                          Smoke and soot damage
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400 drop-shadow-lg" />
                        <span className="text-gray-200">
                          Personal property inventory
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
                    <CardTitle className="text-white">Water Damage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-200 mb-4">
                      From burst pipes to storm flooding, we handle all water
                      damage claims with expert assessment.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400 drop-shadow-lg" />
                        <span className="text-gray-200">
                          Flood damage assessment
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400 drop-shadow-lg" />
                        <span className="text-gray-200">
                          Mold remediation costs
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400 drop-shadow-lg" />
                        <span className="text-gray-200">
                          Structural drying documentation
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
                    <CardTitle className="text-white">Storm Damage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-200 mb-4">
                      Hurricane, tornado, and storm damage claims. We document
                      all damage for maximum recovery.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400 drop-shadow-lg" />
                        <span className="text-gray-200">
                          Roof damage assessment
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400 drop-shadow-lg" />
                        <span className="text-gray-200">
                          Window and siding damage
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400 drop-shadow-lg" />
                        <span className="text-gray-200">
                          Debris removal costs
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
                  Business Claims
                </h2>
                <p className="text-lg text-gray-200">
                  Protecting your business and livelihood
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-up animation-delay-600">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      <Building className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                    </div>
                    <CardTitle className="text-white">
                      Commercial Property
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-200 mb-4">
                      Complete commercial property damage assessment and
                      business interruption claim handling.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400 drop-shadow-lg" />
                        <span className="text-gray-200">
                          Building damage assessment
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400 drop-shadow-lg" />
                        <span className="text-gray-200">
                          Equipment and inventory loss
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400 drop-shadow-lg" />
                        <span className="text-gray-200">
                          Business interruption claims
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400 drop-shadow-lg" />
                        <span className="text-gray-200">
                          Extra expense coverage
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
                      Business Interruption
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-200 mb-4">
                      Maximize your business interruption claim to cover lost
                      income and operating expenses.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400 drop-shadow-lg" />
                        <span className="text-gray-200">
                          Lost income calculation
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400 drop-shadow-lg" />
                        <span className="text-gray-200">
                          Operating expense coverage
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400 drop-shadow-lg" />
                        <span className="text-gray-200">
                          Extended period of indemnity
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400 drop-shadow-lg" />
                        <span className="text-gray-200">
                          Contingent business interruption
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
                  Specialized Services
                </h2>
                <p className="text-lg text-gray-200">
                  Expert handling of complex and specialized claims
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 text-center animate-fade-in-up animation-delay-900">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full mx-auto mb-4 flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      <Zap className="h-8 w-8 text-orange-400 drop-shadow-lg" />
                    </div>
                    <h3 className="font-semibold mb-2 text-white">
                      Electrical Damage
                    </h3>
                    <p className="text-sm text-gray-200">
                      Power surge and electrical damage claims
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 text-center animate-fade-in-up animation-delay-1000">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full mx-auto mb-4 flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      <Car className="h-8 w-8 text-orange-400 drop-shadow-lg" />
                    </div>
                    <h3 className="font-semibold mb-2 text-white">
                      Vehicle Damage
                    </h3>
                    <p className="text-sm text-gray-200">
                      Comprehensive and collision claims
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 text-center animate-fade-in-up animation-delay-1100">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full mx-auto mb-4 flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      <Home className="h-8 w-8 text-orange-400 drop-shadow-lg" />
                    </div>
                    <h3 className="font-semibold mb-2 text-white">
                      Personal Property
                    </h3>
                    <p className="text-sm text-gray-200">
                      Contents and personal property claims
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 text-center animate-fade-in-up animation-delay-1200">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full mx-auto mb-4 flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      <Shield className="h-8 w-8 text-orange-400 drop-shadow-lg" />
                    </div>
                    <h3 className="font-semibold mb-2 text-white">
                      Liability Claims
                    </h3>
                    <p className="text-sm text-gray-200">
                      Third-party liability and defense
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-white/10 backdrop-blur-md py-16 rounded-lg border border-white/20 animate-fade-in-up animation-delay-1300">
              <div className="text-center space-y-6">
                <h2 className="text-3xl font-bold text-white">
                  Need Help With Your Claim?
                </h2>
                <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                  Don&apos;t let insurance companies take advantage of you.
                  Contact us today for a free claim evaluation and see how much
                  more you could recover.
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
