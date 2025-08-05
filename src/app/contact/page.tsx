import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-primary">
            Contact Us For A Free Claim Evaluation!
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Don&apos;t let insurance companies take advantage of you. Our
            licensed public adjusters fight to maximize your claim settlement
            and ensure you get the compensation you deserve.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First Name *
                    </label>
                    <Input id="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last Name *
                    </label>
                    <Input id="lastName" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number *
                    </label>
                    <Input id="phone" type="tel" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address *
                    </label>
                    <Input id="email" type="email" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="claimType" className="text-sm font-medium">
                    Type of Claim
                  </label>
                  <select
                    id="claimType"
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select claim type</option>
                    <option value="property">Property Damage</option>
                    <option value="business">Business Interruption</option>
                    <option value="storm">Storm Damage</option>
                    <option value="fire">Fire Damage</option>
                    <option value="water">Water Damage</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Describe Your Claim *
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Please provide details about your claim..."
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office Info */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl">Office Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">
                      Fernandez Public Adjusters, LLC
                    </p>
                    <p>1700 NW North River Drive</p>
                    <p>Miami, Florida 33125</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href="tel:786-417-3869" className="hover:underline">
                    (786) 417-3869
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <a
                    href="mailto:Claims@FernandezAdjusters.com"
                    className="hover:underline"
                  >
                    Claims@FernandezAdjusters.com
                  </a>
                </div>
                <div className="pt-2">
                  <p className="font-semibold text-primary">License: XXXXXXX</p>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl">Business Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-semibold">
                    Available 24/7 for Emergencies
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Emergency Calls Only</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency CTA */}
            <Card className="shadow-lg border-0 bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Emergency? Call Now!</h3>
                <p className="mb-4 opacity-90">
                  If you&apos;ve experienced property damage, don&apos;t wait.
                  Call us immediately for emergency response.
                </p>
                <Button
                  asChild
                  variant="secondary"
                  className="w-full"
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
  );
}
