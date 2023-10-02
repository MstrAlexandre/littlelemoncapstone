// npx shadcn-ui@latest add form

"use client"

// import * as z from "zod"
const formSchema = z.object();









export default function Reservations() {
  return (
    <main>
      <section className="reservations text-center">
        <h1 className="subtitle text-white">Make A Reservation</h1>
        <h2 className="lead" >We can't wait to see you!</h2>
      </section>
      <section>
        <h1>Booking happens here</h1>
      </section>
    </main>
  );
}
