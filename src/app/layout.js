import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata = {
  title: "FamilyFriends",
  description: "Adopt and care for your new best friend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gray-400">
      <body
        className={`${manrope.className} font-manrope mx-auto mt-10 flex min-h-screen max-w-(--mobile) flex-col items-center rounded-3xl px-5 shadow-2xl`}
      >
        <Header />
        {children}
        <NavBar />
      </body>
    </html>
  );
}
