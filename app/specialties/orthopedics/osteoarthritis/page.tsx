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

export default function Osteaoarthritis() {
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

          <h1 className="text-4xl font-bold text-blue-700 mb-3">Osteoarthritis</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            <strong>Where bones find resilience and movement regains freedom</strong>
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
               What is the term 'Osteaoarthritis'?
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
               Osteoarthritis is a <strong>chronic, progressive degenerative joint disease </strong>characterized by 
                the gradual <strong>breakedown of articular cartilage,</strong> changes in the <strong>subchondral
                bone,</strong> formation of <strong>osteophytes (bone spurs),</strong> and varying degrees of
                <strong>synovial inflammation.</strong> It is the most common form of arthritis and a leading
                cause of pain and disablity worldwide, particularly among older adults. </p>
            </div>
          </div>
          {/* Epidemiology */}
          <h1 className="text-xl font-semibold text-gray-800">2. Epidemiology</h1>
          <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
            <div>
                <h3 className="text-lg font-semibold text-gray-800 text-center">Lets Understand the Epidemiology</h3>
                <div className="flex flex-col md:flex-row items-center gap-8 bg-blue-50 p-6 rounded-xl">
                    <div className="flex-1 flex justify-center">
                      <img
                         src="/photos/osteoarthritis.jpeg"
                         alt="Epidemiiology of osteoarthritis"
                         className="rounded-lg shadow-md max-w-xs md:max-w-sm"/>
                    </div>
                    <div className="flex-1">
                      <div className="bg-blue-50 p-6 rounded-xl mt-6">

  <ul className="list-disc list-outside text-gray-700 space-y-2">
    <li>Osteoarthritis affects hundreds of millions of people globally</li>
    <li>Prevalence increases significantly with age, especially after 50 years</li>
    <li>More common in women, particularly after <strong>menopause</strong></li>
    <li>
      Commonly affected joints include:
      <ul className="list-[upper-roman] ml-6 list-outside mt-2 space-y-1 text-gray-600">
        <li>Knee</li>
        <li>Hip</li>
        <li>Hand (distal and proximal <strong>interphalangeal</strong> joints)</li>
        <li>Spine (cervical and lumbar)</li>
        <li>First carpometacarpal joint (thumb base)</li>
      </ul>
    </li>
  </ul>
</div>

                        </div>


                </div>
            </div>

          </div>
          {/* Epidemiology */}
          <h1 className="text-xl font-semibold text-gray-800">3. Risk Factors</h1>
          <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
            <div>
                {/* Epidemiology / Risk Factors */}

<div>
 

<div className="bg-blue-50 p-6 rounded-xl mt-6">
 

  {/* Responsive Table */}
  <div className="overflow-x-auto">
    <table className="w-full border border-gray-300 rounded-lg">
      <thead className="bg-blue-100">
        <tr>
          <th className="border px-4 py-2 text-left">Category</th>
          <th className="border px-4 py-2 text-left">Details</th>
        </tr>
      </thead>
      <tbody className="bg-white text-gray-700">
        <tr>
          <td className="border px-4 py-2 font-semibold">A. Age</td>
          <td className="border px-4 py-2">
            <ul className="list-[upper-roman] ml-4 space-y-1">
              <li>Aging leads to reduced cartilage repair capacity</li>
              <li>Accumulation of micro-damage over time</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td className="border px-4 py-2 font-semibold">B. Genetics</td>
          <td className="border px-4 py-2">
            <ul className="list-[upper-roman] ml-4 space-y-1">
              <li>Family history increases risk</li>
              <li>Genetic variations affect cartilage structure and joint shape</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td className="border px-4 py-2 font-semibold">C. Mechanical Stress</td>
          <td className="border px-4 py-2">
            <ul className="list-[upper-roman] ml-4 space-y-1">
              <li>Obesity (increased load on weight-bearing joints)</li>
              <li>Repetitive joint use (occupational or sports-related)</li>
              <li>Joint malalignment (varus or valgus deformities)</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td className="border px-4 py-2 font-semibold">D. Joint Injury</td>
          <td className="border px-4 py-2">
            <ul className="list-[upper-roman] ml-4 space-y-1">
              <li>Previous fractures involving joints</li>
              <li>Ligament or meniscal injuries</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td className="border px-4 py-2 font-semibold">E. Metabolic Factors</td>
          <td className="border px-4 py-2">
            <ul className="list-[upper-roman] ml-4 space-y-1">
              <li>Diabetes mellitus</li>
              <li>Dyslipidemia</li>
              <li>Metabolic syndrome</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</div>
  


            </div>
             </div>
              {/* Epidemiology / Risk Factors */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">4. Pathophysiology </h1>

<div className="bg-blue-50 p-6 rounded-xl mt-6">
    <h5 className="text-lg font-semibold text-gray-700 text-center">Osteoarthritis is no longer considered a disease of cartilage alone.
        It involves the <strong>entire joint organ</strong></h5>
        {/* Pathophysiology Section */}

<div className="bg-blue-50 p-6 rounded-xl mt-6 flex flex-col gap-8">

  {/* Top row: image + cartilage degeneration */}
  <div className="flex flex-col md:flex-row gap-6 items-center">
    {/* Left image */}
    <div className="flex-1 flex justify-center">
      <img
        src="/photos/degeneration.jpeg"
        alt="Cartilage Degeneration"
        className="rounded-lg shadow-md max-w-xs md:max-w-sm"
      />
    </div>

    {/* Right text */}
    <div className="flex-1 bg-white rounded-lg shadow p-4">
      <h3 className="font-semibold bg-blue-100 text-gray-800 mb-2">A. Cartilage Degeneration</h3>
      <ul className="list-disc ml-4 space-y-1 text-gray-600">
        <li>Loss of proteoglycans and collagen</li>
        <li>Reduced elasticity and shock absorption</li>
        <li>Surface fibrillation and fissuring</li>
        <li>Progressive cartilage thinning leading to bone exposure</li>
      </ul>
    </div>
  </div>

  {/* Bottom row: 3 topics side by side */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    {/* Subchondral Bone Changes */}
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-semibold bg-blue-100 text-gray-800 mb-2">B. Subchondral Bone Changes</h3>
      <ul className="list-disc ml-4 space-y-1 text-gray-600">
        <li>Increased bone remodeling</li>
        <li>Subchondral sclerosis</li>
        <li>Formation of cysts</li>
        <li>Microfractures</li>
      </ul>
    </div>

    {/* Osteophyte Formation */}
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-semibold  bg-blue-100 text-gray-800 mb-2">C. Osteophyte Formation</h3>
      <ul className="list-dic ml-4 space-y-1 text-gray-600">
        <li>New bone growth at joint margins</li>
        <li>Causes joint stiffness and restricted movement</li>
      </ul>
    </div>

    {/* Synovial Inflammation */}
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-semibold bg-blue-100 text-gray-800 mb-2">D. Synovial Inflammation</h3>
      <ul className="list-disc ml-4 space-y-1 text-gray-600">
        <li>Mild to moderate synovitis</li>
        <li>Release of inflammatory cytokines (IL-1β, TNF-α)</li>
        <li>Contributes to pain and progression</li>
      </ul>
    </div>

  </div>
</div>
 </div>
 <h1 className="text-xl font-semibold text-gray-800 mt-10">5. Clinical Features </h1>

<div className="bg-blue-50 p-6 rounded-xl mt-6">
{/* Clinical Features Section */}

<div className="bg-blue-50 p-6 rounded-xl mt-6 flex flex-col gap-8">

  {/* Top row: Pain card + image */}
  <div className="flex flex-col md:flex-row gap-6 items-center">
    
    {/* Left Pain card */}
    <div className="flex-1 bg-white rounded-lg shadow p-4">
      <h3 className="font-semibold bg-blue-100 text-gray-800 mb-2">A. Pain</h3>
      <ul className="list-disc ml-4 space-y-1 text-gray-600">
        <li>Deep, aching joint pain</li>
        <li>Worse with activity, relieved by rest</li>
        <li>Progresses to pain at rest and night pain in advanced stages</li>
      </ul>
    </div>

    {/* Right image */}
    <div className="flex-1 flex justify-center">
      <img
        src="/photos/clinical_features.jpeg"
        alt="Clinical Features"
        className="rounded-lg shadow-md max-w-xs md:max-w-sm"
      />
    </div>
  </div>

  {/* Bottom row: 3 topics side by side */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    {/* Stiffness */}
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-semibold bg-blue-100 text-gray-800 mb-2">B. Stiffness</h3>
      <ul className="list-disc ml-4 space-y-1 text-gray-600">
        <li>Morning stiffness lasting less than 30 minutes</li>
        <li>Stiffness after periods of inactivity (gelling phenomenon)</li>
      </ul>
    </div>

    {/* Functional Limitation */}
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-semibold bg-blue-100 text-gray-800 mb-2">C. Functional Limitation</h3>
      <ul className="list-disc ml-4 space-y-1 text-gray-600">
        <li>Reduced range of motion</li>
        <li>Difficulty walking, climbing stairs, gripping objects</li>
      </ul>
    </div>

    {/* Physical Examination Findings */}
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-semibold bg-blue-100 text-gray-800 mb-2">D. Physical Examination Findings</h3>
      <ul className="list-disc ml-4 space-y-1 text-gray-600">
        <li>Joint tenderness</li>
        <li>Crepitus on movement</li>
        <li>Bony enlargement</li>
        <li>Joint deformity in advanced disease</li>
        <li>Muscle wasting around affected joints</li>
      </ul>
    </div>

  </div>
</div>
</div>
 <h1 className="text-xl font-semibold text-gray-800 mt-10">6. Joint Involvement</h1>

<div className="bg-blue-50 p-6 rounded-xl mt-6">
    {/* Osteoarthritis by Joint Involvement */}


<div className="bg-blue-50 p-6 rounded-xl mt-6 flex flex-col gap-6">

  {/* Knee Osteoarthritis */}
  <div className="bg-white rounded-lg shadow p-4">
    <h3 className="font-semibold bg-blue-100 text-gray-800 mb-2">A. Knee Osteoarthritis</h3>
    <ul className="list-disc ml-4 space-y-1 text-gray-600">
      <li>Medial compartment commonly affected</li>
      <li>Varus deformity (bow legs)</li>
      <li>Pain during walking and stair climbing</li>
    </ul>
  </div>

  {/* Hip Osteoarthritis */}
  <div className="bg-white rounded-lg shadow p-4">
    <h3 className="font-semibold bg-blue-100 text-gray-800 mb-2">B. Hip Osteoarthritis</h3>
    <ul className="list-disc ml-4 space-y-1 text-gray-600">
      <li>Groin pain radiating to thigh or knee</li>
      <li>Limited internal rotation</li>
      <li>Difficulty standing from seated position</li>
    </ul>
  </div>

  {/* Hand Osteoarthritis */}
  <div className="bg-white rounded-lg shadow p-4">
    <h3 className="font-semibold bg-blue-100 text-gray-800 mb-2">C. Hand Osteoarthritis</h3>
    <ul className="list-disc ml-4 space-y-1 text-gray-600">
      <li>Heberden’s nodes (DIP joints)</li>
      <li>Bouchard’s nodes (PIP joints)</li>
      <li>Reduced grip strength</li>
    </ul>
  </div>

  {/* Spine Osteoarthritis */}
  <div className="bg-white rounded-lg shadow p-4">
    <h3 className="font-semibold bg-blue-100 text-gray-800 mb-2">D. Spine Osteoarthritis</h3>
    <ul className="list-disc ml-4 space-y-1 text-gray-600">
      <li>Cervical and lumbar involvement</li>
      <li>Neck or low back pain</li>
      <li>Radiculopathy due to osteophyte compression</li>
    </ul>
  </div>
 <p className="text-gray-600 italic mt-6">
  <strong>Osteoarthritis is a common and progressive joint disorder that increases with age 
    and significantly affects mobility and quality of life. Its rising prevalence highlights
     the importance of early awareness, prevention, and long-term management to reduce disability
      and healthcare burden.</strong></p>
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