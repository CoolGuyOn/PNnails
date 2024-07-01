import Image from "next/image";
import { getXataClient } from "../../xata";
import Link from "next/link";

export default async function Home() {
  const xataClient = getXataClient();
  const bookings = await xataClient.db.Bookings.getMany();

  return (
    <>
      <main>
        <Image
          src="/—Pngtree—hand painted ms manicure nail_3844524.png"
          alt="PNnails Logo"
          width={200}
          height={1000}
          priority
        />
        {bookings.map((booking) => (
          <p key={booking.id}>{booking.name}</p>
        ))}
        <Link
              href="booking/view"
            >
              View bookings
            </Link>
      </main>
    </>
  );
}
