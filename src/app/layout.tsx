import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fit Bit Zone Gym Jabalpur | Strength Training & Fitness in Shakti Nagar",
  description:
    "Fit Bit Zone Gym in Shakti Nagar, Jabalpur offers strength training, bodybuilding, weight loss support, online fitness guidance, and a focused gym environment for fitness transformation.",
  keywords:
    "Fit Bit Zone Gym, Gym in Jabalpur, Gym in Shakti Nagar, Fitness Jabalpur, Bodybuilding Jabalpur, Strength Training Jabalpur",
  authors: [{ name: "Fit Bit Zone Gym" }],
  openGraph: {
    title: "Fit Bit Zone Gym Jabalpur | Strength & Fitness in Shakti Nagar",
    description:
      "Train at Jabalpur's hardcore fitness destination. Strength training, bodybuilding, weight loss, and personal training at Fit Bit Zone Gym, Shakti Nagar.",
    type: "website",
    locale: "en_IN",
    siteName: "Fit Bit Zone Gym",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fit Bit Zone Gym Jabalpur | Strength & Fitness",
    description:
      "Jabalpur's hardcore fitness destination. Strength training, bodybuilding & transformation at Shakti Nagar.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="theme-color" content="#0A0A0A" />
        <meta name="geo.region" content="IN-MP" />
        <meta name="geo.placename" content="Jabalpur, Madhya Pradesh" />
      </head>
      <body className="bg-[#0A0A0A] text-white antialiased">{children}</body>
    </html>
  );
}
