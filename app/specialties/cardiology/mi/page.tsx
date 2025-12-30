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

export default function Myocardial() {
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

          <h1 className="text-4xl font-bold text-blue-700 mb-3">Myocardial Infraction<br/>Heart Attack</h1>
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
                What is Myocardial Infraction?
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
               Myocardial infarction is defined as irreversible 
               necrosis of cardiac myocytes resulting from prolonged
               ischemia due to an imbalance between myocardial oxygen supply and 
               demand, most commonly caused by acute occlusion of a coronary artery.</p>
            </div>
          </div>

                     {/* Understanding Disease */}
                    <h2 className="text-xl font-semibold text-gray-800">2. Etiopathogenesis</h2>

                    {/* Primary Mechanism*/}
                    <div className="flex gap-5 items-center bg-blue-50 p-6 rounded-xl">
                    <FaDna className="text-blue-600 w-12 h-12 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Primary Mechanism</h3>
                     <p className="text-gray-600 mt-2 leading-relaxed">
                      <strong>• Atherosclerotic plaque rupture or erosion</strong><br />
                      • Exposure of thrombogenic material<br />
                      <strong>• Platelet aggregation and thrombus formation</strong><br />
                     • Partial or complete <strong>coronary artery occlusion</strong><br />
                     • Resultant <strong>myocardial ischemia - necrosis</strong>
                      </p>
                   </div>
               </div>

                   {/* Common Causes */}
                <h1 className="text-xl font-semibold text-gray-800">3. Causes</h1>
              <div className="flex gap-5 items-center bg-blue-50 p-6 rounded-xl mt-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Common Causes of Myocardial Infraction</h3>
                <p className="text-gray-600 mt-2 leading-relaxed">
                • Coronary artery spasm <strong>(Prinzmetal angina)</strong><br />
                • Coronary embolism<br />
                • Vasculitis<br />
                • Cocaine or <strong>amphetamine</strong> use<br />
                • Coronary artery dissection
             </p>
           </div>
         </div>

                            {/* Common Causes */}
              <h1 className="text-xl font-semibold text-gray-800">4. Types of Myocardial Infraction</h1>
              <div className="flex gap-5 items-center bg-blue-50 p-6 rounded-xl mt-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Types of Myocardial Infarction</h3>

<div className="overflow-x-auto mt-6">
  <table className="min-w-full rounded-lg shadow-md bg-white">
    <thead className="bg-blue-100">
      <tr>
        <th className="px-6 py-3 text-left text-gray-800 font-semibold border-b">Type</th>
        <th className="px-6 py-3 text-left text-gray-800 font-semibold border-b">Key Features</th>
      </tr>
    </thead>
    <tbody className="text-gray-700">
      <tr>
        <td className="px-6 py-3 border-b font-medium">ST-Elevation Myocardial Infarction (STEMI)</td>
        <td className="px-6 py-3 border-b">
          • Complete coronary artery occlusion <br />
          • Transmural myocardial necrosis <br />
          • ST-segment elevation on ECG
        </td>
      </tr>
      <tr>
        <td className="px-6 py-3 font-medium">Non-ST-Elevation Myocardial Infarction (NSTEMI)</td>
        <td className="px-6 py-3">
          • Partial or intermittent occlusion <br />
          • Subendocardial infarction <br />
          • ST depression or T-wave inversion
        </td>
      </tr>
    </tbody>
  </table>
</div>
           </div>
         </div>
                         <h1 className="text-xl font-semibold text-gray-800">5. Diagram</h1>
                    <div className="flex gap-5 items-center bg-blue-50 p-6 rounded-xl">
                        <div className="w-full">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4"> Lets Visualize Disease using Human Diagram </h3>
                   {/* Image */}
                 <div className="bg-blue-50 p-6 rounded-xl flex justify-center">
                 <img
                     src="/photos/myocardial.jpeg"
                     alt="Visualizing Myocardial Infraction in Human Heart"
                     className="rounded-xl shadow-md max-w-md w-full"/>
                  </div>
                </div>
            </div>
         
                {/* Pathophysisology */}
                    <h2 className="text-xl font-semibold text-gray-800">6. Pathophysiology</h2>

                    {/* Primary Mechanism*/}
                    <div className="flex gap-5 items-center bg-blue-50 p-6 rounded-xl">
                    <FaDna className="text-blue-600 w-12 h-12 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold  text-gray-800">Primary Mechanism</h3>
                     <p className="text-gray-600 mt-2 list-disc">
                       Ischemia begins within seconds of occlusion <br />
                       ATP depletion occurs within minutes<br />
                       Irreversible myocardial injury begins after <strong>20-30 minutes</strong><br />
                        Necrosis spreads from <strong>subendocardium to epicardium</strong><br />
                       Inflammatory response follows<br/>
                       Healing occurs via <strong>fibrous scar formation</strong>
                      </p>
                   </div>
               </div>
                                                  {/* Pathophysisology */}
                    <h2 className="text-xl font-semibold text-gray-800">7. Features</h2>

                    {/* Primary Mechanism*/}
                    <div className="flex gap-5 items-center bg-blue-50 p-6 rounded-xl">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Clinical Features</h3>
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
        <td className="px-6 py-3 border-b font-medium">Pain</td>
        <td className="px-6 py-3 border-b">
          <li> Severe, crushing, retrosternal chest pain </li>
          <li> Radiates to left arm, neck, jaw, or back </li>
          <li>Lasts 20 minutes </li>
          <li>Not relieved by rest or nitrates</li>
        </td>
      </tr>
      <tr>
        <td className="px-6 py-3 border-b font-medium">Associated Symptoms</td>
        <td className="px-6 py-3 border-b">
          <li> Dyspnea </li>
          <li>Diaphoresis </li>
          <li>Nausea and vomiting </li>
          <li> Anxiety or sense of impending doom </li>
          <li>Syncope (in severe cases)</li>
        </td>
      </tr>
      <tr>
        <td className="px-6 py-3 font-medium">Atypical Presentations</td>
        <td className="px-6 py-3">
          • Common in elderly, diabetics, women <br />
          • May present as epigastric pain, fatigue, or breathlessness
        </td>
      </tr>
    </tbody>
  </table>
</div>
                   </div>
               </div>
                                    {/*ECG of mi */}
                    <h2 className="text-xl font-semibold text-gray-800">8. Graph Based Visualization of Disease</h2>
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h3 className="text-lg font-semibold text-gray-800">Let's understand Myocardial Infraction using Using Graph</h3>
                                   {/* Image */}
                 <div className=" flex justify-center mt-6">
                 <img
                     src="/photos/miecg.jpeg"
                     alt="Visualizing Myocardial Infraction in Human Heart"
                     className="rounded-xl shadow-md max-w-md w-full"/>
                     <div><br/><br/></div>
                  </div>
                  </div>
                   {/* ECG explanation*/}
                  <h2 className="text-xl font-semibold text-gray-800">9. Electro Cardio Graphy (ECG)</h2>
                    <div className="flex gap-5 items-center bg-blue-50 p-6 rounded-xl">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Understanding the variation or cause 
                        of the disease using graphical representation</h3>
<div className="overflow-x-auto mt-6">
  <table className="min-w-full rounded-lg shadow-md bg-white">
    <thead className="bg-blue-100">
      <tr>
        <th className="px-6 py-3 text-left text-gray-800 font-semibold border-b">STEMI</th>
        <th className="px-6 py-3 text-left text-gray-800 font-semibold border-b">NSTEMI</th>
      </tr>
    </thead>
    <tbody className="text-gray-700">
      <tr>
        <td className="px-6 py-3 border-b font-medium"> ST-segment elevation</td>
        <td className="px-6 py-3 border-b">ST depression 
        </td>
      </tr>
      <tr>
        <td className="px-6 py-3 border-b font-medium">Pathological Q waves</td>
        <td className="px-6 py-3 border-b">T-wave inversion </td>
      </tr>
      <tr>
        <td className="px-6 py-3 font-medium">T-wave inversion</td>
        <td className="px-6 py-3">No Q-waves initially</td>
      </tr>
    </tbody>
  </table>
</div>
                   </div>
               </div>
               <h1 className="text-xl font-semibold text-gray-800">10. Prevention and Management</h1>

{/* About purpose */}
<div className="flex gap-5 items-center bg-blue-50 p-6 rounded-xl">
  <div>
    <h3 className="text-xl font-semibold text-gray-800">Lets Understand Myocardial Prevention & Management</h3>
    {/* Replaced <p> with a table */}
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full rounded-lg shadow-md bg-white">
        <thead className="bg-blue-100">
          <tr>
            <th className="px-6 py-3 text-left text-gray-800 font-semibold border-b">
              Category
            </th>
            <th className="px-6 py-3 text-left text-gray-800 font-semibold border-b">
              Details
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr>
            <td className="px-6 py-3 border-b font-medium">Acute Management (MONA-B)</td>
            <td className="px-6 py-3 border-b">
              <li>Morphine </li>
              <li> Oxygen </li>
              <li> Nitrates </li>
              <li> Aspirin </li>
              <li> Beta-blockers</li>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-3 border-b font-medium">Reperfusion Therapy</td>
            <td className="px-6 py-3 border-b">
              <li>Percutaneous coronary intervention (PCI) – preferred </li>
              <li>Thrombolytic therapy (if PCI unavailable)</li>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-3 border-b font-medium">Antithrombotic Therapy</td>
            <td className="px-6 py-3 border-b">
              <li>Antiplatelets (Aspirin, Clopidogrel) </li>
              <li>Anticoagulants (Heparin)</li>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-3 font-medium"> Secondary Prevention</td>
            <td className="px-6 py-3">
             <li>  Antiplatelet therapy </li>
             <li>  Statins </li>
              <li> ACE inhibitors / ARBs </li>
              <li> Beta-blockers </li>
              <li>Lifestyle modification </li>
              <li>Cardiac rehabilitation</li>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-gray-600 italic mt-6">
  <strong>
    Note: Management of myocardial infarction requires urgent intervention to restore blood flow and
    minimize heart damage. Acute therapies (MONA-B, reperfusion, antithrombotics) address immediate
    risks, while secondary prevention (statins, ACE inhibitors/ARBs, lifestyle modification, cardiac
    rehabilitation) reduces recurrence and improves long-term outcomes.
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