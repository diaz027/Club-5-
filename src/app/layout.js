import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "@/componentes/NavbarPc/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "5 Estrellas",
  description: "Club 5 Estrellas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
