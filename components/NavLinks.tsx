import { useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";

function NavLinks() {
  const { t } = useTranslation("common");
  return (
    <nav>
      <Link href="/">{t("home")}</Link>
      <Link href="/about">{t("about")}</Link>
      <Link href="/services">{t("services")}</Link>
      <Link href="/contact">{t("contact")}</Link>
      <Link href="/team">{t("team")}</Link>
    </nav>
  );
}

export default NavLinks;
