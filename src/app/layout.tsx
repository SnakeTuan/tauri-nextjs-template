import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/side-bar";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <main>
        <body className={inter.className}>
          <SidebarProvider>
            <AppSidebar />
            <SidebarTrigger />
            {children}
          </SidebarProvider>
        </body>
      </main>
    </html>
  );
}
