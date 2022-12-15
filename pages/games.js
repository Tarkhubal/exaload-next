import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <section className="main-content">

                <div className="slider">
                    <div className="slider-items">
                        <Image width="1024" height="1024" className="slider-item" src="/assets/01.jpg" alt="img 1" />
                        <Image width="1024" height="1024" className="slider-item" src="/assets/02.jpg" alt="img 2" />
                        <Image width="1024" height="1024" className="slider-item" src="/assets/03.jpg" alt="img 3" />
                    </div>

                    <div className="slider-controls">
                        <span className="bx bxs-chevron-left prev" onClick="changeSlide(-1)"></span>
                        <span className="bx bxs-chevron-right next" onClick="changeSlide(1)"></span>
                    </div>

                    <div className="slider-indicators">
                        <span onClick="moveTo(1)"></span>
                        <span onClick="moveTo(2)"></span>
                        <span onClick="moveTo(3)"></span>
                    </div>

                    <div className="slider-content">
                        <h3>Ocean View</h3>
                        <h3>Green Valley</h3>
                        <h3>Lake Reflection</h3>
                    </div>

                </div>
                <div className="menu-wrapper games-table" id="new-games">
                    <h2 className="news-title">Nouveautés :</h2>
                </div>

                <div className="product-carousel">
                    <div className="product">
                        <div className="product-top">
                            <Image width="1024" height="1024" alt="game-img" className="product-image" src="/assets/spirit-of-the-north.jpg" />
                            <div className="product-name">
                                <p>Game name here</p>
                            </div>
                        </div>
                        <div className="product-bottom">
                            <p className="product-prices">
                                <p className="price"><span className="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                            </p>
                            <div className="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-top">
                            <Image width="1024" height="1024" alt="game-img" className="product-image" src="/assets/restless-soul.jpg" />
                            <div className="product-name">
                                <p>Game name here</p>
                            </div>
                        </div>
                        <div className="product-bottom">
                            <p className="product-prices">
                                <p className="price"><span className="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                            </p>
                            <div className="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-top">
                            <Image width="1024" height="1024" alt="game-img" className="product-image" src="/assets/spirit-of-the-north.jpg" />
                            <div className="product-name">
                                <p>Game name here</p>
                            </div>
                        </div>
                        <div className="product-bottom">
                            <p className="product-prices">
                                <p className="price"><span className="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                            </p>
                            <div className="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-top">
                            <Image width="1024" height="1024" alt="game-img" className="product-image" src="/assets/shadowofthetombraiderdefinitiveedition.jpg" />
                            <div className="product-name">
                                <p>Game name here</p>
                            </div>
                        </div>
                        <div className="product-bottom">
                            <p className="product-prices">
                                <p className="price"><span className="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                            </p>
                            <div className="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-top">
                            <Image width="1024" height="1024" alt="game-img" className="product-image" src="/assets/restless-soul.jpg" />
                            <div className="product-name">
                                <p>Game name here</p>
                            </div>
                        </div>
                        <div className="product-bottom">
                            <p className="product-prices">
                                <p className="price"><span className="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                            </p>
                            <div className="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-top">
                            <Image width="1024" height="1024" alt="game-img" className="product-image" src="/assets/spirit-of-the-north.jpg" />
                            <div className="product-name">
                                <p>Game name here</p>
                            </div>
                        </div>
                        <div className="product-bottom">
                            <p className="product-prices">
                                <p className="price"><span className="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                            </p>
                            <div className="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-top">
                            <Image width="1024" height="1024" alt="game-img" className="product-image" src="/assets/restless-soul.jpg" />
                            <div className="product-name">
                                <p>Game name here</p>
                            </div>
                        </div>
                        <div className="product-bottom">
                            <p className="product-prices">
                                <p className="price"><span className="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                            </p>
                            <div className="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-top">
                            <Image width="1024" height="1024" alt="game-img" className="product-image" src="/assets/shadowofthetombraiderdefinitiveedition.jpg" />

                            <div className="product-name">
                                <p>Game name here</p>
                            </div>
                        </div>
                        <div className="product-bottom">
                            <p className="product-prices">
                                <p className="price"><span className="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                            </p>
                            <div className="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-top">
                            <Image width="1024" height="1024" alt="game-img" className="product-image" src="/assets/spirit-of-the-north.jpg" />
                            <div className="product-name">
                                <p>Game name here</p>
                            </div>
                        </div>
                        <div className="product-bottom">
                            <p className="product-prices">
                                <p className="price"><span className="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                            </p>
                            <div className="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-top">
                            <Image width="1024" height="1024" alt="game-img" className="product-image" src="/assets/gta-v.jpg" />
                            <div className="product-name">
                                <p>Game name here</p>
                            </div>
                        </div>
                        <div className="product-bottom">
                            <p className="product-prices">
                                <p className="price"><span className="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                            </p>
                            <div className="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                        </div>
                    </div>
                </div>
                <div className="games-table" id="reduction-games">
                    <h2 className="promo-title">Jeux en promotion :</h2>

                    <div className="product-carousel">
                        <div className="product">
                            <div className="product-top">
                                <Image width="1024" height="1024" alt="game-img" className="product-image" src="/assets/restless-soul.jpg" />
                                <div className="product-name">
                                    <p>Game name here</p>
                                </div>
                            </div>
                            <div className="product-bottom">
                                <p className="product-prices">
                                    <p className="price"><span className="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                </p>
                                <div className="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product-top">
                                <Image width="1024" height="1024" alt="game-img" className="product-image" src="/assets/restless-soul.jpg" />
                                <div className="product-name">
                                    <p>Game name here</p>
                                </div>
                            </div>
                            <div className="product-bottom">
                                <p className="product-prices">
                                    <p className="price"><span className="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                </p>
                                <div className="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product-top">
                                <Image width="1024" height="1024" alt="game-img" className="product-image" src="/assets/spirit-of-the-north.jpg" />

                                <div className="product-name">
                                    <p>Game name here</p>
                                </div>
                            </div>
                            <div className="product-bottom">
                                <p className="product-prices">
                                    <p className="price"><span className="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                </p>
                                <div className="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product-top">
                                <Image width="1024" height="1024" alt="game-img" className="product-image" src="/assets/shadowofthetombraiderdefinitiveedition.jpg" />
                                <div className="product-name">
                                    <p>Game name here</p>
                                </div>
                            </div>
                            <div className="product-bottom">
                                <p className="product-prices">
                                    <p className="price"><span className="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                </p>
                                <div className="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product-top">
                                <Image width="1024" height="1024" alt="game-img" className="product-image" src="/assets/restless-soul.jpg" />
                                <div className="product-name">
                                    <p>Game name here</p>
                                </div>
                            </div>
                            <div className="product-bottom">
                                <p className="product-prices">
                                    <p className="price"><span className="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                </p>
                                <div className="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product-top">
                                <Image width="1024" height="1024" alt="game-img" className="product-image" src="/assets/spirit-of-the-north.jpg" />
                                <div className="product-name">
                                    <p>Game name here</p>
                                </div>
                            </div>
                            <div className="product-bottom">
                                <p className="product-prices">
                                    <p className="price"><span className="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                </p>
                                <div className="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product-top">
                                <Image width="1024" height="1024" alt="game-img" className="product-image" src="/assets/restless-soul.jpg" />
                                <div className="product-name">
                                    <p>Game name here</p>
                                </div>
                            </div>
                            <div className="product-bottom">
                                <p className="product-prices">
                                    <p className="price"><span className="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                </p>
                                <div className="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product-top">
                                <Image width="1024" height="1024" alt="game-img" className="product-image" src="/assets/shadowofthetombraiderdefinitiveedition.jpg" />
                                <div className="product-name">
                                    <p>Game name here</p>
                                </div>
                            </div>
                            <div className="product-bottom">
                                <p className="product-prices">
                                    <p className="price"><span className="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                </p>
                                <div className="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product-top">
                                <Image width="1024" height="1024" alt="game-img" className="product-image" src="/assets/spirit-of-the-north.jpg" />
                                <div className="product-name">
                                    <p>Game name here</p>
                                </div>
                            </div>
                            <div className="product-bottom">
                                <p className="product-prices">
                                    <p className="price"><span className="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                </p>
                                <div className="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product-top">
                                <Image width="1024" height="1024" alt="game-img" className="product-image" src="/assets/gta-v.jpg" />
                                <div className="product-name">
                                    <p>Game name here</p>
                                </div>
                            </div>
                            <div className="product-bottom">
                                <p className="product-prices">
                                    <p className="price"><span className="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                </p>
                                <div className="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                            </div>
                        </div>


                    </div>
                    <div className="games-table" id="best-sells">
                        <h2 className="bestsellers-title">Meilleures ventes :</h2>

                        <div className="product-carousel">
                            <div className="product">
                                <div className="product-top">
                                    <Image width="1024" height="1024" alt="game-img" className="product-image" src="/assets/spirit-of-the-north.jpg" />
                                    <div className="product-name">
                                        <p>Game name here</p>
                                    </div>
                                </div>
                                <div className="product-bottom">
                                    <p className="product-prices">
                                        <p className="price"><span className="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                    </p>
                                    <div className="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product-top">
                                    <Image width="1024" height="1024" alt="game-img" className="product-image" src="/assets/restless-soul.jpg" />
                                    <div className="product-name">
                                        <p>Game name here</p>
                                    </div>
                                </div>
                                <div className="product-bottom">
                                    <p className="product-prices">
                                        <p className="price"><span className="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                    </p>
                                    <div className="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product-top">
                                    <Image width="1024" height="1024" alt="game-img" className="product-image" src="/assets/spirit-of-the-north.jpg" />

                                    <div className="product-name">
                                        <p>Game name here</p>
                                    </div>
                                </div>
                                <div className="product-bottom">
                                    <p className="product-prices">
                                        <p className="price"><span className="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                    </p>
                                    <div className="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product-top">
                                    <Image width="1024" height="1024" alt="game-img" className="product-image" src="/assets/shadowofthetombraiderdefinitiveedition.jpg"/>
                                    <div className="product-name">
                                        <p>Game name here</p>
                                    </div>
                                </div>
                                <div className="product-bottom">
                                    <p className="product-prices">
                                        <p className="price"><span className="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                    </p>
                                    <div className="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product-top">
                                    <Image width="1024" height="1024" alt="game-img" className="product-image" src="/assets/restless-soul.jpg" />
                                    <div className="product-name">
                                        <p>Game name here</p>
                                    </div>
                                </div>
                                <div className="product-bottom">
                                    <p className="product-prices">
                                        <p className="price"><span className="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                    </p>
                                    <div className="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product-top">
                                    <Image width="1024" height="1024" alt="game-img" className="product-image" src="/assets/spirit-of-the-north.jpg" />
                                    <div className="product-name">
                                        <p>Game name here</p>
                                    </div>
                                </div>
                                <div className="product-bottom">
                                    <p className="product-prices">
                                        <p className="price"><span className="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                    </p>
                                    <div className="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product-top">
                                    <Image width="1024" height="1024" alt="game-img" className="product-image" src="/assets/restless-soul.jpg" />
                                    <div className="product-name">
                                        <p>Game name here</p>
                                    </div>
                                </div>
                                <div className="product-bottom">
                                    <p className="product-prices">
                                        <p className="price"><span className="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                    </p>
                                    <div className="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product-top">
                                    <Image width="1024" height="1024" alt="game-img" className="product-image" src="/assets/shadowofthetombraiderdefinitiveedition.jpg"/>

                                    <div className="product-name">
                                        <p>Game name here</p>
                                    </div>
                                </div>
                                <div className="product-bottom">
                                    <p className="product-prices">
                                        <p className="price"><span className="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                    </p>
                                    <div className="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product-top">
                                    <Image width="1024" height="1024" alt="game-img" className="product-image" src="/assets/spirit-of-the-north.jpg" />
                                    <div className="product-name">
                                        <p>Game name here</p>
                                    </div>
                                </div>
                                <div className="product-bottom">
                                    <p className="product-prices">
                                        <p className="price"><span className="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                    </p>
                                    <div className="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product-top">
                                    <Image width="1024" height="1024" alt="game-img" className="product-image" src="/assets/gta-v.jpg" />
                                    <div className="product-name">
                                        <p>Game name here</p>
                                    </div>
                                </div>
                                <div className="product-bottom">
                                    <p className="product-prices">
                                        <p className="price"><span className="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                    </p>
                                    <div className="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <Script src="js/img-slider.js"></Script>
        </>
    )
}