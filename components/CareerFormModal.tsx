"use client";

import { Content } from "@prismicio/client";
import React, { useEffect, useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import CareerForm from "./CareerForm";

type CareerFormModalProps = {
  post: Content.CareerDocument;
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
        <h2>Apply Now</h2>
        <h2 className="mb-6">{post.data.title}</h2>
        <CareerForm postName={post.data.title} />
      </dialog>
    </>
  );
};

export default CareerFormModal;
