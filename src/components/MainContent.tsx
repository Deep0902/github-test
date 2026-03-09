'use client'
import { useEffect, useState } from "react";
import ScrollFadeObserver from "./ScrollFadeObserver";
import Pizza from "./Categories/Pizza";
import { Switch } from "@/components/ui/switch"

const MainContent = () => {
    const [activeSection, setActiveSection] = useState<string>("Pizzas");

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -70% 0px",
        threshold: 0.1
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);


  return (
    <>
      <div className="px-[min(5vw,20px)]">
        <nav className="flex items-center gap-8 sticky top-5 z-2 bg-white">
          <span 
            className={`cursor-pointer transition-colors ${activeSection === "Pizzas" ? "text-blue-600 font-semibold" : ""}`}
            onClick={() => scrollToSection("Pizzas")}
          >
            Pizzas
          </span>
          <span 
            className={`cursor-pointer transition-colors ${activeSection === "Starters" ? "text-blue-600 font-semibold" : ""}`}
            onClick={() => scrollToSection("Starters")}
          >
            Starters
          </span>
          <span 
            className={`cursor-pointer transition-colors ${activeSection === "Desserts" ? "text-blue-600 font-semibold" : ""}`}
            onClick={() => scrollToSection("Desserts")}
          >
            Desserts
          </span>
          <span 
            className={`cursor-pointer transition-colors ${activeSection === "Add-Ons" ? "text-blue-600 font-semibold" : ""}`}
            onClick={() => scrollToSection("Add-Ons")}
          >
            Add Ons
          </span>
          <div>
            <Switch />
          </div>
        </nav>
        <main className="flex flex-col gap-4">
          <section className="w-full  border border-gray-300 p-4 scroll-mt-10" id="Pizzas">
            <Pizza/>
          </section>
          <section className="w-full  border border-gray-300 p-4 scroll-mt-10" id="Starters">
            Starters
          </section>
          <section className="w-full  border border-gray-300 p-4 scroll-mt-10" id="Desserts">
            Desserts
          </section>
          <section className="w-full  border border-gray-300 p-4 scroll-mt-10" id="Add-Ons">
            Add-Ons
          </section>
        </main>
      </div>
      <ScrollFadeObserver />
    </>
  );
};

export default MainContent;
