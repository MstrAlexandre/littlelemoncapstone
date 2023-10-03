import Image from "next/image";
import LogoMono from "public/logo-vertical-white.png";
import Navlist from "./Navlist";
import fb from "public/fb_icon.svg";
import ig from "public/ig_icon.svg";
import twx from "public/twx_icon.svg";

export default function Footer() {
  return (
    <footer>
      <Image src={LogoMono} alt="Monochrome Logo" width={100} height={100} />
      <section className="bottomNav">
        <ul>
          <Navlist />
        </ul>
      </section>
      <section className="contact">
        <p>
          101 Address Lane, <br />
          Somewhere, CA 12345 <br />
          info@littlelemon.com <br />
          (888)-867-5309 <br />
        </p>
      </section>
      <section className="social">
        <figure id="fb">
          <Image src={fb} alt="Facebook" className="socialpic"/>
          <figcaption>Facebook</figcaption>
        </figure>
        <figure id="ig">
          <Image src={ig} alt="Instagram" className="socialpic"/>
          <figcaption>Instagram</figcaption>
        </figure>
        <figure id="twx">
          <Image src={twx} alt="Twitter"  className="socialpic"/>
          <figcaption>Twitter</figcaption>
        </figure>
      </section>
    </footer>
  );
}
