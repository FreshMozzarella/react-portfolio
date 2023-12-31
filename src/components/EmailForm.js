import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function EmailForm() {


    const form = useRef()
    const   sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm( `${process.env.REACT_APP_YOUR_SERVICE_ID}`,
            `${process.env.REACT_APP_YOUR_TEMPLATE_ID}`,
            form.current,
            `${process.env.REACT_APP_YOUR_PUBLIC_KEY}`)
          .then((result) => {
            
              console.log(result.text);
          }, (error) => {
            
              console.log(error.text);
          });
          e.target.reset()
    }
    return (
        <form ref={form} onSubmit={sendEmail} className='form-group'>
            <input 
            name="user_name" 
            type='text' 
            placeholder="Full Name" 
            className='form-control'
            required 
            />
            <input 
            name="user_email" 
            type='email' 
            placeholder="email" 
            className='form-control'
            required 
            />
            <input 
            name="subject" 
            type='text' 
            placeholder="Subject" 
            className='form-control'
            required 
            />
            <textarea
            name='message'
            cols='30'
            rows='10'
            className='form-control'
            >

            </textarea>
            <button 
            type="submit" className='button'>Send Email</button>
        </form>
    );
}

export default EmailForm;