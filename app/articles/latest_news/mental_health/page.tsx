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
            Latest Advances in Oncology, Hematology, Mental Health, and Neuroscience
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A comprehensive overview of recent scientific workshops, peer-reviewed
            oncology research, and emerging discoveries in brain and mental health
            shaping clinical practice in 2025.
          </p>
        </motion.div>

        {/* Article */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-10 space-y-14 text-gray-800 leading-relaxed"
        >

          {/* SECTION 1 — TEXT LEFT / IMAGE RIGHT */}
          <section className="bg-blue-50 p-6 rounded-xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Marginal Zone Lymphoma: Scientific Consensus and Research Gaps
                </h3>

                <p>
                  The 2024 Marginal Zone Lymphoma (MZL) Scientific Workshop, hosted by
                  the Lymphoma Research Foundation, convened international experts to
                  assess progress and challenges in understanding this heterogeneous
                  group of indolent B-cell lymphomas.
                </p>

                <p>
                  Co-chaired by Thomas Habermann, MD, of the Mayo Clinic, and Davide
                  Rossi, MD, PhD, of the Oncology Institute of Southern Switzerland,
                  the meeting addressed pathology, molecular taxonomy, epidemiology,
                  and evolving therapeutic strategies.
                </p>

                <p>
                  A central theme was the lack of consensus in diagnosing disease
                  transformation and the urgent need for standardized response
                  criteria and surrogate endpoints in clinical trials.
                </p>
              </div>

              <div className="md:w-1/2 w-full h-72 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
                 <img 
                  src="/photos/marginal_lymphoma.jpeg"
                  alt="Marginal Lymphoma"
                  className="w-full max-w-md h-auto rounded-lg shadow-md mb-4"/>
              </div>
            </div>
          </section>

          {/* SECTION 2 — TEXT ONLY */}
          <section className="bg-blue-50 p-6 rounded-xl space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Roadmap for Advancing MZL Diagnosis and Treatment
            </h3>

            <p>
              Workshop outcomes emphasized a forward-looking roadmap focused on
              improving subtype classification, refining molecular diagnostics,
              and expanding knowledge of targetable signaling pathways.
            </p>

            <p>
              Experts highlighted the importance of integrating biologic insights
              into trial design to enable patient stratification and accelerate
              development of novel therapeutics.
            </p>

            <p>
              The consensus underscored collaboration between academic centers,
              industry, and regulatory bodies to harmonize diagnostic standards
              and improve clinical trial efficiency.
            </p>
          </section>

          {/* SECTION 3 — IMAGE LEFT / TEXT RIGHT */}
          <section className="bg-blue-50 p-6 rounded-xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 w-full h-72 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
                 <img 
                  src="/photos/review.jpeg"
                  alt="Review "
                  className="w-full max-w-md h-auto rounded-lg shadow-md mb-4"/>
              </div>

              <div className="md:w-1/2 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Peer-Reviewed Oncology Research Driving Care in 2025
                </h3>

                <p>
                  Throughout 2025, peer-reviewed oncology journals published studies
                  advancing cancer care across multiple domains. Key themes included
                  surgical de-escalation, precision diagnostics, immune modulation,
                  and survivorship-focused outcomes.
                </p>

                <p>
                  Research demonstrated that reducing surgical burden in select
                  breast cancer patients improved quality of life without
                  compromising disease control. Other studies highlighted the
                  growing role of artificial intelligence in diagnosis, imaging,
                  and treatment planning.
                </p>

                <p>
                  Additional findings addressed cardio-oncology risk, immune-based
                  therapies in sarcoma, and prognostic tools guiding care for
                  patients with leptomeningeal disease.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 4 — TEXT ONLY */}
          <section className="bg-blue-50 p-6 rounded-xl space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Emerging Themes in Mental Health Research
            </h3>

            <p>
              Parallel advances in mental health research emphasized the biological
              underpinnings of psychiatric disorders. Studies explored the role of
              neuroinflammation, neurotransmitter imbalance, and circuit-level
              dysfunction in depression and anxiety.
            </p>

            <p>
              Neuroplasticity emerged as a central concept in recovery, informing
              novel therapeutic approaches including neuromodulation and
              experience-driven interventions.
            </p>

            <p>
              Sleep disruption, stress-related neural changes, and immune-brain
              interactions were also highlighted as critical contributors to
              mental illness and cognitive decline.
            </p>
          </section>

          {/* SECTION 5 — TEXT ONLY */}
          <section className="bg-blue-50 p-6 rounded-xl space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Neuroscience Innovations and Clinical Translation
            </h3>

            <p>
              Advances in neuroscience extended beyond psychiatry, with progress in
              functional brain imaging, biomarker discovery, and neuromodulation
              therapies such as transcranial magnetic stimulation and deep brain
              stimulation.
            </p>

            <p>
              These technologies are increasingly integrated into clinical research
              to personalize treatment selection and monitor therapeutic response.
            </p>

            <p>
              The convergence of neuroscience, data science, and clinical medicine
              continues to reshape approaches to brain health and disease.
            </p>
          </section>

          {/* SECTION 6 — TEXT ONLY */}
          <section className="bg-blue-50 p-6 rounded-xl space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Looking Ahead: Integrated, Precision-Driven Care
            </h3>

            <p>
              Across oncology, hematology, mental health, and neuroscience, the
              unifying theme of recent research is precision. Biological insights,
              advanced diagnostics, and adaptive trial designs are enabling more
              tailored, patient-centered care.
            </p>

            <p>
              Continued collaboration across disciplines will be essential to
              translate scientific discovery into improved outcomes and quality
              of life for patients worldwide.
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