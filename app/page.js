import Image from "next/image";
import Bruchetta from "public/bruchetta.svg";
import RestaurantFood from "public/restauranfood.jpg";
import LemonDessert from "public/lemon dessert.jpg";
import GreekSalad from "public/greek salad.jpg";

export default function Home() {
  return (
    <main>
      <section className="hero flex flex-wrap">
        <div>
          <h2 className="subtitle pt-10">Little Lemon</h2>
          <h3 className="lead">Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="mt-12 mb-12">Reserve a Table</button>
        </div>
        <div>
          <Image
            src={RestaurantFood}
            alt="A chef carrying a plate of food"
            id="heropic"
            className="max-h-96 w-auto"
          />
        </div>
      </section>
      <section className="highlights">
        <article className="card">
          <Image className="cardImage" src={Bruchetta} alt="Bruschetta" />
          <div class="cardContent">
            <h4 className="cardTitle">Bruschetta</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="mt-4"> Order for Delivery</button>
          </div>
        </article>
        <article className="card">
          <Image className="cardImage" src={LemonDessert} alt="Lemon Dessert" />
          <div class="cardContent">
            <h4 className="cardTitle">Lemon Dessert</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="mt-4"> Order for Delivery</button>
          </div>
        </article>
        <article className="card">
          <Image className="cardImage" src={GreekSalad} alt="Greek Salad" />
          <div class="cardContent">
            <h4 className="cardTitle">Greek Salad</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="mt-4"> Order for Delivery</button>
          </div>
        </article>
      </section>
      <section className="testimonials">Testimonials go here</section>
      <section className="about">The About Section</section>
    </main>
  );
}
