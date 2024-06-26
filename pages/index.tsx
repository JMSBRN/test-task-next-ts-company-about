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
        <title>ARMA: Pioneering Sustainable Living Spaces for the Future</title>
        <meta
          name="description"
          content="ARMA is a trailblazer in the realm of sustainable construction, dedicated to creating innovative living buildings and houses. Our projects are more than just structures; they are eco-friendly habitats that promote sustainable living. With a keen focus on environmental consciousness, we incorporate green technologies and energy-efficient designs, ensuring our buildings not only look good but also contribute positively to the environment. Join us in our journey towards a greener, more sustainable future."
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
