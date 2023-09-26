import Image from "next/image";
import Restaurant from "public/restaurant.jpg";

export default function Home() {
  return (
    <main>
      <div className="hero">
        <div>
          <h3 className="lead">Little Lemon</h3>
          <p>Chicago</p>
        </div>
        <div>
          <Image
            src={Restaurant}
            alt="Inside the Restaurant"
            width={300}
            height={300}
            id="heropic"
          />
        </div>
      </div>
      <h1>Hello World, this will soon be the home page content</h1>
    </main>
  );
}
