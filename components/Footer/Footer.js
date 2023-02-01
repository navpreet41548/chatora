import Link from "next/link";
import React, { useState } from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const [formData, setFormData] = useState({ email: "" });
  const [emailErr, setEmailErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleInput = (e) => {
    setFormData({ email: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setEmailErr("");
    setSuccess(false);
    setError(false);
    if (formData.email == "") {
      setLoading(false);
      return setEmailErr("EMAIL is required");
    }
    if (!validateEmail(formData.email)) {
      setLoading(false);
      return setEmailErr("Enter a valid EMAIL");
    }

    const res = await fetch(`${process.env.BASE_URL}/api/newsletter`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const dbData = await res.json();
    if (!dbData.err) {
      setLoading(false);
      setSuccess(true);

      setTimeout(function () {
        setSuccess(false);
      }, 5000);
    } else {
      setLoading(false);
      setEmailErr("Something Went Wrong");
    }
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    const copied = document.getElementsByClassName(styles.copied)[0];
    copied.classList.add(styles.activeCopied);

    setTimeout(function () {
      copied.classList.remove(styles.activeCopied);
    }, 3000);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.logoContainer}>
            <div className={styles.logo}></div>
            <h1 className={styles.heading}>CHATORA</h1>
          </div>
          <p className={styles.para}>
            A New Way to Experience Indian Food India
          </p>
          <div className={styles.infoWrapper}>
            <div className={styles.copied}>Copied!</div>
            <i class="bx bxl-gmail"></i>
            <p
              className={styles.infoHeading}
              onClick={() => handleCopy("contact@chatora.ca")}
            >
              contact@chatora.ca
            </p>
          </div>
          <div className={styles.infoWrapper}>
            <i class="bx bxs-phone"></i>
            <p
              className={styles.infoHeading}
              onClick={() => handleCopy("+1 00000 00000")}
            >
              +1 00000 00000
            </p>
          </div>
          <div className={styles.socialContainer}>
            <div className={styles.icon}>
              <i class="bx bxl-instagram"></i>
            </div>
            <div className={styles.icon}>
              <i class="bx bxl-facebook"></i>
            </div>
            <div className={styles.icon}>
              <i class="bx bxl-twitter"></i>
            </div>
          </div>
        </div>
        <div className={styles.center}>
          <h1 className={styles.heading}>QUICK LINKS</h1>
          <div className={styles.linkWrapper}>
            <Link href={"/#home"} className={styles.link}>
              HOME
            </Link>
            <Link href={"/#about"} className={styles.link}>
              ABOUT
            </Link>
            <Link href={"/#journey"} className={styles.link}>
              JOURNEY
            </Link>
            <Link href={"/#menu"} className={styles.link}>
              MENU
            </Link>
            <Link href={"/#contact"} className={styles.link}>
              CONTACT
            </Link>
          </div>
        </div>
        <div className={styles.right}>
          {success && (
            <div className={`${styles.floatingMessage} ${styles.success}`}>
              Email Saved Successfully!
            </div>
          )}
          {error && (
            <div className={`${styles.floatingMessage} ${styles.error}`}>
              Something Went Wrong
            </div>
          )}

          <h1 className={styles.heading}>SIGNUP FOR NEWS LETTER</h1>
          <p className={styles.rightPara}>
            Register your email with us to get the best deals & offer before
            anyone
          </p>
          <div className={styles.inputWrapper}>
            <label>{emailErr}</label>
            <div className={styles.inputGroup}>
              <i class="bx bxl-gmail"></i>
              <input
                type={"email"}
                placeholder="EMAIL"
                className={styles.input}
                onChange={(e) => handleInput(e)}
              />
              {loading ? (
                <button disabled={true} className={styles.button}>
                  <i class="bx bx-loader-alt bx-spin"></i>
                </button>
              ) : (
                <button onClick={handleSubmit} className={styles.button}>
                  SIGN UP
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>Copyright &copy; 2023 Chatora. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
