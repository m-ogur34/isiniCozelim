/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  // basePath satırını siliyoruz veya boş bırakıyoruz
  // basePath: "/isinicozelim",  <-- BU SATIRI SİLİN
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    // Base path artık boş olmalı çünkü ana domaindeyiz
    NEXT_PUBLIC_BASE_PATH: "",
  },
};

export default nextConfig;