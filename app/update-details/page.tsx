import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Phone, MapPin, User, Calendar, AlertCircle, FileText, CreditCard } from "lucide-react"

export default function UpdateDetailsPage() {
  const updateTypes = [
    {
      icon: User,
      title: "Demographic Update",
      description: "Update name, date of birth, gender, and address",
      fee: "₹50",
      documents: "Address proof, Identity proof",
      category: "Basic",
    },
    {
      icon: Phone,
      title: "Mobile Number Update",
      description: "Update or link your mobile number with Aadhaar",
      fee: "Free",
      documents: "Mobile number verification",
      category: "Contact",
    },
    {
      icon: MapPin,
      title: "Address Update",
      description: "Update your current residential address",
      fee: "₹50",
      documents: "Valid address proof",
      category: "Basic",
    },
    {
      icon: Calendar,
      title: "Date of Birth Update",
      description: "Correct your date of birth information",
      fee: "₹50",
      documents: "Birth certificate or equivalent",
      category: "Basic",
    },
    {
      icon: FileText,
      title: "Biometric Update",
      description: "Update fingerprints, iris scan, or photograph",
      fee: "₹100",
      documents: "Physical presence required",
      category: "Biometric",
    },
    {
      icon: CreditCard,
      title: "Document Update",
      description: "Update supporting documents in Aadhaar database",
      fee: "₹50",
      documents: "New supporting documents",
      category: "Documents",
    },
  ]

  return (
    <div>
      <PageHeader
        title="Update Aadhaar Details"
        description="Update your demographic and biometric information in the Aadhaar database"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Aadhaar Services", href: "/aadhaar-services" },
          { label: "Update Details" },
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        {/* Important Notice */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-amber-800 mb-2">Important Information</h3>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• Visit an Aadhaar enrollment center for updates</li>
                  <li>• Carry original documents for verification</li>
                  <li>• Updates may take 7-10 working days to reflect</li>
                  <li>• Some updates require additional fees</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Update Types */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Types of Updates Available</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {updateTypes.map((update) => {
              const IconComponent = update.icon
              return (
                <Card key={update.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <Badge variant={update.fee === "Free" ? "secondary" : "outline"}>{update.fee}</Badge>
                    </div>
                    <CardTitle className="text-lg">{update.title}</CardTitle>
                    <CardDescription>{update.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div>
                        <span className="text-sm font-medium text-muted-foreground">Required Documents:</span>
                        <p className="text-sm">{update.documents}</p>
                      </div>
                      <div>
                        <Badge variant="outline" size="sm">
                          {update.category}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Process Steps */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-xl">Update Process</CardTitle>
              <CardDescription>Follow these steps to update your Aadhaar details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    1
                  </div>
                  <h4 className="font-semibold mb-2">Visit Center</h4>
                  <p className="text-sm text-muted-foreground">
                    Locate and visit the nearest Aadhaar enrollment center
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    2
                  </div>
                  <h4 className="font-semibold mb-2">Submit Documents</h4>
                  <p className="text-sm text-muted-foreground">Provide original documents and fill the update form</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    3
                  </div>
                  <h4 className="font-semibold mb-2">Biometric Capture</h4>
                  <p className="text-sm text-muted-foreground">Complete biometric verification if required</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    4
                  </div>
                  <h4 className="font-semibold mb-2">Get Receipt</h4>
                  <p className="text-sm text-muted-foreground">Collect acknowledgment receipt with URN number</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/locate-center">Find Enrollment Center</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/check-status">Check Update Status</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
