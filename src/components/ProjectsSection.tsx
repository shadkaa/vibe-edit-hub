import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Play } from "lucide-react";

export const projects = [
  {
    id: "restaurant-smm",
    title: "RESTAURANT SMM",
    category: "Social Media",
    client: "Local Restaurant",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600",
    color: "bg-primary",
    description: "Social media growth for local restaurants — increased footfall and online orders through strategic content.",
  },
  {
    id: "viral-reels-retail",
    title: "VIRAL REELS",
    category: "Reels & Shorts",
    client: "Retail Business",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600",
    color: "bg-secondary",
    description: "Viral reels for retail businesses that boosted brand visibility and engagement across Instagram.",
  },
  {
    id: "product-launch",
    title: "PRODUCT LAUNCH",
    category: "Campaign",
    client: "Kozhikode Startup",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600",
    color: "bg-accent",
    description: "Product launch campaigns for Kozhikode startups — from teaser content to full-scale rollout.",
  },
  {
    id: "influencer-reels",
    title: "WEEKLY REELS",
    category: "Content Creation",
    client: "Local Influencer",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600",
    color: "bg-primary",
    description: "Weekly reel content for local influencers — consistent, high-quality video editing on schedule.",
  },
  {
    id: "brand-awareness",
    title: "BRAND ADS",
    category: "Advertising",
    client: "Kerala Business",
    thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600",
    color: "bg-secondary",
    description: "Brand awareness ad campaigns for Kerala businesses that generated quality leads and local reach.",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/project/${project.id}`}>
        <div className="brutal-card group cursor-pointer overflow-hidden">
          <div className="relative aspect-video overflow-hidden">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-300 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                className="w-16 h-16 bg-primary border-4 border-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Play size={28} fill="currentColor" className="ml-1" />
              </motion.div>
            </div>

            {/* Category tag */}
            <div className={`absolute top-4 left-4 ${project.color} border-4 border-foreground px-3 py-1`}>
              <span className="text-sm font-bold uppercase">{project.category}</span>
            </div>
          </div>

          <div className="p-6 flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
              <p className="text-muted-foreground">{project.client}</p>
            </div>
            <div className={`${project.color} w-10 h-10 border-4 border-foreground flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform`}>
              <ArrowUpRight size={20} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <span className="brutal-button bg-accent text-accent-foreground text-sm inline-block mb-6">
              ✦ SELECTED WORK
            </span>
            <h2 className="text-4xl md:text-6xl font-bold">
              PROJECTS THAT
              <span className="block bg-secondary inline-block px-4 mt-2 border-4 border-foreground shadow-brutal text-secondary-foreground">
                DELIVERED RESULTS
              </span>
            </h2>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-md mt-6 md:mt-0"
          >
            Projects that delivered results for local brands across Kozhikode and Kerala.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
