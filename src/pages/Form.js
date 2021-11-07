// Import useState hook
import React, { useState } from "react";

//destructure out props, including router prop history
const Form = ({ initialBookmark, handleSubmit, buttonLabel, history }) => {
  ////////////////
  // The Form Data State
  ////////////////
  // Initiallize the form with the initialbookmark state
  const [formData, setFormData] = useState(initialBookmark);

  //////////////////////////
  // Functions
  //////////////////////////

  // Standard React Form HandleChange Function
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Function to run when form is submitted
  const handleSubmisson = (event) => {
    //prevent form refresh
    event.preventDefault();
    //pass formData to handleSubmit prop function
    handleSubmit(formData);
    //push user back to main page
    history.push("/");
  };

  // Our Form, an input for the subject and details fields and a submit button
  return (
    <div className="columns is-desktop is-centered">
      <div class="column box has-background-primary is-4">
        <form 
          className=""
          onSubmit={handleSubmisson}
        >
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input 
                class="input" type="text" 
                placeholder="Bookmark Name" 
                onChange={handleChange}
                value={formData.title}
                name="title"
              />
              <span class="icon is-small is-left">
              <i class="fas fa-bookmark"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input 
                class="input" 
                type="text" 
                placeholder="Link" 
                onChange={handleChange}
                value={formData.link}
                name="link"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-link"></i>
              </span>
            </p>
          </div>
          <div class="field is-grouped is-grouped-centered">
            <p class="control">
              <button type="submit" class="button is-info">
                submit
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
