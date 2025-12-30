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

export default function Osteaoporosis() {
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

          <h1 className="text-4xl font-bold text-blue-700 mb-3">Osteoporosis</h1>
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
               What is the term 'Osteoporosis'?
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
               Osteoporosis is a <strong>systematic skeletal disorder</strong> characterized by 
               <strong> reduced bone mass, deterioration of bone microarchitecture,</strong> and 
               <strong> increased bone fragility, </strong>leading to significantly higher risk of 
               fractures. The disease develops silently over many years and often remains 
               undiagnosed until a fracture occurs following minimal trauma.</p>
            </div>
          </div>
            {/* Epidemiology */}
                  {/* Epidemiology */}
<h1 className="text-xl font-semibold text-gray-800">2. Epidemiology</h1>

<div className="bg-blue-50 p-6 rounded-xl mt-6">
  <h3 className="text-lg font-semibold text-gray-800 text-center">
    Lets Understand the Epidemiology
  </h3>

  {/* White inner box inside blue */}
  <div className="bg-white rounded-lg shadow p-6 mt-6">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Osteoporosis affects millions of people worldwide, particularly the elderly</li>
      <li>More common in women, especially after menopause</li>
      <li>Incidence increases rapidly after 50 years of age</li>
      <li>
        Common fracture sites include:
        <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600">
          <li>Vertebrae (spine)</li>
          <li>Hip (femoral neck)</li>
          <li>Wrist (distal radius)</li>
        </ul>
      </li>
    </ul>
  </div>
</div>
{/* Etiology and Risk Factors */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">2. Risk Factors</h1>

<div className="bg-blue-50 p-6 rounded-xl mt-6 flex flex-col gap-8">

  {/* Top row: image + Non-Modifiable Risk Factors */}
  <div className="flex flex-col md:flex-row gap-6 items-center">
    
    {/* Left image */}
    <div className="flex-1 flex justify-center">
      <img
        src="/photos/osteoporosis_risk.jpeg"
        alt="Etiology and Risk Factors"
        className="rounded-lg shadow-md max-w-xs md:max-w-sm"
      />
    </div>

    {/* Right card */}
    <div className="flex-1 bg-white rounded-lg shadow p-4">
      <h3 className="font-semibold bg-blue-100 text-gray-800 mb-2">A. Non-Modifiable Risk Factors</h3>
      <ul className="list-disc ml-6 space-y-1 text-gray-600">
        <li>Advanced age</li>
        <li>Female gender</li>
        <li>Postmenopausal estrogen deficiency</li>
        <li>Family history of osteoporosis or fractures</li>
        <li>Low peak bone mass</li>
      </ul>
    </div>
  </div>

  {/* Bottom row: Modifiable + Secondary Causes */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    
    {/* Modifiable Risk Factors */}
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-semibold bg-blue-100 text-gray-800 mb-2">B. Modifiable Risk Factors</h3>
      <ul className="list-disc ml-6 space-y-1 text-gray-600">
        <li>Inadequate calcium and vitamin D intake</li>
        <li>Sedentary lifestyle</li>
        <li>Smoking</li>
        <li>Excessive alcohol consumption</li>
        <li>Low body weight or malnutrition</li>
      </ul>
    </div>

    {/* Secondary Causes */}
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-semibold bg-blue-100 text-gray-800 mb-2">C. Secondary Causes</h3>
      <ul className="list-disc ml-6 space-y-1 text-gray-600">
        <li>Long-term corticosteroid therapy</li>
        <li>Endocrine disorders (hyperthyroidism, hyperparathyroidism)</li>
        <li>Chronic kidney or liver disease</li>
        <li>Malabsorption syndromes</li>
      </ul>
    </div>

  </div>
</div>
 {/* About purpose */}
 <h1 className="text-xl font-semibold text-gray-800 text-center mt-6">
    3. Pathophysiology of Osteoporosis
  </h1>
<div className="bg-blue-50 p-6 rounded-xl mt-6 flex flex-col gap-8">

  {/* Centered heading */}
  <h3 className="text-lg font-semibold text-gray-800 text-center">
    Bone remodeling involves the coordinated action of <strong>osteoclasts</strong> (bone resorption) 
    and <strong>osteoblasts</strong> (bone formation).
  </h3>

  {/* Pathophysiology of Osteoporosis */}
  

  {/* Two-column layout */}
  <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
    
    {/* Left side: text card */}
    <div className="flex-1 bg-white rounded-lg shadow p-4 max-w-md">
      <h3 className="font-semibold text-gray-800 mb-2">Key Mechanisms</h3>
      <ul className="list-disc ml-6 space-y-2 text-gray-700">
        <li>Osteoclastic activity exceeds osteoblastic activity</li>
        <li>Trabecular bone becomes thin and disconnected</li>
        <li>Cortical bone becomes porous</li>
        <li>Bone strength declines disproportionately to bone mass loss</li>
      </ul>
    </div>

    {/* Right side: image */}
    <div className="flex-1 flex justify-center">
      <img
        src="/photos/osteoblast.jpeg"
        alt="Osteoporosis Pathophysiology"
        className="rounded-lg shadow-md max-w-xs md:max-w-sm"
      />
    </div>
    
  </div>
  <h6 className="ml-4">Hormonal changes, especially reduced <strong>estrogen levels,</strong> accelerate bone resorption and 
  impair bone formation </h6>
</div>
 {/* About purpose */}
 <h1 className="text-xl font-semibold text-gray-800 mt-10">
  4.Types of Osteoporosis
</h1>
          <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
            <div>
            
            {/* Types of Osteoporosis */}


{/* Table wrapper */}
<div className="bg-blue-50  p-6 rounded-xl mt-6">
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white rounded-lg shadow">
      
      {/* Table Head */}
      <thead className="bg-blue-100">
        <tr>
          <th className="text-left  border px-4 py-2 px-4 py-2 font-semibold text-gray-800">Type</th>
          <th className="text-left  border px-4 py-2 px-4 py-2 font-semibold text-gray-800">Details</th>
        </tr>
      </thead>

      {/* Table Body */}
      <tbody className="text-gray-700">
        
        {/* Primary Osteoporosis - Type I */}
        <tr>
          <td className="border px-4 py-2 align-top font-semibold">Primary Osteoporosis<br/>Type I (Postmenopausal)</td>
          <td className="border px-4 py-2">
            <ul className="list-disc ml-6 space-y-1">
              <li>Occurs in women after menopause</li>
              <li>Primarily affects trabecular bone</li>
              <li>Common fractures: vertebrae and wrist</li>
            </ul>
          </td>
        </tr>

        {/* Primary Osteoporosis - Type II */}
        <tr>
          <td className="border px-4 py-2 align-top font-semibold">Primary Osteoporosis<br/>Type II (Senile)</td>
          <td className="border px-4 py-2">
            <ul className="list-disc ml-6 space-y-1">
              <li>Occurs in elderly men and women</li>
              <li>Affects both cortical and trabecular bone</li>
              <li>Common fractures: hip and vertebrae</li>
            </ul>
          </td>
        </tr>

        {/* Secondary Osteoporosis */}
        <tr>
          <td className="border px-4 py-2 align-top font-semibold">Secondary Osteoporosis</td>
          <td className="border px-4 py-2">
            <ul className="list-disc ml-6 space-y-1">
              <li>Results from identifiable medical conditions or medications</li>
            </ul>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</div>
            </div>
          </div>
          <h1 className="text-xl font-semibold text-gray-800 mt-10">
  5. Clinical Features
</h1>

{/* Blue wrapper */}
<div className="bg-blue-50 p-6 rounded-xl mt-6">
  {/* Two-column layout */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    
    {/* Early Stage */}
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-semibold bg-blue-100 text-gray-800 mb-2">A. Early Stage</h3>
      <ul className="list-disc ml-6 space-y-1 text-gray-700">
        <li>Usually asymptomatic</li>
        <li>No pain or visible signs</li>
      </ul>
    </div>

    {/* Advanced Stage */}
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-semibold bg-blue-100 text-gray-800 mb-2">B. Advanced Stage</h3>
      <ul className="list-disc ml-6 space-y-1 text-gray-700">
        <li>Fragility fractures after minimal trauma</li>
        <li>Chronic back pain</li>
        <li>Loss of height</li>
        <li>Kyphosis (dowager’s hump)</li>
        <li>Reduced mobility and functional impairment</li>
      </ul>
    </div>

  </div>
</div>
{/* Common Osteoporotic Fractures */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  7. Common Osteoporotic Fractures
</h1>

<div className="bg-blue-50 p-6 rounded-xl mt-6">
  <div className="bg-white rounded-lg shadow p-6">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>
        <strong>Vertebral fractures:</strong> Often silent, cause height loss and spinal deformity
      </li>
      <li>
        <strong>Hip fractures:</strong> Associated with high morbidity, mortality, and loss of independence
      </li>
      <li>
        <strong>Wrist fractures:</strong> Often an early manifestation
      </li>
    </ul>
  </div>
  
</div>
<p className="text-gray-600 italic mt-6">
  <strong>Osteoporosis is a silent but serious skeletal disorder that weakens
     bones and greatly increases the risk of fractures, especially in older 
     adults and postmenopausal women. Because the disease often remains undetected
      until a fracture occurs, early awareness, screening, and timely management are
       essential. With appropriate lifestyle measures, nutritional support, and 
       medical treatment, bone loss can be slowed, fracture risk reduced, 
       and quality of life significantly improved.</strong></p>

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