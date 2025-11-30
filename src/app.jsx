import React from "react";

export default function App() {
  const projects = [
    {
      title: "CRB LLM Assistant",
      tagline:
        "RAG-powered SQL assistant that explains and generates Customer Revenue Bridge scripts.",
      tech: ["Streamlit", "ChromaDB", "Llama/LLM", "SQL"],
      highlights: [
        "Block-level SQL retrieval & explanation",
        "Adaptive granularity-aware SQL generation",
        "Versioned script storage in vector DB",
      ],
      repo: "https://github.com/Bharathiraja-C/CRB-Assistant.git",
    },
    {
      title: "LLM - Chatbot",
      tagline:
        "An interactive and powerful AI chatbot with UI, built using Groq API and the LLaMA 3.3–70B Versatile model",
      tech: ["Streamlit", "Llama/LLM", "Python"],
      highlights: [
        "An interactive and powerful AI chatbot with UI, built using Groq API and the LLaMA 3.3–70B Versatile model.", 
        "This Streamlit project allows users to have real-time, intelligent conversations with a large language model through a modern and user-friendly web interface"
      ],
      repo: "https://github.com/Bharathiraja-C/llm_chatbot.git",
    },
    {
      title: "Snowflake + dbt Revenue Pipeline",
      tagline: "End-to-end dbt models and Snowflake data modeling for revenue analytics.",
      tech: ["Snowflake", "dbt", "SQL"],
      highlights: ["Star-schema modeling", "DBT tests & CI", "Performance tuning"],
    },
    {
      title: "Databricks ETL (Delta Lake)",
      tagline: "Robust ETL using Databricks with Delta Lake patterns.",
      tech: ["Databricks", "SQL", "Python", "Delta Lake"],
      highlights: ["Bronze→Silver→Gold", "Z-order", "Auto-loader"],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">MC</div>
            <div>
              <h1 className="text-lg font-semibold">BHARATHIRAJA C</h1>
              <p className="text-sm text-slate-500">AI Engineer • Data Engineer • LLM & RAG Specialist</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
            <a href="https://www.linkedin.com/jobs/preferences/application-preferences?lipi=urn%3Ali%3Apage%3Ad_flagship3_job_seeking_preferences%3Bwg8nDqorQviOc1Qs7zxGCg%3D%3D" className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700">Resume</a>
          </nav>

          <div className="md:hidden">
            <button className="p-2 rounded-md border">Menu</button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">I build intelligent data systems that combine Data Engineering with Generative AI.</h2>
            <p className="mt-4 text-slate-600">I design end-to-end workflows: from data ingestion and dbt modeling to LLM-powered assistants that generate and explain SQL for revenue analytics (CRB). My work focuses on making domain knowledge reproducible and developer-friendly.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md">View Projects</a>
              <a href="#contact" className="inline-flex items-center px-4 py-2 border rounded-md">Let's talk</a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="text-sm text-slate-500">Preferred Stack</p>
                <p className="mt-2 text-base font-medium">Snowflake • Databricks • dbt • Redshift • ADLS • S3</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="text-sm text-slate-500">AI & Tools</p>
                <p className="mt-2 text-base font-medium">ChromaDB • LLMs • Streamlit</p>
              </div>
            </div>
          </div>

          <div className="order-first md:order-last">
    <div className="bg-gradient-to-br from-indigo-50 to-pink-50 rounded-2xl p-6 shadow-inner">
      <div className="bg-white rounded-xl p-6 shadow-lg">
      <h3 className="text-lg font-semibold">Featured Project: CRB Assistant</h3>
      <p className="text-sm text-slate-500 mt-2">Interactive assistant for CRB SQL. Explain, adapt, and generate templates with RAG-powered retrieval.</p>



      <div className="mt-4 flex gap-3">
      <a href="https://github.com/Bharathiraja-C/CRB-Assistant.git" className="px-3 py-2 border rounded">GitHub</a>
      </div>
      </div>
      </div>
      </div>
        </section>

        <section id="projects" className="mt-12">
          <h3 className="text-2xl font-semibold">Projects</h3>
          <p className="text-slate-600 mt-2">Selected work that demonstrates Data Engineering + AI integration.</p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {projects.map((p) => (
              <article key={p.title} className="bg-white rounded-lg shadow p-5 flex flex-col">
                <h4 className="font-semibold text-lg">{p.title}</h4>
                <p className="text-slate-500 text-sm mt-2">{p.tagline}</p>

                <ul className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li key={t} className="text-xs bg-slate-100 px-2 py-1 rounded">{t}</li>
                  ))}
                </ul>

                <ul className="mt-3 text-sm space-y-1 flex-1">
                  {p.highlights.map((h) => (
                    <li key={h} className="text-slate-600">• {h}</li>
                  ))}
                </ul>

                <div className="mt-4 flex items-center gap-3">
                  <a href={p.repo} className="text-indigo-600 text-sm">Code</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="mt-16 bg-white p-8 rounded-lg shadow">
          <h3 className="text-2xl font-semibold">About</h3>
          <p className="mt-4 text-slate-700">I’m a Data & AI Engineer with a passion for building practical tools that bridge business logic and engineering. My work focuses on revenue analytics, CRB frameworks, and building assistive AI tooling that empowers developers to ship faster.</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium">Primary Skills</h4>
              <ul className="mt-3 text-slate-600 space-y-2">
                <li>• Data Engineering: Snowflake, Databricks, Redshift, dbt</li>
                <li>• AI / LLM: ChromaDB, OpenAI/Azure, SentenceTransformers</li>
                <li>• BI: Power BI, KPI design</li>
                <li>• Web: Streamlit, FastAPI</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium">Career Highlights</h4>
              <ul className="mt-3 text-slate-600 space-y-2">
                <li>• Built a RAG-powered CRB assistant that explains and generates SQL templates</li>
                <li>• Designed ETL pipelines for revenue analytics in Snowflake & dbt</li>
                <li>• Delivered Streamlit demos and internal tools for analytics teams</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-16">
          <h3 className="text-2xl font-semibold">Contact</h3>
          <p className="text-slate-600 mt-2">Interested in working together? Reach out — I reply quickly.</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-medium">Get in touch</h4>
              <p className="mt-2 text-slate-600">Email: <a className="text-indigo-600" href="mailto:bharathirajaoffici@gmail.com">bharathirajaoffici@gmail.com</a></p>
              <p className="mt-2 text-slate-600">LinkedIn: <a className="text-indigo-600" href="https://linkedin.com/in/bharathiraja-c">linkedin.com/in/bharathiraja-c</a></p>
              <p className="mt-2 text-slate-600">GitHub: <a className="text-indigo-600" href="https://github.com/Bharathiraja-C">github.com/Bharathiraja-C</a></p>
            </div>
          </div>
        </section>

        <footer id="resume" className="mt-16 py-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Bharathiraja. Built with React & Tailwind.</p>
        </footer>
      </main>
    </div>
  );
}
