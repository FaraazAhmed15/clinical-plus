'use client';
import { motion } from 'framer-motion';
import {
  FaBookMedical,
  FaHandsWash,
  FaTooth,
  FaShower,
  FaTshirt,
  FaBaby
} from 'react-icons/fa';

export default function SexualHygiene() {
  return (
    <main className="min-h-screen bg-blue-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">

          <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <FaBookMedical className="text-3xl" />
          </div>

          <h1 className="text-4xl font-bold text-blue-700 mb-3">
            Sexual Hygiene
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            <strong>Medical overview for reproductive and preventive health</strong>
          </p>
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-10 space-y-12">

          {/* 1. Definition */}
          <h1 className="text-xl font-semibold text-gray-800">Introduction</h1>
          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-800">
              What is the term 'Sexual Hygiene'?<br/><br/>
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Sexual hygiene refers to practices that maintain cleanliness, prevent infections,
              and promote reproductive health during and after sexual activity. It is a critical
              component of preventive medicine, reproductive health, and public health awareness.
            </p>
          </div>

          {/* 2. Core Practices */}
          <h1 className="text-xl font-semibold text-gray-800">2. Core Practices of Sexual Hygiene</h1>
          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Let’s Understand the Core Practices of Sexual Hygiene
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full rounded-lg shadow-md bg-white">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-gray-800 font-semibold border-b">Stage</th>
                    <th className="px-6 py-3 text-left text-gray-800 font-semibold border-b">Key Practices</th>
                    <th className="px-6 py-3 text-left text-gray-800 font-semibold border-b">Health Impact</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="px-6 py-3 border-b font-medium">Pre‑sexual hygiene</td>
                    <td className="px-6 py-3 border-b">Wash genital area, clean hands, trimmed nails</td>
                    <td className="px-6 py-3 border-b">Prevents introduction of pathogens</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 border-b font-medium">During sexual activity</td>
                    <td className="px-6 py-3 border-b">Safe sex practices, condom use</td>
                    <td className="px-6 py-3 border-b">Reduces risk of STIs, unintended pregnancy</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 border-b font-medium">Post‑sexual hygiene</td>
                    <td className="px-6 py-3 border-b">Wash genital area, urinate after intercourse</td>
                    <td className="px-6 py-3 border-b">Reduces UTI risk, maintains comfort</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 3. Gender-Specific Considerations */}
          <h1 className="text-xl font-semibold text-gray-800">3. Gender-Specific Considerations</h1>
          <div className="bg-blue-50 p-6 rounded-xl">
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li><strong>Women:</strong> Wiping front to back, avoiding tight synthetic clothing, menstrual hygiene</li>
              <li><strong>Men:</strong> Cleaning genital area regularly, especially under foreskin if uncircumcised</li>
            </ul>
          </div>

          {/* Image Section */}
          <h1 className="text-xl font-semibold text-gray-800">4. Image</h1>
          <div className="bg-blue-100 p-6 rounded-xl flex flex-col items-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Let’s visualize some routines where sexual hygiene plays an important role
            </h3>
            <img
              src="/photos/sexual_hygiene.jpeg"
              alt="Sexual Hygiene Practices"
              className="rounded-xl shadow-md max-w-md w-full"
            />
          </div>

          {/* 5. Health Importance */}
          <h1 className="text-xl font-semibold text-gray-800">5. Health Importance</h1>
          <div className="bg-blue-50 p-6 rounded-xl">
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Prevents urinary tract infections (UTIs)</li>
              <li>Reduces risk of sexually transmitted infections (STIs)</li>
              <li>Supports fertility and reproductive health</li>
              <li>Promotes comfort, confidence, and partner well-being</li>
            </ul>
          </div>

          {/* 6. Common Problems */}
          <h1 className="text-xl font-semibold text-gray-800">6. Common Problems from Poor Sexual Hygiene</h1>
          <div className="bg-blue-50 p-6 rounded-xl">
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Urinary tract infections (UTIs)</li>
              <li>Vaginal infections (bacterial vaginosis, candidiasis)</li>
              <li>Penile infections (balanitis)</li>
              <li>Increased risk of STIs</li>
              <li>Psychological stress due to odor or discomfort</li>
            </ul>
          </div>

          {/* 7. Educational Measures */}
          <h1 className="text-xl font-semibold text-gray-800">7. Educational & Preventive Measures</h1>
          <div className="bg-blue-50 p-6 rounded-xl">
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Public health campaigns on safe sex and hygiene</li>
              <li>School and college education programs</li>
              <li>Counseling in reproductive health clinics</li>
              <li>Promoting condom use and STI screening</li>
              <li>Encouraging partner communication about hygiene</li>
            </ul>
          </div>

          {/* High-Yield */}
          <div className="bg-blue-100 p-6 rounded-xl border-l-4 border-blue-500">
            <p className="font-semibold text-gray-800">High-Yield Points</p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Urinating after intercourse reduces UTI risk (especially in women)</li>
              <li>Safe sex practices are both hygiene and preventive medicine</li>
              <li>Cleaning under foreskin is essential in uncircumcised men</li>
              <li>Avoid douching — it disrupts vaginal flora and increases infection risk</li>
            </ul>
          </div>

          {/* Conclusion Note */}
          <p className="text-gray-600 italic mt-6">
            <strong>
              Note: Sexual hygiene is a vital aspect of reproductive health. It prevents infections,
              supports fertility, and promotes comfort and confidence. Effective practices — including
              genital cleanliness, safe sex, and post‑intercourse care — must be taught early, reinforced
              across age groups, and integrated into community health education.
            </strong>
          </p>

        </motion.div>
        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 mt-10"
        >
          Developed for medical education and public health awareness.
        </motion.p>

      </div>
    </main>
  );
}