import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

import societyImg from "@/assets/industries/society-maintenance-new.jpg";
import mepImg from "@/assets/industries/mep-services-new.jpg";
import hospitalityImg from "@/assets/industries/hospitality-new.jpg";
import constructionImg from "@/assets/industries/construction-new.jpg";
import hotelsImg from "@/assets/industries/hotels-new.jpg";
import acImg from "@/assets/industries/ac-refrigeration-new.jpg";
import retailImg from "@/assets/industries/retail-malls-new.jpg";
import powerImg from "@/assets/industries/power-plants-new.jpg";
import agricultureImg from "@/assets/industries/agriculture-new.jpg";
import governmentImg from "@/assets/industries/government-new.jpg";
import hypermarketImg from "@/assets/industries/hypermarket-new.jpg";
import manufacturingImg from "@/assets/industries/manufacturing-new.jpg";
import tradingImg from "@/assets/industries/trading-new.jpg";
import financeImg from "@/assets/industries/finance-new.jpg";

const industries = [
  { name: "Society Maintenance", image: societyImg },
  { name: "MEP Services", image: mepImg },
  { name: "Hospitality", image: hospitalityImg },
  { name: "Construction & Infrastructure", image: constructionImg },
  { name: "Hotels", image: hotelsImg },
  { name: "Air Conditioning & Refrigeration", image: acImg },
  { name: "Retail & Malls", image: retailImg },
  { name: "Power Plants", image: powerImg },
  { name: "Agriculture", image: agricultureImg },
  { name: "Government Sector", image: governmentImg },
  { name: "Hypermarket", image: hypermarketImg },
  { name: "Manufacturing", image: manufacturingImg },
  { name: "Trading Companies", image: tradingImg },
  { name: "Account & Finance", image: financeImg },
];

const Industries = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="industries" className="section-padding bg-slate-100" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent">
            Our Reach
          </span>
          <h2 className="heading-lg text-slate-800 mb-6">
            Industries <span className="text-accent">We Serve</span>
          </h2>
          <p className="text-body">
            From construction sites to corporate offices, we deliver excellence
            across diverse sectors.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
            >
              <div className="relative overflow-hidden h-28 md:h-36">
                <img
                  src={industry.image}
                  alt={industry.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Text */}
                <div className="absolute inset-0 flex items-end p-3">
                  <div className="w-full">
                    <h3 className="font-display font-bold text-white text-xs md:text-sm leading-tight">
                      {industry.name}
                    </h3>
                    <div className="h-0.5 w-0 group-hover:w-8 bg-accent transition-all duration-300 mt-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
