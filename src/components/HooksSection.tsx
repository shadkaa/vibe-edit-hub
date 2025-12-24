import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Target, Sparkles, TrendingUp } from "lucide-react";

const hooks = [
  {
    icon: Zap,
    title: "SMM MASTERY",
    subtitle: "Social Media Management",
    description: "Dominate Instagram, Facebook, YouTube & more. Strategic content that builds communities and drives engagement.",
    color: "bg-primary",
  },
  {
    icon: Target,
    title: "TARGETED ADS",
    subtitle: "ROI-Driven Campaigns",
    description: "Every rupee counts. Our data-driven ad campaigns deliver real results and measurable growth.",
    color: "bg-secondary",
  },
  {
    icon: Sparkles,
    title: "PRO VIDEOGRAPHY",
    subtitle: "Cinematic Excellence",
    description: "From product shoots to brand films, we capture moments that tell your story beautifully.",
    color: "bg-accent",
  },
  {
    icon: TrendingUp,
    title: "BRAND GROWTH",
    subtitle: "Full-Stack Marketing",
    description: "SEO, content strategy, influencer collabs - everything your brand needs to scale.",
    color: "bg-primary",
  },
];

const HookCard = ({ hook, index }: { hook: typeof hooks[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -3 : 3 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: index % 2 === 0 ? -2 : 2 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ rotate: 0, scale: 1.02 }}
      className="brutal-card p-6 md:p-8"
    >
      <div className={`${hook.color} w-16 h-16 border-4 border-foreground flex items-center justify-center mb-6 shadow-brutal-sm`}>
        <hook.icon size={32} className="text-foreground" />
      </div>
      
      <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
        {hook.subtitle}
      </span>
      
      <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
        {hook.title}
      </h3>
      
      <p className="text-muted-foreground text-lg">
        {hook.description}
      </p>
    </motion.div>
  );
};

const HooksSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="hooks" className="py-24 bg-muted relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 text-8xl font-bold text-foreground/5 select-none">
        WHY
      </div>
      <div className="absolute bottom-10 left-10 text-8xl font-bold text-foreground/5 select-none">
        US?
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="brutal-button bg-secondary text-secondary-foreground text-sm inline-block mb-6">
            ✦ WHAT WE DO
          </span>
          <h2 className="text-4xl md:text-6xl font-bold">
            NOT YOUR AVERAGE
            <span className="block bg-primary inline-block px-4 mt-2 border-4 border-foreground shadow-brutal">
              AGENCY
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {hooks.map((hook, index) => (
            <HookCard key={hook.title} hook={hook} index={index} />
          ))}
        </div>

        {/* Animated marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden border-y-4 border-foreground bg-foreground py-4"
        >
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-2xl font-bold text-background">
                SMM EXPERT ✦ VIDEOGRAPHY ✦ DIGITAL MARKETING ✦ KOZHIKODE ✦
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HooksSection;
