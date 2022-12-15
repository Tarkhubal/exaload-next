import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import React from 'react';
import { useRouter } from 'next/router';
import exp from "constants";

const ItemList = (props) => {
    const { items } = props;
    const router = useRouter();

    function handleClick(id) {
        router.push(`/items/${id}`);
    }

    return (
        <div className="product-carousel">
            {
                items.map((item) => (
                    <div className="product" key={item.id}>
                        <div className="product-top">
                            <Image width="640" height="854" alt="game-img" className="product-image" src={item.link} />
                            <div className="product-name">
                                <p>{item.name}</p>
                            </div>
                        </div>
                        <div className="product-bottom">
                            <p className="product-prices">
                                <p className="price"><span className="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
                            </p>
                            <div className="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
                        </div>
                    </div>
                ))
            }
        </div>
        // <div className="product">
        //     <div className="product-top">
        //         <Image width="1024" height="1024" alt="game-img" className="product-image" src="/assets/spirit-of-the-north.jpg" />
        //         <div className="product-name">
        //             <p>Game name here</p>
        //         </div>
        //     </div>
        //     <div className="product-bottom">
        //         <p className="product-prices">
        //             <p className="price"><span className="reduction">-100 %</span>0<sup>00</sup>€ - Gratuit !</p>
        //         </p>
        //         <div className="btn"><a href="https://exaload.glitch.me/games/information">Acheter maintenant !</a></div>
        //     </div>
        // </div>
    );
};

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/data/items.json');
    const items = await res.json();

    return {
        props: {
            items,
        },
    };
}

export default ItemList;