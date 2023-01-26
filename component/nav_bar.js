import styles from '../styles/Home.module.css'
import React, { useState } from "react";
import { DropdownMenu } from 'semantic-ui-react';

export default function NavBar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={styles.nav_bar}>
        <img 
          className={styles.icon} 
          style={{float:"left"}} 
          src="/menu-icon.png" 
          alt="menu icon"
          onClick={handleClick} 
        />

        <img 
          className={styles.icon} 
          style={{float:"right"}} 
          src="/graduation-hat.png" 
          alt="graduation hat"
        />

       
          {showDropdown && (
              <>
               <div className={`${styles.row} ${styles.dropdown_menu}`}>
                <img 
                    className={styles.icon}
                    style={{margin:"0px 50px 0px 15px"}}
                    onClick={handleClick} 
                    src="/close_icon.png"
                />
                <ul className={styles.list}>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
                </div>
              </>
            )}
    </div>
  )
}