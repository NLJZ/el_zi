import React from "react";
import Data from "../../data/data.json";
function Playlist() {
  const handleListClick = (file) => {
    // setSource(file);
  };

  const list = Data.map((item) => {
    let file = item.file;
    return file !== "" ? (
      <li key={item.id} onClick={() => handleListClick(file)}>
        {item.title}
      </li>
    ) : null;
  });

  return <ul>{list}</ul>;
}

export default Playlist;
