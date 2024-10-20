import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Head from "next/head";

export const metadata = {
  title: "SKM GRAM VIKAS",
  description: "Generated by Mahesh Tamatta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
