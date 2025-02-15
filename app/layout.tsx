import type { Metadata } from "next";
import "./globals.css";
import { Montserrat as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Tishkevich Danila Porfolio",
  description: "Tishkevich Danila Porfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
        <ToastContainer
          position="bottom-right"
          autoClose={1200}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </body>
    </html>
  );
}
