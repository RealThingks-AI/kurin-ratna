import { Helmet } from "react-helmet-async";
import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StructuredData from "@/components/StructuredData";
import { SectionSkeleton } from "@/components/ui/section-skeleton";

// Lazy load below-fold components
const About = lazy(() => import("@/components/About"));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const Services = lazy(() => import("@/components/Services"));
const Process = lazy(() => import("@/components/Process"));
const Industries = lazy(() => import("@/components/Industries"));
const Clients = lazy(() => import("@/components/Clients"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));
const FloatingButtons = lazy(() => import("@/components/FloatingButtons"));

const Index = () => {
  return (
    <>
      <StructuredData />
      <Helmet>
        <title>Kurin Hygienic – Premium Manpower & Facility Management Solutions</title>
        <meta
          name="description"
          content="Kurin Hygienic provides 24x7 quality manpower and facility management services. Staff outsourcing, housekeeping, security, and MEP services in Pune."
        />
        <meta
          name="keywords"
          content="manpower solutions, facility management, housekeeping, security services, Pune, staff outsourcing"
        />
        <link rel="canonical" href="https://kurinhygienic.com" />
      </Helmet>

      <main className="relative">
        <Navigation />
        <Hero />
        
        <Suspense fallback={<SectionSkeleton type="content" />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton type="grid" />}>
          <WhyChooseUs />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton type="grid" />}>
          <Services />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton type="content" />}>
          <Process />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton type="grid" />}>
          <Industries />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton type="carousel" />}>
          <Clients />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton type="carousel" />}>
          <Testimonials />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton type="grid" />}>
          <FAQ />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton type="form" />}>
          <Contact />
        </Suspense>
        
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        
        <Suspense fallback={null}>
          <FloatingButtons />
        </Suspense>
      </main>
    </>
  );
};

export default Index;
