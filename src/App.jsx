import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SolutionsCards from "./components/SolutionesCards";
import Portfolio from "./components/Portfolio";
import WorkProcess from "./components/WorkProcess";
import SkillsMarquee from "./components/fixed/SkillsMarquee";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import ScrollTopBtn from "./components/fixed/ScrollTop";
import WhatsAppFab from "./components/fixed/WhatsAppFab";
import ProjectDetail from "./components/ProjectDetail";
import { portfolioProjects } from "./constants/portfolio";
import { getProjectCaseStudy } from "./constants/projectCaseStudies";

function getCurrentPath() {
  const pathname = window.location.pathname;
  return pathname.replace(/\/+$/, "") || "/";
}

export default function App() {
  const [pathname, setPathname] = useState(getCurrentPath);

  useEffect(() => {
    const handleNavigation = () => setPathname(getCurrentPath());
    window.addEventListener("popstate", handleNavigation);
    return () => window.removeEventListener("popstate", handleNavigation);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setPathname(path.replace(/\/+$/, "") || "/");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  if (pathname.startsWith("/proyectos/")) {
    const slug = pathname.split("/").filter(Boolean).at(-1);
    const project = portfolioProjects.find((item) => item.slug === slug);

    return (
      <ProjectDetail
        project={project}
        caseStudy={getProjectCaseStudy(slug)}
        onNavigate={navigate}
      />
    );
  }

  if (pathname === "/proyectos") {
    return (
      <div className="w-full">
        <Navbar />
        <main>
          <Portfolio archive />
        </main>
        <Footer />
        <ScrollTopBtn />
      </div>
    );
  }

  return (
    <>
      <div className="w-full">
        <Navbar />
        <main className="relative z-10 bg-white">
          <Hero />
          <About />
          <SolutionsCards />
          <WorkProcess />
          <SkillsMarquee />
          <Portfolio />
          <Testimonials />
          <Faq />
        </main>
        <Footer />
      </div>
      <ScrollTopBtn />
      <WhatsAppFab
        phone="59174579402"
        message="Hola Gabi, vi tu portfolio y quiero una web."
        position="br"
        showAfter={0}
        autoExpandSectionId="trabajos"
      />
    </>
  );
}
