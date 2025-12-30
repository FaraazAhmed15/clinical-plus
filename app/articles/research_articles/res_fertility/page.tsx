'use client';

import { motion } from 'framer-motion';
import { FaStethoscope } from 'react-icons/fa';

export default function ReproductiveHealthFertilityArticle() {
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
            Advances in Reproductive Health & Fertility Research
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Exploring how artificial intelligence, regenerative medicine, and
            molecular diagnostics are reshaping fertility care and assisted
            reproductive technologies.
          </p>
        </motion.div>

        {/* Article */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-10 space-y-12 text-gray-800 leading-relaxed"
        >

          {/* Section 1 – Text Left / Image Right */}
          <section className="bg-blue-50 p-6 rounded-xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Artificial Intelligence in Assisted Reproductive Technologies
                </h2>
                <p>
                  Artificial intelligence has become a transformative tool in
                  assisted reproductive technologies, particularly in embryo
                  selection during in vitro fertilization (IVF). Traditional
                  embryo grading relied heavily on morphological assessment,
                  which is subject to variability between embryologists.
                </p>
                <p>
                  AI-powered systems analyze thousands of embryo images and
                  developmental time points, detecting subtle patterns linked
                  to implantation success and chromosomal normality. Early
                  studies suggest these tools can improve live birth rates
                  while reducing the risk of multiple pregnancies.
                </p>
              </div>

              <div className="md:w-1/2 w-full h-72 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
                <img
                  src="/photos/embryo.jpeg"
                  alt="Embryo"
                  className="w-full max-w-md h-auto rounded-lg shadow-md"/>
              </div>
            </div>
          </section>

          {/* Section 2 – Text Only */}
          <section className="bg-blue-50 p-6 rounded-xl space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Non-Invasive Genetic Screening in IVF
            </h2>
            <p>
              Conventional preimplantation genetic testing requires embryo
              biopsy, which introduces a small but meaningful risk to embryo
              viability. Recent research has focused on non-invasive genetic
              screening using cell-free DNA released into embryo culture media.
            </p>
            <p>
              Although still under validation, these techniques may allow
              clinicians to assess chromosomal status without physically
              manipulating the embryo, improving safety and accessibility in
              fertility treatments.
            </p>
          </section>

          {/* Section 3 – Image Left / Text Right */}
          <section className="bg-blue-50 p-6 rounded-xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 w-full h-72 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
               <img
                  src="/photos/ovarian_regeneration.jpeg"
                  alt="Ovarian Regeneration"
                  className="w-full max-w-md h-auto rounded-lg shadow-md"/>
              </div>

              <div className="md:w-1/2 space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Stem-Cell–Based Ovarian Regeneration
                </h2>
                <p>
                  Premature ovarian insufficiency affects approximately 1% of
                  women under the age of 40 and is a major cause of infertility.
                  Stem-cell–based approaches aim to restore ovarian function
                  rather than bypass it through assisted reproduction alone.
                </p>
                <p>
                  Preclinical and early clinical studies using mesenchymal stem
                  cells and induced pluripotent stem cells suggest improvements
                  in ovarian reserve markers and hormone production through
                  paracrine signaling and tissue repair mechanisms.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 – Text Only */}
          <section className="bg-blue-50 p-6 rounded-xl space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Endometrial Receptivity Biomarkers
            </h2>
            <p>
              Successful implantation depends on both embryo quality and
              endometrial receptivity. Research into the “window of implantation”
              has identified transcriptomic and molecular biomarkers that define
              optimal timing for embryo transfer.
            </p>
            <p>
              Personalized embryo transfer guided by these biomarkers has shown
              improved implantation rates in patients with recurrent
              implantation failure, with ongoing efforts focused on less
              invasive diagnostic methods.
            </p>
          </section>

          {/* Conclusion */}
          <section className="bg-blue-50 p-6 rounded-xl space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Future Directions and Clinical Implications
            </h2>
            <p>
              The convergence of artificial intelligence, regenerative medicine,
              and molecular diagnostics is redefining fertility care. These
              innovations support a shift toward precision-based, personalized
              reproductive medicine.
            </p>
            <p>
              While ethical considerations such as data privacy and equitable
              access remain critical, continued clinical trials and long-term
              studies will be essential to integrate these advances into routine
              practice safely and effectively.
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
          Educational content for learning and awareness. Not intended as medical advice.
        </motion.p>

      </div>
    </main>
  );
}