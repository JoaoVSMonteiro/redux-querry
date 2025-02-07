"use client";
import Image from "next/image";
import { useGetCharactersQuery } from "../../redux/apiSlice";

export default function ReduxPage() {
  const { data, error, isLoading } = useGetCharactersQuery();

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center text-lg">
        Carregando personagens...
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center text-red-500">
        Erro ao carregar os personagens.
      </div>
    );
  }

  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Personagens (RTK Query)
      </h1>
      <div className="flex gap-4">
        {data?.results.slice(0, 2).map((character) => (
          <div
            key={character.id}
            className="border p-2 rounded-lg shadow-md w-[150px]"
          >
            <Image
              src={character.image}
              alt={character.name}
              className="w-full h-[120px] object-cover rounded"
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
