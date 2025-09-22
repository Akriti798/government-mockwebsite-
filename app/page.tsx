import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Shield,
  Download,
  Edit,
  MapPin,
  Users,
  Lock,
  CheckCircle,
  ArrowRight,
  Phone,
  Globe,
  FileText,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Digital Identity for Every Indian
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Empowering Residents with Digital Identity
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Aadhaar is a 12-digit unique identity number that can be obtained by residents of India, based on their
                biometric and demographic data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8" asChild>
                  <Link href="/aadhaar-services">
                    Get Aadhaar <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent" asChild>
                  <Link href="/download-aadhaar">Download Aadhaar</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/government-digital-identity-illustration-with-indi.jpg"
                alt="Digital Identity Illustration"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Quick Services</h2>
            <p className="text-lg text-muted-foreground">Access essential Aadhaar services quickly and securely</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Download className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Download Aadhaar</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Download your Aadhaar card instantly using your Aadhaar number or enrollment ID
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Edit className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Update Details</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Update your demographic and biometric information in Aadhaar database
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Check Status</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Check the status of your Aadhaar enrollment or update request
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Locate Center</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Find the nearest Aadhaar enrollment and update center in your area
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Aadhaar by Numbers</h2>
            <p className="text-lg text-muted-foreground">Transforming India through digital identity</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1.3B+</div>
              <div className="text-lg font-semibold text-foreground mb-2">Aadhaar Numbers Generated</div>
              <div className="text-muted-foreground">Covering 99% of adult population</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50B+</div>
              <div className="text-lg font-semibold text-foreground mb-2">Authentications</div>
              <div className="text-muted-foreground">Secure digital transactions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">36,000+</div>
              <div className="text-lg font-semibold text-foreground mb-2">Enrollment Centers</div>
              <div className="text-muted-foreground">Across India</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Aadhaar?</h2>
            <p className="text-lg text-muted-foreground">Benefits of having an Aadhaar number</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Universal Identity</h3>
                <p className="text-muted-foreground">
                  One identity for all services across India, eliminating multiple identity documents
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Lock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Secure & Private</h3>
                <p className="text-muted-foreground">
                  Advanced encryption and biometric authentication ensure your data is secure
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Digital Services</h3>
                <p className="text-muted-foreground">
                  Access government and private services online with Aadhaar authentication
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Financial Inclusion</h3>
                <p className="text-muted-foreground">Open bank accounts and access financial services easily</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Mobile Verification</h3>
                <p className="text-muted-foreground">
                  Link your mobile number for OTP-based services and notifications
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Paperless KYC</h3>
                <p className="text-muted-foreground">Complete KYC processes digitally without physical documents</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Your Aadhaar?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join millions of Indians who have already enrolled for their digital identity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <Link href="/aadhaar-services">Start Enrollment</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary bg-transparent"
              asChild
            >
              <Link href="/locate-center">Find Center</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
