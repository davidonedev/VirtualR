import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://wa.me/seu-numero-aqui" // Substitua pelo seu número
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center 
        w-14 h-14 bg-green-500 text-white rounded-full shadow-lg 
        transition-all duration-300 
        ${hovered ? "scale-110 bg-green-600" : "scale-100"} 
        active:scale-90`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
