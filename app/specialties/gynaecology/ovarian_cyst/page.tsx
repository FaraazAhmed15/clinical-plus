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

export default function ovarian_cyst() {
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

          <h1 className="text-4xl font-bold text-blue-700 mb-3">Ovarian Cyst</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            <strong> “Flow of vitality through women’s wellness"</strong>
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
               What is the term 'Ovarian Cyst'?
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
               Ovarian cysts are <strong> fluid-filled or semi-solid sacs</strong> that develop <strong>within 
                or on the surface of an ovary.</strong> They are common in women of reproductive age and are often 
                <strong>benign and asymptomatic.</strong> Most ovarian cysts are related to the normal menstrual cycle and resolve
                spontaneously without treatment.</p>
            </div>
          </div>   
           <h1 className="text-xl font-semibold text-gray-800 mt-10">
  2. Epidemiology
</h1>
          
<div className="bg-blue-50 p-6 rounded-xl mt-6">
  <h3 className="text-lg font-semibold text-gray-800 text-center">
    Lets Understand the Epidemiology
  </h3>

  {/* White inner box inside blue */}
  <div className="bg-white rounded-lg shadow p-6 mt-6">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Very common in  <strong>women of reproductive age </strong> </li>
      <li>Can occur at any age, including childhood and post-menopause</li>
      <li>Most functional cysts resolve within <strong> 1-3 menstrual cycles</strong></li>
      <li>Post-menopausal cysts require closer evaluation due to malignancy risk</li>
    </ul>
  </div>
</div>    
{/* Etiology and Risk Factors */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  3. Risk Factors
</h1>

<div className="bg-blue-50 p-6 rounded-xl grid grid-cols-1 md:grid-cols-3 gap-8">

  {/* Hormonal Factors */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">A. Hormonal Factors</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Ovulatory dysfunction</li>
      <li>Hormonal imbalance</li>
      <li>Fertility treatments</li>
    </ul>
  </div>

  {/* Reproductive Factors */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">B. Reproductive Factors</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Early menarche</li>
      <li>Irregular menstrual cycles</li>
      <li>Polycystic Ovary Syndrome (PCOS)</li>
    </ul>
  </div>

  {/* Other Risk Factors */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">C. Other Risk Factors</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Pregnancy</li>
      <li>Endometriosis</li>
      <li>Pelvic infections</li>
      <li>Family history of ovarian cysts</li>
    </ul>
  </div>

</div>
{/* Types of Ovarian Cysts */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  4. Types of Ovarian Cysts
</h1>

<div className="bg-blue-50 p-6 rounded-xl flex flex-col items-center gap-8">

  {/* Top Center Image */}
  <div className="flex justify-center">
    <img
      src="/photos/cyst_types.jpeg"
      alt="Types of Ovarian Cysts"
      className="rounded-lg shadow-md max-w-xs md:max-w-sm"
    />
  </div>

  {/* Data Below Image */}
  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">

    {/* Functional Cysts */}
    <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
      <h3 className="font-semibold text-gray-800 mb-2">A. Functional Cysts (Most Common)</h3>
      <h4 className="text-gray-700 font-medium mt-2">1. Follicular Cyst</h4>
      <ul className="list-disc ml-6 space-y-1 text-gray-700">
        <li>Forms when follicle fails to rupture</li>
        <li>Usually painless</li>
        <li>Resolves spontaneously</li>
      </ul>
      <h4 className="text-gray-700 font-medium mt-4">2. Corpus Luteum Cyst</h4>
      <ul className="list-disc ml-6 space-y-1 text-gray-700">
        <li>Forms after ovulation</li>
        <li>May cause pain or bleeding</li>
      </ul>
    </div>

    {/* Pathological Cysts */}
    <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
      <h3 className="font-semibold text-gray-800 mb-2">B. Pathological Cysts</h3>
      <h4 className="text-gray-700 font-medium mt-2">1. Dermoid Cyst (Mature Teratoma)</h4>
      <ul className="list-disc ml-6 space-y-1 text-gray-700">
        <li>Contains fat, hair, teeth</li>
        <li>Usually benign</li>
        <li>May grow large</li>
      </ul>
      <h4 className="text-gray-700 font-medium mt-4">2. Endometrioma</h4>
      <ul className="list-disc ml-6 space-y-1 text-gray-700">
        <li>Caused by endometriosis</li>
        <li>Often associated with chronic pelvic pain</li>
      </ul>
      <h4 className="text-gray-700 font-medium mt-4">3. Cystadenoma</h4>
      <ul className="list-disc ml-6 space-y-1 text-gray-700">
        <li>Develops from ovarian tissue</li>
        <li>Can become very large</li>
      </ul>
    </div>

  </div>
</div>
{/* Pathophysiology */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  5. Pathophysiology
</h1>

<div className="bg-blue-50 p-6 rounded-xl flex flex-col md:flex-row gap-8 items-center">

  {/* Left side: image */}
  <div className="flex-1 flex justify-center">
    <img
      src="/photos/cyst_physio.jpeg"
      alt="Pathophysiology of Ovarian Cysts"
      className="rounded-lg shadow-md max-w-xs md:max-w-sm"
    />
  </div>

  {/* Right side: text */}
  <div className="flex-1 bg-white rounded-lg shadow p-6">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Disruption in normal follicular development</li>
      <li>Excess fluid accumulation within ovarian follicles</li>
      <li>Failure of ovulation or corpus luteum regression</li>
      <li>Hormonal stimulation promotes cyst growth</li>
    </ul>
  </div>

</div>
{/* Clinical Features */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  6. Clinical Features
</h1>

<div className="bg-blue-50 p-6 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-8">

  {/* Asymptomatic */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">A. Asymptomatic</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Most small cysts cause no symptoms</li>
      <li>Detected incidentally on ultrasound</li>
    </ul>
  </div>

  {/* Symptomatic Cysts */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">B. Symptomatic Cysts</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Pelvic or lower abdominal pain</li>
      <li>Pain during menstruation</li>
      <li>Dyspareunia (pain during intercourse)</li>
      <li>Bloating or abdominal fullness</li>
      <li>Menstrual irregularities</li>
    </ul>
  </div>

</div>
{/* Prevention and Lifestyle Measures */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  7. Prevention and Lifestyle Measures
</h1>

<div className="bg-blue-50 p-6 rounded-xl">
  <ul className="list-disc ml-6 space-y-2 text-gray-700">
    <li>Regular gynecological checkups</li>
    <li>Hormonal regulation when needed</li>
    <li>Early evaluation of pelvic pain</li>
    <li>Healthy lifestyle and weight management</li>
  </ul>
</div>



<p className="text-gray-600 italic mt-6">
  <strong>Ovarian cysts are common gynecological conditions, most often benign
     and related to normal ovarian function. While many cysts resolve on their
      own without treatment, some may persist or lead to complications such as
       pain, rupture, or torsion. Early diagnosis, regular follow-up, and appropriate
        management are essential to prevent complications, relieve symptoms, and preserve 
        reproductive health.</strong></p>


          
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