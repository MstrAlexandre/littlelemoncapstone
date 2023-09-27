import Image from "next/image";
import Restaurant from "public/restaurant.jpg";

export default function Home() {
  return (
    <main>
      <section className="hero">
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
      </section>
      <section className="highlights">
        <h1>Here we will show off some menu items</h1>
      </section>
      <section className="testimonials">Testimonials go here</section>
      <section className="about">The About Section</section>
    </main>
  );
}
