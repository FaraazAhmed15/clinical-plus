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
  FaProcedures
 
} from 'react-icons/fa';

export default function Cardiology() {
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

          <h1 className="text-4xl font-bold text-blue-700 mb-3">Cardiology</h1>
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
                What is Department of Cardiology?
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                          Cardiology is the branch of medicine that focuses on the heart and blood vessels. 
                It encompasses prevention, diagnosis, and treatment of cardiovascular diseases. 
                These conditions range from congenital heart defects to acquired diseases such as 
                coronary artery disease, heart failure, and arrhythmias. Cardiology plays a vital 
                role in global health, as cardiovascular diseases remain the leading cause of death 
                worldwide. Specialists in cardiology not only treat acute emergencies like heart attacks 
                but also manage long-term conditions, promote lifestyle changes, and guide patients 
                through rehabilitation and preventive care.</p>
            </div>
          </div>
                  <h1 className="text-xl font-semibold text-gray-800">2. Diagram</h1>
<div className="flex gap-5 items-center bg-blue-50 p-6 rounded-xl">
  <div className="w-full">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">
      Lets Visualize Human Heart
    </h3>
    {/* Image */}
    <div className="bg-blue-50 p-6 rounded-xl flex justify-center">
      <img
        src="/photos/heart.jpeg"
        alt="Visualizing the Human Heart"
        className="rounded-xl shadow-md max-w-md w-full"
      />
    </div>
  </div>
</div>
                       <h1 className="text-xl font-semibold text-gray-800">3. Cardiac Disorders</h1>

          {/* Classification */}
          <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
            <div>
                {/* Structural Classification */}
          <h2 className="text-xl font-semibold text-gray-800">Structural Classification of Cardiac Disorders</h2>
          <div className="overflow-x-auto mt-6">
            <table className="min-w-full border border-gray-300 rounded-lg shadow-md bg-white">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-6 py-3 text-left text-gray-800 font-semibold border-b">Affected Structure</th>
                  <th className="px-6 py-3 text-left text-gray-800 font-semibold border-b">Description</th>
                  <th className="px-6 py-3 text-left text-gray-800 font-semibold border-b">Examples</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="px-6 py-3 border-b font-medium">Coronary Arteries</td>
                  <td className="px-6 py-3 border-b">Supply blood to heart muscle; blockage leads to ischemia.</td>
                  <td className="px-6 py-3 border-b">Coronary artery disease, angina, myocardial infarction.</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 border-b font-medium">Heart Valves</td>
                  <td className="px-6 py-3 border-b">Control blood flow direction; dysfunction causes regurgitation or stenosis.</td>
                  <td className="px-6 py-3 border-b">Mitral valve prolapse, aortic stenosis.</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 border-b font-medium">Myocardium</td>
                  <td className="px-6 py-3 border-b">Heart muscle responsible for contraction and pumping.</td>
                  <td className="px-6 py-3 border-b">Cardiomyopathy, myocarditis.</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 font-medium">Electrical System</td>
                  <td className="px-6 py-3">Controls rhythm and conduction of impulses.</td>
                  <td className="px-6 py-3">Arrhythmias, atrial fibrillation, ventricular tachycardia.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br/>
          <br/>
            {/* Cause-Based Classification */}
          <h2 className="text-xl font-semibold text-gray-800">Cause-Based Cardiac Disorders</h2>
          <div className="overflow-x-auto mt-6">
            <table className="min-w-full border border-gray-300 rounded-lg shadow-md bg-white">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-6 py-3 text-left text-gray-800 font-semibold border-b">Cause</th>
                  <th className="px-6 py-3 text-left text-gray-800 font-semibold border-b">Description</th>
                  <th className="px-6 py-3 text-left text-gray-800 font-semibold border-b">Examples</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="px-6 py-3 border-b font-medium">Genetic</td>
                  <td className="px-6 py-3 border-b">Inherited mutations affecting heart structure or function.</td>
                  <td className="px-6 py-3 border-b">Hypertrophic cardiomyopathy, congenital heart defects.</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 border-b font-medium">Lifestyle</td>
                  <td className="px-6 py-3 border-b">Poor diet, smoking, lack of exercise increase risk.</td>
                  <td className="px-6 py-3 border-b">Obesity-related heart disease, atherosclerosis.</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 border-b font-medium">Infectious</td>
                  <td className="px-6 py-3 border-b">Caused by bacterial or viral infections.</td>
                  <td className="px-6 py-3 border-b">Endocarditis, myocarditis.</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 font-medium">Metabolic</td>
                  <td className="px-6 py-3">Linked to diabetes, thyroid disease, or lipid disorders.</td>
                  <td className="px-6 py-3">Diabetic cardiomyopathy, hyperthyroidism-related arrhythmias.</td>
                </tr>
              </tbody>
            </table>
          </div>
            </div>
          </div>
        <h1 className="text-xl font-semibold text-gray-800">4. Symptoms</h1>
          {/* Symptoms */}
          <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
            <div>
                                      {/* Symptoms */}
          <h2 className="text-xl font-semibold text-gray-800">Symptoms</h2>
          <div className="overflow-x-auto mt-6">
            <table className="min-w-full   rounded-lg shadow-md bg-white">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-6 py-3 text-left">Symptom</th>
                  <th className="px-6 py-3 text-left">Description</th>
                </tr>
              </thead>
              <tbody className="bg-white text-gray-700">
                <tr>
                  <td className=" px-4 py-3 font-medium">Chest Pain</td>
                  <td className=" px-4 py-3">
                    Pressure, heaviness, or discomfort in the chest, often triggered by exertion or stress.
                  </td>
                </tr>
                <tr>
                  <td className=" px-4 py-3 font-medium">Shortness of Breath</td>
                  <td className=" px-4 py-3">
                    Difficulty breathing, especially during physical activity or while lying flat.
                  </td>
                </tr>
                <tr>
                  <td className=" px-4 py-3 font-medium">Palpitations</td>
                  <td className=" px-4 py-3">
                    Sensation of rapid, irregular, or pounding heartbeat.
                  </td>
                </tr>
                <tr>
                  <td className=" px-4 py-3 font-medium">Swelling</td>
                  <td className="px-4 py-3">
                    Edema in legs, ankles, or abdomen due to fluid retention.
                  </td>
                </tr>
                <tr>
                  <td className=" px-4 py-3 font-medium">Fatigue</td>
                  <td className=" px-4 py-3">
                    Persistent tiredness and reduced exercise tolerance caused by poor cardiac output.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
            </div>
          </div>
                    <h1 className="text-xl font-semibold text-gray-800">5. Risk Factors</h1>

          {/* Risk Factors */}
          <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Let's Understand Various Risk Factors</h3>

          <div className="overflow-x-auto mt-6">
            <table className="min-w-full   rounded-lg shadow-md bg-white">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-6 py-3 text-left">Risk Factor</th>
                  <th className="px-6 py-3 text-left">Impact</th>
                </tr>
              </thead>
              <tbody className="bg-white text-gray-700">
                <tr>
                  <td className="px-4 py-3 font-medium">High Blood Pressure</td>
                  <td className=" px-4 py-3">Damages arteries, increases risk of heart attack and stroke.</td>
                </tr>
                <tr>
                  <td className=" px-4 py-3 font-medium">High Cholesterol</td>
                  <td className=" px-4 py-3">Leads to plaque buildup in arteries, restricting blood flow.</td>
                </tr>
                <tr>
                  <td className=" px-4 py-3 font-medium">Diabetes</td>
                  <td className=" px-4 py-3">Raises risk of coronary artery disease and heart failure.</td>
                </tr>
                <tr>
                  <td className=" px-4 py-3 font-medium">Smoking</td>
                  <td className=" px-4 py-3">Damages blood vessels, accelerates atherosclerosis.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Obesity</td>
                  <td className=" px-4 py-3">Increases strain on the heart, linked to hypertension and diabetes.</td>
                </tr>
                <tr>
                  <td className=" px-4 py-3 font-medium">Sedentary Lifestyle</td>
                  <td className=" px-4 py-3">Lack of exercise weakens cardiovascular health.</td>
                </tr>
              </tbody>
            </table>
          </div>
            </div>
          </div>
          <h1 className="text-xl font-semibold text-gray-800">6. Causes</h1>

           {/* Causes & Triggers */}
          <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Varous Causes and Tiggers 
              </h3>

               

          <div className="overflow-x-auto mt-6">
            <table className="min-w-full  rounded-lg shadow-md bg-white">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-6 py-3 text-left">Category</th>
                  <th className="px-6 py-3 text-left">Examples</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className=" px-4 py-3 font-medium">Lifestyle</td>
                  <td className=" px-4 py-3">Poor diet, smoking, alcohol, lack of exercise.</td>
                </tr>
                <tr>
                  <td className=" px-4 py-3 font-medium">Stress</td>
                  <td className=" px-4 py-3">Chronic stress raises blood pressure and heart rate.</td>
                </tr>
                <tr>
                  <td className=" px-4 py-3 font-medium">Environmental</td>
                  <td className=" px-4 py-3">Air pollution, exposure to toxins.</td>
                </tr>
                <tr>
                  <td className=" px-4 py-3 font-medium">Medical Conditions</td>
                  <td className=" px-4 py-3">Diabetes, thyroid disorders, chronic kidney disease.</td>
                </tr>
              </tbody>
            </table>
          </div>


            </div>
          </div>
          {/* Prevention */}
          <h1 className="text-xl font-semibold text-gray-800">7. Prevention</h1>

          
          <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Prevention Strategies<br/><br/></h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <strong>
            <li>Maintain a healthy weight and balanced diet.</li>
            <li>Exercise regularly (at least 150 minutes per week).</li>
            <li>Monitor blood pressure, cholesterol, and blood sugar.</li>
            <li>Avoid smoking and limit alcohol intake.</li>
            <li>Manage stress through relaxation techniques.</li>
            <li>Regular medical check-ups for early detection.</li>
            </strong>
          </ul>
            </div>
          </div>
          {/* Note: imp Cardiology Conditions with their Buttons */}
          <h1 className="text-xl font-semibold text-gray-800">8. Common Cardiology Conditions</h1>

          
          <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
            <div>
              <h3 className="text-xl font-semibold text-gray-800"> Various Common Diseases</h3>
          <div className="bg-blue-50 p-6 rounded-xl mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {/* Coronary Artery Disease */}
              <Link href="/specialties/cardiology/cad">
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 bg-blue-100 text-blue-700 py-6 px-6 rounded-xl shadow-md font-semibold
                   transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-200">
                  <FaHeartBroken className="text-xl" />
                  <span>Coronary Artery Disease</span>
                </button>
              </Link>

              {/* MI*/}
              <Link href="/specialties/cardiology/mi">
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 bg-blue-100 text-blue-700 py-6 px-6 rounded-xl shadow-md font-semibold
                   transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-200" >
                  <FaProcedures className="text-xl" />
                  <span>Heart Attack (MI)</span>
                </button>
              </Link>

              

              {/* Hypertension */}
              <Link href="/hypertension">
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 bg-blue-100 text-blue-700 py-6 px-6 rounded-xl shadow-md font-semibold
                   transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-200">
                  <FaShieldAlt className="text-xl" />
                  <span>Hypertension</span>
                </button>
              </Link>

            
            </div>
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