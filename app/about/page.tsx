'use client';

 {/* Importing Statements*/} 
import { motion } from 'framer-motion';
import {
  FaBookMedical,
  FaMicroscope,
  FaShieldAlt,
  FaStethoscope,
} from 'react-icons/fa';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-blue-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Heading of about page*/}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">

          <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <FaStethoscope className="text-3xl" />
          </div>

          <h1 className="text-4xl font-bold text-blue-700 mb-3">
            About Clinical++</h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            An educational medical platform designed to make medical knowledge
            accessible, structured, and easy to understand. </p>
        </motion.div>

        {/* Content Card of this page*/}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-10 space-y-10">

          {/* about Purposen of this page */}
          <div className="flex gap-5 items-start">
            <FaBookMedical className="text-blue-600 text-3xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Educational Purpose
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Clinical++ is built strictly for <strong>educational and learning purposes</strong>.
                It aims to help students, learners, and enthusiasts explore
                medical concepts in a simplified and structured format.</p>
            </div>
          </div>

          {/* Content of this page*/}
          <div className="flex gap-5 items-start">
            <FaMicroscope className="text-blue-600 text-3xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                What This Platform Contains </h3>

              <p className="text-gray-600 mt-2 leading-relaxed">
                The platform includes educational information about various diseases,
                commonly known tablets and their general uses (for learning only),
                and research-oriented articles that explain medical topics clearly
                without technical overload.</p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="flex gap-5 items-start bg-blue-50 p-6 rounded-xl">
            <FaShieldAlt className="text-blue-600 text-3xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Important Disclaimer!</h3>

              <p className="text-gray-600 mt-2 leading-relaxed">
                Clinical++ does <strong>not</strong> provide medical advice,
                does <strong>not</strong> diagnose diseases based on symptoms,
                and does <strong>not</strong> recommend medicines, treatments,
                or dosages. This platform should never be used as a substitute
                for professional medical consultation. </p>
            </div>
          </div>

        </motion.div>

        {/* Footer and Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 mt-10" >
          Built responsibly to promote learning, awareness, and ethical use of medical knowledge.
        </motion.p>

      </div>
    </main>
  );
}