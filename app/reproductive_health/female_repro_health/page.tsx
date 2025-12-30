'use client';

import Image from 'next/image';
import { FaInfoCircle, FaVenus } from 'react-icons/fa';

export default function FemaleReproductiveHealth() {
  return (
    <main className="min-h-screen bg-pink-50 px-6 py-12">

      {/* HEADER */}
      <section className="max-w-5xl mx-auto mb-10">
        <h1 className="text-4xl font-bold text-pink-700 mb-4 flex items-center gap-3">
          <FaVenus />
          Female Reproductive Health
        </h1>

        <p className="text-gray-700 leading-relaxed">
          An engaging and approachable guide to female reproductive health that explores the anatomy,
           hormonal balance, different life stages, and why it matters for overall well-being and community health."
        </p>
      </section>

      {/* IMAGE + INTRO */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-14">

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/photos/female_repro_health.jpeg"
            alt="Female Reproductive System"
            width={420}
            height={420}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Intro */}
        <div className="text-gray-800 leading-relaxed">
          <h2 className="text-2xl font-semibold text-pink-600 mb-3">
            Definition
          </h2>
          <p>
            Female reproductive health refers to the complete physical, hormonal,
            and functional well-being of the female reproductive system across all
            stages of life—from puberty to menopause—ensuring normal menstruation,
            fertility, pregnancy, and overall health.
          </p>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="max-w-5xl mx-auto space-y-10 text-gray-800">

        {/* Anatomy */}
        <div>
          <h3 className="text-xl font-semibold text-pink-600 mb-2">
            Anatomy of the Female Reproductive System
          </h3>

          <p className="font-medium">Internal Organs</p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Ovaries</strong> – produce ova and female sex hormones (estrogen and progesterone)</li>
            <li><strong>Fallopian tubes</strong> – transport ova and are the site of fertilization</li>
            <li><strong>Uterus</strong> – supports implantation and fetal development</li>
            <li><strong>Cervix</strong> – connects uterus to vagina and provides protective mucus</li>
            <li><strong>Vagina</strong> – copulatory organ and birth canal</li>
          </ul>

          <p className="font-medium">External Genitalia</p>
          <ul className="list-disc list-inside">
            <li>Collectively known as the vulva</li>
            <li>Includes labia majora, labia minora, clitoris, and vestibule</li>
            <li>Protects internal reproductive organs</li>
          </ul>
        </div>

        {/* Hormonal Regulation */}
        <div>
          <h3 className="text-xl font-semibold text-pink-600 mb-2">
            Hormonal Regulation
          </h3>
          <p>
            Female reproductive health is regulated by the hypothalamic–pituitary–ovarian (HPO) axis:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>GnRH (hypothalamus)</li>
            <li>FSH & LH (pituitary)</li>
            <li>Estrogen & Progesterone (ovaries)</li>
          </ul>
          <p className="mt-2">
            These hormones regulate the menstrual cycle, ovulation, endometrial changes,
            and secondary sexual characteristics.
          </p>
        </div>

        {/* Menstrual Cycle */}
        <div>
          <h3 className="text-xl font-semibold text-pink-600 mb-2">
            Menstrual Cycle and Reproductive Health
          </h3>
          <p>
            A normal menstrual cycle lasts 21–35 days, with menstrual flow for 3–7 days.
            It includes the menstrual, follicular, ovulatory, and luteal phases.
            Regular cycles indicate normal reproductive health.
          </p>
        </div>

        {/* Fertility */}
        <div>
          <h3 className="text-xl font-semibold text-pink-600 mb-2">
            Fertility and Reproductive Capacity
          </h3>
          <ul className="list-disc list-inside">
            <li>Highest fertility in early 20s</li>
            <li>Gradual decline after 30 years</li>
            <li>Sharp decline after 35 years</li>
            <li>Menopause marks the end of reproductive potential</li>
          </ul>
        </div>

        {/* Life Stages */}
        <div>
          <h3 className="text-xl font-semibold text-pink-600 mb-2">
            Female Reproductive Health Across Life Stages
          </h3>
          <ul className="list-disc list-inside">
            <li><strong>Puberty</strong> – onset of menstruation and secondary sexual characteristics</li>
            <li><strong>Reproductive Age</strong> – regular ovulation, menstruation, pregnancy potential</li>
            <li><strong>Menopause</strong> – absence of menstruation for 12 consecutive months</li>
          </ul>
        </div>

        {/* Disorders */}
        <div>
          <h3 className="text-xl font-semibold text-pink-600 mb-2">
            Common Female Reproductive Health Issues
          </h3>
          <ul className="list-disc list-inside">
            <li>Menstrual disorders</li>
            <li>Polycystic ovarian syndrome (PCOS)</li>
            <li>Infertility</li>
            <li>Endometriosis</li>
            <li>Uterine fibroids</li>
            <li>Reproductive tract infections</li>
            <li>Gynecological cancers</li>
          </ul>
        </div>

        {/* Prevention */}
        <div>
          <h3 className="text-xl font-semibold text-pink-600 mb-2">
            Preventive Care and Public Health Importance
          </h3>
          <p>
            Regular gynecological check-ups, cancer screening, immunization,
            health education, and lifestyle modifications improve female
            reproductive health outcomes and reduce maternal and infant mortality.
          </p>
        </div>

        {/* Conclusion */}
        <div className="bg-pink-100 p-5 rounded-xl flex gap-3">
          
          <p className="text-gray-700">
            <strong>Conclusion:</strong> Female reproductive health reflects the
            normal anatomical, hormonal, and functional integrity of the reproductive
            system and is essential for individual and public health.
          </p>
        </div>

      </section>
    </main>
  );
}