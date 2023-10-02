"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "./Components/Nav";
import { useState, createContext } from "react";

const inter = Inter({ subsets: ["latin"] });

export const AppContext = createContext({});

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [englishVersion, setEnglishVersion] = useState(false);

  return (
    <html lang="en" className="box-border overflow-x-hidden">
      <body className={inter.className}>
        <AppContext.Provider value={{ englishVersion, setEnglishVersion }}>
          <Nav />
          {children}
        </AppContext.Provider>
      </body>
    </html>
  );
}
