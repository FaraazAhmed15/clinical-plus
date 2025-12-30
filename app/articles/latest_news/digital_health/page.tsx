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
            Artificial Intelligence in Healthcare: Clinical Impact, Applications, and Future Directions
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A summary of recent peer-reviewed research examining how artificial intelligence,
            machine learning, and deep learning are transforming diagnosis, clinical decision
            support, and healthcare delivery.
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
                  Introduction: Why AI Matters in Healthcare
                </h3>

                <p>
                  Artificial intelligence (AI) has become a major driver of innovation in
                  healthcare, fueled by rapid digitization of medical data, advances in
                  computing power, and improved machine learning algorithms.
                </p>

                <p>
                  AI systems excel at recognizing complex patterns in large datasets,
                  often at speeds and scales beyond human capability. This makes them
                  particularly valuable in medical imaging, electronic health records,
                  and clinical decision support.
                </p>

                <p>
                  The goal of AI in healthcare is not to replace clinicians, but to
                  augment decision-making, improve diagnostic accuracy, and enhance
                  efficiency and patient outcomes.
                </p>
              </div>

              <div className="md:w-1/2 w-full h-72 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
                <img
                  src="/photos/digital_health.jpeg"
                  alt="Digital Health"
                  className="w-full max-w-md h-auto rounded-lg shadow-md"/>
              </div>
            </div>
          </section>

          {/* SECTION 2 — TEXT ONLY */}
          <section className="bg-blue-50 p-6 rounded-xl space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Core AI Technologies: ML and Deep Learning
            </h3>

            <p>
              Machine learning (ML) is a subset of AI that enables systems to learn
              patterns from data without explicit programming. ML models may be
              supervised, unsupervised, or reinforcement-based.
            </p>

            <p>
              Deep learning (DL), a specialized form of ML, uses multi-layered neural
              networks to extract hierarchical features from complex data such as
              images, genomic sequences, and clinical records.
            </p>

            <p>
              These approaches require large volumes of high-quality data (“big data”)
              and are central to modern applications in imaging, pathology, and
              predictive analytics.
            </p>
          </section>

          {/* SECTION 3 — IMAGE LEFT / TEXT RIGHT */}
          <section className="bg-blue-50 p-6 rounded-xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 w-full h-72 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
                <img
                  src="/photos/digoital_application.jpeg"
                  alt="digital_application"
                  className="w-full max-w-md h-auto rounded-lg shadow-md"/>
              </div>

              <div className="md:w-1/2 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Medical Applications of AI
                </h3>

                <p>
                  AI has demonstrated strong performance in medical imaging,
                  including cancer detection in mammography, skin cancer
                  classification, and diabetic retinopathy screening.
                </p>

                <p>
                  Studies show that deep learning models can achieve diagnostic
                  accuracy comparable to, and in some cases exceeding, that of
                  expert clinicians.
                </p>

                <p>
                  AI-powered clinical decision support systems assist clinicians
                  by synthesizing patient data, medical literature, and guidelines
                  to support diagnosis, treatment planning, and follow-up care.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 4 — TEXT ONLY */}
          <section className="bg-blue-50 p-6 rounded-xl space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Digital Pathology, Predictive Analytics, and Precision Medicine
            </h3>

            <p>
              In digital pathology, AI enables automated analysis of whole-slide
              images, improving early disease detection, prognostication, and
              treatment selection.
            </p>

            <p>
              Predictive analytics using ML models can forecast disease risk,
              enabling proactive interventions and more efficient allocation
              of healthcare resources.
            </p>

            <p>
              These advances support precision medicine by tailoring treatments
              to individual genetic, environmental, and lifestyle factors.
            </p>
          </section>

          {/* SECTION 5 — TEXT ONLY (MISSING BUT IMPORTANT) */}
          <section className="bg-blue-50 p-6 rounded-xl space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Challenges, Ethics, and Future Directions
            </h3>

            <p>
              Despite its promise, AI adoption faces barriers including data privacy,
              algorithmic bias, regulatory oversight, and the need for clinical validation.
            </p>

            <p>
              Ethical considerations such as transparency, explainability, and trust
              are essential for safe and effective integration into healthcare systems.
            </p>

            <p>
              Future AI-enabled healthcare is expected to shift from reactive treatment
              toward preventive, predictive, and personalized care models.
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
          Educational content for awareness and learning. Based on peer-reviewed literature.
        </motion.p>

      </div>
    </main>
  );
}