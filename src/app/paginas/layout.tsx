import "app/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "app/trpc/react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Navbar from "../_components/Navbar";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Señores del fútbol",
  description: "Alquila tu cancha de cualquier deporte",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={`font-sans ${inter.variable}`}>
          <div className="sticky top-0 z-10">
          <Navbar/>
          </div>
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </body>
      </UserProvider>
    </html>
  );
}
