
// FIX: Import React to resolve namespace errors for types like React.ReactNode.
import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "TourCare.ai - AI & Automation for Tourism",
  description: "TourCare.ai offers AI-powered automation for tourism operations and customer service, helping GetYourGuide suppliers streamline bookings, messaging, and support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // FIX: RootLayout must render <html> and <body>. ClientLayout should be a wrapper inside <body>.
  // This resolves an architectural issue with Next.js App Router where a Client Component cannot render the root layout tags, which was likely causing the original type error.
  return (
    <html lang="en" dir="ltr">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
