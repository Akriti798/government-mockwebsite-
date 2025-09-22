import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Download, Shield, AlertCircle } from "lucide-react"

export default function DownloadAadhaarPage() {
  return (
    <div>
      <PageHeader
        title="Download Aadhaar"
        description="Download your Aadhaar card instantly using your Aadhaar number or enrollment ID"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Aadhaar Services", href: "/aadhaar-services" },
          { label: "Download Aadhaar" },
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <Alert className="mb-8">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>Demo Notice:</strong> This is a demonstration form. No actual Aadhaar data will be processed.
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Download className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Download Your Aadhaar</CardTitle>
              <CardDescription>Choose your preferred method to download your Aadhaar card</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="aadhaar" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="aadhaar">Using Aadhaar Number</TabsTrigger>
                  <TabsTrigger value="enrollment">Using Enrollment ID</TabsTrigger>
                </TabsList>

                <TabsContent value="aadhaar" className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="aadhaar-number">Aadhaar Number</Label>
                      <Input
                        id="aadhaar-number"
                        placeholder="Enter your 12-digit Aadhaar number"
                        maxLength={12}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="full-name">Full Name (as per Aadhaar)</Label>
                      <Input id="full-name" placeholder="Enter your full name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="pin-code">Pin Code</Label>
                      <Input id="pin-code" placeholder="Enter your pin code" maxLength={6} className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="captcha">Security Code</Label>
                      <div className="flex space-x-2 mt-1">
                        <div className="bg-muted p-3 rounded border text-center font-mono text-lg">DEMO123</div>
                        <Input id="captcha" placeholder="Enter security code" className="flex-1" />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="enrollment" className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="enrollment-id">Enrollment ID</Label>
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
                        <div className="bg-muted p-3 rounded border text-center font-mono text-lg">DEMO456</div>
                        <Input id="captcha-enrollment" placeholder="Enter security code" className="flex-1" />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-8 space-y-4">
                <Button className="w-full" size="lg">
                  Send OTP
                </Button>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground">An OTP will be sent to your registered mobile number</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Security Features</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Secure 128-bit SSL encryption</li>
                  <li>• OTP verification required</li>
                  <li>• Password-protected PDF</li>
                  <li>• Digital signature verification</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Important Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Downloaded Aadhaar is legally valid</li>
                  <li>• Use password: first 4 letters of name + birth year</li>
                  <li>• Keep your Aadhaar information confidential</li>
                  <li>• Report any discrepancies immediately</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
