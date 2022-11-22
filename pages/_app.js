import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";

import '../styles/globals.css'
import '../styles/footer.css'
import '../styles/fonts.css'
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
        <div class="login-button" align="center" title="Connexion">
          <Image class="login-button-img" width="55" height="55" src="/assets/login.png" alt="Login img" />
        </div>
      </Link>

      <nav class="side-nav">
        <div class="wrapper">
          <div id="nav-button-menu" class="nav-bloc n-1">
            <Image alt="Logo box" class="nav-img" width="1024" height="1024" onclick="window.location.href='https://exaload.glitch.me'" src="/favicon.ico" />
            <div class="sub-nav">
              <Link class="nav" href="https://exaload.glitch.me">
                <h2>Nos Réseaux Sociaux</h2>
              </Link>
              <div id="cards">
                <Link href="https://www.youtube.com/channel/UCgA-oZcSCmG8ggg4RU99pLg">
                  <div class="card">
                    <div class="card-content">
                      <div class="card-image">
                        <Image alt="YouTube logo" width="1024" height="1024" src="/assets/youtube.png" />
                      </div>
                      <div class="card-info-wrapper">
                        <div class="card-info">
                          <Image alt="YouTube logo" width="1024" height="1024" src="/assets/youtube.png" />
                          <div class="card-info-title">
                            <h3>Notre chaîne YouTube !</h3>
                            <h4>Abonne toi ! :3</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href="https://discord.com/invite/2FjfpXavSF">
                  <div class="card">
                    <div class="card-content">
                      <div class="card-image">
                        <Image alt="Discord logo" width="1024" height="1024" src="/assets/discord-mark-blue.png" />
                      </div>
                      <div class="card-info-wrapper">
                        <div class="card-info">
                          <Image alt="Discord logo" width="1024" height="1024" src="/assets/discord-mark-blue.png" />
                          <div class="card-info-title">
                            <h3>Le Discord Exaload</h3>
                            <h4>Tu veux des events et pleins d&apos;activités ? Clique vite !</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href="https://twitter.com/exa_load">
                  <div class="card">
                    <div class="card-content">
                      <div class="card-image">
                        <Image alt="Twitter logo" width="1024" height="1024" src="/assets/twitter.png" />
                      </div>
                      <div class="card-info-wrapper">
                        <div class="card-info">
                          <Image alt="Twitter logo" width="1024" height="1024" src="/assets/twitter.png" />
                          <div class="card-info-title">
                            <h3>Notre Twitter</h3>
                            <h4>Rejoins nous sur Twitter pour suivre les grands moments !</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href="https://www.instagram.com/exaload/">
                  <div class="card">
                    <div class="card-content">
                      <div class="card-image">
                        <Image alt="Instagram logo" width="1024" height="1024" src="/assets/insta-logo.png" />
                      </div>
                      <div class="card-info-wrapper">
                        <div class="card-info">
                          <Image alt="Instagram logo" width="250" height="250" src="/assets/insta-logo.png" />
                          <div class="card-info-title">
                            <h3>Notre flux Instagram</h3>
                            <h4>Suis-nous vite pour gagner un max de cadeaux !</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <div class="card">
                  <div class="card-content">
                    <div class="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div class="card-info-wrapper">
                      <div class="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div class="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-content">
                    <div class="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div class="card-info-wrapper">
                      <div class="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div class="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ul>
                <Link class="nav" target="_blank" href="https://www.youtube.com/channel/UCgA-oZcSCmG8ggg4RU99pLg">
                  <li>YouTube</li>
                </Link>
                <Link class="nav" target="_blank" href="https://discord.com/invite/2FjfpXavSF">
                  <li>Discord</li>
                </Link>
                <Link class="nav" target="_blank" href="https://twitter.com/exa_load">
                  <li>Twitter</li>
                </Link>
                <Link class="nav" target="_blank" href="https://instagram.com/exaload">
                  <li>Instagram</li>
                </Link>
                <Link class="nav" target="_blank" href="https://www.tiktok.com/@exaload">
                  <li>TikTok</li>
                </Link>
                <Link class="nav" target="_blank" href="https://www.reddit.com/r/exaload/">
                  <li>Reddit</li>
                </Link>
              </ul>
            </div>
          </div>
          <div id="nav-button-games" class="nav-bloc n-2">
            <Image alt="Games box" class="nav-img" width="1024" height="1024" onclick="window.location.href='/games'" src="/assets/games.png" />
            <div class="sub-nav">
              <Link class="nav" href="/games">
                <h2>Jeux</h2>
              </Link>
              <div id="cards">
                <div class="card" onclick="window.location.href='https://exaload.glitch.me'">
                  <div class="card-content">
                    <div class="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div class="card-info-wrapper">
                      <div class="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div class="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-content">
                    <div class="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div class="card-info-wrapper">
                      <div class="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div class="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-content">
                    <div class="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div class="card-info-wrapper">
                      <div class="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div class="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-content">
                    <div class="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div class="card-info-wrapper">
                      <div class="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div class="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-content">
                    <div class="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div class="card-info-wrapper">
                      <div class="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div class="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-content">
                    <div class="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div class="card-info-wrapper">
                      <div class="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div class="card-info-title">
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
          <div id="nav-button-series" class="nav-bloc n-3">
            <Image alt="Movies box" class="nav-img" width="1024" height="1024" onclick="window.location.href='https://exaload.glitch.me/uc/'" src="/assets/movies.png" />
            <div class="sub-nav">
              <Link class="nav" href="https://exaload.glitch.me/uc/">
                <h2>Films</h2>
              </Link>
              <div id="cards">
                <div class="card" onclick="window.location.href='https://exaload.glitch.me'">
                  <div class="card-content">
                    <div class="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div class="card-info-wrapper">
                      <div class="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div class="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-content">
                    <div class="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div class="card-info-wrapper">
                      <div class="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div class="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-content">
                    <div class="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div class="card-info-wrapper">
                      <div class="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div class="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-content">
                    <div class="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div class="card-info-wrapper">
                      <div class="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div class="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-content">
                    <div class="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div class="card-info-wrapper">
                      <div class="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div class="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-content">
                    <div class="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div class="card-info-wrapper">
                      <div class="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div class="card-info-title">
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
          <div id="nav-button-series" class="nav-bloc n-4">
            <Image alt="Series box" class="nav-img" width="1024" height="1024" onclick="window.location.href='https://exaload.glitch.me/uc/'" src="/assets/series.png" />
            <div class="sub-nav">
              <Link class="nav" href="https://exaload.glitch.me/uc/">
                <h2>Séries</h2>
              </Link>
              <div id="cards">
                <div class="card" onclick="window.location.href='https://exaload.glitch.me'">
                  <div class="card-content">
                    <div class="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div class="card-info-wrapper">
                      <div class="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div class="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-content">
                    <div class="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div class="card-info-wrapper">
                      <div class="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div class="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-content">
                    <div class="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div class="card-info-wrapper">
                      <div class="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div class="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-content">
                    <div class="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div class="card-info-wrapper">
                      <div class="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div class="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-content">
                    <div class="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div class="card-info-wrapper">
                      <div class="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div class="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-content">
                    <div class="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div class="card-info-wrapper">
                      <div class="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div class="card-info-title">
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
          <div id="nav-button-musics" class="nav-bloc n-5">
            <Image alt="Musics box" class="nav-img" width="1024" height="1024" onclick="window.location.href='https://exaload.glitch.me/musics'" src="/assets/musics.png" />
            <div class="sub-nav">
              <Link class="nav" href="https://exaload.glitch.me/musics">
                <h2>Musiques</h2>
              </Link>
              <div id="cards">
                <div class="card" onclick="window.location.href='https://exaload.glitch.me'">
                  <div class="card-content">
                    <div class="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div class="card-info-wrapper">
                      <div class="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div class="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-content">
                    <div class="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div class="card-info-wrapper">
                      <div class="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div class="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-content">
                    <div class="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div class="card-info-wrapper">
                      <div class="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div class="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-content">
                    <div class="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div class="card-info-wrapper">
                      <div class="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div class="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-content">
                    <div class="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div class="card-info-wrapper">
                      <div class="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div class="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-content">
                    <div class="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div class="card-info-wrapper">
                      <div class="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div class="card-info-title">
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
          <div id="nav-button-apps" class="nav-bloc n-6">
            <Image alt="Apps box" class="nav-img" width="1024" height="1024" onclick="window.location.href='https://exaload.glitch.me/uc/'" src="/assets/apps.png" />
            <div class="sub-nav">
              <Link class="nav" href="https://exaload.glitch.me/uc/">
                <h2>Applications</h2>
              </Link>
              <div id="cards">
                <div class="card" onclick="window.location.href='https://exaload.glitch.me'">
                  <div class="card-content">
                    <div class="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div class="card-info-wrapper">
                      <div class="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div class="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-content">
                    <div class="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div class="card-info-wrapper">
                      <div class="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div class="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-content">
                    <div class="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div class="card-info-wrapper">
                      <div class="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div class="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-content">
                    <div class="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div class="card-info-wrapper">
                      <div class="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div class="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-content">
                    <div class="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div class="card-info-wrapper">
                      <div class="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div class="card-info-title">
                          <h3>Un titre</h3>
                          <h4>Une description</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-content">
                    <div class="card-image">
                      <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                    </div>
                    <div class="card-info-wrapper">
                      <div class="card-info">
                        <Image alt="no img" width="1024" height="1024" src="/assets/no-img-available.jpg" />
                        <div class="card-info-title">
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
        <div class="settings-button" align="center" title="Paramètres">
          <Image class="settings-button-img" width="55" height="55" src="/assets/settings.png" alt="Settings button" />
        </div>
      </Link>

      <Script src="js/navhovereffect.js"></Script>

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
