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
  FaEye
} from 'react-icons/fa';

export default function Eye() {
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
            Eye<br />&<br />Visual-Analyzer
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            <strong>
              "Protecting Sight.Empowering Lives", "Clear Vision,Brighter-Tomorrow"<br /> & <br />
              "Enhancing lives through better vision"
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
              <h3 className="text-xl font-semibold text-gray-800">Definition of Eye</h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                The <strong>eye</strong> is the specialized sense organ responsible
                for <strong>vision.</strong> It converts light energy into electrical
                impulses, which are interpreted by the <strong>brain as images.</strong>
                Vision is essential for perception, coordination, learning and daily activities.
              </p>
            </div>
          </div>

          {/* Anatomy */}
          <h1 className="text-xl font-semibold text-gray-800">2. Anatomy of an Eye</h1>
          <div className="flex gap-5 items-center bg-blue-50 p-6 rounded-xl">
            <FaEye className="text-blue-600 w-12 h-12 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Lets Understand location and general Anatomy of an Eye
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                The <strong>eyes</strong> are located in the <strong>orbits</strong> of the skull.
                Each eye is a <strong>spherical structure</strong> approximately 2.5 cm in diameter.<br />
                Protected by:<br />
                • Eyelids<br />
                • Eyelashes<br />
                • Conjunctiva<br />
                • Lacrimal Apparatus
              </p>
            </div>
          </div>

          {/* Layers of Eye */}
          <h1 className="text-xl font-semibold text-gray-800 mb-4">2. Layers of Eye</h1>
          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-800 text-center mb-6">
              The eye has three concentric layers
            </h3>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Left column: Image + text below */}
              <div className="md:w-1/2">
                <img
                  src="/photos/eyes_layer.jpeg"
                  alt="Layers of the eyeball"
                  className="w-full max-w-md h-auto rounded-lg shadow-md mb-4"
                />
                <p className="text-gray-600 leading-relaxed">
                  <strong>A. Outer Fibrous Layer</strong><br />
                  <strong>Sclera:</strong> White, opaque outer coat that maintains the shape
                  of the eye and provides attachment to extraocular muscles.<br />
                  <strong>Cornea:</strong> Transparent anterior part that allows light to
                  enter and acts as the major refractive surface of the eye.
                </p>
              </div>

              {/* Right column: Detailed text */}
              <div className="md:w-1/2">
                <p className="text-gray-600 leading-relaxed">
                  <strong>B. Middle Vascular Layer (Uvea)</strong><br />
                  <strong>Choroid:</strong> Highly vascular layer that supplies nutrients to
                  the retina and prevents internal reflection of light.<br />
                  <strong>Ciliary Body:</strong> Produces aqueous humor and controls lens
                  shape during accommodation.<br />
                  <strong>Iris:</strong> Colored part of the eye that regulates pupil size
                  and controls the amount of light entering the eye.<br /><br />
                  <strong>C. Inner Nervous Layer</strong><br />
                  <strong>Retina:</strong> Sensory layer containing photoreceptors that
                  convert light into nerve impulses.<br />
                  • Macula – sharp central vision<br />
                  • Fovea – highest visual acuity<br />
                  • Optic disc – blind spot
                </p>
              </div>
            </div>
          </div>

          {/* Visual Analyzer Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-blue-100 text-blue-800 rounded-xl shadow-md p-10 mt-16 text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Visual Analyzer</h1>
            <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-6">
              The <strong>visual analyzer</strong> is the pathway that transforms light signals into meaningful images.
              It connects the <strong>retina</strong> to the <strong>brain</strong> through the optic nerve and higher centers,
              enabling perception, recognition, and coordination of visual stimuli.
            </p>
            <div className="flex justify-center">
              <FaBrain className="text-blue-600 w-14 h-14" />
            </div>
          </motion.div>

          {/* Placeholder for extended summary or next topic */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-10 space-y-10 mt-16"
          >
            {/* General Characteristics */}
            <h1 className="text-xl font-semibold text-gray-800">1. Characteristics of Visual Analyzer</h1>
            <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
            <div>
                <h3 className="rext-xl font-semibold text-gray-800">Lets Understand the general characteristics of Visual Analyzer<br/><br/></h3>
                <p className="text-gray-700 leading-relaxed">The visual analyzer is the most important sensory system in humans, providing up to 80% of information
                          about the surrounding environment. It allows perception of light, darkness, shape, size, color, distance,
                          movement, and spatial orientation. The adequate stimulus is light, particularly divergent rays with
                          wavelengths from 300–950 nm, with maximal sensitivity in the visible spectrum (400–700 nm). Light energy
                           is converted into electrical signals, processed, analyzed, and interpreted by the brain to form visual perception.</p>
                </div>
                </div>
                {/*Departments of VA*/}
                <h1 className="text-xl font-semibold text-gray-800">2. Depatments of Visual Analyzer</h1>
                 <div className="flex gap-5 items-centre bg-blue-50 p-6 rounded-xl">
            <div>
                <h3 className="rext-xl font-semibold text-gray-800">Various Departments of Visual Analyzer.<br/><br/></h3>
                <p className="text-gray-700 leading-relaxed"><strong>Receptor Department:<br/></strong>
                Located in the retina, composed of rods and cones. Ensures perception of light,
                primary analysis, and encoding of visual information.<br/><br/>
                <strong>Conductive Department:</strong><br/>
                Includes bipolar neurons, ganglion neurons, optic nerve, optic chiasma,optic tract,
                 and lateral geniculate body. Functions: transmission of impulses, selection of useful information,
                  and formation of binocular/stereoscopic vision.<br /><br />
                  <strong>Cortical Department:</strong><br/>
                  Located in the occipital cortex(i.e.Visual area 17). Projection fields analyze contours,
                  size, shape and brightness. Associative fields recognizze objects, estimate distance and controlseye-movements. </p>              
                </div>
            </div>

              {/*Photoreceptors*/}
              <h1 className="text-xl font-semibold text-gray-800">3. Photo-Receptors</h1>
              <div className="flex justify-center bg-blue-50 p-6 rounded-xl">
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 text-center mb-6">Photoreceptors: Rods & Cones<br/><br/></h3>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        {/*Image*/}
                        <div className="md:w-1/2">
                        <img 
                        src="/photos/rods_cones.jpeg"
                        alt="Photoreceptors: Rods and Cones"
                        className="w-full max-w-md h-auto rounded-lg shadow-md mb-4"/>
                        </div>
                        {/* Text right */}
                        <div className="md:w-1/2">
                        <p className="text-gray-700 leading-relaxed">
                            <strong>Rods:</strong> ~120 million per eye, located mainly in the peripheral retina.
                             Highly sensitive to light,provide night (scotopic), peripheral, colorless, low-acuity vision.<br /><br />
                             <strong>Cones:</strong> ~7 million per eye, concentrated in the macula and fovea. Provide daylight (photopic),
                              color, and high-acuity vision.<br /><br />
                              The functional difference between rods and cones forms the basis of the dual-function theory of the retina.</p>
                        </div>
                    </div>
                    {/*text below image */}
                    <p className="text-gray-700 leading-relaxed mt-4">
                        Rods are specialized for dim light and motion detection, while cones are specialized for color and fine detail.
                        Together, they ensure vision across different lighting conditions.
                    </p>
                </div>
              </div>
              {/* Retino-Motor Reactions */}
              <h1 className="text-xl font-semibold text-gray-800">4. Retino-Motor Reactions</h1>
              <div className="flex justify-center bg-blue-50 p-6 rounded-xl">
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 text-center mb-6">Let's understand the Retino-Motor Reactions<br/><br/></h3>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        {/*Image*/}
                        <div className="md:w-1/2">
                        <img 
                        src="/photos/retino_motor.jpeg"
                        alt="Retino-Motor Reactions by visualizing using image"
                        className="w-full max-w-md h-auto rounded-lg shadow-md mb-4"/>
                        </div>
                        {/* Text right */}
                        <div className="md:w-1/2">
                        <p className="text-gray-700 leading-relaxed">
                           Retino-motor reactions regulate illumination of photoreceptors. In bright light, pigment cells extend processes,
                           rods retract, and cones move toward light — protecting photoreceptors from excessive light and damage.</p>
                        </div>
                    </div>
                </div>
              </div>
               {/* Photochemical Reactions */}
               <h1 className="text-xl font-semibold text-gray-800">5. Photo-chemical Reactions</h1>
               <div className="flex justify-center bg-blue-50 p-6 rounded-xl">
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 text-center mb-6">Photochemical Reactions in Photoreceptors<br/><br/></h3>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        {/*Image*/}
                            <div className="md:w-1/2">
                           <img
                           src="/photos/photochemical_reactions.jpeg"
                           alt="Photochemical reactions in photoreceptors"
                           className="w-full max-w-md h-auto rounded-lg shadow-md mb-4"  />
                           </div>
                           {/* Text */}
                           <div className="md:w-1/2">
                           <p className="text-gray-700 leading-relaxed">Photochemical reactions occur mainly in the outer segments of photoreceptors.
                             Rhodopsin (rods) breaks down under light,undergoing sequential transformations.<br/>
                             <strong>Final products: opsin and retinal.</strong><br/>
                             In darkness, rhodopsin is resynthesized enzymatically.<br/>
                             <strong>Vitamin A is essential for rhodopsin regeneration, and deficiency leads to night blindness (hemeralopia).</strong></p>
                             </div>
                        </div>
                    </div>
                </div>
                 {/* Electrical Reactions */}
                 <h1 className="text-xl font-semibold text-gray-800">6. Electrical Reactions</h1>
               <div className="flex justify-center bg-blue-50 p-6 rounded-xl">
                <div>
                    
                    <h3 className="text-xl font-semibold text-gray-800 text-center mb-6">Electrical Reactions in Photoreceptors<br/><br/></h3>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        {/*Image*/}
                        <div className="md:w-1/2">
                           <img
                           src="/photos/electrical_reactions.jpeg"
                           alt="Chemical reactions in photoreceptors"
                           className="w-full max-w-md h-auto rounded-lg shadow-md mb-4"  />
                           </div>
                            {/* Text */}
                           <div className="md:w-1/2">
                           <p className="text-gray-700 leading-relaxed">
                             In darkness, photoreceptor membranes are depolarized due to high sodium permeability.
                              Light exposure decreases sodium permeability, causing hyperpolarization and producing receptor potentials.
                               Signals are transmitted from <strong>photoreceptors → bipolar cells → ganglion cells,</strong>
                               with action potentials generated in the optic nerve. </p>
                           </div>
                        </div>
                    </div>
                </div>
                {/* ERG */}
                <h1 className="text-xl font-semibold text-gray-800">7. Electro-retinogram</h1>
               <div className="flex justify-center bg-blue-50 p-6 rounded-xl">
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 text-center mb-6">Lets Understand The concept of Electroretinogram (ERG) <br/><br/></h3>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        {/*Image*/}
                        <div className="md:w-1/2">
                           <img
                           src="/photos/electroretinogram.jpeg"
                           alt="Chemical reactions in photoreceptors"
                           className="w-full max-w-md h-auto rounded-lg shadow-md mb-4"  />
                           </div>
                           {/* Text */}
                           <div className="md:w-1/2">
                           <p className="text-gray-700 leading-relaxed">
                            ERG records the summed electrical activity of retinal cells in response to light. 
                            It assesses photoreceptor and inner retinal function and is an important diagnostic 
                            tool for retinal diseases.</p>
                        </div>
                    </div>
                </div>
                </div>
          </motion.div>
           <p className="text-gray-600 italic mt-6">
  <strong>Note: Photoreceptors are the foundation of the eye and visual analyzer, enabling light perception and image formation.</strong>
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