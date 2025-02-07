"use client";

import { useEffect, useState } from "react";

interface Character {
  id: number;
  name: string;
  image: string;
}

export default function Galeria() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results.slice(0, 2));
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="p-4 text-center text-lg">Carregando personagens...</div>
    );
  }

  return (
    <main className=" items-center justify-center  min-h-screen flex flex-col">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Galeria de Personagens
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {characters.map((character) => (
          <div
            key={character.id}
            className="border p-2 rounded-lg shadow-md max-w-[180px] mx-auto"
          >
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-[150px] object-cover rounded"
            />
            <h2 className="text-sm font-semibold mt-2 text-center">
              {character.name}
            </h2>
          </div>
        ))}
      </div>
    </main>
  );
}
