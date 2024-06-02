import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import classes from "../components/Layout/Layout.module.scss";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import cookies from "js-cookie";
import data from "../data/data";

export default function Project() {
  const lang = cookies.get("i18next") || "en";
  const { t } = useTranslation();
  let { id } = useParams();
  const project = data[id];
  return (
    <>
      <div className={classes.container__project}>
        <h1>{project?.title}</h1>
        <p>{lang === "en" ? project?.subtitle : project?.subtitleFR} </p>
        <hr />
        <h2>{t("About the project")}</h2>
        <p>{lang === "en" ? project?.about : project?.aboutFR} </p>
        <br />
        {project?.link ? (
          <div>
            <h2>
              {t("Link")}: <a href={project.link}>{project.link}</a>
            </h2>
            <br />
          </div>
        ) : null}
        <h2>{t("Technologies")}</h2>
        <ul>
          {project.technologies?.map((technologie) => (
            <li key={technologie}>{technologie}</li>
          ))}
        </ul>
        <br />
        <h2>{t("Screenshots")}</h2>
        <ImageSlider slides={project?.screenshots} />
        <br />
        <h2>{t("Showcase")}</h2>
        <div className={classes.container__project__buttons}>
          {project?.showcase?.[0] === "" ? (
            <button className={classes.container__project__buttons__button1}>
              DEMO
            </button>
          ) : (
            <a href={project?.showcase?.[0]}>
              <button className={classes.container__project__buttons__button1}>
                DEMO
              </button>
            </a>
          )}
          {project?.showcase?.[1] === "" ? (
            <button className={classes.container__project__buttons__button2}>
              SOURCE CODE
            </button>
          ) : (
            <a href={project?.showcase?.[1]}>
              <button className={classes.container__project__buttons__button2}>
                SOURCE CODE
              </button>
            </a>
          )}
        </div>
      </div>
    </>
  );
}
