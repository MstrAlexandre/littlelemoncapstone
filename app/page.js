import Image from "next/image";
import Bruchetta from "public/bruchetta.svg";
import RestaurantFood from "public/restauranfood.jpg";
import LemonDessert from "public/lemon dessert.jpg";
import GreekSalad from "public/greek salad.jpg";
import UserPic from "public/user.svg";

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
          <div className="cardContent">
            <h4 className="cardTitle text-center">Bruschetta</h4>
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
          <div className="cardContent">
            <h4 className="cardTitle text-center max-w-84">Lemon Dessert</h4>
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
          <div className="cardContent">
            <h4 className="cardTitle text-center max-w-84">Greek Salad</h4>
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
      <section className="testimonials grid grid-cols-3 gap-x-2 place-content-center gap-y-4 justify-center content-center">
        <article className="reviews">
        <div className="imgContainer">
          <Image src={UserPic} alt="User Pic" className="userPic"/>
          </div>
          <h5 className="reviewContent  lead">"Say nice things!"</h5>
          <p className="reviewer">-Someone Cool</p>
        </article>
        <article className="reviews">
        <div className="imgContainer">
          <Image src={UserPic} alt="User Pic" className="userPic"/>
          </div>
          <h5 className="reviewContent lead">"Food is good!"</h5>
          <p className="reviewer">-Human Being</p>
        </article>
        <article className="reviews">
        <div className="imgContainer">
          <Image src={UserPic} alt="User Pic" className="userPic"/>
          </div>
          <h5 className="reviewContent lead">"Me likey!"</h5>
          <p className="reviewer">-Adult Person</p>
        </article>
        <article className="reviews">
        <div className="imgContainer">
          <Image src={UserPic} alt="User Pic" className="userPic"/>
          </div>
          <h5 className="reviewContent lead">"When you're here, it's like we're related"</h5>
          <p className="reviewer">-Beard Face</p>
        </article>
        <article className="reviews">
          <div className="imgContainer">
          <Image src={UserPic} alt="User Pic" className="userPic"/>
          </div>
          <h5 className="reviewContent lead">"Now am become death, destroyer of worlds."</h5>
          <p className="reviewer">-Cthulhu</p>
        </article>
        <article className="reviews">
        <div className="imgContainer">
          <Image src={UserPic} alt="User Pic" className="userPic"/>
          </div>
          <h5 className="reviewContent lead">"Lemonaaddee!!"</h5>
          <p className="reviewer">-Fish</p>
        </article>
      </section>
      <section className="about">The About Section</section>
    </main>
  );
}
