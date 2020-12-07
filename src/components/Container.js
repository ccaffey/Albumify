import React, { useContext, useEffect } from "react";
import { AlbumContext } from "./AlbumContext";
import AlbumGallery from "./AlbumGallery";

const Container = ({ searchTerm }) => {
  const { albums, runSearch } = useContext(AlbumContext);
  useEffect(() => {
    runSearch(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    <div className="photo-container">
      <AlbumGallery data={albums} />
    </div>
  );
};

export default Container;