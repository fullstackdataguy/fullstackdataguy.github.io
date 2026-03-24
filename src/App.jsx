import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { ExternalLink, ChevronDown, User, Code2, BookOpen, FlaskConical, PenTool, BookMarked } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const SectionHeading = ({ children, icon: Icon, color = "text-ctp-mauve" }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="flex items-center gap-3 mb-10"
  >
    <div className={`p-3 rounded-xl bg-ctp-crust border border-ctp-surface0 shadow-lg ${color}`}>
      <Icon size={24} />
    </div>
    <h2 className="text-3xl md:text-4xl font-bold text-ctp-text">{children}</h2>
  </motion.div>
)

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Research', href: '#research' },
    { name: 'Learning', href: '#learning' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold tracking-tighter text-ctp-text flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-ctp-mauve to-ctp-blue flex items-center justify-center text-ctp-crust font-black group-hover:scale-105 transition-transform">
            S
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-ctp-text to-ctp-subtext0 group-hover:to-ctp-lavender transition-all">
            gt. CMI
          </span>
        </a>
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-ctp-subtext0 hover:text-ctp-mauve transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-ctp-mauve/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none animate-pulse duration-1000"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-ctp-blue/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-ctp-surface0 bg-ctp-crust/50 text-ctp-teal text-sm font-semibold tracking-wide backdrop-blur-sm">
            Available for new opportunities
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 text-ctp-text">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-ctp-mauve via-ctp-pink to-ctp-sapphire">Sgt. CMI</span>
          </h1>
          <h2 className="text-xl md:text-3xl text-ctp-subtext1 mb-8 font-medium">
            Full Stack Data Guy & Architecture Explorer
          </h2>
          <p className="text-ctp-subtext0 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            I bridge the gap between complex data systems and beautiful, functional user interfaces. Obsessed with elegant code, scalable architecture, and agentic AI.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects" className="px-8 py-3 rounded-full bg-ctp-mauve text-ctp-crust font-bold hover:bg-ctp-pink transition-colors w-full sm:w-auto">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full border border-ctp-surface1 bg-ctp-crust/50 text-ctp-text hover:border-ctp-blue transition-colors w-full sm:w-auto backdrop-blur-sm">
              Get in Touch
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-ctp-overlay0 animate-bounce"
        >
          <ChevronDown size={32} />
        </motion.div>
      </div>
    </section>
  )
}

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading icon={User} color="text-ctp-sky">About Me</SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-ctp-subtext0 leading-relaxed"
          >
            <p>
              I am a passionate software engineer with a deep foundation in both data science and full stack development. I thrive in the space where heavy data processing meets seamless user interactions.
            </p>
            <p>
              When I'm not architecting complex systems or fine-tuning machine learning models, you can find me exploring the latest web technologies, contributing to open-source, or sharing my journey of "learning in public".
            </p>
            
            <div className="pt-6">
              <h3 className="text-ctp-text font-semibold mb-4 text-xl">Core Arsenal</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'React', 'TypeScript', 'Node.js', 'PyTorch', 'SQL', 'Docker', 'AWS'].map((tech) => (
                  <span key={tech} className="px-4 py-2 rounded-lg bg-ctp-surface0/50 border border-ctp-surface1 text-ctp-text font-medium text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass p-2 relative z-10 border border-ctp-surface0 bg-ctp-crust/40">
              {/* Placeholder for an actual photo */}
              <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-ctp-surface0 to-ctp-surface1 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-ctp-mauve/20 to-ctp-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <User size={100} className="text-ctp-surface2 group-hover:text-ctp-overlay0 transition-colors duration-500" />
              </div>
            </div>
            {/* Decorative background block */}
            <div className="absolute -bottom-6 -right-6 w-full h-full rounded-3xl bg-gradient-to-br from-ctp-mauve to-ctp-blue opacity-20 -z-10 blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Projects = () => {
  const projects = [
    {
      title: "Agentic AI Orchestrator",
      description: "A framework for managing and deploying specialized AI agents that can write code, analyze data, and navigate interfaces.",
      tags: ["Python", "Machine Learning", "FastAPI"],
      color: "from-ctp-green to-ctp-teal"
    },
    {
      title: "Data Visualization Engine",
      description: "High-performance WebGL based rendering library for plotting billions of data points in real-time within the browser.",
      tags: ["TypeScript", "React", "WebGL"],
      color: "from-ctp-sapphire to-ctp-blue"
    },
    {
      title: "Cloud Infrastructure Setup",
      description: "Automated terraform scripts for scaffolding secure, auto-scaling architectures on AWS for data-heavy startups.",
      tags: ["Terraform", "AWS", "Bash"],
      color: "from-ctp-peach to-ctp-yellow"
    }
  ]

  return (
    <section id="projects" className="py-24 px-6 bg-ctp-crust/30">
      <div className="max-w-5xl mx-auto">
        <SectionHeading icon={Code2} color="text-ctp-green">Featured Projects</SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group rounded-2xl p-6 glass hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
            >
              {/* Gradient border effect top */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color} opacity-50 group-hover:opacity-100 transition-opacity`}></div>
              
              <div className="mb-4 flex justify-between items-start">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} bg-opacity-10 flex items-center justify-center p-[1px]`}>
                  <div className="w-full h-full bg-ctp-base rounded-[7px] flex items-center justify-center">
                    <Code2 className="text-ctp-text w-6 h-6" />
                  </div>
                </div>
                <a href="#" className="text-ctp-overlay0 hover:text-ctp-text transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
              
              <h3 className="text-xl font-bold text-ctp-text mb-3 group-hover:text-ctp-blue transition-colors">{project.title}</h3>
              <p className="text-ctp-subtext0 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-ctp-surface0/50">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-semibold text-ctp-teal bg-ctp-teal/10 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ResearchAndLearning = () => {
  return (
    <section id="research" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Research */}
        <div>
          <SectionHeading icon={FlaskConical} color="text-ctp-red">Research</SectionHeading>
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-ctp-surface0 bg-ctp-crust/40 hover:bg-ctp-surface0/30 transition-colors"
            >
              <div className="text-xs font-bold text-ctp-maroon mb-2">PUBLISHED PAPER, 2026</div>
              <h3 className="text-lg font-bold text-ctp-text mb-2">Advancements in Agentic Capabilities for Software Engineering</h3>
              <p className="text-ctp-subtext0 text-sm">Exploration of multi-agent orchestration limits when dealing with complex architectural redesigns without active human oversight.</p>
            </motion.div>
          </div>
        </div>

        {/* Learning */}
        <div id="learning">
          <SectionHeading icon={BookMarked} color="text-ctp-yellow">Learning in Public</SectionHeading>
          <div className="relative pl-6 border-l-2 border-ctp-surface1 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-ctp-yellow ring-4 ring-ctp-crust"></div>
              <div className="font-bold text-ctp-text text-lg">Mastering WebGL</div>
              <div className="text-ctp-subtext0 text-sm mt-1">Deep diving into low-level rendering pipelines to drastically improve frontend dashboard performance. Tracking progress via blog posts.</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-ctp-surface2 ring-4 ring-ctp-crust"></div>
              <div className="font-bold text-ctp-text text-lg">Advanced Cloud Architectures</div>
              <div className="text-ctp-subtext0 text-sm mt-1">Learned Kubernetes orchestration and serverless function deployment for data processing pipelines.</div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-gradient-to-b from-transparent to-ctp-crust relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-ctp-mauve/10 blur-[120px] rounded-[100%] pointer-events-none"></div>
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-ctp-text mb-6">Let's Build Something.</h2>
          <p className="text-lg text-ctp-subtext0 mb-10 max-w-xl mx-auto">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
          </p>
          
          <a href="mailto:hello@example.com" className="inline-block px-10 py-4 rounded-full bg-ctp-text text-ctp-crust font-bold hover:scale-105 transition-transform shadow-xl shadow-ctp-text/20 mb-16">
            Say Hello
          </a>
          
          <div className="flex justify-center gap-6">
            <a href="https://github.com/fullstackdataguy" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-ctp-surface0 text-ctp-text hover:bg-ctp-mauve hover:text-ctp-crust transition-all shadow-lg active:scale-95">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sougawtoml/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-ctp-surface0 text-ctp-text hover:bg-ctp-blue hover:text-ctp-crust transition-all shadow-lg active:scale-95">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="p-4 rounded-full bg-ctp-surface0 text-ctp-text hover:bg-ctp-pink hover:text-ctp-crust transition-all shadow-lg active:scale-95">
              <PenTool size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const Footer = () => (
  <footer className="py-8 text-center text-ctp-overlay0 text-sm border-t border-ctp-surface0 bg-ctp-crust">
    <p>© {new Date().getFullYear()} Sgt. CMI. Built with React, Tailwind & Catppuccin.</p>
  </footer>
)

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 origin-left bg-gradient-to-r from-ctp-mauve via-ctp-pink to-ctp-blue z-[60]"
        style={{ scaleX }}
      />
      
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <ResearchAndLearning />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
