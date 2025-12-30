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

export default function Prostate() {
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

          <h1 className="text-4xl font-bold text-blue-700 mb-3">Prostrate Enlargment</h1>
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
               What is the term 'Prostrate Enlargement'?
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
               Prostrate enlargement ,medically known as <strong>Benign Prostatic Hyperplasia (BPH),</strong> is a 
               <strong> non-cancerous increase in the size of the prostrate gland</strong> that commonly occurs in 
               aging men. The prostrate surrounds the urethra just below the bladder, and as it enlarges,
               it can compress the urethra, leading to <strong> urinary symptoms.</strong></p>
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
      <li>One of the  <strong>most common urological conditions in older men</strong></li>
      <li>Rare before 40 years of age</li>
      <li>
        Prevalence increases with age:
        <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600">
          <li>~50% of men by age 60</li>
          <li>Up to 90% of men by age 80</li>
        </ul>
      </li>
      <li>
        More common in men with:
        <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600">
          <li>Family histroy</li>
          <li>Obesity</li>
          <li>Sedentary lifestyle</li>
        </ul>
      </li>
    </ul>
  </div>
</div>
{/* Anatomy of the Prostate */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
 3.  Anatomy of the Prostate
</h1>

<div className="bg-blue-50 p-6 rounded-xl flex flex-col md:flex-row gap-8 items-center">
  
  {/* Left side: image */}
  <div className="flex-1 flex justify-center">
    <img
      src="/photos/prostrate_anatomy.jpeg"
      alt="Anatomy of the prostate gland"
      className="rounded-lg shadow-md max-w-xs md:max-w-sm"
    />
  </div>

  {/* Right side: text */}
  <div className="flex-1 bg-white rounded-lg shadow p-6">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Walnut-sized gland in young adults</li>
      <li>Located below the bladder</li>
      <li>Surrounds the proximal urethra</li>
      <li>Produces prostatic fluid, a component of semen</li>
    </ul>
  </div>
</div>
{/* Etiology and Risk Factors */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  4. Risk Factors
</h1>

<div className="bg-blue-50 p-6 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-8">

  {/* Hormonal Changes */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">A. Hormonal Changes</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Age-related increase in dihydrotestosterone (DHT)</li>
      <li>Decreased testosterone with preserved DHT activity</li>
      <li>Estrogen-androgen imbalance</li>
    </ul>
  </div>

  {/* Risk Factors */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">B. Risk Factors</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Aging</li>
      <li>Family history of BPH</li>
      <li>Obesity and metabolic syndrome</li>
      <li>Diabetes mellitus</li>
      <li>Physical inactivity</li>
    </ul>
  </div>

</div>
{/* Pathophysiology */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  5. Pathophysiology
</h1>

<div className="bg-blue-50 p-6 rounded-xl flex flex-col md:flex-row gap-8 items-center">
  
  {/* Left side: text */}
  <div className="flex-1 bg-white rounded-lg shadow p-6">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Hyperplasia of stromal and glandular prostate cells</li>
      <li>Enlargement occurs mainly in the transition zone</li>
      <li>Compression of the urethra leads to:</li>
      <ul className="list-disc ml-10 space-y-1 text-gray-600">
        <li>Increased bladder outlet resistance</li>
        <li>Bladder muscle hypertrophy</li>
        <li>Reduced bladder emptying</li>
      </ul>
    </ul>
  </div>

  {/* Right side: image */}
  <div className="flex-1 flex justify-center">
    <img
      src="/photos/bph_pathophysiology.jpeg"
      alt="Pathophysiology of Benign Prostatic Hyperplasia"
      className="rounded-lg shadow-md max-w-xs md:max-w-sm"
    />
  </div>
</div>
{/* Clinical Features */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  6. Clinical Features
</h1>

<div className="bg-blue-50 p-6 rounded-xl">
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    
    {/* Lower Urinary Tract Symptoms (LUTS) */}
    <h3 className="font-semibold text-gray-800 mb-2">
      A. Lower Urinary Tract Symptoms (LUTS)
    </h3>

    {/* Obstructive Symptoms */}
    <p className="font-medium text-gray-700 mt-2 mb-1">Obstructive symptoms</p>
    <ul className="list-disc ml-6 space-y-1 text-gray-700 mb-4">
      <li>Weak urinary stream</li>
      <li>Hesitancy</li>
      <li>Intermittent flow</li>
      <li>Straining to urinate</li>
      <li>Incomplete bladder emptying</li>
    </ul>

    {/* Irritative Symptoms */}
    <p className="font-medium text-gray-700 mt-2 mb-1">Irritative symptoms</p>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Increased urinary frequency</li>
      <li>Nocturia (night-time urination)</li>
      <li>Urgency</li>
      <li>Urge incontinence</li>
    </ul>
  </div>
</div>
{/* Prevention and Lifestyle Measures */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  7. Prevention and Lifestyle Measures
</h1>

<div className="bg-blue-50 p-6 rounded-xl">
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Regular physical activity</li>
      <li>Maintain healthy body weight</li>
      <li>Balanced diet rich in fruits and vegetables</li>
      <li>Early medical consultation for urinary symptoms</li>
      <li>Regular health checkups in older men</li>
    </ul>
  </div>
</div>



<p className="text-gray-600 italic mt-6">
  <strong>Prostate enlargement (benign prostatic hyperplasia) is a common age-related condition
     in men that can significantly affect urinary function and quality of life. Although it 
     is non-cancerous, untreated prostate enlargement may lead to serious urinary and kidney 
     complications. Early recognition of symptoms, regular medical evaluation, and appropriate
      treatment can effectively control the condition, relieve symptoms, and help maintain a healthy and active life.</strong></p>


          
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