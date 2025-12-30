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

export default function PCOS() {
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

          <h1 className="text-4xl font-bold text-blue-700 mb-3">Polycystic Ovary Syndrome</h1>
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
               What is the term 'Polycystic Ovary Syndrome (PCOS)'?
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
               Polycystic ovary Syndrome (PCOS) is a <strong> common endocrine and metabolic disorder </strong>
               affecting women of reproductive age. It is characterized by <strong>hormonal imbalance, ovulatory dysfuction and Polycystic
                ovaries</strong>. The condition involves excessive production of <strong>androgens (male hormones),</strong>
                which interferes with normal ovarian function and menstrual cycles.</p>
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
      <li>Affects approximately  <strong>5-10% of women </strong> of reproductive age</li>
      <li>Commonly diagnosed in adolescence or early adulthood</li>
      <li>Prevalence varies based on diagnostic criteria and population</li>
      <li>Strong association with obesity and insulin resistance</li>
      <li>Increasing incidence due to sedentary lifestyle and dietary factors</li>
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
      <li>Elevated androgen levels</li>
      <li>Increased luteinizing hormone (LH)</li>
      <li>Reduced follicle-stimulating hormone (FSH)</li>
      <li>Insulin resistance leading to hyperinsulinemia</li>
    </ul>
  </div>

  {/* Genetic Factors */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">B. Genetic Factors</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Strong family history</li>
      <li>Increased risk in first-degree relatives</li>
    </ul>
  </div>

  {/* Lifestyle and Environmental Factors */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">C. Lifestyle & Environmental Factors</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Obesity</li>
      <li>Physical inactivity</li>
      <li>Poor dietary habits</li>
    </ul>
  </div>

</div>

{/* Pathophysiology of PCOS */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  4. Pathophysiology of PCOS
</h1>

<div className="bg-blue-50 p-6 rounded-xl flex flex-col md:flex-row gap-8 items-center">
  
  {/* Left side: image */}
  <div className="flex-1 flex justify-center">
    <img
      src="/photos/pcos_pathophysiology.jpeg"
      alt="Pathophysiology of PCOS"
      className="rounded-lg shadow-md max-w-xs md:max-w-sm"
    />
  </div>

  {/* Right side: text */}
  <div className="flex-1 bg-white rounded-lg shadow p-6">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Insulin resistance leads to increased insulin levels</li>
      <li>Hyperinsulinemia stimulates ovarian androgen production</li>
      <li>Excess androgens disrupt follicular development</li>
      <li>Ovulation fails to occur (anovulation)</li>
      <li>Immature follicles accumulate, forming a polycystic appearance</li>
    </ul>
  </div>
</div>
{/* Diagnostic Criteria (Rotterdam Criteria) */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  5. Diagnostic Criteria (Rotterdam Criteria)
</h1>

<div className="bg-blue-50 p-6 rounded-xl flex flex-col md:flex-row gap-8 items-center">

  {/* Left side: text */}
  <div className="flex-1 bg-white rounded-lg shadow p-6">
    <p className="text-gray-700 mb-4">
      Diagnosis requires <strong>two of the following three features:</strong>
    </p>
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Irregular or absent ovulation</li>
      <li>Clinical or biochemical signs of hyperandrogenism</li>
      <li>Polycystic ovaries on ultrasound</li>
    </ul>
  </div>

  {/* Right side: image */}
  <div className="flex-1 flex justify-center">
    <img
      src="/photos/rotterdam_criteria.jpeg"
      alt="Rotterdam Criteria PCOS"
      className="rounded-lg shadow-md max-w-xs md:max-w-sm"
    />
  </div>

</div>
{/* Clinical Features */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
 6. Clinical Features
</h1>

<div className="bg-blue-50 p-6 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-8">

  {/* Menstrual Abnormalities */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">A. Menstrual Abnormalities</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Irregular menstrual cycles</li>
      <li>Amenorrhea or oligomenorrhea</li>
      <li>Infertility due to anovulation</li>
    </ul>
  </div>

  {/* Hyperandrogenism */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">B. Hyperandrogenism</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Hirsutism (excess facial/body hair)</li>
      <li>Acne</li>
      <li>Androgenic alopecia (hair thinning)</li>
    </ul>
  </div>

  {/* Metabolic Features */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">C. Metabolic Features</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Weight gain or obesity</li>
      <li>Insulin resistance</li>
      <li>Increased risk of type 2 diabetes</li>
    </ul>
  </div>

  {/* Psychological Features */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">D. Psychological Features</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Anxiety</li>
      <li>Depression</li>
      <li>Low self-esteem</li>
    </ul>
  </div>

</div>
{/* Prevention and Control */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  7. Prevention and Control
</h1>

<div className="bg-blue-50 p-6 rounded-xl">
  <ul className="list-disc ml-6 space-y-2 text-gray-700">
    <li>Maintain healthy body weight</li>
    <li>Early diagnosis and regular follow-up</li>
    <li>Balanced diet with low glycemic index</li>
    <li>Regular exercise</li>
  </ul>
</div>


          
<p className="text-gray-600 italic mt-6">
  <strong>Polycystic Ovary Syndrome (PCOS) is a common and lifelong hormonal 
    disorder that affects reproductive, metabolic, and psychological health in 
    women. Although it cannot be cured, early diagnosis combined with lifestyle
     modification and appropriate medical management can effectively control 
     symptoms, reduce long-term complications, and improve fertility and quality
      of life.</strong></p>


          
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