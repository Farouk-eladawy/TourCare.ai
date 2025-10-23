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
  return (
    // FIX: Per Next.js conventions, the RootLayout must render the <html> and <body> tags. The original code delegated this to a client component, which caused a structural issue and a misleading TypeScript error about missing children.
    <html>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
