import HomePage from "@/components/HomePage";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next/types";
import { NextRouter, useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const toggleServerSideLanguage = (router: NextRouter, newLocale: string) => {
    const { pathname, asPath, query } = router;

    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  useEffect(() => {
    const currentLanguage = JSON.parse(
      window.localStorage.getItem("lang") || '"en"'
    );

    return toggleServerSideLanguage(router, currentLanguage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Design Studio - Innovative and Artistic Design Solutions</title>
        <meta
          name="description"
          content="Discover the creative brilliance of our design studio, where innovation meets artistry. Our team of expert designers transforms ideas into visually stunning."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomePage />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || "en", ["common"])),
  },
});
