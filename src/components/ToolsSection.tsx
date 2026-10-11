import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

interface Tool {
  name: string;
  icon: string;
}

interface ToolGroup {
  category: string;
  tools: Tool[];
}

const devicon = (path: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;

const toolGroups: ToolGroup[] = [
  {
    category: "Languages",
    tools: [
      { name: "Python", icon: devicon("python/python-original.svg") },
      { name: "Java", icon: devicon("java/java-original.svg") },
      { name: "JavaScript", icon: devicon("javascript/javascript-original.svg") },
      { name: "TypeScript", icon: devicon("typescript/typescript-original.svg") },
      { name: "Kotlin", icon: devicon("kotlin/kotlin-original.svg") },
      { name: "HTML", icon: devicon("html5/html5-original.svg") },
    ],
  },
  {
    category: "Data & ML",
    tools: [
      { name: "PyTorch", icon: devicon("pytorch/pytorch-original.svg") },
      { name: "Scikit-learn", icon: devicon("scikitlearn/scikitlearn-original.svg") },
      { name: "NumPy", icon: devicon("numpy/numpy-original.svg") },
      { name: "Pandas", icon: devicon("pandas/pandas-original.svg") },
      { name: "Jupyter", icon: devicon("jupyter/jupyter-original.svg") },
    ],
  },
  {
    category: "Web & mobile",
    tools: [
      { name: "React", icon: devicon("react/react-original.svg") },
      { name: "Next.js", icon: devicon("nextjs/nextjs-original.svg") },
      { name: "TailwindCSS", icon: devicon("tailwindcss/tailwindcss-original.svg") },
      { name: "Node.js", icon: devicon("nodejs/nodejs-original.svg") },
      { name: "Express.js", icon: devicon("express/express-original.svg") },
      { name: "Flutter", icon: devicon("flutter/flutter-original.svg") },
    ],
  },
  {
    category: "Data stores",
    tools: [
      { name: "MySQL", icon: devicon("mysql/mysql-original.svg") },
      { name: "MongoDB", icon: devicon("mongodb/mongodb-original.svg") },
      { name: "Firebase", icon: devicon("firebase/firebase-plain.svg") },
    ],
  },
  {
    category: "Workbench",
    tools: [
      { name: "Git", icon: devicon("git/git-original.svg") },
      { name: "GitHub", icon: devicon("github/github-original.svg") },
      { name: "VS Code", icon: devicon("vscode/vscode-original.svg") },
    ],
  },
];

export default function ToolsSection() {
  return (
    <section id="tools" className="section">
      <SectionHeading number="04" title="Tools" emphasis="of the trade" />
      <div className="section-body">
        <div className="col-main">
          <table className="booktabs">
            <caption>
              <span className="fig-tag">Table 1</span> Languages, frameworks and instruments in regular use.
            </caption>
            <thead>
              <tr>
                <th scope="col">Category</th>
                <th scope="col">Tools</th>
                <th scope="col" className="n">n</th>
              </tr>
            </thead>
            <tbody>
              {toolGroups.map((group) => (
                <tr key={group.category} className="reveal">
                  <th scope="row">{group.category}</th>
                  <td>
                    <ul className="chip-list">
                      {group.tools.map((tool) => (
                        <li key={tool.name} className="chip">
                          <Image src={tool.icon} alt="" width={18} height={18} />
                          {tool.name}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="n">{String(group.tools.length).padStart(2, "0")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
