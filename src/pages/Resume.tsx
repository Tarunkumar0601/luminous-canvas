import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Download, FileText, Printer, Share2, GraduationCap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/TARUNKUMAR_RESUME.pdf";
    link.download = "TARUNKUMAR_RESUME.pdf";
    link.click();
    toast({
      title: "Download started",
      description: "Your resume is being downloaded...",
    });
  };

  const handleShare = async () => {
    const resumeUrl = `${window.location.origin}/TARUNKUMAR_RESUME.pdf`;
    await navigator.clipboard.writeText(resumeUrl);
    toast({
      title: "Link copied",
      description: "Resume link copied to clipboard!",
    });
  };

  const handlePrint = () => {
    window.open("/TARUNKUMAR_RESUME.pdf", "_blank");
  };

  const education = [
    {
      degree: "B.Tech in Artificial Intelligence and Data Science",
      institution: "KGISL Institute of Technology",
      score: "GPA: 8.0",
    },
    {
      degree: "HSLC (12th)",
      institution: "SSM Matriculation Higher Secondary School",
      score: "70%",
    },
    {
      degree: "SSLC (10th)",
      institution: "SSM Matriculation Higher Secondary School",
      score: "81%",
    },
  ];

  const experience = [
    {
      title: "Front-End Developer Intern",
      company: "SEED",
      points: [
        "Built an Assessment Portal using React, HTML, and CSS",
        "Enhanced user interaction and responsiveness",
        "Collaborated via Git following Agile practices",
      ],
    },
    {
      title: "Full Stack Development Intern",
      company: "E-Commerce Project",
      points: [
        "Developed web application using MERN stack",
        "Implemented user authentication and product management",
        "Contributed to frontend UI and backend API integration",
      ],
    },
  ];

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gradient-accent">
            Resume
          </h1>
          <p className="text-xl text-muted-foreground">
            Download or share my professional resume
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={handleDownload}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan font-heading"
            >
              <Download className="w-5 h-5 mr-2" />
              Download PDF
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={handlePrint}
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary/10 font-heading"
            >
              <Printer className="w-5 h-5 mr-2" />
              View PDF
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={handleShare}
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10 font-heading"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Share
            </Button>
          </motion.div>
        </motion.div>

        {/* Resume Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass rounded-3xl p-8 space-y-8"
        >
          {/* Header */}
          <div className="text-center space-y-2 border-b border-border/50 pb-6">
            <h2 className="text-3xl font-heading font-bold text-primary">
              TARUN KUMAR S A
            </h2>
            <p className="text-muted-foreground">
              sa.tarunkumar31@gmail.com | +91 80726 25476
            </p>
            <p className="text-sm text-muted-foreground">
              Komarapalayam, Nammakal, Tamil Nadu – 638183
            </p>
          </div>

          {/* Summary */}
          <div>
            <p className="text-muted-foreground leading-relaxed">
              Results-driven developer with a strong foundation in full-stack web development, 
              including experience with REST APIs, SQL databases. Passionate about building clear, 
              testable, and production-ready code with ownership from development through deployment. 
              Familiar with CI/CD practices and monitoring tools.
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-bold text-primary flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              Experience
            </h3>
            {experience.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="p-4 rounded-xl bg-primary/5 border border-primary/20"
              >
                <h4 className="font-heading font-bold">{exp.title}</h4>
                <p className="text-sm text-primary mb-2">{exp.company}</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-bold text-primary flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              Education
            </h3>
            <div className="grid gap-3">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex justify-between items-center p-4 rounded-xl bg-primary/5 border border-primary/20"
                >
                  <div>
                    <h4 className="font-heading font-bold">{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  </div>
                  <span className="text-primary font-bold">{edu.score}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* View Full Resume */}
          <div className="text-center pt-4">
            <p className="text-muted-foreground text-sm">
              View or download the full PDF for complete details including projects, certifications, and skills.
            </p>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Resume;