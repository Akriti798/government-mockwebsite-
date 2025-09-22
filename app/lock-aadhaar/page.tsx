import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Lock, Shield, AlertTriangle, CheckCircle, Info } from "lucide-react"

export default function LockAadhaarPage() {
  return (
    <div>
      <PageHeader
        title="Lock Aadhaar"
        description="Temporarily lock your Aadhaar to prevent unauthorized usage"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Aadhaar Services", href: "/aadhaar-services" },
          { label: "Lock Aadhaar" },
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Alert className="mb-8">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Demo Notice:</strong> This is a demonstration service. No actual Aadhaar will be locked.
            </AlertDescription>
          </Alert>

          {/* What is Aadhaar Lock */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-primary" />
                <span>What is Aadhaar Lock?</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Aadhaar Lock is a security feature that allows you to lock your biometrics. When locked, your Aadhaar
                authentication will fail, preventing unauthorized usage.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">✓ When Locked</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Biometric authentication fails</li>
                    <li>• Prevents unauthorized access</li>
                    <li>• OTP-based services still work</li>
                    <li>• Can be unlocked anytime</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">✗ When Unlocked</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Biometric authentication works</li>
                    <li>• Vulnerable to misuse</li>
                    <li>• All services accessible</li>
                    <li>• Requires manual locking</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Lock Aadhaar Form */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Lock className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <CardTitle className="text-red-700">Lock Your Aadhaar</CardTitle>
                    <CardDescription>Secure your biometrics from unauthorized usage</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="aadhaar-lock">Aadhaar Number or VID</Label>
                    <Input id="aadhaar-lock" placeholder="Enter 12-digit Aadhaar or 16-digit VID" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="captcha-lock">Security Code</Label>
                    <div className="flex space-x-2 mt-1">
                      <div className="bg-muted p-3 rounded border text-center font-mono text-lg">LOCK789</div>
                      <Input id="captcha-lock" placeholder="Enter security code" className="flex-1" />
                    </div>
                  </div>

                  <Alert className="border-amber-200 bg-amber-50">
                    <Info className="h-4 w-4" />
                    <AlertDescription className="text-amber-700">
                      <strong>Important:</strong> After locking, you'll need to unlock your Aadhaar to use biometric
                      services.
                    </AlertDescription>
                  </Alert>

                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    <Lock className="h-4 w-4 mr-2" />
                    Lock Aadhaar
                  </Button>
                </div>

                {/* Lock Status */}
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-red-800">Current Status</span>
                    <Badge className="bg-red-100 text-red-800">Locked</Badge>
                  </div>
                  <div className="text-sm text-red-700">
                    <p className="mb-1">🔒 Biometrics: Locked</p>
                    <p className="mb-1">📱 OTP Services: Available</p>
                    <p className="text-xs text-red-600">Locked on: 20 Dec 2024, 10:30 AM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Check Lock Status */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-blue-700">Check Lock Status</CardTitle>
                    <CardDescription>Verify current lock status of your Aadhaar</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="aadhaar-status">Aadhaar Number or VID</Label>
                    <Input id="aadhaar-status" placeholder="Enter 12-digit Aadhaar or 16-digit VID" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="captcha-status">Security Code</Label>
                    <div className="flex space-x-2 mt-1">
                      <div className="bg-muted p-3 rounded border text-center font-mono text-lg">CHK456</div>
                      <Input id="captcha-status" placeholder="Enter security code" className="flex-1" />
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Check Status
                  </Button>
                </div>

                {/* Status Result */}
                <div className="mt-6 space-y-3">
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-green-800">Biometric Lock: Active</span>
                    </div>
                  </div>
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium text-blue-800">OTP Services: Available</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <Button variant="link" className="text-primary">
                    Need to unlock? Click here
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* How it Works */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>How Aadhaar Lock Works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    1
                  </div>
                  <h4 className="font-semibold mb-2">Lock Biometrics</h4>
                  <p className="text-sm text-muted-foreground">
                    Enter your Aadhaar details and lock your biometric authentication
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    2
                  </div>
                  <h4 className="font-semibold mb-2">Secure Protection</h4>
                  <p className="text-sm text-muted-foreground">
                    Your biometrics are locked and cannot be used for authentication
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    3
                  </div>
                  <h4 className="font-semibold mb-2">Unlock When Needed</h4>
                  <p className="text-sm text-muted-foreground">Unlock anytime you need to use biometric services</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Information */}
          <Card className="mt-8 border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800">Important Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Services Affected When Locked:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Biometric authentication at banks</li>
                    <li>• Fingerprint-based PDS services</li>
                    <li>• Iris-based authentication</li>
                    <li>• Face authentication services</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Services Available When Locked:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• OTP-based authentication</li>
                    <li>• Aadhaar download services</li>
                    <li>• Virtual ID generation</li>
                    <li>• Update services (with OTP)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
