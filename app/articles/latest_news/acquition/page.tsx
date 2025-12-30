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
            Sanofi Expands Vaccine Portfolio With $2.2B Dynavax Acquisition
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            In-depth medical and pharmaceutical analysis covering vaccine development,
            regulatory challenges, market dynamics, and long-term public health impact.
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
                Overview of the Acquition
              </h3>
                <p>
                  Sanofi announced a definitive agreement to acquire U.S.-based
                  biotechnology company Dynavax Technologies for approximately
                  $2.2 billion (€1.9 billion), marking one of the most strategically
                  significant vaccine acquisitions of the year.
                </p>
                <p> 
                  The deal adds Dynavax’s commercial adult hepatitis B vaccine,
                  Heplisav-B, alongside the experimental shingles vaccine Z-1018,
                  strengthening Sanofi’s immunology and infectious disease portfolio.
                </p>
              </div>

              <div className="md:w-1/2 w-full h-72 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
               <img 
                  src="/photos/vaccine_facility.jpeg"
                  alt="Vaccine Facility"
                  className="w-full max-w-md h-auto rounded-lg shadow-md mb-4"/>
              </div>
            </div>
          </section>

          {/* Section 2 – NORMAL TEXT */}
          <section className="bg-blue-50 p-6 rounded-xl space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
                Vaccine Policy and Regulatory Environment
              </h3>
              Vaccine Policy and Regulatory Environment
           
            <p>
              The acquisition comes amid heightened uncertainty in vaccine policy,
              particularly in the United States. Changes to childhood immunisation
              recommendations have raised concerns among clinicians and public
              health officials regarding long-term disease prevention.
            </p>
            <p>
              Analysts suggest that Sanofi’s strategic focus on adult vaccines
              provides insulation from pediatric policy shifts while addressing
              unmet needs in older populations and chronic viral infections.
            </p>
            <p>
              Increased scrutiny on vaccine safety, manufacturing transparency,
              and post-market surveillance further reinforces the importance of
              robust clinical and real-world evidence.
            </p>
          </section>

          {/* Section 3 – IMAGE LEFT / TEXT RIGHT */}
          <section className="bg-blue-50 p-6 rounded-xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 w-full h-72 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
                <img 
                  src="/photos/financial_loss.jpeg"
                  alt="Financial Loss "
                  className="w-full max-w-md h-auto rounded-lg shadow-md mb-4"/>
              </div>

              <div className="md:w-1/2 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                Financial Terms and Market Response
              </h3>
                 
                
                <p>
                  Sanofi will pay $15.50 per Dynavax share, representing a 39%
                  premium over the company’s previous closing price.
                </p>
                <p>
                  Following the announcement, Dynavax shares surged nearly 39%,
                  reflecting investor confidence in the strategic value of its
                  vaccine assets. Sanofi shares declined modestly, a typical
                  response for large cash-funded acquisitions.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 – TEXT ONLY */}
          <section className="bg-blue-50 p-6 rounded-xl space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
                Heplisav-B: Clinical and Commercial Significance
              </h3>
            
            
            <p>
              Heplisav-B is an FDA-approved adult hepatitis B vaccine administered
              in two doses over one month, offering a compliance advantage over
              traditional three-dose regimens spanning six months.
            </p>
            <p>
              The vaccine generated approximately $90 million in third-quarter
              2025 sales, with analysts projecting peak annual U.S. revenues
              exceeding $600 million.
            </p>
            <p>
              Hepatitis B remains a major global public health challenge, with
              chronic infection linked to liver cirrhosis and hepatocellular
              carcinoma.
            </p>
          </section>

          {/* Section 5 – TEXT ONLY */}
          <section className="bg-blue-50 p-6 rounded-xl space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
                Experimental Shingles Vaccine Pipeline
              </h3>
              
            
            <p>
              Dynavax’s experimental shingles vaccine candidate Z-1018 has
              demonstrated immune responses comparable to existing market
              leaders, with early data suggesting a favorable safety profile.
            </p>
            <p>
              The shingles vaccine market represents a multi-billion-dollar
              opportunity driven by aging populations and increased awareness
              of herpes zoster-related complications.
            </p>
          </section>

          {/* Section 6 – TEXT ONLY */}
          <section className="bg-blue-50 p-6 rounded-xl space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
               Broader Industry Implications
              </h3>
            <p>
              The acquisition highlights broader pressures facing vaccine
              manufacturers, including declining immunisation rates, heightened
              regulatory scrutiny, and market volatility.
            </p>
            <p>
              Diversification into adult vaccines and specialty immunisation
              programs is increasingly viewed as essential for sustainable
              long-term growth.
            </p>
          </section>

          {/* Conclusion */}
          <section className="bg-blue-50 p-6 rounded-xl space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
                Long-Term Outlook
              </h3>
            <p>
              If completed as planned in early 2026, the Dynavax acquisition is
              expected to strengthen Sanofi’s competitive position in global
              vaccines and enhance revenue durability beyond 2030.
            </p>
            <p>
              The deal underscores how pharmaceutical companies are adapting to
              a rapidly evolving healthcare environment by prioritizing
              resilience, diversification, and long-term scientific value.
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
          Educational content for awareness and learning. Not intended as medical or financial advice.
        </motion.p>

      </div>
    </main>
  );
}