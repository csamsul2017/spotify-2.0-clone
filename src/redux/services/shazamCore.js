import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// fetch('https://shazam-core.p.rapidapi.com/v1/charts/world?country_code=DZ', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreAPi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: headers => {
      headers.set('x-rapidapi-key', '64f30dc9b5mshae3807a1cf72701p1d144bjsn8574292e1fc7');
      return headers;
    },
  }),
  endpoints: builder => ({
    getTopCharts: builder.query({ query: () => '/charts/world?country_code=DZ' }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
