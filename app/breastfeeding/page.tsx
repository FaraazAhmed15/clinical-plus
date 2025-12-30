'use client';

import { motion } from 'framer-motion';
import {
  FaBookMedical,
  FaFemale,
  FaMicroscope,
  FaLayerGroup,
  FaHeartbeat,
  FaBaby
} from 'react-icons/fa';

export default function BreastAnatomy() {
  return (
    <main className="min-h-screen bg-pink-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">

          <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-pink-100 text-pink-600">
            <FaFemale className="text-3xl" />
          </div>

          <h1 className="text-4xl font-bold text-pink-700 mb-3">
            Breast Anatomy & Breastfeeding
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            <strong>Anatomy, physiology, and clinical relevance</strong>
          </p>
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-10 space-y-12">

          {/* 1. Introduction */}
          <h1 className="text-xl font-semibold text-gray-800">1. Introduction</h1>

          <div className="flex gap-5 items-center bg-pink-50 p-6 rounded-xl">
            <FaBookMedical className="text-pink-600 w-12 h-12 flex-shrink-0" />
            <p className="text-gray-600 leading-relaxed">
              The female breast is a specialized exocrine gland whose primary function
              is lactation. It is composed of glandular tissue, fibrous connective tissue,
              and adipose tissue arranged to efficiently produce and deliver milk.
            </p>
          </div>

          {/* 2. Surface Anatomy */}
          <h1 className="text-xl font-semibold text-gray-800">2. Surface Anatomy</h1>

          <div className="bg-pink-50 p-6 rounded-xl">
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li><strong>Vertical:</strong> 2nd to 6th rib</li>
              <li><strong>Horizontal:</strong> Sternum to mid-axillary line</li>
              <li><strong>Axillary tail (Tail of Spence):</strong> Important for lymphatic spread</li>
            </ul>
          </div>

          {/* 3. Diagram */}
          <h1 className="text-xl font-semibold text-gray-800">3. Diagram</h1>

          <div className="bg-pink-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Breast Anatomy Diagram
            </h3>

            <div className="flex justify-center bg-pink-100 p-6 rounded-xl  border-pink-300">
              
                <p className="text-pink-600 font-medium">
                              <img
                src="/photos/breast.jpeg"
                alt="Breast Anatomy Diagram"
                className="rounded-xl shadow-md max-w-md w-full"
              />
              </p>
              


            </div>
          </div>

          {/* 4. Nipple & Areola */}
          <h1 className="text-xl font-semibold text-gray-800">4. Nipple & Areola</h1>

          <div className="flex gap-5 items-center bg-pink-50 p-6 rounded-xl">
            <FaMicroscope className="text-pink-600 w-12 h-12 flex-shrink-0" />
            <ul className="text-gray-600 space-y-2">
              <li><strong>Nipple:</strong> 15–20 lactiferous duct openings</li>
              <li><strong>Smooth muscle:</strong> Erection via touch, cold, oxytocin</li>
              <li><strong>Areola:</strong> Montgomery glands provide lubrication and protection</li>
            </ul>
          </div>

          {/* 5. Glandular Tissue */}
          <h1 className="text-xl font-semibold text-gray-800">5. Glandular Tissue</h1>

          <div className="bg-pink-50 p-6 rounded-xl space-y-2">
            <ul className="list-disc list-inside text-gray-600">
              <li><strong>Lobes:</strong> 15–20, each with its own duct</li>
              <li><strong>Lobules:</strong> Hormone-sensitive subdivisions</li>
              <li><strong>Alveoli:</strong> Milk-secreting units</li>
              <li><strong>Myoepithelial cells:</strong> Oxytocin-mediated milk ejection</li>
            </ul>
          </div>

          {/* 6. Ductal System */}
          <h1 className="text-xl font-semibold text-gray-800">6. Ductal System</h1>

          <div className="flex gap-5 items-center bg-pink-50 p-6 rounded-xl">
            <FaLayerGroup className="text-pink-600 w-12 h-12 flex-shrink-0" />
            <ul className="text-gray-600 space-y-2">
              <li><strong>Lactiferous ducts:</strong> Transport milk to nipple</li>
              <li><strong>Lactiferous sinuses:</strong> Temporary reservoirs</li>
            </ul>
          </div>

          {/* 7. Blood, Nerves & Lymph */}
          <h1 className="text-xl font-semibold text-gray-800">7. Blood, Nerve & Lymph Supply</h1>

          <div className="bg-pink-50 p-6 rounded-xl">
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li><strong>Blood:</strong> Internal mammary & lateral thoracic arteries</li>
              <li><strong>Lymph:</strong> ~75% drains to axillary lymph nodes</li>
              <li><strong>Nerves:</strong> Intercostal nerves (T4 most important)</li>
            </ul>
          </div>

          {/* breastfeeding */}

          <h1 className="text-xl font-semibold text-gray-800">
            9. Breastfeeding 
          </h1>

          {/* Definition */}
          <div className="flex gap-5 items-center bg-pink-50 p-6 rounded-xl">
            <FaBaby className="text-pink-600 w-12 h-12 flex-shrink-0" />
            <p className="text-gray-600 leading-relaxed">
              Breastfeeding is the process by which a mother provides human milk to her
              infant through the breast. WHO and UNICEF recommend initiation within
              1 hour of birth, exclusive breastfeeding for 6 months, and continuation
              up to 2 years or beyond with complementary feeding.
            </p>
          </div>

          {/* Physiology */}
          <div className="bg-pink-50 p-6 rounded-xl space-y-2">
            <h3 className="text-lg font-semibold text-gray-800">Physiology of Lactation</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li><strong>Prolactin:</strong> Stimulates milk synthesis in alveoli</li>
              <li><strong>Oxytocin:</strong> Myoepithelial contraction → milk ejection</li>
              <li>Suckling → hypothalamus → pituitary hormone release</li>
              <li>Stress inhibits oxytocin and milk flow</li>
            </ul>
          </div>

          {/* Milk Composition */}
          <div className="bg-pink-50 p-6 rounded-xl space-y-2">
            <h3 className="text-lg font-semibold text-gray-800">Composition of Human Milk</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Macronutrients: lactose, fats, proteins (whey &gt; casein)</li>
              <li>Immunological factors: IgA, lactoferrin, lysozyme, leukocytes</li>
              <li>Bioactive substances: growth factors, hormones, HMOs</li>
              <li><strong>Colostrum:</strong> Immunoglobulin-rich, anti-infective</li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="bg-pink-50 p-6 rounded-xl space-y-2">
            <h3 className="text-lg font-semibold text-gray-800">Benefits</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>↓ Diarrhea, respiratory infections, NEC</li>
              <li>Improved gut microbiome and neurodevelopment</li>
              <li>Maternal ↓ breast & ovarian cancer, T2DM</li>
              <li>Enhances mother–infant bonding</li>
            </ul>
          </div>

          {/* Clinical Points */}
          <div className="bg-pink-100 p-6 rounded-xl border-l-4 border-pink-500">
            <p className="font-semibold text-gray-800">High-Yield Clinical Points</p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Milk is produced in alveoli, not stored</li>
              <li>Proper latch is critical</li>
              <li>Most problems are mechanical and preventable</li>
              <li>Breastfeeding is a preventive medical intervention</li>
            </ul>
          </div>
          <p className="text-gray-600 italic mt-6">
  <strong>
    Note: Breastfeeding depends on intact breast anatomy and physiology. Milk is synthesized in alveoli 
    under prolactin control and ejected via oxytocin-mediated myoepithelial contraction. Effective 
    breastfeeding requires proper latch, frequent milk removal, and healthy breast structure. Clinical 
    support ensures prevention of complications and promotes long-term maternal and infant health.
  </strong>
</p>

        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 mt-10">
          Built responsibly for medical education and women-centered healthcare.
        </motion.p>

      </div>
    </main>
  );
}