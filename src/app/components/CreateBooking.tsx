"use server";
import { currentUser } from "@clerk/nextjs/server";
import { getXataClient } from "../../../xata";
import { revalidatePath } from 'next/cache';

async function createBooking(formData: FormData) {
  try {
    const user = await currentUser();
    const xataClient = getXataClient();
    const username = user?.username;
    const appointmentType = formData.get("appointmentType")?.toString();
    const date = formData.get("date")?.toString();
    const time = formData.get("time")?.toString();

    if (!appointmentType || !date || !time) {
      throw new Error("Missing required fields");
    }

    const dateTime = new Date(`${date}T${time}:00.000Z`);

    const now = new Date();
    if (dateTime <= now) {
      throw new Error("Appointment date and time must be in the future");
    }

    const day = dateTime.getUTCDay();
    const hours = dateTime.getUTCHours();
    const minutes = dateTime.getUTCMinutes();
    if (day === 0 || hours < 9 || hours > 17 || (hours === 17 && minutes > 45)) {
      throw new Error("Appointments can only be scheduled from 9:30 AM to 6 PM, Monday to Saturday");
    }

    if (hours === 17 && minutes > 0 || hours > 17) {
      throw new Error("Please enquire at {insert phone number} for bookings after 5 PM");
    }

    if (minutes % 15 !== 0) {
      throw new Error("Bookings can only be made at 15-minute intervals");
    }

    await xataClient.db.Bookings.create({
      name: username,
      appointmentType,
      DateTime: dateTime.toISOString(),
    });

    revalidatePath('/booking');

    return {
      message: "Success!",
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "There was an error";
    return {
      message: errorMessage,
    };
  }
}

export default createBooking;
