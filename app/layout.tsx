import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Exodia '25 || IIT Mandi",
  description: "Exodia '25, the annual cultural fest of IIT Mandi",
  // icons: [{ rel: "icon", url: "/assets/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark">
        <div>
        {children}
        </div>
      </body>
    </html>
  );
}
