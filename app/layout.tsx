import type { Metadata } from "next";

import ReactQueryProviders from "@/components/ReactQueryProviders";
import { AlertProvider } from "@/components/alert/alertProvider";
import { TranslationProviders } from "@/components/TranslationProvider";
import Sidebar from "@/components/Sidebar";

// import { ModuleRegistry, ClientSideRowModelModule, CsvExportModule, AllCommunityModule } from 'ag-grid-community';
// ModuleRegistry.registerModules([ClientSideRowModelModule, CsvExportModule, AllCommunityModule]);

import "./globals.css";
// import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
// import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS


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
                <div className="flex">
                  <Sidebar />
                  <div className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
                    {children}
                  </div>
                </div>
              </AlertProvider>
            </ReactQueryProviders>
          </div>
        </body>
      </html>
    </TranslationProviders>
  );
}
