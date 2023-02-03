import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Button from "./button";

export default function ContactForm(props) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailError, setEmailError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [ifEmailValid, setIfEmailValid] = useState(false)
  const [ifFirstNameValid, setIfFirstNameValid] = useState(false)
  const [ifLastNameValid, setIfLastNameValid] = useState(false)
  const [btnVisibility, setBtnVisibility] = useState('hidden')

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(event.target.value)) {
      setEmailError("Email is invalid");
      setBtnVisibility('hidden')
    } else {
      setEmailError("");
      setIfEmailValid(true);
      // if(ifEmailValid && ifFirstNameValid && ifLastNameValid) {
        setBtnVisibility('visible')
      // }
    }
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    const firstNameRegex = /^[A-Z][a-zA-Z]*$/;
    if (!firstNameRegex.test(event.target.value)) {
      setFirstNameError(
        "First name error. First letter must be capital. Must use alphabets only."
      );
      setBtnVisibility('hidden')
    } else {
      setFirstNameError("");
      setIfFirstNameValid(true);
      // if(ifEmailValid && ifFirstNameValid && ifLastNameValid) {
        setBtnVisibility('visible')
      // }
    }
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    const lastNameRegex = /^[A-Z][a-zA-Z]*$/;
    if (!lastNameRegex.test(event.target.value)) {
      setLastNameError(
        "Last name error. First letter must be capital. Must use alphabets only."
      );
      setBtnVisibility('hidden')
    } else {
      setLastNameError("");
      setIfLastNameValid(true);
      // if(ifEmailValid && ifFirstNameValid && ifLastNameValid) {
        setBtnVisibility('visible')
      // }
    }
  };


  return (
    <div style={{width:"50vw"}}>
      <form>
        <fieldset>
          <table className={styles.table_box}>
            <thead>
              <tr className={styles.tr_box}>
                <th className={styles.th_box}>First Name:</th>
                <th className={styles.th_box} style={{paddingLeft:"5px"}}>Last Name:</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.full}>
                <td>
                  <div>
                    <input className={styles.input_box}
                      id="firstName"
                      placeholder="First Name Here"
                      onChange={handleFirstNameChange}
                    />
                    <input className={styles.input_box}
                      id="lastName" 
                      placeholder="Last Name Here" 
                      onChange={handleLastNameChange}
                    />
                  </div>
                </td>
              </tr>             
            </tbody>
            <thead>
              <tr style={{width:"99%"}}>
                <th>Email:</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.full}>
                <td>
                  <div>
                    <input
                      style={{width:"99%",margin:"0.5%"}}
                      id="email"
                      placeholder="Email Here"
                      onChange={handleEmailChange}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </form>
      <div style={{color:"red"}}>{firstNameError}</div>
      <div style={{color:"red"}}>{lastNameError}</div>
      <div style={{color:"red"}}>{emailError}</div>
      <div className={styles.submit_button}>
        <a href="/">
          <button type="submit" className={styles.button} style={{ visibility: btnVisibility }}> 
            Submit
          </button>
        </a>
        
      </div>
    </div>
  );
}
