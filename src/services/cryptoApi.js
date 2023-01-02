// const axios = require("axios");

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": process.env.REACT_APP_CRYPTO_API_KEY,
};
const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => {
  const header = { url, headers: cryptoApiHeaders };
  return header;
};
// Define a service using a base URL and expected endpoints
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count = 100) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptosDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getExchanges: builder.query({
      query: (coinId) => createRequest(`/coin/Qwsogvtv82FCd/exchanges`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`/coin/${coinId}/history?timePeriod=${timeperiod}`),
    }),
  }),
});

export const { useGetCryptosQuery, useGetCryptoHistoryQuery, useGetExchangesQuery, useGetCryptosDetailsQuery } =
  cryptoApi;
