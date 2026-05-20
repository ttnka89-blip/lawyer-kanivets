import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lawyer-kanivets.vercel.app"),
  title: "Канівець Олександр Петрович | Автоправо, кримінальне та митне право",
  description:
    "Адвокат Канівець Олександр Петрович: автоправо, захист за ст. 130 КУпАП, кримінальне право, митні справи та представництво в суді.",
  keywords: [
    "адвокат Ужгород",
    "автоправо",
    "адвокат 130 КУпАП",
    "стаття 130",
    "кримінальний адвокат",
    "митне право",
    "адвокат Канівець"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Канівець Олександр Петрович | Захист водіїв та кримінальні справи",
    description: "Автоправо, ст. 130 КУпАП, кримінальне та митне право, представництво в суді.",
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
