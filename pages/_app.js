import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";

import '../styles/globals.css'
import '../styles/footer.css'
import '../styles/scrollbar.css'
import '../styles/nav.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Exaload</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <Link href="/login">
        <div className="login-button" align="center" title="Connexion">
          <Image className="login-button-img" width="55" height="55" src="/assets/login.png" alt="Login img" />
        </div>
      </Link>

      <nav className="side-nav">
        <div className="wrapper">
          <div id="nav-button-menu" className="nav-bloc n-1">
            <Link href="https://exaload-next.vercel.app/">
              <Image alt="Logo box" className="nav-img" width="1024" height="1024" src="/favicon.ico" />
            </Link>
            <div className="sub-nav">
              <Link className="nav" href="https://exaload-next.vercel.app/">
                <h2>Nos Réseaux Sociaux</h2>
              </Link>
              <div id="cards">
                <Link href="https://www.youtube.com/channel/UCgA-oZcSCmG8ggg4RU99pLg">
                  <div className="card">
                    <div className="card-content">
                      <div className="card-image">
                        <Image alt="YouTube logo" width="1024" height="1024" src="/assets/youtube.png" />
                      </div>
                      <div className="card-info-wrapper">
                        <div className="card-info">
                          <Image alt="YouTube logo" width="1024" height="1024" src="/assets/youtube.png" />
                          <div className="card-info-title">
                            <h3>Notre chaîne YouTube !</h3>
                            <h4>Abonne toi ! :3</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href="https://discord.com/invite/2FjfpXavSF">
                  <div className="card">
                    <div className="card-content">
                      <div className="card-image">
                        <Image alt="Discord logo" width="1024" height="1024" src="/assets/discord-mark-blue.png" />
                      </div>
                      <div className="card-info-wrapper">
                        <div className="card-info">
                          <Image alt="Discord logo" width="1024" height="1024" src="/assets/discord-mark-blue.png" />
                          <div className="card-info-title">
                            <h3>Le Discord Exaload</h3>
                            <h4>Tu veux des events et pleins d&apos;activités ? Clique vite !</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href="https://twitter.com/exa_load">
                  <div className="card">
                    <div className="card-content">
                      <div className="card-image">
                        <Image alt="Twitter logo" width="1024" height="1024" src="/assets/twitter.png" />
                      </div>
                      <div className="card-info-wrapper">
                        <div className="card-info">
                          <Image alt="Twitter logo" width="1024" height="1024" src="/assets/twitter.png" />
                          <div className="card-info-title">
                            <h3>Notre Twitter</h3>
                            <h4>Rejoins nous sur Twitter pour suivre les grands moments !</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href="https://www.instagram.com/exaload/">
                  <div className="card">
                    <div className="card-content">
                      <div className="card-image">
                        <Image alt="Instagram logo" width="1024" height="1024" src="/assets/insta-logo.png" />
                      </div>
                      <div className="card-info-wrapper">
                        <div className="card-info">
                          <Image alt="Instagram logo" width="250" height="250" src="/assets/insta-logo.png" />
                          <div className="card-info-title">
                            <h3>Notre flux Instagram</h3>
                            <h4>Suis-nous vite pour gagner un max de cadeaux !</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href="https://www.tiktok.com/@exaload">
                  <div className="card">
                    <div className="card-content">
                      <div className="card-image">
                        <Image alt="no img" width="1024" height="1024" src="/assets/tiktok-logo.png" />
                      </div>
                      <div className="card-info-wrapper">
                        <div className="card-info">
                          <Image alt="no img" width="1024" height="1024" src="/assets/tiktok-logo.png" />
                          <div className="card-info-title">
                            <h3>Notre TikTok</h3>
                            <h4>Une description</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href="https://www.reddit.com/r/exaload/">
                  <div className="card">
                    <div className="card-content">
                      <div className="card-image">
                        <Image alt="no img" width="1024" height="1024" src="/assets/reddit-logo.png" />
                      </div>
                      <div className="card-info-wrapper">
                        <div className="card-info">
                          <Image alt="no img" width="1024" height="1024" src="/assets/reddit-logo.png" />
                          <div className="card-info-title">
                            <h3>Le r/exaload</h3>
                            <h4>Suivez l&apos;actu gaming !</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div id="nav-button-games" className="nav-bloc n-2">
            <Link href="https://exaload-next.vercel.app/games">
              <Image alt="Games box" className="nav-img" width="1024" height="1024" src="/assets/games.png" />
            </Link>
            <div className="sub-nav">
              <Link className="nav" href="https://exaload-next.vercel.app/games">
                <h2>Jeux</h2>
              </Link>
              <div id="cards">
                <div className="card" onClick="window.location.href='https://exaload.glitch.me'">
                  <div className="card-content">
                    <div className="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div className="card-info-wrapper">
                      <div className="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div className="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <div className="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div className="card-info-wrapper">
                      <div className="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div className="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <div className="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div className="card-info-wrapper">
                      <div className="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div className="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <div className="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div className="card-info-wrapper">
                      <div className="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div className="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <div className="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div className="card-info-wrapper">
                      <div className="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div className="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <div className="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div className="card-info-wrapper">
                      <div className="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div className="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="nav-button-series" className="nav-bloc n-3">
            <Link href="/movies">
              <Image alt="Movies box" className="nav-img" width="1024" height="1024" src="/assets/movies.png" />
            </Link>
            <div className="sub-nav">
              <Link className="nav" href="https://exaload.glitch.me/uc/">
                <h2>Films</h2>
              </Link>
              <div id="cards">
                <div className="card" onClick="window.location.href='https://exaload.glitch.me'">
                  <div className="card-content">
                    <div className="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div className="card-info-wrapper">
                      <div className="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div className="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <div className="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div className="card-info-wrapper">
                      <div className="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div className="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <div className="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div className="card-info-wrapper">
                      <div className="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div className="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <div className="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div className="card-info-wrapper">
                      <div className="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div className="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <div className="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div className="card-info-wrapper">
                      <div className="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div className="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <div className="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div className="card-info-wrapper">
                      <div className="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div className="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="nav-button-series" className="nav-bloc n-4">
            <Link href="/series">
              <Image alt="Series box" className="nav-img" width="1024" height="1024" src="/assets/series.png" />
            </Link>
            <div className="sub-nav">
              <Link className="nav" href="https://exaload.glitch.me/uc/">
                <h2>Séries</h2>
              </Link>
              <div id="cards">
                <div className="card" onClick="window.location.href='https://exaload.glitch.me'">
                  <div className="card-content">
                    <div className="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div className="card-info-wrapper">
                      <div className="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div className="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <div className="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div className="card-info-wrapper">
                      <div className="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div className="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <div className="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div className="card-info-wrapper">
                      <div className="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div className="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <div className="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div className="card-info-wrapper">
                      <div className="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div className="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <div className="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div className="card-info-wrapper">
                      <div className="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div className="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <div className="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div className="card-info-wrapper">
                      <div className="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div className="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="nav-button-musics" className="nav-bloc n-5">
            <Link href="/musics">
              <Image alt="Musics box" className="nav-img" width="1024" height="1024" src="/assets/musics.png" />
            </Link>
            <div className="sub-nav">
              <Link className="nav" href="https://exaload.glitch.me/musics">
                <h2>Musiques</h2>
              </Link>
              <div id="cards">
                <div className="card" onClick="window.location.href='https://exaload.glitch.me'">
                  <div className="card-content">
                    <div className="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div className="card-info-wrapper">
                      <div className="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div className="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <div className="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div className="card-info-wrapper">
                      <div className="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div className="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <div className="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div className="card-info-wrapper">
                      <div className="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div className="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <div className="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div className="card-info-wrapper">
                      <div className="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div className="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <div className="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div className="card-info-wrapper">
                      <div className="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div className="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <div className="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div className="card-info-wrapper">
                      <div className="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div className="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="nav-button-apps" className="nav-bloc n-6">
            <Link href="/apps">
              <Image alt="Apps box" className="nav-img" width="1024" height="1024" src="/assets/apps.png" />
            </Link>
            <div className="sub-nav">
              <Link className="nav" href="https://exaload.glitch.me/uc/">
                <h2>Applications</h2>
              </Link>
              <div id="cards">
                <div className="card" onClick="window.location.href='https://exaload.glitch.me'">
                  <div className="card-content">
                    <div className="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div className="card-info-wrapper">
                      <div className="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div className="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <div className="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div className="card-info-wrapper">
                      <div className="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div className="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <div className="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div className="card-info-wrapper">
                      <div className="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div className="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <div className="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div className="card-info-wrapper">
                      <div className="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div className="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <div className="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div className="card-info-wrapper">
                      <div className="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div className="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <div className="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div className="card-info-wrapper">
                      <div className="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div className="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Link href="/settings">
        <div className="settings-button" align="center" title="Paramètres">
          <Image className="settings-button-img" width="55" height="55" src="/assets/settings.png" alt="Settings button" />
        </div>
      </Link>

      <Script src="js/navhovereffect.js"></Script>

      <Component {...pageProps} />

      <footer className="footer-20192">
        <div className="site-section">
          <div className="container">
            <div className="cta d-block d-md-flex align-items-center px-5">
              <div>
                <h2 className="mb-0">Vous avez créé quelque chose ?</h2>
                <h3 className="text-dark">Partagez le facilement !</h3>
              </div>
              <div className="ml-auto">
                <Link href="#" className="btn btn-dark rounded-0">Commencer à uploader</Link>
              </div>
            </div>
            <div className="row">
              <div className="col-sm">
                <Link href="#" className="footer-logo">Exaload</Link>
                <p className="copyright">
                  <small>&copy; 2022</small>
                </p>
              </div>
              <div className="col-sm">
                <h3>Entreprise</h3>
                <ul className="list-unstyled links">
                  <li><Link href="#">À propos</Link></li>
                  <li><Link href="#">Notre mission</Link></li>
                  <li><Link href="#">Notre équipe</Link></li>
                  <li><Link href="#">Charte graphique</Link></li>
                </ul>
              </div>
              <div className="col-sm">
                <h3>Informations légales</h3>
                <ul className="list-unstyled links">
                  <li><Link href="#">Mentions légales</Link></li>
                  <li><Link href="#">Conditions d&apos;utilisation</Link></li>
                  <li><Link href="#">Politique de confidentialité</Link></li>
                </ul>
              </div>
              <div className="col-md-3">
                <h3>Nous suivre</h3>
                <ul className="list-unstyled social">
                  <li><Link href="#"><span className="icon-facebook"></span></Link></li>
                  <li><Link href="#"><span className="icon-twitter"></span></Link></li>
                  <li><Link href="#"><span className="icon-linkedin"></span></Link></li>
                  <li><Link href="#"><span className="icon-medium"></span></Link></li>
                  <li><Link href="#"><span className="icon-paper-plane"></span></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default MyApp
