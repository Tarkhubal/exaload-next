import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <link rel='stylesheet' href='https://unicons.iconscout.com/release/v2.1.9/css/unicons.css' />
            </Head>
            <section className="login-content">
                <div className="login-bg"></div>
                <div className="login-container">
                    <div className="card-box">
                        <div className="box-center text-center">
                            <div className="section text-center">
                                <h6 className="titles"><span>Log in</span> | <span>Sign up</span></h6>
                                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                <label for="reg-log"></label>
                                <div className="card-3d-wrap">
                                    <div className="card-3d-wrapper">
                                        <div className="card-front">
                                            <div className="login-box">
                                                <h2>Connexion</h2>
                                                <form>
                                                    <div className="user-box">
                                                        <input type="text" name="" required="" />
                                                        <label>Nom d&apos;utilisateur</label>
                                                    </div>
                                                    <div className="user-box">
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

                                        <div className="card-back">
                                            <div className="login-box">
                                                <h2>Inscription</h2>
                                                <form>
                                                    <div className="user-box">
                                                        <input type="text" name="" required="" />
                                                        <label>Nom d&apos;utilisateur</label>
                                                    </div>
                                                    <div className="user-box">
                                                        <input type="password" name="" required="" />
                                                        <label>Mot de passe</label>
                                                    </div>
                                                    <div className="user-box">
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