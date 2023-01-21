import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div class="settings-page">
            <div class="settings-menu">
                <h1 class="settings_menu_title">Paramètres</h1>
                <div id="settingsmenu"></div>
            </div>
            <div class="settings_desc">
                <h1 class="settings_cat_title">Compte</h1>

                <p>Publicités personnalisées</p>
                <div class="switch">
                    <div class="switch__1">
                        <input id="switch-1" type="checkbox" />
                        <label for="switch-1"></label>
                    </div>
                </div>

                <p>Désactiver les publicités</p>
                <div class="switch">
                    <div class="switch__1">
                        <input id="switch-2" type="checkbox" />
                        <label for="switch-2"></label>
                    </div>
                </div>

                <p>Censurer les messages de chat avec des visages de memes</p>
                <div class="switch">
                    <div class="switch__1">
                        <input id="switch-3" type="checkbox" />
                        <label for="switch-3"></label>
                    </div>
                </div>

                <p>Utiliser des memes en rapport avec vos centres d&apos;intérêts</p>
                <div class="switch">
                    <div class="switch__1">
                        <input id="switch-4" type="checkbox" />
                        <label for="switch-4"></label>
                    </div>
                </div>

                <p>Mode dyslexique</p>
                <div class="switch">
                    <div class="switch__1">
                        <input id="switch-5" type="checkbox" />
                        <label for="switch-5"></label>
                    </div>
                </div>

                <p>Mode daltonien</p>
                <div class="switch">
                    <div class="switch__1">
                        <input id="switch-6" type="checkbox" />
                        <label for="switch-6"></label>
                    </div>
                </div>

                <p>Désactiver toutes les recommandations personnalisées</p>
                <div class="switch">
                    <div class="switch__1">
                        <input id="switch-7" type="checkbox" />
                        <label for="switch-7"></label>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}