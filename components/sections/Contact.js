import Image from "next/image";
import React, { useState } from "react";
import styles from "/styles/Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errMessage, setErrMessage] = useState({
    nameErr: "",
    emailErr: "",
    messageErr: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleInput = (e) => {
    setError(false);
    setSuccess(false);
    setErrMessage({
      nameErr: "",
      emailErr: "",
      messageErr: "",
    });
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setErrMessage({ nameErr: "", emailErr: "", messageErr: "" });
    if (formData.name == "") {
      setLoading(false);
      return setErrMessage({ nameErr: "NAME is required" });
    }
    if (formData.email == "") {
      setLoading(false);
      return setErrMessage({ emailErr: "EMAIL is required" });
    }
    if (!validateEmail(formData.email)) {
      setLoading(false);
      return setErrMessage({ emailErr: "Enter a valid EMAIL" });
    }
    if (formData.message == "") {
      setLoading(false);
      return setErrMessage({ messageErr: "MESSAGE is required" });
    }

    const res = await fetch(`${process.env.BASE_URL}/api/contact`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const dbData = await res.json();
    console.log(dbData);
    if (!dbData.err) {
      setLoading(false);
      setSuccess(true);
      setLoading(false);
      console.log(dbData);
    } else {
      setLoading(false);
      setError(true);
      setLoading(false);
      console.log(dbData.err);
    }
  };

  return (
    <div className={styles.container} id="contact">
      <div className={styles.left}>
        <div className={styles.mainBanner}>
          <h1 className={styles.mainHeading}>CONTACT US</h1>
          <p className={styles.mainPara}>
            Get in touch with filling this Contact form, Our Expert team will
            reach out to you
          </p>
        </div>
        <div className={styles.childBanner}>
          <div className={styles.icon}>
            <i class="bx bxs-map"></i>
          </div>
          <p className={styles.para}>
            000, Example Address street City, Country
          </p>
        </div>
        <div className={styles.childBanner}>
          <div className={styles.icon}>
            <i class="bx bxs-phone"></i>
          </div>
          <p className={styles.para}>+91 00000 00000</p>
        </div>
        <div className={styles.childBanner}>
          <div className={styles.icon}>
            <i class="bx bx-envelope"></i>
          </div>
          <p className={styles.para}>contact@chatora.ca</p>
        </div>
        <Image
          src={"/images/contact/background.png"}
          width={800}
          height={900}
          className={styles.backgroundImg}
          alt="Background Image"
        />
      </div>
      <div className={styles.right}>
        <h1 className={styles.heading}>GET IN TOUCH</h1>
        <div className={styles.form}>
          {success && (
            <div className={`${styles.floatingMessage} ${styles.success}`}>
              Form Sent Successfully!
            </div>
          )}
          {error && (
            <div className={`${styles.floatingMessage} ${styles.error}`}>
              Something Went Wrong
            </div>
          )}
          <div className={styles.inputWrapper}>
            <label>{errMessage.nameErr}</label>
            <div className={styles.inputGroup}>
              <div className={styles.formIcon}>
                <i class="bx bx-user"></i>
              </div>
              <input
                name="name"
                type={"name"}
                onChange={(e) => handleInput(e)}
                placeholder="FULL NAME"
                className={styles.input}
              />
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <label>{errMessage.emailErr}</label>
            <div className={styles.inputGroup}>
              <div className={styles.formIcon}>
                <i class="bx bx-envelope"></i>
              </div>
              <input
                type={"email"}
                name={"email"}
                onChange={(e) => handleInput(e)}
                placeholder="EMAIL"
                className={styles.input}
              />
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <label>{errMessage.messageErr}</label>

            <div className={styles.textareaWrapper}>
              <textarea
                name="message"
                onChange={(e) => handleInput(e)}
                className={styles.textarea}
                placeholder={"MESSAGE"}
              ></textarea>
            </div>
          </div>

          {loading ? (
            <button disabled="true" className={styles.button}>
              <i class="bx bx-loader-alt bx-spin"></i>
            </button>
          ) : (
            <button onClick={handleSubmit} className={styles.button}>
              SEND
            </button>
          )}
        </div>
        <div className={styles.iconContainer}>
          <div className={styles.socialIcon}>
            <i class="bx bxl-instagram"></i>
          </div>
          <div className={styles.socialIcon}>
            <i class="bx bxl-facebook"></i>
          </div>
          <div className={styles.socialIcon}>
            <i class="bx bxl-twitter"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
