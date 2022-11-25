import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <section class="login-content">
                <div class="login-bg"></div>
                <div class="login-container">
                    <div class="card-box">
                        <div class="box-center text-center">
                            <div class="section text-center">
                                <h6 class="titles"><span>Log in</span> | <span>Sign up</span></h6>
                                <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                <label for="reg-log"></label>
                                <div class="card-3d-wrap">
                                    <div class="card-3d-wrapper">
                                        <div class="card-front">
                                            <div class="login-box">
                                                <h2>Connexion</h2>
                                                <form>
                                                    <div class="user-box">
                                                        <input type="text" name="" required="" />
                                                        <label>Nom d&apos;utilisateur</label>
                                                    </div>
                                                    <div class="user-box">
                                                        <input type="password" name="" required="" />
                                                        <label>Mot de passe</label>
                                                    </div>
                                                    <a href="#">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span> Connexion...
                                                    </a>
                                                </form>
                                            </div>
                                        </div>

                                        <div class="card-back">
                                            <div class="login-box">
                                                <h2>Inscription</h2>
                                                <form>
                                                    <div class="user-box">
                                                        <input type="text" name="" required="" />
                                                        <label>Nom d&apos;utilisateur</label>
                                                    </div>
                                                    <div class="user-box">
                                                        <input type="password" name="" required="" />
                                                        <label>Mot de passe</label>
                                                    </div>
                                                    <div class="user-box">
                                                        <input type="text" name="" required="" />
                                                        <label>Adresse e-mail</label>
                                                    </div>
                                                    <a href="#">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span> S&apos;inscrire...
                                                    </a>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}