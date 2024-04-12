import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const puppyBowlApi = createApi({
  reducerPath: "puppyBowlApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-pt-web',
  }),
  endpoints: (builder) => ({
    getPlayers: builder.query({
      query: () => '/players',
    }),
    addPlayer: builder.mutation({
      query: (player) => ({
        url: '/players',
        method: 'POST',
        body: player,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        }
      })
    }),
    getPlayer: builder.query({
      query: (id) => `/players/${id}`
    }),
    deletePlayer: builder.mutation({
      query: (id) => ({
        url: `/players/${id}`,
        method: 'DELETE',
      })
    })
  }),
});

export const { 
  useGetPlayersQuery,
  useAddPlayerMutation,
  useGetPlayerQuery,
  useDeletePlayerMutation,
} = puppyBowlApi;
