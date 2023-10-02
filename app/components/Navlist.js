import Link from "next/link";

export default function Navlist() {
  return (
    <>
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
      </>
  )
}
