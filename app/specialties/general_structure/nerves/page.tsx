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

export default function Nerves() {
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

          <h1 className="text-4xl font-bold text-blue-700 mb-3">Nerves</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            <strong> “Pathways of sensation and command"</strong>
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
               What is the term 'Muscle'?
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Nerves are <strong> cord like structures made up of specialized cells </strong> that transmit <strong>
                    electrical and chemical signals </strong> between different parts of the body and the brain.
                    They form the communication network of the body, allowing us to <strong> sense, think,
                        move and respond </strong> to internal and external stimuli.
               </p>
            </div>
          </div>
          <h1 className="text-xl font-semibold text-gray-800 mt-10">2. Image</h1>

<div className="bg-blue-50 p-6 rounded-xl mt-6 flex flex-col items-center">
  {/* Centered text */}
  <h3 className="text-lg font-semibold text-gray-800 text-center mb-6">
    Lets visualize the structural network of nerves throughout body
  </h3>

  {/* Centered image */}
  <img
    src="/photos/nerves_structure.jpeg"
    alt="Structural network of nerves"
    className="rounded-lg shadow-md max-w-md mx-auto"
  />
</div>
{/* Structure of a Nerve */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  3. Structure of a Nerve
</h1>

<div className="bg-blue-50 p-6 rounded-xl flex flex-col md:flex-row gap-8 items-center">

  {/* Left side: image */}
  <div className="flex-1 flex justify-center">
    <img
      src="/photos/nerve_structure.jpeg"
      alt="Structure of a Nerve"
      className="rounded-lg shadow-md max-w-xs md:max-w-sm"
    />
  </div>

  {/* Right side: text */}
  <div className="flex-1 bg-white rounded-lg shadow p-6">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Nerves are composed of bundles of nerve fibers (axons)</li>
      <li>
        Each nerve fiber is surrounded by connective tissue:
        <ul className="list-disc ml-6 space-y-1 text-gray-600">
          <li><strong>Endoneurium</strong> – surrounds individual nerve fibers</li>
          <li><strong>Perineurium</strong> – surrounds bundles (fascicles)</li>
          <li><strong>Epineurium</strong> – surrounds the entire nerve</li>
        </ul>
      </li>
      <li>Many nerve fibers are covered with a <strong>myelin sheath</strong>, which speeds up signal transmission</li>
    </ul>
  </div>

</div>
{/* Neuron Structure */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  4. Neuron Structure
</h1>

<div className="bg-blue-50 p-6 rounded-xl flex flex-col md:flex-row gap-8 items-center">

  {/* Left side: text */}
  <div className="flex-1 bg-white rounded-lg shadow p-6">
    <p className="text-gray-700 mb-4">
      A neuron is the basic structural and functional unit of the nervous system and consists of:
    </p>
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li><strong>Cell body (soma)</strong> – contains the nucleus</li>
      <li><strong>Dendrites</strong> – receive signals</li>
      <li><strong>Axon</strong> – transmits impulses away from the cell body</li>
    </ul>
  </div>

  {/* Right side: image */}
  <div className="flex-1 flex justify-center">
    <img
      src="/photos/neruron_structure.jpeg"
      alt="Neuron Structure"
      className="rounded-lg shadow-md max-w-xs md:max-w-sm"
    />
  </div>

</div>
{/* Types of Neurons (Unipolar, Bipolar, Multipolar) */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  5. Types of Neurons
</h1>

<div className="bg-blue-50 p-6 rounded-xl flex flex-col md:flex-row gap-8 items-center">

  {/* Left side: single combined image */}
  <div className="flex-1 flex justify-center">
    <img
      src="/photos/types_neuron.jpeg"
      alt="Unipolar, Bipolar, and Multipolar Neurons"
      className="rounded-lg shadow-md max-w-xs md:max-w-sm"
    />
  </div>

  {/* Right side: text for all three types */}
  <div className="flex-1 bg-white rounded-lg shadow p-6">
    <h3 className="font-semibold text-gray-800 mb-4">Structural Types of Neurons</h3>
    <ul className="list-disc ml-6 space-y-3 text-gray-700">
      <li>
        <strong>Unipolar Neuron:</strong> Single process from the cell body, common in sensory pathways.
      </li>
      <li>
        <strong>Bipolar Neuron:</strong> One axon and one dendrite, found in sensory organs like the retina.
      </li>
      <li>
        <strong>Multipolar Neuron:</strong> One axon and multiple dendrites, most common type in brain and spinal cord.
      </li>
    </ul>
  </div>

</div>
{/* Nerve Impulse Transmission */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  6. Nerve Impulse Transmission
</h1>

<div className="bg-blue-50 p-6 rounded-xl flex flex-col md:flex-row gap-8 items-center">

  {/* Left side: text */}
  <div className="flex-1 bg-white rounded-lg shadow p-6">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Electrical impulses travel along the axon</li>
      <li>Chemical neurotransmitters transmit signals across synapses</li>
      <li>Myelinated nerves conduct impulses faster</li>
    </ul>
  </div>

  {/* Right side: image */}
  <div className="flex-1 flex justify-center">
    <img
      src="/photos/nerve_impulse.jpeg"
      alt="Nerve Impulse Transmission"
      className="rounded-lg shadow-md max-w-xs md:max-w-sm"
    />
  </div>

</div>
{/* Common Nerve Disorders */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
 7. Common Nerve Disorders
</h1>

<div className="bg-blue-50 p-6 rounded-xl">
  <div className="bg-white rounded-lg shadow p-6 max-w-2xl">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Peripheral neuropathy</li>
      <li>Neuritis</li>
      <li>Sciatica</li>
      <li>Bell’s palsy</li>
      <li>Carpal tunnel syndrome</li>
      <li>Multiple sclerosis</li>
    </ul>
  </div>
</div>
                            
<p className="text-gray-600 italic mt-6">
  <strong>Nerves form the body’s communication system, enabling sensation,
     movement, coordination, and regulation of vital functions. A healthy 
     nervous system is essential for normal body function, and proper lifestyle 
     habits play a key role in maintaining nerve health and preventing neurological
      disorders</strong></p>


          
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