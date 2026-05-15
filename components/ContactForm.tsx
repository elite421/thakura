'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form className="contact-form" onSubmit={(event) => {
      event.preventDefault();
      setSubmitted(true);
    }}>
      <div className="form-row">
        <label>
          Full Name
          <input required name="name" placeholder="Your name" />
        </label>
        <label>
          Phone Number
          <input required name="phone" placeholder="+91" />
        </label>
      </div>
      <label>
        Email Address
        <input type="email" name="email" placeholder="name@example.com" />
      </label>
      <label>
        Requirement
        <select name="requirement" defaultValue="Construction">
          <option>Construction</option>
          <option>Villa Society / Plotting</option>
          <option>Manufacturing</option>
          <option>Import Export / Trading</option>
          <option>Material Supply</option>
        </select>
      </label>
      <label>
        Message
        <textarea required name="message" rows={5} placeholder="Tell us about your project or business requirement" />
      </label>
      <button type="submit">
        <Send size={18} />
        Send Enquiry
      </button>
      {submitted && <p className="form-success">Thank you. Your enquiry has been captured on this page.</p>}
    </form>
  );
}
