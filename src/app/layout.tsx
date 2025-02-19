import type { Metadata } from "next";
import "./globals.css"; // Import your global CSS styles
import Header from "./_layout/Header";
import Footer from "./_layout/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Emirates Opticals",
  description: "BEST OPTICALS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased   ">
        <Header />

        {children}
        <Toaster position="top-right" containerClassName="mt-4" />

        <Footer />
      </body>
    </html>
  );
}
