"use client"

import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Shield, AlertCircle, Eye, EyeOff, Copy, RefreshCw } from "lucide-react"
import { useState } from "react"

export default function VirtualIdPage() {
  const [showVid, setShowVid] = useState(false)
  const [generatedVid, setGeneratedVid] = useState("1234567890123456")

  return (
    <div>
      <PageHeader
        title="Virtual ID (VID)"
        description="Generate and manage your 16-digit Virtual ID for secure authentication"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Aadhaar Services", href: "/aadhaar-services" },
          { label: "Virtual ID" },
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Alert className="mb-8">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>Demo Notice:</strong> This is a demonstration service. No actual VID will be generated.
            </AlertDescription>
          </Alert>

          {/* What is VID */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-primary" />
                <span>What is Virtual ID?</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Virtual ID (VID) is a temporary, revocable 16-digit random number mapped with the Aadhaar number. It can
                be used in lieu of Aadhaar number whenever authentication or e-KYC services are performed.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Enhanced Privacy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Temporary & Revocable</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Same as Aadhaar</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Generate VID */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Generate Virtual ID</CardTitle>
                    <CardDescription>Create a new 16-digit Virtual ID</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
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
                    <Label htmlFor="captcha">Security Code</Label>
                    <div className="flex space-x-2 mt-1">
                      <div className="bg-muted p-3 rounded border text-center font-mono text-lg">VID123</div>
                      <Input id="captcha" placeholder="Enter security code" className="flex-1" />
                    </div>
                  </div>
                  <Button className="w-full">Generate VID</Button>
                </div>

                {/* Generated VID Display */}
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-green-800">Your Virtual ID</span>
                    <Badge className="bg-green-100 text-green-800">Active</Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="font-mono text-lg font-bold text-green-900">
                      {showVid ? generatedVid : "••••••••••••••••"}
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => setShowVid(!showVid)}>
                      {showVid ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-green-600 mt-2">Valid until: 31 Dec 2024 • Can be regenerated anytime</p>
                </div>
              </CardContent>
            </Card>

            {/* Retrieve VID */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <RefreshCw className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <CardTitle>Retrieve Virtual ID</CardTitle>
                    <CardDescription>Get your existing Virtual ID</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="aadhaar-retrieve">Aadhaar Number</Label>
                    <Input
                      id="aadhaar-retrieve"
                      placeholder="Enter your 12-digit Aadhaar number"
                      maxLength={12}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="captcha-retrieve">Security Code</Label>
                    <div className="flex space-x-2 mt-1">
                      <div className="bg-muted p-3 rounded border text-center font-mono text-lg">RET456</div>
                      <Input id="captcha-retrieve" placeholder="Enter security code" className="flex-1" />
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Retrieve VID
                  </Button>
                </div>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">VID will be sent to:</h4>
                  <div className="space-y-1 text-sm text-blue-700">
                    <p>📱 Registered Mobile: +91-XXXXX-XX789</p>
                    <p>📧 Registered Email: user@example.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* VID Features */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Virtual ID Features & Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Enhanced Security</h4>
                  <p className="text-sm text-muted-foreground">Protects your actual Aadhaar number from being shared</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <RefreshCw className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Revocable</h4>
                  <p className="text-sm text-muted-foreground">Can be regenerated multiple times as needed</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Same Functionality</h4>
                  <p className="text-sm text-muted-foreground">Works exactly like Aadhaar for authentication</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Notes */}
          <Card className="mt-8 border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-800">Important Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-amber-700">
                <li>• VID is valid for a limited period and needs to be regenerated periodically</li>
                <li>• Only one VID is active at a time per Aadhaar number</li>
                <li>• VID can be used for all authentication and e-KYC purposes</li>
                <li>• Keep your VID confidential and don't share it unnecessarily</li>
                <li>• VID will be sent to your registered mobile number and email</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
