"use client";

import { Content } from "@prismicio/client";
import React, { useEffect, useRef } from "react";
import { RxCross1 } from "react-icons/rx";
import { SubmitButton } from "./Button";
import { sendApplication } from "@/app/actions";
import toast from "react-hot-toast";

type CareerFormModalProps = {
  post: Content.CareerDocument;
};

const initialState = {
  success: false,
};

const CareerFormModal = ({ post }: CareerFormModalProps) => {
  const modal = useRef<HTMLDialogElement | null>(null);

  return (
    <>
      <button
        className="text-uppercase btn-primary mt-4 block px-6 py-2 font-bold text-white transition"
        onClick={() => {
          modal.current?.showModal();
        }}
      >
        Apply Now
      </button>
      <dialog
        className="modal rounded-md p-6 md:p-10 lg:p-12"
        id="modal"
        ref={modal}
      >
        <div
          className="absolute right-2 top-2 cursor-pointer rounded-xl border p-2"
          onClick={() => {
            modal.current?.close();
          }}
        >
          <RxCross1 />
        </div>
        <h2 className="text-[#165679]">Apply Now</h2>
        <h3 className="mb-1">{post.data.title}</h3>
        <h4 className="mb-6">{post.data.department}</h4>
        <form
          action={async (formData) => {
            const response = await sendApplication(formData, post.data.title);
            if (response.error) {
              toast.error(response.message);
            } else {
              toast.success(response.message);
              modal.current?.close();
            }
          }}
          className="flex flex-col"
          method="dialog"
        >
          <div className="mb-2 flex flex-col">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              required
            />
          </div>
          <div className="mb-2 flex flex-col">
            <label htmlFor="phonenumber" className="font-semibold">
              Phone Number
            </label>
            <input
              type="text"
              id="phonenumber"
              name="phonenumber"
              className="form-input"
              required
            />
          </div>
          <div className="mb-2 flex flex-col">
            <label htmlFor="resume" className="font-semibold">
              Resume
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              placeholder="resume"
              className="form-input"
              required
            />
          </div>
          <SubmitButton />
        </form>
      </dialog>
    </>
  );
};

export default CareerFormModal;
