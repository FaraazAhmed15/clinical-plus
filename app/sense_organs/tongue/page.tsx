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

export default function Tongue() {
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
            Tongue<br />&<br />Gustatory Analyzer
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            <strong>
              "Taste the essence of life", "Flavor is experience" 
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
              <h3 className="text-xl font-semibold text-gray-800">Definition of Tongue</h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                The gustatory (taste) sensory system is responsible for the perception of taste sensations.
                 Unlike special sense organs such as the eye or ear, taste receptors are widely distributed
                  on the tongue and oral cavity. The tongue acts as the main peripheral organ of taste, 
                  contributing to nutrition, digestion, and protective reflexes.
              </p>
            </div>
          </div>
          {/* Taste Sensitivity*/}
          <h1 className="text-xl font-semibold text-gray-800">2. Taste Sensitivity</h1>
          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-800 text-center mb-6">
              Different regions of Taste Sensitivity inside Tongue
            </h3>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="md:w-1/2">
              <img
                  src="/photos/regions_sensitivity.jpeg"
                  alt="Different Regions of Sensitivity"
                  className="w-full max-w-md h-auto rounded-lg shadow-md mb-4" />
              
              <ul>Taste sensitivity includes the perception of  
                <strong> five basic taste modalities: </strong>
                <li className="mt-4">•  Sweet</li>
                <li>•  Salty</li>
                <li>•  Sour</li>
                <li>•  Bitter</li>
                <li>•  Umami</li>
                </ul>
                </div>
                <div className="md:w-1/2">
                <p className="text-gray-600 leading-relaxed mt-10">Taste sensations are formed when
                  <strong> chemical substances dissolved saliva</strong> stimulate taste receptors.
                </p>
                <ul className="mt-8"> Taste sensitivity plays an important role in: 
                  <li className="mt-4">•  Food Selection</li>
                  <li>•  Appetite regulation</li>
                  <li>•  Initiation of digestive processes</li>
                  <li>•  Protection against harmful substances</li>
                </ul>
                </div>
            </div>
            </div>
             {/* Receptors of the tongue */}
              <h1 className="text-xl font-semibold text-gray-800">3. Receptors of Tongue</h1>
              <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-800 text-center mb-6">
              Types of receptors in different regions of the tongue
            </h3>
            <div className="flex flex-col md:flex-row gap-6 items-start">
                        {/*Image*/}
                <div className="md:w-1/2">
                  <img 
                  src="/photos/papillae.jpeg"
                  alt="Types of papillae across different regions of tongue "
                  className="w-full max-w-md h-auto rounded-lg shadow-md mb-4"/>
                  </div>
                  {/*Right side text*/}
                  <div className="md:w-1/2">
                  <h2 className="text-lg font-medium text-gray-800">Types of Papillae:</h2>
                  <ul>
                    <li className="mt-5"><strong>Fungiform papillae - </strong> tip and sides of tongue</li>
                    <li ><strong>Foliate papillae - </strong> lateral borders</li>
                    <li ><strong>Circumvallate papillae - </strong> posterior part of tongue</li>
                    <li ><strong>Filiform papillae - </strong> mechanical function(no taste buds)</li>
                  </ul>
                  <h5 className="text-lg font-medium text-gray-800 mt-10">Each taste bud contains receptor cells that convert
                    <strong> chemical stimuli into nerve impulses.</strong>
                  </h5>
                  </div>
              </div>
            </div>
            {/* Gustatory Analyzer*/}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-blue-100 text-blue-800 rounded-xl shadow-md p-10 mt-16 text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Gustatory Analyzer</h1>
            <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-6">
              The <strong>Gustatory analyzer</strong> is a sensory system that detects <strong>chemical stimuli (tastants)</strong> 
              dissolved in saliva and converts them into nerve impulses, which are processed in the central nervous system to form 
              <strong> taste sensations.</strong> 
            </p>
            <div className="flex justify-center">
              <FaBrain className="text-blue-600 w-14 h-14" />
            </div>
          </motion.div>

          <h1 className="text-xl font-semibold text-gray-800">1. Functional Components of Gustatory Analyzer</h1>
          <h3 className="text-lg font-semibold text-gray-800 text-center mb-6">
              Like othe analyzers, the gustatory analyzer consists of <strong> three main parts:</strong></h3>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-6">A. Receptor Part</h3>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/*Image*/}
                <div className="md:w-1/2">
                  <img 
                  src="/photos/tastereceptor.jpeg"
                  alt="Types of papillae across different regions of tongue "
                  className="w-full max-w-md h-auto rounded-lg shadow-md mb-4"/>
                  </div>
                  {/*Right side text*/}
                  <div className="md:w-1/2">

                  <ul className="list-disc list-outside pl-6 mt-14">
                    <li> Consists of <strong> taste receptors cells</strong> grouped in taste buds</li>
                    <li> Receptors are <strong>chemoreceptors</strong></li>
                    <li> Activated only when substances are <strong> dissolved in saliva</strong></li>
                    <li> Each receptor responds preferentially to specific tastants but is not absolutely specific.</li>
                  </ul>
                </div>
               </div>
              </div>
               {/*conductive part*/}
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-6">B. Conductive (Afferent) Part</h3>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/*Image*/}
                  <div className="md:w-1/2">
                  <img 
                  src="/photos/afferent_gustatory.jpeg"
                  alt="Types of papillae across different regions of tongue "
                  className="w-full max-w-md h-auto rounded-lg shadow-md mb-4"/>
                  </div>
                  {/*Right side text*/}
                  <div className="md:w-1/2">
                  <h2 className="text-lg font-medium text-gray-800 mb-2">Taste impulses are transmitted through <strong>
                    three cranial nerves</strong>:</h2>
                    <b >1. Facial nerve(Vii)</b>
                    <ul className=" list-disc  ml-8 mt-2 mb-4">
                      <li>Chorda tymphani branch</li>
                      <li>Conducts taste from the anterior part of the oral cavity</li>
                    </ul>
                    <b >2. Glossopharyngeal nerve(ix)</b>
                    <ul className=" list-disc  ml-8 mt-2 mb-4">
                      <li>Conducts taste from posterior oral regions.</li>
                    </ul>
                    <b >3. Vagus nerve(x)</b>
                    <ul className=" list-disc  ml-8 mt-2 mb-4">
                      <li>Conducts taste from epiglottis and pharynx</li>
                    </ul>
                  </div>
                  </div>
                  <h2 className="text-lg font-medium semi-bold text-gray-800 mb-2 mt-4">Pathway:</h2>
                  <ul className="lis-disc ml-18 mt-4">
                        <li>  Taste receptor <b>-</b> sensory ganglia of cranial nerves</li>
                        <li><strong>Solitary tract nucleus</strong> (medulla oblongata)</li>
                        <li><strong>Thalamus</strong> (ventral posteromedial nucleus)</li>
                        <li><strong>Gustatory Cortex</strong></li>
                  </ul>
                  </div>
                  {/*central(cortical) part*/}
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-6">C. Central (Cortical) Part</h3>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/*Image*/}
                   <div className="md:w-1/2">
                  <img 
                  src="/photos/cortical_gustatory.jpeg"
                  alt="Central(cortical ) Part of the tongue "
                  className="w-full max-w-md h-auto rounded-lg shadow-md mb-4"/>
                  </div>
                 <div className="md:w-1/2">
  {/* Primary Gustatory Cortex */}
  <ul className="list-disc ml-8 mt-2 mb-2 space-y-1">
    <li>
      Primary Gustatory Cortex located in:
      <ul className="list-disc ml-6 mt-1 space-y-1">
        <li>Insular cortex</li>
        <li>Frontal operculum</li>
      </ul>
    </li>
    <li>
      Responsible for:
      <ul className="list-disc ml-6 mt-1 space-y-1">
        <li>Conscious perception of taste</li>
        <li>Discrimination of taste quality and intensity</li>
      </ul>
    </li>
  </ul>

  {/* Associative Cortical Areas */}
  <p className="font-bold ml-4 mb-2">
    Associative cortical areas integrate taste with:
  </p>
  <ul className="list-disc ml-8 space-y-1">
    <li>Smell</li>
    <li>Texture</li>
    <li>Temperature</li>
    <li>Emotional and motivational responses</li>
  </ul>
</div>
                  </div>
                  
                  </div>
                   {/*mechanism of taste*/}
                   <h1 className="text-xl font-semibold text-gray-800">2. Mechanism of Taste Transduction</h1>
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/*Image*/}
                  <div className="md:w-1/2">
                  <img 
                  src="/photos/transduction_gustatory.jpeg"
                  alt="Types of papillae across different regions of tongue "
                  className="w-full max-w-md h-auto rounded-lg shadow-md mb-4"/>
                  </div>
                  {/*Right side text*/}
                  <div className="md:w-1/2">
                  <ul className="list-disc disc-outside mt-10 ml-8 space-y-1">
                    <li>Tastants bind to receptors</li>
                    <li>Receptor cell depolarization occurs</li>
                    <li>Neurotransmitters are released</li>
                    <li>Generator potential forms in afferent nerve fibres</li>
                    <li>Action potentials are transmitted to the CNS</li>
                  </ul>
                  </div>
                  </div>
                  </div>
                  {/*integration with other system*/}
                   <h1 className="text-xl font-semibold text-gray-800">3. Integration with Other Systems</h1>
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/*Image*/}
                  <div className="md:w-1/2">
                  <img 
                  src="/photos/integration_gustatory.jpeg"
                  alt=" Integration with Other Systems "
                  className="w-full max-w-md h-auto rounded-lg shadow-md mb-4"/>
                  </div>
                   {/*Right side text*/}
                  <div className="md:w-1/2">
                  <h3 className=" font-semibold text-gray-800 text-center mb-6 mt-8">The gustatory analyzer is closely
                    linked with:
                  </h3>
                  <ul className="list-disc disc-outside ml-6">
                    <li><strong>Olfactory analyzer</strong>(smell)</li>
                    <li><strong>Somatosensory analyzer</strong> (touch and temperature)</li>
                  </ul>
                  <h6 className="mt-4">This integration forms the perception of <strong>flavor </strong>
                  rather than pure taste.</h6>
                  </div>
                  </div>
                  </div>
                  {/*Functional significane*/}
                   <h1 className="text-xl font-semibold text-gray-800">4. Functional Significance</h1>
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/*Image*/}
                  <div className="md:w-1/2">
                  <img 
                  src="/photos/functional_gustatory.jpeg"
                  alt=" Functional Significance"
                  className="w-full max-w-md h-auto rounded-lg shadow-md mb-4"/>
                  </div>
                   {/*Right side text*/}
                  <div className="md:w-1/2">
                   <ul className="list-disc disc-outside mt-10 ml-8 space-y-1">
                    <li>Regulates dood intake and appetite</li>
                    <li>Initiates digestive reflexes</li>
                    <li>Protects against ingestion of harmful substances</li>
                    <li>Influences emotional and behavioral responses to food</li>
                  </ul>
                  </div>
                  </div>
                  </div>
              

          
         
         


          <p className="text-gray-600 italic mt-6">
  <strong>
    Note: Taste buds on the tongue are the foundation of the gustatory analyzer, enabling detection of five basic taste modalities and guiding food selection, appetite, and protection.
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