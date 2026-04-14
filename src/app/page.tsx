import Image from "next/image";
import ExperienceItem from "@/components/ExperienceItem";
import ProjectItem from "@/components/ProjectItem";
import ToolsSection from "@/components/ToolsSection";
import BackToTopButton from "@/components/BackToTopButton";
import ScrollDownButton from "@/components/ScrollDownButton";
import ContactForm from "@/components/ContactForm";
import MobileNavigation from "@/components/MobileNavigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <MobileNavigation />

      <main className="max-w-4xl mx-auto px-6 pt-24">
        <section className="min-h-[calc(100vh-6rem)] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="hero-title">
                Hi, I&apos;m <span style={{ color: '#3b82f6' }}>Smyan</span>
              </h1>
              <p className="hero-subtitle">
                I&apos;m a 3rd year Computer Science student at{" "}
                <a 
                  href="https://www.northeastern.edu/" 
                  className="text-white hover:text-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Northeastern University
                </a>
                . I&apos;m highly driven by the applications of AI and ML to make a real-world impact, and I&apos;m passionate about using software and AI solutions to help early-stage startups grow.

              </p>
              <p className="hero-subtitle">
                I have comprehensive experience with Python, including NumPy, Pandas, Scikit-learn, XGBoost, Keras, and PyTorch. I have also worked extensively with Java, React/Next.js, Flutter, and SQL. I&apos;m currently exploring areas of ML including deep learning and Bayesian models. Check out some of my <a href="#projects" className="text-white hover:text-gray-300 transition-colors">projects</a> below!
              </p>
              <p className="hero-subtitle">
                In my free time, I enjoy traveling, plane spotting, hitting the gym, and going for bike rides. Feel free to <a href="#contact" className="text-white hover:text-gray-300 transition-colors">reach out</a> if you&apos;d like to connect or collaborate!
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image 
                  src="/pfp.jpeg" 
                  alt="Smyan Sengupta" 
                  width={256}
                  height={256}
                  className="w-64 h-64 profile-picture rounded-full object-cover shadow-2xl"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 status-indicator rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-16">
          <h2 className="section-title">Projects</h2>
          <div className="space-y-6">
            <ProjectItem
              title="NewsFactChecker"
              description="Designed a probabilistic NLP fact-checking model on 10K+ statements from the LIAR dataset using a 6-class Bayesian softmax classifier, applying Hamiltonian Monte Carlo with JAX to sample 5,000 posterior weight estimates. Implemented semantic feature extraction using SentenceTransformer embeddings; benchmarked posterior-averaged credibility scores against logistic regression baselines using AUC and threshold-optimized F1."
              technologies={["Python", "JAX", "NumPy", "Scikit-learn", "SentenceTransformer"]}
              links={[
                { label: "Code available upon request", url: "#contact" },
                { label: "Paper", url: "/ClaimCheckerAiReport.pdf" }
              ]}
            />

            <ProjectItem
              title="Guardrails: Atomic"
              description="Architected an AI-powered full-stack formal verification platform in Next.js/TypeScript that iteratively generates mathematically verified code from natural language inputs, winning 1st place at an AI Agent Hackathon. Engineered a YAML-to-Z3 conversion pipeline with automated counterexample generation for program verification."
              technologies={["TypeScript", "Next.js", "Z3 Prover", "MongoDB", "OpenRouter"]}
              links={[
                { label: "GitHub", url: "https://github.com/smyansengupta/guardrails-atomic" },
                { label: "Devpost", url: "https://devpost.com/software/ai-llm-chatgpt-blockchain-machine-learning" }
              ]}
              achievement="1st Place - 2025 AI Agent Hackathon"
            />
            
            <ProjectItem
              title="OpenLegislation"
              description="Built a web application that simplifies congressional legislation for general audiences, enabling users to search, read, and understand active bills without legal expertise, winning 1st place at the HackHarvard 2024 on the Open Data Track. Implemented semantic search using OpenAI embeddings to surface relevant bills from natural language queries, and integrated GPT-based summarization to translate legal language into plain English."
              technologies={["React", "TailwindCSS", "OpenAI API"]}
              links={[
                { label: "GitHub", url: "https://github.com/ryankamiri/OpenLegislation" },
                { label: "Devpost", url: "https://devpost.com/software/openlegislation" }
              ]}
              achievement="1st Place - HackHarvard 2024 Open Data Track"
            />

            <ProjectItem
              title="HealthSync"
              description="Developed a mobile application that analyzes user health data and health-related journal entries to provide users with AI-powered health analysis and recommendations."
              technologies={["Flutter", "Python", "MongoDB Atlas", "Gemini API"]}
              links={[
                { label: "GitHub", url: "https://github.com/KooshaPari/hoohacks" },
                { label: "Devpost", url: "https://devpost.com/software/healthsync-vrdtb3" }
              ]}
            />

            <ProjectItem
              title="Second Sight"
              description="Developed an AI-powered journaling application where users can log their mood for the day, create journal entries, and view entries over time. Leveraged Gemini AI to analyze entries and mood trends to assist users in understanding themselves better."
              technologies={["Flutter", "Kotlin", "Gemini API"]}
              links={[
                { label: "GitHub", url: "https://github.com/SecondSightapp/mobile" },
                { label: "Demo", url: "https://www.youtube.com/watch?v=C807C74Hv2k" }
              ]}
            />

            <ProjectItem
              title="Hoo Wants A Degree"
              description="Developed a degree planner web application to aid University of Virginia School of Engineering students in creating AI-generated four-year degree plans."
              technologies={["React", "Perplexity AI API"]}
              links={[
                { label: "GitHub", url: "https://github.com/shawnmalik1/HooWantsADegree" },
                { label: "Devpost", url: "https://devpost.com/software/hoo-wants-a-degree" }
              ]}
            />

            <ProjectItem
              title="Stocks Simulator"
              description="Developed a full-stack Java application using MVC architecture for users to create, update, and maintain stock portfolios. Incorporated algorithms to calculate stock gain/loss, moving averages, and portfolio rebalancing with real-time data for 1000+ stocks."
              technologies={["Java", "RESTful APIs", "MVC Architecture", "Swing", "Alpha Vantage API"]}
              links={[
                { label: "Code available upon request", url: "#contact" }
              ]}
            />
          </div>
        </section>

        <section id="experience" className="py-16 border-t border-gray-800">
          <h2 className="section-title">Experience</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-700"></div>
            
            <div className="space-y-12">
              <ExperienceItem
                title="Machine Learning Engineering Co-op"
                company="Pfizer"
                location="Andover, MA"
                duration="July - December 2025"
                responsibilities={[
                  "Engineered a spaCy-based Natural Language Processing (NLP) chat assistant with a custom Named Entity Recognition (NER) pipeline from scratch, providing automated insights on experimental data, process documentation, and model optimization strategies for workflows across 5 distinct manufacturing processes",
                  "Developed, automated, and deployed a data cleaning and predictive modeling pipeline using XGBoost, Random Forest, and SVR on 9+ time-series lab datasets (1,000+ datapoints each) for an $11 billion polysaccharide data analysis project",
                  "Implemented SHAP explainability analysis and EconML causal inference to identify highest-impact factors across datasets, ensuring model interpretability and consistency",
                  "Researched and implemented MLflow experiment tracking and Data Version Control (DVC) for reproducible ML workflows; presented proof-of-concept to modeling teams across 4 sites"
                ]}
              />

              <ExperienceItem
                title="Teaching Assistant – Foundations of Data Science"
                company="Khoury College of Computer Sciences"
                location="Boston, MA"
                duration="September 2024 - April 2025"
                responsibilities={[
                  "Facilitated 6+ office hours per week, directed project meetings, and proctored labs/exams to assist students with assignments and aid them in understanding data analysis, linear algebra, statistics, and machine learning concepts",
                  "Graded 90+ assignments per week, providing useful feedback"
                ]}
              />

              <ExperienceItem
                title="Founding Member and Vice Chair"
                company="Northeastern Association for Computing Machinery"
                location="Boston, MA"
                duration="September 2024 - Present"
                responsibilities={[
                  "ACM at Northeastern aims to make Computer Science opportunities more accessible to students across Northeastern. The startup branch empowers local startups, and currently has a team of student engineers under AIR Health.",
                  "Directed the planning and execution of two large-scale 24-hour hackathons with 40+ attendees, coordinating budgeting, sponsorships, judging, workshops, and cross-club collaborations across 6+ student organizations and 3 local startups",
                  "Facilitated communications between student software engineers and local startups to develop impactful real-world products"
                ]}
              />

              <ExperienceItem
                title="Director of Operations"
                company="Northeastern Claude Builder Club"
                location="Boston, MA"
                duration="August 2025 - Present"
                responsibilities={[
                  "Secured Anthropic as a sponsor for two large-scale 24-hour hackathons, negotiated Claude API credit allocations for winners",
                  "Coordinated demos and workshops with Claude Student Ambassadors and student developers to drive adoption and showcase capabilities across the Northeastern developer community"
                ]}
              />

              <ExperienceItem
                title="Co-Founder and Vice President"
                company="MedCS Lab"
                location="Boston, MA"
                duration="May 2025 - Present"
                responsibilities={[
                  "MedCS Lab is Northeastern\'s first student-run interdisciplinary lab at the intersection of computer science, data science, and the life sciences. As undergraduates, we noticed that it\'s often difficult to find research opportunities. Our mission is to conduct transformative research at this intersection, while making opportunities more accessible to all undergraduate students. Currently operating under the Undergraduate Research Club with two projects soon to launch."
                ]}
              />
            </div>
          </div>
        </section>

        <ToolsSection />

        <section id="contact" className="py-16 border-t border-gray-800">
          <h2 className="section-title">Contact</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-400 text-center mb-8">
              Feel free to reach out if you&apos;d like to connect or collaborate!
            </p>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 mt-20">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Smyan Sengupta. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a 
                href="/Smyan_Sengupta_Resume_2026.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-white hover:bg-white/8 hover:scale-105 hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
                aria-label="Resume"
              >
                Resume
              </a>
              <a 
                href="https://github.com/smyansengupta" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/8 hover:scale-105 hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
                aria-label="GitHub"
              >
                <Image 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
                  alt="GitHub" 
                  width={24} 
                  height={24}
                  style={{filter: 'brightness(0) invert(1)'}}
                />
              </a>
              <a 
                href="https://www.linkedin.com/in/smyan-sengupta-66871b237/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/8 hover:scale-105 hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
                aria-label="LinkedIn"
              >
                <Image 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
                  alt="LinkedIn" 
                  width={24} 
                  height={24}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <BackToTopButton />
      <ScrollDownButton />
    </div>
  );
}