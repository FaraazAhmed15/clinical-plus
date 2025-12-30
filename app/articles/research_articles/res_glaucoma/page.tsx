'use client';

import { motion } from 'framer-motion';
import { FaStethoscope } from 'react-icons/fa';

export default function GlaucomaResearchReport2025() {
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
            National Glaucoma Research Report – Summer 2025
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Highlights from BrightFocus Foundation–supported research exploring
            cellular communication, artificial intelligence, dual-disease diagnosis,
            and global collaboration in glaucoma care.
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
                  Cutting-Edge Science: Cellular Communication in Glaucoma
                </h3>

                <p>
                  Recent glaucoma research is moving beyond pressure control to
                  investigate the biological mechanisms driving optic nerve damage.
                  One promising area focuses on how retinal ganglion cells (RGCs)
                  communicate with surrounding support cells.
                </p>

                <p>
                  Studies indicate that exosomes—microscopic vesicles carrying proteins,
                  RNA, and signaling molecules—play a critical role in maintaining RGC
                  survival. In glaucoma, this communication pathway becomes disrupted,
                  accelerating neuronal death and vision loss.
                </p>

                <p>
                  Experimental strategies aimed at restoring or mimicking exosome
                  signaling suggest a paradigm shift: from slowing disease progression
                  to actively promoting neural repair and regeneration.
                </p>
              </div>

              <div className="md:w-1/2 w-full h-72 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
                 <img
                  src="/photos/retinal.jpeg"
                  alt="Retinal Cells and Exosome Signalling"
                  className="w-full max-w-md h-auto rounded-lg shadow-md"/>
              </div>

            </div>
          </section>

          {/* SECTION 2 — TEXT ONLY */}
          <section className="bg-blue-50 p-6 rounded-xl space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Artificial Intelligence in Glaucoma Prediction and Prevention
            </h3>

            <p>
              Artificial intelligence is rapidly transforming glaucoma detection
              and risk stratification. Machine learning models trained on optical
              coherence tomography (OCT), visual field testing, and patient
              demographics can now detect subtle structural changes long before
              clinical vision loss becomes apparent.
            </p>

            <p>
              These systems excel at identifying high-risk patients earlier than
              traditional methods, enabling clinicians to intervene sooner and
              personalize monitoring strategies.
            </p>

            <p>
              Despite this promise, challenges remain. Ensuring algorithmic fairness,
              avoiding bias across diverse populations, and integrating AI seamlessly
              into clinical workflows are critical for safe, effective deployment.
            </p>
          </section>

          {/* SECTION 3 — IMAGE LEFT / TEXT RIGHT */}
          <section className="bg-blue-50 p-6 rounded-xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">

              <div className="md:w-1/2 w-full h-72 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
                 <img
                  src="/photos/visual_field_data.jpeg"
                  alt="Ai analysis of OCT & Visual data field"
                  className="w-full max-w-md h-auto rounded-lg shadow-md"/>
              </div>

              <div className="md:w-1/2 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Researcher Spotlight: Patient-Centered Glaucoma Care
                </h3>

                <p>
                  Beyond laboratory innovation, glaucoma research increasingly
                  emphasizes patient communication and family awareness. Many
                  patients remain unaware that glaucoma has a strong hereditary
                  component.
                </p>

                <p>
                  Advocates highlight the importance of family-based screening
                  initiatives, which can identify at-risk individuals earlier
                  and reduce long-term disease burden.
                </p>

                <p>
                  Improved education and clearer communication empower patients,
                  strengthen adherence to treatment, and enhance outcomes across
                  healthcare systems.
                </p>
              </div>

            </div>
          </section>

          {/* SECTION 4 — TEXT ONLY */}
          <section className="bg-blue-50 p-6 rounded-xl space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Dual Diagnosis: Glaucoma and Macular Degeneration
            </h3>

            <p>
              A growing clinical challenge involves patients diagnosed with both
              glaucoma and age-related macular degeneration (AMD). These conditions
              affect different parts of the visual system, yet their symptoms can
              overlap, complicating diagnosis and management.
            </p>

            <p>
              Integrated diagnostic approaches and holistic treatment strategies
              are increasingly necessary to address combined vision loss and
              preserve functional sight.
            </p>
          </section>

          {/* SECTION 5 — TEXT ONLY */}
          <section className="bg-blue-50 p-6 rounded-xl space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Funding, Collaboration, and the Future of Glaucoma Research
            </h3>

            <p>
              Seed funding plays a crucial role in advancing innovative glaucoma
              research. Organizations like BrightFocus Foundation support early-stage,
              high-risk projects that may not yet qualify for large government grants.
            </p>

            <p>
              Collaborative networks spanning major U.S. academic centers and
              international laboratories accelerate discovery by pooling expertise,
              data, and resources.
            </p>

            <p>
              These partnerships are driving progress in regenerative medicine,
              stem cell research, and AI-driven diagnostics, shaping the future
              of glaucoma care worldwide.
            </p>
          </section>

          {/* SUMMARY TABLE */}
          <section className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Research Summary Overview
            </h3>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-blue-200">
                  <tr>
                    <th className="border px-4 py-2 text-left">Research Area</th>
                    <th className="border px-4 py-2 text-left">Key Focus</th>
                    <th className="border px-4 py-2 text-left">Potential Impact</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="border px-4 py-2">Cellular Communication</td>
                    <td className="border px-4 py-2">Exosome signaling between retinal cells</td>
                    <td className="border px-4 py-2">Neuroprotection and vision restoration</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Artificial Intelligence</td>
                    <td className="border px-4 py-2">Early prediction using OCT and visual fields</td>
                    <td className="border px-4 py-2">Preventive, personalized glaucoma care</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Patient Education</td>
                    <td className="border px-4 py-2">Family awareness and screening</td>
                    <td className="border px-4 py-2">Earlier diagnosis, reduced disease burden</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Dual Diagnosis</td>
                    <td className="border px-4 py-2">Glaucoma with macular degeneration</td>
                    <td className="border px-4 py-2">Integrated vision care strategies</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Funding & Collaboration</td>
                    <td className="border px-4 py-2">Seed grants and global partnerships</td>
                    <td className="border px-4 py-2">Acceleration of high-risk, high-reward research</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
          Educational and research-focused content. Not intended as medical advice.
        </motion.p>

      </div>
    </main>
  );
}