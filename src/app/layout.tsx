import "app/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "app/trpc/react";
import AuthProviderSSR from "./_components/auth-provider/auth-provider-ssr";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Navbar from "./_components/Navbar";
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
    <html lang="en" className="h-screen w-screen">
      <UserProvider>
        <body className={`font-sans ${inter.variable}`}>
          <Navbar/>
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </body>
      </UserProvider>
    </html>
  );
}
