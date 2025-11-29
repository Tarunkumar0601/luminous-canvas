import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "3D Portfolio Experience",
    description: "An immersive portfolio website featuring Three.js 3D elements, particle effects, and smooth Framer Motion animations. Built with React and modern web technologies.",
    technologies: ["React", "Three.js", "Framer Motion", "TypeScript"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management, secure payments, and admin dashboard. Features responsive design and optimized performance.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 3,
    title: "AI Chat Application",
    description: "Real-time chat application powered by AI with natural language processing, sentiment analysis, and smart replies. Includes voice messages and media sharing.",
    technologies: ["React", "OpenAI", "WebSockets", "Firebase"],
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 4,
    title: "Task Management System",
    description: "Collaborative project management tool with Kanban boards, team collaboration features, and real-time updates. Includes time tracking and reporting.",
    technologies: ["Vue.js", "Express", "MongoDB", "Socket.io"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gradient-primary">
            Featured Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions and creative implementations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass rounded-2xl overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-heading font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  {project.github && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary/30 hover:bg-primary/10"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.github, "_blank");
                      }}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.demo, "_blank");
                      }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl glass">
            <DialogHeader>
              <DialogTitle className="text-3xl font-heading">
                {selectedProject?.title}
              </DialogTitle>
              <DialogDescription className="text-base pt-4 space-y-4">
                <p>{selectedProject?.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {selectedProject?.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  {selectedProject?.github && (
                    <Button
                      className="bg-primary hover:bg-primary/90"
                      onClick={() => window.open(selectedProject.github, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  )}
                  {selectedProject?.demo && (
                    <Button
                      variant="outline"
                      onClick={() => window.open(selectedProject.demo, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </PageTransition>
  );
};

export default Projects;
