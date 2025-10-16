import React, { useState } from "react";
import ProjectDiv from "../components/ProjectDiv";
import ErrorMessage from "../components/ErrorMessage";
import { useTranslation } from "react-i18next";
import data from "../data/data";
import Grid from "@mui/material/Grid2";
import TextFieldCompnent from "../components/TextFieldComponent";
import { Box, Typography } from "@mui/material";

const Portfolio = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState(data);
  const reversedResults = [...searchResults].reverse();
  const handleSearch = (searchValue) => {
    const filteredResults = data.filter((project) =>
      project.title.toLowerCase().includes(searchValue.toLowerCase())
      || project.about.toLowerCase().includes(searchValue.toLowerCase())
      || project.aboutFR.toLowerCase().includes(searchValue.toLowerCase())
      || project.date.toLowerCase().includes(searchValue.toLowerCase())
      || project.dateFR.toLowerCase().includes(searchValue.toLowerCase())
      || project.place.toLowerCase().includes(searchValue.toLowerCase())
      || project.placeFR.toLowerCase().includes(searchValue.toLowerCase())
      || project.type.toLowerCase().includes(searchValue.toLowerCase())
      || project.typeFR.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <Box>
      <Box
        gap={2}
        mb={5}
        flexWrap="wrap"
        display="flex"
        justifyContent={{ xs: "center", sm: "space-between" }}
        alignItems="center"
        textAlign={{ xs: "center", sm: "left" }}
      >
        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          {t("Some of my recent works")}
        </Typography>
        <TextFieldCompnent
          sx={{ maxWidth: 400, width: "100%" }}
          type="text"
          label={t("Search")}
          placeholder={t("Search by")}
          change={handleInputChange}
          value={search}
          name="search"
        />
      </Box>

      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {reversedResults.length > 0 ? (
          reversedResults.map((project) => (
            <ProjectDiv
              project={project}
              search={search}
              key={project.id}
            />
          ))
        ) : (
          <ErrorMessage>{t("There is no project with this name")}</ErrorMessage>
        )}
      </Grid>
    </Box>
  );
};

export default Portfolio;
