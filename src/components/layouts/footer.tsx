import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary mt-auto">
      <div className="container pt-10 pb-3">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div className="flex-1">
            <h3 className="mb-4 text-lg font-medium">About FloristAU</h3>
            <p className="text-secondary-foreground mb-4 text-sm">
              Your trusted Australian florist delivering fresh flowers and
              beautiful arrangements nationwide.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-secondary-foreground hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-secondary-foreground hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-secondary-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="mb-4 text-lg font-medium">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/about"
                  className="text-secondary-foreground hover:text-primary text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/delivery"
                  className="text-secondary-foreground hover:text-primary text-sm"
                >
                  Delivery Information
                </Link>
              </li>
              <li>
                <Link
                  href="/care-guide"
                  className="text-secondary-foreground hover:text-primary text-sm"
                >
                  Flower Care Guide
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex-1">
            <h3 className="mb-4 text-lg font-medium">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-secondary-foreground flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>1300 FLOWERS</span>
              </li>
              <li className="text-secondary-foreground flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>hello@floristau.com.au</span>
              </li>
              <li className="text-secondary-foreground flex items-start gap-2 text-sm">
                <MapPin className="mt-0.5 h-4 w-4" />
                <span>Sydney, Canberra</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-3 text-center">
          <p className="text-secondary-foreground text-sm">
            © 2025 FloristAU. All rights reserved. |
            <Link href="/privacy" className="hover:text-primary ml-1">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms" className="hover:text-primary ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
