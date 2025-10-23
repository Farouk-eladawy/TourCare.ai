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
    <ClientLayout>
      {children}
    </ClientLayout>
  );
}