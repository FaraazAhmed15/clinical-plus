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
  FaEye,
  
} from 'react-icons/fa';

export default function Ear() {
  return (
    <main className="min-h-screen bg-blue-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Heading of health page */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <FaStethoscope className="text-3xl" />
          </div>

          <h1 className="text-4xl font-bold text-blue-700 mb-3">
            Ear<br />&<br />Vestibular-Analyzer
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            <strong>
              "Hear the world clearly", "Sound is connection"<br /> & <br />
              "Every voice deserves to be heard"
            </strong>
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
          {/* Introduction */}
          <h1 className="text-xl font-semibold text-gray-800">Introduction</h1>
          <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
            <FaBookMedical className="text-blue-600 w-12 h-12 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Definition of Ear</h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                The ear is the sensory organ responsible for hearing and maintenance of balance.
                 It detects sound waves, converts them into nerve impulses, and helps maintain body equilibrium.
              </p>
            </div>
          </div>
          {/* Anatomy*/}
          <h1 className="text-xl font-semibold text-gray-800">2. Anatomy of Ear</h1>
          <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
          <div>
              <h3 className="text-xl font-semibold text-gray-800"> Lets Understand location and general Anatomy and Divisions of an Eye</h3>

{/* About purpose */}
<div className="flex gap-5 items-center bg-blue-50 p-6 rounded-xl">
  <div>
    <h3 className="text-xl font-semibold text-gray-800">
      The ear has three divisions: External, Middle, and Inner<br/>
    </h3>
  </div>
</div>

{/* Single table for ear divisions */}
<div className="overflow-x-auto mt-6">
  <table className="min-w-full   rounded-xl">
    <thead className="bg-blue-100">
      <tr>
        <th className=" px-4 py-2 text-gray-800 font-semibold">
          External Ear
        </th>
        <th className=" px-4 py-2 text-gray-800 font-semibold">
          Middle Ear
        </th>
        <th className=" px-4 py-2 text-gray-800 font-semibold">
          Inner Ear
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        {/* External Ear */}
        <td className=" px-4 py-2 align-top">
          <strong>Components:</strong>
          <ul className="list-disc list-outside pl-5">
            <li>Pinna (auricle) — funnel-shaped, collects sound</li>
            <li>External auditory canal — conducts sound</li>
            <li>Ceruminous glands — produce ear wax (cerumen)</li>
          </ul>
          <strong>Function:</strong>
          <ul className="list-disc list-outside pl-5">
            <li>Sound collection and amplification</li>
            <li>Protection of deeper ear structures</li>
          </ul>
        </td>

        {/* Middle Ear */}
        <td className=" px-4 py-2 align-top">
          <strong>Components:</strong>
          <ul className="list-disc list-outside pl-5">
            <li>Tympanic membrane (eardrum)</li>
            <li>Auditory ossicles — Malleus, Incus, Stapes</li>
            <li>Eustachian tube — connects to nasopharynx, equalizes pressure</li>
          </ul>
          <strong><br/>Functions:</strong>
          <ul className="list-disc list-outside pl-5">
            <li>Transmit sound vibrations to inner ear</li>
            <li>Amplify sound vibrations</li>
            <li>Maintain pressure equilibrium</li>
          </ul>
        </td>

        {/* Inner Ear */}
        <td className=" px-4 py-2 align-top">
          <strong>Components:</strong>
          <ul className="list-disc list-outside pl-5">
            <li>Cochlea — responsible for hearing</li>
            <li>Vestibule — static balance</li>
            <li>Semicircular canals — dynamic balance during head movement</li>
          </ul>
          <strong><br/><br/>Function:</strong>
          <ul className="list-disc list-outside pl-5">
            <li>Convert mechanical sound to electrical nerve impulses</li>
            <li>Maintain posture and coordination</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>
            </div>
              </div>
              {/* Visual Analyzer Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-blue-100 text-blue-800 rounded-xl shadow-md p-10 mt-16 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Vestibular Analyzer</h1>
            <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-6">
            The vestibular analyzer is the pathway that transforms<strong> balance-related signals </strong>into meaningful
             spatial orientation. It connects the inner ear structures (vestibule and semicircular canals) 
             to the brain through the vestibular nerve and higher centers, enabling equilibrium, posture
              control, and coordination of body movements.</p>
            <div className="flex justify-center">
              <FaBrain className="text-blue-600 w-14 h-14" />
            </div>
          </motion.div>

          <h1 className="text-xl font-semibold text-gray-800">1. Receptor Apparatus</h1>
          <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
            <div>

<div className="bg-blue-50 p-6 rounded-xl">
  <h3 className="text-lg font-semibold text-gray-800 text-center mb-6">
    The vestibular analyzer has specialized receptor organs for balance and spatial orientation
  </h3>

  <div className="flex flex-col md:flex-row gap-6 items-start">
    {/* Left column: Image + text below */}
    <div className="md:w-1/2">
      <img
        src="/photos/receptor_apparatus.jpeg"
        alt="Vestibular Apparatus"
        className="w-full max-w-md h-auto rounded-lg shadow-md mb-4"
      />
      <p className="text-gray-600 leading-relaxed">
        <strong>A. Otolith Organs (Utriculus and Sacculus)</strong><br />
        Contain sensory hair cells with one kinocilium and 60–80 stereocilia.<br />
        Hairs are embedded in a gelatinous otolith membrane containing calcium carbonate crystals (otoliths / ear stones).<br />
        Hair cells are surrounded by vestibular nerve endings.<br /><br />
        <strong>Function:</strong><br />
        Detect linear acceleration, head and body tilt, and changes in gravity.<br />
        When gravity or motion changes, the otolith membrane shifts → bends hairs → generates nerve impulses.<br />
        Provides constant sensory input for spatial orientation.
      </p>
    </div>

    {/* Right column: Detailed text */}
    <div className="md:w-1/2">
      <p className="text-gray-600 leading-relaxed">
        <strong>B. Semicircular Canals</strong><br />
        Three canals: Horizontal, Anterior (sagittal), Posterior (frontal).<br />
        Oriented perpendicular to each other and filled with potassium‑rich endolymph.<br />
        Each canal has an ampulla containing receptor cells on a ridge called the crista.<br />
        Hair cells are embedded in a gelatinous mass called the cupula (no otoliths present).<br /><br />
        <strong>Function:</strong><br />
        Detect angular (rotational) acceleration.<br />
        Movement causes endolymph displacement → cupula bends → hair cells deform → nerve impulses generated.<br />
        Endolymph inertia explains sensations during start/stop of movement.<br />
        Helps with postural adjustments and coordination.
      </p>
    </div>
  </div>
</div>
                </div>
            </div>
            {/* Retino-Motor Reactions */}
              <h1 className="text-xl font-semibold text-gray-800">2. Mechanism of Signal Generation</h1>
              <div className="flex justify-center bg-blue-50 p-6 rounded-xl">
                <div>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        {/*Image*/}
                        <div className="md:w-1/2">
                        <img 
                        src="/photos/signal_generation.jpeg"
                        alt="Understand Mechanism of Signal Generation in Ear  by visualizing using image"
                        className="w-full max-w-md h-auto rounded-lg shadow-md mb-4"/>
                        </div>
                        {/* Text right */}
                        <div className="md:w-1/2">
                        <ul className="text-gray-700 leading-relaxed">
                          <li>•  Hair cell deformation - receptor potential</li>
                          <li>•  Release of <strong>acetylcholine</strong></li>
                          <li>•  Generator potential in vestibular nerve endings</li>
                          <li>•  Summation - <strong>action potential</strong></li>
                          </ul>
                        </div>
                    </div>
                </div>
              </div>
              {/* Conductive Pathway*/}
              <h1 className="text-xl font-semibold text-gray-800">3.Vestibular Conductive pathway (Three-Neuron Chain)</h1>
              <div className="flex justify-center bg-blue-50 p-6 rounded-xl">
                <div>
                   {/* Conductive Pathway */}

<div className="bg-blue-50 p-6 rounded-xl">
  <h3 className="text-lg font-semibold text-gray-800 text-center mb-6">
    Vestibular Conductive Pathway
  </h3>

  <div className="flex flex-col md:flex-row gap-6 items-start">
    {/* Left column: Image */}
    <div className="md:w-1/2">
      <img
        src="/photos/vestibular_pathway.jpeg"
        alt="Vestibular Conductive Pathway"
        className="w-full max-w-md h-auto rounded-lg shadow-md mb-4"
      />
    </div>

    {/* Right column: Table */}
    <div className="md:w-1/2 overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300 rounded-lg">
        <thead className="bg-blue-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-gray-800 font-semibold">
              Neuron
            </th>
            <th className="border border-gray-300 px-4 py-2 text-gray-800 font-semibold">
              Location / Details
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-medium">
              First Neuron
            </td>
            <td className="border border-gray-300 px-4 py-2">
              Vestibular ganglion (Scarpa’s ganglion)
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-medium">
              Second Neuron
            </td>
            <td className="border border-gray-300 px-4 py-2">
              Vestibular nuclei in medulla:<br />
              • Superior (Bechterew)<br />
              • Inferior (Roller)<br />
              • Lateral (Deiters)<br />
              • Medial (Schwalbe)
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-medium">
              Third Neuron
            </td>
            <td className="border border-gray-300 px-4 py-2">
              Ventral posterior nuclei of the thalamus
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-medium">
              Cortical Projection
            </td>
            <td className="border border-gray-300 px-4 py-2">
              Suprasylvian and ectosylvian gyri<br />
              Adjacent to central gyri<br />
              Provides conscious awareness of balance and orientation
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
                </div>
              </div>
                <p className="text-gray-600 italic mt-6">
  <strong>Note: The ear functions as an organ of both hearing and balance. 
    Its vestibular part detects linear and angular movements through the otolith 
    organs and semicircular canals and transmits impulses to the brainstem and higher
     centers. This integrated system maintains balance, posture, eye movements, and
      spatial orientation, allowing the body to adapt smoothly to movement and gravity.</strong>
</p>
  


           </motion.div>
        

        {/* Footer and Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 mt-10">
          Built responsibly to promote learning, awareness, and ethical use of medical knowledge.
        </motion.p>
      </div>
    </main>
  );
}