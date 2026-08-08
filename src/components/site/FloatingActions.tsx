import { Phone, MapPin, ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { branches, mapsUrl, school, whatsappLink } from "@/lib/school";

export function FloatingActions() {
  const mainBranch = branches[0];

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col gap-3">

      {/* Location */}

    <a
  href={mapsUrl(mainBranch?.mapQuery ?? "Paota Rajasthan")}
  target="_blank"
  rel="noreferrer"
  aria-label="School Location"
  className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
>
  <MapPin size={24} />
</a>

      {/* WhatsApp */}

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Call */}

      <a
        href={`tel:${school.phonePrimaryRaw}`}
        aria-label="Call School"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
      >
        <Phone size={24} />
      </a>

      {/* Scroll Top */}

      <button
        type="button"
        aria-label="Back to Top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
      >
        <ArrowUp size={22} />
      </button>

    </div>
  );
}