'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaStethoscope } from 'react-icons/fa';

export default function NewsArticlesPage() {
  return (
    <main className="min-h-screen bg-blue-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Heading of news page */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <FaStethoscope className="text-3xl" />
          </div>

          <h1 className="text-4xl font-bold text-blue-700 mb-3">
            Research Articles
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
           <strong> Educational Research Article </strong>
          </p>
        </motion.div>

        {/* Articles List */}
        <section className="max-w-5xl mx-auto grid gap-8">
          {/* Article 1 */}
          <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transform transition duration-300">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              AI in Ophthalmology Research: Ethical Implications
            </h2>
            <p className="text-gray-600 mb-4">
              Artificial intelligence is increasingly used in ophthalmology research, raising issues of plagiarism, data consent, and fairness.
            </p>
            <Link
              href="/articles/research_articles/ai_opthalmology"
              className="text-blue-600 font-medium inline-flex items-center gap-1 hover:underline"
            >
              Read full article →
            </Link>
          </article>

          {/* Article 2 */}
          <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transform transition duration-300">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Cannabis Reclassification and Research Opportunitie
            </h2>
            <p className="text-gray-600 mb-4">
               Cannabis has been reclassified from Schedule I to Schedule III, potentially removing barriers to medical research.
            </p>
            <Link
              href="/articles/research_articles/reclassification"
              className="text-blue-600 font-medium inline-flex items-center gap-1 hover:underline"
            >
              Read full article →
            </Link>
          </article>

          {/* Article 3 */}
          <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transform transition duration-300">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
             National Glaucoma Research Report
            </h2>
            <p className="text-gray-600 mb-4">
             Latest updates include studies on cellular communication in glaucoma, AI-driven prevention strategies, and researcher spotlights.
            </p>
            <Link
              href="/articles/research_articles/res_glaucoma"
              className="text-blue-600 font-medium inline-flex items-center gap-1 hover:underline"
            >
              Read full article →
            </Link>
          </article>

          {/* Coming Soon Articles */}
          <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transform transition duration-300">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Reproductive Health & Fertility</h2>
            <p className="text-gray-600 mb-4">
              Stem-cell–based ovarian regeneration showing promise in premature ovarian insufficiency

            </p>
             <Link
              href="/articles/research_articles/res_fertility"
              className="text-blue-600 font-medium inline-flex items-center gap-1 hover:underline"
            >
              Read full article →
            </Link>
          </article>

        

       

          
        </section>

        {/* Educational Disclaimer */}
        <section className="max-w-5xl mx-auto mt-16 bg-blue-100 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transform transition duration-300">
          <p className="text-sm text-gray-700">
            <strong>Note:</strong> This website is for educational purposes only.
            The information provided does not diagnose diseases, prescribe treatments,
            or recommend medications. Always consult qualified healthcare professionals for medical advice.
          </p>
        </section>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 mt-10"
        >
          Built responsibly to promote learning, awareness, and ethical use of medical knowledge.
        </motion.p>
      </div>
    </main>
  );
}