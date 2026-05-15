'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/thakurainfratechprivatelimited@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          _subject: "New Enquiry from Thakura Infratech Website",
          _template: "table"
        })
      });

      if (response.ok) {
        setSubmitted(true);
        event.currentTarget.reset();
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Full Name
          <input required name="name" placeholder="Your name" disabled={loading} />
        </label>
        <label>
          Phone Number
          <input required name="phone" placeholder="+91" disabled={loading} />
        </label>
      </div>
      <label>
        Email Address
        <input type="email" name="email" placeholder="name@example.com" disabled={loading} />
      </label>
      <label>
        Requirement
        <select name="requirement" defaultValue="Construction" disabled={loading}>
          <option>Construction</option>
          <option>Villa Society / Plotting</option>
          <option>Manufacturing</option>
          <option>Import Export / Trading</option>
          <option>Material Supply</option>
        </select>
      </label>
      <label>
        Message
        <textarea required name="message" rows={5} placeholder="Tell us about your project or business requirement" disabled={loading} />
      </label>
      <button type="submit" disabled={loading}>
        <Send size={18} />
        {loading ? 'Sending...' : 'Send Enquiry'}
      </button>
      {submitted && <p className="form-success">Thank you. Your enquiry has been sent successfully.</p>}
    </form>
  );
}
