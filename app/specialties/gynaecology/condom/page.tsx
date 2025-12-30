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

export default function Condom() {
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

          <h1 className="text-4xl font-bold text-blue-700 mb-3">Condom</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            <strong>"Frontline defense in reproductive health and safe intimacy”</strong>
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
               What is the term 'Condom'?
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
               A condom is a <strong>barrier contraceptive method </strong> used during sexual intercourse to 
               <strong> prevent pregnancy and protects against Sexually transmitted infections (STI's),
                </strong> including HIV. Condoms work by preventing semen from entering vagina, anus or mouth, thereby
                blocking the Transmission of sperm and infectious agents.</p>
            </div>
          </div>
          {/* Types of Condoms */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  2. Types of Condoms
</h1>

<div className="bg-blue-50 p-6 rounded-xl flex flex-col gap-12">

  {/* Male Condom: text left, image right */}
  <div className="flex flex-col md:flex-row items-center gap-8">
    {/* Text */}
    <div className="flex-1 bg-white rounded-lg shadow p-6">
      <h3 className="font-semibold text-gray-800 mb-2">A. Male Condom</h3>
      <ul className="list-disc ml-6 space-y-1 text-gray-700">
        <li>Worn over the erect penis</li>
        <li>Usually made of latex, polyurethane, or polyisoprene</li>
        <li>Most commonly used type</li>
      </ul>
    </div>
    {/* Image */}
    <div className="flex-1 flex justify-center">
      <img
        src="/photos/male_condom.jpeg"
        alt="Male Condom"
        className="rounded-lg shadow-md max-w-xs md:max-w-sm"
      />
    </div>
  </div>

  {/* Female Condom: text right, image left */}
  <div className="flex flex-col md:flex-row items-center gap-8 md:flex-row-reverse">
    {/* Text */}
    <div className="flex-1 bg-white rounded-lg shadow p-6">
      <h3 className="font-semibold text-gray-800 mb-2">B. Female Condom</h3>
      <ul className="list-disc ml-6 space-y-1 text-gray-700">
        <li>Inserted into the vagina before intercourse</li>
        <li>Made of nitrile or polyurethane</li>
        <li>Provides protection to both partners</li>
      </ul>
    </div>
    {/* Image */}
    <div className="flex-1 flex justify-center">
      <img
        src="/photos/female_condom.jpeg"
        alt="Female Condom"
        className="rounded-lg shadow-md max-w-xs md:max-w-sm"
      />
    </div>
  </div>

</div>
{/* Materials Used */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
 3. Materials Used
</h1>

<div className="bg-blue-50 p-6 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-8">

  {/* Latex */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">Latex</h3>
    <p className="text-gray-700">
      Most common, effective against STIs
    </p>
  </div>

  {/* Polyurethane */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">Polyurethane</h3>
    <p className="text-gray-700">
      Suitable for latex allergy
    </p>
  </div>

  {/* Polyisoprene */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">Polyisoprene</h3>
    <p className="text-gray-700">
      Soft and flexible alternative
    </p>
  </div>

  {/* Natural membrane (lambskin) */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">Natural membrane (Lambskin)</h3>
    <p className="text-gray-700">
      Prevents pregnancy but not STIs
    </p>
  </div>

</div>
{/* Effectiveness */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  4. Effectiveness
</h1>

<div className="bg-blue-50 p-6 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-8">

  {/* Pregnancy Prevention */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">Pregnancy Prevention</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>~98% effective with perfect use</li>
      <li>~85% effective with typical use</li>
    </ul>
  </div>

  {/* STI Prevention */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-gray-800 mb-2">STI Prevention</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Highly effective against HIV</li>
      <li>Reduces risk of gonorrhea, chlamydia, syphilis, and HPV</li>
    </ul>
  </div>

</div>
{/* Advantages and Disadvantages of Condoms */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  5. Advantages and Disadvantages of Condoms
</h1>

<div className="bg-blue-50 p-6 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-8">

  {/* Advantages */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-green-700 mb-2">Advantages</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>Protect against both pregnancy and STIs</li>
      <li>Easily available without prescription</li>
      <li>Affordable and portable</li>
      <li>No hormonal side effects</li>
      <li>Can be used only when needed</li>
    </ul>
  </div>

  {/* Disadvantages */}
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <h3 className="font-semibold text-red-700 mb-2">Disadvantages</h3>
    <ul className="list-disc ml-6 space-y-1 text-gray-700">
      <li>May reduce sexual sensation</li>
      <li>Can break or slip if used incorrectly</li>
      <li>Latex condoms may cause allergy in some users</li>
      <li>Requires proper use with every sexual act</li>
    </ul>
  </div>

</div>
{/* Myths and Misconceptions with light red inside blue */}
<h1 className="text-xl font-semibold text-gray-800 mt-10">
  6. Myths and Misconceptions
</h1>

<div className="bg-blue-50 p-6 rounded-xl">
  <div className="bg-red-50 p-6 rounded-lg">
    <ul className="list-disc ml-6 space-y-2 text-gray-700">
      <li>Condoms do not cause infertility</li>
      <li>Condoms do not get lost inside the body</li>
      <li>When used correctly, condoms are reliable and safe</li>
    </ul>
  </div>
</div>
                    
<p className="text-gray-600 italic mt-6">
  <strong>Condoms are a simple, safe, and effective method of contraception
     that also provide essential protection against sexually transmitted 
     infections, including HIV. When used correctly and consistently,
      they play a vital role in promoting sexual health, preventing unintended
       pregnancies, and reducing the spread of infections, making them an important
        tool in individual and public health.</strong></p>


          
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