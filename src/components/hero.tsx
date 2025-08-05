"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Shield, DollarSign, Clock } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Contact Us For A{" "}
                <span className="text-primary-outline">
                  Free Claim Evaluation!
                </span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Don&apos;t let insurance companies take advantage of you. Our
                licensed public adjusters fight to maximize your claim
                settlement and ensure you get the compensation you deserve.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-primary-outline" />
                <span className="text-sm font-medium text-white">
                  Licensed & Insured
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <DollarSign className="h-5 w-5 text-primary-outline" />
                <span className="text-sm font-medium text-white">
                  No Upfront Fees
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary-outline" />
                <span className="text-sm font-medium text-white">
                  24/7 Response
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-primary-outline" />
                <span className="text-sm font-medium text-white">
                  Nationwide Service
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
              >
                <Link href="tel:786-417-3869">
                  <Phone className="h-5 w-5 mr-2" />
                  (786) 417-3869
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/contact">Get Free Evaluation</Link>
              </Button>
            </div>
          </div>

          {/* Right side - Contact form card */}
          <div className="lg:pl-8">
            <Card className="shadow-xl border-0 bg-white/10 backdrop-blur-md border border-white/20">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold text-white">
                      Free Claim Evaluation
                    </h3>
                    <p className="text-gray-200">
                      Get your claim reviewed by our experts at no cost
                    </p>
                  </div>

                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-white"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white/20 text-white placeholder:text-gray-300"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium text-white"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        className="w-full px-3 py-2 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white/20 text-white placeholder:text-gray-300"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-white"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="w-full px-3 py-2 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white/20 text-white placeholder:text-gray-300"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="claim"
                        className="text-sm font-medium text-white"
                      >
                        Brief Description of Claim
                      </label>
                      <textarea
                        id="claim"
                        rows={3}
                        className="w-full px-3 py-2 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white/20 text-white placeholder:text-gray-300 resize-none"
                        placeholder="Tell us about your claim..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
                      size="lg"
                    >
                      Get Free Evaluation
                    </Button>
                  </form>

                  <p className="text-xs text-gray-300 text-center">
                    By submitting this form, you agree to be contacted by
                    Fernandez Public Adjusters.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
