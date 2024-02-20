import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar/NavBar";
import MenuNav from "@/components/navBar/menuNav/MenuNav";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className=" dark:bg-rich-black-dark bg-['#F8F0FB']" >
      <body className={inter.className}>
        <NavBar/>
        
        {children}
       
        
        
        </body>
    </html>
  );
}
