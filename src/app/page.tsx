"use client";

import { Hero } from "@/components/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Shield,
  DollarSign,
  Clock,
  Users,
  CheckCircle,
  Star,
  Phone,
  Building,
  FileText,
  Award,
  Wind,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
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
        <Hero />

        {/* Call to Action - New Claims */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in-up">
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Do You Have a New Claim?
                </h2>
                <p className="text-lg text-gray-200 leading-relaxed">
                  The best time to get a public adjuster involved in your claim
                  is at the very beginning. Policyholders unfamiliar with the
                  claims process and policy language can make key mistakes. How
                  you report and document your claim can have a significant
                  impact on how quickly you get paid and your final settlement
                  amount.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Link href="/contact">Start Your Claim</Link>
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
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 animate-fade-in-up animation-delay-200">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                    <span className="font-semibold text-white">
                      Immediate Response
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                    <span className="font-semibold text-white">
                      Proper Documentation
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                    <span className="font-semibold text-white">
                      Policy Review
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                    <span className="font-semibold text-white">
                      Expert Guidance
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
                      Insurance Company Advocacy
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                    <span className="font-semibold text-white">
                      Red Tape Navigation
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                    <span className="font-semibold text-white">
                      Unreasonable Demands Handling
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                    <span className="font-semibold text-white">
                      Personal Representation
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-6 animate-fade-in-right">
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Delayed & Denied Claims
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Is your insurance company dragging their feet? Don&apos;t let
                  the insurance companies bully or throw a lot of red tape at
                  you. The unreasonable demands to prove your claim can be
                  overwhelming. As your personal representative, a public
                  adjuster will help you navigate the insurance claims process.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Link href="/contact">Review Your Claim</Link>
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
                Benefits of Hiring a Public Adjuster
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Don&apos;t let the insurer tell you what they will pay. We
                ensure you get the settlement you deserve.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-up animation-delay-100">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <FileText className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                  </div>
                  <CardTitle className="text-white">Policy Review</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">
                    We review your policy to ensure all coverages are claimed
                    and maximize your recovery.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-up animation-delay-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center mb-4 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                    <DollarSign className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                  </div>
                  <CardTitle className="text-white">
                    Fair Cost Estimation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">
                    We estimate the fair repair cost of your damages, not what
                    the insurance company wants to pay.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-up animation-delay-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <Users className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                  </div>
                  <CardTitle className="text-white">Expert Advocacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">
                    We meet with the insurance adjuster to advocate for you and
                    fight for your rights.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-up animation-delay-400">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center mb-4 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                    <Award className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                  </div>
                  <CardTitle className="text-white">Fair Settlement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">
                    We negotiate and settle your claim so you are treated fairly
                    and get maximum compensation.
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
                  Commercial Claims
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Business claims can quickly become complicated matters with
                  layers of insurance coverage, inventory and property
                  valuation, repair cost estimates, coordination of experts and
                  communication with multiple insurance carrier staff. Let us
                  handle the claim while you get yourself back in business.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Building className="h-5 w-5 text-orange-400 drop-shadow-lg" />
                    <span className="text-sm font-medium text-white">
                      Large Loss Claims
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <DollarSign className="h-5 w-5 text-orange-400 drop-shadow-lg" />
                    <span className="text-sm font-medium text-white">
                      Business Interruption
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-orange-400 drop-shadow-lg" />
                    <span className="text-sm font-medium text-white">
                      Expert Coordination
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-orange-400 drop-shadow-lg" />
                    <span className="text-sm font-medium text-white">
                      Proven Results
                    </span>
                  </div>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Link href="/services">Learn More</Link>
                </Button>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 animate-fade-in-right">
                <h3 className="text-xl font-bold text-white mb-4">
                  Our Record Speaks for Itself
                </h3>
                <p className="text-gray-300">
                  Review our commercial claim success stories to understand why
                  we&apos;re considered the large loss claims expert.
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
                  What&apos;s Your Claim Really Worth?
                </h3>
                <p className="text-gray-200">
                  If you&apos;ve sustained property damage and plan to file an
                  insurance claim, do you know what your claim is really worth?
                  Will your insurer offer you a fair claim settlement?
                </p>
              </div>
              <div className="space-y-6 animate-fade-in-right">
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Residential Claims
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  If being treated fairly and getting paid quickly are important
                  to you, consider hiring a public insurance adjuster to
                  represent you and manage your claim. Read our residential
                  claim success stories to understand how we&apos;ve helped with
                  property damage claims just like yours.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Building className="h-5 w-5 text-orange-400 drop-shadow-lg" />
                    <span className="text-sm font-medium text-white">
                      Property Damage
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Wind className="h-5 w-5 text-orange-400 drop-shadow-lg" />
                    <span className="text-sm font-medium text-white">
                      Storm Damage
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-orange-400 drop-shadow-lg" />
                    <span className="text-sm font-medium text-white">
                      Fair Treatment
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-orange-400 drop-shadow-lg" />
                    <span className="text-sm font-medium text-white">
                      Quick Payment
                    </span>
                  </div>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Link href="/services">View Success Stories</Link>
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
                Why Choose Fernandez Public Adjusters?
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                We&apos;re not just another public adjusting firm. Here&apos;s
                what sets us apart:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-up animation-delay-100">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                  </div>
                  <CardTitle className="text-white">
                    Proven Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">
                    Our adjuster&apos;s level of experience is unmatched. We
                    utilize claims management software and the latest technology
                    to manage, track and build a case that gets you a fair
                    settlement.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-up animation-delay-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                  </div>
                  <CardTitle className="text-white">
                    Policyholder Champions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">
                    We work exclusively for you - not the insurance company. Our
                    commitment is to be your champion throughout the entire
                    claims process.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-up animation-delay-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-4">
                    <DollarSign className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                  </div>
                  <CardTitle className="text-white">
                    Maximum Settlements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">
                    Our clients typically receive 3-5 times more than initial
                    insurance offers. We know how to document and negotiate for
                    maximum recovery.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-up animation-delay-400">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                  </div>
                  <CardTitle className="text-white">Personal Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">
                    You&apos;ll work directly with experienced adjusters, not
                    case managers. We provide personalized attention to every
                    client.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-up animation-delay-500">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                  </div>
                  <CardTitle className="text-white">No Upfront Fees</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">
                    We work on a contingency basis - we only get paid when you
                    get paid. No hidden costs or upfront fees.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-up animation-delay-600">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 text-orange-400 drop-shadow-lg" />
                  </div>
                  <CardTitle className="text-white">Proven Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">
                    Over $2.5 million recovered for our clients. Check our
                    testimonials and see the difference we make.
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
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-200">
                Real testimonials from satisfied clients
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
                    &quot;I am writing to let you know I appreciate the hard
                    work that has gone into my case. It&apos;s been a long
                    journey. Miguel and his team have been compassionate and
                    understanding during this emotional and stressful time. I
                    thank you for that.&quot;
                  </p>
                  <p className="font-semibold text-white">
                    - Florida Homeowner
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
                    &quot;We felt very confident with Miguel assisting us with
                    our claim. We are thankful we had them advocating for
                    us.&quot;
                  </p>
                  <p className="font-semibold text-white">- Liza Pettingill</p>
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
                    &quot;Superb service and attention to detail, follow through
                    and support made our experience with our claim positive and
                    satisfying.&quot;
                  </p>
                  <p className="font-semibold text-white">- Taylor Vanston</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 animate-fade-in-up">
              Ready to Get Your Free Claim Evaluation?
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Don&apos;t wait to get the settlement you deserve. Contact us
              today for a free, no-obligation evaluation of your claim.
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
                  Call (786) 417-3869
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-semibold border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/contact">Get Free Evaluation</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
