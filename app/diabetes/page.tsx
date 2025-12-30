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

          <h1 className="text-4xl font-bold text-blue-700 mb-3">Diabetes</h1>
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
                What is Diabetes?
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Diabetes mellitus, commonly known as diabetes, is a chronic metabolic
                disorder characterized by elevated blood glucose levels over a prolonged
                period. This condition occurs when the body cannot effectively produce or
                use insulin, a vital hormone produced by the pancreas.
              </p>
            </div>
          </div>

          <h1 className="text-xl font-semibold text-gray-800">
            The Pancreas: Your Body's Sugar Regulator
          </h1>

          {/* Content */}
          <div className="flex gap-5 items-start bg-blue-50 p-6 rounded-xl">
            <FaMicroscope className="text-blue-600 text-3xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Understanding the Pancreas
              </h3>

              <p className="text-gray-600 mt-2 leading-relaxed">
                The pancreas is a remarkable dual-function organ located behind the stomach
                in the upper abdomen. It serves two critical roles:
              </p>

              {/* ✅ TABLE  */}
              <div className="mt-6 overflow-x-auto">
                <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
                  <thead className="bg-blue-200">
                    <tr>
                      <th className="border px-4 py-2 text-left text-gray-800">
                        Function Type
                      </th>
                      <th className="border px-4 py-2 text-left text-gray-800">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr>
                      <td className="border px-4 py-3 font-medium">
                        Endocrine Function
                      </td>
                      <td className="border px-4 py-3">
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          <li>Contains Islets of Langerhans</li>
                          <li>Beta cells produce insulin (lowers blood sugar)</li>
                          <li>Alpha cells produce glucagon (raises blood sugar)</li>
                          <li>Maintains blood glucose balance</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-3 font-medium">
                        Exocrine Function
                      </td>
                      <td className="border px-4 py-3">
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          <li>Produces digestive enzymes</li>
                          <li>Helps break down food</li>
                          <li>Releases enzymes into the small intestine</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* ✅ END TABLE */}
                
                {/* Insulin & Glucagon Balance */}
<div className="mt-10 space-y-6">

  <h3 className="text-2xl font-semibold text-gray-800">
    The Delicate Balance: Insulin and Glucagon
  </h3>

  <p className="text-gray-600 leading-relaxed mt-6 space-y-*">
    Think of insulin and glucagon as a perfectly coordinated team maintaining
    your body’s energy balance. They work like a thermostat — when blood sugar
    rises or falls, one hormone activates to restore balance.<br /> <br />
  </p>

         {/* Image */}
         <div className="mt-8 mb-10 flex justify-center">
         <img
          src="/photos/alpha_cell.jpeg"
          alt="Alpha and Beta cells producing glucagon and insulin"
           className="rounded-xl shadow-md max-w-md w-full" />
         </div>
         </div>

         
               
               

            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">The Delicate Balance: Insulin and Glucagon</h3>
           <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
            
            <div>


              
  {/* Table */}
  <div className="mt-12 overflow-x-auto">
    <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
      <thead className="bg-blue-100">
        <tr>
          <th className="border px-4 py-3 text-left text-gray-800">
            Hormone
          </th>
          <th className="border px-4 py-3 text-left text-gray-800">
            Role & Actions
          </th>
        </tr>
      </thead>

      <tbody className="bg-white">

        {/* INSULIN */}
        <tr>
          <td className="border px-4 py-4 font-semibold text-blue-700">
            🔵 Insulin<br />
            <span className="text-sm font-normal text-gray-600">
              (Sugar-Lowering Hormone)
            </span>
          </td>
          <td className="border px-4 py-4">
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Released when blood sugar is <strong>HIGH</strong> (after eating)</li>
              <li>Acts like a <strong>key</strong> that allows glucose to enter cells</li>
              <li>Stores excess glucose as <strong>glycogen</strong> in liver & muscles</li>
              <li>Promotes fat storage for long-term energy</li>
            </ul>
          </td>
        </tr>

        {/* GLUCAGON */}
        <tr>
          <td className="border px-4 py-4 font-semibold text-red-700">
            🔴 Glucagon<br />
            <span className="text-sm font-normal text-gray-600">
              (Sugar-Raising Hormone)
            </span>
          </td>
          <td className="border px-4 py-4">
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Released when blood sugar is <strong>LOW</strong> (between meals, sleep)</li>
              <li>Signals liver to break down stored <strong>glycogen</strong></li>
              <li>Releases glucose into the bloodstream</li>
              <li>Ensures brain & vital organs receive constant energy</li>
            </ul>
          </td>
        </tr>

      </tbody>
    </table>
  </div>

  <p className="text-gray-600 italic"><br/><strong>
    Together, insulin and glucagon function like a thermostat — one lowers blood
    sugar, the other raises it, keeping glucose levels within a healthy range.</strong>
  </p>
            </div>
          </div>
          <h1 className="text-xl font-semibold text-gray-800">TYPES OF DIABETES</h1>
                    <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
            
            <div>
   
              {/* Type 1 vs Type 2 Diabetes */}
<div className="space-y-10">

  <h2 className="text-2xl font-semibold text-gray-800">
    Types of Diabetes: Type 1(Insulin-Dependent) vs Type 2(Non-Insulin-Dependent)
  </h2>

  <div className="overflow-x-auto">
    <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
      <thead className="bg-blue-100">
        <tr>
          <th className="border px-4 py-3 text-left text-gray-800">
            Aspect
          </th>
          <th className="border px-4 py-3 text-left text-blue-700">
            Type 1 Diabetes (Insulin-Dependent)
          </th>
          <th className="border px-4 py-3 text-left text-green-700">
            Type 2 Diabetes (Non-Insulin-Dependent)
          </th>
        </tr>
      </thead>

      <tbody className="bg-white text-gray-600">

        <tr>
          <td className="border px-4 py-3 font-medium">What Happens</td>
          <td className="border px-4 py-3">
            Immune system attacks and destroys insulin-producing beta cells
            in the pancreas (autoimmune condition).
          </td>
          <td className="border px-4 py-3">
            Body becomes resistant to insulin and/or pancreas does not
            produce enough insulin.
          </td>
        </tr>

        <tr>
          <td className="border px-4 py-3 font-medium">Prevalence</td>
          <td className="border px-4 py-3">
            Accounts for 5–10% of diabetes cases.
          </td>
          <td className="border px-4 py-3">
            Accounts for 90–95% of diabetes cases.
          </td>
        </tr>

        <tr>
          <td className="border px-4 py-3 font-medium">Age of Onset</td>
          <td className="border px-4 py-3">
            Commonly diagnosed in children, teens, and young adults
            (can occur at any age).
          </td>
          <td className="border px-4 py-3">
            Usually develops after age 45, but increasingly seen in
            younger people.
          </td>
        </tr>

        <tr>
          <td className="border px-4 py-3 font-medium">Insulin Production</td>
          <td className="border px-4 py-3">
            Little to no insulin production.
          </td>
          <td className="border px-4 py-3">
            Insulin is produced, but not used effectively.
          </td>
        </tr>

        <tr>
          <td className="border px-4 py-3 font-medium">Management</td>
          <td className="border px-4 py-3">
            Requires lifelong insulin therapy.
          </td>
          <td className="border px-4 py-3">
            Managed with lifestyle changes, medications, and sometimes insulin.
          </td>
        </tr>

        <tr>
          <td className="border px-4 py-3 font-medium">Prevention</td>
          <td className="border px-4 py-3">
            Not preventable with current knowledge.
          </td>
          <td className="border px-4 py-3">
            Often preventable or delayed with healthy lifestyle changes.
          </td>
        </tr>

        <tr>
          <td className="border px-4 py-3 font-medium">Risk Factors</td>
          <td className="border px-4 py-3">
            Family history, genetics, possible environmental triggers,
            more common in Caucasian populations.
          </td>
          <td className="border px-4 py-3">
            Obesity, inactivity, age, family history, gestational diabetes,
            PCOS, high blood pressure, certain ethnicities.
          </td>
        </tr>

        <tr>
          <td className="border px-4 py-3 font-medium">Other Notes</td>
          <td className="border px-4 py-3">
            Previously called “juvenile diabetes.”
          </td>
          <td className="border px-4 py-3">
            Develops gradually over years.
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</div>



            </div>
          </div>
           <h1 className="text-xl font-semibold text-gray-800">   🚨 Causes Of Diabetes</h1>
            <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
            
            <div>

              {/* Causes of Diabetes */}
<div className="space-y-12">


  {/* TYPE 1 CAUSES */}
  <div className="bg-blue-50 p-6 rounded-xl space-y-6">
    <h3 className="text-xl font-semibold text-blue-700">
      Type 1 Diabetes Causes
    </h3>

    <div className="space-y-4 text-gray-600">

      <p>
        <strong>🛡️ Autoimmune Destruction:</strong><br />
        The immune system mistakenly attacks insulin-producing beta cells in the pancreas.
        The exact trigger is unknown, but possible factors include:
      </p>

      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Viral infections (enteroviruses, coxsackievirus)</li>
        <li>Genetic susceptibility (HLA gene variants)</li>
        <li>Environmental factors</li>
        <li>Early childhood diet (cow’s milk proteins, vitamin D deficiency)</li>
      </ul>

      <p>
        <strong>🧬 Genetic Factors:</strong><br />
        Having a parent or sibling with Type 1 diabetes increases risk.
        Certain genetic markers increase susceptibility, but it is
        <em> not directly inherited</em> like eye color.
      </p>

    </div>
  </div>

  {/* TYPE 2 CAUSES */}
  <div className="bg-blue-50 p-6 rounded-xl space-y-6">
    <h3 className="text-xl font-semibold text-green-700">
      Type 2 Diabetes Causes
    </h3>

    <div className="space-y-4 text-gray-600">

      <p>
        <strong>🔑 Insulin Resistance:</strong><br />
        Cells in muscles, fat, and liver stop responding properly to insulin.
        The pancreas initially compensates by producing more insulin, but
        eventually cannot keep up, causing blood sugar to rise.
      </p>

      <p>
        <strong>⚙️ Beta Cell Dysfunction:</strong><br />
        Over time, beta cells become exhausted due to overproduction of insulin,
        leading to progressive loss of insulin-producing capacity.
      </p>

    </div>
  </div>

  {/* MAJOR CONTRIBUTING FACTORS */}
  <div className="bg-blue-50 p-6 rounded-xl space-y-6">
    <h3 className="text-xl font-semibold text-red-700">
      Major Contributing Factors
    </h3>

    <ul className="space-y-3 text-gray-600">

      <li>
        🍔 <strong>Obesity & Excess Weight:</strong>
        Especially visceral (abdominal) fat. Fat cells release chemicals that
        promote insulin resistance. About 80–85% of Type 2 diabetics are overweight or obese.
      </li>

      <li>
        🛋️ <strong>Physical Inactivity:</strong>
        Exercise helps cells use glucose without insulin.
        A sedentary lifestyle significantly increases diabetes risk.
      </li>

      <li>
        🧬 <strong>Genetics & Family History:</strong>
        One parent with Type 2 diabetes increases risk by ~40%;
        both parents increase it to ~70%.
      </li>

      <li>
        🍕 <strong>Poor Diet:</strong>
        High intake of refined carbohydrates, sugars, processed foods,
        sugary beverages, and low fiber intake.
      </li>

      <li>
        ⏰ <strong>Age:</strong>
        Risk increases after age 45 due to slower metabolism,
        muscle loss, fat gain, and long-term lifestyle habits.
      </li>

      <li>
        🩺 <strong>Medical Conditions:</strong>
        High blood pressure, abnormal cholesterol, PCOS,
        heart disease, stroke, and fatty liver disease.
      </li>

      <li>
        💊 <strong>Medications:</strong>
        Long-term corticosteroids, some antipsychotics,
        certain HIV medications, and statins (in some individuals).
      </li>

      <li>
        😴 <strong>Sleep Issues:</strong>
        Sleep apnea, chronic sleep deprivation,
        and disrupted circadian rhythms increase insulin resistance.
      </li>

    </ul>
  </div>

</div>
            </div>
          </div>

           <h1 className="text-xl font-semibold text-gray-800">Symptoms of Diabetes</h1>

          {/* About purpose */}
          <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
            <div>
                 {/* Symptoms of Diabetes */}
<div className="space-y-6">



  <div className="overflow-x-auto">
    <table className="w-full border border-gray-300 rounded-lg overflow-hidden text-sm md:text-base">
      <thead className="bg-blue-100">
        <tr>
          <th className="border px-4 py-3 text-left">Category</th>
          <th className="border px-4 py-3 text-left">Key Symptoms</th>
        </tr>
      </thead>

      <tbody className="bg-white text-gray-700">

        <tr>
          <td className="border px-4 py-3 font-medium">
            Classic Symptoms<br />(Type 1 & Type 2)
          </td>
          <td className="border px-4 py-3">
            Frequent urination, excessive thirst, excessive hunger
          </td>
        </tr>

        <tr>
          <td className="border px-4 py-3 font-medium">
            Common Symptoms
          </td>
          <td className="border px-4 py-3">
            Fatigue, blurred vision, unexplained weight loss,
            slow-healing wounds, numbness or tingling,
            frequent infections, dark skin patches
          </td>
        </tr>

        <tr>
          <td className="border px-4 py-3 font-medium text-blue-700">
            Type 1 Diabetes
          </td>
          <td className="border px-4 py-3">
            Sudden onset, diabetic ketoacidosis (DKA),
            fruity breath, vomiting, rapid breathing
            <br />
            <strong>Medical emergency if untreated</strong>
          </td>
        </tr>

        <tr>
          <td className="border px-4 py-3 font-medium text-green-700">
            Type 2 Diabetes
          </td>
          <td className="border px-4 py-3">
            Gradual development, often no early symptoms,
            commonly detected during routine tests,
            organ damage may occur before diagnosis
          </td>
        </tr>

      </tbody>
    </table>
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