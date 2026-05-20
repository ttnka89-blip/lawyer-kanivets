import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lawyer-kanivets.vercel.app"),
  title: "Канівець Олександр Петрович | Your problem is my problem",
  description:
    "Адвокат Канівець Олександр Петрович: захист у кримінальних справах, митні справи, адміністративні правопорушення, ЄСПЛ, автоправо та судове представництво.",
  keywords: [
    "адвокат Ужгород",
    "автоправо",
    "адвокат 130 КУпАП",
    "стаття 130",
    "кримінальний адвокат",
    "митне право",
    "адміністративні правопорушення",
    "ЄСПЛ",
    "адвокат Канівець"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Канівець Олександр Петрович | Your problem is my problem",
    description: "Кримінальні, митні, адміністративні справи, ЄСПЛ, автоправо та представництво в суді.",
    url: "/",
    siteName: "Канівець Олександр Петрович",
    type: "website",
    locale: "uk_UA"
  }
};

export const viewport: Viewport = {
  themeColor: "#07111f",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
