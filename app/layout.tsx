import type { Metadata } from "next";

import ReactQueryProviders from "@/components/ReactQueryProviders";
import { AlertProvider } from "@/components/alert/alertProvider";
import { TranslationProviders } from "@/components/TranslationProvider";

import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Jinvicky's Commission",
  description: "jinvicky's commission",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <TranslationProviders>
      <html lang="en">
        <body>
          <div>
            <ReactQueryProviders>
              <AlertProvider>
                <div>
                  <Sidebar />
                  {children}
                </div>
              </AlertProvider>
            </ReactQueryProviders>
          </div>
        </body>
      </html>
    </TranslationProviders>
  );
}
