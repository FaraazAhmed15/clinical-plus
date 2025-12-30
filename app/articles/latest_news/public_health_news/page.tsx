'use client';

import { motion } from 'framer-motion';
import { FaStethoscope } from 'react-icons/fa';

export default function PublicHealthEpidemiologyArticle() {
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
            Recent Research Advances in Public Health and Epidemiology
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            An in-depth overview of modern public health and epidemiological research,
            examining disease surveillance, population health trends, prevention
            strategies, and global health challenges.
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
                  Foundations of Public Health and Epidemiology
                </h3>

                <p>
                  Public health and epidemiology form the backbone of population-level
                  disease prevention and health promotion. Epidemiology focuses on the
                  distribution and determinants of health-related events within
                  populations, while public health applies this knowledge to develop
                  policies, interventions, and systems that protect and improve health.
                </p>

                <p>
                  Over the past decades, epidemiological methods have evolved from
                  traditional observational studies to include advanced statistical
                  modeling, real-time surveillance, and data-driven decision-making.
                  These tools enable earlier detection of health threats and more
                  effective responses at local, national, and global levels.
                </p>

                <p>
                  Together, these disciplines guide evidence-based policymaking,
                  resource allocation, and preventive strategies aimed at reducing
                  morbidity, mortality, and health inequities.
                </p>
              </div>

              <div className="md:w-1/2 w-full h-72 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
                <img
                  src="/photos/surveillance.jpeg"
                  alt="Surveillance"
                  className="w-full max-w-md h-auto rounded-lg shadow-md"
                />
              </div>

            </div>
          </section>

          {/* SECTION 2 — TEXT ONLY */}
          <section className="bg-blue-50 p-6 rounded-xl space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Disease Surveillance and Outbreak Investigation
            </h3>

            <p>
              Modern disease surveillance systems integrate clinical reporting,
              laboratory data, syndromic surveillance, and increasingly, digital
              data sources such as wastewater monitoring and mobility patterns.
            </p>

            <p>
              These systems allow epidemiologists to identify emerging infectious
              disease outbreaks, monitor transmission dynamics, and evaluate the
              effectiveness of control measures.
            </p>

            <p>
              Rapid outbreak investigation remains a cornerstone of epidemiology,
              enabling public health authorities to trace sources of infection,
              interrupt transmission chains, and implement timely interventions.
            </p>
          </section>

          {/* SECTION 3 — IMAGE LEFT / TEXT RIGHT */}
          <section className="bg-blue-50 p-6 rounded-xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">

              <div className="md:w-1/2 w-full h-72 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
                 <img
                  src="/photos/global_health_data.jpeg"
                  alt="Global health Data"
                  className="w-full max-w-md h-auto rounded-lg shadow-md"
                />
              </div>

              <div className="md:w-1/2 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Global Burden of Disease and Population Health Trends
                </h3>

                <p>
                  Large-scale epidemiological initiatives, such as the Global Burden
                  of Disease studies, quantify the impact of diseases and injuries
                  across populations using metrics like disability-adjusted life
                  years (DALYs).
                </p>

                <p>
                  These analyses reveal shifting patterns in global health, including
                  the rising burden of non-communicable diseases such as cardiovascular
                  disease, diabetes, and cancer.
                </p>

                <p>
                  Understanding these trends enables governments and international
                  organizations to prioritize prevention, allocate resources, and
                  design targeted public health interventions.
                </p>
              </div>

            </div>
          </section>

          {/* SECTION 4 — TEXT ONLY */}
          <section className="bg-blue-50 p-6 rounded-xl space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Social Determinants of Health and Health Inequities
            </h3>

            <p>
              Epidemiological research increasingly highlights the role of social
              determinants of health, including income, education, housing, and
              environmental conditions, in shaping disease risk and outcomes.
            </p>

            <p>
              Health inequities arise when these determinants are unevenly distributed,
              leading to disparities in access to care and health outcomes across
              populations.
            </p>

            <p>
              Addressing these inequities requires cross-sector collaboration and
              policies that extend beyond healthcare systems alone.
            </p>
          </section>

          {/* SECTION 5 — TEXT ONLY */}
          <section className="bg-blue-50 p-6 rounded-xl space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Epidemiology of Non-Communicable and Environmental Diseases
            </h3>

            <p>
              Non-communicable diseases (NCDs) account for the majority of global
              mortality, driven by risk factors such as poor diet, physical inactivity,
              tobacco use, and environmental exposures.
            </p>

            <p>
              Environmental epidemiology examines the health effects of air pollution,
              climate change, heat exposure, and toxic substances, which increasingly
              influence population health worldwide.
            </p>

            <p>
              Research in this area informs prevention strategies, regulatory policies,
              and public awareness initiatives.
            </p>
          </section>

          {/* SECTION 6 — TEXT ONLY */}
          <section className="bg-blue-50 p-6 rounded-xl space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              The Future of Public Health and Epidemiology
            </h3>

            <p>
              The future of public health lies in integrating epidemiology with
              digital technologies, data science, and interdisciplinary collaboration.
            </p>

            <p>
              Advances in digital epidemiology, artificial intelligence, and real-time
              data analysis offer new opportunities for predictive modeling and
              proactive disease prevention.
            </p>

            <p>
              Strengthening public health infrastructure, improving data equity, and
              fostering global cooperation will be essential to address future health
              challenges effectively.
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