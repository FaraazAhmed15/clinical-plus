'use client';

import { motion } from 'framer-motion';
import { FaStethoscope } from 'react-icons/fa';

export default function CannabisReclassificationArticle() {
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
            Cannabis Reclassification and Emerging Research Opportunities
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            An analysis of how proposed changes to federal cannabis scheduling could
            reshape public health research, clinical trials, and evidence-based policy.
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
                  Why Cannabis Reclassification Matters
                </h3>

                <p>
                  Scientists and public health experts argue that reclassifying cannabis
                  from Schedule I to Schedule III could significantly expand research
                  opportunities. Under the current classification, cannabis is defined
                  as having no accepted medical use and a high potential for abuse,
                  placing it alongside substances such as heroin and LSD.
                </p>

                <p>
                  Researchers note that this classification has made it extremely
                  difficult to study both the potential therapeutic benefits and
                  adverse effects of cannabis, despite its widespread legal use
                  across many U.S. states.
                </p>

                <p>
                  As consumer access expands faster than scientific evidence,
                  researchers have struggled to keep pace with changing patterns
                  of use, potency, and formulation.
                </p>
              </div>

              <div className="md:w-1/2 w-full h-72 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
               <img
                  src="/photos/cannibis_research.jpeg"
                  alt="Cannabis Reclassification"
                  className="w-full max-w-md h-auto rounded-lg shadow-md"/>
              </div>

            </div>
          </section>

          {/* SECTION 2 — TEXT ONLY */}
          <section className="bg-blue-50 p-6 rounded-xl space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Scientific Barriers Under Current Federal Law
            </h3>

            <p>
              Under Schedule I restrictions, researchers face extensive regulatory
              hurdles, including separate licensing for each substance, strict
              security inspections, and limited access to cannabis products that
              reflect what consumers actually use.
            </p>

            <p>
              As a result, many studies rely on observational data rather than
              randomized controlled trials, limiting the strength of conclusions
              regarding safety, dosing, and efficacy.
            </p>

            <p>
              Scientists emphasize that even in states with legalized cannabis,
              they are unable to study dispensary products directly, creating a
              disconnect between real-world use and scientific evidence.
            </p>
          </section>

          {/* SECTION 3 — IMAGE LEFT / TEXT RIGHT */}
          <section className="bg-blue-50 p-6 rounded-xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">

              <div className="md:w-1/2 w-full h-72 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
                <img
                  src="/photos/cannabis_trials.jpeg"
                  alt="Cannabis Clinical Tials"
                  className="w-full max-w-md h-auto rounded-lg shadow-md"/>
              </div>

              <div className="md:w-1/2 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Expanding Research on Benefits and Harms
                </h3>

                <p>
                  Recent studies illustrate the complexity of cannabis research.
                  Some findings suggest potential benefits, such as associations
                  with reduced subjective cognitive decline in older adults or
                  promise as an alternative to opioids for chronic pain management.
                </p>

                <p>
                  Conversely, other studies have identified risks, including
                  impaired working memory in younger heavy users and increased
                  healthcare utilization related to cannabis-associated disorders
                  among older adults.
                </p>

                <p>
                  Researchers agree that these mixed results highlight the urgent
                  need for large-scale, controlled clinical trials to clarify
                  who may benefit, who may be harmed, and under what conditions.
                </p>
              </div>

            </div>
          </section>

          {/* SECTION 4 — TEXT ONLY */}
          <section className="bg-blue-50 p-6 rounded-xl space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Funding Growth and Research Momentum
            </h3>

            <p>
              Federal funding for cannabinoid research has increased in recent years,
              reflecting growing recognition of cannabis as a public health issue.
              Investments now support studies on therapeutic cannabinoids, cannabidiol
              (CBD), and broader cannabis compounds.
            </p>

            <p>
              However, researchers caution that funding alone is insufficient if
              regulatory barriers continue to limit experimental design, product
              access, and clinical trial enrollment.
            </p>
          </section>

          {/* SECTION 5 — TEXT ONLY */}
          <section className="bg-blue-50 p-6 rounded-xl space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Public Health Responsibility and Risk Management
            </h3>

            <p>
              Experts emphasize that cannabis is neither harmless nor universally
              beneficial. Inhaled products, high-potency formulations, and frequent
              use may pose mental health, cardiovascular, and developmental risks,
              particularly for youth and vulnerable populations.
            </p>

            <p>
              Reclassification would place greater responsibility on the medical
              community to develop evidence-based guidance, dosing standards,
              and patient education frameworks.
            </p>
          </section>

          {/* CONCLUSION */}
          <section className="bg-blue-50 p-6 rounded-xl space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Looking Ahead
            </h3>

            <p>
              Cannabis policy in the United States has remained largely unchanged
              for more than five decades. Reclassification represents a potential
              turning point that could unlock rigorous clinical research and
              improve public understanding of both risks and benefits.
            </p>

            <p>
              While cannabis is unlikely to become a medical cure-all, expanded
              research could finally provide the data needed to inform patients,
              clinicians, and policymakers with clarity rather than speculation.
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
          Educational content for awareness and research literacy. Not intended as medical advice.
        </motion.p>

      </div>
    </main>
  );
}