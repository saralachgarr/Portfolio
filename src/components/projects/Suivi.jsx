import React from "react";

export const Suivi = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black font-sans px-4 md:px-12">
      
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4 select-none">
        Suivi des Tâches
      </h1>

      {/* Subtitle */}
      <p className="text-gray-700 mb-6 text-center max-w-2xl">
        Organisez vos tâches, respectez vos délais et boostez votre productivité.
      </p>

      {/* Description */}
      <ul className="list-disc pl-5 space-y-2 text-gray-800 mb-8">
        <li>Planification des tâches et suivi des deadlines</li>
        <li>Interface simple et intuitive</li>
        <li>Dashboard clair pour visualiser vos progrès</li>
        <li>Responsive pour tous les écrans</li>
      </ul>

      {/* CTA Button */}
     <a
  href="https://github.com/saralachgarr/ProjetSuiviDestaches"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
>
  Voir le projet
</a>

    </div>
  );
};
