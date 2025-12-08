import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, url: "https://github.com/JOKER1711790", label: "GitHub" },
  { icon: Linkedin, url: "https://www.linkedin.com/in/tarun-kumar-s-a-56369b384/", label: "LinkedIn" },
  { icon: Mail, url: "mailto:sa.tarunkumar31@gmail.com", label: "Email" },
];

const SocialLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      className="fixed left-6 bottom-6 z-40 hidden lg:flex flex-col gap-4"
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 + index * 0.1 }}
          whileHover={{ scale: 1.2, x: 5 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all group"
          aria-label={social.label}
        >
          <social.icon className="w-5 h-5" />
        </motion.a>
      ))}
      
      <div className="w-0.5 h-20 bg-gradient-to-b from-primary to-transparent mx-auto mt-2" />
    </motion.div>
  );
};

export default SocialLinks;