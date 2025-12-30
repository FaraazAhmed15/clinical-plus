'use client';

/* Importing Statements */
import { motion } from 'framer-motion';
import {
  FaBookMedical,
  FaMicroscope,
  FaShieldAlt,
  FaStethoscope,
 
} from 'react-icons/fa';

export default function diabetes() {
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
            <FaStethoscope className="text-3xl" />
          </div>

          <h1 className="text-4xl font-bold text-blue-700 mb-3">Asthma</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            <strong>Information on causes, symptoms and treatments.</strong>
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
                What is Asthma?
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Asthma is a chronic inflammatory disease of the airways in which 
                the bronchial tubes become swollen, narrowed, and filled with mucus,
                 making breathing difficult. It is a long-term condition that can range
                  from mild to life-threatening and affects people of all ages, 
                  though it often begins in childhood.
                  Asthma is not contagious, but it is one of the most common chronic 
                  diseases worldwide. With proper treatment and trigger control, most 
                  people with asthma can live normal, active lives.</p>
            </div>
          </div>
                    <h1 className="text-xl font-semibold text-gray-800">How Asthma Effects the Lungs</h1>

          {/* About purpose */}
          <div className=" bg-blue-50 p-6 rounded-xl">
            <div>
                      {/* Image */}
         <div className="flex justify-center">
         <img
          src="/photos/asthma1.jpeg"
          alt="Blockage due to Asthma by Mucos"
           className="w-full max-w-md h-auto rounded-xl shadow-md" />
         </div>
                       <p className="text-gray-600 mt-2 leading-relaxed"> In asthma, the airways react strongly 
                        to certain triggers, causing three main problems:
                       <br />1. <strong>Inflammation –</strong> Swelling of airway lining
                        <br />2.<strong> Bronchoconstriction –</strong> Tightening of airway muscles
                        <br />3. <strong> Excess mucus production –</strong> Blocks airflow</p>
            </div>
          </div>
             {/* About Asthma severity */}
                               <h1 className="text-xl font-semibold text-gray-800">Severity Level Classification</h1>

       
          <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
            <div>

                  {/* Asthma Severity Classification */}
                  <div className="space-y-6">

                  <h2 className="text-2xl font-semibold text-gray-800">Classification of Asthma based on severity Level and symptoms<br/><br/></h2>

                  <div className="overflow-x-auto">
                   <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
                 <thead className="bg-blue-100">
                 <tr>
          <th className="border px-4 py-3 text-left">Severity Level</th>
          <th className="border px-4 py-3 text-left">Symptoms</th>
          <th className="border px-4 py-3 text-left">Night Symptoms</th>
          <th className="border px-4 py-3 text-left">Lung Function (FEV₁)</th>
          <th className="border px-4 py-3 text-left">Recommended Management</th>
        </tr>
      </thead>

      <tbody className="bg-white text-gray-700">

        <tr>
          <td className="border px-4 py-3 font-medium ">
            Intermittent
          </td>
          <td className="border px-4 py-3">
            ≤ 2 days per week
          </td>
          <td className="border px-4 py-3">
            ≤ 2 times per month
          </td>
          <td className="border px-4 py-3">
            Normal between attacks
          </td>
          <td className="border px-4 py-3">
            Short-acting bronchodilator as needed
          </td>
        </tr>

        <tr>
          <td className="border px-4 py-3 font-medium ">
            Mild Persistent
          </td>
          <td className="border px-4 py-3">
            &gt; 2 days per week (not daily)
          </td>
          <td className="border px-4 py-3">
            3–4 times per month
          </td>
          <td className="border px-4 py-3">
            ≥ 80% predicted
          </td>
          <td className="border px-4 py-3">
            Daily low-dose inhaled corticosteroid
          </td>
        </tr>

        <tr>
          <td className="border px-4 py-3 font-medium">
            Moderate Persistent
          </td>
          <td className="border px-4 py-3">
            Daily symptoms
          </td>
          <td className="border px-4 py-3">
            More than once per week
          </td>
          <td className="border px-4 py-3">
            60–80% predicted
          </td>
          <td className="border px-4 py-3">
            Daily controller + rescue inhaler
          </td>
        </tr>

        <tr>
          <td className="border px-4 py-3 font-medium ">
            Severe Persistent
          </td>
          <td className="border px-4 py-3">
            Symptoms throughout the day
          </td>
          <td className="border px-4 py-3">
            Frequent nighttime symptoms
          </td>
          <td className="border px-4 py-3">
            &lt; 60% predicted
          </td>
          <td className="border px-4 py-3">
            High-dose controller + specialist care
          </td>
        </tr>

      </tbody>
    </table>
  </div>

</div>
            </div>
          </div>
          {/* Causes And Risk Factors */}
           <h1 className="text-xl font-semibold text-gray-800">Causes Of Asthma!</h1>
            <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
            <div>

                  {/* Causes and Risk Factors of Asthma */}
<div className="space-y-6">

  <h2 className="text-2xl font-semibold text-gray-800">
    Causes and Risk Factors<br/><br/></h2>

  <div className="overflow-x-auto">
    <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
      <thead className="bg-blue-100">
        <tr>
          <th className="border px-4 py-3 text-left">Category</th>
          <th className="border px-4 py-3 text-left">Key Factors</th>
        </tr>
      </thead>

      <tbody className="bg-white text-gray-700">

        {/* NON-MODIFIABLE */}
        <tr>
          <td className="border px-4 py-3 font-medium ">
            Non-Modifiable Risk Factors
          </td>
          <td className="border px-4 py-3">
            <ul className="list-disc list-inside space-y-1">
              <li>Genetic predisposition and family history of asthma</li>
              <li>Association with allergies and eczema</li>
              <li>Early-life exposure to air pollution or tobacco smoke</li>
              <li>Sex differences (more common in boys during childhood, women in adulthood)</li>
            </ul>
          </td>
        </tr>

        {/* MODIFIABLE */}
        <tr>
          <td className="border px-4 py-3 font-medium ">
            Modifiable Risk Factors
          </td>
          <td className="border px-4 py-3">
            <ul className="list-disc list-inside space-y-1">
              <li>Smoking and secondhand smoke exposure</li>
              <li>Air pollution (traffic, industrial, indoor smoke)</li>
              <li>Respiratory infections (especially viral infections)</li>
              <li>Obesity (reduces lung function, increases severity)</li>
              <li>Stress and emotional factors</li>
            </ul>
          </td>
        </tr>

      </tbody>
    </table>
  </div>

</div>
            </div>
          </div>
                    <h1 className="text-xl font-semibold text-gray-800">Symptoms.</h1>

          {/* About purpose */}
          <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
            <div>

                  {/* Symptoms of Asthma */}
<div className="space-y-6">

  <h2 className="text-2xl font-semibold text-gray-800">
    Symptoms of Asthma<br/><br/></h2>

  <div className="overflow-x-auto">
    <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
      <thead className="bg-blue-100">
        <tr>
          <th className="border px-4 py-3 text-left">Category</th>
          <th className="border px-4 py-3 text-left">Symptoms</th>
        </tr>
      </thead>

      <tbody className="bg-white text-gray-700">

        <tr>
          <td className="border px-4 py-3 font-medium">
            Common Symptoms
          </td>
          <td className="border px-4 py-3">
            Wheezing (whistling sound), shortness of breath,
            chest tightness, coughing (especially at night or early morning)
          </td>
        </tr>

        <tr>
          <td className="border px-4 py-3 font-medium">
            Symptoms in Children
          </td>
          <td className="border px-4 py-3">
            Persistent cough, fatigue during play,
            rapid breathing, chest retractions
          </td>
        </tr>

      </tbody>
    </table>
  </div>

</div>
            </div>
          </div>
  

          {/* Treatments */}
                    <h1 className="text-xl font-semibold text-gray-800">Treatment</h1>
          <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
            <div>


                           {/* Treatment Goals */}
<div className="overflow-x-auto">
  <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
    <thead className="bg-blue-100">
      <tr>
        <th className="border px-4 py-3 text-left">Goal</th>
        <th className="border px-4 py-3 text-left">Purpose</th>
      </tr>
    </thead>
    <tbody className="bg-white text-gray-700">
      <tr>
        <td className="border px-4 py-3 font-medium">Symptom Control</td>
        <td className="border px-4 py-3">Reduce wheezing, breathlessness, and cough</td>
      </tr>
      <tr>
        <td className="border px-4 py-3 font-medium">Prevent Attacks</td>
        <td className="border px-4 py-3">Reduce frequency and severity of exacerbations</td>
      </tr>
      <tr>
        <td className="border px-4 py-3 font-medium">Maintain Activity</td>
        <td className="border px-4 py-3">Allow normal daily and physical activities</td>
      </tr>
      <tr>
        <td className="border px-4 py-3 font-medium">Preserve Lung Function</td>
        <td className="border px-4 py-3">Prevent long-term airway damage</td>
      </tr>
      <tr>
        <td className="border px-4 py-3 font-medium">Minimize Side Effects</td>
        <td className="border px-4 py-3">Use lowest effective medication dose<br/><br/></td>
      </tr>
    </tbody>
  </table>
  
  <p className="text-gray-600 italic"><br/><br/>
   <strong>Asthma management emphasizes trigger avoidance, modulation of 
    immune response, and symptom control tailored to hypersensitivity type.</strong> </p>
</div>
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