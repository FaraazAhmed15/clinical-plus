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

export default function PersonalHygiene() {
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
            Personal Hygiene
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            <strong>Medical overview for preventive and community health</strong>
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
                      
              <h3 className="text-xl font-semibold text-gray-800"> What is the term 'Personal Hygiene'?<br/><br/>
              </h3>
            <p className="text-gray-600 leading-relaxed">
              Personal hygiene refers to daily practices that maintain cleanliness, prevent disease,
              and promote overall health. It includes care of the skin, hair, nails, oral cavity,
              clothing, and environment — but excludes sexual hygiene, which is a separate topic.
            </p>
          </div>

          {/* 2. Core Areas */}
          <h1 className="text-xl font-semibold text-gray-800">2. Core Areas of Personal Hygiene</h1>
          <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800">
                Lte's Understand the Core areas of Personal Hygiene 
              </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full rounded-lg shadow-md bg-white">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-gray-800 font-semibold border-b">Area</th>
                    <th className="px-6 py-3 text-left text-gray-800 font-semibold border-b">Key Practices</th>
                    <th className="px-6 py-3 text-left text-gray-800 font-semibold border-b">Health Impact</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="px-6 py-3 border-b font-medium">Skin Hygiene</td>
                    <td className="px-6 py-3 border-b">Daily bathing, keeping skin dry</td>
                    <td className="px-6 py-3 border-b">Prevents bacterial/fungal infections, body odor</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 border-b font-medium">Hand Hygiene</td>
                    <td className="px-6 py-3 border-b">Frequent washing before meals, after toilet</td>
                    <td className="px-6 py-3 border-b">Reduces transmission of respiratory & GI diseases</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 border-b font-medium">Oral Hygiene</td>
                    <td className="px-6 py-3 border-b">Brushing twice daily, flossing</td>
                    <td className="px-6 py-3 border-b">Prevents dental caries, gum disease, halitosis</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 border-b font-medium">Clothing Hygiene</td>
                    <td className="px-6 py-3 border-b">Wearing clean clothes, changing undergarments</td>
                    <td className="px-6 py-3 border-b">Prevents skin irritation, infections</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 border-b font-medium">Foot Hygiene</td>
                    <td className="px-6 py-3 border-b">Washing feet, drying between toes</td>
                    <td className="px-6 py-3 border-b">Prevents athlete’s foot, fungal infections</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 font-medium">Environmental Hygiene</td>
                    <td className="px-6 py-3">Clean living spaces, safe water, waste disposal</td>
                    <td className="px-6 py-3">Reduces vector-borne and waterborne diseases</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

            

          {/* 3. Age-Specific Considerations */}
          <h1 className="text-xl font-semibold text-gray-800">3. Age-Specific Considerations</h1>
          <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800">
                Different Types of Age-Specific Considerations<br/><br/>
              </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li><strong>Children:</strong> Handwashing education, nail trimming, clean uniforms</li>
              <li><strong>Adolescents:</strong> Managing body odor, acne care, hair hygiene</li>
              <li><strong>Adults:</strong> Workplace hygiene, stress-related neglect</li>
              <li><strong>Elderly:</strong> Oral hygiene, skin hydration, prevention of bed sores</li>
            </ul>
          </div>


           {/* Image Section */}
<h1 className="text-xl font-semibold text-gray-800">4. Image</h1>

<div className="bg-blue-100 p-6 rounded-xl  flex flex-col items-center">
  <h3 className="text-xl font-semibold text-gray-800 mb-4">
    Let’s visualize some daily routines where personal hygiene plays an important role
  </h3>
  
  <img
    src="/photos/personal_hygiene.jpeg"
    alt="Personal Hygiene Practices"
    className="rounded-xl shadow-md max-w-md w-full"
  />
</div>


          {/* 4. Benefits */}
          <h1 className="text-xl font-semibold text-gray-800">5. Health & Social Benefits</h1>
          <div className="bg-blue-50 p-6 rounded-xl">
                         <h3 className="text-xl font-semibold text-gray-800">
                Various Social and Health Benefits<br/><br/>
              </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Disease prevention: reduces diarrheal, respiratory, dental problems</li>
              <li>Psychological well-being: boosts confidence, reduces stigma</li>
              <li>Community health: collective hygiene lowers outbreak risks</li>
            </ul>
          </div>

          {/* 5. Challenges */}
          <h1 className="text-xl font-semibold text-gray-800">6. Challenges & Barriers</h1>
          <div className="bg-blue-50 p-6 rounded-xl">
                         <h3 className="text-xl font-semibold text-gray-800">
                Different Types of Challenges and Barriers in Personal Hygiene<br/><br/>
              </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Lack of awareness in low-resource settings</li>
              <li>Water scarcity limiting bathing/handwashing</li>
              <li>Cultural practices discouraging certain hygiene behaviors</li>
              <li>Neglect in adolescence due to lifestyle changes</li>
            </ul>
          </div>

          {/* 6. Educational Measures */}
          <h1 className="text-xl font-semibold text-gray-800">7. Educational & Policy Measures</h1>
          <div className="bg-blue-50 p-6 rounded-xl">
                         <h3 className="text-xl font-semibold text-gray-800">
                Different Types of Policy and Measures to Maintain Personal Hygiene in Educational Institutions<br/><br/>
              </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>School-based hygiene programs (handwashing campaigns)</li>
              <li>Public health initiatives promoting oral hygiene & clean water</li>
              <li>Workplace hygiene standards (clean toilets, safe food handling)</li>
            </ul>
          </div>

          {/* High-Yield */}
          <div className="bg-blue-100 p-6 rounded-xl border-l-4 border-blue-500">
            <p className="font-semibold text-gray-800">High-Yield Points</p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Hand hygiene is the most effective preventive measure</li>
              <li>Personal hygiene directly affects maternal and child health</li>
              <li>Practices must be evidence-based and practical</li>
            </ul>
          </div>

          <p className="text-gray-600 italic mt-6">
           <strong>
             Note: Personal hygiene — including skin, hand, oral, hair, nail, clothing, and environmental care —
             is essential for preventing infections, promoting confidence, and supporting public health.
             Effective hygiene practices must be taught early, reinforced across age groups, and supported
              by community infrastructure.</strong>
          </p>

        </motion.div>

                {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 mt-10">
          Developed for medical education and public health awareness.
        </motion.p>

      </div>
    </main>
  );
}