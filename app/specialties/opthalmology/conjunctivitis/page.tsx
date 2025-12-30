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

export default function Conjunctivitis() {
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

          <h1 className="text-4xl font-bold text-blue-700 mb-3">Conjunctivitis</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            <strong>"Vision of Hope, Precision, Compassion"</strong>
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
               What is the term 'Conjunctivitis'?
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
               Conjunctivitis commonly known as <strong>pink eye,</strong> is an <strong> inflammation of the  
                conjunctiva, </strong>the thin transparent memebrane that lines the inner surface of the eyelids and 
                covers the white part of the eye(sclera).inflammation causes dilation of conjunctival blood vessels, leading to 
                <strong> redness, irritation and discharge.</strong></p>
            </div>
          </div>
          <h1 className="text-xl font-semibold text-gray-800">2. Epidemiology</h1>

<div className="bg-blue-50 p-6 rounded-xl mt-6">
  <h3 className="text-lg font-semibold text-gray-800 text-center">
    Lets Understand the Epidemiology
  </h3>

  {/* White inner box inside blue */}
  <div className="bg-white rounded-lg shadow p-6 mt-6">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Conjunctivitis is one of the  <strong>most common eye conditions worldwide</strong></li>
      <li>Affects individuals of  <strong> all age groups</strong> </li>
      <li>
        More common in:
        <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600">
          <li>Children(especially infectious types)</li>
          <li>Crowded environments (schools, daycare ceners)</li>
        </ul>
      </li>
      <li>Allergic conjunctivitis is more common in spring and summer</li>
    </ul>
  </div>
</div>
<h1 className="text-xl font-semibold text-gray-800">
  3. Risk Factors
</h1>

<div className="bg-blue-50 p-6 rounded-xl">
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2"> Various Risk factors of disease are as follows:</h3>
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Raised intraocular pressure</li>
      <li>Increasing age</li>
      <li>Positive family history</li>
      <li>Diabetes mellitus</li>
      <li>Hypertension</li>
      <li>Prolonged corticosteroid use</li>
      <li>High myopia (nearsightedness)</li>
      <li>Thin cornea</li>
    </ul>
  </div>
</div>
{/* Etiology */}
<h1 className="text-xl font-semibold text-gray-800">
  4. Etiology
</h1>

<div className="bg-blue-50 p-6 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-8">

  {/* Infectious Causes */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">A. Infectious Causes</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li><strong>Viral conjunctivitis</strong> — Most common type, often associated with upper respiratory infections</li>
      <li><strong>Bacterial conjunctivitis</strong> — More common in children, produces purulent discharge</li>
    </ul>
  </div>

  {/* Non-Infectious Causes */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">B. Non-Infectious Causes</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Allergic conjunctivitis (pollen, dust, animal dander)</li>
      <li>Chemical irritants (smoke, chlorine, fumes)</li>
      <li>Foreign bodies</li>
      <li>Contact lens overuse</li>
    </ul>
  </div>

</div>
{/* Pathophysiology */}
<h1 className="text-xl font-semibold text-gray-800">
  5. Pathophysiology
</h1>

<div className="bg-blue-50 p-6 rounded-xl flex flex-col md:flex-row gap-8 items-center">
  
  {/* Left side: text */}
  <div className="flex-1 bg-white rounded-lg shadow p-6">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Infectious agents or allergens trigger inflammation of the conjunctiva</li>
      <li>Blood vessels dilate, causing redness</li>
      <li>Increased vascular permeability leads to tearing and discharge</li>
      <li>In allergic conjunctivitis, histamine release causes itching and swelling</li>
    </ul>
  </div>

  {/* Right side: image */}
  <div className="flex-1 flex justify-center">
    <img
      src="/photos/conjun.jpeg"
      alt="Pathophysiology of Conjunctivitis"
      className="rounded-lg shadow-md max-w-xs md:max-w-sm"
    />
  </div>
</div>
{/* Types of Conjunctivitis */}
<h1 className="text-xl font-semibold text-gray-800">
  6. Types of Conjunctivitis
</h1>

<div className="bg-blue-50 p-6 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-8">

  {/* Viral Conjunctivitis */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">A. Viral Conjunctivitis</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Highly contagious</li>
      <li>Associated with watery discharge</li>
      <li>Often begins in one eye and spreads to the other</li>
    </ul>
  </div>

  {/* Bacterial Conjunctivitis */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">B. Bacterial Conjunctivitis</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Characterized by thick, yellow or green discharge</li>
      <li>Eyelids may stick together, especially in the morning</li>
    </ul>
  </div>

  {/* Allergic Conjunctivitis */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">C. Allergic Conjunctivitis</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Not contagious</li>
      <li>Intense itching</li>
      <li>Usually affects both eyes</li>
      <li>Often associated with allergic rhinitis</li>
    </ul>
  </div>

  {/* Chemical or Irritative Conjunctivitis */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">D. Chemical or Irritative Conjunctivitis</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Caused by exposure to irritants</li>
      <li>Severity depends on the substance and duration of exposure</li>
    </ul>
  </div>

</div>
{/* Clinical Features */}
<h1 className="text-xl font-semibold text-gray-800">
 7. Clinical Features
</h1>

<div className="bg-blue-50 p-6 rounded-xl flex flex-col md:flex-row gap-8 items-center">
  
  {/* Left side: image */}
  <div className="flex-1 flex justify-center">
    <img
      src="/photos/conjun1.jpeg"
      alt="Clinical features of conjunctivitis"
      className="rounded-lg shadow-md max-w-xs md:max-w-sm"
    />
  </div>

  {/* Right side: text */}
  <div className="flex-1 bg-white rounded-lg shadow p-6">
    {/* Common Symptoms */}
    <h3 className="font-semibold text-gray-800 mb-2">A. Common Symptoms</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700 mb-4">
      <li>Redness of the eye</li>
      <li>Grittiness or foreign body sensation</li>
      <li>Excessive tearing</li>
      <li>Discharge (watery or purulent)</li>
      <li>Itching (especially allergic type)</li>
    </ul>

    {/* Additional Features */}
    <h3 className="font-semibold text-gray-800 mb-2">B. Additional Features</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Mild photophobia</li>
      <li>Eyelid swelling</li>
      <li>Blurred vision due to discharge</li>
    </ul>
  </div>
</div>
{/* Prevention */}
<h1 className="text-xl font-semibold text-gray-800">
  8. Prevention
</h1>

<div className="bg-blue-50 p-6 rounded-xl">
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Good hand hygiene</li>
      <li>Avoid touching eyes unnecessarily</li>
      <li>Proper contact lens care</li>
      <li>Avoid sharing personal items</li>
      <li>Early treatment to prevent spread</li>
    </ul>
  </div>
</div>


 <p className="text-gray-600 italic mt-6">
  <strong>Conjunctivitis is a common and generally mild eye condition that causes redness, 
    irritation, and discharge of the eyes. Although most cases resolve with proper hygiene and 
    appropriate treatment, some forms are highly contagious and can spread easily. Early recognition,
     correct management, and good preventive practices are essential to ensure quick recovery, prevent 
     complications, and reduce transmission.</strong></p>
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