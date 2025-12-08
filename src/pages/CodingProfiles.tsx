import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { ExternalLink, Code, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Profile {
  platform: string;
  username: string;
  description: string;
  url: string;
  color: string;
  icon: string;
}

const profiles: Profile[] = [
  {
    platform: "LeetCode",
    username: "tarunkumar",
    description: "Practicing data structures and algorithms",
    url: "https://leetcode.com",
    color: "from-orange-500 to-yellow-500",
    icon: "L",
  },
  {
    platform: "HackerRank",
    username: "tarunkumar",
    description: "Problem solving and skill certifications",
    url: "https://hackerrank.com",
    color: "from-green-500 to-emerald-500",
    icon: "HR",
  },
  {
    platform: "GitHub",
    username: "JOKER1711790",
    description: "Open source projects and contributions",
    url: "https://github.com/JOKER1711790",
    color: "from-gray-600 to-gray-800",
    icon: "GH",
  },
];

const achievements = [
  {
    title: "Hackfest '24",
    description: "Participated in hackathon competition",
    icon: "🏆",
  },
  {
    title: "PyExpo – 3rd Place",
    description: "Advanced level Python competition",
    icon: "🥉",
  },
  {
    title: "Oracle Cloud AI Certified",
    description: "OCI 2023 AI Foundations Associate",
    icon: "☁️",
  },
];

const CodingProfiles = () => {
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gradient-primary">
            Coding Profiles
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Problem-solving journey and competitive programming
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.platform}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass rounded-3xl p-8 space-y-6 group"
            >
              {/* Platform Header */}
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${profile.color} flex items-center justify-center text-2xl font-heading font-bold text-white shadow-lg`}>
                  {profile.icon}
                </div>
                <div>
                  <h2 className="text-xl font-heading font-bold group-hover:text-primary transition-colors">
                    {profile.platform}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    @{profile.username}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground">
                {profile.description}
              </p>

              {/* Action Button */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={() => window.open(profile.url, "_blank")}
                  className="w-full bg-primary hover:bg-primary/90 font-heading"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Profile
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass rounded-3xl p-8 space-y-6"
        >
          <h2 className="text-2xl font-heading font-bold text-primary flex items-center gap-2">
            <Award className="w-6 h-6" />
            Achievements & Competitions
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="p-4 rounded-xl bg-primary/5 border border-primary/20 flex items-start gap-3"
              >
                <span className="text-2xl">{achievement.icon}</span>
                <div>
                  <h3 className="font-heading font-bold">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="glass rounded-3xl p-8 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code className="w-6 h-6 text-primary" />
            <span className="text-lg font-heading font-bold">Continuous Learning</span>
          </div>
          <p className="text-lg text-muted-foreground">
            Passionate about problem-solving and algorithmic challenges. Actively
            participating in coding competitions and continuously improving skills
            in data structures, algorithms, and system design.
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default CodingProfiles;