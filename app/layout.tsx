import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/nextjs";
import Menu from "@/components/menu";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Finans Tracker App",
  description: "App that Controls your Finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ClerkProvider>
        <body className={`${poppins.className}`}>
          <SignedOut>{children}</SignedOut>
          <SignedIn>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <div className="grid grid-cols-[250px_1fr] h-screen rounded-2xl">
                <Menu />
                {children}
              </div>
            </ThemeProvider>
          </SignedIn>
        </body>
      </ClerkProvider>
    </html>
  );
}
