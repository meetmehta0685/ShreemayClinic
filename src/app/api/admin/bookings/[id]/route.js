import { NextResponse } from "next/server";

import { getSignedInUser, isNeonAuthConfigured } from "@/lib/neon/auth-server";
import { getNeonDatabase, isNeonDatabaseConfigured } from "@/lib/neon/database";
import { getClinicStaff } from "@/lib/neon/staff";

export const dynamic = "force-dynamic";

export async function PATCH(_request, { params }) {
  if (!isNeonAuthConfigured() || !isNeonDatabaseConfigured()) {
    return NextResponse.json({ error: "The clinic dashboard is not configured." }, { status: 503 });
  }

  const { id } = await params;
  if (!/^[0-9a-f-]{36}$/i.test(id)) {
    return NextResponse.json({ error: "Choose a valid appointment." }, { status: 400 });
  }

  const user = await getSignedInUser();
  if (!user) {
    return NextResponse.json({ error: "Sign in to update appointments." }, { status: 401 });
  }

  const database = getNeonDatabase();
  try {
    const staff = await getClinicStaff(database, user.id);
    if (!staff) {
      return NextResponse.json({ error: "This account does not have clinic dashboard access." }, { status: 403 });
    }
  } catch {
    return NextResponse.json({ error: "We could not cancel this appointment." }, { status: 500 });
  }

  let bookings;
  try {
    bookings = await database.query(
      "update public.consultation_bookings set status = 'cancelled' where id = $1::uuid and status = 'confirmed' returning id",
      [id]
    );
  } catch {
    return NextResponse.json({ error: "We could not cancel this appointment." }, { status: 500 });
  }
  const booking = bookings[0];
  if (!booking) {
    return NextResponse.json({ error: "This appointment was already cancelled or could not be found." }, { status: 409 });
  }

  return NextResponse.json({ cancelled: true, id: booking.id });
}
