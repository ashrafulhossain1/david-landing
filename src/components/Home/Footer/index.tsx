// import Logo from "@/assets/images/discoverLogo.svg?react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-accent-foreground">
      {/* Main Footer Content */}
      <div className="px-4 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row flex-wrap justify-between gap-8 md:gap-12 lg:gap-16">
            {/* Logo + Tagline */}
            <div className="flex flex-col justify-between gap-4">
              <div>
                {/* <Logo className="h-10 w-[114px]  text-primary" /> */}
                <p className="text-white text-sm md:text-base">
                  Your organic source for trends before they go mainstream.
                </p>
              </div>

              <p className="text-white text-sm">
                © 2025 CapitalNow. All rights reserved.
              </p>
            </div>

            {/* Explore Links */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-semibold text-lg">Explore</h3>
              <ul className="flex flex-col gap-3 text-slate-400 text-sm md:text-base">
                <li>
                  <Link to="/" className="hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/trending"
                    className="hover:text-primary transition-colors"
                  >
                    Trending Topics
                  </Link>
                </li>
                <li>
                  <Link
                    to="/submit"
                    className="hover:text-primary transition-colors"
                  >
                    Submit a Trend
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-semibold text-lg">Support</h3>
              <ul className="flex flex-col gap-3 text-slate-400 text-sm md:text-base">
                <li>
                  <Link
                    to="/privacy"
                    className="hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="hover:text-primary transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
