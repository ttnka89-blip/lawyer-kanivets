import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lawyer-kanivets.vercel.app"),
  title: "Канівець Олександр Петрович | Юридичний супровід бізнесу",
  description:
    "Преміальна юридична компанія в Україні: сімейне право, господарські спори, податкове право, реєстрація бізнесу та представництво в суді.",
  keywords: [
    "юридична компанія",
    "адвокат Україна",
    "юридичний супровід бізнесу",
    "податкове право",
    "господарські спори"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Канівець Олександр Петрович | Юридичний захист бізнесу",
    description: "Професійний правовий супровід фізичних та юридичних осіб.",
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
