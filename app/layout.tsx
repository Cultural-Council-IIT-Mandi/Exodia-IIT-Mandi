import type { Metadata } from "next";
import localFont from 'next/font/local'

import "./globals.css";

import ClientLoader from "@/components/ClientLoader";
import BackgroundBlobs from "@/components/BackgroundBlobs";

import { ToasterProvider } from "@/providers/toast-provider";
import FloatingBall from "@/components/Anouncement_ball";

export const metadata: Metadata = {
  title: "Exodia '25 || IIT Mandi",
  description: "Exodia '25, the annual cultural fest of IIT Mandi",
  // icons: [{ rel: "icon", url: "/assets/favicon.ico" }],
};

const myFont = localFont({ // DEPLOYMENT FIX
  src: '../public/fonts/HarryP.woff2',
  display: 'swap',
})

const myNewFont = localFont({ // DEPLOYMENT FIX
  src: '../public/fonts/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ClerkProvider>
    <html lang="en">
      <body className="dark">
        <ClientLoader>
          <div   className={myNewFont.className}>
            {/* <CustomCursorAnshul /> */}
            {/* <ParticlesBackground /> */}
            {/* // deploy check  */}
            <BackgroundBlobs />
            <ToasterProvider />
            {children}
            <FloatingBall /> 
          </div>
        </ClientLoader>
      </body>
    </html>
    // </ClerkProvider>
  );
}
