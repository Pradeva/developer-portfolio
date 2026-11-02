import { GoogleTagManager } from "@next/third-parties/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
import { Providers } from "./providers";

// Catatan: font tidak lagi diambil dari Google Fonts (next/font/google) karena
// lingkungan dev memblokir fonts.googleapis.com. Font memakai system font stack
// yang didefinisikan di globals.scss, jadi tidak butuh koneksi internet.

export const metadata = {
  title: "Portfolio of Pradeva Fairuz Zabbar",
  description:
    "This is the portfolio of Pradeva Fairuz Zabbar. I am a full stack developer, Computer Vision Engineer, and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body>
        <Providers>
          <ToastContainer theme="dark" />
          <Navbar />
          <main className="relative min-h-screen text-content">
            {children}
            <ScrollToTop />
          </main>
          <Footer />
        </Providers>
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
