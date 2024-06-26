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
      <div className="container">
        <h2>Logo</h2>
        <nav className="header__nav-links">
          <Link href="index.html#hero">Home</Link>
          <Link href="index.html#about">About</Link>
          <Link href="index.html#services">Services</Link>
          <Link href="index.html#testimonials">Testimonials</Link>
          <Link href="index.html#contact">Contact</Link>
        </nav>
        <div className="burger" id="burger">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
