import React from "react";
import profile from "../assets/images/helmi4.png";
import classes from "../components/Layout/Layout.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ProjectDiv from "../components/projectDiv/ProjectDiv";
import data from "../data/data";

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={classes.container__home}>
        <div className={classes.container__home__identificator}>
          <div>
            <h1>
              {t("hi")}{" "}
              <span className={classes.container__home__identificator__name}>
                Helmi Ben Romdhane{" "}
              </span>
              <br />
              {t("I Like Building Things")}
              <br />
              <span className={classes.container__home__identificator__title}>
                {t("Mobile and Web Developer")} <br />
                {t("Life Long Learner")}
              </span>
            </h1>
          </div>
          <div>
            <img
              src={profile}
              alt="Profile_picture"
              className={classes.container__home__profile}
            />
          </div>
        </div>
        <div className={classes.container__home__about}>
          <h1>
            {t("About")}{" "}
            <Link to="/About">
              <i className="fa fa-arrow-right"></i> {t("Read more")}
            </Link>
          </h1>
          <p>{t("I_am_a_mobile_and_web_developer")}</p>
        </div>
        <div className={classes.container__home__services}>
          <div className={classes.container__home__services__title}>
            <h4>{t("What i can do")}</h4>
            <h1>{t("Services")}</h1>
          </div>
          <div className={classes.container__home__services__content}>
            <div className={classes.container__home__services__content__div}>
              <i className="fa fa-desktop"></i>
              <h3>{t("web design")}</h3>
              <p>
                {t(
                  "I do ui/ux design for both mobile and web that it helps to get a unique look"
                )}
              </p>
            </div>
            <div className={classes.container__home__services__content__div}>
              <i className="fa fa-code"></i>
              <h3>{t("web dev")}</h3>
              <p>
                {t(
                  "I also develop websites. I always try to create high performance websites"
                )}
              </p>
            </div>
            <div className={classes.container__home__services__content__div}>
              <i className="fa fa-mobile"></i>
              <h3>{t("app Dev")}</h3>
              <p>
                {t(
                  "I develop mobile application. I create mobile app with Flutter"
                )}
              </p>
            </div>
          </div>
        </div>
        <div className={classes.container__home__portfolio}>
          <div className={classes.container__home__services__title}>
            <h4>{t("some of my recent works")}</h4>
            <h1>{t("Projects")}</h1>
          </div>
          <div className={classes.container__home__services__content}>
            {data.slice(-3).map((project) => (
              <ProjectDiv project={project} key={project.id} />
            ))}
          </div>
          <br />
          <div className={classes.container__home__portfolio__more}>
            <h4>
              <Link to="/Portfolio">{t("View more projects")}</Link>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
