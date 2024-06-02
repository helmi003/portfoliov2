import React from "react";
import profile from "../assets/images/helmi2.png";
import classes from "../components/Layout/Layout.module.scss";
import { useTranslation } from "react-i18next";
const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={classes.container__about}>
        <div className={classes.container__about__identificator}>
          <div>
            <h1>
              <span
                className={classes.container__about__identificator__identify}
              >
                {t("hi")}{" "}
                <span className={classes.container__about__identificator__name}>
                  Helmi Ben Romdhane{" "}
                </span>
              </span>
              <br />
              <span className={classes.container__about__identificator__title}>
                {t("Mobile and Web Developer")} <br />
              </span>
            </h1>
            <br />
            <p>{t("I am from Tunisia")}</p>
            <br />
            <p>{t("I started coding since I was in school")}</p>
            <br />
            <p>{t("My vision is to make the world a better place")}</p>
            <br />
            <p>{t("With a passion for innovation")}</p>
          </div>
          <div>
            <img
              src={profile}
              alt="Profile_picture"
              className={classes.container__about__profile}
            />
          </div>
        </div>
        <div className={classes.container__about__rest}>
          <div>
            <h1>{t("EDUCATION")}</h1>
            <div className={classes.container__about__rest__part}>
              <div className={classes.container__about__rest__part__col1}>
                <div>{t("School")}</div>
                <div>{t("University")}</div>
              </div>
              <div className={classes.container__about__rest__part__col2}>
                <div>
                  <span>dar chaaben el fehri</span>
                </div>
                <div>
                  <span>ISET Sousse</span> <span>Esprit</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1>{t("MY SKILLS")}</h1>
            <div className={classes.container__about__rest__part}>
              <div className={classes.container__about__rest__part__col1}>
                <div>FrontEnd</div>
                <div>BackEnd</div>
                <div>{t("Data base")}</div>
                <div>{t("Languages")}</div>
                <div>UI/UX</div>
              </div>
              <div className={classes.container__about__rest__part__col2}>
                <div>
                  <span>Next-js</span> <span>React-js</span>
                  <span>Flutter</span> <span>Angular</span> <span>Symfony</span>
                </div>
                <div>
                  <span>Django</span> <span>Node-js</span> <span>Symfony</span>{" "}
                  <span>Spring boot</span>
                </div>
                <div>
                  <span>Firebase</span> <span>MongoDB</span> <span>MySQL</span>{" "}
                  <span>PostgreSQL</span>
                </div>
                <div>
                  <span>Python</span> <span>Dart</span> <span>Java</span>{" "}
                  <span>JavaScript</span> <span>CSS</span> <span>HTML</span>{" "}
                  <span>PHP</span> <span>BootStrap</span> <span>TS</span>
                </div>
                <div>
                  <span>Figma</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1>
              {t("EXPERIENCE")} : {t("Internships")}
            </h1>
            <div className={classes.container__about__rest__part}>
              <div className={classes.container__about__rest__part__col1}>
                <div>Neopolis</div>
                <div>AfterCode</div>
                <div>Meta Service</div>
              </div>
              <div className={classes.container__about__rest__part__col2}>
                <div>
                  <span>Nabeul</span> <span>{t("FrontEnd Developer")}</span>
                </div>
                <div>
                  <span>Nabeul</span>{" "}
                  <span>{t("FrontEnd and BackEnd Developer")}</span>
                </div>
                <div>
                  <span>Sousse</span>{" "}
                  <span>{t("FrontEnd and BackEnd Developer")}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1>{t("Currently")}</h1>
            <p>{t("I am studying at ISET Sousse")}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
