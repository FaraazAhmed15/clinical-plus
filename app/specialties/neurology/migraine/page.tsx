'use client';

/* Import Statements */
import { motion } from 'framer-motion';
import {
  FaBookMedical,
  FaMicroscope,
  FaShieldAlt,
  FaStethoscope,
} from 'react-icons/fa';

export default function Migraine() {
  return (
    <main className="min-h-screen bg-blue-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <FaStethoscope className="text-3xl" />
          </div>

          <h1 className="text-4xl font-bold text-blue-700 mb-3">Migraine</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A neurological emergency that requires immediate medical attention.
          </p>
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-10 space-y-10"
        >

          {/* Introduction */}
          <h2 className="text-xl font-semibold text-gray-800">Introduction</h2>

          <div className="flex gap-5 items-center bg-blue-50 p-6 rounded-xl">
            <FaBookMedical className="text-blue-600 w-12 h-12 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                What is Migraine?
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                     Migraine is a chronic neurological disorder characterized
                      by recurrent attacks of moderate to severe headache, often
                       accompanied by nausea, vomiting, and sensitivity to light 
                       and sound. It is more than a headache—it is a brain disorder
                        that can significantly affect daily life.</p>
            </div>
          </div>

                           {/* Introduction */}
          <h2 className="text-xl font-semibold text-gray-800">2. Migraine and it's Types</h2>

          <div className="flex gap-5 items-center bg-blue-50 p-6 rounded-xl">
            <div>

                        <section className="px-10 py-10">
  <h3 className="text-2xl font-semibold mb-6"> How Migraine Occurs?</h3>

  <div className="overflow-x-auto mb-10">
    <table className="min-w-full border border-gray-300 rounded-lg shadow-md bg-white">
      <thead className="bg-blue-100">
        <tr>
          <th className="px-6 py-3 text-left text-gray-800 font-semibold border-b">
            Process
          </th>
          <th className="px-6 py-3 text-left text-gray-800 font-semibold border-b">
            Explanation
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-6 py-3 border-b">Abnormal brain activity</td>
          <td className="px-6 py-3 border-b">
            Affects nerve signals, blood vessels, and brain chemicals (especially serotonin).
          </td>
        </tr>
        <tr>
          <td className="px-6 py-3 border-b">Result</td>
          <td className="px-6 py-3 border-b">
            Leads to pain and neurological symptoms.
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 className="text-2xl font-semibold mb-6"> <br/><br/>Types of Migraine</h3>

  <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-300 rounded-lg shadow-md bg-white">
      <thead className="bg-blue-100">
        <tr>
          <th className="px-6 py-3 text-left text-gray-800 font-semibold border-b">
            Type
          </th>
          <th className="px-6 py-3 text-left text-gray-800 font-semibold border-b">
            Key Features
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-6 py-3 border-b">1. Migraine Without Aura</td>
          <td className="px-6 py-3 border-b">
            Headache occurs without warning signs.<br />
            Accounts for most migraine cases.
          </td>
        </tr>
        <tr>
          <td className="px-6 py-3 border-b">2. Migraine With Aura</td>
          <td className="px-6 py-3 border-b">
            Temporary neurological symptoms before headache.<br />
            Visual disturbances most common.<br />
            Aura symptoms may include:<br />
            • Flashing lights or zigzag lines<br />
            • Blind spots<br />
            • Tingling or numbness<br />
            • Difficulty speaking
          </td>
        </tr>
        <tr>
          <td className="px-6 py-3 border-b">3. Chronic Migraine</td>
          <td className="px-6 py-3 border-b">
            Headache on 15 or more days per month.<br />
            Migraine features on at least 8 days.
          </td>
        </tr>
        <tr>
          <td className="px-6 py-3 border-b">4. Hemiplegic Migraine (Rare)</td>
          <td className="px-6 py-3 border-b">
            Temporary weakness on one side of the body.<br />
            Can mimic stroke.
          </td>
        </tr>
        <tr>
          <td className="px-6 py-3 border-b">5. Menstrual Migraine</td>
          <td className="px-6 py-3 border-b">
            Occurs around menstrual cycle.<br />
            Linked to hormonal changes.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
            </div>
          </div> 
           <h1 className="text-xl font-semibold text-gray-800">3. Visualize Migraine inside Brain </h1>
                       {/* Image */}
                     <div className="bg-blue-50 p-6 rounded-xl flex flex-col items-center">
                     <div>
                     <img
                     src="/photos/migraine.jpeg"
                     alt="Visualizing Migrane inside Brain"
                     className="rounded-xl shadow-md max-w-md w-full"/>
                    </div>
                </div>

                          {/* Symptoms */}
          <h2 className="text-xl font-semibold text-gray-800">4. Symptoms</h2>

          <div className="flex gap-5 items-center bg-blue-50 p-6 rounded-xl">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Commons Symptoms</h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                            <strong>Various Migraine's Common Symptoms are as follows:</strong><br/>
                             • Headache Features<br/>
                             • Throbbing or pulsating pain<br/>
                             • Usually on one side of the head<br/>
                             • Worsens with physical activity<br/>
                             • Lasts 4–72 hours<br/>
                             • Associated Symptoms<br/>
                             • Nausea and vomiting<br/>
                             • Sensitivity to light<strong> (photophobia)</strong><br/>
                             • Sensitivity to sound <strong>(phonophobia)</strong><br/>
                             • Sensitivity to smells<br/>
                             • Fatigue<br/>
                             • Difficulty concentrating</p><br/>
            </div>
          </div>

                         {/* Migraine Phases */}
<h2 className="text-xl font-semibold text-gray-800">5. Migraine Phases</h2>

<div className="flex gap-5 items-center bg-blue-50 p-6 rounded-xl">
  <div>
    <section className="px-10 py-10">
      <h3 className="text-2xl font-semibold mb-6">Different Phases of Migraine</h3>

      <div className="overflow-x-auto mb-10">
        <table className="min-w-full border border-gray-300 rounded-lg shadow-md bg-white">
          <thead className="bg-purple-100">
            <tr>
              <th className="px-6 py-3 text-left text-gray-800 font-semibold border-b">
                Phase
              </th>
              <th className="px-6 py-3 text-left text-gray-800 font-semibold border-b">
                Key Features
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr>
              <td className="px-6 py-3 border-b">1. Prodrome (Before Headache)</td>
              <td className="px-6 py-3 border-b">
                Mood changes, Food cravings, Neck stiffness, Fatigue
              </td>
            </tr>
            <tr>
              <td className="px-6 py-3 border-b">2. Aura (If Present)</td>
              <td className="px-6 py-3 border-b">
                Visual or sensory disturbances, Lasts 20-60 minutes
              </td>
            </tr>
            <tr>
              <td className="px-6 py-3 border-b">3. Attack (Headache Phase)</td>
              <td className="px-6 py-3 border-b">
                Severe head pain, Nausea and sensitivity
              </td>
            </tr>
            <tr>
              <td className="px-6 py-3">4. Postdrome (After Headache)</td>
              <td className="px-6 py-3">Tiredness, Brain fog, Weakness</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</div>

{/* Causes and Triggers */}
<h2 className="text-xl font-semibold text-gray-800 mt-10">6. Causes And Triggers</h2>

<div className="flex gap-5 items-center bg-blue-50 p-6 rounded-xl">
  <div>
    <section className="px-10 py-10">
      <h3 className="text-2xl font-semibold mb-6">
        Different Types of Migraine Causes and Triggers
      </h3>

      <div className="overflow-x-auto mb-10">
        <table className="min-w-full border border-gray-300 rounded-lg shadow-md bg-white">
          <thead className="bg-yellow-100">
            <tr>
              <th className="px-6 py-3 text-left text-gray-800 font-semibold border-b">
                Category
              </th>
              <th className="px-6 py-3 text-left text-gray-800 font-semibold border-b">
                Examples
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr>
              <td className="px-6 py-3 border-b">Common Triggers</td>
              <td className="px-6 py-3 border-b">
                Stress, Lack of sleep or oversleeping, Skipping meals, Hormonal changes (women),
                Bright lights or loud sounds, Strong smells, Weather changes, Certain foods
                (chocolate, cheese, caffeine, alcohol)
              </td>
            </tr>
            <tr>
              <td className="px-6 py-3">Note</td>
              <td className="px-6 py-3 italic text-gray-500">
                 Triggers vary between individuals.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</div> 
                                 {/* Treatment */}
<h2 className="text-xl font-semibold text-gray-800"> Treatment & Management</h2>

<div className="flex gap-5 items-center bg-blue-50 p-6 rounded-xl">
  <div>
    <h3 className="text-lg font-semibold text-gray-800 mb-4">
      Various Treatment for Migraine
    </h3>

    <section className="px-10 py-10">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg shadow-md bg-white">
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
            {/* Acute Treatment */}
            <tr>
              <td className="px-6 py-3 border-b font-medium">Acute (Attack) Treatment</td>
              <td className="px-6 py-3 border-b">
                Pain relievers (paracetamol, NSAIDs)<br />
                Triptans (migraine-specific drugs)<br />
                Anti-nausea medications<br />
                Rest in a dark, quiet room
              </td>
            </tr>

            {/* Preventive Treatment */}
            <tr>
              <td className="px-6 py-3 border-b font-medium">Preventive Treatment (If Frequent)</td>
              <td className="px-6 py-3 border-b">
                Beta-blockers<br />
                Antidepressants<br />
                Antiepileptic drugs<br />
                CGRP inhibitors
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <p className="text-gray-600 italic mt-6">
      <strong>
        Note: Migraine management depends on frequency and severity.  
        Acute treatments relieve attacks, while preventive therapies reduce recurrence.  
        Lifestyle changes (sleep, diet, stress reduction) are also important.
      </strong>
    </p>
  </div>
</div>



                  </motion.div>
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