'use client';

import { useEffect, useState } from 'react';
import { FaStethoscope, FaInfoCircle } from 'react-icons/fa';

export default function PopupModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      
      {/* Modal Box */}
      <div className="relative w-[90%] max-w-lg rounded-2xl p-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 shadow-2xl">
        
        {/* Inner Content of popup */}
        <div className="relative bg-white rounded-2xl p-6 text-center">

          {/* Closing of the button */}
          <button
            onClick={() => setShow(false)}
            className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
          >
            ✕
          </button>

          {/* icon of the sethoscope */}
          <div className="mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <FaStethoscope className="text-2xl" />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-blue-700 mb-2">
            Welcome to Clinical++
          </h2>

          {/* Informating pf popup */}
          <div className="flex items-start gap-2 text-left bg-blue-50 p-4 rounded-xl mt-4">
            <FaInfoCircle className="text-blue-600 mt-1" />
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>Note:</strong> This website is strictly for educational purposes only.
              It does not prescribe or suggest diseases based on symptoms, nor does it
              recommend medicines or treatments.</p>
          </div>

          {/* footer of text */}
          <p className="mt-4 text-sm text-gray-500">
            Please consult a qualified healthcare professional for medical advice.
          </p>

          {/* Button */}
          <button
            onClick={() => setShow(false)}
            className="mt-6 px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            I Understand
          </button>

        </div>
      </div>
    </div>
  );
}