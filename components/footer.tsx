import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">UI</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">UIDAI</h3>
                <p className="text-sm opacity-90">Unique Identification Authority of India</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Empowering residents with a unique digital identity that enables access to various services and benefits.
            </p>
            <div className="text-xs opacity-75">
              <p className="mb-2">
                <strong>Disclaimer:</strong> This is a demonstration website created for educational purposes only. It
                is not affiliated with the actual UIDAI or Government of India.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/aadhaar-services" className="hover:underline opacity-90">
                  Aadhaar Services
                </Link>
              </li>
              <li>
                <Link href="/download-aadhaar" className="hover:underline opacity-90">
                  Download Aadhaar
                </Link>
              </li>
              <li>
                <Link href="/update-details" className="hover:underline opacity-90">
                  Update Details
                </Link>
              </li>
              <li>
                <Link href="/locate-center" className="hover:underline opacity-90">
                  Locate Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="hover:underline opacity-90">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline opacity-90">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="hover:underline opacity-90">
                  Accessibility
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:underline opacity-90">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-75">
            © 2024 Mock UIDAI Website. This is a demonstration site for educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  )
}
