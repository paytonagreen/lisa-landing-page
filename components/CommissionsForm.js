import { useState } from 'react';
import styled from 'styled-components';
import useForm from '../hooks/useForm';

const FormStyles = styled.form`
  width: 75%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .label-pair {
    width: 100%;
    label {
    }
  }
  input {
    width: 100%;
    background-color: ${(props) => props.theme.offwhite};
    outline: none !important;
    border-radius: 2px;
    border: 1px solid ${(props) => props.theme.lavender};
    &:focus {
      outline: none !important;
      border: 2px solid ${(props) => props.theme.teal};
    }
  }
  textarea {
    width: 100%;
    height: 15rem;
    background-color: ${(props) => props.theme.offwhite};
    border: 1px solid ${(props) => props.theme.lavender};
    border-radius: 2px;
    &:focus {
      outline: none !important;
      border: 2px solid ${(props) => props.theme.teal};
    }
  }
`;

function CommissionsForm() {
  const { handleChange, handleSubmit, values } = useForm(callback);
  const [ savingStarted, setSavingStarted ] = useState(false)
  const [ submitStatus, setSubmitStatus ] = useState('');
  const formURL = "https://doiozktiok.execute-api.us-east-2.amazonaws.com/Prod/submitForm"

  function callback() {
    if(!savingStarted) {
      console.log(JSON.stringify(values))
      try {
        setSavingStarted(true);
        const xhr = new XMLHttpRequest();
        xhr.open('POST', formURL, true);
        xhr.setRequestHeader('Accept', 'application/json; charset=UTF-8');
        xhr.send(JSON.stringify(values));
        xhr.onloadend = response => {
          if (response.target.status === 200) {
            setSubmitStatus('Message sent. Thank you!')
          } else {
            setSubmitStatus('Something went wrong - please try again!')
          }
        }
      } catch(error) {
        setSubmitStatus(error.message);
      }
    }
  }

  return (
    <FormStyles
      onSubmit={handleSubmit}
    >
      {submitStatus && <p>{submitStatus}</p>}
      <div className="label-pair">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={values.name}
        />
      </div>
      <div className="label-pair">
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={handleChange}
          value={values.email}
        />
      </div>
      <div className="label-pair">
        <label htmlFor="message">Message: </label>
        <textarea
          id="message"
          name="message"
          onChange={handleChange}
          value={values.message}
        />
      </div>
      <button type="submit">Submit</button>
    </FormStyles>
  );
}

export default CommissionsForm;
