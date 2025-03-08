import type { Metadata } from "next";
import "./globals.css";
// import CustomCursor from "@/components/CustomCursor";
import P5Background from "@/components/P5Background";
import P5StarsBackground from "@/components/P5StarsBackground";
import ClientLoader from "@/components/ClientLoader";
import localFont from 'next/font/local'
import CustomCursorAnshul from "@/components/CustomCursorAnshul";
import ParticlesBackground from "@/components/ParticlesBackground";
// import { ClerkProvider } from "@clerk/nextjs";


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
             {/* <P5Background /> */}
             {/* <P5StarsBackground /> */}
        <ClientLoader>
          <div   className={myNewFont.className}>
            {/* <CustomCursor /> */}
            <CustomCursorAnshul />
            <ParticlesBackground />
            {children}
          </div>
        </ClientLoader>
      </body>
    </html>
    // </ClerkProvider>
  );
}
