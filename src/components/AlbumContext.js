import React, { createContext, useState } from "react";
import axios from "axios";

export const AlbumContext = createContext();

const AlbumArtProvider = props => {
  const [albums, setAlbums] = useState([]);
  const runSearch = query => {
    axios
      .get(
        `https://itunes.apple.com/search?term=${query}&entity=album`
      )
      .then(response => {
        setAlbums(response.data.results);
      })
      .catch(error => {
        console.log(
          "Something went wrong retrieving data from the iTunes API",
          error
        );
      });
  };
  return (
    <AlbumContext.Provider value={{ albums, runSearch }}>
      {props.children}
    </AlbumContext.Provider>
  );
};

export default AlbumArtProvider;