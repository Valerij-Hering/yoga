
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import toast from 'react-hot-toast';

function ContactForm() {
  const [state, handleSubmit] = useForm("xbjbydqz");
  if (state.succeeded) {
    toast(<div className='container_alert'>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 124 124">
        <circle className="circle-loading" cx="62" cy="62" r="59" fill="none" stroke="#4de38146" stroke-width="6px"></circle>
        <circle className="circle" cx="62" cy="62" r="59" fill="none" stroke="#4de381" stroke-width="6px" stroke-linecap="round"></circle>
        <polyline className="check" points="73.56 48.63 57.88 72.69 49.38 62" fill="none" stroke="#4de381" stroke-width="6px" stroke-linecap="round"></polyline>
      </svg>
      <p className='alert_par'>Thank You!</p>
    </div>, {
      duration: 3000,
      position: 'bottom-left',
  });
      
  }
  return (
      <div className='container_form'>
        <div>
          <p className='feedback_par1'>Do you have any quastions?</p>
          <p className='feedback_par2'>Put your email address and get started</p>
        </div>
        <form className='box_input_feedback' onSubmit={handleSubmit}>
      <label htmlFor="email">
      </label>
      <input 
        className='input_feedback'
        id="email"
        type="email" 
        name="email"
        placeholder='Enter your email'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      
      <button className='btn_feedback' type="submit" disabled={state.submitting}>
        Send
      </button>
    </form>
    
    </div>
  );
}

export default ContactForm