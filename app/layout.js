
"use client"; // This marks the component as a Client Component

import React, { useEffect, useState } from 'react'
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Head from "next/head";
import {MyProvider} from './context/MyContext'


export default function RootLayout({ children }) {
  const [dataFromChild, setDataFromChild] = useState('');
  useEffect(() => {
    // Dynamically import Bootstrap JS (only on the client-side)
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  const handleDataFromChild = (data) => {
    setDataFromChild(data);
    console.log('dataFromChild', dataFromChild);
    
  };
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Navbar sendData={handleDataFromChild} />
        <MyProvider value={dataFromChild}>
        <main>{children}</main>
        <Footer />
        </MyProvider>
      </body>
    </html>
  );
}
