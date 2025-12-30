'use client';
import Link from 'next/link';

/* Importing Statements */
import { motion } from 'framer-motion';
import {
  FaBookMedical,
  FaStethoscope,
  FaWind,
  FaLungs,
  FaVirus,
  FaBiohazard,
  FaCloud
} from 'react-icons/fa';

export default function Pulmonology() {
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
            <FaLungs className="text-3xl" />
          </div>

          <h1 className="text-4xl font-bold text-blue-700 mb-3">Pulmonology</h1>
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
          className="bg-white rounded-2xl shadow-xl p-10 space-y-10"
        >
          <h1 className="text-xl font-semibold text-gray-800">Introduction</h1>

          {/* About purpose */}
          <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
            <FaBookMedical className="text-blue-600 w-12 h-12 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                What is Department of Pulmonology?
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Pulmonology is the branch of medicine that focuses on the respiratory system —
                the lungs, airways, and associated structures. It deals with prevention,
                diagnosis, and treatment of conditions such as asthma, COPD, pneumonia,
                tuberculosis, and interstitial lung diseases. Pulmonologists manage both
                acute emergencies like pulmonary embolism and chronic conditions requiring
                long-term care, rehabilitation, and preventive strategies.
              </p>
            </div>
          </div>

          {/* Structural Classification Table */}
          <h1 className="text-xl font-semibold text-gray-800 mt-10">
            1. Structural Classification of Pulmonary Disorders (By Affected Area)
          </h1>
          <div className="overflow-x-auto mt-4">
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
                  <td className="border px-4 py-3 font-medium">Airways</td>
                  <td className="border px-4 py-3">Affect airflow in and out of lungs</td>
                  <td className="border px-4 py-3">Asthma, chronic bronchitis, COPD</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-medium">Alveoli</td>
                  <td className="border px-4 py-3">Affect gas exchange at lung sacs</td>
                  <td className="border px-4 py-3">Pneumonia, pulmonary edema, ARDS</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-medium">Interstitium</td>
                  <td className="border px-4 py-3">Affect lung tissue between alveoli</td>
                  <td className="border px-4 py-3">Interstitial lung disease, pulmonary fibrosis</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-medium">Pulmonary Vessels</td>
                  <td className="border px-4 py-3">Affect blood flow in lungs</td>
                  <td className="border px-4 py-3">Pulmonary embolism, pulmonary hypertension</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-medium">Pleura</td>
                  <td className="border px-4 py-3">Affect lining around lungs</td>
                  <td className="border px-4 py-3">Pleural effusion, pneumothorax</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cause-Based Table */}
          <h1 className="text-xl font-semibold text-gray-800 mt-10">
            2. Cause‑Based Pulmonary Disorders
          </h1>
          <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
          <div className="overflow-x-auto mt-4">
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
                  <td className="border px-4 py-3 font-medium">Infectious</td>
                  <td className="border px-4 py-3">Caused by bacteria, viruses, fungi</td>
                  <td className="border px-4 py-3">Pneumonia, tuberculosis, influenza</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-medium">Obstructive</td>
                  <td className="border px-4 py-3">Narrowing/blockage of airways</td>
                  <td className="border px-4 py-3">Asthma, COPD, bronchiectasis</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-medium">Restrictive</td>
                  <td className="border px-4 py-3">Reduced lung expansion</td>
                  <td className="border px-4 py-3">Pulmonary fibrosis, sarcoidosis</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-medium">Vascular</td>
                  <td className="border px-4 py-3">Affect lung blood vessels</td>
                  <td className="border px-4 py-3">Pulmonary embolism, pulmonary hypertension</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-medium">Environmental / Occupational</td>
                  <td className="border px-4 py-3">Exposure to dust, chemicals, allergens</td>
                  <td className="border px-4 py-3">Silicosis, asbestosis, hypersensitivity pneumonitis</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-medium">Neoplastic</td>
                  <td className="border px-4 py-3">Tumors in lungs</td>
                  <td className="border px-4 py-3">Lung cancer, bronchial carcinoma</td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>

                    {/* Major & Frequent Diseases Table */}
          <h1 className="text-xl font-semibold text-gray-800 mt-10">
            3. Major & Frequent Pulmonary Diseases
          </h1>
          <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
          <div className="overflow-x-auto mt-4">
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
                  <td className="border px-4 py-3 font-medium">Asthma</td>
                  <td className="border px-4 py-3">Wheezing, breathlessness, cough</td>
                  <td className="border px-4 py-3">Very common, affects children and adults</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-medium">COPD</td>
                  <td className="border px-4 py-3">Chronic cough, sputum, breathlessness</td>
                  <td className="border px-4 py-3">Major cause of morbidity, linked to smoking</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-medium">Pneumonia</td>
                  <td className="border px-4 py-3">Fever, cough, chest pain, breathlessness</td>
                  <td className="border px-4 py-3">Leading infectious cause of death worldwide</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-medium">Tuberculosis</td>
                  <td className="border px-4 py-3">Chronic cough, weight loss, night sweats</td>
                  <td className="border px-4 py-3">High burden in developing countries</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-medium">Pulmonary Embolism</td>
                  <td className="border px-4 py-3">Sudden chest pain, breathlessness</td>
                  <td className="border px-4 py-3">Life‑threatening, requires urgent care</td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>

          {/* Symptoms Table */}
          <h1 className="text-xl font-semibold text-gray-800 mt-10">
            4. Symptoms of Major Pulmonary Diseases
          </h1>
          <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
          <div className="overflow-x-auto mt-4">
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
                  <td className="border px-4 py-3 font-medium">Asthma</td>
                  <td className="border px-4 py-3">Wheezing, shortness of breath, chest tightness</td>
                  <td className="border px-4 py-3">Common chronic condition, often controllable</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-medium">COPD</td>
                  <td className="border px-4 py-3">Persistent cough, sputum, breathlessness</td>
                  <td className="border px-4 py-3">Major disability, high healthcare costs</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-medium">Pneumonia</td>
                  <td className="border px-4 py-3">Fever, productive cough, chest pain</td>
                  <td className="border px-4 py-3">High mortality if untreated</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-medium">Tuberculosis</td>
                  <td className="border px-4 py-3">Chronic cough, hemoptysis, weight loss</td>
                  <td className="border px-4 py-3">Public health challenge, requires long treatment</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-medium">Pulmonary Embolism</td>
                  <td className="border px-4 py-3">Sudden breathlessness, chest pain, rapid heart rate</td>
                  <td className="border px-4 py-3">Medical emergency, can be fatal</td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>

          {/* Common Conditions Buttons */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  5. Common Pulmonary Conditions
</h1>

<div className="bg-blue-50 p-6 rounded-xl mt-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    
    {/* Asthma */}
    <Link href="/asthma">
      <button
        type="button"
        className="w-full flex items-center justify-center gap-3 bg-blue-100 text-blue-700 py-6 px-6 rounded-xl shadow-md font-semibold
                   transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-200"
      >
        <FaWind className="text-xl" />
        <span>Asthma</span>
      </button>
    </Link>

    {/* Pneumonia */}
    <Link href="/specialties/pulmonology/pneumonia">
      <button
        type="button"
        className="w-full flex items-center justify-center gap-3 bg-blue-100 text-blue-700 py-6 px-6 rounded-xl shadow-md font-semibold
                   transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-200"
      >
        <FaVirus className="text-xl" />
        <span>Pneumonia</span>
      </button>
    </Link>

    {/* Tuberculosis */}
    <Link href="/specialties/pulmonology/tuberculosis">
      <button
        type="button"
        className="w-full flex items-center justify-center gap-3 bg-blue-100 text-blue-700 py-6 px-6 rounded-xl shadow-md font-semibold
                   transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-200"
      >
        <FaBiohazard className="text-xl" />
        <span>Tuberculosis</span>
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
          className="text-center text-sm text-gray-500 mt-10"
        >
          Built responsibly to promote learning, awareness, and ethical use of medical knowledge.
        </motion.p>

      </div>
    </main>
  );
}