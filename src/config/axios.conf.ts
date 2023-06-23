import axios from 'axios'

export const Api = axios.create({
  baseURL: `https://shazam.p.rapidapi.com`,
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
    'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST,
  },
})
