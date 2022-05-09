import React, { useState }  from "react"
import axios from "axios";
import { Link } from "gatsby"

const FormIndex = () => {
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
      });
      const handleServerResponse = (ok, msg, form) => {
        setServerState({
          submitting: false,
          status: { ok, msg }
        });
        if (ok) {
          form.reset();
        }
      };
      const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
          method: "post",
          url: "https://getform.io/f/b12e69c4-15aa-4168-a0a4-89ce0cb68715",
          data: new FormData(form)
        })
          .then(r => {
            handleServerResponse(true, "Thanks!", form);
          })
          .catch(r => {
            handleServerResponse(false, r.response.data.error, form);
          });
      };
    return(
        <form onSubmit={handleOnSubmit}>
            <label for="fname">First name:</label>
            <input type="text" id="firstname" name="firstname"/>
            <label for="lname">Last name:</label>
            <input type="text" id="lastname" name="lastname"/>
            <label for="lname">Zipcode</label>
            <input type="text" id="zipcode" name="zipcode"/>
            <label for="lname">Email:</label>
            <input type="text" id="email" name="email"/>
            <label for="lname">Agent Email:</label>
            <input type="text" id="agent_email" name="agent_email"/>
            <input type="submit" value="Submit"/>
        </form> 
    )
}

export default FormIndex;
