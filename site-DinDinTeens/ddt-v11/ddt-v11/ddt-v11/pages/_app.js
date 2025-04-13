import '../styles/globals.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { SessionProvider } from 'next-auth/react'

import { useEffect } from "react";

function MyApp({ Component, pageProps: { session, ...pageProps} }) {
  
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp