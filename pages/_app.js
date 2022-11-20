import Head from "next/head";
import { Link } from "next/link";

import '../styles/globals.css'
import '../styles/footer.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Head>
            <title>Exaload</title>
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
