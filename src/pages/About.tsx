import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Code, GraduationCap, Briefcase, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "MERN stack expertise with REST APIs, SQL databases, and modern frameworks",
    },
    {
      icon: Briefcase,
      title: "Industry Experience",
      description: "Front-end and Full Stack internship experience with Agile practices",
    },
    {
      icon: GraduationCap,
      title: "AI & Data Science",
      description: "B.Tech in Artificial Intelligence and Data Science with 8.0 GPA",
    },
  ];

  const experience = [
    {
      title: "Front-End Developer Intern",
      company: "SEED",
      description: "Built an Assessment Portal using React, HTML, and CSS. Enhanced user interaction and responsiveness. Collaborated via Git and followed Agile practices.",
    },
    {
      title: "Full Stack Development Intern",
      company: "E-Commerce Project",
      description: "Developed an e-commerce web application using the MERN stack. Implemented user authentication, product management, and order tracking features.",
    },
  ];

  const organizations = [
    {
      title: "Placement Coordinator",
      description: "Organized placement drives and conducted training sessions for seniors and peers.",
    },
    {
      title: "Internshala Student Partner",
      description: "Assisted students in finding internships and advancing their careers.",
    },
    {
      title: "Google Student Ambassador",
      description: "Represented Google at campus events, promoted Google technologies, and organized workshops.",
    },
  ];

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gradient-primary">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Full Stack Developer from Tamil Nadu, India
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass rounded-3xl p-8 md:p-12 space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold">
            Hello, I'm <span className="text-primary">Tarun Kumar S A</span>
          </h2>
          
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a results-driven developer with a strong foundation in full-stack web development, 
              including experience with REST APIs and SQL databases. I'm passionate about building 
              clear, testable, and production-ready code with ownership from development through deployment.
            </p>
            
            <p>
              Currently pursuing B.Tech in Artificial Intelligence and Data Science at KGISL Institute 
              of Technology, I'm familiar with CI/CD practices and monitoring tools. My technical expertise 
              spans across modern JavaScript frameworks, backend technologies, and DevOps tools.
            </p>
            
            <p>
              I'm fluent in Kannada, Tamil, and English, and I'm always eager to learn new technologies 
              and contribute to impactful projects.
            </p>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-heading font-bold text-primary">Experience</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="glass rounded-2xl p-6 hover:border-primary/50 transition-all"
              >
                <h3 className="text-xl font-heading font-bold mb-1">{exp.title}</h3>
                <p className="text-primary text-sm mb-3">{exp.company}</p>
                <p className="text-muted-foreground">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="glass rounded-2xl p-6 hover:border-primary/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Organizations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-heading font-bold text-primary flex items-center gap-2">
            <Award className="w-6 h-6" />
            Organizations & Leadership
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {organizations.map((org, index) => (
              <motion.div
                key={org.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="glass rounded-2xl p-5 hover:border-primary/50 transition-all"
              >
                <h3 className="text-lg font-heading font-bold mb-2">{org.title}</h3>
                <p className="text-sm text-muted-foreground">{org.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default About;