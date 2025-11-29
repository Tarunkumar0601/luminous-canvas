import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { ExternalLink, Trophy, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Profile {
  platform: string;
  username: string;
  rating: string;
  rank: string;
  problemsSolved: string;
  url: string;
  color: string;
  icon: string;
}

const profiles: Profile[] = [
  {
    platform: "LeetCode",
    username: "codeMaster",
    rating: "2450",
    rank: "Knight",
    problemsSolved: "850+",
    url: "https://leetcode.com",
    color: "from-orange-500 to-yellow-500",
    icon: "L",
  },
  {
    platform: "Codeforces",
    username: "competitive_dev",
    rating: "1850",
    rank: "Expert",
    problemsSolved: "500+",
    url: "https://codeforces.com",
    color: "from-blue-500 to-cyan-500",
    icon: "CF",
  },
  {
    platform: "HackerRank",
    username: "devExpert",
    rating: "Gold",
    rank: "5 Star",
    problemsSolved: "650+",
    url: "https://hackerrank.com",
    color: "from-green-500 to-emerald-500",
    icon: "HR",
  },
  {
    platform: "CodeChef",
    username: "chefCoder",
    rating: "1920",
    rank: "4 Star",
    problemsSolved: "400+",
    url: "https://codechef.com",
    color: "from-purple-500 to-pink-500",
    icon: "CC",
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
            Competitive programming achievements across platforms
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
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
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${profile.color} flex items-center justify-center text-2xl font-heading font-bold text-white shadow-lg`}>
                    {profile.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-heading font-bold group-hover:text-primary transition-colors">
                      {profile.platform}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      @{profile.username}
                    </p>
                  </div>
                </div>
                <Trophy className="w-8 h-8 text-primary animate-pulse-glow" />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Star className="w-4 h-4" />
                    <span>Rating</span>
                  </div>
                  <p className="text-xl font-heading font-bold text-primary">
                    {profile.rating}
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>Rank</span>
                  </div>
                  <p className="text-xl font-heading font-bold text-secondary">
                    {profile.rank}
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Trophy className="w-4 h-4" />
                    <span>Solved</span>
                  </div>
                  <p className="text-xl font-heading font-bold text-accent">
                    {profile.problemsSolved}
                  </p>
                </div>
              </div>

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="glass rounded-3xl p-8 text-center"
        >
          <p className="text-lg text-muted-foreground">
            Passionate about problem-solving and algorithmic challenges. Actively
            participating in competitive programming contests and continuously
            improving coding skills.
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default CodingProfiles;
