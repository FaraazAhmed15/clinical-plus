'use client';

import { motion } from 'framer-motion';
import {
  FaBookMedical,
  FaMicroscope,
  FaShieldAlt,
  FaStethoscope,
} from 'react-icons/fa';

export default function SpatialRNATranscriptomics() {
  return (
    <main className="min-h-screen bg-blue-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <FaStethoscope className="text-3xl" />
          </div>

          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Spatial RNA Transcriptomics in Precision Medicine
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Mapping gene expression within intact tissue to uncover spatial biology,
            therapeutic niches, and clinically actionable biomarkers.
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
          <div className="flex gap-5 items-start bg-blue-50 p-6 rounded-xl">
            <FaBookMedical className="text-blue-600 text-3xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Introduction
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Spatial ribonucleic acid (RNA) transcriptomics measures gene expression
                while preserving the precise spatial coordinates of transcripts within
                intact tissue. By retaining tissue architecture, spatial profiling ties
                molecular programs directly to histology, cellular neighborhoods, and
                local microenvironments. Position-dependent signaling and cell–cell
                interactions critically shape differentiation, function, and disease
                progression.
              </p>
              <p className="text-gray-600 mt-3 leading-relaxed">
                Unlike bulk RNA sequencing, which averages signals across many cells,
                or single-cell RNA sequencing, which loses spatial context during
                dissociation, spatial transcriptomics enables the mapping of transcripts
                back to their native locations. This capability reveals regional gene
                programs, niche-level biomarkers, and microenvironment-driven phenotypes
                relevant to therapy design and response prediction.
              </p>
            </div>
          </div>

          {/* Technologies */}
          <div className="flex gap-5 items-start bg-blue-50 p-6 rounded-xl">
            <FaMicroscope className="text-blue-600 text-3xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Technologies Driving the Field
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Spatial transcriptomics is enabled by two complementary technology
                families: imaging-based in situ methods and sequencing-based spatial
                barcoding approaches. Imaging techniques such as MERFISH and
                seqFISH/seqFISH+ rely on cyclic probe hybridization and error-robust
                barcoding to quantify thousands of RNA molecules per cell at
                single-cell or subcellular resolution.
              </p>
              <p className="text-gray-600 mt-3 leading-relaxed">
                Sequencing-based platforms use spatially barcoded slides or beads
                to capture transcripts and map them back to coordinates via next-
                generation sequencing. Advances in resolution, probe chemistry,
                and sample compatibility have expanded applications to FFPE tissue
                and enabled integration with protein and epigenetic profiling.
              </p>
            </div>
          </div>

          {/* Biological Insights */}
          <div className="flex gap-5 items-start bg-blue-50 p-6 rounded-xl">
            <FaMicroscope className="text-blue-600 text-3xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Biological Insights From Spatial Context
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Tumors represent complex ecological systems composed of cancer,
                stromal, and immune cells arranged into spatially distinct niches.
                Spatial transcriptomics reveals that prognosis and therapy response
                depend not only on cell composition but also on neighborhood
                organization and proximity-driven signaling.
              </p>
              <p className="text-gray-600 mt-3 leading-relaxed">
                Gradients of oxygen, nutrients, cytokines, and growth factors arise
                from abnormal vasculature and extracellular matrix structure.
                Mapping these gradients uncovers how microenvironmental pressures
                drive phenotypic heterogeneity, immune exclusion, and resistance
                to therapy.
              </p>
            </div>
          </div>

          {/* Therapeutic Applications */}
          <div className="flex gap-5 items-start bg-blue-50 p-6 rounded-xl">
            <FaShieldAlt className="text-blue-600 text-3xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Therapeutic Applications
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Spatial RNA maps inform the design of messenger RNA (mRNA) and small
                interfering RNA (siRNA) therapies by identifying treatment-ready
                targets within specific cellular niches. Receptor and ligand
                expression patterns guide the selection of targeting moieties for
                nanoparticle delivery systems.
              </p>
              <p className="text-gray-600 mt-3 leading-relaxed">
                Mapping drug penetration and response within tissue further enables
                optimization of delivery strategies, dosing, and rational combination
                therapies that address microenvironment-driven resistance.
              </p>
            </div>
          </div>

          {/* Clinical Translation */}
          <div className="flex gap-5 items-start bg-blue-50 p-6 rounded-xl">
            <FaShieldAlt className="text-blue-600 text-3xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Clinical Translation
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Clinical adoption of spatial transcriptomics is accelerating,
                particularly in oncology and fibrotic diseases. Spatial biomarkers
                refine patient selection, guide companion diagnostics, and enable
                adaptive trial designs that integrate immune context, stromal
                architecture, and molecular signaling.
              </p>
              <p className="text-gray-600 mt-3 leading-relaxed">
                Integration with digital pathology and AI-driven analytics allows
                automated quantification of immune exclusion, angiogenesis, and
                fibrosis, transforming spatial biology into actionable clinical
                decision-making tools.
              </p>
            </div>
          </div>

          {/* Conclusion */}
          <div className="flex gap-5 items-start bg-blue-50 p-6 rounded-xl">
            <FaBookMedical className="text-blue-600 text-3xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Conclusions
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Spatial RNA medicine shifts disease classification from organ-based
                labels to spatially defined ecosystems of cells, signals, and matrix.
                By mapping transcripts to neighborhoods and gradients, spatial
                profiling generates predictive biomarkers that guide therapy
                selection and delivery.
              </p>
              <p className="text-gray-600 mt-3 leading-relaxed">
                Continued integration of single-cell and spatial omics promises a
                unified atlas of tissue biology that links discovery, drug design,
                and clinical response into a continuous precision medicine pipeline.
              </p>
            </div>
          </div>

        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 mt-12"
        >
          Built responsibly to promote learning, awareness, and ethical use of biomedical knowledge.
        </motion.p>

      </div>
    </main>
  );
}