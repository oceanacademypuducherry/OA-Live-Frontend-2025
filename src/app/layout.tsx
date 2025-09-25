"use client";
import { useEffect, useState } from "react";
import "./globals.css";
import { Poppins } from "next/font/google";
import { PopUpAlert } from "@/components";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const isAlert = document.cookie.includes("isAlert=1");
    if (!isAlert) setShowAlert(true);
  }, []);

  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans">
        {showAlert && (
          <PopUpAlert
            closeAlert={() => setShowAlert(false)}
            onSubmitSuccess={() => console.log("Alert submitted")}
          />
        )}

        {children}
      </body>
    </html>
  );
}
