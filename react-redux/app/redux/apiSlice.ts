import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Character {
  id: number;
  name: string;
  image: string;
}

export const apiSlice = createApi({
  reducerPath: "rickAndMortyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api/" }),
  endpoints: (builder) => ({
    getCharacters: builder.query<{ results: Character[] }, void>({
      query: () => "character",
    }),
  }),
});

export const { useGetCharactersQuery } = apiSlice;
