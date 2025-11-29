import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Building Immersive 3D Experiences with Three.js",
    excerpt: "Learn how to create stunning 3D visuals for the web using Three.js and React Three Fiber. A comprehensive guide to getting started.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "3D Graphics",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Mastering Framer Motion Animations",
    excerpt: "Deep dive into advanced animation techniques with Framer Motion. Create smooth, performant animations that delight users.",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Animation",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Modern React Patterns in 2024",
    excerpt: "Explore the latest React patterns and best practices. From hooks to server components, stay ahead of the curve.",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "React",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&h=400&fit=crop",
  },
  {
    id: 4,
    title: "TypeScript Tips for Better Code",
    excerpt: "Level up your TypeScript skills with these advanced tips and tricks. Write more maintainable and type-safe code.",
    date: "2023-12-28",
    readTime: "7 min read",
    category: "TypeScript",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=400&fit=crop",
  },
];

const Articles = () => {
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
            Featured Articles
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development
          </p>
        </motion.div>

        <div className="grid gap-6">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="glass rounded-3xl overflow-hidden hover:border-primary/50 transition-all group"
            >
              <div className="grid md:grid-cols-[300px_1fr] gap-6">
                <div className="aspect-video md:aspect-auto overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 md:py-8 md:pr-8 space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(article.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-heading font-bold group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>

                  <p className="text-muted-foreground leading-relaxed">
                    {article.excerpt}
                  </p>

                  <Button
                    variant="ghost"
                    className="text-primary hover:text-primary/80 hover:bg-primary/10 p-0 h-auto font-heading"
                  >
                    Read more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default Articles;
