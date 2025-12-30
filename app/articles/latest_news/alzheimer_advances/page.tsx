'use client';

 {/* Importing Statements*/} 
import { motion } from 'framer-motion';
import {
  FaBookMedical,
  FaMicroscope,
  FaShieldAlt,
  FaStethoscope,
} from 'react-icons/fa';

export default function alzheimer_advances() {
  return (
    <main className="min-h-screen bg-blue-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Heading of health page*/}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">

          <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <FaStethoscope className="text-3xl" />
          </div>

          <h1 className="text-4xl font-bold text-blue-700 mb-3">Alzheimer's Advances.</h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A blood test for Alzheimer's disease was shown to identify the disease correctly
                in older adults with about 90% accuracy in a large clinical trial. </p>
        </motion.div>

        {/* Content Card of this page*/}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-10 space-y-10">




                    {/* Disclaimer */}
          <div className="flex gap-5 items-start bg-blue-50 p-6 rounded-xl">
            <FaShieldAlt className="text-blue-600 text-3xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Accurate blood test for Alzheimer's disease</h3>

              <p className="text-gray-600 mt-2 leading-relaxed"> An accurate diagnosis of Alzheimer's disease currently requires either a sample of cerebrospinal fluid
                 or a brain imaging test called a PET scan. Neither of these tests can be done in primary care clinics, where most people with cognitive complaints are
                  first seen.

                Such bottlenecks slow or prevent the diagnosis of Alzheimer's disease. Not having an official diagnosis prevents people from receiving drugs that can slow
                 the progression of Alzheimer's. It can also keep them from joining studies of new treatments.

                 Researchers have been working to develop easier blood tests for Alzheimer's disease. These tests measure proteins related to Alzheimer's disease called
                  amyloid beta and tau. Abnormal buildup of certain forms of amyloid beta and tau can cause them to spill into the bloodstream from the brain. Many blood
                   tests for Alzheimer's disease have shown promising results. However, to date, most studies of these tests have not been done in real-world settings such 
                   as community clinics.

                 In a new study, funded in part by NIH, researchers led by Drs. Sebastian Palmqvist and Oskar Hansson from Lund University in Sweden collected blood samples 
                 from people who were being evaluated because of cognitive symptoms. More than 500 older adults were recruited from local primary care clinics and nearly 700 
                 from nearby specialty memory care clinics.

                 The researchers used a test called PrecivityAD2. This measures the ratio of two types of amyloid beta as well as the proportion of tau made up of a specific 
                 type called p-tau217. Both measures were previously shown to predict a diagnosis of Alzheimer's disease. In a previous study, the team defined the levels of 
                 these molecules required to confirm a diagnosis of Alzheimer's disease.

                In the new study, the researchers compared blood test results with those from either a spinal-fluid test or PET scan. They also compared the performance
                 of the blood test with that of standard clinical evaluations performed by doctors. Such evaluations include a physical examination, cognitive testing, and
                  a CT scan of the brain. Results were published on July 28, 2024, in JAMA.

                 Across all the participants, the blood test predicted a diagnosis of Alzheimer's disease with 88% to 92% accuracy. Further analysis found that measuring
                  the proportion of p-tau217 alone yielded results similar to using both measures.

                 The blood test performed far better than clinical evaluations done without biomarker-based testing. Such clinical evaluations were 73% accurate at identifying
                  Alzheimer's disease when done in specialty memory clinics, and only 61% accurate when done in primary care settings.

                  €œWe see this as a major step towards global clinical implementation of an Alzheimer's blood test,€ Hansson says. "The next steps include establishing 
                  clear guidelines for how an Alzheimer's blood test can be used in clinical practice, preferably by implementing these tests first in specialist care and
                   then in primary care. This work is currently ongoing.€

                While the test used in the study is sold in the U.S., it is not yet approved by the Food and Drug Administration or covered by most insurance plans.
                 The study also needs to be replicated in more diverse populations than the Swedish one studied.

                 €”by Sharon Reynolds</p>
            </div>
          </div>
                    {/* Disclaimer */}
          <div className="flex gap-5 items-start bg-blue-50 p-6 rounded-xl">
            <FaShieldAlt className="text-blue-600 text-3xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">References</h3>

              <p className="text-gray-600 mt-2 leading-relaxed">Blood Biomarkers to Detect Alzheimer Disease in Primary Care and Secondary Care. Palmqvist S,
                 Tideman P, Mattsson-Carlgren N, Schindler SE, Smith R, Ossenkoppele R, Calling S, West T, Monane M, Verghese PB, Braunstein JB, Blennow K, 
                 Janelidze S, Stomrud E, SalvadÃ³ G, Hansson O. JAMA. 2024 Jul 28:e2413855. doi: 10.1001/jama.2024.13855. Online ahead of print. PMID: 39068545
                </p>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="flex gap-5 items-start bg-blue-50 p-6 rounded-xl">
            <FaShieldAlt className="text-blue-600 text-3xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Funding</h3>

              <p className="text-gray-600 mt-2 leading-relaxed">NIH's National Institute on Aging (NIA); Alzheimer's Association; GHR Foundation; 
                European Research Council; Swedish Research Council; ERA PerMed; Knut and Alice Wallenberg Foundation; Strategic Research Area 
                MultiPark at Lund University; Swedish Alzheimer Foundation; Swedish Brain Foundation; Family RÃ¶nstrÃ¶m's Foundation, Parkinson 
                Foundation of Sweden, Cure Alzheimer's Fund, Konung Gustaf V:s och Drottning Victorias Frimurarestiftelse; SkÃ¥ne University Hospital 
                Foundation; EU Joint Programme Neurodegenerative Diseases; Wallenberg AI, Autonomous Systems, and Software Program; SciLifeLab and Wallenberg 
                National Program for Data-Driven Life Science; Regionalt ForskningsstÃ¶d; Swedish Federal Government; European Union's Horizon 2020 Research and
                 Innovation Program; GE Healthcare; C2N Diagnostics.
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