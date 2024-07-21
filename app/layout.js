import { Inter } from "next/font/google";
import "./globals.css";
/* import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer' */

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Atmosoft",
  description: "Structured by Atmosoft",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="cube.png"/>
        <title>{metadata.title}</title>
        <meta name ="description" content={metadata.description}/>
      </head>
      <body className={inter.className}>
{/*       <Navbar />
 */}        {children}
{/*         <br/><br/><br/>
        <Footer/> */}
   
      </body>
    </html>
  );
}
