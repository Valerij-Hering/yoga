
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xbjbydqz");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
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