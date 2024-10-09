import localFont from "next/font/local";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { Providers } from "@/context/ThemeProvider";
import ThemeSwitch from "@/components/ThemeSwitch";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Chat AI",
  description: "Chat with your files with superpower of AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <AuthProvider>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            suppressHydrationWarning
            class="bg-secondary-50/10 dark:bg-secondary-900"
          >
            <ThemeSwitch />
            {children}
          </body>
        </AuthProvider>
      </Providers>
    </html>
  );
}
