import Link from "next/link";
import { useTranslation } from "next-i18next";
import React from "react";
import NavLinks from "@/components/NavLinks";

function Footer() {
  const { t } = useTranslation("common");
  return (
    <footer>
      <div className="container">
        <div className="logo">Logo</div>
        <div className="footer-content">
          <NavLinks />
          <div className="social-media">
            <Link href="#">Facebook</Link>
            <Link href="#">Twitter</Link>
            <Link href="#">LinkedIn</Link>
          </div>
          <div className="footer-privacy-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
        <p>&copy; 2024 Design Studio. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
