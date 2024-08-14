import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import "./WhatsappBtn.scss";
import { BiPhone } from "react-icons/bi";
const WhatsappBtn = () => {
  return (
    <>
      <a
        className="whatsapp-btn text-white"
        href="https://wa.me/00966565861697"
        target="_blank"
      >
        <BsWhatsapp />
      </a>
      {/* <a
        className="callus-btn bg-pcolor text-white"
        href="tel:00966565861697"
        target="_blank"
      >
        <BiPhone />
      </a> */}
    </>
  );
};

export default WhatsappBtn;
