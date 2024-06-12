import "../globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <>
      <Head>
        <title>Uomi network</title>
        <meta
          name="description"
          content="UOMI Network - Creating unstoppable AI economic agents."
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="Uomi"/>
        <meta name="theme-color" content="#000000"/>
        <meta name="full-screen" content="yes"/>
        <meta name="browsermode" content="application"/>
        <meta name="screen-orientation" content="portrait"/>
        <meta name="mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
        <meta name="apple-mobile-web-app-title" content="Uomi"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png"/>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
        <link rel="icon" sizes="36x36" href="/android-icon-36x36.png"/>
        <link rel="icon" sizes="48x48" href="/android-icon-48x48.png"/>
        <link rel="icon" sizes="72x72" href="/android-icon-72x72.png"/>
        <link rel="icon" sizes="96x96" href="/android-icon-96x96.png"/>
        <link rel="icon" sizes="144x144" href="/android-icon-144x144.png"/>
        <link rel="icon" sizes="192x192" href="/android-icon-192x192.png"/>
        <link rel="icon" sizes="512x512" href="/android-icon-512x512.png"/>
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
      >
        <Navbar />

        <div className="flex-1 w-full h-full mt-20 md:mt-28 flex flex-col">
          <Component {...pageProps} />
        </div>
        

        <Footer />
      </main>
    </>
  );
};

export default App;
