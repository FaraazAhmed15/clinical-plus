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
            Stanford Researchers Identify Immune Pathway Behind Rare mRNA Vaccine-Associated Myocarditis
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A Stanford Medicine study reveals how mRNA COVID-19 vaccines can, in rare cases,
            trigger heart inflammation in young males — and points toward a strategy that
            may reduce this risk.
          </p>
        </motion.div>

        {/* Article */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-10 space-y-12 text-gray-800 leading-relaxed"
        >

          {/* Section 1 – TEXT LEFT / IMAGE RIGHT */}
          <section className="bg-blue-50 p-6 rounded-xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Study Overview and Public Health Context
                </h3>

                <p>
                  Investigators at Stanford Medicine have uncovered a biological mechanism
                  explaining how mRNA-based COVID-19 vaccines can cause myocarditis — a rare
                  inflammation of heart tissue — in some adolescents and young men.
                </p>

                <p>
                  The researchers emphasize that mRNA vaccines remain extremely safe and
                  have been administered billions of times worldwide, preventing countless
                  severe infections and deaths during the COVID-19 pandemic.
                </p>

                <p>
                  Myocarditis cases linked to vaccination typically appear within one to
                  three days after vaccination, occur without viral infection, and are
                  identified through elevated cardiac troponin levels, a marker of heart
                  muscle injury.
                </p>
              </div>

              <div className="md:w-1/2 w-full h-72 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
                <img
                  src="/photos/covid_19.jpeg"
                  alt="Covid-19"
                  className="w-full max-w-md h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </section>

          {/* Section 2 – TEXT ONLY */}
          <section className="bg-blue-50 p-6 rounded-xl space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Two-Step Immune Activation Mechanism
            </h3>

            <p>
              Using laboratory models and data from vaccinated individuals, the team
              identified a two-step immune response driving inflammation. First,
              macrophages — early responder immune cells — react to mRNA vaccines by
              releasing high levels of the cytokine CXCL10.
            </p>

            <p>
              CXCL10 then activates T cells, which produce interferon-gamma (IFN-γ),
              another powerful inflammatory cytokine. Together, these signals directly
              injure heart muscle cells and amplify inflammation within cardiac tissue.
            </p>

            <p>
              Importantly, macrophages were identified as the primary source of CXCL10,
              while T cells were the main producers of IFN-γ, highlighting a coordinated
              immune interaction rather than a generalized toxic effect.
            </p>
          </section>

          {/* Section 3 – IMAGE LEFT / TEXT RIGHT */}
          <section className="bg-blue-50 p-6 rounded-xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 w-full h-72 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
                <img
                  src="/photos/covid_inflammation.jpeg"
                  alt="Inflammatory response signaling"
                  className="w-full max-w-md h-auto rounded-lg shadow-md"
                />
              </div>

              <div className="md:w-1/2 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Potential Strategy to Reduce Cardiac Inflammation
                </h3>

                <p>
                  The researchers tested genistein, a purified anti-inflammatory compound,
                  in laboratory-grown human heart cells and animal models. Genistein
                  significantly reduced the damaging effects of CXCL10 and IFN-γ on heart
                  tissue.
                </p>

                <p>
                  While genistein is found in dietary supplements, the version used in the
                  study was far more concentrated and is not equivalent to over-the-counter
                  formulations.
                </p>

                <p>
                  The findings suggest that targeted modulation of inflammatory signaling
                  — rather than altering vaccine design — may lower myocarditis risk while
                  preserving vaccine effectiveness.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 – TEXT ONLY */}
          <section className="bg-blue-50 p-6 rounded-xl space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Broader Implications for mRNA and Other Vaccines
            </h3>

            <p>
              Elevated cytokine signaling is a fundamental part of immune defense against
              viral RNA and DNA. However, excessive IFN-γ signaling can become harmful,
              damaging heart muscle proteins and triggering myocarditis-like symptoms.
            </p>

            <p>
              Researchers note that myocarditis is not unique to mRNA vaccines and has
              been reported with other vaccines, though symptoms are often less specific
              and less likely to prompt cardiac evaluation.
            </p>

            <p>
              The team also suggests that similar inflammatory mechanisms may affect other
              organs, including the lungs, liver, and kidneys, warranting further study.
            </p>
          </section>

          {/* Conclusion */}
          <section className="bg-blue-50 p-6 rounded-xl space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Conclusions and Clinical Perspective
            </h3>

            <p>
              Stanford researchers stress that the benefits of mRNA COVID-19 vaccines far
              outweigh their risks. Understanding rare adverse immune responses enables
              safer vaccine optimization without undermining public health progress.
            </p>

            <p>
              The study, funded by the National Institutes of Health and private foundations,
              provides a roadmap for reducing inflammatory side effects while preserving
              the life-saving impact of mRNA vaccine technology.
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