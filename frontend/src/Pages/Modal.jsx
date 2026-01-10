import React, { useEffect } from "react";

const Modal = ({ open, onClose, children }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (open) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
      role="dialog"
      aria-modal="true"
      aria-label="Appointment booking dialog"
    >
      <div className="bg-white rounded-xl shadow-xl max-h-[90vh] overflow-y-auto w-[95%] md:w-[60%] p-4 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close appointment form"
          className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-md"
        >
          Close
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
