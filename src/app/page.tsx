export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-xl font-semibold">
              smyansengupta
            </a>
            <div className="flex space-x-8">
              <a href="#experience" className="nav-link">Experience</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pt-24">
        {/* Hero Section */}
        <section className="py-20">
          <h1 className="hero-title">
            Hi, I'm Smyan 👋
          </h1>
          <p className="hero-subtitle">
            I'm a 3rd year Computer Science student at{" "}
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
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16">
          <h2 className="section-title">Experience</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-700"></div>
            
            <div className="space-y-12">
              {/* Experience 1 */}
              <div className="relative flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center border-2 border-gray-700">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-xl font-semibold">Machine Learning and Data Analysis Co-op</h3>
                    <span className="text-sm text-gray-400">(MSAT Modeling)</span>
                  </div>
                  <div className="text-gray-400 mb-3">Pfizer • July 2025 - Present • Andover, MA</div>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Performing data analysis on lab datasets for an $11 billion project using XGBoost, Random Forest, Scikit-learn Gradient Boosting, and Support Vector Regression</li>
                    <li>• Executing and automating extensive data cleaning, organization, and analysis processes</li>
                    <li>• Engineering a spaCy-based chatbot to provide automated insights on experimental data and process documentation</li>
                  </ul>
                </div>
              </div>

              {/* Experience 2 */}
              <div className="relative flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center border-2 border-gray-700">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Co-Founder and Vice President</h3>
                  <div className="text-gray-400 mb-3">MedCS Lab • May 2025 - Present • Boston, MA</div>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Leading the initiative to establish an interdisciplinary undergraduate research group at the intersection of computer science/data science and medical fields</li>
                    <li>• Managing communication platforms (Discord, Notion) and facilitating coordination between members and advisors</li>
                  </ul>
                </div>
              </div>

              {/* Experience 3 */}
              <div className="relative flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center border-2 border-gray-700">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Founding Member and Hackathon Head</h3>
                  <div className="text-gray-400 mb-3">Northeastern Claude Builder Club • August 2025 - Present • Boston, MA</div>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Spearheading the planning and execution of a 24-hour competitive programming event</li>
                    <li>• Managing budgeting and sponsorship coordination</li>
                  </ul>
                </div>
              </div>

              {/* Experience 4 */}
              <div className="relative flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center border-2 border-gray-700">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Founding Member and Treasurer</h3>
                  <div className="text-gray-400 mb-3">Northeastern Association for Computing Machinery • September 2024 - Present • Boston, MA</div>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Managing all finances, fund disbursements, and meeting requirements</li>
                    <li>• Organizing meetings, mixers, and collaborative events with other clubs</li>
                    <li>• Coordinating with professors for speaking engagements</li>
                  </ul>
                </div>
              </div>

              {/* Experience 5 */}
              <div className="relative flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center border-2 border-gray-700">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Teaching Assistant – Foundations of Data Science</h3>
                  <div className="text-gray-400 mb-3">Khoury College of Computer Sciences • September 2024 - April 2025 • Boston, MA</div>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Facilitating 6+ office hours per week, leading project meetings, and proctoring labs/exams</li>
                    <li>• Grading 90+ assignments per week and providing useful feedback on data analysis, linear algebra, statistics, and machine learning concepts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 border-t border-gray-800">
          <h2 className="section-title">Projects</h2>
          <div className="space-y-6">
            <div className="project-card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="project-title">Guardrails: Atomic</h3>
                <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">1st Place ALIHacks 2025</span>
              </div>
              <p className="project-description mb-3">
                Built an AI-powered formal verification platform that generates mathematically verified code from natural language inputs. 
                Engineered a YAML-to-Z3 conversion pipeline with automated counterexample generation for program verification.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">TypeScript</span>
                <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">Next.js</span>
                <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">Z3 Prover</span>
                <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">MongoDB</span>
                <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">OpenRouter</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">GitHub →</a>
                <a href="#" className="project-link">Live Demo →</a>
              </div>
            </div>
            
            <div className="project-card">
              <h3 className="project-title">NewsFactChecker</h3>
              <p className="project-description mb-3">
                Developed and trained a fact-checker AI model to determine the amount of misinformation in news articles. 
                Utilized Bayesian Inference with Hamiltonian Monte Carlo sampling to calculate probabilities of misinformation.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">Python</span>
                <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">Bayesian Inference</span>
                <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">Machine Learning</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">GitHub →</a>
                <a href="#" className="project-link">Paper →</a>
              </div>
            </div>

            <div className="project-card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="project-title">OpenLegislation</h3>
                <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">1st Place HackHarvard 2024 - Open Data Track</span>
              </div>
              <p className="project-description mb-3">
                Developed a web application to make current Congress bills more accessible and understandable for common users, 
                using the OpenAI API for vector search and simplification.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">React</span>
                <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">TailwindCSS</span>
                <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">Congress.gov API</span>
                <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">OpenAI API</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">GitHub →</a>
                <a href="#" className="project-link">Live Demo →</a>
              </div>
            </div>

            <div className="project-card">
              <h3 className="project-title">Stocks Simulator</h3>
              <p className="project-description mb-3">
                Developed a full-stack Java application using MVC architecture for users to create, update, and maintain stock portfolios. 
                Incorporated algorithms to calculate stock gain/loss, moving averages, and portfolio rebalancing with real-time data for 1000+ stocks.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">Java</span>
                <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">RESTful APIs</span>
                <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">MVC Architecture</span>
                <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">Swing</span>
                <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">Alpha Vantage API</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">GitHub →</a>
                <a href="#" className="project-link">Demo →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 border-t border-gray-800">
          <h2 className="section-title">Contact</h2>
          <div className="space-y-4">
            <p className="text-gray-400">
              Feel free to reach out if you'd like to connect or collaborate.
            </p>
            <div>
              <a href="mailto:senguptasmyan@gmail.com" className="contact-link">
                senguptasmyan@gmail.com
              </a>
              <a 
                href="https://github.com/smyansengupta" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/smyan-sengupta-66871b237/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Smyan Sengupta
          </p>
        </div>
      </footer>
    </div>
  );
}