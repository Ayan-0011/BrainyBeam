import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import './WhatsApp.css'

const Whatsapp_btn = () => {
  return (
    <a
      href=""
      className="whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      title="Contact us on WhatsApp" >

      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
  );
};

export default Whatsapp_btn;