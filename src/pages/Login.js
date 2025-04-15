import React from "react";
import styles from "../css/Login.module.css";


const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <a href="/"><h1 className={styles.title}>GM GROUP</h1></a>
        <p className={styles.subtitle}></p>
        <p className={styles.footer}>
          <strong>Flatiron Building, 1902</strong>
          <br />
          New York, USA
        </p>
      </div>
      <div className={styles.right}>
        <div className={styles.formContainer}>
          <h2 className={styles.signupTitle}>Log In</h2>
        
          
          <label className={styles.label}>Username or Email</label>
          <input type="text" className={styles.input} placeholder="Username or Email" />
          <label className={styles.label}>Password</label>
          <input type="password" className={styles.input} placeholder="Password"/>
          <button className={styles.loginButton}>Log In</button>
          <p className={styles.termsText}>
            By Loging In, you agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
