import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const urbanist = Urbanist({ subsets: ["latin"], weight:["100", "300", "400","500" ,"600", "700"], variable:'--font-urbanist' });

export const metadata = {
  title: "instagram clone",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
