import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Download, FileText, Printer, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Resume = () => {
  const handleDownload = () => {
    toast({
      title: "Download started",
      description: "Your resume is being downloaded...",
    });
  };

  const handleShare = () => {
    toast({
      title: "Link copied",
      description: "Resume link copied to clipboard!",
    });
  };

  const handlePrint = () => {
    window.print();
  };

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

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="glass rounded-3xl p-8 md:p-12 space-y-8"
        >
          {/* Preview Section */}
          <div className="bg-card/50 rounded-2xl p-8 border border-border/50 min-h-[400px] flex items-center justify-center">
            <div className="text-center space-y-4">
              <FileText className="w-24 h-24 text-primary mx-auto" />
              <h3 className="text-2xl font-heading font-bold">Resume Preview</h3>
              <p className="text-muted-foreground">
                Professional resume showcasing skills, experience, and achievements
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
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
                Print
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
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Resume;
