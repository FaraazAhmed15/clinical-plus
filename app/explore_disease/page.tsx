'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaLungs, FaEye, FaBrain, FaBone, FaStethoscope, FaTint } from 'react-icons/fa';

export default function DiseaseList() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="mx-auto mb-6 w-20 h-20 flex items-center justify-center rounded-full bg-blue-200 text-blue-700 shadow-md">
            <FaStethoscope className="text-4xl" />
          </div>

          <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
            Explore Diseases
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
            <strong>
              Curated insights into common and rare diseases — their causes, clinical features, and prevention.
            </strong>
          </p>
        </motion.div>

        {/* Grid of Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Cardiology */}
          <motion.div 
            whileHover={{ scale: 1.03 }} 
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 transition"
          >
            <div className="flex items-center gap-3 mb-4 text-blue-600">
              <FaHeartbeat className="text-3xl" />
              <h2 className="text-2xl font-semibold">Cardiology</h2>
            </div>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li><Link href="/specialties/cardiology/cad" className="hover:text-blue-600">Coronary Heart Disease</Link></li>
              <li><Link href="/hypertension" className="hover:text-blue-600">Hypertension</Link></li>
              <li><Link href="/specialties/cardiology/mi" className="hover:text-blue-600">Heart Attack</Link></li>
            </ul>
          </motion.div>

          {/* Pulmonology */}
          <motion.div 
            whileHover={{ scale: 1.03 }} 
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 transition"
          >
            <div className="flex items-center gap-3 mb-4 text-blue-600">
              <FaLungs className="text-3xl" />
              <h2 className="text-2xl font-semibold">Pulmonology</h2>
            </div>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li><Link href="/asthma" className="hover:text-blue-600">Asthma</Link></li>
              <li><Link href="/specialties/pulmonology/pneumonia" className="hover:text-blue-600">Pneumonia</Link></li>
              <li><Link href="/specialties/pulmonology/tuberculosis" className="hover:text-blue-600">Tuberculosis</Link></li>
            </ul>
          </motion.div>

          {/* Ophthalmology */}
          <motion.div 
            whileHover={{ scale: 1.03 }} 
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 transition"
          >
            <div className="flex items-center gap-3 mb-4 text-blue-600">
              <FaEye className="text-3xl" />
              <h2 className="text-2xl font-semibold">Ophthalmology</h2>
            </div>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li><Link href="/specialties/opthalmology/cataract" className="hover:text-blue-600">Cataract</Link></li>
              <li><Link href="/specialties/opthalmology/glaucoma" className="hover:text-blue-600">Glaucoma</Link></li>
              <li><Link href="/specialties/opthalmology/conjunctivitis" className="hover:text-blue-600">Conjunctivitis</Link></li>
            </ul>
          </motion.div>

          {/* Neurology */}
          <motion.div 
            whileHover={{ scale: 1.03 }} 
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 transition"
          >
            <div className="flex items-center gap-3 mb-4 text-blue-600">
              <FaBrain className="text-3xl" />
              <h2 className="text-2xl font-semibold">Neurology</h2>
            </div>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li><Link href="/specialties/neurology/epilepsy" className="hover:text-blue-600">Epilepsy</Link></li>
              <li><Link href="/specialties/neurology/stroke" className="hover:text-blue-600">Stroke</Link></li>
              <li><Link href="/specialties/neurology/migraine" className="hover:text-blue-600">Migraine</Link></li>
            </ul>
          </motion.div>

          {/* Orthopedics */}
          <motion.div 
            whileHover={{ scale: 1.03 }} 
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 transition"
          >
            <div className="flex items-center gap-3 mb-4 text-blue-600">
              <FaBone className="text-3xl" />
              <h2 className="text-2xl font-semibold">Orthopedics</h2>
            </div>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li><Link href="/specialties/orthopedics/osteoarthritis" className="hover:text-blue-600">Osteoarthritis</Link></li>
              <li><Link href="/specialties/orthopedics/osteoporosis" className="hover:text-blue-600">Osteoporosis</Link></li>
              <li><Link href="/specialties/orthopedics/fractures" className="hover:text-blue-600">Fractures</Link></li>
            </ul>
          </motion.div>

          {/* Urology */}
          <motion.div 
            whileHover={{ scale: 1.03 }} 
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 transition"
          >
            <div className="flex items-center gap-3 mb-4 text-blue-600">
              <FaTint className="text-3xl" />
              <h2 className="text-2xl font-semibold">Urology</h2>
            </div>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li><Link href="/specialties/urology/kidney_stone" className="hover:text-blue-600">Kidney Stones</Link></li>
              <li><Link href="/specialties/urology/uti" className="hover:text-blue-600">Urinary Tract Infection (UTI)</Link></li>
              <li><Link href="/specialties/urology/prostrate" className="hover:text-blue-600">Prostate Enlargement</Link></li>
            </ul>
          </motion.div>
        </div>

    
        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 mt-10"
        >
          Built responsibly to promote learning, awareness, and ethical use of medical knowledge.
        </motion.p>
      </div>
    </main>
  );
}