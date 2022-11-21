import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";

import '../styles/globals.css'
import '../styles/footer.css'
import '../styles/fonts.css'
import '../styles/scrollbar.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Exaload</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <Link href="/login">
        <div class="login-button" align="center" title="Connexion">
          <Image class="login-button-img" width="55" height="55" src="/assets/login.png" alt="Login img" />
        </div>
      </Link>


      <Component {...pageProps} />

      <footer class="footer-20192">
        <div class="site-section">
          <div class="container">
            <div class="cta d-block d-md-flex align-items-center px-5">
              <div>
                <h2 class="mb-0">Vous avez créé quelque chose ?</h2>
                <h3 class="text-dark">Partagez le facilement !</h3>
              </div>
              <div class="ml-auto">
                <Link href="#" class="btn btn-dark rounded-0">Commencer à uploader</Link>
              </div>
            </div>
            <div class="row">
              <div class="col-sm">
                <Link href="#" class="footer-logo">Exaload</Link>
                <p class="copyright">
                  <small>&copy; 2022</small>
                </p>
              </div>
              <div class="col-sm">
                <h3>Entreprise</h3>
                <ul class="list-unstyled links">
                  <li><Link href="#">À propos</Link></li>
                  <li><Link href="#">Notre mission</Link></li>
                  <li><Link href="#">Notre équipe</Link></li>
                  <li><Link href="#">Charte graphique</Link></li>
                </ul>
              </div>
              <div class="col-sm">
                <h3>Informations légales</h3>
                <ul class="list-unstyled links">
                  <li><Link href="#">Mentions légales</Link></li>
                  <li><Link href="#">Conditions d&apos;utilisation</Link></li>
                  <li><Link href="#">Politique de confidentialité</Link></li>
                </ul>
              </div>
              <div class="col-md-3">
                <h3>Nous suivre</h3>
                <ul class="list-unstyled social">
                  <li><Link href="#"><span class="icon-facebook"></span></Link></li>
                  <li><Link href="#"><span class="icon-twitter"></span></Link></li>
                  <li><Link href="#"><span class="icon-linkedin"></span></Link></li>
                  <li><Link href="#"><span class="icon-medium"></span></Link></li>
                  <li><Link href="#"><span class="icon-paper-plane"></span></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Script src="/js/anim-text-flow.js"></Script>
    </>
  )
}

export default MyApp
