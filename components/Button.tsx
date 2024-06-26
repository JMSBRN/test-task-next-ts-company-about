import { TranslationKey } from "@/types/translationTypes";
import { useTranslation } from "next-i18next";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";

function Button({ path, text }: { path: Url; text: TranslationKey }) {
  const { t } = useTranslation();
  return (
    <Link className="button" href={path}>
      {t(text)}
    </Link>
  );
}

export default Button;
