import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import React from "react";

function Footer() {
  const { t } = useTranslation("common");
  return (
    <footer>
      <div className="container">
        <div className="logo">
          <div>Arma</div>
          <Image
            loading="lazy"
            src="/favicon.ico"
            alt="Logo"
            width={30}
            height={30}
          />
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/">{t("navlink.home")}</Link>
            </li>
            <li>
              <Link href="/about">{t("navlink.about")}</Link>
            </li>
            <li>
              <Link href="/services">{t("navlink.services")}</Link>
            </li>
            <li>
              <Link href="/contact">{t("navlink.contact")}</Link>
            </li>
            <li>
              <Link href="/team">{t("navlink.team")}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
