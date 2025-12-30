'use client';

import { motion } from 'framer-motion';
import { FaStethoscope } from 'react-icons/fa';

export default function AIOphthalmologyEthicsArticle() {
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
            AI in Ophthalmology Research: Ethical Implications
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Exploring how artificial intelligence is reshaping ophthalmology research,
            residency competitiveness, and medical education—alongside the ethical
            responsibilities it introduces.
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
                  Rising Competitiveness in Ophthalmology
                </h3>

                <p>
                  Over the past decade, ophthalmology residency placement has become
                  increasingly competitive. Match rates have declined while applicant
                  numbers have steadily risen, creating heightened pressure for medical
                  students to distinguish themselves through research productivity.
                </p>

                <p>
                  The transition of USMLE Step 1 to pass/fail has further shifted
                  emphasis toward Step 2 scores, letters of recommendation, and
                  scholarly output, intensifying the demand for meaningful research
                  experience.
                </p>

                <p>
                  Unfortunately, many students face barriers such as limited exposure
                  to ophthalmology curricula, lack of structured mentorship, and unequal
                  access to research resources.
                </p>
              </div>

              <div className="md:w-1/2 w-full h-72 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
                 <img
                  src="/photos/res_opthal.jpeg"
                  alt="AI drive Opthalmology Introduction image"
                  className="w-full max-w-md h-auto rounded-lg shadow-md"/>
              </div>

            </div>
          </section>

          {/* SECTION 2 — TEXT ONLY */}
          <section className="bg-blue-50 p-6 rounded-xl space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Applications of AI in Ophthalmology Research
            </h3>

            <p>
              Artificial intelligence tools, particularly large language models (LLMs)
              and imaging algorithms, have emerged as powerful resources for medical
              students and researchers. These tools assist with idea generation,
              literature synthesis, manuscript structuring, data analysis, and even
              mentorship-style guidance.
            </p>

            <p>
              In ophthalmology, AI has demonstrated strong performance in analyzing
              imaging modalities such as optical coherence tomography (OCT) and fundus
              photography, often approaching or matching human-level accuracy.
            </p>

            <p>
              AI systems excel at pattern recognition and large-scale data processing,
              enabling insights that might otherwise be overlooked. However, their
              outputs still require human oversight, clinical context, and
              interpretive judgment.
            </p>
          </section>

          {/* SECTION 3 — IMAGE LEFT / TEXT RIGHT */}
          <section className="bg-blue-50 p-6 rounded-xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">

              <div className="md:w-1/2 w-full h-72 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
                 <img
                  src="/photos/res_opthal1.jpeg"
                  alt="AI driven Opthalmology"
                  className="w-full max-w-md h-auto rounded-lg shadow-md"/>
              </div>

              <div className="md:w-1/2 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Ethical Challenges and Academic Integrity
                </h3>

                <p>
                  Despite its benefits, the use of AI in research raises substantial
                  ethical concerns. Overreliance on generative models risks plagiarism,
                  fabricated citations, and erosion of academic integrity.
                </p>

                <p>
                  Studies have demonstrated that LLMs may generate “hallucinated”
                  references, emphasizing the need for meticulous human verification.
                </p>

                <p>
                  Additionally, the use of patient imaging data introduces concerns
                  regarding privacy, consent, algorithmic bias, and equity—particularly
                  when AI systems are trained on non-representative datasets.
                </p>
              </div>

            </div>
          </section>

          {/* SECTION 4 — TEXT ONLY */}
          <section className="bg-blue-50 p-6 rounded-xl space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Impact on Learning and Critical Thinking
            </h3>

            <p>
              Traditional research fosters critical thinking, hypothesis development,
              and analytical reasoning. Excessive reliance on AI risks transforming
              research into a mechanical process driven by output rather than insight.
            </p>

            <p>
              This trend may limit the development of essential skills that medical
              students are expected to cultivate, potentially diminishing both
              educational value and scientific quality.
            </p>

            <p>
              Furthermore, current AI-detection tools lack sufficient accuracy,
              raising concerns about false accusations and unclear standards of
              accountability.
            </p>
          </section>

          {/* SECTION 5 — TEXT ONLY */}
          <section className="bg-blue-50 p-6 rounded-xl space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              AI Literacy in Medical Education
            </h3>

            <p>
              As AI becomes increasingly integrated into healthcare and research,
              AI literacy is now essential for medical students. While many students
              feel comfortable using AI tools, fewer possess a strong understanding
              of how these systems function or their limitations.
            </p>

            <p>
              Medical schools are beginning to address this gap by introducing
              structured AI curricula focused on ethical use, critical appraisal,
              and clinical implications.
            </p>

            <p>
              Importantly, AI should be framed as a complement to education and
              research—not a replacement for clinical reasoning or scholarly rigor.
            </p>
          </section>

          {/* CONCLUSION */}
          <section className="bg-blue-50 p-6 rounded-xl space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Conclusion
            </h3>

            <p>
              Artificial intelligence holds immense promise for advancing ophthalmology
              research and supporting medical trainees in an increasingly competitive
              landscape. However, its integration must be guided by responsibility,
              transparency, and ethical oversight.
            </p>

            <p>
              Establishing clear guidelines for AI use in research is critical to
              safeguarding academic integrity while harnessing the benefits of
              technological innovation for future physicians.
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
          Educational and research-focused content. Not intended as medical advice.
        </motion.p>

      </div>
    </main>
  );
}