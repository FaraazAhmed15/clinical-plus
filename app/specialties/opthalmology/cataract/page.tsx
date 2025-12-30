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

export default function Cataract() {
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

          <h1 className="text-4xl font-bold text-blue-700 mb-3">Cataract</h1>
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
               What is the term 'Cataract'?
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
               A cataract is a condition characterized by <strong>clouding or opacity of the normally clear crystalline lens
                of the eye</strong>, leading to a gradual decrease in vision. The lens plays a crucial role in focusing 
                light onto the retina, when it becomes opaque, light transmission is imapaired, resulting in  blurred or dim vision.</p>
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
      <li>Cataract is the <strong>most common cause of blindness globally</strong></li>
      <li>Prevalence increases significantly with <strong>advancing age</strong></li>
      <li>
        More common in:
        <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600">
          <li>Elderly individuals</li>
          <li>People with diabetes</li>
          <li>Populations exposed to excessive sunlight</li>
        </ul>
      </li>
    </ul>
  </div>
</div>
{/* Etiology and Risk Factors */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  3. Risk Factors
</h1>

<div className="bg-blue-50 p-6 rounded-xl mt-6 flex flex-col gap-6">

  {/* Age-Related */}
  <div className="bg-white rounded-lg shadow p-4">
    <h3 className="font-semibold text-gray-800 mb-2">A. Age-Related (Senile Cataract)</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Most common type</li>
      <li>Result of degenerative changes in the lens proteins</li>
    </ul>
  </div>

  {/* Metabolic Causes */}
  <div className="bg-white rounded-lg shadow p-4">
    <h3 className="font-semibold text-gray-800 mb-2">B. Metabolic Causes</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Diabetes mellitus</li>
      <li>Galactosemia</li>
    </ul>
  </div>

  {/* Environmental Factors */}
  <div className="bg-white rounded-lg shadow p-4">
    <h3 className="font-semibold text-gray-800 mb-2">C. Environmental Factors</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Prolonged ultraviolet (UV) radiation exposure</li>
      <li>Smoking</li>
      <li>Alcohol consumption</li>
    </ul>
  </div>

  {/* Drug-Induced */}
  <div className="bg-white rounded-lg shadow p-4">
    <h3 className="font-semibold text-gray-800 mb-2">D. Drug-Induced</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Long-term corticosteroid use</li>
      <li>Certain medications</li>
    </ul>
  </div>

  {/* Other Causes */}
  <div className="bg-white rounded-lg shadow p-4">
    <h3 className="font-semibold text-gray-800 mb-2">E. Other Causes</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Congenital cataract (present at birth)</li>
      <li>Eye trauma</li>
      <li>Intraocular inflammation (uveitis)</li>
      <li>Radiation exposure</li>
    </ul>
  </div>

</div>
{/* Pathophysiology */}
<h1 className="text-xl font-semibold text-gray-800">
  4. Pathophysiology
</h1>

<div className="bg-blue-50 p-6 rounded-xl flex flex-col md:flex-row gap-8 items-center">
  
  {/* Left side: text */}
  <div className="flex-1 bg-white rounded-lg shadow p-6">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>The lens is composed of transparent proteins (crystallins)</li>
      <li>Aging and oxidative stress cause protein denaturation and aggregation</li>
      <li>Loss of lens transparency results in light scattering</li>
      <li>Progressive lens opacity leads to worsening vision</li>
    </ul>
  </div>

  {/* Right side: image */}
  <div className="flex-1 flex justify-center">
    <img
      src="/photos/cataract_pathophysiology.jpeg"
      alt="Pathophysiology of Cataract"
      className="rounded-lg shadow-md max-w-xs md:max-w-sm"
    />
  </div>
</div>
{/* Types of Cataract */}
<h1 className="text-xl font-semibold text-gray-800">
  5. Types of Cataract
</h1>

<div className="bg-blue-50 p-6 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-8">

  {/* Nuclear Cataract */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">A. Nuclear Cataract</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Affects the central nucleus of the lens</li>
      <li>Common in elderly individuals</li>
      <li>Causes gradual vision loss and color changes</li>
    </ul>
  </div>

  {/* Cortical Cataract */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">B. Cortical Cataract</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Involves the lens cortex</li>
      <li>Characterized by spoke-like opacities</li>
      <li>Causes glare and difficulty with night vision</li>
    </ul>
  </div>

  {/* Posterior Subcapsular Cataract */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">C. Posterior Subcapsular Cataract</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Affects the back of the lens</li>
      <li>Progresses rapidly</li>
      <li>Causes glare and difficulty reading</li>
    </ul>
  </div>

  {/* Congenital Cataract */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">D. Congenital Cataract</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Present at birth or early childhood</li>
      <li>Can impair visual development if untreated</li>
    </ul>
  </div>

</div>
{/* Clinical Features */}
<h1 className="text-xl font-semibold text-gray-800">
  6. Clinical Features
</h1>

<div className="bg-blue-50 p-6 rounded-xl flex flex-col md:flex-row gap-8 items-center">
  
  {/* Left side: image */}
  <div className="flex-1 flex justify-center">
    <img
      src="/photos/cataract_clinical.jpeg"
      alt="Clinical features of cataract"
      className="rounded-lg shadow-md max-w-xs md:max-w-sm"
    />
  </div>

  {/* Right side: text */}
  <div className="flex-1 bg-white rounded-lg shadow p-6">
    {/* Symptoms */}
    <h3 className="font-semibold text-gray-800 mb-2">A. Symptoms</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700 mb-4">
      <li>Gradual, painless decrease in vision</li>
      <li>Blurred or cloudy vision</li>
      <li>Increased glare from lights</li>
      <li>Difficulty with night driving</li>
      <li>Faded or yellowish color perception</li>
      <li>Frequent change in spectacle prescription</li>
    </ul>

    {/* Signs */}
    <h3 className="font-semibold text-gray-800 mb-2">B. Signs</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Visible lens opacity</li>
      <li>Reduced visual acuity</li>
      <li>Absent or diminished red reflex</li>
    </ul>
  </div>
</div>
{/* Prevention */}
<h1 className="text-xl font-semibold text-gray-800">
  7. Prevention
</h1>

<div className="bg-blue-50 p-6 rounded-xl">
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Protect eyes from UV radiation (sunglasses)</li>
      <li>Control diabetes</li>
      <li>Avoid smoking and excessive alcohol</li>
      <li>Maintain antioxidant-rich diet</li>
      <li>Regular eye examinations, especially in older adults</li>
    </ul>
  </div>
</div>
<p className="text-gray-600 italic mt-6">
  <strong>Cataract is a common age-related eye disorder and a leading cause of reversible blindness worldwide.
     Although it develops gradually and painlessly, untreated cataract can significantly impair vision 
     and daily functioning. Early detection through regular eye examinations and timely surgical intervention
      can effectively restore vision, improve quality of life, and prevent avoidable visual disability.</strong></p>
               
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