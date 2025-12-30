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

export default function Nose() {
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
            Nose<br />&<br />Olfactory-Analyzer
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            <strong>
              "Smell the world deeply", "Aroma is memory"
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
              <h3 className="text-xl font-semibold text-gray-800">Definition of Nose</h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
               The <strong>nose</strong> is the primary organ for <strong>olfaction(smell)</strong> and also 
               plays essential roles in <strong>respiration, air consitioning and defense</strong>.It serves 
               as the entry point for air and contains specialized structures for detecting odorants.
              </p>
            </div>
          </div>
                        {/* Anatomy */}
          <h1 className="text-xl font-semibold text-gray-800">2. Anatomy of Nose</h1>
          <div className="flex gap-5 items-center bg-blue-50 p-6 rounded-xl">
            <div>
              <div className="bg-blue-50 p-6 rounded-xl">


  <h3 className="text-lg font-semibold text-gray-800 mb-8">
    Anatomical Parts of the Nose
  </h3>

  <table className="table-auto w-full border-collapse border border-gray-300 text-gray-700">
    <thead>
      <tr className="bg-blue-100">
        <th className="border border-gray-300 px-4 py-2 text-left">Part</th>
        <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300 px-4 py-2 font-medium">
          External Nose
        </td>
        <td className="border border-gray-300 px-4 py-2">
          Includes the nasal bridge, tip, and nostrils.<br />
          Provides structural support and directs air into the nasal cavity.
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2 font-medium">
          Nasal Cavity
        </td>
        <td className="border border-gray-300 px-4 py-2">
          Separated by the nasal septum into right and left chambers.
          
          <ul className="list-disc list-inside mt-2">
            <li>
              <strong>Vestibule (anterior part):</strong> lined by skin with hairs (vibrissae) that filter large particles
            </li>
            <li>
              <strong>Nasal cavity proper:</strong> lined by mucosa and subdivided by conchae (turbinates) into meatuses
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>
              </div>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl">
  <h1 className="text-xl font-semibold text-gray-800 mb-4">
    3. Nasal Mucosa
  </h1>
  <p className="text-gray-700 mb-4">
    Two types of mucosa line the nasal cavity:
  </p>

  <table className="table-auto w-full border-collapse border border-gray-300 text-gray-700">
    <thead>
      <tr className="bg-blue-100">
        <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
        <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
      </tr>
    </thead>
    <tbody>
      {/* Respiratory Epithelium */}
      <tr>
        <td className="border border-gray-300 px-4 py-2 font-medium">
          A. Respiratory Epithelium
        </td>
        <td className="border border-gray-300 px-4 py-2">
          <p>Lines most of the nasal cavity.</p>
          <p>Contains ciliated cells, goblet cells, and a rich blood supply.</p>
          <p className="font-medium mt-2">Functions:</p>
          <ul className="list-disc list-inside mt-1 space-y-1">
            <li>Warms air</li>
            <li>Humidifies air</li>
            <li>Traps dust and microorganisms</li>
          </ul>
        </td>
      </tr>

      {/* Olfactory Epithelium */}
      <tr>
        <td className="border border-gray-300 px-4 py-2 font-medium">
          B. Olfactory Epithelium
        </td>
        <td className="border border-gray-300 px-4 py-2">
          <p>
            Located in the roof of the nasal cavity, superior concha, and upper septum.
          </p>
          <p>Contains receptors responsible for smell.</p>
          <p>Non-ciliated and specialized for chemoreception.</p>
        </td>
      </tr>
    </tbody>
  </table>
</div>
{/* Visual Analyzer Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-blue-100 text-blue-800 rounded-xl shadow-md p-10 mt-16 text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Olfactory Analyzer</h1>
            <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-6">
              The <strong>Olfactory Analyzer</strong> is a specialized <strong>chemosensory system </strong>
              is responsible for the perception pf <strong>smell.</strong> It detects volatile chemical
               substances(odorants) dissolved in mucus and converts them into nerve impulses that are processed
               in the brain.
            </p>
            <div className="flex justify-center">
              <FaBrain className="text-blue-600 w-14 h-14" />
            </div>
          </motion.div>
           <h1 className="text-xl font-semibold text-gray-800">1. Structural Organization of the Olfactory Analyzer</h1>
          <h3 className="text-lg font-semibold text-gray-800 text-center mb-6">
              The Olfactory analyzer consists of  <strong> three main componets:</strong></h3>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-6">A. Receptor (Peripheral) Part</h3>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/*Image*/}
                <div className="md:w-1/2">
                  <img 
                  src="/photos/peripheral_olfactory.jpeg"
                  alt="Receptor (Peripheral) Part "
                  className="w-full max-w-md h-auto rounded-lg shadow-md mb-4"/>
                  </div>
                  {/*Right side text*/}
                {/* Right side text */}
<div className="md:w-1/2 ">
  <p className="text-gray-700 mb-3">
    <strong>Located in the olfactory epithelium</strong>
  </p>

  <p className="text-gray-700 font-medium mb-2">Contains:</p>
  <ul className="list-disc list-outside pl-6 space-y-1">
    <li><strong>Olfactory receptor neurons</strong> (bipolar neurons)</li>
    <li>Supporting <strong>sustentacular</strong> cells</li>
    <li>Basal stem cells (regeneration)</li>
  </ul>

  <p className="text-gray-700 mt-4">
    Receptor neurons have cilia that bind odorant molecules.
  </p>
  <p className="text-gray-700">
    Olfactory receptors are true neurons, capable of regeneration.
  </p>

  <p className="text-gray-700 font-medium mt-4 mb-2">Odorants must be:</p>
  <ul className="list-disc list-outside pl-6 space-y-1">
    <li>Volatile</li>
    <li>Lipid-soluble</li>
    <li>Dissolved in nasal mucus</li>
  </ul>
</div>
               </div>
              </div>
              
          
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-6">B.Conductive(Afferent) Part</h3>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/*Image*/}
                <div className="md:w-1/2">
                  <img 
                  src="/photos/afferent_olfactory.jpeg"
                  alt="Conductive(Afferent) Part "
                  className="w-full max-w-md h-auto rounded-lg shadow-md mb-4"/>
                  </div>
                  {/* Right side text */}
<div className="md:w-1/2 ">
  <p className="text-gray-700 mb-3">
    <strong>Axons of receptor neurons</strong> form the olfactory nerve (cranial nerve I).
  </p>
  <p className="text-gray-700 mb-2">
    Fibers pass through the <strong>cribriform plate</strong> of the ethmoid bone and end in the olfactory bulb.
  </p>

  <p className="text-gray-700 font-medium mt-4 mb-2">In the olfactory bulb:</p>
  <ul className="list-disc list-outside pl-6 space-y-1">
    <li>Axons synapse in <strong>glomeruli</strong></li>
    <li>
      Second-order neurons:
      <ul className="list-disc list-outside pl-6 mt-1 space-y-1">
        <li>Mitral cells</li>
        <li>Tufted cells</li>
      </ul>
    </li>
    <li>
      Information is modulated by inhibitory interneurons:
      <ul className="list-disc list-outside pl-6 mt-1 space-y-1">
        <li>Periglomerular cells</li>
        <li>Granule cells</li>
      </ul>
    </li>
  </ul>
</div>
                  </div>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-6">C. Central (Cortical) Part</h3>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/*Image*/}
                <div className="md:w-1/2">
                  <img 
                  src="/photos/cortical_olfactory.jpeg"
                  alt=" Central (Cortical) Part "
                  className="w-full max-w-md h-auto rounded-lg shadow-md mb-4"/>
                  </div>
                  {/* Right side text */}
<div className="md:w-1/2 mt-4">
  <p className="text-gray-700 font-medium mb-2">
    Olfactory information is transmitted via the olfactory tract to:
  </p>
  <ul className="list-disc list-outside pl-6 space-y-1">
    <li>Primary olfactory cortex (piriform cortex)</li>
    <li>Amygdala</li>
    <li>Entorhinal cortex</li>
    <li>Hypothalamus</li>
  </ul>

  <p className="text-gray-700 font-medium mt-4 mb-2">
    Secondary processing occurs in:
  </p>
  <ul className="list-disc list-outside pl-6 space-y-1">
    <li>Orbitofrontal cortex (conscious odor identification)</li>
  </ul>
</div>
                  </div>
                  </div>
                  <h1 className="text-xl font-semibold text-gray-800">2. Mechanism of Olfactory Transduction</h1>
                   <div className="bg-blue-50 p-6 rounded-xl">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/*Image*/}
                <div className="md:w-1/2">
                  <img 
                  src="/photos/transduction_olfactory.jpeg"
                  alt="Mechanism of Olfactory Tranduction"
                  className="w-full max-w-md h-auto rounded-lg shadow-md mb-4"/>
                  </div>
                  {/* Right side text */}
<div className="md:w-1/2  text-gray-700">
  <h3 className="text-lg font-medium mb-3">
    Mechanism of Olfactory Transduction
  </h3>
  <ul className="list-disc list-outside pl-6 space-y-1">
    <li>Odorant binds to receptor protein on cilia</li>
    <li>Activation of <strong>G-protein (Golf)</strong></li>
    <li>Increase in cyclic AMP (<strong>cAMP</strong>)</li>
    <li>Opening of ion channels</li>
    <li>Depolarization of receptor neuron</li>
    <li>Action potential generation</li>
    <li>Signal transmission to the olfactory bulb</li>
  </ul>
  <p className="mt-4">
    Each odor activates a unique combination of receptors, allowing discrimination of thousands of smells.
  </p>
</div>

                  </div>
                  </div>
                   <h1 className="text-xl font-semibold text-gray-800">3. Functional Characteristics</h1>
                   <div className="bg-blue-50 p-6 rounded-xl">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/*Image*/}
                <div className="md:w-1/2">
                  <img 
                  src="/photos/functional_olfactory.jpeg"
                  alt=" Functional Characteristics"
                  className="w-full max-w-md h-auto rounded-lg shadow-md mb-4"/>
                  </div>
                  {/* Right side text */}
<div className="md:w-1/2  text-gray-700">
  <h3 className="text-lg font-medium mb-3">
    Functional Characteristics of Olfaction
  </h3>

  <ul className="list-disc list-outside pl-6 space-y-1">
    <li>Extremely high sensitivity</li>
    <li>Rapid adaptation to continuous stimuli</li>
    <li>Strong emotional and memory associations</li>
  </ul>

  <p className="font-medium mt-4 mb-2">Important in:</p>
  <ul className="list-disc list-outside pl-6 space-y-1">
    <li>Appetite and feeding behavior</li>
    <li>Detection of danger (smoke, spoiled food)</li>
    <li>Social and reproductive behavior</li>
  </ul>
</div>
                  </div>
                  </div>
                   <h1 className="text-xl font-semibold text-gray-800">4. Integration with Other Systems</h1>
                   <div className="bg-blue-50 p-6 rounded-xl">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/*Image*/}
                <div className="md:w-1/2">
                  <img 
                  src="/photos/integration_olfactory.jpeg"
                  alt=" Integration with Other Systems"
                  className="w-full max-w-md h-auto rounded-lg shadow-md mb-4"/>
                  </div>
                  {/* Right side text */}
<div className="md:w-1/2 mt-14 text-gray-700">
  <h3 className="text-lg font-medium mb-3">
    Olfactory Analyzer Interactions
  </h3>

  <ul className="list-disc list-outside pl-6 space-y-1">
    <li>
      <strong>Gustatory analyzer</strong> → flavor perception
    </li>
    <li>
      <strong>Limbic system</strong> → emotions and memory
    </li>
    <li>
      <strong>Autonomic nervous system</strong> → salivation, nausea
    </li>
  </ul>
</div>
                  </div>
                  </div>
                  <p className="text-gray-600 italic mt-6">
  <strong>
    Note: Olfactory receptors in the nasal mucosa are the foundation of the nose and olfactory analyzer, enabling odor detection, discrimination, and the formation of smell perception.
  </strong>
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