import React from "react";

const Album = ({ url, title }) => (
  <li>
    <img src="{url}" alt={title} />
  </li>
);

export default Album;