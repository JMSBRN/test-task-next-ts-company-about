import NavLinks from "@/components/NavLinks";
import SelectLanguages from "@/components/SelectLanguages";
import { useTranslation } from "next-i18next";
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

  const { i18n } = useTranslation("common");

  const handleChangeLang = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    setStorageValue(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
    window.localStorage.setItem("lang", JSON.stringify(selectedLanguage));
  };

  return (
    <header>
      <div className="container">
        <div className="logo-and-lang">
          <Link href={"/"}>
            <h2>Logo</h2>
          </Link>
          <SelectLanguages value={storageValue} onChange={handleChangeLang} />
        </div>
        <NavLinks />
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
