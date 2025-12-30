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
  FaEye,
  
} from 'react-icons/fa';

export default function Ear() {
  return (
    <main className="min-h-screen bg-blue-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Heading of health page */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <FaStethoscope className="text-3xl" />
          </div>

          <h1 className="text-4xl font-bold text-blue-700 mb-3">
            Skin
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            <strong>
               Glow with confidence
            </strong>
          </p>
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-10 space-y-10"
        >
          {/* Introduction */}
          <h1 className="text-xl font-semibold text-gray-800">Introduction</h1>
          <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
            <FaBookMedical className="text-blue-600 w-12 h-12 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Definition of Skin</h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Skin is theoutermost covering of the body, composed of multiple layers of ectodermal tissue. In humans, it guards the underlying muscles, bones, ligaments, and internal organs

              </p>
            </div>
          </div>
          {/* Anatomy */}
          <h1 className="text-xl font-semibold text-gray-800">2. Anatomy of Skin</h1>
          <div className="flex gap-5 items-center bg-blue-50 p-6 rounded-xl">

            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Understanding the Layers and Cellular Composition of the Skin

              </h3>
                   {/* Skin Anatomy Section */}
<h1 className="text-xl font-semibold text-gray-800 mb-4">Anatomy of Skin</h1>
<div className="bg-blue-50 p-6 rounded-xl">
  <h3 className="text-lg font-semibold text-gray-800 text-center mb-6">
    The skin is composed of three main layers
  </h3>

  {/* Image on top */}
  <div className="flex justify-center mb-6">
    <img
      src="/photos/skin_layers.jpeg"   // <-- replace with your actual image path
      alt="Skin Layers Anatomy"
      className="w-full max-w-md h-auto rounded-lg shadow-md"
    />
  </div>

  {/* Table below image */}
  <div className="overflow-x-auto">
    <table className="min-w-full border-collapse border border-gray-300 rounded-lg">
      <thead className="bg-blue-100">
        <tr>
          <th className="border border-gray-300 px-4 py-2 text-gray-800 font-semibold">Layer</th>
          <th className="border border-gray-300 px-4 py-2 text-gray-800 font-semibold">Composition</th>
          <th className="border border-gray-300 px-4 py-2 text-gray-800 font-semibold">Key Structures</th>
          <th className="border border-gray-300 px-4 py-2 text-gray-800 font-semibold">Functions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-medium">Epidermis</td>
          <td className="border border-gray-300 px-4 py-2">Stratified squamous epithelium</td>
          <td className="border border-gray-300 px-4 py-2">Keratinocytes, melanocytes, Langerhans cells</td>
          <td className="border border-gray-300 px-4 py-2">Barrier, waterproofing, pigmentation</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-medium">Dermis</td>
          <td className="border border-gray-300 px-4 py-2">Connective tissue</td>
          <td className="border border-gray-300 px-4 py-2">Collagen, elastin, vessels, glands, nerves</td>
          <td className="border border-gray-300 px-4 py-2">Strength, elasticity, sensation, thermoregulation</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 font-medium">Hypodermis</td>
          <td className="border border-gray-300 px-4 py-2">Adipose + connective tissue</td>
          <td className="border border-gray-300 px-4 py-2">Fat cells, large vessels</td>
          <td className="border border-gray-300 px-4 py-2">Insulation, cushioning, energy storage</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
            </div>
          </div>
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-blue-100 text-blue-800 rounded-xl shadow-md p-10 mt-16 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Somato-Visceral Sensory System and Pain</h1>
            <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-6">
            The<strong>Somato-visceral sensory system</strong>includes <strong>skin sensitivity, deep(proprioceptive)
            </strong>and<strong>visceral sensitivity.</strong>Unlike special sense, it does not have specialised sense organs
            but uses a <strong>widely distributed receptor system</strong>in the skin,muscles,joints,tendons and internal organs.</p>
            <div className="flex justify-center">
              <FaBrain className="text-blue-600 w-14 h-14" />
            </div>
          </motion.div>
                                               <h1 className="text-xl font-semibold text-gray-800 mb-4">1. Types of Sensitivity</h1>
<div className="space-y-10">

  {/* A. Skin Sensitivity */}
  <div className="bg-blue-50 p-6 rounded-xl space-y-6">
    <h3 className="text-lg font-semibold text-gray-800 text-center">A. Skin Sensitivity</h3>
    <div className="flex flex-col md:flex-row gap-6 items-start">
      <div className="md:w-2/3 flex justify-center">
        <img src="/photos/mechanoreceptors.jpeg" alt="Skin Sensitivity"
          className="w-full max-w-lg h-auto rounded-lg shadow-md" />
      </div>
      <div className="md:w-1/3 text-gray-700 space-y-3">
        <p className="font-medium">Skin sensitivity includes:</p>
        <ul className="list-disc list-outside pl-6">
          <li>Mechanoreception – touch, pressure, vibration, tickling</li>
          <li>Thermoreception – cold and heat</li>
          <li>Nociception – pain</li>
        </ul>
      </div>
    </div>
    <div className="text-gray-700 space-y-3">
      <p className="font-medium">Mechanoreceptors in the skin:</p>
      <ul className="list-disc list-inside pl-6">
        <li>Meissner corpuscles – touch, movement</li>
        <li>Merkel discs – pressure, shape</li>
        <li>Pacinian corpuscles – vibration, acceleration</li>
        <li>Ruffini corpuscles – stretch, sustained pressure</li>
        <li>Hair follicle receptors – light touch</li>
        <li>Free nerve endings – tickling, crude touch</li>
      </ul>
      <p>These receptors differ in adaptation speed, intensity detection, and stimulus duration.</p>
    </div>
  </div>

  {/* B. Thermoreception */}
  <div className="bg-blue-50 p-6 rounded-xl space-y-6">
    <h3 className="text-lg font-semibold text-gray-800 text-center">B. Thermoreception</h3>
    <div className="flex flex-col md:flex-row gap-6 items-start">
      <div className="md:w-2/3 flex justify-center">
        <img src="/photos/thermoreception.jpeg" alt="Thermoreception"
          className="w-full max-w-lg h-auto rounded-lg shadow-md" />
      </div>
      <div className="md:w-1/3 text-gray-700 space-y-3">
        <ul className="list-disc list-outside pl-6">
          <li>Two modalities: cold and warm</li>
          <li>Cold receptors are more numerous than heat receptors</li>
          <li>Cold receptors lie superficially; heat receptors are deeper</li>
          <li>Thermoreceptors adapt rapidly, while perception adapts slowly</li>
        </ul>
      </div>
    </div>
  </div>

  {/* C. Nociception */}
<div className="bg-blue-50 p-6 rounded-xl space-y-6">
  {/* Heading */}
  <h3 className="text-lg font-semibold text-gray-800 text-center">
    C. Nociception (Pain Sensation)
  </h3>

  {/* Image left + all text right */}
  <div className="flex flex-col md:flex-row gap-6 items-start">
    {/* Image */}
    <div className="md:w-1/3 flex justify-center">
      <img
        src="/photos/nociception.jpeg"
        alt="Nociception"
        className="w-full max-w-sm h-auto rounded-lg shadow-md"
      />
    </div>

    {/* Text right */}
    <div className="md:w-2/3 text-gray-700 space-y-3">
      <p>
        Pain arises from strong mechanical, thermal, or chemical stimuli acting mainly on free nerve endings.
      </p>
      <p className="font-medium">Algogenic substances include:</p>
      <ul className="list-disc list-inside pl-6">
        <li>Prostaglandins</li>
        <li>Histamine</li>
        <li>Bradykinin</li>
        <li>Serotonin</li>
        <li>Acidic metabolites</li>
      </ul>
      <p>Pain is a protective systemic reaction.</p>
    </div>
  </div>
</div>

{/* 2. Deep (Proprioceptive) Sensitivity */}
<div className="bg-blue-50 p-6 rounded-xl space-y-6">
  {/* Heading */}
  <h3 className="text-lg font-semibold text-gray-800 text-center">
    2. Deep (Proprioceptive) Sensitivity
  </h3>

  {/* Image left + all text right */}
  <div className="flex flex-col md:flex-row gap-6 items-start">
    {/* Image */}
    <div className="md:w-1/3 flex justify-center">
      <img
        src="/photos/proprioception.jpeg"
        alt="Proprioceptive Sensitivity"
        className="w-full max-w-sm h-auto rounded-lg shadow-md"
      />
    </div>

    {/* Text right */}
    <div className="md:w-2/3 text-gray-700 space-y-3">
      <p>Provides awareness of:</p>
      <ul className="list-disc list-inside pl-6">
        <li>Limb position</li>
        <li>Movement direction and speed</li>
        <li>Muscle force and tension</li>
      </ul>
      <p className="font-medium">Main proprioceptors:</p>
      <ul className="list-disc list-inside pl-6">
        <li>Muscle spindles – muscle length and stretch</li>
        <li>Golgi tendon organs – muscle tension</li>
        <li>Joint receptors – joint movement and position</li>
      </ul>
    </div>
  </div>
</div>

  {/* 3. Visceral Sensitivity */}
<div className="bg-blue-50 p-6 rounded-xl space-y-6">
  {/* Heading */}
  <h3 className="text-lg font-semibold text-gray-800 text-center">
    3. Visceral Sensitivity
  </h3>

  {/* Image centered */}
  <div className="flex justify-center">
    <img
      src="/photos/visceral_sensitivity.jpeg"
      alt="Visceral Sensitivity"
      className="w-full max-w-lg h-auto rounded-lg shadow-md"
    />
  </div>

  {/* Text centered below image */}
  <div className="text-gray-700 space-y-3 text-center max-w-2xl mx-auto">
    <p>Provided by interoreceptors in internal organs:</p>
    <ul className="list-disc list-inside inline-block text-left">
      <li>Mechanoreceptors</li>
      <li>Chemoreceptors</li>
      <li>Osmoreceptors</li>
      <li>Thermoreceptors</li>
      <li>Nociceptors</li>
    </ul>
    <p>
      They monitor internal body state and help maintain homeostasis. Normally, visceral sensations do not reach consciousness unless strongly stimulated.
    </p>
  </div>
</div>

{/* 4. Conductive Pathways */}
<div className="bg-blue-50 p-6 rounded-xl space-y-6">
  {/* Heading */}
  <h3 className="text-lg font-semibold text-gray-800 text-center">
    4. Conductive Pathways
  </h3>

  {/* Image centered */}
  <div className="flex justify-center">
    <img
      src="/photos/conductive_pathways.jpeg"
      alt="Conductive Pathways"
      className="w-full max-w-lg h-auto rounded-lg shadow-md"
    />
  </div>

  {/* Text centered below image */}
  <div className="text-gray-700 space-y-3 text-center max-w-2xl mx-auto">
    <p>Somato-visceral information is transmitted through three systems:</p>
    <ul className="list-disc list-inside inline-block text-left">
      <li><strong>Lemniskal system:</strong> Fine touch, pressure, vibration, proprioception</li>
      <li><strong>Anterolateral system:</strong> Crude touch, acute pain, temperature</li>
      <li><strong>Extralemniskal system:</strong> Slow pain and visceral sensations</li>
    </ul>
    <p>
      Signals pass through the spinal cord → thalamus → sensory and associative cortical areas.
    </p>
  </div>
</div>

                      {/* 5. Cortical Processing */}
  <div className="bg-blue-50 p-6 rounded-xl space-y-6">
    {/* Heading */}
    <h3 className="text-lg font-semibold text-gray-800 text-center">
      5. Cortical Processing
    </h3>

    {/* Image + short text beside */}
    <div className="flex flex-col md:flex-row gap-6 items-start">
      {/* Large image */}
      <div className="md:w-2/3 flex justify-center">
        <img
          src="/photos/cortical_processing.jpeg"
          alt="Cortical Processing"
          className="w-full max-w-lg h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Short summary text */}
      <div className="md:w-1/3 text-gray-700 space-y-3">
        <p className="font-medium">Cortical areas involved in sensation:</p>
        <ul className="list-disc list-outside pl-6">
          <li>Primary somatosensory cortex (S1)</li>
          <li>Secondary somatosensory cortex (S2)</li>
          <li>Associative cortical areas</li>
        </ul>
      </div>
    </div>

    {/* Detailed explanation below image */}
    <div className="text-gray-700 space-y-3">
      <ul className="list-disc list-inside pl-6">
        <li>
          <strong>Primary somatosensory cortex (S1):</strong> precise localization and discrimination
        </li>
        <li>
          <strong>Secondary somatosensory cortex (S2):</strong> bilateral input, integration
        </li>
        <li>
          <strong>Associative cortical areas:</strong> interpretation, biological significance
        </li>
      </ul>
      <p>
       <strong>Note: </strong> Final sensation is formed through interaction between specific and associative cortical zones.
      </p>
    </div>
  </div>
</div>
<p className="text-gray-600 italic mt-6">
  <strong>
    Note: The skin is the body’s largest organ, serving as a protective barrier, regulating temperature, and enabling sensory perception.
  </strong>
</p>
           </motion.div>
           
        

        {/* Footer and Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 mt-10">
          Built responsibly to promote learning, awareness, and ethical use of medical knowledge.
        </motion.p>
      </div>
    </main>
  );
}