import Image from "next/image";
import ExperienceItem from "@/components/ExperienceItem";
import ProjectItem from "@/components/ProjectItem";
import ToolsSection from "@/components/ToolsSection";
import BackToTopButton from "@/components/BackToTopButton";
import ScrollDownButton from "@/components/ScrollDownButton";
import ContactForm from "@/components/ContactForm";
import MobileNavigation from "@/components/MobileNavigation";
import SectionHeading from "@/components/SectionHeading";
import PosteriorFigure from "@/components/PosteriorFigure";

const projects = [
  {
    title: "NewsFactChecker",
    description: "Designed a probabilistic NLP fact-checking model on 10K+ statements from the LIAR dataset using a 6-class Bayesian softmax classifier, applying Hamiltonian Monte Carlo with JAX to sample 5,000 posterior weight estimates. Implemented semantic feature extraction using SentenceTransformer embeddings; benchmarked posterior-averaged credibility scores against logistic regression baselines using AUC and threshold-optimized F1.",
    technologies: ["Python", "JAX", "NumPy", "Scikit-learn", "SentenceTransformer"],
    links: [
      { label: "Code available upon request", url: "#contact" },
      { label: "Paper", url: "/ClaimCheckerAiReport.pdf" }
    ],
  },
  {
    title: "Guardrails: Atomic",
    description: "Architected an AI-powered full-stack formal verification platform in Next.js/TypeScript that iteratively generates mathematically verified code from natural language inputs, winning 1st place at an AI Agent Hackathon. Engineered a YAML-to-Z3 conversion pipeline with automated counterexample generation for program verification.",
    technologies: ["TypeScript", "Next.js", "Z3 Prover", "MongoDB", "OpenRouter"],
    links: [
      { label: "GitHub", url: "https://github.com/smyansengupta/guardrails-atomic" },
      { label: "Devpost", url: "https://devpost.com/software/ai-llm-chatgpt-blockchain-machine-learning" }
    ],
    achievement: "1st Place - 2025 AI Agent Hackathon",
  },
  {
    title: "OpenLegislation",
    description: "Built a web application that simplifies congressional legislation for general audiences, enabling users to search, read, and understand active bills without legal expertise, winning 1st place at the HackHarvard 2024 on the Open Data Track. Implemented semantic search using OpenAI embeddings to surface relevant bills from natural language queries, and integrated GPT-based summarization to translate legal language into plain English.",
    technologies: ["React", "TailwindCSS", "OpenAI API"],
    links: [
      { label: "GitHub", url: "https://github.com/ryankamiri/OpenLegislation" },
      { label: "Devpost", url: "https://devpost.com/software/openlegislation" }
    ],
    achievement: "1st Place - HackHarvard 2024 Open Data Track",
  },
  {
    title: "HealthSync",
    description: "Developed a mobile application that analyzes user health data and health-related journal entries to provide users with AI-powered health analysis and recommendations.",
    technologies: ["Flutter", "Python", "MongoDB Atlas", "Gemini API"],
    links: [
      { label: "GitHub", url: "https://github.com/KooshaPari/hoohacks" },
      { label: "Devpost", url: "https://devpost.com/software/healthsync-vrdtb3" }
    ],
  },
  {
    title: "Second Sight",
    description: "Developed an AI-powered journaling application where users can log their mood for the day, create journal entries, and view entries over time. Leveraged Gemini AI to analyze entries and mood trends to assist users in understanding themselves better.",
    technologies: ["Flutter", "Kotlin", "Gemini API"],
    links: [
      { label: "GitHub", url: "https://github.com/SecondSightapp/mobile" },
      { label: "Demo", url: "https://www.youtube.com/watch?v=C807C74Hv2k" }
    ],
  },
  {
    title: "Hoo Wants A Degree",
    description: "Developed a degree planner web application to aid University of Virginia School of Engineering students in creating AI-generated four-year degree plans.",
    technologies: ["React", "Perplexity AI API"],
    links: [
      { label: "GitHub", url: "https://github.com/shawnmalik1/HooWantsADegree" },
      { label: "Devpost", url: "https://devpost.com/software/hoo-wants-a-degree" }
    ],
  },
  {
    title: "Stocks Simulator",
    description: "Developed a full-stack Java application using MVC architecture for users to create, update, and maintain stock portfolios. Incorporated algorithms to calculate stock gain/loss, moving averages, and portfolio rebalancing with real-time data for 1000+ stocks.",
    technologies: ["Java", "RESTful APIs", "MVC Architecture", "Swing", "Alpha Vantage API"],
    links: [
      { label: "Code available upon request", url: "#contact" }
    ],
  },
];

const experience = [
  {
    title: "Machine Learning Engineering Co-op",
    company: "Pfizer",
    location: "Andover, MA",
    duration: "July - December 2025",
    responsibilities: [
      "Engineered a spaCy-based Natural Language Processing (NLP) chat assistant with a custom Named Entity Recognition (NER) pipeline from scratch, providing automated insights on experimental data, process documentation, and model optimization strategies for workflows across 5 distinct manufacturing processes",
      "Developed, automated, and deployed a data cleaning and predictive modeling pipeline using XGBoost, Random Forest, and SVR on 9+ time-series lab datasets (1,000+ datapoints each) for an $11 billion polysaccharide data analysis project",
      "Implemented SHAP explainability analysis and EconML causal inference to identify highest-impact factors across datasets, ensuring model interpretability and consistency",
      "Researched and implemented MLflow experiment tracking and Data Version Control (DVC) for reproducible ML workflows; presented proof-of-concept to modeling teams across 4 sites"
    ],
  },
  {
    title: "Teaching Assistant – Foundations of Data Science",
    company: "Khoury College of Computer Sciences",
    location: "Boston, MA",
    duration: "September 2024 - April 2025",
    responsibilities: [
      "Facilitated 6+ office hours per week, directed project meetings, and proctored labs/exams to assist students with assignments and aid them in understanding data analysis, linear algebra, statistics, and machine learning concepts",
      "Graded 90+ assignments per week, providing useful feedback"
    ],
  },
  {
    title: "Founding Member and Vice Chair",
    company: "Northeastern Association for Computing Machinery",
    location: "Boston, MA",
    duration: "September 2024 - Present",
    responsibilities: [
      "ACM at Northeastern aims to make Computer Science opportunities more accessible to students across Northeastern. The startup branch empowers local startups, and currently has a team of student engineers under AIR Health.",
      "Directed the planning and execution of two large-scale 24-hour hackathons with 40+ attendees, coordinating budgeting, sponsorships, judging, workshops, and cross-club collaborations across 6+ student organizations and 3 local startups",
      "Facilitated communications between student software engineers and local startups to develop impactful real-world products"
    ],
  },
  {
    title: "Director of Operations",
    company: "Northeastern Claude Builder Club",
    location: "Boston, MA",
    duration: "August 2025 - Present",
    responsibilities: [
      "Secured Anthropic as a sponsor for two large-scale 24-hour hackathons, negotiated Claude API credit allocations for winners",
      "Coordinated demos and workshops with Claude Student Ambassadors and student developers to drive adoption and showcase capabilities across the Northeastern developer community"
    ],
  },
  {
    title: "Co-Founder and Vice President",
    company: "MedCS Lab",
    location: "Boston, MA",
    duration: "May 2025 - Present",
    responsibilities: [
      "MedCS Lab is Northeastern's first student-run interdisciplinary lab at the intersection of computer science, data science, and the life sciences. As undergraduates, we noticed that it's often difficult to find research opportunities. Our mission is to conduct transformative research at this intersection, while making opportunities more accessible to all undergraduate students. Currently operating under the Undergraduate Research Club with two projects soon to launch."
    ],
  },
];

const delay = (seconds: number) => ({ "--d": `${seconds}s` }) as React.CSSProperties;

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="page">
      <MobileNavigation />

      <main className="wrap">
        <header className="hero">
          <div className="hero-meta">
            <span>Working Paper Nº 04</span>
            <span>Northeastern University</span>
            <span className="hide-sm">Boston, MA</span>
            <span>Rev. {year}</span>
          </div>

          <h1 className="hero-name" aria-label="Smyan Sengupta">
            <span className="line first" aria-hidden="true">
              {"Smyan".split("").map((char, i) => (
                <span key={i} className="ch" style={{ "--i": i } as React.CSSProperties}>
                  {char}
                </span>
              ))}
            </span>
            <span className="line last" aria-hidden="true">
              Sengupta<span className="name-dot">.</span>
            </span>
          </h1>

          <div className="hero-grid">
            <p className="kicker hero-kicker load-in" style={delay(0.85)}>
              Abstract
            </p>
            <div className="abstract">
              <p className="lede load-in" style={delay(0.9)}>
                <strong>Full stack developer</strong>, <strong>AI engineer</strong>, and 4th year Computer Science
                student at Northeastern University.
              </p>
              <p className="keywords load-in" style={delay(1.05)}>
                <span>Keywords</span> machine learning · Bayesian inference · NLP · full-stack · startups
              </p>
              <div className="cta-row load-in" style={delay(1.15)}>
                <a href="#projects" className="btn btn-solid">
                  Read the projects <span className="arrow">↓</span>
                </a>
                <a
                  href="/Smyan_Sengupta_Resume_2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  Resume (PDF) <span className="arrow">↗</span>
                </a>
              </div>
            </div>
            <figure className="portrait">
              <div className="portrait-frame">
                <Image
                  src="/pfp.jpeg"
                  alt="Smyan Sengupta"
                  width={320}
                  height={320}
                  priority
                />
              </div>
              <figcaption>
                <span className="fig-tag">Fig. 1</span> The author, Boston, MA.
              </figcaption>
            </figure>
          </div>

          <PosteriorFigure />
        </header>

        <section id="about" className="section">
          <SectionHeading number="01" title="About" emphasis="the author" />
          <div className="about-grid">
            <div className="prose">
              <p className="dropcap">
                I&apos;m a 4th year Computer Science student at{" "}
                <a
                  href="https://www.northeastern.edu/"
                  className="ink-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Northeastern University
                </a>
                . I&apos;m highly driven by the applications of AI and ML to make a real-world impact, and I&apos;m passionate about using software and AI solutions to help early-stage startups grow.
              </p>
              <p>
                I have comprehensive experience with Python, including NumPy, Pandas, Scikit-learn, XGBoost, Keras, and PyTorch. I have also worked extensively with Java, React/Next.js, Flutter, and SQL. I&apos;m currently exploring areas of ML including deep learning and Bayesian models. Check out some of my <a href="#projects" className="ink-link">projects</a> below!
              </p>
              <p>
                In my free time, I enjoy traveling, plane spotting, hitting the gym, and going for bike rides. Feel free to <a href="#contact" className="ink-link">reach out</a> if you&apos;d like to connect or collaborate!
              </p>
            </div>
            <aside className="sidenote reveal" aria-label="At a glance">
              <dl>
                <div>
                  <dt>Based in</dt>
                  <dd>Boston, MA</dd>
                </div>
                <div>
                  <dt>Exploring</dt>
                  <dd>Deep learning &amp; Bayesian models</dd>
                </div>
                <div>
                  <dt>Off the clock</dt>
                  <dd>Travel, plane spotting, the gym &amp; long bike rides</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section id="projects" className="section">
          <SectionHeading
            number="02"
            title="Selected"
            emphasis="work"
            aside={`${String(projects.length).padStart(2, "0")} entries`}
          />
          <div className="entries">
            {projects.map((project, index) => (
              <ProjectItem key={project.title} index={index + 1} {...project} />
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <SectionHeading number="03" title="Experience" emphasis="so far" />
          <div className="roles">
            {experience.map((role) => (
              <ExperienceItem key={`${role.company}-${role.title}`} {...role} />
            ))}
          </div>
        </section>

        <ToolsSection />

        <section id="contact" className="section">
          <SectionHeading number="05" title="Get in" emphasis="touch" />
          <div className="section-body">
            <div className="col-main">
              <p className="contact-intro">
                Feel free to reach out if you&apos;d like to connect or collaborate!
              </p>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="colophon">
        <div className="wrap">
          <p className="fin">
            Thanks for reading<span className="qed" aria-hidden="true">∎</span>
          </p>
          <div className="colophon-grid">
            <div>
              <span className="colophon-label">Colophon</span>
              Set in Fraunces &amp; IBM Plex Mono. Built with Next.js.
            </div>
            <nav className="colophon-links" aria-label="Elsewhere">
              <a href="/Smyan_Sengupta_Resume_2026.pdf" target="_blank" rel="noopener noreferrer">
                Resume ↗
              </a>
              <a href="https://github.com/smyansengupta" target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
              <a href="https://www.linkedin.com/in/smyan-sengupta-66871b237/" target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
            </nav>
            <p className="colophon-copy">
              © {year} Smyan Sengupta. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      <BackToTopButton />
      <ScrollDownButton />
    </div>
  );
}
