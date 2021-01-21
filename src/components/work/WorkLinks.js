import React from "react";
import Data from "../../data/data.json";
import { Link } from "react-router-dom";

export default function WorkLinks() {
  const horspiels = Data.filter((project) => project.category === "hörspiel");
  const horspielMenu = horspiels.map((item) => {
    return (
      <li key={item.id}>
        <Link
          to={item.title
            .toLowerCase()
            .replace(/\s/g, "")
            .replace(/\u00e4/g, "ae")
            .replace(/\u00fc/g, "ue")
            .replace(/\u00f6/g, "oe")
            .replace(/\u00df/g, "ss")}
        >
          {item.title}
        </Link>
      </li>
    );
  });
  return horspielMenu;
}
