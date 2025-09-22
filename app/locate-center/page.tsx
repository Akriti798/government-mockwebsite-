import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Phone, Navigation, Search } from "lucide-react"

export default function LocateCenterPage() {
  const sampleCenters = [
    {
      name: "ABC Enrollment Center",
      address: "123 Main Street, Central Market, New Delhi - 110001",
      distance: "2.3 km",
      timing: "9:00 AM - 5:00 PM",
      phone: "+91-11-12345678",
      services: ["Enrollment", "Update", "PVC Card"],
      status: "Open",
    },
    {
      name: "XYZ Digital Services",
      address: "456 Park Avenue, Sector 15, New Delhi - 110002",
      distance: "3.7 km",
      timing: "10:00 AM - 6:00 PM",
      phone: "+91-11-87654321",
      services: ["Enrollment", "Update"],
      status: "Open",
    },
    {
      name: "Government Service Center",
      address: "789 Government Complex, Block A, New Delhi - 110003",
      distance: "5.1 km",
      timing: "9:30 AM - 4:30 PM",
      phone: "+91-11-11223344",
      services: ["Enrollment", "Update", "PVC Card", "Complaints"],
      status: "Closed",
    },
  ]

  return (
    <div>
      <PageHeader
        title="Locate Enrollment Center"
        description="Find the nearest Aadhaar enrollment and update center in your area"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Aadhaar Services", href: "/aadhaar-services" },
          { label: "Locate Center" },
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Search Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Search className="h-5 w-5" />
                <span>Search for Centers</span>
              </CardTitle>
              <CardDescription>Enter your location details to find nearby Aadhaar centers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <Label htmlFor="state">State</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select State" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="mumbai">Maharashtra</SelectItem>
                      <SelectItem value="bangalore">Karnataka</SelectItem>
                      <SelectItem value="chennai">Tamil Nadu</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="district">District</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select District" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="central-delhi">Central Delhi</SelectItem>
                      <SelectItem value="south-delhi">South Delhi</SelectItem>
                      <SelectItem value="north-delhi">North Delhi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="pincode">Pin Code</Label>
                  <Input id="pincode" placeholder="Enter pin code" className="mt-1" />
                </div>
              </div>
              <Button className="w-full md:w-auto">
                <MapPin className="h-4 w-4 mr-2" />
                Search Centers
              </Button>
            </CardContent>
          </Card>

          {/* Map Placeholder */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Center Locations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Interactive map would be displayed here</p>
                  <p className="text-sm text-muted-foreground">Showing enrollment centers in your area</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Centers List */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Nearby Centers</h2>
            <div className="space-y-6">
              {sampleCenters.map((center, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{center.name}</CardTitle>
                        <CardDescription className="flex items-center space-x-1 mt-1">
                          <MapPin className="h-4 w-4" />
                          <span>{center.address}</span>
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <Badge variant={center.status === "Open" ? "default" : "secondary"}>{center.status}</Badge>
                        <p className="text-sm text-muted-foreground mt-1">{center.distance} away</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{center.timing}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{center.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Navigation className="h-4 w-4 text-muted-foreground" />
                        <Button variant="outline" size="sm">
                          Get Directions
                        </Button>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm font-medium text-muted-foreground mb-2">Available Services:</p>
                      <div className="flex flex-wrap gap-2">
                        {center.services.map((service) => (
                          <Badge key={service} variant="outline" size="sm">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Need Help Finding a Center?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Contact Support</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Call our helpline for assistance in locating centers
                  </p>
                  <p className="font-mono text-sm">1947 (Toll Free)</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Online Chat</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Chat with our support team for real-time assistance
                  </p>
                  <Button variant="outline" size="sm">
                    Start Chat
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
