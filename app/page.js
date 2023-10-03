import Image from "next/image";
import Bruchetta from "public/bruchetta.svg";
import Macaroni from "public/macaroni.jpg";
import LemonDessert from "public/lemon dessert.jpg";
import GreekSalad from "public/greek salad.jpg";
import PicFront from "public/vegetable_salad.jpg";
import PicBack from "public/restaurant.jpg";
import U1 from "public/2.jpeg";
import U2 from "public/28.jpeg";
import U3 from "public/34.jpeg";
import U4 from "public/68.jpeg";
import U5 from "public/91.jpeg";
import U6 from "public/92.jpeg";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main>
      <section className="hero flex flex-wrap">
        <div className="heroContent">
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
            src={Macaroni}
            alt="A Macaroni dish, covered with melted cheese"
            id="heropic"
            className="max-h-96 w-auto"
          />
        </div>
      </section>
      <section className="highlights">
        <Card className="card">
          <Image
            className="cardImage w-full"
            src={Bruchetta}
            alt="Bruschetta"
          />
          <CardHeader>
            <CardTitle className="text-center">Bruschetta</CardTitle>
          </CardHeader>
          <CardContent className="cardContent">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </CardContent>
          <CardFooter>
            <button className="mt-4"> Order for Delivery</button>
          </CardFooter>
        </Card>

        <Card className="card">
          <Image
            className="cardImage w-full"
            src={LemonDessert}
            alt="A Sweet Lemon Dessert"
            id="lemon"
          />
          <CardHeader>
            <CardTitle className="text-center">Lemon Dessert</CardTitle>
          </CardHeader>
          <CardContent className="cardContent">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </CardContent>
          <CardFooter>
            <button className="mt-4"> Order for Delivery</button>
          </CardFooter>
        </Card>
        <Card className="card">
          <Image
            className="cardImage w-full max-h-40"
            src={GreekSalad}
            alt="A Greek Salad"
          />
          <CardHeader>
            <CardTitle className="text-center">Greek Salad</CardTitle>
          </CardHeader>
          <CardContent className="cardContent">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </CardContent>
          <CardFooter>
            <button className="mt-4"> Order for Delivery</button>
          </CardFooter>
        </Card>
      </section>
      <section className="reviewHeading">
        <h2 className="subtitle">Testimonials</h2>
        <p>What our customers are saying!</p>
      </section>
      <section className="testimonials grid grid-cols-3 gap-x-2 gap-y-4 justify-items-center pt-8 pb-8">
        <article className="reviews">
          <div className="imgContainer">
            <Image src={U1} alt="User Pic" className="userPic" />
          </div>
          <h5 className="reviewContent  lead">{"Say nice things!"}</h5>
          <p className="reviewer">-Someone Cool</p>
        </article>
        <article className="reviews">
          <div className="imgContainer">
            <Image src={U5} alt="User Pic" className="userPic" />
          </div>
          <h5 className="reviewContent lead">{"Food is fuel for survival!"}</h5>
          <p className="reviewer">-Human Being</p>
        </article>
        <article className="reviews">
          <div className="imgContainer">
            <Image src={U4} alt="User Pic" className="userPic" />
          </div>
          <h5 className="reviewContent lead">{"Me likey!"}</h5>
          <p className="reviewer">-Adult Person</p>
        </article>
        <article className="reviews">
          <div className="imgContainer">
            <Image src={U3} alt="User Pic" className="userPic" />
          </div>
          <h5 className="reviewContent lead">
            {"When you're here, it's like we're related"}
          </h5>
          <p className="reviewer">-Beard Face</p>
        </article>
        <article className="reviews">
          <div className="imgContainer">
            <Image src={U2} alt="User Pic" className="userPic" />
          </div>
          <h5 className="reviewContent lead">
            {"Now am become death, destroyer of worlds."}
          </h5>
          <p className="reviewer">-Jenny</p>
        </article>
        <article className="reviews">
          <div className="imgContainer">
            <Image src={U6} alt="User Pic" className="userPic" />
          </div>
          <h5 className="reviewContent lead">{"Lemonaaddee!!"}</h5>
          <p className="reviewer">-Fish</p>
        </article>
      </section>
      <section className="about grid grid-cols-2 max-h-128">
        <div className="aboutText">
          <h2 className="subtitle">About Us</h2>
          <p>
            So this place was concocted by two brothers. They're super
            passionate about food and wanted to bring the freshest Mediterranean
            food to the masses.
          </p>
        </div>

        <div>
          <div className="pl-6">
            <Image src={PicFront} alt="Our Founders" id="front" className="rounded-md w-9/12 z-10 relative shadow-mdi lg:w-11/12 md:w-full translate-x-[80px] lg:translate-x-[0px] md:translate-y-[70px]
            md:-translate-x-[100px]  lg:-translate-y-[10px"/>
            <Image src={PicBack} alt="Our Founders" id="back" className="lg:-translate-x-[180px] md:-translate-x-[200px]  lg:-translate-y-[80px] md:w-full md:translate-y-[30px] -translate-y-[20px] rounded-md lg:w-11/12 w-9/12 relative shadow-md"/>
          </div>
        </div>
      </section>
    </main>
  );
}
