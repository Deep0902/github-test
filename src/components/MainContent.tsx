"use client";
import { Switch } from "@/components/ui/switch";
import { useNonVegToggle } from "@/context/nonVegToggle";
import { useEffect, useState } from "react";
import AddOns from "./Categories/AddOns";
import Desserts from "./Categories/Desserts";
import Pizza from "./Categories/Pizza";
import ScrollFadeObserver from "./ScrollFadeObserver";
import Starters from "./Categories/Starters";

const MainContent = () => {
  const [activeSection, setActiveSection] = useState("Pizzas");
  const { toggle, toggleMode } = useNonVegToggle();

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
        threshold: 0.1,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <div className="px-[min(5vw,20px)] my-2">
        <nav className="flex items-center gap-8 sticky top-0 z-2 bg-white/30 backdrop-blur-lg">
          <div className="flex-1 flex items-center gap-8 overflow-x-auto whitespace-nowrap py-2">
            <span
              className={`cursor-pointer text-xl transition-all pb-2 ${activeSection === "Pizzas" ? "text-gray-800 font-bold border-b-2 border-gray-600" : "border-b-2 border-transparent font-normal"}`}
              onClick={() => scrollToSection("Pizzas")}
            >
              Pizzas
            </span>
            <span
              className={`cursor-pointer text-xl transition-all pb-2 ${activeSection === "Starters" ? "text-gray-800 font-bold border-b-2 border-gray-600" : "border-b-2 border-transparent font-normal"}`}
              onClick={() => scrollToSection("Starters")}
            >
              Starters
            </span>
            <span
              className={`cursor-pointer text-xl transition-all pb-2 ${activeSection === "Desserts" ? "text-gray-800 font-bold border-b-2 border-gray-600" : "border-b-2 border-transparent font-normal"}`}
              onClick={() => scrollToSection("Desserts")}
            >
              Desserts
            </span>
            <span
              className={`cursor-pointer text-xl transition-all pb-2 ${activeSection === "Add-Ons" ? "text-gray-800 font-bold border-b-2 border-gray-600" : "border-b-2 border-transparent font-normal"}`}
              onClick={() => scrollToSection("Add-Ons")}
            >
              Add Ons
            </span>
          </div>
          <div className="flex items-center justify-start gap-2 h-full">
            <Switch checked={toggle} onCheckedChange={toggleMode} />
            <span className="text-xl font-semibold text-gray-600">
              Veg mode
            </span>
          </div>
        </nav>
        <main className="flex flex-col gap-6 py-4">
          <section
            className="w-full scroll-mt-15 rounded-4xl overflow-hidden"
            id="Pizzas"
          >
            <Pizza />
          </section>
          <section
            className="w-full scroll-mt-15 rounded-4xl overflow-hidden"
            id="Starters"
          >
            <Starters />
          </section>
          <section
            className="w-full scroll-mt-15 rounded-4xl overflow-hidden"
            id="Desserts"
          >
            <Desserts />
          </section>
          <section
            className="w-full scroll-mt-15 rounded-4xl overflow-hidden"
            id="Add-Ons"
          >
            <AddOns />
          </section>
        </main>
      </div>
      <ScrollFadeObserver />
    </>
  );
};

export default MainContent;
