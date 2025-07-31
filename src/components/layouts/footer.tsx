import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted mt-auto w-full">
      <div className="container py-12">
        <div className="flex flex-row justify-between gap-8">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">About FloristAU</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Your trusted Australian florist delivering fresh flowers and
              beautiful arrangements nationwide.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/delivery"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Delivery Information
                </Link>
              </li>
              <li>
                <Link
                  href="/care-guide"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Flower Care Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/corporate"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Corporate Services
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>1300 FLOWERS</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>hello@floristau.com.au</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Sydney, Canberra</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 FloristAU. All rights reserved. |
            <Link href="/privacy" className="ml-1 hover:text-primary">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms" className="ml-1 hover:text-primary">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
