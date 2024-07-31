export const MOVIES_HEADER = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_IMDB_ACCESS_TOKEN}`,
  },
};

export const TMD_IMG_URL = "https://image.tmdb.org/t/p/w500/";

export const LANG_SELECTOR = [
  { Identifier: "en", name: "English" },
  { Identifier: "hi", name: "Hindi" },
  { Identifier: "ja", name: "Japanese" },
];
