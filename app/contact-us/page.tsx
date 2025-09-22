import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Phone, Mail, MapPin, Clock, MessageCircle, AlertCircle } from "lucide-react"

export default function ContactUsPage() {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        description="Get in touch with UIDAI for support, queries, and assistance"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Helpline</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-mono text-lg font-bold text-primary mb-1">1947</p>
                <p className="text-sm text-muted-foreground">Toll Free • 24/7 Available</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-primary mb-1">help@uidai.gov.in</p>
                <p className="text-sm text-muted-foreground">Response within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Live Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-primary mb-1">Online Support</p>
                <p className="text-sm text-muted-foreground">9 AM - 6 PM (Mon-Fri)</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Visit Center</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-primary mb-1">36,000+ Centers</p>
                <p className="text-sm text-muted-foreground">Find nearest center</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Alert className="mb-6">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Demo Notice:</strong> This is a demonstration form. No actual messages will be sent.
                    </AlertDescription>
                  </Alert>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="Enter your first name" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Enter your last name" className="mt-1" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email address" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="enrollment">Aadhaar Enrollment</SelectItem>
                          <SelectItem value="update">Update Details</SelectItem>
                          <SelectItem value="download">Download Issues</SelectItem>
                          <SelectItem value="complaint">File Complaint</SelectItem>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Describe your query or issue in detail..."
                        rows={5}
                        className="mt-1"
                      />
                    </div>

                    <Button className="w-full" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Additional Information */}
            <div className="space-y-6">
              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>Office Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Monday - Friday</span>
                      <span className="text-sm text-muted-foreground">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Saturday</span>
                      <span className="text-sm text-muted-foreground">9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Sunday</span>
                      <span className="text-sm text-muted-foreground">Closed</span>
                    </div>
                    <div className="pt-2 border-t">
                      <p className="text-xs text-muted-foreground">
                        Helpline (1947) is available 24/7 for urgent queries
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-1">How long does Aadhaar enrollment take?</h4>
                      <p className="text-sm text-muted-foreground">
                        The enrollment process typically takes 10-15 minutes at the center.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">When will I receive my Aadhaar card?</h4>
                      <p className="text-sm text-muted-foreground">
                        Aadhaar generation takes 60-90 days from enrollment date.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Can I download Aadhaar immediately?</h4>
                      <p className="text-sm text-muted-foreground">
                        Yes, once generated, you can download it instantly online.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="text-amber-800">Emergency Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-amber-700 mb-3">
                    For urgent issues related to Aadhaar misuse or security concerns:
                  </p>
                  <div className="space-y-2">
                    <p className="font-mono text-sm font-bold text-amber-800">1947 (Press 2 for Emergency)</p>
                    <p className="text-sm text-amber-700">Email: security@uidai.gov.in</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
