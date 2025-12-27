import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Megaphone,
  Search,
  UserPlus,
  FileText,
  ShieldCheck,
  Phone,
  Filter,
  Video,
  Award,
  GraduationCap,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const steps = [
  { icon: Megaphone, title: "Advertise the Position", description: "Wide-reaching recruitment campaigns", color: "from-blue-500 to-cyan-400" },
  { icon: Search, title: "Identify Hiring Needs", description: "Understanding client requirements", color: "from-violet-500 to-purple-400" },
  { icon: UserPlus, title: "Recruit the Position", description: "Sourcing qualified candidates", color: "from-pink-500 to-rose-400" },
  { icon: FileText, title: "Review Applications", description: "Thorough application screening", color: "from-amber-500 to-yellow-400" },
  { icon: ShieldCheck, title: "Background Check", description: "Comprehensive verification", color: "from-emerald-500 to-green-400" },
  { icon: Phone, title: "Phone Interview", description: "Initial screening calls", color: "from-sky-500 to-blue-400" },
  { icon: Filter, title: "Screening & Shortlisting", description: "Selecting top candidates", color: "from-indigo-500 to-violet-400" },
  { icon: Video, title: "Interviews", description: "Virtual or offline interviews", color: "from-fuchsia-500 to-pink-400" },
  { icon: Award, title: "Evaluation & Offer", description: "Final assessment and offer", color: "from-orange-500 to-amber-400" },
  { icon: GraduationCap, title: "Induction", description: "Onboarding new employees", color: "from-teal-500 to-emerald-400" },
];

// Floating particles component
const FloatingParticles = ({ isActive }: { isActive: boolean }) => (
  <AnimatePresence>
    {isActive && (
      <>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-accent rounded-full"
            initial={{ 
              opacity: 0, 
              scale: 0,
              x: 0,
              y: 0,
            }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              x: [0, (Math.random() - 0.5) * 80],
              y: [0, (Math.random() - 0.5) * 80],
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 1,
              delay: i * 0.1,
              ease: "easeOut"
            }}
            style={{
              left: '50%',
              top: '50%',
            }}
          />
        ))}
      </>
    )}
  </AnimatePresence>
);

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeStep, setActiveStep] = useState(-1);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (isInView && !animationComplete) {
      const startDelay = setTimeout(() => {
        let currentStep = 0;
        const interval = setInterval(() => {
          setActiveStep(currentStep);
          currentStep++;
          if (currentStep >= steps.length) {
            clearInterval(interval);
            setAnimationComplete(true);
          }
        }, 300);

        return () => clearInterval(interval);
      }, 400);

      return () => clearTimeout(startDelay);
    }
  }, [isInView, animationComplete]);

  return (
    <section id="process" className="py-20 md:py-28 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full bg-accent/20 text-accent border border-accent/30 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4" />
            Quality Assurance Process
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="heading-lg text-white mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-400 to-pink-400">10-Step</span> Recruiting Process
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-white/60"
          >
            A rigorous process ensuring you get only the best qualified and verified professionals
          </motion.p>
        </motion.div>

        {/* Desktop - Hexagonal Grid Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-5 gap-6 mb-8">
            {steps.slice(0, 5).map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
                className="relative group perspective-1000"
              >
                <motion.div
                  className={`relative p-6 rounded-2xl border backdrop-blur-sm transition-all duration-500 cursor-pointer overflow-hidden ${
                    activeStep >= index
                      ? "bg-white/10 border-white/20"
                      : "bg-white/5 border-white/10"
                  }`}
                  animate={{
                    rotateY: hoveredStep === index ? 5 : 0,
                    rotateX: hoveredStep === index ? -5 : 0,
                    scale: hoveredStep === index ? 1.05 : 1,
                    z: hoveredStep === index ? 50 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                  />

                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    animate={activeStep === index ? {
                      boxShadow: [
                        "0 0 20px rgba(var(--accent), 0)",
                        "0 0 40px rgba(var(--accent), 0.3)",
                        "0 0 20px rgba(var(--accent), 0.1)",
                      ]
                    } : {}}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Floating particles */}
                  <FloatingParticles isActive={activeStep === index} />

                  {/* Step number with ring */}
                  <div className="relative mb-4">
                    <motion.div
                      className={`absolute inset-0 rounded-full ${
                        activeStep >= index ? "bg-accent/20" : "bg-white/5"
                      }`}
                      animate={activeStep === index ? { scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] } : {}}
                      transition={{ duration: 1, repeat: activeStep === index ? Infinity : 0 }}
                    />
                    <motion.div
                      className={`relative w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg z-10 transition-all duration-300 ${
                        activeStep >= index
                          ? "bg-gradient-to-br from-accent to-purple-500 text-white shadow-lg shadow-accent/30"
                          : "bg-white/10 text-white/40"
                      }`}
                      animate={activeStep === index ? { 
                        scale: [1, 1.2, 1.1],
                        rotate: [0, 10, -10, 0]
                      } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {activeStep > index ? (
                        <CheckCircle2 className="w-6 h-6" />
                      ) : (
                        index + 1
                      )}
                    </motion.div>
                  </div>

                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                      activeStep >= index
                        ? `bg-gradient-to-br ${step.color} shadow-lg`
                        : "bg-white/10"
                    }`}
                    animate={hoveredStep === index ? { 
                      rotate: [0, -5, 5, 0],
                      scale: 1.1
                    } : {}}
                    transition={{ duration: 0.4 }}
                  >
                    <step.icon
                      className={`w-8 h-8 transition-colors duration-300 ${
                        activeStep >= index ? "text-white" : "text-white/40"
                      }`}
                    />
                  </motion.div>

                  {/* Text */}
                  <motion.h3
                    className={`font-display font-bold text-sm mb-2 transition-colors duration-300 ${
                      activeStep >= index ? "text-white" : "text-white/50"
                    }`}
                  >
                    {step.title}
                  </motion.h3>
                  <p
                    className={`text-xs leading-relaxed transition-colors duration-300 ${
                      activeStep >= index ? "text-white/70" : "text-white/30"
                    }`}
                  >
                    {step.description}
                  </p>

                  {/* Connection line */}
                  {index < 4 && (
                    <motion.div
                      className="absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent to-transparent"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: activeStep > index ? 1 : 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    />
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Connector with animated arrow */}
          <motion.div
            className="flex justify-center my-8"
            initial={{ opacity: 0 }}
            animate={activeStep >= 4 ? { opacity: 1 } : { opacity: 0.3 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="flex flex-col items-center gap-2"
              animate={activeStep >= 4 ? { y: [0, 5, 0] } : {}}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center">
                <motion.svg 
                  className="w-6 h-6 text-accent" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </motion.svg>
              </div>
            </motion.div>
          </motion.div>

          {/* Second Row */}
          <div className="grid grid-cols-5 gap-6">
            {steps.slice(5, 10).map((step, index) => {
              const actualIndex = index + 5;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50, rotateX: -15 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                  onMouseEnter={() => setHoveredStep(actualIndex)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className="relative group perspective-1000"
                >
                  <motion.div
                    className={`relative p-6 rounded-2xl border backdrop-blur-sm transition-all duration-500 cursor-pointer overflow-hidden ${
                      activeStep >= actualIndex
                        ? "bg-white/10 border-white/20"
                        : "bg-white/5 border-white/10"
                    }`}
                    animate={{
                      rotateY: hoveredStep === actualIndex ? 5 : 0,
                      rotateX: hoveredStep === actualIndex ? -5 : 0,
                      scale: hoveredStep === actualIndex ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Gradient overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                    />

                    <FloatingParticles isActive={activeStep === actualIndex} />

                    {/* Step number */}
                    <div className="relative mb-4">
                      <motion.div
                        className={`absolute inset-0 rounded-full ${
                          activeStep >= actualIndex ? "bg-accent/20" : "bg-white/5"
                        }`}
                        animate={activeStep === actualIndex ? { scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] } : {}}
                        transition={{ duration: 1, repeat: activeStep === actualIndex ? Infinity : 0 }}
                      />
                      <motion.div
                        className={`relative w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg z-10 transition-all duration-300 ${
                          activeStep >= actualIndex
                            ? "bg-gradient-to-br from-accent to-purple-500 text-white shadow-lg shadow-accent/30"
                            : "bg-white/10 text-white/40"
                        }`}
                        animate={activeStep === actualIndex ? { 
                          scale: [1, 1.2, 1.1],
                          rotate: [0, 10, -10, 0]
                        } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        {activeStep > actualIndex ? (
                          <CheckCircle2 className="w-6 h-6" />
                        ) : (
                          actualIndex + 1
                        )}
                      </motion.div>
                    </div>

                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                        activeStep >= actualIndex
                          ? `bg-gradient-to-br ${step.color} shadow-lg`
                          : "bg-white/10"
                      }`}
                      animate={hoveredStep === actualIndex ? { 
                        rotate: [0, -5, 5, 0],
                        scale: 1.1
                      } : {}}
                      transition={{ duration: 0.4 }}
                    >
                      <step.icon
                        className={`w-8 h-8 transition-colors duration-300 ${
                          activeStep >= actualIndex ? "text-white" : "text-white/40"
                        }`}
                      />
                    </motion.div>

                    {/* Text */}
                    <motion.h3
                      className={`font-display font-bold text-sm mb-2 transition-colors duration-300 ${
                        activeStep >= actualIndex ? "text-white" : "text-white/50"
                      }`}
                    >
                      {step.title}
                    </motion.h3>
                    <p
                      className={`text-xs leading-relaxed transition-colors duration-300 ${
                        activeStep >= actualIndex ? "text-white/70" : "text-white/30"
                      }`}
                    >
                      {step.description}
                    </p>

                    {/* Connection line */}
                    {index < 4 && (
                      <motion.div
                        className="absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent to-transparent"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: activeStep > actualIndex ? 1 : 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      />
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Completion badge */}
          <AnimatePresence>
            {animationComplete && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="flex justify-center mt-12"
              >
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-accent/20 to-purple-500/20 border border-accent/30 backdrop-blur-sm">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-white font-medium">All steps complete - Ready to deliver excellence</span>
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile - Vertical Timeline */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Animated vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="w-full bg-gradient-to-b from-accent via-purple-500 to-pink-500 rounded-full"
                initial={{ height: 0 }}
                animate={{ height: activeStep >= 0 ? `${((activeStep + 1) / steps.length) * 100}%` : 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative flex gap-4 items-start pl-2"
                >
                  {/* Step circle */}
                  <motion.div
                    className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      activeStep >= index
                        ? `bg-gradient-to-br ${step.color} shadow-lg`
                        : "bg-white/10 border border-white/20"
                    }`}
                    animate={activeStep === index ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {activeStep > index ? (
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    ) : (
                      <step.icon className={`w-5 h-5 ${activeStep >= index ? "text-white" : "text-white/40"}`} />
                    )}
                  </motion.div>

                  {/* Content card */}
                  <motion.div
                    className={`flex-1 p-4 rounded-xl border backdrop-blur-sm transition-all duration-300 ${
                      activeStep >= index
                        ? "bg-white/10 border-white/20"
                        : "bg-white/5 border-white/10"
                    }`}
                    animate={activeStep === index ? { x: [0, 5, 0] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        activeStep >= index
                          ? "bg-accent/20 text-accent"
                          : "bg-white/10 text-white/40"
                      }`}>
                        Step {index + 1}
                      </span>
                    </div>
                    <h3 className={`font-display font-bold mb-1 transition-colors ${
                      activeStep >= index ? "text-white" : "text-white/50"
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm transition-colors ${
                      activeStep >= index ? "text-white/70" : "text-white/30"
                    }`}>
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;