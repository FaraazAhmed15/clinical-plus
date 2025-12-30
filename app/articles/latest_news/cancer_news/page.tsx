'use client';

import { motion } from 'framer-motion';
import { FaStethoscope } from 'react-icons/fa';

export default function NewsArticlesPage() {
  return (
    <main className="min-h-screen bg-blue-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="mx-auto mb-5 w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <FaStethoscope className="text-3xl" />
          </div>

          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Key Oncology Research Advancing Cancer Care in 2025
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Highlights from peer-reviewed oncology research, including consensus insights
            from the 2024 Marginal Zone Lymphoma Scientific Workshop and major advances
            shaping cancer diagnosis and treatment.
          </p>
        </motion.div>

        {/* Article */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-10 space-y-12 text-gray-800 leading-relaxed"
        >

          {/* SECTION 1 — TEXT LEFT / IMAGE RIGHT */}
          <section className="bg-blue-50 p-6 rounded-xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">

              <div className="md:w-1/2 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Marginal Zone Lymphoma Research Priorities
                </h3>

                <p>
                  At the 2024 Marginal Zone Lymphoma (MZL) Scientific Workshop hosted
                  by the Lymphoma Research Foundation, international experts convened
                  to review advances in the biological and clinical understanding of MZL.
                </p>

                <p>
                  The workshop was co-chaired by Thomas Habermann, MD, of the Mayo Clinic,
                  and Davide Rossi, MD, PhD, of the Oncology Institute of Southern Switzerland.
                  Discussions spanned pathology, molecular taxonomy, epidemiology, and
                  emerging pathogens and antigens linked to MZL development.
                </p>

                <p>
                  Key challenges identified included the lack of consensus on diagnosing
                  disease transformation, variability across MZL subtypes, and the need
                  for improved response criteria and surrogate end points in clinical trials.
                </p>
              </div>

              <div className="md:w-1/2 w-full h-72 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
                <img
                  src="/photos/oncology_conference.jpeg"
                  alt="Oncology scientific conference"
                  className="w-full max-w-md h-auto rounded-lg shadow-md"
                />
              </div>

            </div>
          </section>

          {/* SECTION 2 — TEXT ONLY */}
          <section className="bg-blue-50 p-6 rounded-xl space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Roadmap for Advancing MZL Care
            </h3>

            <p>
              Outcomes from the Workshop emphasized a future roadmap focused on
              refining molecular classification, expanding the knowledge of
              targetable pathways, and improving consistency in response evaluation.
            </p>

            <p>
              Experts highlighted the importance of integrating biologic insights
              into trial design, enabling more precise patient stratification and
              accelerating the development of novel therapeutics for MZL.
            </p>
          </section>

          {/* SECTION 3 — IMAGE LEFT / TEXT RIGHT */}
          <section className="bg-blue-50 p-6 rounded-xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">

              <div className="md:w-1/2 w-full h-72 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
                <img
                  src="/photos/oncology_trials.jpeg"
                  alt="Cancer research and clinical trials"
                  className="w-full max-w-md h-auto rounded-lg shadow-md"
                />
              </div>

              <div className="md:w-1/2 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Peer-Reviewed Oncology Research Shaping 2025
                </h3>

                <p>
                  In 2025, the journal <em>ONCOLOGY</em> published influential research
                  across cancer types, including surgical de-escalation strategies,
                  artificial intelligence in oncology, immune-based therapies, and
                  cardio-oncology risk management.
                </p>

                <p>
                  Notable findings included evidence supporting reduced axillary surgery
                  in select breast cancer patients, improved quality of life with
                  de-escalated treatment approaches, and growing use of AI to enhance
                  diagnostic precision and treatment planning.
                </p>

                <p>
                  Additional studies explored immune modulation in sarcoma, the prognostic
                  value of DS-GPA scoring in leptomeningeal disease, and metabolic outcomes
                  associated with GLP-1 receptor agonists in patients with breast cancer.
                </p>
              </div>

            </div>
          </section>

          {/* SECTION 4 — TEXT ONLY */}
          <section className="bg-blue-50 p-6 rounded-xl space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Clinical Impact and Future Directions
            </h3>

            <p>
              Collectively, these studies underscore a shift toward precision-driven,
              patient-centered oncology care. Emphasis on de-escalation, biomarker-guided
              therapy, and multidisciplinary collaboration is redefining treatment
              paradigms across cancer types.
            </p>

            <p>
              Continued integration of molecular science, real-world evidence, and
              innovative trial design will remain critical to improving outcomes
              and quality of life for patients with cancer.
            </p>
          </section>

        </motion.article>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 mt-12"
        >
          Educational content for awareness and learning. Not intended as medical advice.
        </motion.p>

      </div>
    </main>
  );
}