/** @type {import('next').NextConfig} */

const i18n = {
  defaultLocale: "en",
  locales: ["en", "ru"],
};

const nextConfig = {
  i18n,
  reactStrictMode: true,
  //   images: {
  //     domains: ["storage.googleapis.com"],
  //   },
  //   env: {},
};

export default nextConfig;
