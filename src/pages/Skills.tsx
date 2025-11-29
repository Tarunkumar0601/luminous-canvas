import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: "React / Next.js", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "Three.js / WebGL", level: 85, category: "3D Graphics" },
  { name: "Framer Motion", level: 90, category: "Animation" },
  { name: "Node.js / Express", level: 85, category: "Backend" },
  { name: "PostgreSQL / MongoDB", level: 80, category: "Database" },
  { name: "Docker / CI/CD", level: 75, category: "DevOps" },
  { name: "Tailwind CSS", level: 95, category: "Styling" },
  { name: "REST / GraphQL", level: 85, category: "APIs" },
  { name: "Git / GitHub", level: 90, category: "Tools" },
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="glass rounded-3xl p-8 text-center"
        >
          <p className="text-lg text-muted-foreground">
            Always learning and exploring new technologies to stay at the
            forefront of web development
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Skills;
