import React, { useState } from "react";
import { serviceDropdown } from "./NavItems";
import { personalcareDropdown } from "./NavItems";
import { Link } from "react-router-dom";
import "../styles/Dropdown.css";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "submenu clicked" : "submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {serviceDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}


      </ul>
    </>
  );
}

export default Dropdown;