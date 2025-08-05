import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Award,
  Users,
  Target,
  CheckCircle,
  Star,
  GraduationCap,
  Building,
  Scale,
  Phone,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-outline">
            About Fernandez Public Adjusters
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We&apos;re licensed public adjusters dedicated to fighting for your
            rights and ensuring you receive the maximum settlement you deserve.
          </p>
        </div>

        {/* Founder Spotlight */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Founder Info */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="secondary" className="mb-4">
                    Founder & Lead Adjuster
                  </Badge>
                  <h2 className="text-3xl lg:text-4xl font-bold text-primary-outline">
                    Miguel Angel Fernandez
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Licensed public adjuster with extensive legal and
                    construction expertise
                  </p>
                </div>

                {/* Key Qualifications */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="h-5 w-5 text-primary-outline" />
                    <span className="text-sm font-medium">
                      Master of Science in Law & Policy
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary-outline" />
                    <span className="text-sm font-medium">
                      Magna Cum Laude Graduate
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building className="h-5 w-5 text-primary-outline" />
                    <span className="text-sm font-medium">
                      Property Damage Specialist
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Scale className="h-5 w-5 text-primary-outline" />
                    <span className="text-sm font-medium">
                      Legal & Insurance Experience
                    </span>
                  </div>
                </div>

                <div className="pt-4">
                  <Badge variant="outline">License: XXXXXXX</Badge>
                </div>
              </div>

              {/* Founder Photo Placeholder */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-full h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-primary rounded-full mx-auto flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary-foreground">
                        MF
                      </span>
                    </div>
                    <p className="text-muted-foreground">Professional Photo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Biography */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-outline mb-8 text-center">
              Professional Background
            </h3>
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-primary-outline">
                    Miguel Angel Fernandez
                  </strong>{" "}
                  was born in Lima, Peru, and raised in Miami, Florida. His
                  early experiences in these diverse environments shaped his
                  understanding of the complexities of culture, law, and
                  community.
                </p>

                <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-primary">
                  <h4 className="font-semibold text-primary-outline mb-3">
                    Academic Excellence
                  </h4>
                  <p>
                    Miguel pursued his academic interests at Florida State
                    University, where he earned a Bachelor&apos;s degree in
                    Political Science. His passion for law led him to attend
                    Barry University for law school. After a year, he made a
                    strategic decision to transfer and focus on obtaining a
                    Master of Science in Law and Policy, graduating{" "}
                    <strong>magna cum laude</strong> with an impressive{" "}
                    <strong>3.78 GPA</strong>.
                  </p>
                </div>

                <p>
                  Throughout his career, Miguel has gained extensive experience
                  working in various law firms, refining his legal skills. His
                  expertise lies in construction defects, where he has
                  successfully represented both private clients and insurance
                  companies, adeptly navigating the intricacies of claims and
                  ensuring just outcomes.
                </p>

                <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-secondary">
                  <h4 className="font-semibold text-secondary-foreground mb-3">
                    Construction Industry Expertise
                  </h4>
                  <p>
                    Miguel&apos;s background is further enriched by his
                    stepfather&apos;s lifelong career in the construction
                    industry, specializing in kitchen cabinetry, marble tops,
                    flooring, and various aspects of construction work. This
                    familial connection has provided him with unique insights
                    and a practical understanding of construction processes,
                    enhancing his capability to serve clients effectively as a
                    public adjuster.
                  </p>
                </div>

                <p>
                  With a combination of legal knowledge and hands-on experience
                  in the construction field, Miguel Angel Fernandez is
                  well-equipped to advocate for clients facing insurance claims.
                  His commitment is to guide clients through the claims process
                  with professionalism and dedication, ensuring they receive the
                  compensation they deserve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
            <p className="text-xl text-muted-foreground">
              Fighting for your rights and maximizing your claim settlements
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Fernandez Public Adjusters, we believe that every
                policyholder deserves fair treatment and maximum compensation
                for their losses. When disaster strikes, insurance companies
                often try to minimize payouts, leaving families and businesses
                struggling to recover.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                That&apos;s where we come in. Our team of experienced, licensed
                public adjusters works exclusively for you - not the insurance
                company. We fight to ensure you receive every dollar you&apos;re
                entitled to under your policy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Get Free Evaluation</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="tel:786-417-3869">
                    <Phone className="h-4 w-4 mr-2" />
                    Call (786) 417-3869
                  </Link>
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-lg">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-semibold text-lg">
                      Licensed & Insured
                    </h3>
                    <p className="text-muted-foreground">
                      State-licensed public adjusters
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-semibold text-lg">
                      Proven Track Record
                    </h3>
                    <p className="text-muted-foreground">
                      Millions recovered for clients
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-semibold text-lg">Client-Focused</h3>
                    <p className="text-muted-foreground">
                      We work exclusively for you
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-primary">Why Choose Us?</h2>
            <p className="text-xl text-muted-foreground">
              We&apos;re not just another public adjusting firm. Here&apos;s
              what sets us apart:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Maximum Settlements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our clients typically receive 3-5 times more than initial
                  insurance offers. We know how to document and negotiate for
                  maximum recovery.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>No Upfront Fees</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We work on a contingency basis - we only get paid when you get
                  paid. No hidden costs or upfront fees.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Personal Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You&apos;ll work directly with experienced adjusters, not case
                  managers. We provide personalized attention to every client.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Industry Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our team has decades of combined experience in insurance
                  claims and public adjusting. We know the industry inside and
                  out.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Full Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We handle all aspects of your claim - from initial assessment
                  to final settlement. Complete documentation and negotiation
                  services.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Over $2.5 million recovered for our clients. Check our
                  testimonials and see the difference we make.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16 rounded-lg">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Don&apos;t let insurance companies take advantage of you. Contact
              us today for a free claim evaluation and see how much more you
              could recover.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link href="/contact">Get Free Evaluation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
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
  );
}
