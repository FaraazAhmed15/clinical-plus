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

export default function UTI() {
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

          <h1 className="text-4xl font-bold text-blue-700 mb-3">Urinary Tract Infection</h1>
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
               What is the term 'Urinary Tract Infection (UTI)'?
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
               A Urinary Tract Infection (UTI) is an <strong> infection affecting any part of the urinary system,</strong>
               which includes the<strong> kidneys, ureters, bladder and urethra.</strong> UTI occur when microorganism, most 
               commonly bacteria, enter the urinary tract and multiply, leading to inflammation and ysmptoms.</p>
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
      <li>UTI's are more common in  <strong>women</strong> due to shorter urethra</li>
      <li>
        High Prevalence in:
        <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600">
          <li>Sexually active women</li>
          <li>Pregnant women</li>
          <li>Elderly individuals</li>
          <li>Patients with diabetes</li>
        </ul>
      </li>
      <li>Men, children and infants can also develop UTI's</li>
      <li>Recurrent UTI's are common in some individuals</li>
    </ul>
  </div>
</div>
{/* Anatomy of the Urinary Tract */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
 3. Anatomy of the Urinary Tract
</h1>

<div className="bg-blue-50 p-6 rounded-xl flex flex-col md:flex-row gap-8 items-center">
  
  {/* Left side: image */}
  <div className="flex-1 flex justify-center">
    <img
      src="/photos/uti_anatomy.jpeg"
      alt="Anatomy of the urinary tract"
      className="rounded-lg shadow-md max-w-xs md:max-w-sm"
    />
  </div>

  {/* Right side: text */}
  <div className="flex-1 bg-white rounded-lg shadow p-6">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li><strong>Kidneys:</strong> Filter blood and produce urine</li>
      <li><strong>Ureters:</strong> Transport urine from kidneys to bladder</li>
      <li><strong>Bladder:</strong> Stores urine</li>
      <li><strong>Urethra:</strong> Excretes urine from the body</li>
    </ul>
  </div>
</div>
{/* Etiology */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  4. Etiology
</h1>

<div className="bg-blue-50 p-6 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-8">

  {/* Common Causative Organisms */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">
      A. Common Causative Organisms
    </h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li><strong>Escherichia coli</strong> (most common)</li>
      <li>Klebsiella species</li>
      <li>Proteus species</li>
      <li>Enterococcus species</li>
      <li>Staphylococcus saprophyticus</li>
    </ul>
  </div>

  {/* Routes of Infection */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">
      B. Routes of Infection
    </h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Ascending infection from urethra</li>
      <li>Rarely, hematogenous spread</li>
    </ul>
  </div>

</div>
{/* Risk Factors */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
 5. Risk Factors
</h1>

<div className="bg-blue-50 p-6 rounded-xl">
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Female gender</li>
      <li>Sexual activity</li>
      <li>Poor personal hygiene</li>
      <li>Urinary catheterization</li>
      <li>Urinary tract obstruction (stones, prostate enlargement)</li>
      <li>Pregnancy</li>
      <li>Immunosuppression</li>
    </ul>
  </div>
</div>
{/* Classification of UTI */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  6. Classification of UTI
</h1>

<div className="bg-blue-50 p-6 rounded-xl flex flex-col md:flex-row gap-8 items-center">
  
  {/* Left side: text */}
  <div className="flex-1 bg-white rounded-lg shadow p-6">
    {/* Based on Location */}
    <h3 className="font-semibold text-gray-800 mb-2">A. Based on Location</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700 mb-4">
      <li><strong>Urethritis:</strong> Infection of urethra</li>
      <li><strong>Cystitis:</strong> Infection of bladder</li>
      <li><strong>Pyelonephritis:</strong> Infection of kidneys (more severe)</li>
    </ul>

    {/* Based on Complexity */}
    <h3 className="font-semibold text-gray-800 mb-2">B. Based on Complexity</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li><strong>Uncomplicated UTI:</strong> Occurs in healthy individuals</li>
      <li><strong>Complicated UTI:</strong> Associated with structural or functional abnormalities</li>
    </ul>
  </div>

  {/* Right side: image */}
  <div className="flex-1 flex justify-center">
    <img
      src="/photos/uti_classification.jpeg"
      alt="Classification of urinary tract infections"
      className="rounded-lg shadow-md max-w-xs md:max-w-sm"
    />
  </div>
</div>


{/* Pathophysiology */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
 7. Pathophysiology
</h1>

<div className="bg-blue-50 p-6 rounded-xl flex flex-col md:flex-row gap-8 items-center">
  
  {/* Left side: image */}
  <div className="flex-1 flex justify-center">
    <img
      src="/photos/uti_patho.jpeg"
      alt="Pathophysiology of urinary tract infection"
      className="rounded-lg shadow-md max-w-xs md:max-w-sm"
    />
  </div>

  {/* Right side: text */}
  <div className="flex-1 bg-white rounded-lg shadow p-6">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Bacteria adhere to uroepithelial cells</li>
      <li>Multiply and trigger inflammatory response</li>
      <li>Release of toxins causes irritation and pain</li>
      <li>In severe cases, infection ascends to kidneys</li>
    </ul>
  </div>
</div>
{/* Clinical Features */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  8. Clinical Features
</h1>

<div className="bg-blue-50 p-6 rounded-xl">
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    
    {/* Lower UTI (Cystitis) Symptoms */}
    <h3 className="font-semibold text-gray-800 mb-2">
      A. Lower UTI (Cystitis) Symptoms
    </h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700 mb-4">
      <li>Burning sensation during urination (dysuria)</li>
      <li>Increased frequency and urgency</li>
      <li>Cloudy or foul-smelling urine</li>
      <li>Lower abdominal discomfort</li>
    </ul>

    {/* Upper UTI (Pyelonephritis) Symptoms */}
    <h3 className="font-semibold text-gray-800 mb-2">
      B. Upper UTI (Pyelonephritis) Symptoms
    </h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>High fever</li>
      <li>Flank pain</li>
      <li>Nausea and vomiting</li>
      <li>Chills and malaise</li>
    </ul>
  </div>
</div>
{/* Prevention */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
 9. Prevention
</h1>

<div className="bg-blue-50 p-6 rounded-xl">
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Drink plenty of fluids</li>
      <li>Maintain good personal hygiene</li>
      <li>Urinate after sexual intercourse</li>
      <li>Avoid holding urine for long periods</li>
      <li>Proper catheter care</li>
      <li>Early treatment of urinary symptoms</li>
    </ul>
  </div>
</div>

<p className="text-gray-600 italic mt-6">
  <strong>Urinary tract infection is a common and treatable condition that can affect 
    any part of the urinary system. While most UTIs resolve completely with timely 
    diagnosis and appropriate antibiotic therapy, delayed or inadequate treatment may
     lead to serious complications, including kidney involvement. Early recognition of
      symptoms, good personal hygiene, adequate fluid intake, and prompt medical care are
       essential to prevent recurrence and ensure a favorable outcome.</strong></p>


          
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