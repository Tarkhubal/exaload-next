import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <section className="main-content">

                <div class="slider">
                    <div class="slider-items">
                        <Image width="1024" height="1024" class="slider-item" src="/assets/01.jpg" alt="img 1" />
                        <Image width="1024" height="1024" class="slider-item" src="/assets/02.jpg" alt="img 2" />
                        <Image width="1024" height="1024" class="slider-item" src="/assets/03.jpg" alt="img 3" />
                    </div>

                    <div class="slider-controls">
                        <span class="bx bxs-chevron-left prev" onClick="changeSlide(-1)"></span>
                        <span class="bx bxs-chevron-right next" onClick="changeSlide(1)"></span>
                    </div>

                    <div class="slider-indicators">
                        <span onClick="moveTo(1)"></span>
                        <span onClick="moveTo(2)"></span>
                        <span onClick="moveTo(3)"></span>
                    </div>

                    <div class="slider-content">
                        <h3>Ocean View</h3>
                        <h3>Green Valley</h3>
                        <h3>Lake Reflection</h3>
                    </div>

                </div>
                <div class="menu-wrapper games-table" id="new-games">
                    <h2 class="news-title">Nouveautés :</h2>
                </div>

                <div class="product-carousel">
                    <div class="product">
                        <div class="product-top">
                            <Image width="1024" height="1024" alt="game-img" class="product-image" src="/assets/spirit-of-the-north.jpg" />
                            <div class="product-name">
                                <p>Game name here</p>
                            </div>
                        </div>
                        <div class="product-bottom">
                            <p class="product-prices">
                                <p class="price"><span class="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                            </p>
                            <div class="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                        </div>
                    </div>
                    <div class="product">
                        <div class="product-top">
                            <Image width="1024" height="1024" alt="game-img" class="product-image" src="/assets/restless-soul.jpg" />
                            <div class="product-name">
                                <p>Game name here</p>
                            </div>
                        </div>
                        <div class="product-bottom">
                            <p class="product-prices">
                                <p class="price"><span class="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                            </p>
                            <div class="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                        </div>
                    </div>
                    <div class="product">
                        <div class="product-top">
                            <Image width="1024" height="1024" alt="game-img" class="product-image" src="/assets/spirit-of-the-north.jpg" />
                            <div class="product-name">
                                <p>Game name here</p>
                            </div>
                        </div>
                        <div class="product-bottom">
                            <p class="product-prices">
                                <p class="price"><span class="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                            </p>
                            <div class="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                        </div>
                    </div>
                    <div class="product">
                        <div class="product-top">
                            <Image width="1024" height="1024" alt="game-img" class="product-image" src="/assets/shadowofthetombraiderdefinitiveedition.jpg" />
                            <div class="product-name">
                                <p>Game name here</p>
                            </div>
                        </div>
                        <div class="product-bottom">
                            <p class="product-prices">
                                <p class="price"><span class="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                            </p>
                            <div class="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                        </div>
                    </div>
                    <div class="product">
                        <div class="product-top">
                            <Image width="1024" height="1024" alt="game-img" class="product-image" src="/assets/restless-soul.jpg" />
                            <div class="product-name">
                                <p>Game name here</p>
                            </div>
                        </div>
                        <div class="product-bottom">
                            <p class="product-prices">
                                <p class="price"><span class="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                            </p>
                            <div class="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                        </div>
                    </div>
                    <div class="product">
                        <div class="product-top">
                            <Image width="1024" height="1024" alt="game-img" class="product-image" src="/assets/spirit-of-the-north.jpg" />
                            <div class="product-name">
                                <p>Game name here</p>
                            </div>
                        </div>
                        <div class="product-bottom">
                            <p class="product-prices">
                                <p class="price"><span class="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                            </p>
                            <div class="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                        </div>
                    </div>
                    <div class="product">
                        <div class="product-top">
                            <Image width="1024" height="1024" alt="game-img" class="product-image" src="/assets/restless-soul.jpg" />
                            <div class="product-name">
                                <p>Game name here</p>
                            </div>
                        </div>
                        <div class="product-bottom">
                            <p class="product-prices">
                                <p class="price"><span class="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                            </p>
                            <div class="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                        </div>
                    </div>
                    <div class="product">
                        <div class="product-top">
                            <Image width="1024" height="1024" alt="game-img" class="product-image" src="/assets/shadowofthetombraiderdefinitiveedition.jpg" />

                            <div class="product-name">
                                <p>Game name here</p>
                            </div>
                        </div>
                        <div class="product-bottom">
                            <p class="product-prices">
                                <p class="price"><span class="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                            </p>
                            <div class="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                        </div>
                    </div>
                    <div class="product">
                        <div class="product-top">
                            <Image width="1024" height="1024" alt="game-img" class="product-image" src="/assets/spirit-of-the-north.jpg" />
                            <div class="product-name">
                                <p>Game name here</p>
                            </div>
                        </div>
                        <div class="product-bottom">
                            <p class="product-prices">
                                <p class="price"><span class="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                            </p>
                            <div class="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                        </div>
                    </div>
                    <div class="product">
                        <div class="product-top">
                            <Image width="1024" height="1024" alt="game-img" class="product-image" src="/assets/gta-v.jpg" />
                            <div class="product-name">
                                <p>Game name here</p>
                            </div>
                        </div>
                        <div class="product-bottom">
                            <p class="product-prices">
                                <p class="price"><span class="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                            </p>
                            <div class="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                        </div>
                    </div>
                </div>
                <div class="games-table" id="reduction-games">
                    <h2 class="promo-title">Jeux en promotion :</h2>

                    <div class="product-carousel">
                        <div class="product">
                            <div class="product-top">
                                <Image width="1024" height="1024" alt="game-img" class="product-image" src="/assets/restless-soul.jpg" />
                                <div class="product-name">
                                    <p>Game name here</p>
                                </div>
                            </div>
                            <div class="product-bottom">
                                <p class="product-prices">
                                    <p class="price"><span class="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                </p>
                                <div class="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                            </div>
                        </div>
                        <div class="product">
                            <div class="product-top">
                                <Image width="1024" height="1024" alt="game-img" class="product-image" src="/assets/restless-soul.jpg" />
                                <div class="product-name">
                                    <p>Game name here</p>
                                </div>
                            </div>
                            <div class="product-bottom">
                                <p class="product-prices">
                                    <p class="price"><span class="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                </p>
                                <div class="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                            </div>
                        </div>
                        <div class="product">
                            <div class="product-top">
                                <Image width="1024" height="1024" alt="game-img" class="product-image" src="/assets/spirit-of-the-north.jpg" />

                                <div class="product-name">
                                    <p>Game name here</p>
                                </div>
                            </div>
                            <div class="product-bottom">
                                <p class="product-prices">
                                    <p class="price"><span class="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                </p>
                                <div class="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                            </div>
                        </div>
                        <div class="product">
                            <div class="product-top">
                                <Image width="1024" height="1024" alt="game-img" class="product-image" src="/assets/shadowofthetombraiderdefinitiveedition.jpg" />
                                <div class="product-name">
                                    <p>Game name here</p>
                                </div>
                            </div>
                            <div class="product-bottom">
                                <p class="product-prices">
                                    <p class="price"><span class="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                </p>
                                <div class="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                            </div>
                        </div>
                        <div class="product">
                            <div class="product-top">
                                <Image width="1024" height="1024" alt="game-img" class="product-image" src="/assets/restless-soul.jpg" />
                                <div class="product-name">
                                    <p>Game name here</p>
                                </div>
                            </div>
                            <div class="product-bottom">
                                <p class="product-prices">
                                    <p class="price"><span class="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                </p>
                                <div class="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                            </div>
                        </div>
                        <div class="product">
                            <div class="product-top">
                                <Image width="1024" height="1024" alt="game-img" class="product-image" src="/assets/spirit-of-the-north.jpg" />
                                <div class="product-name">
                                    <p>Game name here</p>
                                </div>
                            </div>
                            <div class="product-bottom">
                                <p class="product-prices">
                                    <p class="price"><span class="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                </p>
                                <div class="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                            </div>
                        </div>
                        <div class="product">
                            <div class="product-top">
                                <Image width="1024" height="1024" alt="game-img" class="product-image" src="/assets/restless-soul.jpg" />
                                <div class="product-name">
                                    <p>Game name here</p>
                                </div>
                            </div>
                            <div class="product-bottom">
                                <p class="product-prices">
                                    <p class="price"><span class="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                </p>
                                <div class="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                            </div>
                        </div>
                        <div class="product">
                            <div class="product-top">
                                <Image width="1024" height="1024" alt="game-img" class="product-image" src="/assets/shadowofthetombraiderdefinitiveedition.jpg" />
                                <div class="product-name">
                                    <p>Game name here</p>
                                </div>
                            </div>
                            <div class="product-bottom">
                                <p class="product-prices">
                                    <p class="price"><span class="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                </p>
                                <div class="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                            </div>
                        </div>
                        <div class="product">
                            <div class="product-top">
                                <Image width="1024" height="1024" alt="game-img" class="product-image" src="/assets/spirit-of-the-north.jpg" />
                                <div class="product-name">
                                    <p>Game name here</p>
                                </div>
                            </div>
                            <div class="product-bottom">
                                <p class="product-prices">
                                    <p class="price"><span class="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                </p>
                                <div class="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                            </div>
                        </div>
                        <div class="product">
                            <div class="product-top">
                                <Image width="1024" height="1024" alt="game-img" class="product-image" src="/assets/gta-v.jpg" />
                                <div class="product-name">
                                    <p>Game name here</p>
                                </div>
                            </div>
                            <div class="product-bottom">
                                <p class="product-prices">
                                    <p class="price"><span class="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                </p>
                                <div class="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                            </div>
                        </div>


                    </div>
                    <div class="games-table" id="best-sells">
                        <h2 class="bestsellers-title">Meilleures ventes :</h2>

                        <div class="product-carousel">
                            <div class="product">
                                <div class="product-top">
                                    <Image width="1024" height="1024" alt="game-img" class="product-image" src="/assets/spirit-of-the-north.jpg" />
                                    <div class="product-name">
                                        <p>Game name here</p>
                                    </div>
                                </div>
                                <div class="product-bottom">
                                    <p class="product-prices">
                                        <p class="price"><span class="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                    </p>
                                    <div class="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                                </div>
                            </div>
                            <div class="product">
                                <div class="product-top">
                                    <Image width="1024" height="1024" alt="game-img" class="product-image" src="/assets/restless-soul.jpg" />
                                    <div class="product-name">
                                        <p>Game name here</p>
                                    </div>
                                </div>
                                <div class="product-bottom">
                                    <p class="product-prices">
                                        <p class="price"><span class="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                    </p>
                                    <div class="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                                </div>
                            </div>
                            <div class="product">
                                <div class="product-top">
                                    <Image width="1024" height="1024" alt="game-img" class="product-image" src="/assets/spirit-of-the-north.jpg" />

                                    <div class="product-name">
                                        <p>Game name here</p>
                                    </div>
                                </div>
                                <div class="product-bottom">
                                    <p class="product-prices">
                                        <p class="price"><span class="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                    </p>
                                    <div class="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                                </div>
                            </div>
                            <div class="product">
                                <div class="product-top">
                                    <Image width="1024" height="1024" alt="game-img" class="product-image" src="/assets/shadowofthetombraiderdefinitiveedition.jpg"/>
                                    <div class="product-name">
                                        <p>Game name here</p>
                                    </div>
                                </div>
                                <div class="product-bottom">
                                    <p class="product-prices">
                                        <p class="price"><span class="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                    </p>
                                    <div class="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                                </div>
                            </div>
                            <div class="product">
                                <div class="product-top">
                                    <Image width="1024" height="1024" alt="game-img" class="product-image" src="/assets/restless-soul.jpg" />
                                    <div class="product-name">
                                        <p>Game name here</p>
                                    </div>
                                </div>
                                <div class="product-bottom">
                                    <p class="product-prices">
                                        <p class="price"><span class="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                    </p>
                                    <div class="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                                </div>
                            </div>
                            <div class="product">
                                <div class="product-top">
                                    <Image width="1024" height="1024" alt="game-img" class="product-image" src="/assets/spirit-of-the-north.jpg" />
                                    <div class="product-name">
                                        <p>Game name here</p>
                                    </div>
                                </div>
                                <div class="product-bottom">
                                    <p class="product-prices">
                                        <p class="price"><span class="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                    </p>
                                    <div class="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                                </div>
                            </div>
                            <div class="product">
                                <div class="product-top">
                                    <Image width="1024" height="1024" alt="game-img" class="product-image" src="/assets/restless-soul.jpg" />
                                    <div class="product-name">
                                        <p>Game name here</p>
                                    </div>
                                </div>
                                <div class="product-bottom">
                                    <p class="product-prices">
                                        <p class="price"><span class="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                    </p>
                                    <div class="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                                </div>
                            </div>
                            <div class="product">
                                <div class="product-top">
                                    <Image width="1024" height="1024" alt="game-img" class="product-image" src="/assets/shadowofthetombraiderdefinitiveedition.jpg"/>

                                    <div class="product-name">
                                        <p>Game name here</p>
                                    </div>
                                </div>
                                <div class="product-bottom">
                                    <p class="product-prices">
                                        <p class="price"><span class="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                    </p>
                                    <div class="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                                </div>
                            </div>
                            <div class="product">
                                <div class="product-top">
                                    <Image width="1024" height="1024" alt="game-img" class="product-image" src="/assets/spirit-of-the-north.jpg" />
                                    <div class="product-name">
                                        <p>Game name here</p>
                                    </div>
                                </div>
                                <div class="product-bottom">
                                    <p class="product-prices">
                                        <p class="price"><span class="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                    </p>
                                    <div class="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                                </div>
                            </div>
                            <div class="product">
                                <div class="product-top">
                                    <Image width="1024" height="1024" alt="game-img" class="product-image" src="/assets/gta-v.jpg" />
                                    <div class="product-name">
                                        <p>Game name here</p>
                                    </div>
                                </div>
                                <div class="product-bottom">
                                    <p class="product-prices">
                                        <p class="price"><span class="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                                    </p>
                                    <div class="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}