import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Code, Palette, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Building robust applications with modern frameworks and best practices",
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Crafting visually stunning interfaces that captivate and engage users",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge technologies and 3D experiences",
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
            Passionate developer crafting the future of web experiences
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass rounded-3xl p-8 md:p-12 space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold">
            Hello, I'm a <span className="text-primary">Creative Developer</span>
          </h2>
          
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              With a passion for creating immersive digital experiences, I specialize in
              building modern web applications that combine stunning visuals with seamless
              functionality. My expertise spans across full-stack development, 3D graphics,
              and interactive animations.
            </p>
            
            <p>
              I believe in the power of technology to transform ideas into reality. Whether
              it's developing complex web applications, crafting beautiful user interfaces,
              or experimenting with the latest frameworks, I'm always eager to push the
              boundaries of what's possible on the web.
            </p>
            
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing
              to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
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
      </div>
    </PageTransition>
  );
};

export default About;
