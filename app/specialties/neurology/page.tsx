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
  FaUserInjured

 
} from 'react-icons/fa';

export default function Neurology() {
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

          <h1 className="text-4xl font-bold text-blue-700 mb-3">Neurology</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            <strong>Navigating the Neural Network</strong>
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
                What is Department of Neurology?
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                         Neurology is the branch of medicine that deals with 
                         disorders of the brain, spinal cord, peripheral nerves,
                          muscles, and autonomic nervous system. Neurological 
                          diseases can affect movement, sensation, speech, memory,
                           behavior, and consciousness. </p>
            </div>
          </div>
                    <h1 className="text-xl font-semibold text-gray-800">Division of Neurological Diseases</h1>

          {/* Division of Diseases */}
          <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
            <div>
              <p className="text-gray-600 mt-2 leading-relaxed">
                                Neurological diseases are commonly classified based on
                                <strong>cause,affected structure, and clinical presentation.</strong><br/><br/></p>
                              {/* Table of division */}   
                                            <h3 className="text-xl font-semibold text-gray-800">1. Structural Classfication of Neurological Disorders(By Affectected Area's)<br/><br/> </h3>
                              <div className="overflow-x-auto">
  <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
    <thead className="bg-blue-100">
      <tr>
        <th className="border px-4 py-3 text-left">Affected Area</th>
        <th className="border px-4 py-3 text-left">Description</th>
        <th className="border px-4 py-3 text-left">Examples</th>
      </tr>
    </thead>

    <tbody className="bg-white text-gray-700">

      <tr>
        <td className="border px-4 py-3 font-medium">Brain Disorders</td>
        <td className="border px-4 py-3">
          Affect cognition, memory, movement, speech, or consciousness
        </td>
        <td className="border px-4 py-3">
          Stroke, epilepsy, brain tumors, dementia
        </td>
      </tr>

      <tr>
        <td className="border px-4 py-3 font-medium">Spinal Cord Disorders</td>
        <td className="border px-4 py-3">
          Affect movement and sensation below the level of injury
        </td>
        <td className="border px-4 py-3">
          Spinal cord injury, multiple sclerosis, cervical myelopathy
        </td>
      </tr>

      <tr>
        <td className="border px-4 py-3 font-medium">Peripheral Nerve Disorders</td>
        <td className="border px-4 py-3">
          Affect nerves outside the brain and spinal cord
        </td>
        <td className="border px-4 py-3">
          Peripheral neuropathy, Guillain-Barré syndrome, carpal tunnel syndrome
        </td>
      </tr>

      <tr>
        <td className="border px-4 py-3 font-medium">Muscle (Neuromuscular) Disorders</td>
        <td className="border px-4 py-3">
          Affect muscle strength, tone, and neuromuscular transmission
        </td>
        <td className="border px-4 py-3">
          Muscular dystrophy, myasthenia gravis, myopathies
        </td>
      </tr>

    </tbody>
  </table>
</div>
                             
            </div>
          </div>
          {/* Cause based disorders*/}
   

          
          <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800">2. Cause-Based Neurological Disorders  </h3>
                             <div className="overflow-x-auto mt-10">
  <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
    <thead className="bg-blue-100">
      <tr>
        <th className="border px-4 py-3 text-left">Cause Category</th>
        <th className="border px-4 py-3 text-left">Description</th>
        <th className="border px-4 py-3 text-left">Examples</th>
      </tr>
    </thead>

    <tbody className="bg-white text-gray-700">

      <tr>
        <td className="border px-4 py-3 font-medium">Genetic / Inherited</td>
        <td className="border px-4 py-3">
          Disorders caused by inherited gene mutations
        </td>
        <td className="border px-4 py-3">
          Huntington’s disease, muscular dystrophy, spinal muscular atrophy
        </td>
      </tr>

      <tr>
        <td className="border px-4 py-3 font-medium">Infectious</td>
        <td className="border px-4 py-3">
          Caused by bacterial, viral, or parasitic infections
        </td>
        <td className="border px-4 py-3">
          Meningitis, encephalitis, neurotuberculosis
        </td>
      </tr>

      <tr>
        <td className="border px-4 py-3 font-medium">Vascular</td>
        <td className="border px-4 py-3">
          Result from disrupted blood supply to nervous tissue
        </td>
        <td className="border px-4 py-3">
          Stroke, TIA, cerebral hemorrhage
        </td>
      </tr>

      <tr>
        <td className="border px-4 py-3 font-medium">Degenerative</td>
        <td className="border px-4 py-3">
          Progressive loss of neurons over time
        </td>
        <td className="border px-4 py-3">
          Alzheimer’s, Parkinson’s disease, ALS
        </td>
      </tr>

      <tr>
        <td className="border px-4 py-3 font-medium">Electrical</td>
        <td className="border px-4 py-3">
          Abnormal electrical activity in the brain
        </td>
        <td className="border px-4 py-3">
          Epilepsy, seizure disorders
        </td>
      </tr>

      <tr>
        <td className="border px-4 py-3 font-medium">Metabolic / Toxic</td>
        <td className="border px-4 py-3">
          Due to metabolic imbalance or toxic exposure
        </td>
        <td className="border px-4 py-3">
          Diabetic neuropathy, vitamin B12 deficiency, alcohol neuropathy
        </td>
      </tr>

      <tr>
        <td className="border px-4 py-3 font-medium">Traumatic</td>
        <td className="border px-4 py-3">
          Caused by physical injury to nervous system
        </td>
        <td className="border px-4 py-3">
          Head injury, spinal cord injury, post-traumatic epilepsy
        </td>
      </tr>

    </tbody>
  </table>
</div>
            </div>
          </div>
                    {/* Major Frequent*/}
          <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">3. Major & Frequent Neurological Diseases</h3>
                           <div className="overflow-x-auto mt-10">
  <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
    <thead className="bg-blue-100">
      <tr>
        <th className="border px-4 py-3 text-left">Disease</th>
        <th className="border px-4 py-3 text-left">Key Features</th>
        <th className="border px-4 py-3 text-left">Public Impact</th>
      </tr>
    </thead>

    <tbody className="bg-white text-gray-700">

      <tr>
        <td className="border px-4 py-3 font-medium">Stroke</td>
        <td className="border px-4 py-3">
          Sudden weakness, speech difficulty, facial drooping
        </td>
        <td className="border px-4 py-3">
          Leading cause of disability worldwide
        </td>
      </tr>

      <tr>
        <td className="border px-4 py-3 font-medium">Epilepsy</td>
        <td className="border px-4 py-3">
          Recurrent unprovoked seizures
        </td>
        <td className="border px-4 py-3">
          Affects all age groups, often controllable
        </td>
      </tr>

      <tr>
        <td className="border px-4 py-3 font-medium">Headache Disorders</td>
        <td className="border px-4 py-3">
          Migraine, tension-type, cluster headaches
        </td>
        <td className="border px-4 py-3">
          Migraine affects ~15–20% of population
        </td>
      </tr>

      <tr>
        <td className="border px-4 py-3 font-medium">Dementia</td>
        <td className="border px-4 py-3">
          Progressive memory and cognitive decline
        </td>
        <td className="border px-4 py-3">
          Increasing rapidly due to aging population
        </td>
      </tr>

      <tr>
        <td className="border px-4 py-3 font-medium">Peripheral Neuropathy</td>
        <td className="border px-4 py-3">
          Numbness, tingling, burning pain in limbs
        </td>
        <td className="border px-4 py-3">
          Very common in diabetes, underdiagnosed
        </td>
      </tr>

    </tbody>
  </table>
</div>
            </div>
          </div>
                    <h1 className="text-xl font-semibold text-gray-800">4. Symptoms</h1>
                    {/* Symptoms*/}
          <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Major Symptoms of some Neurological Diseases
              </h3>
                      <div className="overflow-x-auto mt-10">
  <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
    <thead className="bg-blue-100">
      <tr>
        <th className="border px-4 py-3 text-left">Disease</th>
        <th className="border px-4 py-3 text-left">Key Features</th>
        <th className="border px-4 py-3 text-left">Public Impact</th>
      </tr>
    </thead>

    <tbody className="bg-white text-gray-700">

      <tr>
        <td className="border px-4 py-3 font-medium">Stroke</td>
        <td className="border px-4 py-3">
          Sudden weakness, speech difficulty, facial drooping
        </td>
        <td className="border px-4 py-3">
          Leading cause of disability worldwide
        </td>
      </tr>

      <tr>
        <td className="border px-4 py-3 font-medium">Epilepsy</td>
        <td className="border px-4 py-3">
          Recurrent unprovoked seizures
        </td>
        <td className="border px-4 py-3">
          Affects all age groups, often controllable
        </td>
      </tr>

      <tr>
        <td className="border px-4 py-3 font-medium">Headache Disorders</td>
        <td className="border px-4 py-3">
          Migraine, tension-type, cluster headaches
        </td>
        <td className="border px-4 py-3">
          Migraine affects ~15–20% of population
        </td>
      </tr>

      <tr>
        <td className="border px-4 py-3 font-medium">Dementia</td>
        <td className="border px-4 py-3">
          Progressive memory and cognitive decline
        </td>
        <td className="border px-4 py-3">
          Increasing rapidly due to aging population
        </td>
      </tr>

      <tr>
        <td className="border px-4 py-3 font-medium">Peripheral Neuropathy</td>
        <td className="border px-4 py-3">
          Numbness, tingling, burning pain in limbs
        </td>
        <td className="border px-4 py-3">
          Very common in diabetes, underdiagnosed
        </td>
      </tr>

    </tbody>
  </table>
</div>
            </div>
          </div>

            {/* Common Neurological Conditions Buttons */}
<div className="bg-blue-50 p-6 rounded-xl">
  <h3 className="text-xl font-semibold text-gray-800 mb-6">
    Common Neurological Conditions
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

    {/* Stroke */}
    <Link href="/specialties/neurology/stroke">
      <button
        type="button"
        className="w-full flex items-center justify-center gap-3 bg-blue-100 text-blue-700 py-6 px-6 rounded-xl shadow-md font-semibold
                   transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-200"
      >
        <FaBrain className="text-xl" />
        <span>Stroke</span>
      </button>
    </Link>

    {/* Migraine */}
    <Link href="/specialties/neurology/migraine">
      <button
        type="button"
        className="w-full flex items-center justify-center gap-3 bg-blue-100 text-blue-700 py-6 px-6 rounded-xl shadow-md font-semibold
                   transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-200"
      >
        <FaUserInjured className="text-xl" />
        <span>Migraine</span>
      </button>
    </Link>

    {/* Epilepsy */}
    <Link href="/specialties/neurology/epilepsy">
      <button
        type="button"
        className="w-full flex items-center justify-center gap-3 bg-blue-100 text-blue-700 py-6 px-6 rounded-xl shadow-md font-semibold
                   transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-200"
      >
        <FaBolt className="text-xl" />
        <span>Epilepsy</span>
      </button>
    </Link>

  </div>
</div>


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