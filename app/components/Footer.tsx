'use client';

import Link from 'next/link';
import {
  FaLink,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-100 border-t mt-20">

      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-10 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* ===== QUICK LINKS ===== */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <FaLink className="text-blue-600" />
              <Link href="/specialties/gynaecology/condom"
               className="transition duration-300 hover:text-blue-600 hover:translate-x-1">Condom
              </Link>
               

            </li>
            <li className="flex items-center gap-2">
              <FaLink className="text-blue-600" />
              <Link href="/specialties/general_structure/body_structure"
               className="transition duration-300 hover:text-blue-600 hover:translate-x-1">Human Body Structure</Link>
            </li>
            <li className="flex items-center gap-2">
              <FaLink className="text-blue-600" />
              <Link href="/specialties/general_structure/muscle"
               className="transition duration-300 hover:text-blue-600 hover:translate-x-1">Muscle</Link>
            </li>
            <li className="flex items-center gap-2">
              <FaLink className="text-blue-600" />
              <Link href="/specialties/general_structure/nerves"
               className="transition duration-300 hover:text-blue-600 hover:translate-x-1">Nerves</Link>
            </li>
            <li className="flex items-center gap-2">
              <FaLink className="text-blue-600" />
              <Link href="/specialties/gynaecology/ovarian_cyst"
               className="transition duration-300 hover:text-blue-600 hover:translate-x-1">Ovarian Cyst</Link>
            </li>
            <li className="flex items-center gap-2">
              <FaLink className="text-blue-600" />
              <Link href="/specialties/gynaecology/pcos"
               className="transition duration-300 hover:text-blue-600 hover:translate-x-1">PCOS</Link>
              </li>
          </ul>
        </div>

        {/* ===== CONTACT ===== */}
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <p className="flex items-center gap-2 text-gray-700">
            <FaPhone className="text-blue-600" />
            9076547854
          </p>
          <p className="flex items-center gap-2 text-gray-700 mt-2">
            <FaEnvelope className="text-blue-600" />
            clinicaplus@gmail.com 
          </p>
        </div>
        {/* ===== MAP (ALL MAJOR HOSPITALS) ===== */}
<div>
  <iframe
    className="w-full h-40 rounded-lg border"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps?q=major+hospitals+in+Bangalore&output=embed"
  />
</div>

        

      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="text-center text-sm bg-blue-300 py-4 border-t">
        © 2025 Clinical++ | All Rights Reserved
      </div>

    </footer>
  );
}