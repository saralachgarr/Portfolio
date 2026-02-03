import { Award, BriefcaseBusiness, GraduationCap } from "lucide-react";
import React, { useState, useRef, useLayoutEffect } from "react";
import { useTheme } from "./theme-provider";
import FadeContent from "./flowBits/FadeContent";
import SplitText from "./flowBits/SplitText";

export const Experience = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("education");
  const tabsRef = useRef([]);
  const [underlineStyle, setUnderlineStyle] = useState({});

  useLayoutEffect(() => {
    const updateUnderline = () => {
      const activeIndex = activeTab === "education" ? 0 : 1;
      const currentTab = tabsRef.current[activeIndex];
      if (currentTab) {
        setUnderlineStyle({
          left: currentTab.offsetLeft,
          width: currentTab.offsetWidth,
        });
      }
    };
    updateUnderline();
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [activeTab]);

  // Education Data
  const educationWithPosition = [
    {
      id: 1,
      title: "Licence Professionnelle en Génie Logiciel",
      institution: "ESTEM, Casablanca",
      location: "Casablanca, Maroc",
      period: "2025-en cours",
      description: "Licence professionnelle orientée développement web et logiciel, acquisition de compétences en programmation, bases de données et conception de projets.",
      position: "right",
    },
    {
      id: 2,
      title: "Diplôme Technicien Spécialisé en Développement Full Stack",
      institution: "Institut Spécialisé Formation Offshoring",
      location: "Casablanca, Maroc",
      period: "2023-2025",
      description: "Formation en développement full stack incluant HTML, CSS, JavaScript, PHP, MySQL et frameworks modernes.",
      position: "left",
    },
      {
      id: 3,
      title: "Science de la matière physique chimie",
    institution: "Faculté Des Sciences Aïn Chock",
    location: "Casablanca, Maroc",
    period: "2022 – 2023",
    description: "",
      position: "right",
    },
    {
      id: 4,
      title: "Baccalauréat Sciences Physique",
      institution: "Lycée Abdelmalek Essaadi",
      location: "Casablanca, Maroc",
      period: "2021-2022",
      description: "",
      position: "left",
    },
  ];

  // Professional Experience Data
  const experienceWithPosition = [

    {
      id: 1,
      title: "Mini-projet – Développement Web",
      institution: "PRAGMATIC Consulting",
      location: "Casablanca, Maroc",
      period: "05/11/2025 – 26/12/2025",
      description: "Application web pour gérer et suivre les tâches.\nGestion des utilisateurs et des rôles avec accès sécurisé.\nSuivi de l'avancement des tâches (à faire, en cours, terminées).\nTableau de bord interactif pour visualiser les tâches et priorités.\nTechnologies : MongoDB, Express.js, React, Node.js (MERN stack).",
      position: "left",
      type: "work",
    },
        {
      id: 2,
      title: "Stage PFE – Développement Web",
      institution: "Miage, Casablanca",
      location: "Casablanca, Maroc",
      period: "Mars 2025",
      description: "Développement d'une application web de gestion des diplômes.\nConception du système à l'aide de diagrammes UML.\nDéveloppement en PHP natif et MySQL.\nCréation d'une interface Administrateur (CRUD, statistiques).\nDéveloppement d'une interface Recruteur (vérification des diplômes).\nSécurisation des accès et des données.",
      position: "right",
      type: "work",
    },
    {
      id: 3,
      title: "Stage en Développement Web",
      institution: "CABINET PARTNET",
      location: "Casablanca, Maroc",
      period: "Juillet 2024",
      description: "Développement front-end d'un site web responsive en HTML, CSS et JavaScript.\nGestion back-end des utilisateurs et des données avec PHP et MySQL.\nCréation de formulaires interactifs avec validation côté client (JS) et serveur (PHP).",
      position: "left",
      type: "work",
    },
    {
      id: 4,
      title: "TravelEase – Projet académique",
      institution: "Plateforme de réservation de voyages",
      location: "",
      period: "2023 – en cours",
      description: "Site de réservation d'hôtels, vols et voitures.\nRecherche avancée et filtres par catégories.\nInterface moderne et responsive.\nSystème de réservation et gestion des données via MySQL.",
      position: "right",
      type: "work",
    },
  ];

  const renderExperienceIcon = (type) => {
    switch (type) {
      case "award":
        return <Award className="stroke-gray-500 w-5 h-5" />;
      case "work":
      default:
        return <BriefcaseBusiness className="stroke-gray-500 w-5 h-5" />;
    }
  };

  const TimelineItem = ({ item }) => (
    <div
      className={`flex flex-col sm:flex-row w-full mb-8 relative ${
        item.position === "right" ? "sm:justify-end max-md:justify-start!" : "max-md:justify-start!"
      }`}
    >
      <div className="absolute sm:left-1/2 left-0 sm:-translate-x-1/2 max-md:left-0! max-sm:-left-[15px]! max-md:justify-start! top-0 sm:top-auto z-10 flex justify-center items-center w-full sm:w-auto mb-2 sm:mb-0">
        <span className="flex shrink-0 justify-center items-center w-8 h-8 border shadow-sm bg-[var(--soft-gray)] border-[var(--soft-gray)] text-sm font-semibold uppercase rounded-full">
          {activeTab === "education" ? (
            <GraduationCap className="stroke-[var(--icons-color-2)] w-5 h-5" />
          ) : (
            renderExperienceIcon(item.type)
          )}
        </span>
      </div>

      <div
        className={`w-full sm:w-1/2 max-md:w-full! max-sm:hidden ${
          item.position === "right" ? "sm:pl-8 sm:pr-0 max-sm:pl-8" : "sm:pr-8 sm:pl-0 max-md:pl-8! max-md:pr-0!"
        } mt-6 sm:mt-0 text-start max-sm:mt-0 sm:text-${item.position === "right" ? "left" : "right"}`}
      >
        <FadeContent blur={true} duration={1100} easing="ease-out" delay={300} initialOpacity={0}>
          <div className={`p-4 rounded-lg shadow-sm flex flex-col gap-1 border-l-[5px] border-l-green-600 ${theme === "light" ? "bg-gray-100" : "bg-[#575555]"}`}>
            <h3 className={`font-semibold ${theme === "light" ? "text-gray-800" : "text-white"}`}>{item.title}</h3>
            <p className={`text-sm ${theme === "light" ? "text-gray-600" : "text-white"}`}>{item.institution}</p>
            {item.location && <p className={`text-sm ${theme === "light" ? "text-gray-600" : "text-white"}`}>{item.location}</p>}
            <p className={`text-sm ${theme === "light" ? "text-gray-600" : "text-white"}`}>{item.period}</p>
            {item.description && (
              <div className={`text-sm mt-1 text-wrap break-words text-justify leading-[1.35] ${theme === "light" ? "text-gray-600" : "text-white"}`}>
                {item.description.split("\n").map((line, index) => (
                  <p key={index} className={index > 0 ? "mt-1" : ""}>{line}</p>
                ))}
              </div>
            )}
          </div>
        </FadeContent>
      </div>
    </div>
  );

  return (
    <section id="experience" className="mt-20 px-4 sm:px-0">
      <SplitText
        text="Education & Experience"
        tag="h1"
        className="flexy font-bold text-2xl gap-2"
        delay={20}
        duration={0.2}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
      />

      <div className="mt-10 relative flex flex-col w-[80%] max-lg:w-[90%] max-md:w-[80%] max-sm:w-[90%] m-auto">
        <div className="flexy gap-16 relative overflow-x-auto scrollbar-hidden">
          {["education", "experience"].map((key, index) => {
            const isActive = activeTab === key;
            const label = key === "education" ? "Education" : "Experience";
            return (
              <button
                key={key}
                ref={(el) => (tabsRef.current[index] = el)}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-3 pb-2 transition-all duration-300 cursor-pointer ${
                  isActive ? "text-green-600 font-semibold" : "text-[var(--icons-color)] hover:text-[var(--text-dark)]"
                }`}
              >
                {key === "education" ? <GraduationCap /> : <BriefcaseBusiness />}
                <p className="font-bold">{label}</p>
              </button>
            );
          })}
          <span className="absolute bottom-0 h-[3px] bg-green-600 rounded-full transition-all duration-500 ease-in-out" style={underlineStyle} />
        </div>

        <div className="mt-8 relative flex flex-col items-center">
          <div className="absolute sm:left-1/2 left-2 top-0 bottom-0 w-[2px] max-md:left-0! bg-gray-300"></div>
          {(activeTab === "education" ? educationWithPosition : experienceWithPosition).map((item) => (
            <TimelineItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
