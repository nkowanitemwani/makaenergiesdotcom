import { Inter_Tight } from "next/font/google";
import "./globals.css";


const inter = Inter_Tight({
  subsets: ["latin"]
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
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
