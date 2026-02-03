import React from "react";

export const Diplome = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black font-sans px-4 md:px-12 max-w-4xl mx-auto">
      
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4 select-none">
        Gestion de Certification
      </h1>

      {/* Subtitle */}
      <p className="text-gray-700 mb-6 text-center">
        Application web dédiée à la gestion, la vérification et la sécurisation des diplômes et certificats.
      </p>

      {/* Description */}
      <ul className="list-disc pl-5 space-y-2 text-gray-800 mb-8">
        <li>Développement en PHP natif et MySQL</li>
        <li>Conception avec diagrammes UML</li>
        <li>Interface Administrateur (CRUD, statistiques, gestion des accès)</li>
        <li>Interface Recruteur pour vérification des diplômes</li>
        <li>Sécurisation des données et authentification par rôle</li>
      </ul>

      {/* CTA Button */}
          <a
  href="https://github.com/saralachgarr/gestion-certification"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
>
  Voir le projet
</a>
    </div>
  );
};
