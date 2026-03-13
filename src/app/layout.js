import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Local Search Ally",
  description: "Web development and local SEO for contractors in NorthWest Arkansas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "var(--bg)", color: "var(--text)", margin: 0, fontFamily: "sans-serif", display: "flex", flexDirection: "column", minHeight: "100vh", }} >
        <Navbar />
        <main style={{ flex: 1 }}></main>
        {children}
        <Footer />
      </body>
    </html>
  );
}