import React, { useState } from "react";
import classes from "../components/Layout/Layout.module.scss";
import ProjectDiv from "../components/projectDiv/ProjectDiv";
import ErrorMessage from "../components/Error/Error.js";
import { useTranslation } from "react-i18next";
import data from "../data/data";

const Portfolio = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState(data);
  const reversedResults = [...searchResults].reverse();
  const handleSearch = (searchValue) => {
    const filteredResults = data.filter((project) =>
      project.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <>
      <div className={classes.container__portfolio}>
        <div className={classes.container__portfolio__search}>
          <h1>{t("Some of my recent works")}</h1>
          <input
            type="text"
            id="search"
            name="search"
            value={search}
            placeholder={t("Search")}
            onChange={handleInputChange}
          />
        </div>
        <div className={classes.container__portfolio__content}>
          {reversedResults.length > 0 ? (
            reversedResults.map((project) => (
              <ProjectDiv project={project} key={project.id} />
            ))
          ) : (
            <ErrorMessage>{t("There is no project with this name")}</ErrorMessage>
          )}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
