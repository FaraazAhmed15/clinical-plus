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

export default function Tuberculosis() {
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

          <h1 className="text-4xl font-bold text-blue-700 mb-3">Tuberculosis</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            <strong>"Breath of Life", "Care", and "Expertise"</strong>
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
               What is the term 'Tuberculosis'?
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
               Tuberculosis is a <strong>chronic infectious disease </strong>caused by Mycobacterium tuberculosis,
               a slow growing,acid-fast bacillus. It primarily affects, the <strong>lungs(pulmonary tuberculosis)</strong>
               but can involve almost any organ system, resulting in <strong> extrapulmonary tuverculosis.</strong> TB 
               spreads through air when an infected person coughs, sneezes, speaks or sings.</p>
            </div>
          </div>
                           {/* Epidemiology */}
<h1 className="text-xl font-semibold text-gray-800">1. Epidemiology</h1>

<div className="bg-blue-50 p-6 rounded-xl mt-6">
  <h3 className="text-lg font-semibold text-gray-800 text-center">
    Lets Understand the Epidemiology
  </h3>

  {/* White inner box inside blue */}
  <div className="bg-white rounded-lg shadow p-6 mt-6">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Tuberculosis affects <strong> millions of people globally each year</strong></li>
      <li>Higher prevalance in <strong> low and middle-income countries</strong></li>
      <li>
        Strongly associated with:
        <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600">
          <li>Poverty</li>
          <li>Overcrowding</li>
          <li>Malnutrition</li>
          <li>HIV infection</li>
        </ul>
      </li>
      <li>Both genders are affected, but incidence is higher in <strong>adult males</strong></li>
      <li>Children and immuno compromised individuals are at increased risk</li>
    </ul>
  </div>
</div>
<h1 className="text-xl font-semibold text-gray-800">2. Transmission</h1>

<div className="bg-blue-50 p-6 rounded-xl mt-6">
  <h3 className="text-lg font-semibold mt-4 text-gray-800 text-center">
    Lets Understand the the mode of transmission of the disease
  </h3>
    

<div className="bg-blue-50 p-6 rounded-xl mt-6 flex flex-col md:flex-row gap-6 items-center justify-center">
  
  {/* Left side: text cards */}
  <div className="flex-1 flex flex-col gap-6 max-w-md">
    
    {/* Causative Agent */}
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-semibold text-gray-800 mb-2">Causative Agent</h3>
      <ul className="list-disc ml-6 space-y-1 text-gray-700">
        <li><strong>Mycobacterium tuberculosis</strong></li>
        <li>Aerobic, acid-fast, slow-replicating bacterium</li>
      </ul>
    </div>

    {/* Mode of Transmission */}
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-semibold text-gray-800 mb-2">Mode of Transmission</h3>
      <ul className="list-disc ml-6 space-y-1 text-gray-700">
        <li>Airborne droplets inhaled into the lungs</li>
        <li>Prolonged close contact increases risk</li>
        <li>Not transmitted through food, water, or physical touch</li>
      </ul>
    </div>
  </div>

  {/* Right side: image */}
  <div className="flex-1 flex justify-center">
    <img
      src="/photos/mycobacterium.jpeg"
      alt="Mycobacterium tuberculosis illustration"
      className="rounded-lg shadow-md max-w-xs md:max-w-sm"
    />
  </div>
</div>
  </div>
  {/* Pathogenesis */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  7. Pathogenesis
</h1>

<div className="bg-blue-50 p-6 rounded-xl mt-6 flex flex-col md:flex-row gap-6 items-center justify-center">

  {/* Left side: text card */}
  <div className="flex-1 bg-white rounded-lg shadow p-6">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Inhaled bacilli reach the alveoli</li>
      <li>Bacilli are engulfed by macrophages</li>
      <li>Immune response leads to granuloma formation</li>
      <li>
        Infection outcomes:
        <ul className="list-disc ml-6 space-y-1">
          <li>Latent TB infection (asymptomatic, non-infectious)</li>
          <li>Active TB disease (symptomatic, infectious)</li>
        </ul>
      </li>
      
        
      
    </ul>
    
  </div>

  {/* Right side: image */}
  <div className="flex-1 flex justify-center">
    <img
      src="/photos/pathogenesis.jpeg"
      alt="Pathogenesis of Tuberculosis"
      className="rounded-lg shadow-md max-w-xs md:max-w-sm"
    />
    
  </div>
  
</div>
{/* Types of Tuberculosis */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  5. Types of Tuberculosis
</h1>

<div className="bg-blue-50 p-6 rounded-xl mt-6 flex flex-col gap-6">

  {/* Pulmonary Tuberculosis */}
  <div className="bg-white rounded-lg shadow p-4">
    <h3 className="font-semibold text-gray-800 mb-2">A. Pulmonary Tuberculosis</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Most common form</li>
      <li>Involves lungs</li>
      <li>Major source of transmission</li>
    </ul>
  </div>

  {/* Extrapulmonary Tuberculosis with image */}
  <div className="flex flex-col md:flex-row gap-6 items-center">
    
    {/* Text card */}
    <div className="flex-1 bg-white rounded-lg shadow p-4">
      <h3 className="font-semibold text-gray-800 mb-2">B. Extrapulmonary Tuberculosis</h3>
      <ul className="list-disc ml-6 space-y-1 text-gray-700">
        <li>Lymph node TB</li>
        <li>Pleural TB</li>
        <li>Bone and joint TB (Pott’s disease)</li>
        <li>Genitourinary TB</li>
        <li>Tuberculous meningitis</li>
        <li>Abdominal TB</li>
      </ul>
    </div>

    {/* Image */}
    <div className="flex-1 flex justify-center">
      <img
        src="/photos/extrapulmonary.jpeg"
        alt="Extrapulmonary Tuberculosis illustration"
        className="rounded-lg shadow-md max-w-xs md:max-w-sm"
      />
    </div>
  </div>
</div>
{/* Clinical Features */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  6. Clinical Features
</h1>

<div className="bg-blue-50 p-6 rounded-xl mt-6 flex flex-col gap-6">

  {/* General Symptoms */}
  <div className="bg-white rounded-lg shadow p-4">
    <h3 className="font-semibold text-gray-800 mb-2">A. General Symptoms</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Low-grade fever (especially evening rise)</li>
      <li>Night sweats</li>
      <li>Fatigue and weakness</li>
      <li>Loss of appetite</li>
      <li>Unintentional weight loss</li>
    </ul>
  </div>

  {/* Pulmonary Symptoms */}
  <div className="bg-white rounded-lg shadow p-4">
    <h3 className="font-semibold text-gray-800 mb-2">B. Pulmonary Symptoms</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Persistent cough (&gt;2–3 weeks)</li>
      <li>Sputum production</li>
      <li>Hemoptysis (coughing up blood)</li>
      <li>Chest pain</li>
      <li>Shortness of breath</li>
    </ul>
  </div>

  {/* Extrapulmonary Symptoms */}
  <div className="bg-white rounded-lg shadow p-4">
    <h3 className="font-semibold text-gray-800 mb-2">C. Extrapulmonary Symptoms</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Depend on organ involved</li>
      <li>Swelling of lymph nodes</li>
      <li>Back pain and deformity</li>
      <li>Neurological symptoms (meningitis)</li>
    </ul>
  </div>

</div>
{/* Prevention and Control */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  8. Prevention and Control
</h1>

<div className="bg-blue-50 p-6 rounded-xl mt-6">
  <div className="bg-white rounded-lg shadow p-6">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>BCG vaccination (especially in children)</li>
      <li>Early diagnosis and complete treatment</li>
      <li>Screening of close contacts</li>
      <li>Improved ventilation and living conditions</li>
      <li>Use of masks and respiratory hygiene</li>
      <li>Addressing malnutrition and HIV</li>
    </ul>
  </div>
</div>
<p className="text-gray-600 italic mt-6">
  <strong>Tuberculosis is a major global infectious disease that continues
     to pose serious public health challenges, particularly in developing regions.
      Although it is preventable and curable, delayed diagnosis, poor treatment adherence,
       and drug-resistant strains contribute significantly to its ongoing impact. 
       Early detection, complete and supervised treatment, vaccination, and improved
        living conditions are essential for effective tuberculosis control and for reducing
         transmission, complications, and mortality</strong></p>


          
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