'use client';

/* Import Statements */
import { motion } from 'framer-motion';
import {
  FaBookMedical,
  FaMicroscope,
  FaShieldAlt,
  FaStethoscope,
} from 'react-icons/fa';

export default function Epilepsy() {
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

          <h1 className="text-4xl font-bold text-blue-700 mb-3">Epilepsy</h1>
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
          className="bg-white rounded-2xl shadow-xl p-10 space-y-10" >

          {/* Introduction */}
          <h2 className="text-xl font-semibold text-gray-800">Introduction</h2>

          <div className="flex gap-5 items-center bg-blue-50 p-6 rounded-xl">
            <FaBookMedical className="text-blue-600 w-12 h-12 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                What is Epilepsy?
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
               Epilepsy is a chronic neurological disorder characterized by 
               recurrent, unprovoked seizures. Seizures occur due to abnormal
                electrical activity in the brain. Epilepsy can affect people of 
                all ages, and many individuals can live normal lives with proper treatment.</p>
            </div>
          </div>

              {/* About Seizure */}
          <h2 className="text-xl font-semibold text-gray-800">2. About Seizure</h2>

          <div className="flex gap-5 items-center bg-blue-50 p-6 rounded-xl">
            <FaBookMedical className="text-blue-600 w-12 h-12 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800"> What is Seizure?</h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                A seizure is a sudden surge of electrical activity in the brain that may cause:<br/>
                        Loss of awareness<br/>
                        Uncontrolled movements<br/>
                        Behavioral changes<br/>
                        Sensory disturbances<br/>
                        <strong> Not all seizures look the same, and not all seizures mean epilepsy.</strong> </p>

                     </div>
                </div>
                <h1 className="text-xl font-semibold text-gray-800">3. Visualize Epilepsy inside Brain </h1>
                        {/* Image */}
                     <div className="bg-blue-50 p-6 rounded-xl flex flex-col items-center">
                     <div>
                     <img
                     src="/photos/epilepsy.jpeg"
                     alt="Visualizing Epilepsy inside Brain"
                     className="rounded-xl shadow-md max-w-md w-full"/>
                    </div>
                </div>
                          <h2 className="text-xl font-semibold text-gray-800">4. Types of Epilepsy & Seizures</h2>

                              {/* Types of Epilepsy & Seizures */}
                    <div className="bg-blue-50 p-6 rounded-xl mt-10">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">Characteristics and Common Features of various Epilepsy & Seizures Types</h3>

  <div className="overflow-x-auto">
    <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
      <thead className="bg-blue-100">
        <tr>
          <th className="border px-4 py-3 text-left">
            Seizure Type
          </th>
          <th className="border px-4 py-3 text-left">
            Characteristics
          </th>
          <th className="border px-4 py-3 text-left">
            Common Features / Examples
          </th>
        </tr>
      </thead>

      <tbody className="bg-white text-gray-700">

        {/* Focal Seizures */}
        <tr>
          <td className="border px-4 py-4 font-medium">
            Focal (Partial) Seizures
          </td>
          <td className="border px-4 py-4">
            Originate in one specific area of the brain.
            Consciousness may be preserved or impaired.
          </td>
          <td className="border px-4 py-4">
            Jerking of one limb, abnormal sensations,
            sudden emotions, confusion
          </td>
        </tr>

        {/* Generalized Seizures */}
        <tr className="bg-gray-50">
          <td className="border px-4 py-4 font-medium">
            Generalized Seizures
          </td>
          <td className="border px-4 py-4">
            Involve both sides of the brain and usually
            cause loss of consciousness.
          </td>
          <td className="border px-4 py-4">
            Tonic-clonic (grand mal), absence seizures,
            myoclonic jerks, atonic seizures
          </td>
        </tr>

        {/* Unknown Onset */}
        <tr>
          <td className="border px-4 py-4 font-medium">
            Unknown-Onset Seizures
          </td>
          <td className="border px-4 py-4">
            Onset of seizure activity cannot be clearly
            determined.
          </td>
          <td className="border px-4 py-4">
            Limited information about seizure origin;
            classification may change with further evaluation
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</div>                      
                                     {/* Symptoms */}
          <h2 className="text-xl font-semibold text-gray-800">5. Symptoms</h2>

          <div className="flex gap-5 items-center bg-blue-50 p-6 rounded-xl">
            <div>
                <h3 className="text-lg font-semibold text-gray-800">Common Symptoms of Epilepsy</h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Common Symptoms of Epilepsy are as follows:<strong><br/><br/>
                        •  Recurrent seizures<br/>
                        •  Sudden loss of consciousness<br/>
                        •  Muscle stiffening or jerking<br/>
                        •  Staring episodes<br/>
                        •  Confusion after seizure (postictal state)<br/>
                        •  Memory gaps<br/>
                        •  Unusual sensations (smell, taste, vision)<br/></strong></p>
            </div>
          </div>
                                            {/* Risk Factors*/}
          <h2 className="text-xl font-semibold text-gray-800">6. Factors</h2>

          <div className="flex gap-5 items-center bg-blue-50 p-6 rounded-xl">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Causes & Risk Factors</h3>
                           <section className="px-10 py-10">

  <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-300 rounded-lg shadow-md bg-white">
      <thead className="bg-blue-100">
        <tr>
          <th className="px-6 py-3 text-left text-gray-800 font-semibold border-b">
            Possible Causes
          </th>
          <th className="px-6 py-3 text-left text-gray-800 font-semibold border-b">
            Risk Factors
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-6 py-3 border-b">Genetic factors</td>
          <td className="px-6 py-3 border-b">Family history of epilepsy</td>
        </tr>
        <tr>
          <td className="px-6 py-3 border-b">Head injury or trauma</td>
          <td className="px-6 py-3 border-b">Brain injury</td>
        </tr>
        <tr>
          <td className="px-6 py-3 border-b">Stroke</td>
          <td className="px-6 py-3 border-b">High fever in childhood (febrile seizures)</td>
        </tr>
        <tr>
          <td className="px-6 py-3 border-b">Brain infections (meningitis, encephalitis)</td>
          <td className="px-6 py-3 border-b">Alcohol or drug abuse</td>
        </tr>
        <tr>
          <td className="px-6 py-3 border-b">Brain tumors</td>
          <td className="px-6 py-3 border-b">Sleep deprivation</td>
        </tr>
        <tr>
          <td className="px-6 py-3 border-b">Developmental disorders</td>
          <td className="px-6 py-3 border-b">Chronic stress</td>
        </tr>
        <tr>
          <td className="px-6 py-3 border-b">Birth complications (lack of oxygen)</td>
          <td className="px-6 py-3 border-b">Exposure to flashing lights (photosensitivity)</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

                     </div>
                </div>
                          {/*Treatment */}
          <h2 className="text-xl font-semibold text-gray-800">Treatment</h2>

          <div className="flex gap-5 items-center bg-blue-50 p-6 rounded-xl">
            <div>
            <h3 className="text-lg font-semibold text-gray-800">Various Treatment For the Disease Treatment</h3>
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
      <tbody>
        {/* Medications */}
        <tr>
          <td className="px-6 py-3 border-b font-medium">Medications (First-Line)</td>
          <td className="px-6 py-3 border-b">
            Antiepileptic drugs (AEDs)<br />
            Control seizures in ~70% of patients<br />
            Long-term, regular use is essential
          </td>
        </tr>

        {/* Other Treatments */}
        <tr>
          <td className="px-6 py-3 border-b font-medium">Other Treatments (if medications fail)</td>
          <td className="px-6 py-3 border-b">
            Surgery (removal of seizure focus)<br />
            Vagus nerve stimulation (VNS)<br />
            Ketogenic diet (especially in children)
          </td>
        </tr>

        {/* First Aid */}
        <tr>
          <td className="px-6 py-3 border-b font-medium"> First Aid During a Seizure</td>
          <td className="px-6 py-3 border-b">
             Stay calm<br />
             Place person on their side<br />
             Remove nearby sharp objects<br />
             Loosen tight clothing<br />
             Time the seizure<br />
             Do NOT put anything in the mouth<br />
             Do NOT restrain movements<br />
             Call emergency services if seizure lasts more than 5 minutes
          </td>
        </tr>

        {/* Living with Epilepsy */}
        <tr>
          <td className="px-6 py-3 border-b font-medium"> Living with Epilepsy</td>
          <td className="px-6 py-3 border-b">
            Take medications regularly<br />
            Get adequate sleep<br />
            Avoid known seizure triggers<br />
            Reduce stress<br />
            Avoid alcohol or recreational drugs<br />
            Wear medical identification
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
                     <p className="text-gray-600 italic"><br/><br/>
   <strong>Note: Epilepsy is a manageable neurological condition
Characterized by recurrent seizures
Diagnosis is clinical, supported by EEG and imaging
Treatment is effective for most patients
Education and awareness reduce stigma.</strong> </p>
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