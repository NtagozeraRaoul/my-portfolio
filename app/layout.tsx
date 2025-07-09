

import "./global.css";
import React from "react";

// import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import 'primeicons/primeicons.css';
import Footer from "./Component/Footer/page";


export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <html lang="en">
          <body>{children}</body>
        </html>
        <Footer/>
      </>
      
    ) 
  }