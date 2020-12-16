import React from "react";
import Data from "../../data/data.json";

function WorkNav() {
  function handleMenuClick(props) {
    console.log(props);
  }
  const horspiels = Data.filter((project) => project.category === "hörspiel");
  const horspielMenu = horspiels.map((item) => {
    return (
      <li key={item.id} onClick={() => handleMenuClick(item.id)}>
        {item.title}
      </li>
    );
  });
  return (
    <div className="work-menu">
      <ul>
        <li>Hörspiel</li>
        {horspielMenu}
      </ul>
      <ul>
        <li>Installation</li>
      </ul>
      <ul>
        <li>Podcasts</li>
      </ul>
      <ul>
        <li>Performance</li>
      </ul>
      <ul>
        <li>Ausstellung</li>
      </ul>
    </div>
  );
}

export default WorkNav;
