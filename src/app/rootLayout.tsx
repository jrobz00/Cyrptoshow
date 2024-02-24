import type { Metadata } from "next";
import "./styles/globals.css";
import { Poppins } from "next/font/google";


//Set up default font
 const poppins = Poppins({ weight: "500" });

export const metadata: Metadata = {
  title: "Brandlift",
  description: "First impressions count",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
