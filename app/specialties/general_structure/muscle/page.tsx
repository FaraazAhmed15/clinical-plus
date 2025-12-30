'use client';
import Link from 'next/link';

/* Importing Statements */
import { motion } from 'framer-motion';
import {
  FaBookMedical,
  FaMicroscope,
  FaShieldAlt,
  FaStethoscope,
  FaBrain,
  FaBolt,
  FaUserInjured,
  FaClinicMedical,
  FaHeartBroken,
  FaProcedures,
  FaDna,
  
 
} from 'react-icons/fa';

export default function Muscle() {
  return (
    <main className="min-h-screen bg-blue-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Heading of health page */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12" >
          <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <FaStethoscope className="text-3xl" />
          </div>

          <h1 className="text-4xl font-bold text-blue-700 mb-3">Muscle</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            <strong> “Engines of human movement and resilience"</strong>
          </p>
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-10 space-y-10" >
          <h1 className="text-xl font-semibold text-gray-800">Introduction</h1>

          {/* About purpose */}
          <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
            <FaBookMedical className="text-blue-600 w-12 h-12 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
               What is the term 'Muscle'?
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Muscles are <strong> specialized soft tissues </strong> in the human body that have the ability to
                <strong> cintract and relax,</strong>producing movement. They play a vital role in <strong> locomotion 
                    ,posture, circulation, breathing, digestion and overall body function.</strong> The human body contains 
                    <strong> more than 600 muscles </strong>,making up nearly half of total body weight.
               </p>
            </div>
          </div>
          {/* Muscle Structure */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  2. Muscle Structure
</h1>

<div className="bg-blue-50 p-6 rounded-xl flex flex-col md:flex-row gap-8 items-center">

  {/* Left side: image */}
  <div className="flex-1 flex justify-center">
    <img
      src="/photos/structure.jpeg"
      alt="Muscle Structure - Fibers and Connective Tissues"
      className="rounded-lg shadow-md max-w-xs md:max-w-sm"
    />
  </div>

  {/* Right side: text */}
  <div className="flex-1 bg-white rounded-lg shadow p-6">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Muscles are composed of muscle fibers (cells)</li>
      <li>
        Muscle fibers contain myofibrils, which are made of contractile proteins:
        <ul className="list-disc ml-6 space-y-1 text-gray-600">
          <li>Actin</li>
          <li>Myosin</li>
        </ul>
      </li>
      <li>The basic functional unit of muscle contraction is the <strong>sarcomere</strong></li>
      <li>
        Muscles are supported by connective tissues:
        <ul className="list-disc ml-6 space-y-1 text-gray-600">
          <li>Endomysium</li>
          <li>Perimysium</li>
          <li>Epimysium</li>
        </ul>
      </li>
    </ul>
  </div>

</div>
{/* Types of Muscle */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
 3. Types of Muscle
</h1>

<div className="bg-blue-50 p-6 rounded-xl space-y-10">

  {/* A. Skeletal Muscle (text left, image right) */}
  <div className="flex flex-col md:flex-row gap-8 items-center">
    {/* Left: text */}
    <div className="flex-1 bg-white rounded-lg shadow p-6">
      <h3 className="font-semibold text-gray-800 mb-2">A. Skeletal Muscle</h3>
      <ul className="list-disc ml-6 space-y-2 text-gray-700">
        <li>Attached to bones</li>
        <li>Responsible for voluntary movements</li>
        <li>Striated in appearance</li>
        <li>Example: muscles of arms and legs</li>
      </ul>
    </div>
    {/* Right: image */}
    <div className="flex-1 flex justify-center">
      <img
        src="/photos/skeletal_muscle.jpeg"
        alt="Skeletal Muscle"
        className="rounded-lg shadow-md max-w-xs md:max-w-sm"
      />
    </div>
  </div>

  {/* B. Smooth Muscle (text right, image left) */}
  <div className="flex flex-col md:flex-row gap-8 items-center">
    {/* Left: image */}
    <div className="flex-1 flex justify-center order-2 md:order-1">
      <img
        src="/photos/smooth_muscle.jpeg"
        alt="Smooth Muscle"
        className="rounded-lg shadow-md max-w-xs md:max-w-sm"
      />
    </div>
    {/* Right: text */}
    <div className="flex-1 bg-white rounded-lg shadow p-6 order-1 md:order-2">
      <h3 className="font-semibold text-gray-800 mb-2">B. Smooth Muscle</h3>
      <ul className="list-disc ml-6 space-y-2 text-gray-700">
        <li>Found in walls of internal organs (stomach, intestines, blood vessels)</li>
        <li>Controls involuntary movements</li>
        <li>Non-striated</li>
        <li>Example: intestinal movements</li>
      </ul>
    </div>
  </div>

  {/* C. Cardiac Muscle (text left, image right) */}
  <div className="flex flex-col md:flex-row gap-8 items-center">
    {/* Left: text */}
    <div className="flex-1 bg-white rounded-lg shadow p-6">
      <h3 className="font-semibold text-gray-800 mb-2">C. Cardiac Muscle</h3>
      <ul className="list-disc ml-6 space-y-2 text-gray-700">
        <li>Found only in the heart</li>
        <li>Involuntary and striated</li>
        <li>Responsible for pumping blood</li>
        <li>Has rhythmic contractions</li>
      </ul>
    </div>
    {/* Right: image */}
    <div className="flex-1 flex justify-center">
      <img
        src="/photos/cardiac_muscle.jpeg"
        alt="Cardiac Muscle"
        className="rounded-lg shadow-md max-w-xs md:max-w-sm"
      />
    </div>
  </div>

</div>
{/* Functions of Muscles */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  4. Functions of Muscles
</h1>

<div className="bg-blue-50 p-6 rounded-xl">
  <div className="bg-white rounded-lg shadow p-6 max-w-2xl">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Enable body movement and locomotion</li>
      <li>Maintain posture and body position</li>
      <li>Produce heat to regulate body temperature</li>
      <li>Assist circulation of blood and lymph</li>
      <li>Aid in breathing and digestion</li>
      <li>Support and protect internal organs</li>
    </ul>
  </div>
</div>
{/* Mechanism of Muscle Contraction */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  5. Mechanism of Muscle Contraction
</h1>

<div className="bg-blue-50 p-6 rounded-xl flex flex-col md:flex-row gap-8 items-center">

  {/* Left side: image */}
  <div className="flex-1 flex justify-center">
    <img
      src="/photos/muscle_contraction.jpeg"
      alt="Mechanism of Muscle Contraction"
      className="rounded-lg shadow-md max-w-xs md:max-w-sm"
    />
  </div>

  {/* Right side: text */}
  <div className="flex-1 bg-white rounded-lg shadow p-6">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Nerve impulse stimulates muscle fiber</li>
      <li>Calcium ions are released</li>
      <li>Actin and myosin slide over each other</li>
      <li>Muscle shortens (contracts)</li>
      <li>Relaxation occurs when stimulation stops</li>
    </ul>
  </div>
</div>
{/* Common Muscle Disorders */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
 6. Common Muscle Disorders
</h1>

<div className="bg-blue-50 p-6 rounded-xl">
  <div className="bg-white rounded-lg shadow p-6 max-w-2xl">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Muscle strain</li>
      <li>Muscle cramps</li>
      <li>Myositis</li>
      <li>Muscular dystrophy</li>
      <li>Myasthenia gravis</li>
    </ul>
  </div>
</div>
{/* Muscle Tone and Strength */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  7. Muscle Tone and Strength
</h1>

<div className="bg-blue-50 p-6 rounded-xl">
  <div className="bg-white rounded-lg shadow p-6 max-w-2xl">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>
        <strong>Muscle tone:</strong> continuous partial contraction of muscles
      </li>
      <li>Maintains posture and readiness for action</li>
      <li>
        <strong>Muscle strength depends on:</strong>
        <ul className="list-disc ml-6 space-y-1 text-gray-600">
          <li>Muscle size</li>
          <li>Training and exercise</li>
          <li>Nutrition</li>
          <li>Neural control</li>
        </ul>
      </li>
    </ul>
  </div>
</div>



          
                            
<p className="text-gray-600 italic mt-6">
  <strong>Muscles are essential components of the human body that enable movement, 
    maintain posture, and support vital physiological functions. Proper care through
     exercise, nutrition, and healthy habits helps maintain muscle strength, flexibility,
      and overall physical well-being.</strong></p>


          
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