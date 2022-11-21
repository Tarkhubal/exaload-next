import Script from "next/script";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section>
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
      </section>
      <section class="home_page_content">
        <Link href="/pricing">Test</Link>
      </section>
    </>
  )
}