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
            Latest News 
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            <strong>Curated educational articles covering medical research, emerging
  treatment approaches, disease mechanisms, and health science updates.
  This content is intended for learning and awareness purposes only.
</strong>
          </p>
        </motion.div>

        {/* Articles List */}
        <section className="max-w-5xl mx-auto grid gap-8">
          {/* Article 1 */}
          <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transform transition duration-300">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Emerging Treatment Areas
            </h2>
            <p className="text-gray-600 mb-4">
              An overview of emerging therapeutic approaches including spatial RNA transcriptomics,
              precision medicine, and their role in modern clinical research.
            </p>
            <Link
              href="/articles/latest_news/emerging_treatment_areas"
              className="text-blue-600 font-medium inline-flex items-center gap-1 hover:underline"
            >
              Read full article →
            </Link>
          </article>

          {/* Article 2 */}
          <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transform transition duration-300">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Alzheimer’s Research Advances
            </h2>
            <p className="text-gray-600 mb-4">
              Updates on biomarkers, diagnostics, and clinical trials in neurodegenerative disease research.
            </p>
            <Link
              href="/articles/latest_news/alzheimer_advances"
              className="text-blue-600 font-medium inline-flex items-center gap-1 hover:underline"
            >
              Read full article →
            </Link>
          </article>

          {/* Article 3 */}
          <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transform transition duration-300">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Current Health Concerns
            </h2>
            <p className="text-gray-600 mb-4">
              A new flu strain (H3N2 Subclade K) has emerged, affecting children the most.
            </p>
            <Link
              href="/articles/latest_news/current_health_concerns"
              className="text-blue-600 font-medium inline-flex items-center gap-1 hover:underline"
            >
              Read full article →
            </Link>
          </article>

          {/* Coming Soon Articles */}
          <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transform transition duration-300">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Sanofi's $2.2 Billion Acquisition</h2>
            <p className="text-gray-600 mb-4">
             Strategic Implications for Global Vaccine Department
            </p>
             <Link
              href="/articles/latest_news/acquition"
              className="text-blue-600 font-medium inline-flex items-center gap-1 hover:underline"
            >
              Read full article →
            </Link>
          </article>

          <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transform transition duration-300">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Genetics & Rare Diseases
            </h2>
            <p className="text-gray-600 mb-4">
              A Stanford Medicine study reveals how mRNA COVID-19 vaccines can, in rare cases, trigger heart inflammation in young males
            </p>
           <Link
              href="/articles/latest_news/covid-19"
              className="text-blue-600 font-medium inline-flex items-center gap-1 hover:underline"
            >
              Read full article →
            </Link>
          </article>

          <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transform transition duration-300">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Cancer(Oncology) Updates
            </h2>
            <p className="text-gray-600 mb-4">
              Marginal Zone Lymphoma Research Priorities and Emerging Oncology Advances
            </p>
            <Link
              href="/articles/latest_news/cancer_news"
              className="text-blue-600 font-medium inline-flex items-center gap-1 hover:underline"
            >
              Read full article →
            </Link>
          </article>

          <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transform transition duration-300">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
             Oncology, Mental Health & Neuroscience Advances
            </h2>
            <p className="text-gray-600 mb-4">
              Latest Advances in Oncology, Hematology, Mental Health, and Neuroscience
            </p>
             <Link
              href="/articles/latest_news/mental_health"
              className="text-blue-600 font-medium inline-flex items-center gap-1 hover:underline"
            >
              Read full article →
            </Link>
          </article>

          <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transform transition duration-300">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Digital Health & AI
            </h2>
            <p className="text-gray-600 mb-4">
              Artificial intelligence applications in healthcare and diagnostics.
            </p>
            <Link
              href="/articles/latest_news/digital_health"
              className="text-blue-600 font-medium inline-flex items-center gap-1 hover:underline"
            >
              Read full article →
            </Link>
          </article>

          <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transform transition duration-300">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Public Health & Epidemiology
            </h2>
            <p className="text-gray-600 mb-4">
               modern public health and epidemiological research, examining disease surveillance, population health trends.
            </p>
            <Link
              href="/articles/latest_news/public_health_news"
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