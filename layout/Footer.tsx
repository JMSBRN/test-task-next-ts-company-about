import Link from "next/link";
import { useTranslation } from "next-i18next";
import React from "react";

function Footer() {
  const { t } = useTranslation("common");
  return (
    <footer>
      <div className="container">
        <div className="logo">Logo</div>
        <div className="footer-content">
          <nav className="footer__nav-links">
            <Link href="index.html#hero">Home</Link>
            <Link href="index.html#about">About</Link>
            <Link href="index.html#services">Services</Link>
            <Link href="index.html#testimonials">Testimonials</Link>
            <Link href="index.html#contact">Contact</Link>
          </nav>
          <div className="social-media">
            <Link href="index.html">Facebook</Link>
            <Link href="index.html">Twitter</Link>
            <Link href="index.html">LinkedIn</Link>
          </div>
          <div className="footer-privacy-links">
            <Link href="privacy.html">Privacy Policy</Link>
            <Link href="terms.html">Terms of Service</Link>
            <Link href="index.html">Newsletter Signup</Link>
          </div>
        </div>
        <p>&copy; 2022 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
