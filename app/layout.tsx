import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://TU-PROYECTO.vercel.app"),

  title: {
    default: "IntegralMec | Mantención y Reparación Automotriz",
    template: "%s | IntegralMec",
  },

  description:
    "IntegralMec es un taller mecánico especializado en mantención preventiva, reparación automotriz, diagnóstico computarizado, atención de empresas, flotas y organismos públicos en Concepción y la Región del Biobío.",

  keywords: [
    "IntegralMec",
    "Taller Mecánico",
    "Mantención Automotriz",
    "Reparación Automotriz",
    "Diagnóstico Computarizado",
    "Empresas",
    "Flotas",
    "Mercado Público",
    "Concepción",
    "Penco",
    "Biobío",
  ],

  authors: [
    {
      name: "IntegralMec",
    },
  ],

  creator: "IntegralMec",

  publisher: "IntegralMec",

  robots: {
    index: true,
    follow: true,
  },

  manifest: "/site.webmanifest",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    locale: "es_CL",

    url: "https://TU-PROYECTO.vercel.app",

    title: "IntegralMec | Mantención y Reparación Automotriz",

    description:
      "Especialistas en mantención preventiva, reparación mecánica, diagnóstico computarizado y atención de flotas.",

    siteName: "IntegralMec",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IntegralMec",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "IntegralMec",

    description:
      "Mantención y reparación automotriz profesional en Concepción.",

    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}