import { Geist, Geist_Mono,Inter,Roboto } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata = {
  title: "Maka Energies Limited",
  description: "Corporate Website For Maka Energies Limited",
  icons:{
    icon:"/images/makafav.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable}}`}>
        {children}
      </body>
    </html>
  );
}
