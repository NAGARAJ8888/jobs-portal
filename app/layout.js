
import { Figtree } from 'next/font/google';
import "./globals.css";
import { Navbar } from "@/_components/Navbar";
import { Footer } from '@/_components/Footer';
import { UserProvider } from "./context/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const figtree = Figtree({ subsets: ['latin'] });

export const metadata = {
  title: "Find Your Job",
  description: "Job Portal to Search and Find Jobs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
         className={figtree.className}
      >
       <UserProvider>
        <ToastContainer position="top-right" autoClose={3000} />
          <Navbar />
          {children}
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
