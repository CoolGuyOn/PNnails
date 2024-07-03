"use client";

import { useState, useEffect } from "react";
import createBooking from "../components/CreateBooking";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import FormToast from "../components/FormToast";

function Booking() {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target as HTMLFormElement);
    const res = await createBooking(formData);
    setIsSubmitting(false);
    setMessage(res.message);
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
        setMessage("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <>
      {showToast && (
        <div className="absolute bottom-0">
          <FormToast message={message} onClose={() => setShowToast(false)} />
        </div>
      )}
      <section className="flex items-center h-screen max-w-full m-auto container ml-64">
        <div className="w-96 absolute ml-56 mt-56 left-0 top-0">
          <form onSubmit={onSubmit} name="bookingForm">
            <FormInput />
            <FormButton isSubmitting={isSubmitting} />
          </form>
        </div>
        <div className="max-w-md absolute top-0 right-32 mr-96 mt-56">
          <p>Bookings:</p>
        </div>
      </section>
    </>
  );
}

export default Booking;
