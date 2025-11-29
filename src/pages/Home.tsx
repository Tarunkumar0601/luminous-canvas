import PageTransition from "@/components/PageTransition";
import Hero3D from "@/components/Hero3D";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-sm font-medium text-primary tracking-wider uppercase"
            >
              Welcome to my digital space
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-5xl md:text-7xl font-heading font-bold leading-tight"
            >
              Creative
              <br />
              <span className="text-gradient-primary">Developer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Crafting immersive digital experiences with cutting-edge technologies.
              Specializing in 3D visuals, interactive animations, and modern web development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={() => navigate("/projects")}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan font-heading"
              >
                View Projects
              </Button>
              <Button
                onClick={() => navigate("/contact")}
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 font-heading"
              >
                Get in Touch
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="pt-8"
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-sm">Scroll to explore</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full" />
            <Hero3D />
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;
