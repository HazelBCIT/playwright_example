import React, { useState } from "react";
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

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(event.target.value)) {
      setEmailError("Email is invalid");
    } else {
      setEmailError("");
      setIfEmailValid(true);
    }
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    const firstNameRegex = /^[A-Z][a-zA-Z]*$/;
    if (!firstNameRegex.test(event.target.value)) {
      setFirstNameError(
        "First name error. First letter must be capital. Must use alphabets only."
      );
    } else {
      setFirstNameError("");
      setIfFirstNameValid(true);
    }
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    const lastNameRegex = /^[A-Z][a-zA-Z]*$/;
    if (!lastNameRegex.test(event.target.value)) {
      setLastNameError(
        "Last name error. First letter must be capital. Must use alphabets only."
      );
    } else {
      setLastNameError("");
      setIfLastNameValid(true);
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
            </thead>
            <thead>
              <tr>
                <th>Email:</th>
              </tr>

                <input
                  style={{width:"99%",margin:"0.5%"}}
                  id="email"
                  placeholder="Email Here"
                  onChange={handleEmailChange}
                ></input>
              
            </thead>
          </table>
        </fieldset>
      </form>
      <p>{firstNameError}</p>
      <p>{lastNameError}</p>
      <p>{emailError}</p>
      <button type="submit" style={{ visibility: ifEmailValid && ifFirstNameValid && ifLastNameValid ? "visible" : "hidden" }}>
        
      </button>
    </div>
  );
}
