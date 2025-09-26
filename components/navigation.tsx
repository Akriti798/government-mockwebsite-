"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../firebaseConfig"   // 👈 path adjust karo agar alag hai

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => unsubscribe()
  }, [])

  const handleLogout = async () => {
    await signOut(auth)
  }

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/aadhaar-services", label: "Aadhaar Services" },
    { href: "/download-aadhaar", label: "Download Aadhaar" },
    { href: "/update-details", label: "Update Details" },
    { href: "/locate-center", label: "Locate Center" },
    { href: "/about-uidai", label: "About UIDAI" },
    { href: "/contact-us", label: "Contact Us" },
  ]

  return (
    <>
      {/* Warning Header */}
      <div className="warning-header">
        <p className="text-sm font-bold">Mock Website - For Demonstration Only</p>
      </div>

      {/* Main Navigation */}
      <header className="government-header sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-lg">UI</span>
              </div>
              <div className="text-white">
                <h1 className="font-bold text-lg">UIDAI</h1>
                <p className="text-xs opacity-90">Unique Identification Authority of India</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-white hover:bg-white/10 rounded-md transition-colors"
                >
                  {item.label}
                </Link>
              ))}

              {/* 👇 User Login/Logout UI */}
              {user ? (
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-white text-primary font-bold flex items-center justify-center">
                    {user.email?.[0].toUpperCase()}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/10"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <>
                  <Link
                    href="/register"
                    className="px-3 py-2 text-sm font-medium text-white hover:bg-white/10 rounded-md transition-colors"
                  >
                    Register
                  </Link>
                  <Link
                    href="/login"
                    className="px-3 py-2 text-sm font-medium text-white hover:bg-white/10 rounded-md transition-colors"
                  >
                    Login
                  </Link>
                </>
              )}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-white hover:bg-white/10"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <nav className="lg:hidden py-4 border-t border-white/20">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-white hover:bg-white/10 rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                {/* 👇 User Login/Logout for mobile */}
                {user ? (
                  <div className="flex items-center space-x-3 px-3 py-2">
                    <div className="w-8 h-8 rounded-full bg-white text-primary font-bold flex items-center justify-center">
                      {user.email?.[0].toUpperCase()}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-white/10"
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </div>
                ) : (
                  <>
                    <Link
                      href="/register"
                      className="px-3 py-2 text-sm font-medium text-white hover:bg-white/10 rounded-md transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Register
                    </Link>
                    <Link
                      href="/login"
                      className="px-3 py-2 text-sm font-medium text-white hover:bg-white/10 rounded-md transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Login
                    </Link>
                  </>
                )}
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  )
}
