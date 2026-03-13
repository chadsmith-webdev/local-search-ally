import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Local Search Ally",
  description: "Web development and local SEO for contractors.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
        margin: 0,
        fontFamily: "var(--font-poppins), sans-serif",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}