import React, { useState } from 'react';
import styles from '../css/Register.module.css';

const Register = () => {
  const [expanded, setExpanded] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    age: '',
    nationality: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage(''); // Clear error when typing
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSignUpClick = () => {
    if (!expanded) {
      setExpanded(true);
      return;
    }

    const { username, password, email, age, nationality } = formData;

    if (!username || !password || !email || !age || !nationality) {
      setErrorMessage('All fields must be filled!');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Invalid email format.');
      return;
    }

    setErrorMessage('');
    setSuccessMessage('Succesfully Registered');
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <a href='/'><h1 className={styles.title}>GM GROUP</h1></a>
        <p className={styles.footer}>
          <strong>Flatiron Building, 1902</strong>
          <br />
          New York, USA
        </p>
      </div>

      <div className={styles.right}>
        <div className={styles.formContainer}>
          <h2 className={styles.signupTitle}>Sign Up</h2>

          <label className={styles.label}>Name</label>
          <input
            type="text"
            name="username"
            className={styles.input}
            placeholder="Name"
            value={formData.username}
            onChange={handleChange}
          />

          
          <label className={styles.label}>Surname</label>
          <input
            type="text"
            name="username"
            className={styles.input}
            placeholder="Surname"
            value={formData.username}
            onChange={handleChange}
          />

          <label className={styles.label}>Password</label>
          <input
            type="password"
            name="password"
            className={styles.input}
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          {expanded && (
            <>
              <label className={styles.label}>Email Address</label>
              <input
                type="email"
                name="email"
                className={`${styles.input} ${formData.email && !validateEmail(formData.email) ? styles.errorInput : ''}`}
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />

              <label className={styles.label}>Age</label>
              <input
                type="number"
                name="age"
                className={styles.input}
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
              />

              <label className={styles.label}>Nationality</label>
              <input
                type="text"
                name="nationality"
                className={styles.input}
                placeholder="Nationality"
                value={formData.nationality}
                onChange={handleChange}
              />
            </>
          )}

          <button className={styles.loginButton} onClick={handleSignUpClick}>
            {expanded ? 'Submit' : 'Sign Up'}
          </button>
          <p className={styles.termsText}>
            By Signing Up, you agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a>
          </p>

          {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
          {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Register;
