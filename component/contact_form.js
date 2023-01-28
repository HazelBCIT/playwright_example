import styles from "../styles/Home.module.css";

export default function ContactForm(props) {
  return (
    <div>
      <form>
        <fieldset>
          <table>
            <thead>
              <tr>
                <th>First Name:</th>
                <th>Last Name:</th> 
              </tr>
                <input id="firstName" placeholder="First Name Here"></input>
                <input id="lastName" placeholder="Last Name Here"></input>
            </thead>
          <thead>
            <tr>
              <th>Email:</th>
            </tr>
            <input id="email" placeholder="Email Here"></input>
          </thead>
          </table>
        </fieldset>
      </form>
    </div>
  )
}