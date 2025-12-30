'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart,
   FaLungs,
   FaStethoscope,
   FaBrain,
   FaBone } from 'react-icons/fa';

import IconCard from './components/IconCard';
import DiseaseCard from './components/DiseaseCard';
import PopupModal from './components/PopupModal';
import Footer from './components/Footer';   

/* latest news */
const latestNews = [
  {
    title: 'Acquisition',
    description: 'Major pharmaceutical acquisition reshaping vaccine portfolios.',
    image: '/photos/financial_loss.jpeg',
    href: '/articles/latest_news/acquition',
  },
  {
    title: "Alzheimer's Advances",
    description: 'Blood-based biomarkers show promise in early Alzheimer’s detection.',
    image: '/photos/alzheimer.jpeg',
    href: '/articles/latest_news/alzheimer_advances',
  },
  {
    title: 'Cancer News',
    description: 'Recent breakthroughs in oncology and cancer therapeutics.',
    image: '/photos/oncology_trials.jpeg',
    href: '/articles/latest_news/cancer_news',
  },
  {
    title: 'COVID-19',
    description: 'Latest COVID-19 research and public health developments.',
    image: '/photos/covid_19.jpeg',
    href: '/articles/latest_news/covid-19',
  },
  {
    title: 'Current Health Concerns',
    description: 'New flu strain (H3N2 subclade K) affecting children.',
    image: '/photos/flu.jpeg',
    href: '/articles/latest_news/current_health_concerns',
  },
  {
    title: 'Digital Health',
    description: 'AI and digital technologies transforming healthcare delivery.',
    image: '/photos/digital_health.jpeg',
    href: '/articles/latest_news/digital_health',
  },
  {
    title: 'Emerging Treatment Areas',
    description: 'Spatial RNA medicine and next-generation therapeutics.',
    image: '/photos/rna.jpeg',
    href: '/articles/latest_news/emerging_treatment_areas',
  },
  {
    title: 'Mental Health',
    description: 'Neuroscience and mental health research updates.',
    image: '/photos/review.jpeg',
    href: '/articles/latest_news/mental_health',
  },
  {
    title: 'Public Health News',
    description: 'Epidemiology, surveillance, and population health insights.',
    image: '/photos/global_health_data.jpeg',
    href: '/articles/latest_news/public_health_news',
  },
];

const ITEMS_PER_PAGE = 3;
const INTERVAL_TIME = 3000;

/* homepage */
export default function Home() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex(prev =>
        prev + ITEMS_PER_PAGE >= latestNews.length ? 0 : prev + ITEMS_PER_PAGE
      );
    }, INTERVAL_TIME);

    return () => clearInterval(interval);
  }, []);

  const visibleNews = latestNews.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <main className="min-h-screen bg-blue-50">

      {/* Pop Up */}
      <PopupModal />

      {/* section*/}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-gray-900 leading-tight">
            Your Trusted Source for <br /> Medical Knowledge
          </h2>
          <p className="mt-6 text-gray-600 max-w-xl">
            Clinical++ is an educational medical platform providing reliable,
            up-to-date information on diseases, symptoms, and health topics.
          </p>
          <Link href="explore_disease">
            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg transform transition duration-300 hover:scale-105">
              Explore Diseases
            </button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-[320px] h-[320px] rounded-full bg-blue-200 flex items-center justify-center"
        >
          <Image
            src="/photos/doctor.jpeg"
            alt="Doctor"
            width={350}
            height={280}
            className="rounded-full object-cover"
          />
        </motion.div>
      </section>

      {/* categories */}
      <section className="px-10 py-10">
        <h3 className="text-2xl font-semibold mb-6">Categories</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Link href="/specialties/cardiology"><IconCard Icon={FaHeart} label="Cardiology" /></Link>
          <Link href="/specialties/pulmonology"><IconCard Icon={FaLungs} label="Pulmonology" /></Link>
          <Link href="/specialties/neurology"><IconCard Icon={FaBrain} label="Neurology" /></Link>
          <Link href="/specialties/orthopedics"><IconCard Icon={FaBone} label="Orthopedics" /></Link>
        </div>
      </section>

      {/* banner*/}
      <section className="px-10 py-6">
        <div className="flex items-center justify-center gap-4 bg-blue-100 rounded-xl p-5 text-center">
          <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-lg">
            <FaStethoscope className="text-xl" />
          </div>
          <p className="text-gray-700 font-medium max-w-2xl">
            Educational medical platform covering diseases, symptoms,
            prevention, and health awareness
          </p>
        </div>
      </section>

      {/*marie curie*/}
      <section className="px-10 py-16 bg-blue-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          <div className="flex justify-center">
            <Image
              src="/photos/marie-curie.jpeg"
              alt="Marie Curie"
              width={360}
              height={420}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#0F2A44] mb-4">
              Marie Curie
            </h3>

            <p className="text-blue-700 font-semibold mb-4">
              Pioneer of Medical Science & Radiotherapy
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Marie Curie (1867–1934) was a pioneering scientist whose research on
              radioactivity laid the foundation for modern medical imaging and
              radiation-based <strong>cancer treatment.</strong>
            </p>

            <p className="text-gray-700 leading-relaxed">
              She was the first woman to win a Nobel Prize and remains the only
              person to receive Nobel Prizes in two different scientific fields.
            </p>
          </div>

        </div>
      </section>

      {/*featured disease */}
      <section className="px-10 py-14">
        <h3 className="text-2xl font-semibold mb-6">Featured Diseases</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DiseaseCard title="Diabetes" description="Causes, symptoms, treatments." image="/photos/Diabetes.jpeg" />
          <DiseaseCard title="Hypertension" description="Blood pressure disorders." image="/photos/Hypertension.jpeg" />
          <DiseaseCard title="Asthma" description="Respiratory disease overview." image="/photos/asthma.jpeg" />
        </div>
      </section>

      {/* ===================== LATEST NEWS (AUTO ROTATING) ===================== */}
      <section className="px-10 py-14">
        <h3 className="text-2xl font-semibold mb-6">Latest News & Updates!</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {visibleNews.map(news => (
              <motion.div
                key={news.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <Link href={news.href}>
                                    <DiseaseCard
                    title={news.title}
                    description={news.description}
                    image={news.image}
                  />
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      
      <Footer />

    </main>
  );
}
                   