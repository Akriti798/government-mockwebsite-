import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, Globe, Target, Eye, Award } from "lucide-react"

export default function AboutUidaiPage() {
  const achievements = [
    { number: "1.3B+", label: "Aadhaar Numbers Issued", description: "Covering 99% of adult population" },
    { number: "50B+", label: "Authentications", description: "Secure digital transactions" },
    { number: "36,000+", label: "Enrollment Centers", description: "Across India" },
    { number: "99.9%", label: "Uptime", description: "System availability" },
  ]

  const principles = [
    {
      icon: Shield,
      title: "Privacy by Design",
      description: "Built with privacy and security as fundamental principles from the ground up",
    },
    {
      icon: Users,
      title: "Inclusive Identity",
      description: "Ensuring every resident has access to digital identity regardless of background",
    },
    {
      icon: Globe,
      title: "Digital Transformation",
      description: "Enabling India's digital transformation through secure identity infrastructure",
    },
    {
      icon: Target,
      title: "Service Delivery",
      description: "Improving efficiency and transparency in government service delivery",
    },
  ]

  return (
    <div>
      <PageHeader
        title="About UIDAI"
        description="Learn about the Unique Identification Authority of India and its mission"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About UIDAI" }]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">Empowering India with Digital Identity</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Unique Identification Authority of India (UIDAI) is a statutory authority established under the
                provisions of the Aadhaar Act 2016 by the Government of India. UIDAI is mandated to issue a unique
                identity number called Aadhaar to all residents of India.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To provide every resident of India with a unique digital identity that is robust, verifiable, and can
                  be authenticated in an online, cost-effective manner while ensuring privacy and security of personal
                  information.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Eye className="h-5 w-5 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To empower residents with a unique digital identity that enables access to services, benefits, and
                  opportunities while fostering innovation, inclusion, and transformation in the digital economy.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Key Achievements */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">Key Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                    <div className="font-semibold text-foreground mb-1">{achievement.label}</div>
                    <div className="text-sm text-muted-foreground">{achievement.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Core Principles */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">Core Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {principles.map((principle, index) => {
                const IconComponent = principle.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{principle.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{principle.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Legal Framework */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-xl flex items-center space-x-2">
                <Award className="h-6 w-6 text-primary" />
                <span>Legal Framework</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Aadhaar Act 2016</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    The Aadhaar (Targeted Delivery of Financial and Other Subsidies, Benefits and Services) Act, 2016
                    provides the legal framework for Aadhaar and establishes UIDAI as a statutory authority.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Privacy Protection</Badge>
                    <Badge variant="outline">Data Security</Badge>
                    <Badge variant="outline">Resident Rights</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Regulatory Compliance</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    UIDAI operates under strict regulatory guidelines ensuring compliance with privacy laws, data
                    protection regulations, and international security standards.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">ISO 27001</Badge>
                    <Badge variant="outline">STQC Certified</Badge>
                    <Badge variant="outline">Audit Compliant</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Contact UIDAI</CardTitle>
              <CardDescription>Get in touch with us for more information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Headquarters</h4>
                  <p className="text-sm text-muted-foreground">
                    Unique Identification Authority of India
                    <br />
                    Government of India
                    <br />
                    New Delhi, India
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Helpline</h4>
                  <p className="text-sm text-muted-foreground">
                    Toll Free: 1947
                    <br />
                    Email: help@uidai.gov.in
                    <br />
                    Available 24/7
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Online Services</h4>
                  <p className="text-sm text-muted-foreground">
                    Website: uidai.gov.in
                    <br />
                    Mobile App: mAadhaar
                    <br />
                    Social Media: @UIDAI
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
