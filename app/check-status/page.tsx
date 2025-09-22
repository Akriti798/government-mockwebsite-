import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertCircle, Search, FileText } from "lucide-react"

export default function CheckStatusPage() {
  return (
    <div>
      <PageHeader
        title="Check Aadhaar Status"
        description="Check the status of your Aadhaar enrollment or update request"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Aadhaar Services", href: "/aadhaar-services" },
          { label: "Check Status" },
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <Alert className="mb-8">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>Demo Notice:</strong> This is a demonstration form. Status checks will show sample data only.
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Check Your Status</CardTitle>
              <CardDescription>Enter your details to check the current status of your request</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="enrollment" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="enrollment">Enrollment Status</TabsTrigger>
                  <TabsTrigger value="update">Update Status</TabsTrigger>
                </TabsList>

                <TabsContent value="enrollment" className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="enrollment-id">Enrollment ID (EID)</Label>
                      <Input
                        id="enrollment-id"
                        placeholder="Enter your 14-digit enrollment ID"
                        maxLength={14}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="enrollment-date">Date of Enrollment</Label>
                      <Input id="enrollment-date" type="date" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="enrollment-time">Time of Enrollment</Label>
                      <Input id="enrollment-time" type="time" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="captcha-enrollment">Security Code</Label>
                      <div className="flex space-x-2 mt-1">
                        <div className="bg-muted p-3 rounded border text-center font-mono text-lg">STATUS123</div>
                        <Input id="captcha-enrollment" placeholder="Enter security code" className="flex-1" />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="update" className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="urn">Update Request Number (URN)</Label>
                      <Input id="urn" placeholder="Enter your 14-digit URN" maxLength={14} className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="aadhaar-update">Aadhaar Number</Label>
                      <Input
                        id="aadhaar-update"
                        placeholder="Enter your 12-digit Aadhaar number"
                        maxLength={12}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="captcha-update">Security Code</Label>
                      <div className="flex space-x-2 mt-1">
                        <div className="bg-muted p-3 rounded border text-center font-mono text-lg">UPDATE456</div>
                        <Input id="captcha-update" placeholder="Enter security code" className="flex-1" />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-8">
                <Button className="w-full" size="lg">
                  Check Status
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Sample Status Result */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5" />
                <span>Status Result (Demo)</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <div>
                      <p className="font-semibold text-green-800">Aadhaar Generated</p>
                      <p className="text-sm text-green-600">Your Aadhaar has been successfully generated</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Completed</Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-muted-foreground">Enrollment ID:</span>
                    <p className="font-mono">1234567890123456</p>
                  </div>
                  <div>
                    <span className="font-medium text-muted-foreground">Enrollment Date:</span>
                    <p>15 Dec 2024</p>
                  </div>
                  <div>
                    <span className="font-medium text-muted-foreground">Status:</span>
                    <p className="text-green-600 font-medium">Generated</p>
                  </div>
                  <div>
                    <span className="font-medium text-muted-foreground">Generated On:</span>
                    <p>20 Dec 2024</p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground mb-3">
                    Your Aadhaar is ready! You can now download your Aadhaar card.
                  </p>
                  <Button variant="outline" size="sm">
                    Download Aadhaar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Status Guide */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Status Guide</CardTitle>
              <CardDescription>Understanding different status messages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div>
                    <span className="font-medium text-sm">Registered</span>
                    <p className="text-xs text-muted-foreground">Your enrollment has been registered</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div>
                    <span className="font-medium text-sm">Processing</span>
                    <p className="text-xs text-muted-foreground">Your application is being processed</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div>
                    <span className="font-medium text-sm">Generated</span>
                    <p className="text-xs text-muted-foreground">Your Aadhaar has been generated successfully</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div>
                    <span className="font-medium text-sm">Rejected</span>
                    <p className="text-xs text-muted-foreground">Application rejected due to quality issues</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
