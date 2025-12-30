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
  FaDna
 
} from 'react-icons/fa';

export default function Coronary() {
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

          <h1 className="text-4xl font-bold text-blue-700 mb-3">Coronary Artery Disease</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            <strong>"Heart Health", "Expertise" and "Passion".</strong>
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
                What is Department of Coronary Artery Disease(CAD) ?
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                         Coronary artery disease also called CAD is a chronic progressive disorder 
                         characterized by atherosclerotic narrowing or obstruction
                          of the coronary arteries, leading to reduced myocardial blood 
                          flow and resulting in myocardial ischemia, angina pectoris, 
                          myocardial infarction, heart failure, or sudden cardiac death.</p>
            </div>
          </div>
          {/* Understanding Disease */}
                              <h2 className="text-xl font-semibold text-gray-800">2. Etiopathogenesis</h2>
          
                              {/* Primary Mechanism*/}
                              <div className="flex gap-5 items-center bg-blue-50 p-6 rounded-xl">
                              <FaDna className="text-blue-600 w-12 h-12 flex-shrink-0" />
                              <div>
                                <h3 className="text-lg font-semibold text-gray-800">Primary Etiology</h3>
                               <p className="text-gray-600 mt-2 leading-relaxed">
                                <strong>• Atherosclerosis of epithelial coronary arteries</strong><br />
                                • Endothelial dysfunction<br />
                                •  Lipid accumulation within the arterial wall<br />
                               • Formation of <strong>fibrofatty plaques</strong><br />
                               • Progressive luminal narrowing
                                </p>
                             </div>
                         </div>
          
                             {/* pathogenic responses*/}
                          <h1 className="text-xl font-semibold text-gray-800">3. Pathogenic Mechanism</h1>
                        <div className="flex gap-5 items-center bg-blue-50 p-6 rounded-xl mt-6">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">Different Types od Pathogenic Mechanisms</h3>
                          <p className="text-gray-600 mt-2 leading-relaxed">
                          • Plaque rupture or erosion<br />
                          • Superimposed <strong>thrombosis</strong><br />
                          • Coronary Vasoconstriction<br />
                          • Reduced Coronary flow reserve<br />
                          • Oxygen supply-demand mismatch
                       </p>
                     </div>
                   </div>
                                                       {/* pathophysiology*/}
                          <h1 className="text-xl font-semibold text-gray-800">4. Pathophysiology</h1>
                        <div className="flex gap-5 items-center bg-blue-50 p-6 rounded-xl mt-6">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">Let's Understand Pathophysiology of CAD</h3>
                          <p className="text-gray-600 mt-2 leading-relaxed">
                          • Myocardial oxygen demand increases with exertion or stress.<br/>
                          • Diseased coronary arteries fail to augment blood flow.<br/>
                          • <strong>Subendocardium</strong> is most vulnerable to <strong>ischemia.</strong><br/>
                          • Repeated ischemia leads to myocardial dysfunction.<br/>
                          • Chronic ischemia may cause <strong>myocardial fibrosis and heart failure.</strong>
                       </p>
                     </div>
                   </div>
                                    {/*Image */}
                    <h2 className="text-xl font-semibold text-gray-800">5. Visualisation of Disease</h2>
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h3 className="text-lg font-semibold text-gray-800">Let's Visualize the disease using diagram</h3>
                 <div className=" flex justify-center mt-6">
                 <img
                     src="/photos/cad.jpeg"
                     alt="Visualizing Coronary Artery Disease(CAD) in Human Heart"
                     className="rounded-xl shadow-md max-w-md w-full"/>
                     <div><br/><br/></div>
                  </div>
                  </div>
                  {/* Classifiaction*/}
                      <h1 className="text-xl font-semibold text-gray-800">6. Classification</h1>

          
          <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Classification of the Disease </h3>
                          
<div className="overflow-x-auto mt-6">
  <table className="min-w-full rounded-lg shadow-md bg-white">
    <thead className="bg-blue-100">
      <tr>
        <th className="px-6 py-3 text-left text-gray-800 font-semibold border-b">Type</th>
        <th className="px-6 py-3 text-left text-gray-800 font-semibold border-b">Features</th>
      </tr>
    </thead>
    <tbody className="text-gray-700">
      <tr>
        <td className="px-6 py-3 border-b font-medium">Stable Coronary Artery Disease</td>
        <td className="px-6 py-3 border-b">
          • Fixed atherosclerotic stenosis <br />
          • Predictable angina on exertion <br />
          • Relieved by rest or nitrates
        </td>
      </tr>
      <tr>
        <td className="px-6 py-3 border-b font-medium">
          Unstable Coronary Artery Disease (Acute Coronary Syndrome)
        </td>
        <td className="px-6 py-3 border-b">
          • Plaque rupture with thrombosis <br />
          • Includes: <br />
          • Unstable angina <br />
          • NSTEMI <br />
          • STEMI
        </td>
      </tr>
      <tr>
        <td className="px-6 py-3 border-b font-medium">Variant (Prinzmetal) Angina</td>
        <td className="px-6 py-3 border-b">
          • Coronary artery spasm <br />
          • Occurs at rest <br />
          • Transient ST elevation
        </td>
      </tr>
      <tr>
        <td className="px-6 py-3 font-medium">Silent Ischemia</td>
        <td className="px-6 py-3">
          • Ischemia without symptoms <br />
          • Common in diabetics and elderly
        </td>
      </tr>
    </tbody>
  </table>
</div>
            </div>
          </div>
                          {/*Image */}
                    <h2 className="text-xl font-semibold text-gray-800">7.. Visualisation of Disease using Graph</h2>
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h3 className="text-lg font-semibold text-gray-800">Let's Visualize the disease using Electro Cardio-graphy</h3>
                 <div className=" flex justify-center mt-6">
                 <img
                     src="/photos/cadecg.jpeg"
                     alt="Visualizing Coronary Artery Disease(CAD) using electro cardio-graphy"
                     className="rounded-xl shadow-md max-w-md w-full"/>
                     <div></div>
                  </div>
                  </div>
                   {/* ECG */}
                            <h1 className="text-xl font-semibold text-gray-800">8. ECG</h1>

          <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
            <div>
              <h3 className="text-xl font-semibold text-gray-800"> ECG Findings in Stable Coronary Artery Disease </h3>
<div className="overflow-x-auto mt-6">
  <table className="min-w-full rounded-lg shadow-md bg-white">
    <thead className="bg-blue-100">
      <tr>
        <th className="px-6 py-3 text-left text-gray-800 font-semibold border-b">ECG Feature</th>
        <th className="px-6 py-3 text-left text-gray-800 font-semibold border-b">Description</th>
      </tr>
    </thead>
    <tbody className="text-gray-700">
      <tr>
        <td className="px-6 py-3 border-b font-medium">ST Segment Depression</td>
        <td className="px-6 py-3 border-b">
          • Indicates myocardial ischemia <br />
          • Commonly seen in leads V4-V6, II, aVF
        </td>
      </tr>
      <tr>
        <td className="px-6 py-3 border-b font-medium">T-Wave Inversion</td>
        <td className="px-6 py-3 border-b">
          • Suggests ongoing or previous ischemia <br />
          • Often seen in lateral and inferior leads
        </td>
      </tr>
      <tr>
        <td className="px-6 py-3 font-medium">Normal or Slightly Altered QRS</td>
        <td className="px-6 py-3">
          • Unlike myocardial infarction, pathological Q waves are usually absent in stable CAD
        </td>
      </tr>
    </tbody>
  </table>
</div>

            </div>
          </div>
          {/* Prevention and Management*/}
                    <h1 className="text-xl font-semibold text-gray-800">9. Prevention</h1>

          
          <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Prevention & Management of Coronary Artery Disease
              </h3>
                                       
<div className="overflow-x-auto mt-6">
  <table className="min-w-full rounded-lg shadow-md bg-white">
    <thead className="bg-blue-100">
      <tr>
        <th className="px-6 py-3 text-left text-gray-800 font-semibold border-b">Category</th>
        <th className="px-6 py-3 text-left text-gray-800 font-semibold border-b">Details</th>
      </tr>
    </thead>
    <tbody className="text-gray-700">
      <tr>
        <td className="px-6 py-3 border-b font-medium">Prevention - Lifestyle Modification</td>
        <td className="px-6 py-3 border-b">
          • Stop smoking <br />
          • Healthy diet (low saturated fat, low salt) <br />
          • High fruits, vegetables, whole grains <br />
          • Regular physical activity (≥30 min/day, 5 days/week) <br />
          • Weight control - maintain normal BMI <br />
          • Stress management (yoga, meditation, adequate sleep)
        </td>
      </tr>
      <tr>
        <td className="px-6 py-3 border-b font-medium">Prevention - Control of Risk Factors</td>
        <td className="px-6 py-3 border-b">
          • Hypertension - regular BP monitoring & treatment <br />
          • Diabetes mellitus - strict glycemic control <br />
          • Dyslipidemia - reduce LDL cholesterol <br />
          • Limit alcohol intake
        </td>
      </tr>
      <tr>
        <td className="px-6 py-3 border-b font-medium">Management - Medical</td>
        <td className="px-6 py-3 border-b">
          • Antiplatelets (Aspirin ± Clopidogrel) <br />
          • Statins - lower LDL cholesterol & stabilize plaques <br />
          • Anti-anginal drugs: Nitrates (relieve chest pain), Beta-blockers (reduce workload), Calcium channel blockers <br />
          • ACE inhibitors / ARBs - especially in hypertension, diabetes, heart failure
        </td>
      </tr>
      <tr>
        <td className="px-6 py-3 border-b font-medium">Management - Interventional</td>
        <td className="px-6 py-3 border-b">
          • Percutaneous Coronary Intervention (PCI) - balloon angioplasty ± stent <br />
          • Coronary Artery Bypass Grafting (CABG) - for severe or multi-vessel disease
        </td>
      </tr>
      <tr>
        <td className="px-6 py-3 font-medium">Management - Patient Education & Follow-up</td>
        <td className="px-6 py-3">
          • Medication adherence <br />
          • Regular cardiac follow-up <br />
          • Cardiac rehabilitation programs
        </td>
      </tr>
    </tbody>
  </table>
</div>
<p className="text-gray-600 italic mt-6">
  <strong>
    Note: Management of coronary artery disease focuses on lifestyle modification and control of risk
    factors (hypertension, diabetes, dyslipidemia). Medical therapy (antiplatelets, statins, ACE
    inhibitors/ARBs, beta-blockers) improves symptoms and prevents progression, while interventional
    strategies (PCI, CABG) are reserved for severe or refractory cases.
  </strong>
</p>
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