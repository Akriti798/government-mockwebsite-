import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Download,
  Edit,
  Shield,
  Lock,
  Unlock,
  CreditCard,
  Phone,
  MapPin,
  FileText,
  CheckCircle,
  AlertCircle,
  Users,
} from "lucide-react"

export default function AadhaarServicesPage() {
  const services = [
    {
      icon: Download,
      title: "Download Aadhaar",
      description: "Download your Aadhaar card using Aadhaar number or enrollment ID",
      href: "/download-aadhaar",
      category: "Essential",
    },
    {
      icon: Edit,
      title: "Update Details",
      description: "Update your demographic and biometric information",
      href: "/update-details",
      category: "Essential",
    },
    {
      icon: CheckCircle,
      title: "Check Aadhaar Status",
      description: "Check the status of your enrollment or update request",
      href: "/check-status",
      category: "Essential",
    },
    {
      icon: CreditCard,
      title: "Generate Virtual ID",
      description: "Create a temporary 16-digit Virtual ID for authentication",
      href: "/virtual-id",
      category: "Security",
    },
    {
      icon: Lock,
      title: "Lock Aadhaar",
      description: "Temporarily lock your Aadhaar to prevent misuse",
      href: "/lock-aadhaar",
      category: "Security",
    },
    {
      icon: Unlock,
      title: "Unlock Aadhaar",
      description: "Unlock your Aadhaar when you need to use it for services",
      href: "/unlock-aadhaar",
      category: "Security",
    },
    {
      icon: Phone,
      title: "Link Mobile Number",
      description: "Link or update your mobile number with Aadhaar",
      href: "/link-mobile",
      category: "Profile",
    },
    {
      icon: MapPin,
      title: "Locate Enrollment Center",
      description: "Find the nearest Aadhaar enrollment center",
      href: "/locate-center",
      category: "Support",
    },
    {
      icon: FileText,
      title: "Aadhaar PVC Card",
      description: "Order a PVC (plastic) version of your Aadhaar card",
      href: "/pvc-card",
      category: "Additional",
    },
    {
      icon: AlertCircle,
      title: "File Complaint",
      description: "File a complaint regarding Aadhaar services",
      href: "/file-complaint",
      category: "Support",
    },
    {
      icon: Users,
      title: "Aadhaar for NRI",
      description: "Aadhaar services for Non-Resident Indians",
      href: "/nri-services",
      category: "Special",
    },
    {
      icon: Shield,
      title: "Authentication History",
      description: "View your Aadhaar authentication transaction history",
      href: "/auth-history",
      category: "Security",
    },
  ]

  const categories = ["Essential", "Security", "Profile", "Additional", "Support", "Special"]

  return (
    <div>
      <PageHeader
        title="Aadhaar Services"
        description="Comprehensive suite of Aadhaar-related services for residents"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Aadhaar Services" }]}
      />

      <div className="container mx-auto px-4 py-12">
        {categories.map((category) => {
          const categoryServices = services.filter((service) => service.category === category)
          if (categoryServices.length === 0) return null

          return (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">{category} Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryServices.map((service) => {
                  const IconComponent = service.icon
                  return (
                    <Card key={service.title} className="hover:shadow-lg transition-shadow group cursor-pointer">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                          <CardTitle className="text-lg">{service.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="mb-4">{service.description}</CardDescription>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={service.href}>Access Service</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          )
        })}

        {/* Help Section */}
        <div className="mt-16 bg-muted rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Need Help?</h3>
            <p className="text-muted-foreground mb-6">
              If you're unable to find the service you're looking for or need assistance, our support team is here to
              help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/contact-us">Contact Support</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/locate-center">Find Center</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
