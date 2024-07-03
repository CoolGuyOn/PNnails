"use client";
import React from 'react'

const FormInput = () => {
  return (
    <>
        <div className="relative z-0 w-full mb-5 group">
        <select
          name="appointmentType"
          id="appointmentType"
          className="block py-2.5 px-0 w-full text-sm text-primary bg-transparent border-0 border-b-2 border-primary appearance-none dark:secondary dark:primary dark:focus:border-neutral focus:outline-none focus:ring-0 focus:border-neutral peer"
          required
        >
          <option value="" disabled>
            Select Appointment Type
          </option>
          <option value="Infill">Infill</option>
          <option value="Fullset">Fullset</option>
          <option value="Pedicure">Pedicure</option>
          <option value="Manicure">Manicure</option>
        </select>
        <label
          htmlFor="appointmentType"
          className="peer-focus:font-medium absolute text-sm text-accent dark:accent duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-neutral peer-focus:dark:text-neutral peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Appointment Type
        </label>
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="date"
          name="date"
          id="date"
          className="block py-2.5 px-0 w-full text-sm text-primary bg-transparent border-0 border-b-2 border-secondary appearance-none dark:secondary dark:border-primary dark:focus:border-neutral focus:outline-none focus:ring-0 focus:border-neutral peer"
          required
        />
        <label
          htmlFor="date"
          className="peer-focus:font-medium absolute text-sm text-accent dark:text-accent duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-neutral peer-focus:dark:text-neutral peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Date
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="time"
          name="time"
          id="time"
          className="block py-2.5 px-0 w-full text-sm text-primary bg-transparent border-0 border-b-2 border-secondary appearance-none dark:secondary dark:border-primary dark:focus:border-neutral focus:outline-none focus:ring-0 focus:border-neutral peer"
          required
        />
        <label
          htmlFor="time"
          className="peer-focus:font-medium absolute text-sm text-accent dark:text-accent duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-neutral peer-focus:dark:text-neutral peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Time
        </label>
      </div>
    </>
  )
}

export default FormInput