'use client';

import { motion } from 'framer-motion';
import {
  FaBookMedical,
  FaMicroscope,
  FaShieldAlt,
  FaStethoscope,
} from 'react-icons/fa';

export default function EmergingTreatmentAreas() {
  return (
    <main className="min-h-screen bg-blue-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <FaStethoscope className="text-3xl" />
          </div>

          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Current Health Concerns: Emerging Influenza Threats
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            An in-depth overview of the evolving influenza landscape, focusing on
            emerging strains, vulnerable populations, vaccine effectiveness, and
            healthcare system impact.
          </p>
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-10 space-y-10"
        >

          {/* Section 1 */}
          <div className="flex gap-5 items-start bg-blue-50 p-6 rounded-xl">
            <FaBookMedical className="text-blue-600 text-3xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Current Epidemiological Situation
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Influenza activity has accelerated nationwide, with sustained
                elevated transmission across multiple surveillance indicators.
                Public health data estimates millions of infections so far this
                season, leading to tens of thousands of hospitalizations and
                significant mortality.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex gap-5 items-start bg-blue-50 p-6 rounded-xl">
            <FaMicroscope className="text-blue-600 text-3xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Pediatric Impact and Vulnerable Populations
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Young children, particularly infants through age four, have been
                disproportionately affected. Surveillance data including wastewater
                monitoring indicates a rapid rise in influenza A concentrations,
                highlighting early and aggressive seasonal spread.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex gap-5 items-start bg-blue-50 p-6 rounded-xl">
            <FaMicroscope className="text-blue-600 text-3xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Geographic Distribution of Cases
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Flu activity has reached high or very high levels across multiple
                U.S. states and territories. Urban centers and densely populated
                regions are experiencing especially intense transmission, placing
                added strain on healthcare facilities.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="flex gap-5 items-start bg-blue-50 p-6 rounded-xl">
            <FaMicroscope className="text-blue-600 text-3xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Lessons From the Previous Flu Season
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                The previous flu season resulted in a historically high number of
                pediatric deaths. A significant proportion of affected children
                were previously healthy and unvaccinated, underscoring persistent
                gaps in vaccination coverage and public awareness.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="flex gap-5 items-start bg-blue-50 p-6 rounded-xl">
            <FaShieldAlt className="text-blue-600 text-3xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Emergence of the H3N2 Subclade K Strain
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                A newly identified H3N2 subclade K strain has demonstrated changes
                in surface proteins that may reduce immune recognition. Such
                antigenic drift can impact population-level immunity and complicate
                seasonal prevention strategies.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="flex gap-5 items-start bg-blue-50 p-6 rounded-xl">
            <FaShieldAlt className="text-blue-600 text-3xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Vaccine Effectiveness and Public Health Guidance
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Despite strain mismatches, current influenza vaccines continue to
                provide meaningful protection against severe illness, hospitalization,
                and death. Health authorities strongly recommend vaccination as the
                primary preventive measure for all eligible populations.
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="flex gap-5 items-start bg-blue-50 p-6 rounded-xl">
            <FaShieldAlt className="text-blue-600 text-3xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Holiday Transmission Risks
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Increased travel and family gatherings during the holiday season
                raise concerns about transmission to older adults and individuals
                with underlying conditions, populations historically at higher risk
                of severe outcomes from H3N2 infections.
              </p>
            </div>
          </div>

          {/* Section 8 */}
          <div className="flex gap-5 items-start bg-blue-50 p-6 rounded-xl">
            <FaShieldAlt className="text-blue-600 text-3xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Rising Demand for Antiviral Treatments
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Healthcare providers report increased demand for antiviral therapies
                such as oseltamivir. Early and elevated prescription trends may signal
                an extended flu season with continued pressure on outpatient and
                inpatient care systems.
              </p>
            </div>
          </div>

        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 mt-12"
        >
          Built responsibly to promote learning, awareness, and ethical use of medical knowledge.
        </motion.p>

      </div>
    </main>
  );
}