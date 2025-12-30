'use client';
import Link from 'next/link';

/* Importing Statements */
import { motion } from 'framer-motion';
import {
  FaBookMedical,
  FaMicroscope,
  FaShieldAlt,
  FaStethoscope,
  FaBrain,
  FaBolt,
  FaUserInjured,
  FaHandPaper,
  FaChild,
  FaWalking,
  FaBone,
  FaCrutch
 
} from 'react-icons/fa';

export default function Orthopedics() {
  return (
    <main className="min-h-screen bg-blue-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Heading of health page */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12" >
          <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <FaStethoscope className="text-3xl" />
          </div>

          <h1 className="text-4xl font-bold text-blue-700 mb-3">Orthopedics</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            <strong>Where bones find resilience and movement regains freedom</strong>
          </p>
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-10 space-y-10" >
          <h1 className="text-xl font-semibold text-gray-800">Introduction</h1>

          {/* About purpose */}
          <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
            <FaBookMedical className="text-blue-600 w-12 h-12 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                What is Department of Orthopedics?
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                         he Department of Orthopedics is the branch of medicine that focuses on the
                         <strong> diagnosis, treatment, prevention, and rehabilitation of disorders of
                         the musculoskeletal system </strong>which includes bones, joints, muscles,
                          ligaments, tendons, and the spine. </p>
            </div>
          </div>
          <h1 className="text-xl font-semibold text-gray-800">
  3. Cause‑Based Orthopedic Disorders
</h1>
<div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
<div className="overflow-x-auto mt-10">
  <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
    <thead className="bg-blue-100">
      <tr>
        <th className="border px-4 py-3 text-left">Cause Category</th>
        <th className="border px-4 py-3 text-left">Description</th>
        <th className="border px-4 py-3 text-left">Examples</th>
      </tr>
    </thead>
    <tbody className="bg-white text-gray-700">
      <tr>
        <td className="border px-4 py-3 font-medium">Traumatic</td>
        <td className="border px-4 py-3">Caused by accidents or injuries</td>
        <td className="border px-4 py-3">Fractures, dislocations, ligament tears</td>
      </tr>
      <tr>
        <td className="border px-4 py-3 font-medium">Degenerative</td>
        <td className="border px-4 py-3">Progressive wear and tear over time</td>
        <td className="border px-4 py-3">Osteoarthritis, degenerative disc disease</td>
      </tr>
      <tr>
        <td className="border px-4 py-3 font-medium">Congenital / Genetic</td>
        <td className="border px-4 py-3">Present at birth or inherited</td>
        <td className="border px-4 py-3">Clubfoot, scoliosis, osteogenesis imperfecta</td>
      </tr>
      <tr>
        <td className="border px-4 py-3 font-medium">Infectious</td>
        <td className="border px-4 py-3">Bone or joint infections</td>
        <td className="border px-4 py-3">Osteomyelitis, septic arthritis</td>
      </tr>
      <tr>
        <td className="border px-4 py-3 font-medium">Metabolic</td>
        <td className="border px-4 py-3">Due to metabolic imbalance</td>
        <td className="border px-4 py-3">Osteoporosis, rickets, Paget’s disease</td>
      </tr>
      <tr>
        <td className="border px-4 py-3 font-medium">Neoplastic</td>
        <td className="border px-4 py-3">Tumors affecting bone or cartilage</td>
        <td className="border px-4 py-3">Osteosarcoma, chondrosarcoma</td>
      </tr>
    </tbody>
  </table>
  </div>
</div>
<h1 className="text-xl font-semibold text-gray-800">
  4. Major & Frequent Orthopedic Diseases
</h1>
<div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
<div className="overflow-x-auto mt-10">
  <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
    <thead className="bg-blue-100">
      <tr>
        <th className="border px-4 py-3 text-left">Disease</th>
        <th className="border px-4 py-3 text-left">Key Features</th>
        <th className="border px-4 py-3 text-left">Public Impact</th>
      </tr>
    </thead>
    <tbody className="bg-white text-gray-700">
      <tr>
        <td className="border px-4 py-3 font-medium">Osteoarthritis</td>
        <td className="border px-4 py-3">Joint pain, stiffness, reduced mobility</td>
        <td className="border px-4 py-3">Very common in elderly, major cause of disability</td>
      </tr>
      <tr>
        <td className="border px-4 py-3 font-medium">Osteoporosis</td>
        <td className="border px-4 py-3">Fragile bones, increased fracture risk</td>
        <td className="border px-4 py-3">Affects millions worldwide, especially post‑menopausal women</td>
      </tr>
      <tr>
        <td className="border px-4 py-3 font-medium">Fractures</td>
        <td className="border px-4 py-3">Broken bones due to trauma</td>
        <td className="border px-4 py-3">Leading cause of ER visits, affects all age groups</td>
      </tr>
      <tr>
        <td className="border px-4 py-3 font-medium">Scoliosis</td>
        <td className="border px-4 py-3">Abnormal spinal curvature</td>
        <td className="border px-4 py-3">Common in adolescents, may require bracing or surgery</td>
      </tr>
      <tr>
        <td className="border px-4 py-3 font-medium">Rheumatoid Arthritis</td>
        <td className="border px-4 py-3">Autoimmune joint inflammation</td>
        <td className="border px-4 py-3">Chronic disability, affects quality of life</td>
      </tr>
    </tbody>
  </table>
</div>
</div>
<h1 className="text-xl font-semibold text-gray-800">
  5. Symptoms of Major Orthopedic Diseases
</h1>
<div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
<div className="overflow-x-auto mt-10">
  <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
    <thead className="bg-blue-100">
      <tr>
        <th className="border px-4 py-3 text-left">Disease</th>
        <th className="border px-4 py-3 text-left">Key Features</th>
        <th className="border px-4 py-3 text-left">Public Impact</th>
      </tr>
    </thead>
    <tbody className="bg-white text-gray-700">
      <tr>
        <td className="border px-4 py-3 font-medium">Osteoarthritis</td>
        <td className="border px-4 py-3">Pain, stiffness, swelling in joints</td>
        <td className="border px-4 py-3">Limits mobility, common in aging population</td>
      </tr>
      <tr>
        <td className="border px-4 py-3 font-medium">Osteoporosis</td>
        <td className="border px-4 py-3">Silent until fracture occurs</td>
        <td className="border px-4 py-3">Major cause of hip/spine fractures in elderly</td>
      </tr>
      <tr>
        <td className="border px-4 py-3 font-medium">Fractures</td>
        <td className="border px-4 py-3">Pain, swelling, deformity, inability to move</td>
        <td className="border px-4 py-3">High burden on trauma care systems</td>
      </tr>
      <tr>
        <td className="border px-4 py-3 font-medium">Scoliosis</td>
        <td className="border px-4 py-3">Uneven shoulders/hips, spinal curve</td>
        <td className="border px-4 py-3">May progress during growth spurts</td>
      </tr>
      <tr>
        <td className="border px-4 py-3 font-medium">Rheumatoid Arthritis</td>
        <td className="border px-4 py-3">Morning stiffness, joint swelling, fatigue</td>
        <td className="border px-4 py-3">Chronic disease needing lifelong management</td>
      </tr>
    </tbody>
  </table>
  </div>
</div>
 {/* Common Orthopedic Conditions Buttons */}
<div className="bg-blue-50 p-6 rounded-xl">
  <h3 className="text-xl font-semibold text-gray-800 mb-6">
    Common Orthopedic Conditions
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

    {/* Osteoarthritis */}
    <Link href="/specialties/orthopedics/osteoarthritis">
      <button
        type="button"
        className="w-full flex items-center justify-center gap-3 bg-blue-100 text-blue-700 py-6 px-6 rounded-xl shadow-md font-semibold
                   transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-200"
      >
        <FaWalking className="text-xl" />
        <span>Osteoarthritis</span>
      </button>
    </Link>

    {/* Osteoporosis */}
    <Link href="/specialties/orthopedics/osteoporosis">
      <button
        type="button"
        className="w-full flex items-center justify-center gap-3 bg-blue-100 text-blue-700 py-6 px-6 rounded-xl shadow-md font-semibold
                   transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-200"
      >
        <FaBone className="text-xl" />
        <span>Osteoporosis</span>
      </button>
    </Link>

    {/* Fractures */}
    <Link href="/specialties/orthopedics/fractures">
      <button
        type="button"
        className="w-full flex items-center justify-center gap-3 bg-blue-100 text-blue-700 py-6 px-6 rounded-xl shadow-md font-semibold
                   transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-200"
      >
        <FaCrutch className="text-xl" />
        <span>Fractures</span>
      </button>
    </Link>

   

   

  </div>
</div>


          
   </motion.div>
                {/* Footer and Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 mt-10" >
          Built responsibly to promote learning, awareness, and ethical use of medical knowledge.
        </motion.p>

   </div>
    </main>
  );
}