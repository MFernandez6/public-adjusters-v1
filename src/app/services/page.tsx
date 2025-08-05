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
            <div className="text-center space-y-6 mb-12">
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
              <div className="text-center space-y-6 mb-12">
                <h2 className="text-3xl font-bold text-white">
                  Property Damage Claims
                </h2>
                <p className="text-xl text-gray-200">
                  Comprehensive coverage for all types of property damage
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-xl bg-white/10 backdrop-blur-md border border-white/20 hover:shadow-2xl transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                      <Flame className="h-6 w-6 text-primary-outline" />
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
                        <CheckCircle className="h-4 w-4 text-primary-outline" />
                        <span className="text-gray-200">
                          Structural damage assessment
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary-outline" />
                        <span className="text-gray-200">
                          Smoke and soot damage
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary-outline" />
                        <span className="text-gray-200">
                          Personal property inventory
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl bg-white/10 backdrop-blur-md border border-white/20 hover:shadow-2xl transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                      <Droplets className="h-6 w-6 text-primary-outline" />
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
                        <CheckCircle className="h-4 w-4 text-primary-outline" />
                        <span className="text-gray-200">
                          Flood damage assessment
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary-outline" />
                        <span className="text-gray-200">
                          Mold remediation costs
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary-outline" />
                        <span className="text-gray-200">
                          Structural drying documentation
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl bg-white/10 backdrop-blur-md border border-white/20 hover:shadow-2xl transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                      <Wind className="h-6 w-6 text-primary-outline" />
                    </div>
                    <CardTitle className="text-white">Storm Damage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-200 mb-4">
                      Hurricane, tornado, and storm damage claims with
                      comprehensive documentation and assessment.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary-outline" />
                        <span className="text-gray-200">
                          Roof damage assessment
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary-outline" />
                        <span className="text-gray-200">
                          Wind damage documentation
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary-outline" />
                        <span className="text-gray-200">
                          Debris removal costs
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl bg-white/10 backdrop-blur-md border border-white/20 hover:shadow-2xl transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                      <Zap className="h-6 w-6 text-primary-outline" />
                    </div>
                    <CardTitle className="text-white">
                      Lightning Damage
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-200 mb-4">
                      Electrical damage from lightning strikes, power surges,
                      and related electrical system failures.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary-outline" />
                        <span className="text-gray-200">
                          Electrical system damage
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary-outline" />
                        <span className="text-gray-200">
                          Appliance damage assessment
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary-outline" />
                        <span className="text-gray-200">
                          Power surge protection
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl bg-white/10 backdrop-blur-md border border-white/20 hover:shadow-2xl transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                      <Building className="h-6 w-6 text-primary-outline" />
                    </div>
                    <CardTitle className="text-white">
                      Commercial Claims
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-200 mb-4">
                      Business interruption, inventory loss, and commercial
                      property damage claims for all business types.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary-outline" />
                        <span className="text-gray-200">
                          Business interruption
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary-outline" />
                        <span className="text-gray-200">
                          Inventory loss assessment
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary-outline" />
                        <span className="text-gray-200">Equipment damage</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl bg-white/10 backdrop-blur-md border border-white/20 hover:shadow-2xl transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                      <Car className="h-6 w-6 text-primary-outline" />
                    </div>
                    <CardTitle className="text-white">Auto Claims</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-200 mb-4">
                      Comprehensive auto insurance claims for damage, theft, and
                      total loss situations.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary-outline" />
                        <span className="text-gray-200">
                          Vehicle damage assessment
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary-outline" />
                        <span className="text-gray-200">
                          Total loss evaluation
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary-outline" />
                        <span className="text-gray-200">
                          Rental car coordination
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center py-16">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                  Don&apos;t wait to get the settlement you deserve. Contact us
                  today for a free, no-obligation evaluation of your claim.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
                  >
                    <Link href="/contact">Get Free Evaluation</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
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
