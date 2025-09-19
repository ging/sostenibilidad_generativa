"use client";

import React from "react";
import "./globals.css";
import { useState, useEffect } from "react";
import { routes } from "@/constants/routes";

// import i18n (needs to be bundled ;))
import "./i18n";

import Header from "@/components/core/Header";
import Footer from "@/components/core/Footer";

export default function RootLayout({ children }) {
  //disable SSR whole project, this will make the project to be rendered only on client side
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <html >
      <title>Sostenibilidad Generativa</title>
      <body className="bg-background">
        <Header route={"/"} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
