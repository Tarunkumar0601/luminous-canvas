import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Award } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: "C / C++", level: 75, category: "Languages" },
  { name: "JavaScript", level: 80, category: "Languages" },
  { name: "Python", level: 70, category: "Languages" },
  { name: "Java", level: 65, category: "Languages" },
  { name: "C#", level: 60, category: "Languages" },
  { name: "React.js", level: 80, category: "Frontend" },
  { name: "HTML / CSS", level: 85, category: "Frontend" },
  { name: "Node.js / Express", level: 75, category: "Backend" },
  { name: "Flask / Django", level: 65, category: "Backend" },
  { name: "Spring Boot", level: 55, category: "Backend" },
  { name: "MongoDB", level: 75, category: "Database" },
  { name: "MySQL / SQL Server", level: 70, category: "Database" },
  { name: "Git / GitHub", level: 80, category: "DevOps & Tools" },
  { name: "Docker", level: 60, category: "DevOps & Tools" },
  { name: "Jenkins (CI/CD)", level: 55, category: "DevOps & Tools" },
  { name: "Linux / Shell Scripting", level: 60, category: "DevOps & Tools" },
  { name: "AWS", level: 50, category: "DevOps & Tools" },
];

const certifications = [
  "Hackfest '24",
  "PyExpo – 3rd place at Advanced level",
  "Introduction to Git and GitHub (Google)",
  "Jenkins for Beginners (KodeKloud)",
  "Testing and Advanced REST with Spring Boot (Packt)",
  "Oracle Cloud Infrastructure 2023 AI Certified Foundations Associate",
];

const categories = Array.from(new Set(skills.map((s) => s.category)));

const Skills = () => {
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gradient-accent">
            Skills & Expertise
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proficiency across modern technologies and frameworks
          </p>
        </motion.div>

        <div className="space-y-8">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + catIndex * 0.1 }}
              className="glass rounded-3xl p-6 md:p-8 space-y-6"
            >
              <h2 className="text-2xl font-heading font-bold text-primary">
                {category}
              </h2>

              <div className="space-y-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + catIndex * 0.1 + index * 0.05 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-primary font-bold">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.5 + catIndex * 0.1 + index * 0.05, duration: 0.8 }}
                        className="origin-left"
                      >
                        <Progress
                          value={skill.level}
                          className="h-2 bg-muted"
                        />
                      </motion.div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="glass rounded-3xl p-8 space-y-6"
        >
          <h2 className="text-2xl font-heading font-bold text-primary flex items-center gap-2">
            <Award className="w-6 h-6" />
            Certifications & Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.05 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/20"
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="glass rounded-3xl p-8 text-center"
        >
          <p className="text-lg text-muted-foreground">
            Soft Skills: Problem-solving, analytical thinking, adaptability to new technologies, 
            teamwork and communication, time management and discipline
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Skills;