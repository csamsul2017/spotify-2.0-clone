import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// fetch('https://shazam-core.p.rapidapi.com/v1/charts/world?country_code=DZ', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreAPi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com',
    prepareHeaders: headers => {
      headers.set('x-rapidapi-key', 'a196ec1afcmsha88fd1f018c6254p185e71jsn232200116dfb');
      return headers;
    },
  }),
  endpoints: builder => ({
    getTopCharts: builder.query({ query: () => '/v1/charts/world?country_code=DZ' }),
    getSongDetails: builder.query({ query: ({ songid }) => `/v2/tracks/details?track_id=${songid}` }),
    getSongRelated: builder.query({ query: ({ songid }) => `/v2/tracks/related?track_id=${songid}` }),
    getArtistDetails: builder.query({ query: artistid => `/v2/artists/details?artist_id=${artistid}` }),
  }),
});

export const { useGetTopChartsQuery, useGetSongDetailsQuery, useGetSongRelatedQuery, useGetArtistDetailsQuery } = shazamCoreApi;
