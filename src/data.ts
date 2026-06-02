import { Experience, EducationItem, SkillCategory, Publication } from './types';
import avatarImg from './components/img/avatar.jpg';
import fotoImg from './components/img/FOTO.jpg';
import crlLogo from './components/img/CRL.png';
import uobLogo from './components/img/UoB.png';
import nanotheaLogo from './components/img/Nanothea3.png';
import ichoLogo from './components/img/ICHO.png';
import pwLogo from './components/img/WCh PW.png';
import essexLogo from './components/img/Essex.png';

export const CHEMIST_PROFILE = {
  name: "Dr Grzegorz Pikus",
  title: "Senior Scientist",
  specialization: "Organic synthesis and medicinal chemistry",
  avatarUrl: fotoImg || avatarImg,
  tagline: "R&D scientist in organic and medicinal chemistry",
  about: "Senior Synthetic Organic Chemist with a PhD and over ten years of experience delivering high-impact solutions across industrial and academic research. Co-inventor on multiple patents and author of high-impact publications, specializing in the synthesis of complex small molecules, bioconjugation, and medicinal chemistry projects. A skilled researcher with a proven ability to translate scientific data into synthetic strategies across diverse project levels. Expert at optimising chemical processes and applying novel solutions (like photochemistry) to elevate project efficiency, innovation, and the overall impact on scientific research. Highly adaptable and organised, with a track record of meeting demanding deadlines while maintaining the highest scientific standards.",
  email: "grzegorz.pikus@gmail.com",
  linkedin: "https://www.linkedin.com/in/grzegorz-pikus/",
  github: "https://github.com/grzegorzpikus",
  orcid: "https://orcid.org/0000-0003-3175-9362",
  location: "London, UK",
};

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    role: "Senior Scientist",
    company: "Charles River Laboratories",
    location: "Harlow, UK",
    period: "March 2022 - January 2026",
    logoUrl: crlLogo,
    hasWetLab: true,
    wetLabClassificationTitle: "Research and Development of drug candidates across multiple discovery projects.",
    wetLabClassificationDesc: "Medicinal Chemist in Small Drug Discovery Department",
    description: [
      "Successfully delivered an extensive array of synthetic targets for medicinal chemistry projects, interpreting SAR and ADME data.",
      "Skilled in synthesis on mg to kg scale, delivering materials with high purity for biological studies.",
      "Applied advanced synthetic skills, including specialised knowledge of synthetic chemistry and photochemistry, to significantly shorten synthetic routes and overcome challenges in small molecule synthesis.",
      "Actively contributed as a member of the Synthetic Innovation Team, expanding the department's internal toolkit by implementing modern solutions such as photocatalysis and mentoring others to use this innovation.",
      "Demonstrated expert-level proficiency in purification (HPLC, chromatography, crystallisation), and characterization (LCMS, NMR, HRMS) of diverse chemical entities.",
      "Contributions to lead optimisation and medicinal chemistry projects validated by multiple published and ongoing patents.",
      "An active member of the working community, contributing to a variety of activities and initiatives, including the Synthetic Wiki, Continuous Improvement, and Biocatalysis Teams.",
      "Mentoring placement students and junior colleagues and conducting training sessions in organic chemistry, synthesis and reaction mechanisms."
    ],
    instrumentation: [
      "Bruker Avance III 400 and 300 MHz",
      "Waters LCMS systems",
      "Kessil lamps and Lumidox LED arrays in tandem with active chilling",
      "Teledyne CombiFlash chromatography system"
    ],
    methodologies: [
      "Metal-catalyzed cross-couplings",
      "Photoredox catalysis in organic synthesis",
      "Analysis of SAR and ADME data for drug candidate design",
      "Performing air or/and water sensitive experiments"
    ],
    methodologiesTitle: "Synthetic Methodologies and Research activities"
  },
  {
    id: "exp-2",
    role: "Postdoctoral Research Associate",
    company: "University of Bristol, School of Chemistry",
    location: "Bristol, UK",
    period: "June 2019 - June 2021",
    logoUrl: uobLogo,
    hasWetLab: true,
    wetLabClassificationDesc: "Academic Organic Synthesis and Organometallic Catalysis Labs",
    description: [
      "Collaborated with Prof. Tim Gallagher on a high-impact project focused on the mechanism of action and key interactions of Varenicline derivatives with nicotinic receptors.",
      "Designed and successfully synthesized a series of nicotinic ligands to explore the structure-activity relationship, which underwent extensive testing.",
      "Developed a high-yielding borylation via Pd-catalysed C–H activation of biaryls, significantly improving synthetic access to key motor precursors for a molecular machine project.",
      "Independently designed and realised an out-of-equilibrium Pd-catalysed boronic ester system — a critical proof-of-concept milestone for autonomous unidirectional motion."
    ],
    subsections: [
      {
        title: "Gallagher’s group",
        bullets: [
          "Collaborated with Prof. Tim Gallagher on a high-impact project focusing on the mechanism of action and key interactions of Varenicline derivatives with nicotinic receptors.",
          "Designed and successfully synthesized a series of nicotinic ligands to study their structure-activity relationship, that underwent extensive testing.",
          "Performed multi-step synthesis and demonstrated a strong ability to solve problems and overcome synthetic challenges.",
          "Exploration of Ir-catalysed borylation in cytisine modifications"
        ]
      },
      {
        title: "Collins’ group",
        bullets: [
          "Participated in a challenging and ambitious project of autonomous unidirectional molecular motors powered by chemical fuel in Dr Beatrice Collins' group.",
          "Developed a high-yielding borylation via Pd-catalysed C–H activation of 2-arylpyridines, significantly improving synthetic access to key motor precursors for a molecular machine project.",
          "Designed and obtained an out-of-equilibrium system of formation and decomposition of boronic esters via Pd-catalysed C-H activation and borylation — a critical proof-of-concept for autonomous unidirectional motion.",
          "Demonstrated the ability to work independently and advance projects by introducing innovative ideas and solutions."
        ]
      }
    ],
    instrumentation: [
      "Bruker and Varian 400 MHz instruments",
      "TLC-MS",
      "Anhydrous Engineering Solvent Purification System (SPS)"
    ],
    methodologies: [
      "Metal catalysis (Pd, Ir, Rh)",
      "Borylation reactions via C-H activation",
      "Mechanistic studies",
      "Multistep synthesis and troubleshooting"
    ]
  },
  {
    id: "exp-3",
    role: "Organic Chemist",
    company: "NanoThea Radiopharmaceuticals S.A.",
    location: "Warsaw, Poland",
    period: "January 2017 – May 2019",
    logoUrl: nanotheaLogo,
    hasWetLab: true,
    wetLabClassificationDesc: "Organic Synthesis and Radiopharmaceutical Formulations Lab",
    description: [
      "Delivered synthetic polysaccharide-based nanoparticles modified with DOTA chelators and PSMA-inhibitors via bioconjugation techniques, to develop a targeted radiopharmaceutical platform for early diagnosis of cancer.",
      "Designed and delivered a series of low-molecular-weight PSMA-inhibitors validated in close collaboration with a multidisciplinary team.",
      "Synthesis of novel tirapazamine-derivatives as radiosensitizers",
      "Collaboration in a multidisciplinary team to evaluate synthesized materials in vitro.",
      "Managed an organic chemistry laboratory, overseeing equipment procurement and chemical supply to sustain high-throughput research operations."
    ],
    instrumentation: [
      "Malvern for Zeta potential measurement",
      "NanoSight",
      "UV-Visible Spectrophotometry",
    ],
    methodologies: [
      "Aqueous dialysis of high-molecular-weight materials",
      "Bioconjugation",
      "Methodological studies on the oxidation of tirapazamine derivatives"
    ]
  }
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: "edu-1",
    degree: "PhD in Organic Chemistry",
    institution: "Institute of Organic Chemistry, Polish Academy of Sciences, Warsaw",
    year: "2016",
    logoUrl: ichoLogo,
    thesisTitle: "Static combinatorial chemistry as a method for synthesis of macrocyclic receptors of cations and anions.",
    thesisUrl: "https://rcin.org.pl/Content/58895/WA336_78707_O-B384-16_Pikus.pdf",
    supervisor: "Prof. Janusz Jurczak",
    details: "Focus area: Synthesis of static combinatorial libraries and HPLC analysis of their contents under atmospheric and high pressure (10 kbar); synthesis of chiral BINOL-based macrocyclic receptors for anions, and the study of chiral recognition of selected amino acids and other carboxylates."
  },
  {
    id: "edu-2",
    degree: "MSc in Chemical Technology",
    institution: "Warsaw University of Technology, Faculty of Chemical Technology, Warsaw",
    year: "2011",
    logoUrl: pwLogo,
    thesisTitle: "Development of a method for the synthesis of 3,5-bis(2-cyanoisopropyl)toluene",
    supervisor: "Prof. Michał Fedoryński",
    details: "Focus area: Application of the PTC technique in tetraalkylation using methyl chloride gas."
  },
  {
    id: "edu-3",
    degree: "Postgraduate Certificate in Computer Science",
    institution: "University of Essex, online study",
    year: "2023",
    logoUrl: essexLogo,
    details: "The certificate granted by completing modules: Launching into Computer Science, Object Oriented Programming and Secure Software Development"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Synthesis Technology & Reaction Design",
    skills: [
      { name: "Organometallic Synthesis", level: 80 },
      { name: "Metal catalysis", level: 80 },
      { name: "Reaction optimisation", level: 80 },
      { name: "Air/water-Sensitive reactions", level: 90 },
      { name: "High-Throughput Synthesis", level: 40 },
      { name: "Macrocyclisation", level: 90 },
      { name: "Photocatalysis", level: 70 }
    ]
  },
  {
    title: "Analytical & Structural Characterization",
    skills: [
      { name: "1D/2D NMR Spectroscopy (Varian, Bruker)", level: 80 },
      { name: "LC-MS experimentation and troubleshooting", level: 80 },
      { name: "Preparative, Analytical and chiral HPLC", level: 80 },
      { name: "FT-IR & UV-Vis Spectrophotometry", level: 60 },
      { name: "X-ray Crystallography Structure Solving", level: 40 }
    ]
  },
  {
    title: "Computational Chemistry & Software Tools",
    skills: [
      { name: "Chemdraw Ultra & Professional Suites", level: 100 },
      { name: "Schrödinger Suites (Maestro & Docking)", level: 50 },
      { name: "MestReNova NMR Data Processing", level: 80 },
      { name: "MS Office (documents, presentations, posters)", level: 80 },
      { name: "Python for Cheminformatics (RDKit, Pandas)", level: 30 }
    ]
  }
];

export const SOFT_SKILLS = [
  {
    name: "Cross-functional Collaboration",
    percentage: 98,
    description: "Collaboration across disciplines in multiple drug discovery and medicinal technology projects."
  },
  {
    name: "Lab Safety Leadership & Compliance",
    percentage: 96,
    description: "Performing laboratory duties with the highest standards of safety. Contributor to COSHH and Risk Assessment documentation."
  },
  {
    name: "Technical Writing & Patents",
    percentage: 85,
    description: "Authoring high-impact peer-reviewed studies and preparing chemical composition sections for patent submissions."
  },
  {
    name: "Teaching and tutoring",
    percentage: 95,
    description: "Passionate about teaching and mentorship, consistently seeking opportunities to lead lectures and workshops."
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "pub-1",
    title: "How Varenicline Works: Identifying Critical Receptor and Ligand-based Interactions",
    authors: "Aiken G., Fiorito D., Harper M., Pikus G., Underhill J., Murray J., Rawlinson J., O’Donoghue A. M. C., Gotti C., Lummis S. C. R., Viñas T. M., Viscarra F., Bermudez I., Gallagher T., Oliveira S. F.",
    journal: "Cell Reports Physical Science",
    year: "2025",
    citation: "Cell Rep Phys Sci 2025, 6, 102992",
    doi: "10.1016/j.xcrp.2025.102992",
    url: "https://www.cell.com/cell-reports-physical-science/fulltext/S2666-3864(25)00591-0",
    type: "paper"
  },
  {
    id: "pub-2",
    title: "Substituted heterocyclic modulators for the treatment of disease.",
    authors: "Blench, T. J., Ahmad, N. M., Chambers, M. S., Dominguez-Fernandez, B., Pikus, G. P., Warren, L. E., Hart, W., Zonidis, D., More, N., Rennie, Ch., Raja, A.",
    journal: "World Intellectual Property Organization",
    year: "2025",
    citation: "WO2025255014",
    doi: "WO2025255014",
    url: "https://patentscope.wipo.int/search/en/detail.jsf?docId=WO2025255014",
    type: "patent"
  },
  {
    id: "pub-3",
    title: "Substituted phenyl-piperazinyl based modulators for the treatment of disease.",
    authors: "Cramp, S. M.; Esmieu, W. R. K; Panchal, T. A.; Blench, T. J.; Ahmad, N. M.; Dominguez-Fernandez, B.; Hart, W.; Pikus, G.; Wagstaff, N.; Zonidis, D.",
    journal: "World Intellectual Property Organization",
    year: "2024",
    citation: "WO2024216094",
    doi: "WO2024216094",
    url: "https://worldwide.espacenet.com/patent/search/family/093060255/publication/WO2024216094A1?q=WO2024216094A1",
    type: "patent"
  },
  {
    id: "pub-4",
    title: "Polymerization of l-Tyrosine, l-Phenylalanine, and 2-Phenylethylamine as a Versatile Method of Surface Modification for Implantable Medical Devices",
    authors: "Kopeć K., Ryżko A., Major R., Plutecka H., Więcek J., Pikus G., Trzciński J. W., Kalinowska A., Ciach T.",
    journal: "ACS Omega",
    year: "2022",
    citation: "ACS Omega 2022, 7, 43, 39234-39249",
    doi: "10.1021/acsomega.2c05289",
    url: "https://pubs.acs.org/doi/10.1021/acsomega.2c05289",
    type: "paper"
  },
  {
    id: "pub-5",
    title: "PSMA targeted conjugates based on dextran",
    authors: "Janczewska M., Szkop M., Pikus G., Kopyra K., Swiatkowska A., Brygola K., Kaczmarczyk U., Walczak J., Zuk M. T., Duszak J., Ciach T.",
    journal: "Applied Radiation and Isotopes",
    year: "2021",
    citation: "Appl. Radiat. Isot. 2021, 167, 109439",
    doi: "10.1016/j.apradiso.2020.109439",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0969804320305844",
    type: "paper"
  },
  {
    id: "pub-6",
    title: "The influence of high pressure on static combinatorial libraries of chiral BINOL-based macrocyclic amides",
    authors: "Pikus G., Tyszka-Gumkowska A., Jurczak J.",
    journal: "Tetrahedron",
    year: "2020",
    citation: "Tetrahedron, 2020, 76, 131438",
    doi: "10.1016/j.tet.2020.131438",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0040402020306104?via%3Dihub",
    type: "paper"
  },
  {
    id: "pub-7",
    title: "Static Combinatorial Chemistry: A High-Pressure Approach to the Synthesis of Macrocyclic Benzoamide Libraries",
    authors: "Pikus G., Tyszka-Gumkowska A., Jurczak J.",
    journal: "ACS Combinatorial Science",
    year: "2020",
    citation: "ACS Comb. Sci. 2020, 22, 213-221",
    doi: "10.1021/acscombsci.0c00024",
    url: "https://pubs.acs.org/doi/10.1021/acscombsci.0c00024",
    type: "paper"
  },
  {
    id: "pub-8",
    title: "Late-stage functionalization of (R)-BINOL-based diazacoronands and their chiral recognition of α-phenylethylamine hydrochlorides",
    authors: "Tyszka A., Pikus G., Dąbrowa K., Jurczak J.",
    journal: "The Journal of Organic Chemistry",
    year: "2019",
    citation: "J. Org. Chem. 2019, 84, 6502-6507",
    doi: "10.1021/acs.joc.9b00630",
    url: "https://pubs.acs.org/doi/10.1021/acs.joc.9b00630",
    type: "paper"
  },
  {
    id: "pub-9",
    title: "Chiral Recognition of Carboxylate Anions by (R)-BINOL-Based Macrocyclic Receptors",
    authors: "Tyszka-Gumkowska A., Pikus G., Jurczak J.",
    journal: "Molecules",
    year: "2019",
    citation: "Molecules 2019, 24, 2635",
    doi: "10.3390/molecules24142635",
    url: "https://www.mdpi.com/1420-3049/24/14/2635",
    type: "paper"
  },
  {
    id: "pub-10",
    title: "Process of preparing polymeric nanoparticles that chelate radioactive isotopes and have a surface modified with specific molecules targeting the psma receptor and their use.",
    authors: "Ciach T., Janczewska M., Pikus G., Kopyra K.",
    journal: "World Intellectual Property Organization",
    year: "2019",
    citation: "WO2020188318A1",
    doi: "WO2020188318A1",
    url: "https://patentscope.wipo.int/search/en/WO2020188318",
    type: "patent"
  },
  {
    id: "pub-11",
    title: "The influence of salt additives on macrocyclic product distributions in double-amidation reactions",
    authors: "Pikus G., Paśniczek E., Jurczak J.",
    journal: "Arkivoc",
    year: "2017",
    citation: "Arkivoc, 2017, part ii, 534-545",
    doi: "10.3998/ark.5550190.p009.904",
    url: "https://www.arkat-usa.org/get-file/59080/",
    type: "paper"
  },
  {
    id: "pub-12",
    title: "BINOL diesters as useful building blocks towards chiral macrocyclic compounds",
    authors: "Pikus G., Jurczak J.",
    journal: "Tetrahedron",
    year: "2016",
    citation: "Tetrahedron, 2016, 72, 1928-1932",
    doi: "10.1016/j.tet.2016.02.046",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0040402016301132",
    type: "paper"
  }
];
