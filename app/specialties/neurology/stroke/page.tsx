'use client';

/* Import Statements */
import { motion } from 'framer-motion';
import {
  FaBookMedical,
  FaMicroscope,
  FaShieldAlt,
  FaStethoscope,
} from 'react-icons/fa';

export default function Stroke() {
  return (
    <main className="min-h-screen bg-blue-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <FaStethoscope className="text-3xl" />
          </div>

          <h1 className="text-4xl font-bold text-blue-700 mb-3">Stroke</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A neurological emergency that requires immediate medical attention.
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
          <h2 className="text-xl font-semibold text-gray-800">Introduction</h2>

          <div className="flex gap-5 items-center bg-blue-50 p-6 rounded-xl">
            <FaBookMedical className="text-blue-600 w-12 h-12 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                What is Stroke?
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Stroke is a medical emergency that occurs when blood flow to the brain
                is interrupted or reduced, depriving brain cells of oxygen and nutrients.
                Without prompt treatment, it can lead to permanent brain damage or death.
              </p>
            </div>
          </div>

          {/* Types of Stroke */}
          <h2 className="text-xl font-semibold text-gray-800">Types of Stroke</h2>

          <div className="flex gap-5 items-start bg-blue-50 p-6 rounded-xl">
            <FaMicroscope className="text-blue-600 w-12 h-12 flex-shrink-0" />
            <div className="space-y-3">
              <p className="text-gray-600">
                <strong>Ischemic Stroke:</strong> Caused by blockage of a blood vessel supplying the brain. (Most common)
              </p>
              <p className="text-gray-600">
                <strong>Hemorrhagic Stroke:</strong> Caused by rupture of a blood vessel leading to bleeding in the brain.
              </p>
              <p className="text-gray-600">
                <strong>Transient Ischemic Attack (TIA):</strong> Temporary stroke-like symptoms that act as a warning sign.
              </p>
            </div>
          </div>

          <h1 className="text-xl font-semibold text-gray-800">Visualize Stroke inside Brain </h1>

              {/* Image */}
<div className="bg-blue-50 p-6 rounded-xl flex flex-col items-center">
  <div>
      <img
        src="/photos/stroke.jpeg"
        alt="Visualizing stroke inside Brain"
        className="rounded-xl shadow-md max-w-md w-full"/>
    </div>
</div>

                 {/* Symptoms */}
<h2 className="text-xl font-semibold text-gray-800">Common Symptoms</h2>
<div className="flex gap-5 items-center bg-blue-50 p-6 rounded-xl">
  <FaShieldAlt className="text-blue-600 w-12 h-12 flex-shrink-0" />
  <ul className="list-disc list-inside text-gray-600 space-y-2">
    <li>Sudden weakness or numbness of face, arm, or leg</li>
    <li>Difficulty speaking or understanding speech</li>
    <li>Sudden vision problems</li>
    <li>Dizziness or loss of balance</li>
    <li>Severe headache with no known cause</li>
  </ul>
</div>


                  {/* Risk Factors */}
<h2 className="text-xl font-semibold text-gray-800">Risk Factors</h2>

<div className="flex gap-5 items-center bg-blue-50 p-6 rounded-xl">
  <FaShieldAlt className="text-blue-600 w-12 h-12 flex-shrink-0" />
  <div className="space-y-2 text-gray-600">
    <p>• High blood pressure</p>
    <p>• Diabetes</p>
    <p>• Smoking</p>
    <p>• High cholesterol</p>
    <p>• Obesity and physical inactivity</p>
  </div>
</div>


              {/* Prevention */}
<h2 className="text-xl font-semibold text-gray-800">Prevention</h2>
<div className="flex gap-5 items-center bg-blue-50 p-6 rounded-xl text-gray-600">
  <FaShieldAlt className="text-blue-600 w-12 h-12 flex-shrink-0" />
  <div className="space-y-2">
    <p>• Maintain healthy blood pressure</p>
    <p>• Exercise regularly</p>
    <p>• Eat a balanced diet</p>
    <p>• Quit smoking</p>
    <p>• Take prescribed medications regularly</p>
  </div>
</div>


        </motion.div>
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