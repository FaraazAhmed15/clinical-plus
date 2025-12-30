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

export default function body_structure() {
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

          <h1 className="text-4xl font-bold text-blue-700 mb-3">Human Body Structure</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            <strong>"The human body is a masterpiece of structure and function"</strong>
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
              Human Body Structure
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
               The human body is a <strong> complex and highly organized structure</strong> composed of multiple
               levels that work together to maintain life, health and normal functioning. Ecah level of body structure
               builds upon the previous one, forming an integrated biological system.</p>
            </div>
          </div>
           <h1 className="text-xl font-semibold text-gray-800 mt-10">Levels of Organization </h1>
           <div className="bg-blue-50 p-6 rounded-xl mt-6">
            <h3 className="text-lg font-semibold text-gray-800 text-center">1. Chemical Level</h3>
            <div className="bg-blue-50 p-6 rounded-xl flex flex-col md:flex-row gap-8 items-center">

  {/* Left side: image */}
  <div className="flex-1 flex justify-center">
    <img
      src="/photos/chemical_leve.jpeg"
      alt="Chemical Level - Basic Building Blocks"
      className="rounded-lg shadow-md max-w-xs md:max-w-sm"
    />
  </div>

  {/* Right side: text */}
  <div className="flex-1 bg-white rounded-lg shadow p-6">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Basic building blocks of the body</li>
      <li>Includes atoms (carbon, hydrogen, oxygen) and molecules (proteins, lipids, carbohydrates)</li>
      <li>Essential for all cellular activities</li>
    </ul>
  </div>

</div>
{/* Cellular Level */}
<h3 className="text-lg font-semibold text-gray-800 text-center mt-4">2. Cellular Level</h3>

<div className="bg-blue-50 p-6 rounded-xl flex flex-col md:flex-row gap-8 items-center">

  {/* Left side: text */}
  <div className="flex-1 bg-white rounded-lg shadow p-6">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Cells are the basic structural and functional units of life</li>
      <li>Specialized cells perform specific functions</li>
      <li>Examples: nerve cells, muscle cells, blood cells</li>
    </ul>
  </div>

  {/* Right side: image */}
  <div className="flex-1 flex justify-center">
    <img
      src="/photos/cellular_level.jpeg"
      alt="Cellular Level - Examples of Cells"
      className="rounded-lg shadow-md max-w-xs md:max-w-sm"
    />
  </div>

</div>
<h3 className="text-lg font-semibold text-gray-800 text-center mt-4 ">3. Tissue Level</h3>
<div className="bg-blue-50 p-6 rounded-xl flex flex-col md:flex-row gap-8 items-center">

  {/* Left side: image */}
  <div className="flex-1 flex justify-center">
    <img
      src="/photos/tissue_level.jpeg"
      alt="Tissue Level - Types of Tissues"
      className="rounded-lg shadow-md max-w-xs md:max-w-sm"
    />
  </div>

  {/* Right side: text */}
  <div className="flex-1 bg-white rounded-lg shadow p-6">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Groups of similar cells working together</li>
      <li>
        Four main types:
        <ul className="list-disc ml-6 space-y-1 text-gray-600">
          <li><strong>Epithelial tissue</strong> – covers body surfaces and lines organs</li>
          <li><strong>Connective tissue</strong> – supports and binds (bone, blood, cartilage)</li>
          <li><strong>Muscle tissue</strong> – enables movement</li>
          <li><strong>Nervous tissue</strong> – transmits electrical signals</li>
        </ul>
      </li>
    </ul>
  </div>

</div>
{/* Organ Level */}
<h3 className="text-lg font-semibold text-gray-800 text-center mt-4">4. Organ Level</h3>

<div className="bg-blue-50 p-6 rounded-xl flex flex-col md:flex-row gap-8 items-center">

  {/* Left side: text */}
  <div className="flex-1 bg-white rounded-lg shadow p-6">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Structures made of two or more tissue types</li>
      <li>Each organ performs specific functions</li>
      <li>Examples: heart, lungs, liver, kidneys</li>
    </ul>
  </div>

  {/* Right side: image */}
  <div className="flex-1 flex justify-center">
    <img
      src="/photos/organ_level.jpeg"
      alt="Organ Level - Examples of Organs"
      className="rounded-lg shadow-md max-w-xs md:max-w-sm"
    />
  </div>

</div>
<h3 className="text-lg font-semibold text-gray-800 text-center mt-4">5. Organ System Level</h3>


<div className="bg-blue-50 p-6 rounded-xl flex justify-center mb-4">
  <div className="bg-white rounded-lg shadow p-6 max-w-lg text-center">
    <p className="text-gray-700 mb-4">
      Groups of organs working together
    </p>
    <h3 className="font-semibold text-gray-800 mb-2">Major Systems include:</h3>
    <ul className="list-disc list-inside space-y-1 text-gray-700 text-left inline-block">
      <li>Skeletal system</li>
      <li>Muscular system</li>
      <li>Nervous system</li>
      <li>Cardiovascular system</li>
      <li>Respiratory system</li>
      <li>Digestive system</li>
      <li>Urinary system</li>
      <li>Endocrine system</li>
      <li>Immune system</li>
    </ul>
  </div>
</div>
{/* Organism Level */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  6. Organism Level
</h1>

<div className="bg-blue-50 p-6 rounded-xl">
  <div className="bg-white rounded-lg shadow p-6 max-w-2xl">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>The body is divided into head, neck, trunk, and limbs</li>
      <li>
        Internal organs are protected within body cavities:
        <ul className="list-disc ml-6 space-y-1 text-gray-600">
          <li>Cranial cavity</li>
          <li>Thoracic cavity</li>
          <li>Abdominal cavity</li>
          <li>Pelvic cavity</li>
        </ul>
      </li>
    </ul>
  </div>
</div>



           </div>
           {/* Structural Organization of the Body */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  Structural Organization of the Body
</h1>

<div className="bg-blue-50 p-6 rounded-xl flex flex-col md:flex-row gap-8 items-center">

  {/* Left side: text */}
  <div className="flex-1 bg-white rounded-lg shadow p-6">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>The body is divided into head, neck, trunk, and limbs</li>
      <li>
        Internal organs are protected within body cavities:
        <ul className="list-disc ml-6 space-y-1 text-gray-600">
          <li>Cranial cavity</li>
          <li>Thoracic cavity</li>
          <li>Abdominal cavity</li>
          <li>Pelvic cavity</li>
        </ul>
      </li>
    </ul>
  </div>

  {/* Right side: image */}
  <div className="flex-1 flex justify-center">
    <img
      src="/photos/structural_organization.jpeg"
      alt="Structural Organization of the Human Body"
      className="rounded-lg shadow-md max-w-xs md:max-w-sm"
    />
  </div>

</div>
           


                            
<p className="text-gray-600 italic mt-6">
  <strong>The human body structure is organized into hierarchical levels,
     from microscopic cells to complex organ systems. This organization
      allows the body to function efficiently, adapt to changes, and sustain life.</strong></p>


          
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