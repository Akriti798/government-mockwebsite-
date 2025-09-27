"use client"

import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebaseConfig"
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
import { getDisplayName } from "next/dist/shared/lib/utils"

export default function HomePage() {
  const [userName, setUserName] = useState<string | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const name = user.displayName || user.email?.split("@")[0]
        setUserName(name)
      } else {
        setUserName(null)
      }
    })
    return () => unsubscribe()
  }, [])

  return (
    <div className="min-h-screen">
      {/* Greeting Section */}
      <div className="text-center py-6">
        {userName ? (
          <h1 className="text-3xl font-bold text-blue-700">
            👋 Hello, {userName}! Welcome back.
          </h1>
        ) : (
          <h1 className="text-2xl font-bold text-gray-700">
            Welcome to the UIDAI Mock Website
          </h1>
        )}
      </div>

      {/* Hero Section */}
      <section className="hero-section py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Digital Identity Platform
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
              Securely manage and update your Aadhaar information, download e-Aadhaar, and access
              government services online.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/register">
                <Button size="lg">Get Started</Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 mb-2 text-blue-600" />
                <CardTitle>Secure Identity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Robust authentication and verification of identity across India.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Download className="h-8 w-8 mb-2 text-green-600" />
                <CardTitle>Download Aadhaar</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Access your e-Aadhaar anytime, anywhere in a secure digital format.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Edit className="h-8 w-8 mb-2 text-purple-600" />
                <CardTitle>Update Information</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Easily update address, phone number, and other demographic details.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className="h-8 w-8 mb-2 text-red-600" />
                <CardTitle>Locate Centers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Find the nearest Aadhaar enrollment and update centers instantly.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 mb-2 text-indigo-600" />
                <CardTitle>Family Services</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Manage Aadhaar for your family members under one account.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Lock className="h-8 w-8 mb-2 text-orange-600" />
                <CardTitle>Biometric Lock</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Lock/unlock your biometric data for enhanced security.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-16">
        <div className="container mx-auto px-4">
          <div className="bg-blue-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Get Your Aadhaar Today</h2>
            <p className="mb-6">
              Join over 1.3 billion Indians who have secured their digital identity.
            </p>
            <Link href="/register">
              <Button size="lg" variant="secondary">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
