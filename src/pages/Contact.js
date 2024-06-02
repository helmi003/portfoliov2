import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import classes from "../components/Layout/Layout.module.scss";
import FormInput from "../components/FormInput/FormInput";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const { t } = useTranslation();
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
  });
  const [message, setMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_h860sp9",
        "template_cj4awwk",
        e.target,
        "qkDRc-J9QwNGAmCqk"
      )
      .then(
        () => {
          toast.success(t("Your message has been sent successfully"));
        },
        () => {
          toast.error(t("An error accured while sending the data"));
        }
      );
    setValues({name: "",subject : "", email: "",})
    setMessage("")
    setFocused(false)
  };

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: `${t("Name")}`,
      errorMessage:
      `${t("The name should be")}`,
      label: `${t("Name")}`,
      pattern: "^[A-Za-z0-9]{3,20}$",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: `${t("It should be a valid email address")}`,
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "subject",
      type: "text",
      placeholder: `${t("Subject")}`,
      errorMessage: `${t("The subject should not be empty")}`,
      label: `${t("Subject")}`,
      required: true,
    },
  ];
  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className={classes.container__contact}>
      <div className={classes.container__contact__title}>
        <h4>{t("Get in touch")}</h4>
        <h1>Contact</h1>
      </div>
      <div className={classes.container__contact__content}>
        <div className={classes.container__contact__content__left}>
          <ul>
            <li>
              <i className="fa fa-phone fa-2x fa-rotate-90" /> +216 20 499 382
            </li>
            <li>
              <i className="fa fa-envelope fa-2x" />
              <span
                className={classes.container__contact__content__left__span}
              ></span>
              helmi.br1999@gmail.com
            </li>
            <li>
              <i className="fa fa-map-marker fa-2x" /> nabeul 8011,
              <br />
              dar chaaben el fehri, <br />
              {t("Street monsof bey")}
            </li>
          </ul>
        </div>
        <form onSubmit={sendEmail}>
          <div className={classes.container__contact__content__right}>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <label>Message</label>
            <textarea
              type="text"
              id={4}
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="8"
              cols="40"
              pattern="[\s\S]{10,}"
              placeholder="Message"
              onBlur={handleFocus}
              focused={focused.toString()}
              required
            ></textarea>
            <span>{t("The message should contain at least 10 characters")}</span>
            <br />
            <br />
            <button>{t("Send")}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
