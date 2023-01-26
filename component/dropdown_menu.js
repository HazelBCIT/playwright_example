import React, { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Icon_dropdown() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <div className={styles.nav_bar}>
        <a>
          <img
            onClick={handleClick}
            className={styles.icon}
            src="/menu-icon.png"
            alt="menu icon"
          />
          {showDropdown && (
            <>
              <ul>
                <li>home</li>
                <li>about</li>
                <li>contact</li>
              </ul>
              < img onClick={handleClick} src="/menu_cross.png" />
            </>
          )}
        </a >
      </div>
    </div>
  );
}
