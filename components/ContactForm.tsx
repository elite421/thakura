'use client';

import { useState } from 'react';
import { Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirement: 'Construction',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [isActivationRequired, setIsActivationRequired] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    setIsActivationRequired(false);

    try {
      // AJAX request to FormSubmit.co so the page does not redirect
      const response = await fetch('https://formsubmit.co/ajax/thakurainfratechprivatelimited@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email || 'Not Provided',
          requirement: formData.requirement,
          message: formData.message,
          _subject: 'New Enquiry from Thakura Infratech Website',
        }),
      });

      const result = await response.json();

      if (response.ok && result.success === 'true') {
        setStatus('success');
      } else {
        // If the email is not activated yet, FormSubmit returns a message containing "activate"
        if (result.message && result.message.toLowerCase().includes('activate')) {
          setIsActivationRequired(true);
        }
        throw new Error(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error: any) {
      console.error('Form submission error:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Unable to submit form. Please check your internet connection or email configuration.');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      requirement: 'Construction',
      message: '',
    });
    setStatus('idle');
    setErrorMessage('');
    setIsActivationRequired(false);
  };

  if (status === 'success') {
    return (
      <div className="contact-form success-state" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center',
        padding: '48px 32px',
        animation: 'fadeIn 0.5s ease-out'
      }}>
        <div className="success-icon-wrapper" style={{
          background: 'rgba(74, 117, 89, 0.1)',
          padding: '20px',
          borderRadius: '50%',
          marginBottom: '20px',
          color: '#4a7559',
          animation: 'scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}>
          <CheckCircle2 size={48} />
        </div>
        <h3 style={{ fontSize: '24px', marginBottom: '12px', color: 'var(--ink)' }}>Enquiry Sent!</h3>
        <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: '1.6', marginBottom: '24px', maxWidth: '360px' }}>
          Thank you, <strong>{formData.name}</strong>. Your enquiry regarding <strong>{formData.requirement}</strong> has been received. Our team will contact you shortly.
        </p>
        <button 
          onClick={handleReset}
          className="secondary-btn"
          style={{ 
            borderColor: 'var(--line)', 
            color: 'var(--ink)', 
            background: 'transparent',
            cursor: 'pointer',
            padding: '10px 20px',
            fontSize: '14px',
            fontWeight: 800,
            borderRadius: '6px',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--soft)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
          }}
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="contact-form-wrapper">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <label>
            Full Name
            <input 
              required 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              disabled={status === 'submitting'}
              placeholder="Your name" 
            />
          </label>
          <label>
            Phone Number
            <input 
              required 
              name="phone" 
              value={formData.phone}
              onChange={handleChange}
              disabled={status === 'submitting'}
              placeholder="+91" 
            />
          </label>
        </div>
        <label>
          Email Address
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            disabled={status === 'submitting'}
            placeholder="name@example.com" 
          />
        </label>
        <label>
          Requirement
          <select 
            name="requirement" 
            value={formData.requirement}
            onChange={handleChange}
            disabled={status === 'submitting'}
          >
            <option>Construction</option>
            <option>Villa Society / Plotting</option>
            <option>Manufacturing</option>
            <option>Import Export / Trading</option>
            <option>Material Supply</option>
          </select>
        </label>
        <label>
          Message
          <textarea 
            required 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            disabled={status === 'submitting'}
            rows={5} 
            placeholder="Tell us about your project or business requirement" 
          />
        </label>

        {status === 'error' && (
          <div style={{
            background: isActivationRequired ? 'rgba(197, 160, 89, 0.1)' : 'rgba(160, 68, 38, 0.08)',
            border: `1px solid ${isActivationRequired ? '#c5a059' : 'rgba(160, 68, 38, 0.2)'}`,
            borderRadius: '8px',
            padding: '16px',
            color: 'var(--ink)',
            fontSize: '14px',
            lineHeight: '1.5',
            display: 'flex',
            gap: '12px',
            alignItems: 'flex-start',
            animation: 'fadeIn 0.3s ease-out'
          }}>
            <AlertCircle size={20} style={{ color: isActivationRequired ? '#c5a059' : 'var(--brick)', flexShrink: 0, marginTop: '2px' }} />
            <div>
              {isActivationRequired ? (
                <>
                  <strong style={{ display: 'block', marginBottom: '4px', color: '#8e6d2b' }}>Form Activation Required</strong>
                  FormSubmit.co has sent an activation link to <strong>thakurainfratechprivatelimited@gmail.com</strong>.
                  <ul style={{ margin: '6px 0 0 16px', padding: 0 }}>
                    <li>Check your Inbox (or Spam/Junk/Promotions) for the activation email from <strong>FormSubmit</strong>.</li>
                    <li>Click the <strong>Activate Form</strong> button inside it.</li>
                  </ul>
                  Once activated, this form will deliver all future submissions straight to your inbox!
                </>
              ) : (
                <>
                  <strong style={{ display: 'block', marginBottom: '4px', color: 'var(--brick)' }}>Submission Error</strong>
                  {errorMessage}
                </>
              )}
            </div>
          </div>
        )}

        <button 
          type="submit" 
          disabled={status === 'submitting'}
          className="submit-btn"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
            opacity: status === 'submitting' ? 0.85 : 1,
            transition: 'all 0.2s',
            justifyContent: 'center',
            minHeight: '44px',
            padding: '0 24px',
            background: 'var(--brick)',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 800,
            width: 'fit-content'
          }}
        >
          {status === 'submitting' ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={18} />
              Send Enquiry
            </>
          )}
        </button>
      </form>
    </div>
  );
}
