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
      {/* Navigation */}
      <MobileNavigation />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pt-24">
        {/* Hero Section */}
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
                , passionate about building software and solving problems.
              </p>
              {/* Removed in-hero anchor; replaced by floating button */}
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

        {/* Experience Section */}
        <section id="experience" className="py-16">
          <h2 className="section-title">Experience</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-700"></div>
            
            <div className="space-y-12">
              <ExperienceItem
                title="Machine Learning and Data Analysis Co-op"
                subtitle="MSAT Modeling"
                company="Pfizer"
                location="Andover, MA"
                duration="July 2025 - Present"
                responsibilities={[
                  "Performing data analysis on lab datasets for an $11 billion project using XGBoost, Random Forest, Scikit-learn Gradient Boosting, and Support Vector Regression",
                  "Executing and automating extensive data cleaning, organization, and analysis processes",
                  "Engineering a spaCy-based chatbot to provide automated insights on experimental data and process documentation"
                ]}
              />

              <ExperienceItem
                title="Co-Founder and Vice President"
                company="MedCS Lab"
                location="Boston, MA"
                duration="May 2025 - Present"
                responsibilities={[
                  "Leading the initiative to establish an interdisciplinary undergraduate research group at the intersection of computer science/data science and medical fields",
                  "Managing communication platforms (Discord, Notion) and facilitating coordination between members and advisors"
                ]}
              />

              <ExperienceItem
                title="Founding Member and Hackathon Head"
                company="Northeastern Claude Builder Club"
                location="Boston, MA"
                duration="August 2025 - Present"
                responsibilities={[
                  "Spearheading the planning and execution of a 24-hour competitive programming event",
                  "Managing budgeting and sponsorship coordination"
                ]}
              />

              <ExperienceItem
                title="Founding Member and Treasurer"
                company="Northeastern Association for Computing Machinery"
                location="Boston, MA"
                duration="September 2024 - Present"
                responsibilities={[
                  "Managing all finances, fund disbursements, and meeting requirements",
                  "Organizing meetings, mixers, and collaborative events with other clubs",
                  "Coordinating with professors for speaking engagements"
                ]}
              />

              <ExperienceItem
                title="Teaching Assistant – Foundations of Data Science"
                company="Khoury College of Computer Sciences"
                location="Boston, MA"
                duration="September 2024 - April 2025"
                responsibilities={[
                  "Facilitating 6+ office hours per week, leading project meetings, and proctoring labs/exams",
                  "Grading 90+ assignments per week and providing useful feedback on data analysis, linear algebra, statistics, and machine learning concepts"
                ]}
              />
            </div>
          </div>
        </section>

        <ToolsSection />

        {/* Projects Section */}
        <section id="projects" className="py-16 border-t border-gray-800">
          <h2 className="section-title">Projects</h2>
          <div className="space-y-6">
            <ProjectItem
              title="Guardrails: Atomic"
              description="Built an AI-powered formal verification platform that generates mathematically verified code from natural language inputs. Engineered a YAML-to-Z3 conversion pipeline with automated counterexample generation for program verification."
              technologies={["TypeScript", "Next.js", "Z3 Theorem Prover", "MongoDB", "OpenRouter"]}
              links={[
                { label: "GitHub", url: "https://github.com/smyansengupta/guardrails-atomic" },
                { label: "Devpost", url: "https://devpost.com/software/ai-llm-chatgpt-blockchain-machine-learning" }
              ]}
              achievement="1st Place ALIHacks 2025"
            />
            
            <ProjectItem
              title="NewsFactChecker"
              description="Developed and trained a fact-checker AI model to determine the amount of misinformation in news articles. Utilized Bayesian Inference with Hamiltonian Monte Carlo sampling to calculate probabilities of misinformation."
              technologies={["Python", "Bayesian Inference", "Machine Learning"]}
              links={[
                { label: "Code available upon request", url: "#contact" },
                { label: "Paper", url: "/ClaimCheckerAiReport.pdf" }
              ]}
            />

            <ProjectItem
              title="OpenLegislation"
              description="Developed a web application to make current Congress bills more accessible and understandable for common users, using the OpenAI API for vector search and simplification."
              technologies={["React", "TailwindCSS", "Congress.gov API", "OpenAI API"]}
              links={[
                { label: "GitHub", url: "https://github.com/ryankamiri/OpenLegislation" },
                { label: "Devpost", url: "https://devpost.com/software/openlegislation" }
              ]}
              achievement="1st Place HackHarvard 2024 - Open Data Track"
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

        {/* Contact Section */}
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

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Smyan Sengupta. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a 
                href="/resume.pdf" 
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