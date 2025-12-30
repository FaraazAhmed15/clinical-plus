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
  FaClinicMedical,
  FaHeartBroken,
  FaProcedures,
  FaDna,
  
 
} from 'react-icons/fa';

export default function Fractures() {
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

          <h1 className="text-4xl font-bold text-blue-700 mb-3">Fractures</h1>
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
               What is the term 'Fracture'?
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
               A <strong>fracture </strong>is a medical condition in which a bone <strong>partially or 
                completely brreaks</strong> due to trauma, stress or underlying disease that weakens bone structure.</p>
            </div>
          </div>
                               {/* Causes and Risk Factors */}
<h1 className="text-xl font-semibold text-gray-800">
  Causes and Risk Factors of Fractures
</h1>

{/* Blue background wrapper */}
<div className="bg-blue-50 p-6 rounded-xl mt-6">
  {/* Intro text */}
  <h3 className="text-lg text-center mb-4">
    Let's Understand the various causes and risk factors of Fractures
  </h3>

  {/* Table */}
  <div className="overflow-x-auto w-full">
    <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
      <thead className="bg-blue-100">
        <tr>
          <th className="border px-4 py-3 text-left">Common Causes</th>
          <th className="border px-4 py-3 text-left">Risk Factors</th>
        </tr>
      </thead>
      <tbody className="bg-white text-gray-700">
        <tr>
          <td className="border px-4 py-3">Falls (most common cause)</td>
          <td className="border px-4 py-3">Osteoporosis</td>
        </tr>
        <tr>
          <td className="border px-4 py-3">Road traffic accidents</td>
          <td className="border px-4 py-3">Aging</td>
        </tr>
        <tr>
          <td className="border px-4 py-3">Sports injuries</td>
          <td className="border px-4 py-3">Poor nutrition (low calcium & vitamin D)</td>
        </tr>
        <tr>
          <td className="border px-4 py-3">Direct blows or trauma</td>
          <td className="border px-4 py-3">Smoking and excessive alcohol use</td>
        </tr>
        <tr>
          <td className="border px-4 py-3">Repetitive stress (stress fractures)</td>
          <td className="border px-4 py-3">Certain medical conditions (e.g., bone tumors)</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
                                                                      {/* Types of Fractures */}
<h1 className="text-xl font-semibold text-gray-800">
  Types of Fractures
</h1>

<div className="bg-blue-50 p-6 rounded-xl mt-6 flex flex-col md:flex-row items-center gap-8">
  {/* Left side text */}
  <div className="flex-1">
    <h3 className="text-lg text-center mb-4">
      Fractures are classified based on severity and appearances:
    </h3>
    <ul className="list-disc list-outside text-gray-700 space-y-4">
      <li><strong>Closed (Simple) Fracture</strong> – Bone breaks but skin remains intact</li>
      <li><strong>Open (Compound) Fracture</strong> – Bone breaks through the skin</li>
      <li><strong>Comminuted Fracture</strong> – Bone breaks into multiple pieces</li>
      <li><strong>Greenstick Fracture</strong> – Incomplete break, common in children</li>
      <li><strong>Stress Fracture</strong> – Small crack due to repetitive force</li>
      <li><strong>Pathological Fracture</strong> – Occurs in weakened bone (e.g., osteoporosis)</li>
    </ul>
  </div>

  {/* Right side picture */}
  <div className="flex-1 flex justify-center">
    <img
      src="/photos/fracture.jpeg"  
      alt="Types of Fractures "
      className="rounded-lg shadow-md max-w-xs md:max-w-sm"
    />
  </div>
</div>
<h1 className="text-xl font-semibold text-gray-800">Symptoms </h1>

          {/* Symptoms */}
          <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
               Let's Understand the various Symptoms  
              </h3>
              <ul className="list-disc mt-4 ml-8">
                <li>Severe pain at the injury site</li>
                <li>Swelling and bruising</li>
                <li>Deformity of the affected area</li>
                <li>Inability to move or bear weight</li>
                <li>Bone protruding through skin (open fracture)</li>
              </ul>
            </div>
          </div>
          
                                                                                    {/* Diagnosis Section */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  Diagnosis
</h1>

<div className="bg-blue-50 p-6 rounded-xl mt-6 flex flex-col md:flex-row items-center gap-8">
  {/* Left side image */}
  <div className="flex-1 flex justify-center">
    <img
      src="/photos/fracture_test.jpeg"
      alt="Fracture Diagnosis Illustration"
      className="rounded-lg shadow-md max-w-xs md:max-w-sm"
    />
  </div>

  {/* Right side text */}
  <div className="flex-1">
    <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center md:text-left">
      Diagnosis is primarily done using imaging techniques:
    </h3>
    <ul className="list-disc list-inside text-gray-700 space-y-2">
      <li><strong>X-rays</strong> – First-line diagnostic tool</li>
      <li><strong>CT scans</strong> – Useful for complex fractures</li>
      <li><strong>MRI</strong> – Detects stress fractures or soft tissue involvement</li>
    </ul>
    <p className="text-gray-600 mt-4 leading-relaxed">
      Clinical guidelines are widely supported by institutions such as the 
      <strong> National Institutes of Health</strong>.
    </p>
  </div>
</div>
{/* Treatment Section */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  Treatment
</h1>

<div className="bg-blue-50 p-6 rounded-xl mt-6">
  <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
    Treatment depends on fracture type, location, and severity:
  </h3>

  {/* Non-Surgical Treatment */}
  <h4 className="text-md font-semibold text-700 mb-2">Non-Surgical Treatment</h4>
  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
    <li>Immobilization (cast or splint)</li>
    <li>Pain management</li>
    <li>Physical therapy after healing</li>
  </ul>

  {/* Surgical Treatment */}
  <h4 className="text-md font-semibold text-700 mb-2">Surgical Treatment</h4>
  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
    <li>Internal fixation (plates, screws, rods)</li>
    <li>External fixation</li>
    <li>Bone grafting (severe cases)</li>
  </ul>

  <p className="text-gray-600 mt-4 leading-relaxed">
    Early and appropriate treatment reduces long-term complications.
  </p>
</div>
{/* Complications Section */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  Complications
</h1>

<div className="bg-blue-50 p-6 rounded-xl mt-6">
  <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
    Common complications following fractures:
  </h3>
  <ul className="list-disc list-inside text-gray-700 space-y-2">
    <li>Infection (especially open fractures)</li>
    <li>Delayed healing or nonunion</li>
    <li>Malunion (bone heals incorrectly)</li>
    <li>Nerve or blood vessel damage</li>
    <li>Chronic pain or reduced mobility</li>
  </ul>
</div>

{/* Prevention Section */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  Prevention
</h1>

<div className="bg-blue-50 p-6 rounded-xl mt-6">
  <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
    Strategies to prevent fractures:
  </h3>
  <ul className="list-disc list-inside text-gray-700 space-y-2">
    <li>Adequate calcium and vitamin D intake</li>
    <li>Regular weight-bearing exercise</li>
    <li>Fall prevention strategies</li>
    <li>Protective gear during sports</li>
    <li>Early treatment of osteoporosis</li>
  </ul>
</div>
  <p className="text-gray-600 italic mt-6">
  <strong>
    Note: Fractures are breaks in bone caused by trauma, stress, or disease.
     They are diagnosed mainly with imaging (X‑ray, CT, MRI) and treated 
     through immobilization or surgery depending on severity. Complications
      include infection, poor healing, or long‑term disability. Prevention focuses 
      on good nutrition, exercise, fall safety, protective gear, and early management of osteoporosis.
  </strong>
</p>


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