import React from "react";

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div className="fixed top-10 inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-xl max-h-[90vh] overflow-y-auto w-[95%] md:w-[60%] p-4 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
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
