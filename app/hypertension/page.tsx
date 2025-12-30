'use client';

/* Importing Statements */
import { motion } from 'framer-motion';
import {
  FaBookMedical,
  FaMicroscope,
  FaShieldAlt,
  FaStethoscope,
 
} from 'react-icons/fa';

export default function Hypertension() {
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

          <h1 className="text-4xl font-bold text-blue-700 mb-3">Hypertension</h1>
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
              <h2 className="text-xl font-semibold text-gray-800">
                What is Hypertension? </h2>
              <p className="text-gray-600 mt-2 leading-relaxed">Hypertension, commonly known
                 as high blood pressure, is a chronic medical condition in which the force of
                  blood pushing against the walls of your arteries remains consistently elevated 
                  over time. Often called the "silent killer" because it typically has no noticeable
                   symptoms, hypertension affects nearly half of all adults worldwide and is a major
                    risk factor for heart disease, stroke, kidney failure, and other serious health 
                    complications.
              </p>
            </div>
          </div>
          <h1 className="text-xl font-semibold text-gray-800">Understanding Blood Pressure.</h1>
           <div className=" bg-blue-50 p-6 rounded-xl">
                        {/* Image */}
         <div className=" flex justify-center">
         <img
          src="/photos/hypertension1.jpeg"
          alt="Hypertension"
           className="w-full max-w-md h-auto rounded-xl shadow-md" />
         </div>
         </div>

                 <h1 className="text-xl font-semibold text-gray-800">  Blood Pressure Categories</h1>
                <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
           
            <div>
               {/* Blood Pressure Categories */}
<div className="space-y-6">

  <h2 className="text-2xl font-semibold text-gray-800">
    Risk Factors Based on Different Blood Pressures<br/><br/>
  </h2>

  <div className="overflow-x-auto">
    <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
      <thead className="bg-blue-100">
        <tr>
          <th className="border px-4 py-3 text-left">Category</th>
          <th className="border px-4 py-3 text-left">Blood Pressure Reading</th>
          <th className="border px-4 py-3 text-left">Status</th>
          <th className="border px-4 py-3 text-left">Recommended Action</th>
          <th className="border px-4 py-3 text-left">Risk</th>
        </tr>
      </thead>

      <tbody className="bg-white text-gray-700">

        <tr>
          <td className="border px-4 py-3 font-medium ">
            Normal
          </td>
          <td className="border px-4 py-3">
            Less than 120 / 80 mmHg
          </td>
          <td className="border px-4 py-3">
            Healthy range
          </td>
          <td className="border px-4 py-3">
            Maintain healthy lifestyle habits
          </td>
          <td className="border px-4 py-3">
            Low risk
          </td>
        </tr>

        <tr>
          <td className="border px-4 py-3 font-medium ">
            Elevated
          </td>
          <td className="border px-4 py-3">
            120–129 systolic AND &lt; 80 diastolic
          </td>
          <td className="border px-4 py-3">
            Warning stage
          </td>
          <td className="border px-4 py-3">
            Lifestyle changes recommended
          </td>
          <td className="border px-4 py-3">
            Likely progression to hypertension
          </td>
        </tr>

        <tr>
          <td className="border px-4 py-3 font-medium ">
            Stage 1 Hypertension
          </td>
          <td className="border px-4 py-3">
            130–139 systolic OR 80–89 diastolic
          </td>
          <td className="border px-4 py-3">
            High blood pressure
          </td>
          <td className="border px-4 py-3">
            Lifestyle changes ± medication
          </td>
          <td className="border px-4 py-3">
            Increased heart disease & stroke risk
          </td>
        </tr>

        <tr>
          <td className="border px-4 py-3 font-medium ">
            Stage 2 Hypertension
          </td>
          <td className="border px-4 py-3">
            ≥ 140 / 90 mmHg
          </td>
          <td className="border px-4 py-3">
            Severe high blood pressure
          </td>
          <td className="border px-4 py-3">
            Medications + lifestyle changes
          </td>
          <td className="border px-4 py-3">
            High cardiovascular risk
          </td>
        </tr>

        <tr>
          <td className="border px-4 py-3 font-medium ">
            Hypertensive Crisis
          </td>
          <td className="border px-4 py-3">
            Higher than 180 / 120 mmHg
          </td>
          <td className="border px-4 py-3">
            Medical emergency
          </td>
          <td className="border px-4 py-3">
            Call emergency services immediately
          </td>
          <td className="border px-4 py-3">
            Risk of organ damage, stroke, heart attack
          </td>
        </tr>

      </tbody>
    </table>
  </div>

</div>

            </div>
          </div>
                    <h1 className="text-xl font-semibold text-gray-800"> Risk Factors</h1>

         
          <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
            <div>
                 {/* Causes and Risk Factors of Hypertension */}
<div className="space-y-6">

  <h2 className="text-2xl font-semibold text-gray-800">
    CAUSES<br/><br/>
  </h2>

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
              <li> Increasing age (risk rises after 45 in men, after menopause in women)</li>
              <li> Family history / genetic predisposition</li>
              <li>Race & ethnicity (higher risk in African Americans)</li>
              <li>Sex (men earlier, women after menopause)</li>
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
              <li>Obesity (especially abdominal fat)</li>
              <li>High sodium (salt) intake</li>
              <li>Physical inactivity</li>
              <li>Excessive alcohol consumption</li>
              <li>Smoking and tobacco use</li>
              <li>Chronic stress</li>
              <li>Poor diet (high fat, low fruits & vegetables)</li>
              <li>Sleep problems (sleep apnea, poor sleep)</li>
            </ul>
          </td>
        </tr>

        {/* MEDICAL & DRUG-RELATED */}
        <tr>
          <td className="border px-4 py-3 font-medium ">
            Medical & Drug-Related Factors
          </td>
          <td className="border px-4 py-3">
            <ul className="list-disc list-inside space-y-1">
              <li>Diabetes and high cholesterol</li>
              <li>Kidney disease</li>
              <li>Pregnancy-related hypertension</li>
              <li>Certain medications (NSAIDs, decongestants, birth control pills)</li>
            </ul>
          </td>
        </tr>

      </tbody>
    </table>
  </div>

</div>
            </div>
          </div>
          <h1 className="text-xl font-semibold text-gray-800">Symptoms Of Hypertension</h1>
          <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
            <div>
                  {/* Symptoms of Hypertension */}
<div className="space-y-10">

  

  

  {/* Main Symptoms Table */}
  <div className="overflow-x-auto">
    <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
      <thead className="bg-blue-100">
        <tr>
          <th className="border px-4 py-3 text-left">Symptom Category</th>
          <th className="border px-4 py-3 text-left">Key Symptoms</th>
        </tr>
      </thead>

      <tbody className="bg-white text-gray-700">

        <tr>
          <td className="border px-4 py-3 font-medium">
            Usually Asymptomatic
          </td>
          <td className="border px-4 py-3">
            No noticeable symptoms in most individuals
          </td>
        </tr>

        <tr>
          <td className="border px-4 py-3 font-medium">
            Neurological Symptoms
          </td>
          <td className="border px-4 py-3">
            Severe headaches, dizziness, confusion, ringing in ears,
            blurred or double vision
          </td>
        </tr>

        <tr>
          <td className="border px-4 py-3 font-medium">
            Cardiovascular Symptoms
          </td>
          <td className="border px-4 py-3">
            Chest pain, palpitations, shortness of breath,
            facial flushing
          </td>
        </tr>

        <tr>
          <td className="border px-4 py-3 font-medium">
            General Symptoms
          </td>
          <td className="border px-4 py-3">
            Fatigue, weakness, anxiety, difficulty concentrating
          </td>
        </tr>

        <tr>
          <td className="border px-4 py-3 font-medium">
            ENT Symptoms
          </td>
          <td className="border px-4 py-3">
            Frequent nosebleeds (not reliable alone),
            tinnitus (ear ringing)
          </td>
        </tr>

            </tbody>
            </table>
             </div>
             </div>
            </div>
          </div>
                    <h1 className="text-xl font-semibold text-gray-800">Symptoms of Hypertension</h1>

          {/* About purpose */}
          <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">

            <div>

              {/* Hypersensitivity Table */}
<div className="space-y-6">

  <h2 className="text-2xl font-semibold text-gray-800">
    Hypersensitivity<br/><br/>
  </h2>

  <div className="overflow-x-auto">
    <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
      <thead className="bg-blue-100">
        <tr>
          <th className="border px-4 py-3 text-left">Type</th>
          <th className="border px-4 py-3 text-left">Immune Mechanism</th>
          <th className="border px-4 py-3 text-left">Onset</th>
          <th className="border px-4 py-3 text-left">Examples</th>
        </tr>
      </thead>

      <tbody className="bg-white text-gray-700">

        <tr>
          <td className="border px-4 py-3 font-medium">
            Type I<br />(Immediate)
          </td>
          <td className="border px-4 py-3">
            IgE-mediated mast cell and basophil activation
          </td>
          <td className="border px-4 py-3">
            Seconds to minutes
          </td>
          <td className="border px-4 py-3">
            Anaphylaxis, asthma, allergic rhinitis, urticaria
          </td>
        </tr>

        <tr>
          <td className="border px-4 py-3 font-medium">
            Type II<br />(Cytotoxic)
          </td>
          <td className="border px-4 py-3">
            IgG or IgM antibodies against cell-surface antigens
          </td>
          <td className="border px-4 py-3">
            Minutes to hours
          </td>
          <td className="border px-4 py-3">
            Hemolytic anemia, blood transfusion reaction, Rh incompatibility
          </td>
        </tr>

        <tr>
          <td className="border px-4 py-3 font-medium">
            Type III<br />(Immune Complex)
          </td>
          <td className="border px-4 py-3">
            Antigen-antibody immune complex deposition
          </td>
          <td className="border px-4 py-3">
            Hours to days
          </td>
          <td className="border px-4 py-3">
            Serum sickness, systemic lupus erythematosus, post-streptococcal glomerulonephritis
          </td>
        </tr>

        <tr>
          <td className="border px-4 py-3 font-medium">
            Type IV<br />(Delayed)
          </td>
          <td className="border px-4 py-3">
            T-cell mediated (no antibodies)
          </td>
          <td className="border px-4 py-3">
            48–72 hours
          </td>
          <td className="border px-4 py-3">
            Contact dermatitis, tuberculosis skin test, graft rejection
          </td>
        </tr>

      </tbody>
    </table>
  </div>

</div>
            </div>
          </div>
                    <h1 className="text-xl font-semibold text-gray-800">Treatment</h1>

       
          <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
       
            <div>
 

              {/* Treatment of Hypersensitivity */}
<div className="space-y-6">

  <h2 className="text-2xl font-semibold text-gray-800">
    Treatment of Hypertension<br/><br/>
  </h2>

  <div className="overflow-x-auto">
    <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
      <thead className="bg-blue-100">
        <tr>
          <th className="border px-4 py-3 text-left">Type</th>
          <th className="border px-4 py-3 text-left">Main Treatment</th>
        </tr>
      </thead>

      <tbody className="bg-white text-gray-700">

        <tr>
          <td className="border px-4 py-3 font-medium">
            Type I (Immediate)
          </td>
          <td className="border px-4 py-3">
            Antihistamines, corticosteroids, bronchodilators,
            <strong> epinephrine</strong> (for anaphylaxis),
            allergen avoidance, desensitization therapy
          </td>
        </tr>

        <tr>
          <td className="border px-4 py-3 font-medium">
            Type II (Cytotoxic)
          </td>
          <td className="border px-4 py-3">
            Corticosteroids, immunosuppressive drugs,
            blood transfusion (if needed),
            treatment of underlying cause
          </td>
        </tr>

        <tr>
          <td className="border px-4 py-3 font-medium">
            Type III (Immune Complex)
          </td>
          <td className="border px-4 py-3">
            Anti-inflammatory drugs, corticosteroids,
            immunosuppressants, plasmapheresis (severe cases)
          </td>
        </tr>

        <tr>
          <td className="border px-4 py-3 font-medium">
            Type IV (Delayed)
          </td>
          <td className="border px-4 py-3">
            Corticosteroids, immunosuppressive therapy,
            avoidance of triggering antigen
          </td>
        </tr>

      </tbody>
    </table>
  </div>

  <p className="text-gray-600 italic"><br/><br/>
   <strong>Treatment focuses on avoiding the trigger, controlling immune response,
    and managing symptoms based on hypersensitivity type.</strong> </p>

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