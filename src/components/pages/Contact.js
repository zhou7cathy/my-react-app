import React,{ useState } from 'react'
import '../style.css';

//import a helper function that will check if the email and message is valid
import { validateEmail, checkMessage } from '../../utils/helpers';

function Form() {
  // Create state variables for the fields in the form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either name, email and message
    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Check to see if the email is not valid 
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid.');
      return;
    }
    // Check to see if the message is not valid
    if (!checkMessage(message)) {
      setErrorMessage(
        `Message is required.`
      );
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <form className="form">
        <label>Name:</label>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
        />
        <label>Email:</label>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
        />
        <label>Message:</label>
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
