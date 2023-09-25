import Link from "next/link";
import Image from "next/image";
import Logo from "public/Logo.svg";

export default function Header() {
  return (
    <nav>
      <Image src={Logo} alt="logo" />
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Menu</Link>
        </li>
        <li>
          <Link href="/reservations">Reservations</Link>
        </li>
        <li>
          <Link href="/">Order Online</Link>
        </li>
        <li>
          <Link href="/">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
