import Link from "next/link";
import Image from "next/image";
import LogoMono from "public/logo-vertical-white.png";

export default function Footer() {
  return (
    <footer>
      <Image src={LogoMono} alt="Monochrome Logo" width={100} height={100} />
    </footer>
  );
}
