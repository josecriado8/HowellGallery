"use client";
import React, { useState } from "react";
import styles from "./NewsletterSignup.module.css";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");

  return (
    <div className={styles.signupSection}>
      <div className={styles.signupContainer}>
        <h2 className={styles.signupTitle}>
          stay ahead with our newsletter
        </h2>
        <div className={styles.signupSubtitle}>
          receive news on exclusive drops, releases, product updates, and more
        </div>
        <form
          className={styles.signupForm}
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <input
            type="email"
            placeholder="email@example.xyz"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className={styles.signupInput}
          />
          <button
            type="submit"
            className={styles.signupButton}
            aria-label="Subscribe"
          >
            <span className={styles.signupButtonIcon}>→</span>
          </button>
        </form>
      </div>
    </div>
  );
}