import { ResearchPillar, ResearchProject, Publication, SkillCategory, ExperienceItem, EducationItem, ReferenceItem } from '../types';

export const personalInfo = {
  name: 'Kian Pishvaie',
  initials: 'KP',
  title: 'Applied Chemistry Graduate',
  institution: 'University of Tehran',
  email: 'Kiyan.p82@gmail.com',
  location: 'Tehran, Iran',
  scholarUrl: 'https://scholar.google.com/citations?user=kian-pishvaie',
  linkedinUrl: 'https://www.linkedin.com/in/kian-pishvaie/',
  tagline: 'Chemistry at the intersection of materials, energy, and computation.',
  summary: 'Exploring electrochemical materials, electrocatalysis, energy storage, and data-driven approaches to chemical research.',
  statement: 'My interests lie at the intersection of materials chemistry, electrochemistry, catalysis, and computational modeling. I am particularly interested in understanding how material design and reaction conditions can be combined with quantitative modeling to develop more efficient chemical and energy-related systems.',
};

export const researchPillars: ResearchPillar[] = [
  {
    id: 'electrochemistry',
    number: '01',
    title: 'Electrochemistry',
    techniques: ['Cyclic Voltammetry (CV)', 'Galvanostatic Charge–Discharge (GCD)', 'Electrochemical Impedance Spectroscopy (EIS)', 'Linear Sweep Voltammetry (LSV)'],
    description: 'Quantitative investigation of redox interfaces, charge transfer kinetics, interfacial capacitance, and electrochemical reaction mechanisms using multi-frequency impedance and sweep voltammetry.',
    domain: 'Interfacial Charge Kinetics'
  },
  {
    id: 'energy-materials',
    number: '02',
    title: 'Energy Materials',
    techniques: ['Supercapacitors', 'Perovskite Oxides', 'Halide Perovskites', 'Spinel Ferrites', 'Functional Materials'],
    description: 'Synthesizing and characterizing novel solid-state architectures, pseudo-capacitive matrices, and crystal structures engineered for durability and high-capacity electrochemical energy storage.',
    domain: 'Advanced Solid-State Architectures'
  },
  {
    id: 'electrocatalysis',
    number: '03',
    title: 'Electrocatalysis & Catalysis',
    techniques: ['Electrocatalytic Reactions', 'Heterogeneous Catalysis', 'Catalyst Leaching Stability', 'Electrode Reusability'],
    description: 'Engineering immobilized catalytic electrode platforms to drive challenging organic transformations, evaluating catalytic lifetime, active-site preservation, and reusability over continuous cycles.',
    domain: 'Immobilized Heterogeneous Interfaces'
  },
  {
    id: 'computational-chemistry',
    number: '04',
    title: 'Computational Chemistry',
    techniques: ['Design of Experiments (DOE)', 'Response Surface Methodology (RSM)', 'Artificial Neural Networks (ANN)', 'Python', 'Empirical Data Modeling'],
    description: 'Integrating statistical experimental design with machine learning algorithms to model multi-variable response spaces, predict catalytic yield/selectivity, and guide experimental parameter discovery.',
    domain: 'Statistical & Predictive Modeling'
  }
];

export const featuredProjects: ResearchProject[] = [
  {
    id: 'biodiesel-electrocatalysis',
    number: '01',
    title: 'Electrocatalytic Esterification of Oleic Acid',
    subtitle: 'CoZnFe₂O₄-coated graphite electrodes for electrolysis-assisted biodiesel synthesis',
    affiliation: 'University of Tehran, School of Chemistry',
    supervisor: 'Dr. Majid Saidi',
    period: 'Aug 2026 — Present',
    status: 'Ongoing',
    summary: 'Designing and fabricating CoZnFe₂O₄-coated graphite electrodes that combine electrolysis-assisted biodiesel synthesis with an immobilized catalytic electrode platform, replacing traditional dissolved homogeneous acid/base catalysts.',
    workflow: [
      { step: 1, label: 'Material Synthesis', detail: 'Precipitation/combustion synthesis with metal nitrate precursors & L-arginine fuel, calcined at 600°C.' },
      { step: 2, label: 'Electrode Fabrication', detail: 'Immobilization on graphite substrates; evaluation of bare vs. sulfated electrode variants.' },
      { step: 3, label: 'Electrolysis Setup', detail: 'Electrolysis-assisted esterification benchmarked against homogeneous KOH/H₂SO₄ controls.' },
      { step: 4, label: 'RSM Optimization', detail: 'CCD optimization of voltage, reaction time, methanol:oil ratio, and NaCl concentration.' },
      { step: 5, label: 'Stability Assessment', detail: 'Monitoring iron/cobalt/zinc leaching profiles to verify robust interfacial adherence.' },
      { step: 6, label: 'Reusability Cycles', detail: 'Consecutive cycling runs to quantify catalytic retention without performance degradation.' },
    ],
    highlights: [
      'CoZnFe₂O₄ spinel ferrite',
      'Graphite electrode immobilization',
      'Precipitation/combustion synthesis (600°C calcination)',
      'RSM / Central Composite Design (Design-Expert)',
      'Operational variables: Voltage, Time, Methanol:Oil ratio, NaCl conc.',
      'Leaching stability & consecutive reusability assessment'
    ],
    scientificContext: {
      systemType: 'Electrolysis-Assisted Heterogeneous Esterification',
      keyMethods: ['Precipitation/Combustion', 'RSM/CCD', 'Immobilized Substrate Coating', 'Leaching ICP/Stability'],
      objectives: 'Replace hazardous homogeneous liquid catalysts with a reusable solid magnetic spinel ferrite electrode under low-voltage electrochemical driving force.',
      variables: ['Applied Voltage (V)', 'Reaction Time (min)', 'Methanol:Oil Molar Ratio', 'NaCl Electrolyte Concentration (M)']
    }
  },
  {
    id: 'data-driven-catalysis',
    number: '02',
    title: 'Data-Driven Catalysis',
    subtitle: 'DOE and ANN modeling for 4-Methylanisole upgrading',
    affiliation: 'University of Tehran, School of Chemistry',
    period: 'Mar 2026 — Present',
    status: 'Ongoing',
    summary: 'Developing Design of Experiments (DOE) strategies and Artificial Neural Network (ANN) architectures to model multi-variable catalytic upgrading of 4-Methylanisole, predicting conversion, yield, and selectivity from empirical literature datasets.',
    workflow: [
      { step: 1, label: 'Experimental Data Extraction', detail: 'Systematic compilation of catalytic reaction parameters from published literature.' },
      { step: 2, label: 'Design of Experiments', detail: 'Response Surface Methodology (RSM) framework to structure factor space & interactions.' },
      { step: 3, label: 'Statistical Analysis', detail: 'ANOVA screening, factor significance ranking, and variance decomposition.' },
      { step: 4, label: 'ANN Architecture', detail: 'Feedforward neural network design with Python (loss minimization & cross-validation).' },
      { step: 5, label: 'Performance Prediction', detail: 'Multi-target mapping of catalyst yield, substrate conversion, and product selectivity.' },
      { step: 6, label: 'Catalytic Optimization', detail: 'Identifying optimal parameter regimes to maximize targeted upgrade pathways.' },
    ],
    highlights: [
      'Design of Experiments (DOE)',
      'Response Surface Methodology (RSM)',
      'Artificial Neural Networks (ANN)',
      'Python data pipeline',
      'Catalytic performance & selectivity prediction',
      'Yield factor identification & interaction mapping'
    ],
    scientificContext: {
      systemType: 'Statistical & Neural Network Reaction Engineering',
      keyMethods: ['ANOVA Decomposition', 'Multi-Layer Perceptron', 'RSM Response Surface Fitting', 'Python Scientific Stack'],
      objectives: 'Uncover complex non-linear parameter interactions governing 4-Methylanisole hydrodeoxygenation and upgrading without requiring hundreds of costly trial runs.',
      variables: ['Temperature (°C)', 'Pressure (bar)', 'Catalyst Loading (wt%)', 'Reaction Duration (h)', 'Solvent Matrix']
    }
  }
];

export const publications: Publication[] = [
  {
    id: 'perovskite-oxides-2025',
    title: 'Perovskite oxides as promising candidates for advanced supercapacitor electrode materials: A review',
    journal: 'Journal of Power Sources',
    volumeInfo: 'Volume 640, 236760',
    year: 2025,
    authors: ['S. Soleimani', 'K. Pishvaie', 'M. Saidi'],
    doiLink: 'https://doi.org/10.1016/j.jpowsour.2025.236760',
    doiLabel: '10.1016/j.jpowsour.2025.236760',
    type: 'Review Article',
    summary: 'Comprehensive critical review detailing crystallographic engineering, oxygen vacancy modulation, electronic conduction enhancements, and pseudo-capacitive redox mechanisms in perovskite oxides for next-generation electrochemical energy storage.',
    bibtex: `@article{soleimani2025perovskite,
  title={Perovskite oxides as promising candidates for advanced supercapacitor electrode materials: A review},
  author={Soleimani, S. and Pishvaie, K. and Saidi, M.},
  journal={Journal of Power Sources},
  volume={640},
  pages={236760},
  year={2025},
  publisher={Elsevier},
  doi={10.1016/j.jpowsour.2025.236760}
}`
  },
  {
    id: 'halide-perovskites-2026',
    title: 'Halide perovskites as novel materials for advanced supercapacitor electrode: A review',
    journal: 'Journal of Energy Storage',
    volumeInfo: 'Volume 156, 121588',
    year: 2026,
    authors: ['K. Pishvaie', 'S. Soleimani', 'M. Saidi'],
    doiLink: 'https://doi.org/10.1016/j.est.2026.121588',
    doiLabel: '10.1016/j.est.2026.121588',
    type: 'Review Article',
    summary: 'State-of-the-art review analyzing the electrochemical stability, ion migration dynamics, lead-free composition variants, and electrode interfacial behavior of halide perovskites when utilized in advanced supercapacitive devices.',
    bibtex: `@article{pishvaie2026halide,
  title={Halide perovskites as novel materials for advanced supercapacitor electrode: A review},
  author={Pishvaie, K. and Soleimani, S. and Saidi, M.},
  journal={Journal of Energy Storage},
  volume={156},
  pages={121588},
  year={2026},
  publisher={Elsevier},
  doi={10.1016/j.est.2026.121588}
}`
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Electrochemical Characterization',
    skills: [
      { name: 'Cyclic Voltammetry (CV)', fullName: 'Reversible/irreversible redox analysis & capacitance quantification' },
      { name: 'Galvanostatic Charge–Discharge (GCD)', fullName: 'Specific capacitance, energy/power density, and cycle retention' },
      { name: 'Electrochemical Impedance Spectroscopy (EIS)', fullName: 'Nyquist/Bode fitting, equivalent circuits, charge transfer resistance' },
      { name: 'Linear Sweep Voltammetry (LSV)', fullName: 'Tafel slope extraction, overpotential quantification, onset potential' }
    ]
  },
  {
    category: 'Structural & Spectroscopic Characterization',
    skills: [
      { name: 'X-Ray Diffraction (XRD)', fullName: 'Phase identification, crystallite size calculation (Scherrer), lattice parameters' },
      { name: 'Fourier-Transform Infrared (FT-IR)', fullName: 'Functional group identification and chemical bond vibrational modes' },
      { name: 'Scanning Electron Microscopy (SEM)', fullName: 'Surface topography, particle morphology, and grain microstructure' }
    ]
  },
  {
    category: 'Computational & Statistical Modeling',
    skills: [
      { name: 'Design of Experiments (DOE)', fullName: 'Factorial, fractional factorial, and response surface design matrices' },
      { name: 'Response Surface Methodology (RSM)', fullName: 'Central Composite Design (CCD), Box-Behnken, polynomial optimization' },
      { name: 'Artificial Neural Networks (ANN)', fullName: 'Multi-layer perceptron modeling of non-linear chemical phenomena' },
      { name: 'Python', fullName: 'Data analysis, NumPy, Pandas, Scikit-learn, scientific plotting' },
      { name: 'Bash', fullName: 'Scripting, workflow automation, and computational toolchain management' }
    ]
  },
  {
    category: 'Research Software',
    skills: [
      { name: 'Design-Expert', fullName: 'DOE statistical design, ANOVA analysis, and 3D response surface graphing' },
      { name: 'Minitab', fullName: 'Regression modeling, hypothesis testing, and statistical process analysis' },
      { name: 'ChemDraw', fullName: 'Chemical structure drawing, reaction scheme generation, and stereochemistry' },
      { name: 'Microsoft Office', fullName: 'Technical documentation, scientific data reporting, and presentation' }
    ]
  }
];

export const educationHistory: EducationItem[] = [
  {
    degree: 'Bachelor of Science in Applied Chemistry',
    institution: 'University of Tehran',
    period: 'Sep 2021 — Feb 2026',
    gpa: '14.89 / 20',
    highlight: 'Ranked among top 3% of applicants in the Iranian University Entrance Exam'
  }
];

export const experienceHistory: ExperienceItem[] = [
  {
    id: 'ta-chem',
    role: 'Teaching Assistant — General Chemistry',
    organization: 'University of Tehran, Department of Physics',
    location: 'Tehran, Iran',
    period: 'Oct 2024 — Jan 2025',
    type: 'Academic',
    badge: 'Under Dr. Hasan Salehi',
    bullets: [
      'Prepared and graded regular academic problem sets and examinations for undergraduate students.',
      'Conducted evaluation quizzes and facilitated after-hour problem-solving recitations to reinforce foundational concepts.'
    ]
  },
  {
    id: 'sayal-sanjesh',
    role: 'Software Developer',
    organization: 'Sayal Sanjesh',
    location: 'Tehran, Iran',
    period: 'Jul 2023 — Present',
    type: 'Industry',
    badge: 'Computational Experience',
    bullets: [
      'Architected and implemented a high-reliability desktop application in Python utilizing PySide6 (Qt).',
      'Developed data visualization and device communication modules for industrial Woltman and ultrasonic smart water meters.'
    ]
  },
  {
    id: 'iran-ensheab',
    role: 'Summer Intern',
    organization: 'Iran Ensheab',
    location: 'Tehran, Iran',
    period: 'Jul 2022 — Oct 2022',
    type: 'Industry',
    badge: 'Laboratory Testing',
    bullets: [
      'Supported water-quality analytical laboratory testing and rigorous quality-control verification protocols for flow measurement devices.'
    ]
  }
];

export const languages = [
  { name: 'Persian', level: 'Native', note: 'Mother tongue' },
  { name: 'English', level: 'EF SET C2', note: 'Full professional & academic proficiency' },
  { name: 'French', level: 'A1', note: 'Elementary proficiency' }
];

export const academicReferences: ReferenceItem[] = [
  {
    name: 'Dr. Majid Saidi',
    title: 'Associate Professor',
    affiliation: 'School of Chemistry, University of Tehran',
    email: 'majid.saidi@ut.ac.ir',
    scholar: 'https://scholar.google.com/citations?user=majid-saidi'
  },
  {
    name: 'Dr. Hasan Salehi',
    title: 'Assistant Professor',
    affiliation: 'School of Chemistry, University of Tehran',
    email: 'salehi.h@ut.ac.ir',
    scholar: 'https://scholar.google.com/citations?user=hasan-salehi'
  }
];
