import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";

const Header: React.FC = () => {
  const [storageValue, setStorageValue] = useState("en");

  useEffect(() => {
    const currentLanguage = JSON.parse(
      window.localStorage.getItem("lang") || '"en"'
    );
    setStorageValue(currentLanguage);
  }, []);

  const { t, i18n } = useTranslation("common");

  const handleChangeLang = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    setStorageValue(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
    window.localStorage.setItem("lang", JSON.stringify(selectedLanguage));
  };

  return (
    <header>
      <div className="logo">
        <Image
          loading="lazy"
          src="/favicon.ico"
          alt="Logo"
          width={30}
          height={30}
        />
        <div className="select-lang-wrapper">
          <select
            name="lang"
            value={storageValue}
            onChange={(e) => handleChangeLang(e)}
          >
            <option value={"en"}>EN</option>
            <option value={"ru"}>RU</option>
          </select>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">{t("header.home")}</Link>
          </li>
          <li>
            <Link href="/about">{t("header.about")}</Link>
          </li>
          <li>
            <Link href="/services">{t("header.services")}</Link>
          </li>
          <li>
            <Link href="/contact">{t("header.contact")}</Link>
          </li>
          <li>
            <Link href="/team">{t("header.team")}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
