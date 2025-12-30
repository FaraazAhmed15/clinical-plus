'use client';
import { motion } from 'framer-motion';
import {
  FaBookMedical,
  FaHandsWash,
  FaTooth,
  FaShower,
  FaTshirt,
  FaBaby
} from 'react-icons/fa';

export default function MaleReproductiveHealth() {
  return (
    <main className="min-h-screen bg-blue-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">

          <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <FaBookMedical className="text-3xl" />
          </div>

          <h1 className="text-4xl font-bold text-blue-700 mb-3">
            Male Reproductive Health
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            <strong>Medical overview for anatomy, physiology, disorders, and public health</strong>
          </p>
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-10 space-y-12">

          {/* 1. Definition */}
          <h1 className="text-xl font-semibold text-gray-800">1. Definition</h1>
          <div className="bg-blue-50 p-6 rounded-xl">
            <p className="text-gray-600 leading-relaxed">
              Male reproductive health refers to the normal structure and function of the male reproductive system,
              its ability to produce hormones and sperm, maintain fertility, and prevent disease across the lifespan.
            </p>
          </div>

          {/* 2. Anatomy */}
          <h1 className="text-xl font-semibold text-gray-800">2. Anatomy of the Male Reproductive System</h1>
          <div className="bg-blue-50 p-6 rounded-xl">
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li><strong>Testes:</strong> Spermatogenesis & testosterone production, optimal temp ~2–3°C below body temp</li>
              <li><strong>Duct system:</strong> Epididymis, vas deferens, ejaculatory ducts</li>
              <li><strong>Accessory glands:</strong> Seminal vesicles, prostate, bulbourethral glands</li>
              <li><strong>External genitalia:</strong> Penis (copulatory organ), scrotum (temperature regulation)</li>
            </ul>
          </div>

          {/* 3. Physiology */}
          <h1 className="text-xl font-semibold text-gray-800">3. Physiology of Male Reproduction</h1>
          <div className="bg-blue-50 p-6 rounded-xl">
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li><strong>Spermatogenesis:</strong> Occurs in seminiferous tubules, ~64–74 days, requires testosterone & FSH</li>
              <li><strong>Hormonal regulation (HPG axis):</strong> GnRH → LH → Leydig cells → Testosterone; FSH → Sertoli cells → Spermatogenesis</li>
              <li><strong>Feedback:</strong> Testosterone provides negative feedback to hypothalamus & pituitary</li>
            </ul>
          </div>

          {/* 4. Image Section */}
          <h1 className="text-xl font-semibold text-gray-800">4. Image</h1>
          <div className="bg-blue-100 p-6 rounded-xl flex flex-col items-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Visualizing the Male Reproductive System Anatomy
            </h3>
            <img
              src="/photos/male_repro_health.jpeg"
              alt="Male Reproductive System Diagram"
              className="rounded-xl shadow-md max-w-md w-full"
            />
          </div>

          {/* 5. Testosterone Functions */}
          <h1 className="text-xl font-semibold text-gray-800">5. Testosterone: Role and Functions</h1>
          <div className="bg-blue-50 p-6 rounded-xl">
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Development of male genitalia & secondary sexual characteristics</li>
              <li>Maintenance of libido, muscle mass, bone density</li>
              <li>Spermatogenesis & erythropoiesis</li>
              <li>Low testosterone → infertility, sexual dysfunction, mood & metabolic issues</li>
            </ul>
          </div>

          {/* 6. Common Disorders */}
          <h1 className="text-xl font-semibold text-gray-800">6. Common Male Reproductive Health Disorders</h1>
          <div className="bg-blue-50 p-6 rounded-xl">
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li><strong>Infertility:</strong> Oligospermia, poor motility, varicocele, genetic causes</li>
              <li><strong>Erectile dysfunction:</strong> Linked to cardiovascular disease, diabetes, stress</li>
              <li><strong>Testicular disorders:</strong> Cryptorchidism, torsion (emergency), orchitis, cancer</li>
              <li><strong>Prostate disorders:</strong> Prostatitis, BPH, prostate cancer</li>
            </ul>
          </div>

          {/* 7. Lifestyle Factors */}
          <h1 className="text-xl font-semibold text-gray-800">7. Lifestyle & Environmental Factors</h1>
          <div className="bg-blue-50 p-6 rounded-xl">
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Smoking, alcohol, obesity, heat exposure, toxins, stress, poor nutrition</li>
              <li>Healthy lifestyle improves sperm quality & hormonal balance</li>
              <li>Chronic stress → cortisol elevation → testosterone suppression</li>
            </ul>
          </div>

          {/* 8. Preventive Aspects */}
          <h1 className="text-xl font-semibold text-gray-800">8. Preventive Aspects</h1>
          <div className="bg-blue-50 p-6 rounded-xl">
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Regular medical check-ups & early infertility evaluation</li>
              <li>Testicular self-examination</li>
              <li>Balanced diet, exercise, avoidance of harmful substances</li>
              <li>Vaccination against mumps reduces orchitis risk</li>
            </ul>
          </div>

          {/* 9. Public Health */}
          <h1 className="text-xl font-semibold text-gray-800">9. Male Reproductive Health & Public Health</h1>
          <div className="bg-blue-50 p-6 rounded-xl">
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Male infertility contributes to ~50% of infertile couples</li>
              <li>Essential for family planning & population health</li>
              <li>Men often seek care late → need awareness & education</li>
              <li>Public health campaigns emphasize prostate cancer screening & lifestyle modification</li>
            </ul>
          </div>

          {/* High-Yield */}
          <div className="bg-blue-100 p-6 rounded-xl border-l-4 border-blue-500">
            <p className="font-semibold text-gray-800">High-Yield Points</p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Testes have endocrine & exocrine functions</li>
              <li>Spermatogenesis depends on hormones & temperature</li>
              <li>Male infertility is common but treatable</li>
              <li>Erectile dysfunction can be an early marker of vascular disease</li>
            </ul>
          </div>

          {/* Conclusion Note */}
          <p className="text-gray-600 italic mt-6">
            <strong>
              Note: Male reproductive health depends on normal anatomy, hormonal regulation, and reproductive function.
              It is closely linked to systemic health, lifestyle, and public health outcomes. Preventive measures,
              early detection of disorders, and awareness are essential for maintaining fertility and overall well-being.
            </strong>
          </p>

        </motion.div>

                        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 mt-10"
        >
          Developed for medical education and public health awareness.
        </motion.p>

      </div>
    </main>
  );
}