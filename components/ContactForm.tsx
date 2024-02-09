"use client";

import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form action="" className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="border-t-1 p-4 shadow-md"
        />
        <input
          type="email"
          placeholder="Email"
          className="border-t-1 p-4 shadow-md"
        />
        <textarea
          name=""
          id=""
          rows={10}
          placeholder="Message"
          className="border-t-1 p-5 shadow-md"
        ></textarea>
        <button
          type="submit"
          className="bg-accent w-fit px-6 py-2 text-white transition hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
