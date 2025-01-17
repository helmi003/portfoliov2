import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import * as yup from "yup";
import TextFieldCompnent from "../components/TextFieldComponent";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import ButtonComponent from "../components/ButtonComponent";

const Contact = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const theme = useTheme();
  const schema = yup.object().shape({
    name: yup.string().required(t("This field is required")),
    email: yup
      .string()
      .email(t("It should be a valid email address"))
      .required(t("This field is required")),
    subject: yup.string().required(t("This field is required")),
    message: yup
      .string()
      .required(t("This field is required"))
      .min(10, t("The message should contain at least 10 characters")),
  });
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const handleFormSubmit = (values, { resetForm }) => {
    console.log("Form Submitted", values);
    setLoading(true);
    const form = document.createElement("form");
    Object.keys(values).forEach((key) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = values[key];
      form.appendChild(input);
    });
    emailjs
      .sendForm(
        "service_h860sp9",
        "template_cj4awwk",
        form,
        "qkDRc-J9QwNGAmCqk"
      )
      .then(
        () => {
          setLoading(false);
          toast.success(t("Your message has been sent successfully"));
          resetForm();
        },
        () => {
          setLoading(false);
          toast.error(t("An error accured while sending the data"));
        }
      );
  };

  const items = [
    {
      icon: <PhoneIcon fontSize="large" />,
      text: "+216 20 499 382",
    },
    {
      icon: <MailIcon fontSize="large" />,
      text: "helmi.br1999@gmail.com",
    },
    {
      icon: <PlaceIcon fontSize="large" />,
      text: `Nabeul 8011, dar chaaben el fehri, ${t("Street monsof bey")}`,
    },
  ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="body2">{t("Get in touch")}</Typography>
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          Contact
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1px 1fr",
          gap: isMobile ? 2 : 10,
          alignItems: "start",
          padding: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            maxWidth: 400,
            width: "100%",
            fontWeight: 500,
            color: theme.palette.light.main,
          }}
        >
          {items.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                padding: 2,
                borderRadius: 4,
                backgroundColor: theme.palette.primary.main,
              }}
            >
              <Box
                sx={{
                  color: theme.palette.dark.main,
                  backgroundColor: theme.palette.light.main,
                  borderRadius: "50%",
                  padding: "6px",
                  marginRight: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </Box>
              {item.text}
            </Box>
          ))}
        </Box>
        {!isMobile && (
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              width: "1px",
              height: "100%",
            }}
          />
        )}
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={schema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  maxWidth: 400,
                  width: "100%",
                }}
              >
                <TextFieldCompnent
                  type="text"
                  label={t("Name and last name")}
                  change={handleChange}
                  value={values.name}
                  name="name"
                  blur={handleBlur}
                  touched={touched.name}
                  error={errors.name}
                />
                <TextFieldCompnent
                  type="text"
                  label="E-mail"
                  change={handleChange}
                  value={values.email}
                  name="email"
                  blur={handleBlur}
                  touched={touched.email}
                  error={errors.email}
                />
                <TextFieldCompnent
                  type="text"
                  label={t("Subject")}
                  change={handleChange}
                  value={values.subject}
                  name="subject"
                  blur={handleBlur}
                  touched={touched.subject}
                  error={errors.subject}
                />
                <TextFieldCompnent
                  type="text"
                  label={t("Message...")}
                  change={handleChange}
                  value={values.message}
                  name="message"
                  blur={handleBlur}
                  touched={touched.message}
                  error={errors.message}
                  multiline
                  rows={4}
                />
                <ButtonComponent loading={loading} text={t("Send")} />
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default Contact;
