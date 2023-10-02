import Link from "next/link";
import Image from "next/image";
import Logo from "public/Logo.svg";
import Navlist from "./Navlist";

export default function Header() {
  return (
    <div className="header px-96 py-8 flex justify-evenly">
      <div>
        <Image src={Logo} alt="logo" />
      </div>
      <ul className="flex place-content-evenly gap-4 items-center">
        <Navlist />
      </ul>
    </div>
  );
}
