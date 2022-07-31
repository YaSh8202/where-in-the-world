/** @type {import('next').NextConfig} */
module.exports = {
  // reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ["upload.wikimedia.org", "flagcdn.com"],
  },
  swcMinify: false,
};
