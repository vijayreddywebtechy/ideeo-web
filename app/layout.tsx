import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IdeeoTech Solutions | Intelligent Solutions. Infinite Possibilities.",
  description:
    "IdeeoTech Solutions is a premium IT software company specializing in AI/ML, Salesforce Development, Web & Mobile Apps, and Enterprise IT Services. Transform your business with intelligent software that scales.",
  keywords:
    "AI, Machine Learning, Salesforce, Web Development, Mobile Development, Enterprise IT, Software Company, Digital Transformation, Cloud, DevOps",
  openGraph: {
    title: "IdeeoTech Solutions | Intelligent Solutions. Infinite Possibilities.",
    description:
      "Premium IT software company specializing in AI/ML, Salesforce, Web & Mobile Development, and Enterprise IT Services.",
    type: "website",
    locale: "en_US",
    siteName: "IdeeoTech Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "IdeeoTech Solutions | Intelligent Solutions. Infinite Possibilities.",
    description:
      "Premium IT software company specializing in AI/ML, Salesforce, Web & Mobile Development, and Enterprise IT Services.",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>&#x25C6;</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-outfit antialiased`}>
        {children}
      </body>
    </html>
  );
}
