import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <nav>
      <Image src="/public/Logo.svg" alt="logo" width={100} height={100} />
    </nav>
  );
}
