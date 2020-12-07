import React from "react";
import Image from "./Image";
const AlbumGallery = props => {
  const results = props.data;
  let albums;
  let noalbums;
  // map variables to each item in fetched image array and return image component
  if (results && results.length > 0) {
    albums = results.map(album => {
      return <Image url={album.artworkUrl100} alt={album.collectionName} key={album.collectionId} />;
    });
  } else {
    noalbums = <div></div>;
  }
  return (
    <div>
      <div className="overlay"></div>
      <ul>{albums}</ul>
      {noalbums}
    </div>
  );
};

export default AlbumGallery;