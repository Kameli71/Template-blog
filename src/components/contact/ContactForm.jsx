import React, { useState } from 'react';
import "./ContactForm.css"

function ContactForm() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
return (
    <div className='ContactForm'>
        <div className="form-group">
          <label htmlFor="name" className='label'>
            Your name
            <input
              className='input-contact'
              placeholder="name"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email" className='label'>
            Your email
            <input
              className='input-contact'
              placeholder="email"
              type="text"
              id="email"
              email="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message" className='label'>
            Your message
            <textarea
              placeholder='write your message'
              className='text-area'
              type="text"
              id="message"
              message="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <button className='button' type="submit">Envoyer</button>
    </div>
  );
}

export default ContactForm;
