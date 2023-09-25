import Link from "next/link";
import Image from "next/image";
import Logo from "public/Logo.svg";

export default function Header() {
  return (
    <nav>
      <Image src={Logo} alt="logo" />
    </nav>
  );
}
