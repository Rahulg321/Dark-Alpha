"use client";

import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form action="" className="flex flex-col gap-2">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-white" id="name-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            aria-labelledby="name-label"
            placeholder=""
            className="border-t-1 rounded-md bg-slate-500 p-4 text-xl font-semibold text-white"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-white" id="email-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            aria-labelledby="email-label"
            placeholder=""
            className="border-t-1 rounded-md bg-slate-500 p-4 text-xl font-semibold text-white"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="phoneNumber"
            className="text-white"
            id="phoneNumber-label"
          >
            Phone Number
          </label>
          <input
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            aria-labelledby="phoneNumber-label"
            placeholder=""
            className="border-t-1 rounded-md bg-slate-500 p-4 text-xl font-semibold text-white"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="comments" className="text-white" id="comment-label">
            Additional Comments
          </label>
          <textarea
            name="comments"
            id="comments"
            rows={10}
            aria-labelledby="comment-label"
            className="border-t-1 rounded-md bg-slate-500 p-4 text-xl font-semibold text-white"
          ></textarea>
        </div>
        <button
          aria-label="submit contact form"
          type="submit"
          className="w-fit bg-accent px-6 py-2 text-white transition hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
