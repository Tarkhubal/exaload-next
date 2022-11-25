import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section class="main-content">
        <div id="container">
          <span id="text1"></span>
          <span id="text2"></span>
        </div>
        <svg id="filters">
          <defs>
            <filter id="threshold">
              <feColorMatrix in="SourceGraphic" type="matrix"
                values="1 0 0 0 0
									      0 1 0 0 0
							          0 0 1 0 0
				                0 0 0 255 -140"/>
            </filter>
          </defs>
        </svg>
        <Script src="/js/anim-text-flow.js"></Script>
      </section>
      <section className="home_page_content">
        <div className="home-arrow-1">
          <Image width="600" height="600" alt="arrow1" src="/assets/home-arrow-1.svg" />
        </div>
      </section>
    </>
  )
}