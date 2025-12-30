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

export default function Glaucoma() {
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

          <h1 className="text-4xl font-bold text-blue-700 mb-3">Glaucoma</h1>
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
               What is the term 'Glaucoma'?
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
               Glaucoma is a <strong>group of chronic eye disorders</strong> characterized by <strong> progressive damage 
                of optic nerve, </strong>leading to <strong>irreversible loss of vision, </strong>if left untreated.
                It is most commonly associated with <strong>elevated Intraocular pressure (IOP).</strong>
                although optic nerve damage can occur even with normal IOP.</p>
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
      <li>Glaucoma is a <strong>leading cause of irreversible blindness worldwide</strong></li>
      <li>Prevalence increases with <strong> age,</strong> especially after 40 years</li>
      <li>
        Higher risk in:
        <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600">
          <li>Elderly individuals</li>
          <li>People with family history of glaucoma</li>
          <li>African and Asian populations(type dependent)</li>
        </ul>
      </li>
      <li>Primarily open-angle glaucoma is the most common form of glaucoma globally</li>
    </ul>
  </div>
</div>
{/* Etiology and Risk Factors */}
<h1 className="text-xl font-semibold text-gray-800">
  3. Risk Factors
</h1>

<div className="bg-blue-50 p-6 rounded-xl">
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2"> Various Risk factors of disease are as follows:</h3>
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Raised intraocular pressure</li>
      <li>Increasing age</li>
      <li>Positive family history</li>
      <li>Diabetes mellitus</li>
      <li>Hypertension</li>
      <li>Prolonged corticosteroid use</li>
      <li>High myopia (nearsightedness)</li>
      <li>Thin cornea</li>
    </ul>
  </div>
</div>
{/* Pathophysiology */}
<h1 className="text-xl font-semibold text-gray-800">
  4. Pathophysiology
</h1>

<div className="bg-blue-50 p-6 rounded-xl flex flex-col md:flex-row gap-8 items-center">
  
  {/* Left side: image */}
  <div className="flex-1 flex justify-center">
    <img
      src="/photos/glaucoma_pathophysiology.jpeg"
      alt="Pathophysiology of Glaucoma"
      className="rounded-lg shadow-md max-w-xs md:max-w-sm"
    />
  </div>

  {/* Right side: text */}
  <div className="flex-1 bg-white rounded-lg shadow p-6">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Aqueous humor is produced by the ciliary body</li>
      <li>It normally drains through the trabecular meshwork</li>
      <li>Impaired drainage leads to increased intraocular pressure</li>
      <li>Elevated pressure causes compression and ischemia of the optic nerve fibers</li>
      <li>Progressive loss of retinal ganglion cells results in visual field defects</li>
    </ul>
  </div>
</div>
{/* Types of Glaucoma */}
<h1 className="text-xl font-semibold text-gray-800">
  5. Types of Glaucoma
</h1>

<div className="bg-blue-50 p-6 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-8">

  {/* Primary Open-Angle Glaucoma */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">
      A. Primary Open-Angle Glaucoma (POAG)
    </h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Most common type</li>
      <li>Gradual increase in IOP</li>
      <li>Asymptomatic in early stages</li>
    </ul>
  </div>

  {/* Primary Angle-Closure Glaucoma */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">
      B. Primary Angle-Closure Glaucoma
    </h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Narrow or closed anterior chamber angle</li>
      <li>Sudden rise in IOP</li>
      <li>Can present as an ophthalmic emergency</li>
    </ul>
  </div>

  {/* Secondary Glaucoma */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">C. Secondary Glaucoma</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Caused by other eye conditions (trauma, inflammation, tumors, steroids)</li>
    </ul>
  </div>

  {/* Congenital Glaucoma */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">D. Congenital Glaucoma</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Present at birth or early childhood</li>
      <li>Due to developmental abnormalities of drainage pathways</li>
    </ul>
  </div>

</div>
{/* Clinical Features */}
<h1 className="text-xl font-semibold text-gray-800">
  6. Clinical Features
</h1>

<div className="bg-blue-50 p-6 rounded-xl flex flex-col md:flex-row gap-8 items-center">
  
  {/* Left side: text */}
  <div className="flex-1 bg-white rounded-lg shadow p-6">
    {/* Open-Angle Glaucoma */}
    <h3 className="font-semibold text-gray-800 mb-2">A. Open-Angle Glaucoma</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700 mb-4">
      <li>Asymptomatic initially</li>
      <li>Gradual peripheral vision loss</li>
      <li>Tunnel vision in advanced stages</li>
    </ul>

    {/* Angle-Closure Glaucoma */}
    <h3 className="font-semibold text-gray-800 mb-2">B. Angle-Closure Glaucoma</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Sudden eye pain</li>
      <li>Headache</li>
      <li>Nausea and vomiting</li>
      <li>Blurred vision with halos around lights</li>
    </ul>
  </div>

  {/* Right side: image */}
  <div className="flex-1 flex justify-center">
    <img
      src="/photos/glaucoma_clinical.jpeg"
      alt="Clinical features of glaucoma"
      className="rounded-lg shadow-md max-w-xs md:max-w-sm"
    />
  </div>
</div>
{/* Prevention and Screening */}
<h1 className="text-xl font-semibold text-gray-800">
  7. Prevention and Screening
</h1>

<div className="bg-blue-50 p-6 rounded-xl">
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Regular eye examinations after 40 years</li>
      <li>Early screening for high-risk individuals</li>
      <li>Adherence to prescribed treatment</li>
      <li>Avoid unsupervised steroid use</li>
    </ul>
  </div>
</div>
               <p className="text-gray-600 italic mt-6">
  <strong>Glaucoma is a chronic and progressive eye disease that can lead to permanent vision 
    loss if not detected and treated early. Because it often develops without noticeable symptoms
     in its early stages, regular eye examinations are essential, especially for individuals at
      higher risk. Although vision loss caused by glaucoma is irreversible, timely diagnosis, 
      proper treatment, and lifelong follow-up can effectively control the disease and preserve
       remaining vision, helping maintain a better quality of life.</strong></p>
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