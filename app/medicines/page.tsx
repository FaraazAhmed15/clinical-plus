'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  FaArrowLeft,
  FaSearch,
  FaTimes,
  FaPills,
  FaInfoCircle,
} from 'react-icons/fa';
import { medicines, Medicine } from '../data/medicines';

export default function MedicinesPage() {
  const router = useRouter();

  // disclaimer
  const [accepted, setAccepted] = useState(false);
  const [checked, setChecked] = useState(false);

  // search
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Medicine | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = medicines.filter((med) =>
    med.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = () => {
    const found = medicines.find(
      (m) => m.name.toLowerCase() === query.toLowerCase()
    );
    setSelected(found || null);
    setShowSuggestions(false);
  };

  const handleClear = () => {
    setQuery('');
    setSelected(null);
    setShowSuggestions(false);
  };

  /* ================= DISCLAIMER ================= */
  if (!accepted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
        <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl">

          <div className="mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <FaPills className="text-2xl" />
          </div>

          <h2 className="text-xl font-bold text-blue-700 text-center mb-3">
            Medical Disclaimer
          </h2>

          <div className="bg-blue-50 p-4 rounded-xl flex gap-2">
            <FaInfoCircle className="text-blue-600 mt-1" />
            <p className="text-sm text-gray-700 leading-relaxed">
              This section is for <strong>educational purposes only</strong>.
              <br /><br />
              • We do <strong>not prescribe medicines</strong><br />
              • We do <strong>not suggest dosage</strong><br />
              • We do <strong>not diagnose diseases</strong><br />
              • Our medicines database is <strong>limited</strong>
            </p>
          </div>

          <label className="flex items-center gap-2 mt-4 text-sm text-gray-700">
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            I understand and agree
          </label>

          <div className="mt-5 flex flex-col gap-3">
            <button
              disabled={!checked}
              onClick={() => setAccepted(true)}
              className={`w-full py-2 rounded-lg text-white transition ${
                checked
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              Continue
            </button>

            <button
              onClick={() => router.push('/')}
              className="text-sm text-blue-600 underline"
            >
              Go back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ================= MAIN PAGE ================= */
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">

      {/* BACK */}
      <button
        onClick={() => router.push('/')}
        className="flex items-center gap-2 text-blue-700 mb-6"
      >
        <FaArrowLeft /> Back to Home
      </button>

      <h1 className="text-2xl font-bold text-[#0F2A44] mb-2">
        Search Medicines
      </h1>

      <p className="text-sm text-slate-600 mb-6">
        Type a medicine name to see its general use.
      </p>

      {/* SEARCH */}
      <div className="relative">
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
            setSelected(null);
          }}
          placeholder="Type medicine name..."
          className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

        {/* CLEAR (RED) */}
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-3 text-red-500 hover:text-red-700"
          >
            <FaTimes />
          </button>
        )}

        {/* SUGGESTIONS */}
        {showSuggestions && query && suggestions.length > 0 && (
          <ul className="absolute z-10 mt-1 w-full bg-white border border-slate-200 rounded-lg shadow">
            {suggestions.map((med) => (
              <li
                key={med.name}
                onClick={() => {
                  setQuery(med.name);
                  setSelected(med);
                  setShowSuggestions(false);
                }}
                className="px-4 py-2 cursor-pointer hover:bg-blue-50"
              >
                {med.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* BUTTONS */}
      <div className="mt-4 flex gap-3">
        <button
          onClick={handleSearch}
          className="flex items-center gap-2 bg-[#7A1F2B] text-white px-6 py-2 rounded-lg hover:opacity-90"
        >
          <FaSearch />
          Search
        </button>

        <button
          onClick={handleClear}
          className="px-6 py-2 rounded-lg border border-red-300 text-red-600 hover:bg-red-50"
        >
          Clear
        </button>
      </div>

      {/* RESULT */}
      {selected && (
        <div className="mt-8 bg-white border border-slate-200 rounded-xl p-6 shadow">
          <h2 className="text-lg font-semibold text-[#0F2A44]">
            {selected.name}
          </h2>
          <p className="text-sm text-slate-700 mt-2">
            {selected.uses}
          </p>
        </div>
      )}

      {/* NO RESULT */}
      {query && !selected && !showSuggestions && (
        <p className="mt-6 text-sm text-slate-500">
          No medicine found in our database.
        </p>
      )}

      <p className="mt-10 text-xs text-slate-500">
        This information is for educational purposes only.
      </p>
    </div>
  );
}