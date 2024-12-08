import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validateForm = () => {
    const { name, email, message } = formData;
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!name) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const gmailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    if (!email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    } else if (!gmailRegex.test(email)) {
      newErrors.email = 'Please enter a valid Gmail address';
      valid = false;
    }

    if (!message) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm('service_y5edemu', 'template_4ov03n9', form.current, 'yQPFLDSnRh7_JfngE')
        .then(
          () => {
            setStatusMessage('Your message has been sent successfully!');
            form.current.reset();
            setFormData({ name: '', email: '', message: '' });
          },
          () => {
            setStatusMessage('Failed to send message. Please try again later.');
          }
        );
    } else {
      setStatusMessage('Please fix the errors above.');
    }
  };

  return (
    <div style={styles.contactContainer}>
      <form ref={form} onSubmit={sendEmail} style={styles.contactForm}>
        <h2 style={styles.formTitle}>Contact Us</h2>
        <label style={styles.label}>Name</label>
        <input
          type="text"
          name="from_name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          style={styles.input}
        />
        {errors.name && <p style={styles.errorText}>{errors.name}</p>}
        
        <label style={styles.label}>Email</label>
        <input
          type="email"
          name="from_email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          style={styles.input}
        />
        {errors.email && <p style={styles.errorText}>{errors.email}</p>}
        
        <label style={styles.label}>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          style={styles.textarea}
        />
        {errors.message && <p style={styles.errorText}>{errors.message}</p>}
        
        <input type="submit" value="Send" style={styles.submitBtn} />
      </form>

      {statusMessage && <p style={statusMessage.includes('successfully') ? styles.successMessage : styles.errorMessage}>{statusMessage}</p>}
    </div>
  );
};

const styles = {
  contactContainer: {
    maxWidth: '600px',
    margin: '2rem auto',
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    fontFamily: 'Arial, sans-serif',
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  formTitle: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    fontSize: '1.8rem',
    color: '#444',
    fontWeight: 'bold',
  },
  label: {
    marginBottom: '0.5rem',
    fontSize: '1rem',
    fontWeight: '600',
    color: '#555',
  },
  input: {
    marginBottom: '1rem',
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    outline: 'none',
    width: '100%',
  },
  inputFocus: {
    borderColor: '#3f51b5',
    boxShadow: '0 0 5px rgba(63, 81, 181, 0.4)',
  },
  textarea: {
    marginBottom: '1rem',
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    outline: 'none',
    width: '100%',
    height: '120px',
    resize: 'vertical',
  },
  submitBtn: {
    backgroundColor: '#3f51b5',
    color: 'white',
    border: 'none',
    padding: '12px',
    fontSize: '1.2rem',
    cursor: 'pointer',
    borderRadius: '8px',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    textAlign: 'center',
  },
  submitBtnHover: {
    backgroundColor: '#303f9f',
    transform: 'scale(1.02)',
  },
  errorText: {
    color: '#ff4d4f',
    fontSize: '0.875rem',
    marginBottom: '1rem',
  },
  successMessage: {
    textAlign: 'center',
    marginTop: '1rem',
    fontSize: '1rem',
    fontWeight: '600',
    color: '#4caf50',
  },
  errorMessage: {
    textAlign: 'center',
    marginTop: '1rem',
    fontSize: '1rem',
    fontWeight: '600',
    color: '#f44336',
  },
};

export default Contact;
