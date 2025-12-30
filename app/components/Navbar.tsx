'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  FaBars,
  FaTimes,
  FaHeartbeat,
  FaNewspaper,
  FaBaby,
  FaHandsWash,
  FaEye,
  FaBookMedical,
} from 'react-icons/fa';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [articles, setArticles] = useState(false);
  const [hygiene, setHygiene] = useState(false);
  const [sense, setSense] = useState(false);
  const [repro, setRepro] = useState(false);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
  }, [open]);

  return (
    <>
      {/* TOP NAVBAR */}
      <header className="fixed top-0 z-50 w-full h-20 bg-[#EEF5FF] border-b border-slate-200">
        <div className="flex h-full items-center justify-between px-4">

          {/* LOGO */}
          <Link href="/" className="text-2xl font-bold text-[#0F2A44]">
            Clinical<span className="text-blue-600">++</span>
          </Link>

          {/* MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-3 bg-[#7A1F2B] text-white px-4 py-2 rounded-lg shadow"
          >
            <span className="font-semibold tracking-wide">MENU</span>
            <FaBars className="text-xl" />
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDE MENU (RIGHT) */}
      {open && (
        <aside className="fixed top-0 right-0 h-full w-80 bg-[#EEF5FF] z-50 shadow-xl p-6 overflow-y-auto">

          {/* CLOSE */}
          <button
            onClick={() => setOpen(false)}
            className="text-2xl text-[#0F2A44] mb-8"
          >
            <FaTimes />
          </button>

          {/* NAV LINKS */}
          <nav className="flex flex-col gap-6 text-[17px] font-medium text-[#0F2A44]">

            {/* MEDICINES */}
            <Link
              href="/medicines"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 hover:text-[#7A1F2B]"
            >
              <FaHeartbeat className="text-blue-600" />
              Medicines
            </Link>

            {/* ARTICLES */}
            <button
              onClick={() => setArticles(!articles)}
              className={`flex items-center justify-between ${
                articles && 'text-[#7A1F2B]'
              }`}
            >
              <span className="flex items-center gap-3">
                <FaNewspaper className="text-blue-600" />
                Articles
              </span>
              {articles ? '▲' : '▼'}
            </button>

            {articles && (
              <div className="ml-7 flex flex-col gap-3 text-[15px]">
                <Link href="/articles/latest_news" onClick={() => setOpen(false)}>
                  Latest News
                </Link>
                <Link href="/articles/research_articles" onClick={() => setOpen(false)}>
                  Research Articles
                </Link>
              </div>
            )}

            {/* BREASTFEEDING */}
            <Link
              href="/breastfeeding"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 hover:text-[#7A1F2B]"
            >
              <FaBaby className="text-pink-500" />
              Breastfeeding
            </Link>

            {/* HYGIENE */}
            <button
              onClick={() => setHygiene(!hygiene)}
              className={`flex items-center justify-between ${
                hygiene && 'text-[#7A1F2B]'
              }`}
            >
              <span className="flex items-center gap-3">
                <FaHandsWash className="text-green-600" />
                Hygiene
              </span>
              {hygiene ? '▲' : '▼'}
            </button>

            {hygiene && (
              <div className="ml-7 flex flex-col gap-3 text-[15px]">
                <Link href="/hygiene/personal_hygiene">Personal Hygiene</Link>
                <Link href="/hygiene/sexual_hygiene">Sexual Hygiene</Link>
              </div>
            )}

            {/* SENSE ORGANS */}
            <button
              onClick={() => setSense(!sense)}
              className={`flex items-center justify-between ${
                sense && 'text-[#7A1F2B]'
              }`}
            >
              <span className="flex items-center gap-3">
                <FaEye className="text-indigo-600" />
                Sense Organs
              </span>
              {sense ? '▲' : '▼'}
            </button>

            {sense && (
              <div className="ml-7 flex flex-col gap-3 text-[15px]">
                <Link href="/sense_organs/eye">Eye (Vision)</Link>
                <Link href="/sense_organs/ear">Ear (Hearing)</Link>
                <Link href="/sense_organs/nose">Nose (Smell)</Link>
                <Link href="/sense_organs/tongue">Tongue (Taste)</Link>
                <Link href="/sense_organs/skin">Skin (Touch)</Link>
              </div>
            )}

            {/* REPRODUCTIVE HEALTH */}
            <button
              onClick={() => setRepro(!repro)}
              className={`flex items-center justify-between ${
                repro && 'text-[#7A1F2B]'
              }`}
            >
              <span className="flex items-center gap-3">
                <FaBookMedical className="text-red-500" />
                Reproductive Health
              </span>
              {repro ? '▲' : '▼'}
            </button>

            {repro && (
              <div className="ml-7 flex flex-col gap-3 text-[15px]">
                <Link href="/reproductive_health/female_repro_health">Female Reproductive System</Link>
                <Link href="/reproductive_health/male_repro_health">Male Reproductive System</Link>
              </div>
            )}

          </nav>
        </aside>
      )}
    </>
  );
}