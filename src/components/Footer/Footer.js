import React from "react";
import { useTranslation } from "react-i18next";
import classes from "../Footer/Footer.module.scss";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__icons}>
        <div className={classes.footer__icons__icon}>
          <a href="https://www.facebook.com/helmi.benromdhane.9">
            <i className="fab fa-facebook" />
          </a>
        </div>
        <div className={classes.footer__icons__icon}>
          <a href="https://twitter.com/HelmiBenRomdha8">
            <i className="fab fa-twitter" />
          </a>
        </div>
        <div className={classes.footer__icons__icon}>
          <a href="https://github.com/helmi003">
            <i className="fab fa-github" />
          </a>
        </div>
        <div className={classes.footer__icons__icon}>
          <a href="https://www.linkedin.com/in/helmi-ben-romdhane/">
            <i className="fab fa-linkedin" />
          </a>
        </div>
        <div className={classes.footer__icons__icon}>
          <a href="https://www.instagram.com/helmi_b.r/">
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
      <div className={classes.footer__span}>
        <span>{t("All rights reserved")} © 2022 . </span>
        <span className={classes.footer__span__name}>Helmi Ben Romdhane</span>
      </div>
    </footer>
  );
};

export default Footer;
