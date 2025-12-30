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

export default function kidney_stone() {
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

          <h1 className="text-4xl font-bold text-blue-700 mb-3">Kidney Stone</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            <strong>"Flow of Vitality"</strong>
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
               What is the term 'Renal Calculi (Kidney-Stone)'?
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
               Kidney stones are <strong> hard crystalline deposits</strong> formed from minerals and salts that accumulate
               within the <strong>kidneys</strong> or other parts of urinary tract. They develop when urine becomes concentrated, 
               allowing minerals to crystallize and stick together. Kidney stones vary in size, shape and composition and may remain asymptomatic
               or cause severe pain when they move within the urinary tract.</p>
            </div>
          </div>
          <h1 className="text-xl font-semibold text-gray-800 mt-10">
  2. Epidemiology
</h1>
          
<div className="bg-blue-50 p-6 rounded-xl mt-6">
  <h3 className="text-lg font-semibold text-gray-800 text-center">
    Lets Understand the Epidemiology
  </h3>

  {/* White inner box inside blue */}
  <div className="bg-white rounded-lg shadow p-6 mt-6">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Kidney stones affect<strong> millions of people worldwide</strong></li>
      <li>
        More common in:
        <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600">
          <li>Adults aged 20-50 years</li>
          <li>Males more than female</li>
        </ul>
      </li>
      <li>
       Increasing incidence due to:
        <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600">
          <li>Dehydration</li>
          <li>Dietary habits</li>
          <li>Sedentary Lifestyle</li>
        </ul>
      </li>
      <li>Higher prevalence in hot climates due to fluid loss</li>
    </ul>
  </div>
</div>
{/* Etiology and Risk Factors */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  3. Risk Factors
</h1>

<div className="bg-blue-50 p-6 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-8">

  {/* Dehydration */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">A. Dehydration</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Low fluid intake</li>
      <li>Excessive sweating</li>
    </ul>
  </div>

  {/* Dietary Factors */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">B. Dietary Factors</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>High intake of salt</li>
      <li>Excess animal protein</li>
      <li>High oxalate foods</li>
    </ul>
  </div>

  {/* Metabolic Factors */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">C. Metabolic Factors</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Hypercalciuria</li>
      <li>Hyperuricemia</li>
      <li>Obesity</li>
    </ul>
  </div>

  {/* Medical Conditions */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">D. Medical Conditions</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Recurrent urinary tract infections</li>
      <li>Gout</li>
      <li>Hyperparathyroidism</li>
    </ul>
  </div>

  {/* Genetic Factors */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">E. Genetic Factors</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Family history of kidney stones</li>
    </ul>
  </div>

</div>
{/* Types of Kidney Stones */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  4. Types of Kidney Stones
</h1>

<div className="bg-blue-50 p-6 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-8">

  {/* Calcium Stones */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">A. Calcium Stones</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Most common type</li>
      <li>Usually calcium oxalate or calcium phosphate</li>
    </ul>
  </div>

  {/* Uric Acid Stones */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">B. Uric Acid Stones</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Associated with high protein intake and gout</li>
      <li>More common in acidic urine</li>
    </ul>
  </div>

  {/* Struvite Stones */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">C. Struvite Stones</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Form due to urinary tract infections</li>
      <li>Can grow rapidly and become large</li>
    </ul>
  </div>

  {/* Cystine Stones */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">D. Cystine Stones</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Rare</li>
      <li>Caused by genetic disorder (cystinuria)</li>
    </ul>
  </div>

</div>
{/* Pathophysiology of Kidney Stone Formation */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  5. Pathophysiology of Kidney Stone Formation
</h1>

<div className="bg-blue-50 p-6 rounded-xl flex flex-col md:flex-row gap-8 items-center">
  
  {/* Left side: image */}
  <div className="flex-1 flex justify-center">
    <img
      src="/photos/stone_patho.jpeg"
      alt="Pathophysiology of kidney stone formation"
      className="rounded-lg shadow-md max-w-xs md:max-w-sm"
    />
  </div>

  {/* Right side: text */}
  <div className="flex-1 bg-white rounded-lg shadow p-6">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Supersaturation of urine with stone-forming substances</li>
      <li>Crystal nucleation and aggregation</li>
      <li>Crystal retention within renal tubules</li>
      <li>Progressive growth into stones</li>
    </ul>
  </div>
</div>
{/* Clinical Features */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  6. Clinical Features
</h1>

<div className="bg-blue-50 p-6 rounded-xl">
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    
    {/* Asymptomatic Stones */}
    <h3 className="font-semibold text-gray-800 mb-2">
      A. Asymptomatic Stones
    </h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700 mb-4">
      <li>Small stones may remain silent</li>
    </ul>

    {/* Symptomatic Stones */}
    <h3 className="font-semibold text-gray-800 mb-2">
      B. Symptomatic Stones
    </h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Severe colicky flank pain radiating to groin</li>
      <li>Hematuria (blood in urine)</li>
      <li>Nausea and vomiting</li>
      <li>Dysuria</li>
      <li>Urinary urgency and frequency</li>
    </ul>
  </div>
</div>
{/* Prevention of Kidney Stones */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
 7. Prevention
</h1>

<div className="bg-blue-50 p-6 rounded-xl flex flex-col md:flex-row gap-8 items-center">
  
  {/* Left side: text */}
  <div className="flex-1 bg-white rounded-lg shadow p-6">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Drink plenty of water</li>
      <li>Reduce salt intake</li>
      <li>Moderate protein consumption</li>
      <li>Avoid excess oxalate-rich foods</li>
      <li>Maintain healthy body weight</li>
      <li>Treat underlying metabolic conditions</li>
    </ul>
  </div>

  {/* Right side: image */}
  <div className="flex-1 flex justify-center">
    <img
      src="/photos/stone_prevent.jpeg"
      alt="Prevention of kidney stones"
      className="rounded-lg shadow-md max-w-xs md:max-w-sm"
    />
  </div>
</div>


          
<p className="text-gray-600 italic mt-6">
  <strong>Kidney stones are a common urinary condition that can cause severe pain and 
    significant discomfort but are highly manageable with timely diagnosis and appropriate
     treatment. While many stones pass spontaneously, larger or complicated stones may require
      medical or surgical intervention. Adequate hydration, dietary modification, and
       management of underlying risk factors are essential to prevent recurrence and protect
        long-term kidney health.</strong></p>


          
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