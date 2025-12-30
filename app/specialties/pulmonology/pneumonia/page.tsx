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

export default function Pneumonia() {
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

          <h1 className="text-4xl font-bold text-blue-700 mb-3">Pneumonia</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            <strong>"Breath of Life", "Care", and "Expertise".</strong>
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
               What is the term 'Pneumonia'?
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
               Pneumonia is an <strong>acute inflammatory condition of the lung parenchyma </strong> in which the 
               <strong>alveoli and surrounding tissues </strong> become indlamed and filled with fluid, pus 
                or cellular debris. This impairs normal gas exchange and leads to respiratory symptoms 
                ranging from mild illness to life-threatening disease.</p>
            </div>
          </div>
                {/* Epidemiology */}
<h1 className="text-xl font-semibold text-gray-800">2. Epidemiology</h1>

<div className="bg-blue-50 p-6 rounded-xl mt-6">
  <h3 className="text-lg font-semibold text-gray-800 text-center">
    Lets Understand the Epidemiology
  </h3>

  {/* White inner box inside blue */}
  <div className="bg-white rounded-lg shadow p-6 mt-6">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Pneumonia is one of the <strong>leading causes of infectious death globally</strong></li>
      <li>
        Higer incidence in:
        <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600">
          <li>Children under 5 years</li>
          <li>Adults over 65 years</li>
          <li>Individuals with chronic illness</li>
        </ul>
      </li>
      <li>
        More comon in: 
        <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600">
          <li>Low and middle income countries</li>
          <li>Overcrowded and poorly ventilated environments</li>
        </ul>
      </li>
      <li>Seasonal variation is observed, with increased cases during <strong>winter months</strong></li>
    </ul>
  </div>
</div>
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  3. Etiology
</h1>

<div className="bg-blue-50 p-6 rounded-xl mt-6">
  {/* Intro line */}
  <h3 className="text-lg font-semibold text-gray-800 text-center mb-6">
    Pneumonia can be caused by a wide range of infectious agents.
  </h3>

  {/* Top row: image + bacterial causes */}
  <div className="flex flex-col md:flex-row gap-6 items-start justify-center mb-6">
    
    {/* Left side: image */}
    <div className="flex-1 flex justify-center">
      <img
        src="/photos/pneumonia_causes.jpeg"
        alt="Causes of Pneumonia"
        className="rounded-lg shadow-md max-w-xs md:max-w-sm"
      />
    </div>

    {/* Right side: bacterial causes */}
    <div className="flex-1 bg-white mt-10 rounded-lg shadow p-4">
      <h3 className="font-semibold text-gray-800 mb-2">A. Bacterial Causes</h3>
      <ul className="list-disc ml-6 space-y-1 text-gray-700">
        <li>Streptococcus pneumoniae (most common)</li>
        <li>Haemophilus influenzae</li>
        <li>Staphylococcus aureus</li>
        <li>Klebsiella pneumoniae</li>
      </ul>
    </div>
  </div>

  {/* Bottom row: three cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    {/* Viral Causes */}
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-semibold text-gray-800 mb-2">B. Viral Causes</h3>
      <ul className="list-disc ml-6 space-y-1 text-gray-700">
        <li>Influenza virus</li>
        <li>Respiratory syncytial virus (RSV)</li>
        <li>SARS-CoV-2</li>
        <li>Adenovirus</li>
      </ul>
    </div>

    {/* Atypical Organisms */}
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-semibold text-gray-800 mb-2">C. Atypical Organisms</h3>
      <ul className="list-disc ml-6 space-y-1 text-gray-700">
        <li>Mycoplasma pneumoniae</li>
        <li>Chlamydia pneumoniae</li>
        <li>Legionella pneumophila</li>
      </ul>
    </div>

    {/* Fungal Causes */}
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-semibold text-gray-800 mb-2">D. Fungal Causes</h3>
      <ul className="list-disc ml-6 space-y-1 text-gray-700">
        <li>Seen mainly in immunocompromised individuals</li>
      </ul>
    </div>

  </div>
</div>
{/* Classification of Pneumonia */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  4. Classification of Pneumonia
</h1>
<div className="bg-blue-50 p-6 rounded-xl mt-6">
  
  {/* Centered heading */}
  <h1 className="text-xl font-semibold text-gray-800 text-center mb-6">
    Pneumonia can be classified in two:
  </h1>

  {/* Based on Acquisition */}
  <div className="bg-white rounded-lg shadow p-4 mb-6">
    <h3 className="font-semibold text-gray-800 mb-2">A. Based on Acquisition</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Community-acquired pneumonia (CAP)</li>
      <li>Hospital-acquired pneumonia (HAP)</li>
      <li>Ventilator-associated pneumonia (VAP)</li>
    </ul>
  </div>

  {/* Based on Pathology with image */}
  <div className="flex flex-col md:flex-row gap-6 items-center">
    
    {/* Text card */}
    <div className="flex-1 bg-white rounded-lg shadow p-4">
      <h3 className="font-semibold text-gray-800 mb-2">B. Based on Pathology</h3>
      <ul className="list-disc ml-6 space-y-1 text-gray-700">
        <li>Lobar pneumonia: Involves one or more lobes</li>
        <li>Bronchopneumonia: Patchy inflammation around bronchioles</li>
        <li>Interstitial pneumonia: Involves alveolar walls and interstitium</li>
      </ul>
    </div>

    {/* Image */}
    <div className="flex-1 flex justify-center">
      <img
        src="/photos/classification_pneumonia.jpeg"
        alt="Pathology of Pneumonia"
        className="rounded-lg shadow-md max-w-xs md:max-w-sm"
      />
    </div>
  </div>
</div>
{/* Pathophysiology */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  5. Pathophysiology
</h1>

<div className="bg-blue-50 p-6 rounded-xl mt-6">
  <div className="bg-white rounded-lg shadow p-6">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Pathogens enter the lower respiratory tract</li>
      <li>Host immune response is activated</li>
      <li>Inflammatory exudate fills alveoli</li>
      <li>Lung consolidation develops</li>
      <li>Impaired oxygen diffusion leads to hypoxia</li>
      
        
     
    </ul>
  </div>
  <p className="mt-4 ml-6">Severe inflammation may spread to the pleura, causing <strong>pleural effusion or empyema</strong></p>
</div>
{/* Clinical Features */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  5. Clinical Features
</h1>

<div className="bg-blue-50 p-6 rounded-xl mt-6 flex flex-col gap-6">

  {/* General Symptoms */}
  <div className="bg-white rounded-lg shadow p-4">
    <h3 className="font-semibold text-gray-800 mb-2">A. General Symptoms</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Fever with chills</li>
      <li>Fatigue and malaise</li>
      <li>Loss of appetite</li>
    </ul>
  </div>

  {/* Respiratory Symptoms */}
  <div className="bg-white rounded-lg shadow p-4">
    <h3 className="font-semibold text-gray-800 mb-2">B. Respiratory Symptoms</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Cough (productive or dry)</li>
      <li>Purulent sputum</li>
      <li>Shortness of breath</li>
      <li>Chest pain (pleuritic)</li>
    </ul>
  </div>

  {/* Signs on Examination */}
  <div className="bg-white rounded-lg shadow p-4">
    <h3 className="font-semibold text-gray-800 mb-2">C. Signs on Examination</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Tachypnea</li>
      <li>Reduced breath sounds</li>
      <li>Crackles (crepitations)</li>
      <li>Dullness to percussion</li>
    </ul>
  </div>

</div>
{/* Prevention */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  6. Prevention
</h1>

<div className="bg-blue-50 p-6 rounded-xl mt-6">
  <div className="bg-white rounded-lg shadow p-6">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Vaccination (pneumococcal, influenza)</li>
      <li>Hand hygiene</li>
      <li>Avoid smoking</li>
      <li>Good nutrition</li>
      <li>Early treatment of respiratory infections</li>
    </ul>
  </div>
</div>
<p className="text-gray-600 italic mt-6">
  <strong>Pneumonia is a common and potentially serious respiratory infection that affects 
    people of all ages, with greater risk in young children, older adults, and individuals
     with weakened immunity. Early recognition of symptoms, prompt diagnosis, and appropriate 
     treatment are crucial for preventing complications and reducing mortality. Effective preventive
      measures such as vaccination, good hygiene practices, and timely medical care play a vital
       role in minimizing the overall burden of pneumonia and improving patient outcomes.</strong></p>

          
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