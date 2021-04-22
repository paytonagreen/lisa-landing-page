import { useState } from 'react';

import FormStyles from './styles/CommissionsFormStyles';
import useForm from '../hooks/useForm';

function CommissionsForm() {
  const {handleChange, handleSubmit, values } = useForm(callback);
  const [savingStarted, setSavingStarted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formURL =
    'https://doiozktiok.execute-api.us-east-2.amazonaws.com/Prod/submitForm';

  function callback() {
    if (!savingStarted) {
      console.log(JSON.stringify(values));
      try {
        setSavingStarted(true);
        const xhr = new XMLHttpRequest();
        xhr.open('POST', formURL, true);
        xhr.setRequestHeader('Accept', 'application/json; charset=UTF-8');
        xhr.send(JSON.stringify(values));
        xhr.onloadend = (response) => {
          if (response.target.status === 200) {
            setSubmitStatus('Message sent. Thank you!');
          } else {
            setSubmitStatus('Something went wrong - please try again!');
          }
        };
        setIsSubmitted(true);
      } catch (error) {
        setSubmitStatus(error.message);
      }
    }
  }

  return (
    <>
      {submitStatus && <p>{submitStatus}</p>}
      <FormStyles onSubmit={handleSubmit}>
        <div className='label-pair'>
          <label htmlFor='name'>Name: </label>
          <input
            disabled={isSubmitted}
            type='text'
            id='name'
            name='name'
            onChange={handleChange}
            value={values.name}
          />
        </div>
        <div className='label-pair'>
          <label htmlFor='email'>Email: </label>
          <input
            disabled={isSubmitted}
            type='text'
            id='email'
            name='email'
            onChange={handleChange}
            value={values.email}
          />
        </div>
        <div className='label-pair'>
          <label htmlFor='message'>Message: </label>
          <textarea
            disabled={isSubmitted}
            id='message'
            name='message'
            onChange={handleChange}
            value={values.message}
          />
        </div>
        <button disabled={isSubmitted} type='submit'>
          Submit
        </button>
      </FormStyles>
    </>
  );
}

export default CommissionsForm;
