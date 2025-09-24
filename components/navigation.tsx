"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/aadhaar-services", label: "Aadhaar Services" },
  { href: "/download-aadhaar", label: "Download Aadhaar" },
  { href: "/update-details", label: "Update Details" },
  { href: "/locate-center", label: "Locate Center" },
  { href: "/about-uidai", label: "About UIDAI" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/register", label: "Register" },
  { href: "/login", label: "Login" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

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
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-white hover:bg-white/10 rounded-md transition-colors"
                >
                  {item.label}
                </Link>
              ))}
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
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  )
}
