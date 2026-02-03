import React from "react";

export const Travel = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black font-sans px-4 md:px-12">
      
      <h1 className="text-4xl md:text-6xl font-bold mb-4">TravelEase</h1>

      <p className="text-gray-700 mb-6 text-center max-w-2xl">
        Plateforme moderne de réservation de voyages incluant hôtels, vols et voitures.
      </p>

      <ul className="list-disc pl-5 space-y-2 text-gray-800 mb-8">
        <li>Site de réservation d’hôtels, vols et voitures</li>
        <li>Recherche avancée avec filtres par catégories</li>
        <li>Interface moderne, responsive et intuitive</li>
        <li>Gestion des réservations et des données via MySQL</li>
        <li>Backend avec Laravel & frontend dynamique</li>
      </ul>

      <a
  href="https://github.com/saralachgarr/projetBooking"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
>
  Voir le projet
</a>

    </div>
  );
};
