import image1 from "./image1.jpg";
import image2 from "./image2.png";
import image3 from "./image3.jpeg";
import image4 from "./image4.jpg";
import image5 from "./image5.jpeg";
import image6 from "./image6.jpg";
import image7 from "./image7.jpg";
import image8 from "./image8.jpg";
import image9 from "./image9.jpg";
import image10 from "./image10.jpg";
import image11 from "./image11.jpeg";
const video1 = require("./video1.mp4");
const video2 = require("./video2.mp4");
const video3 = require("./video3.mp4");


const media = [
  {
    id: 0,
    type: "image",
    placeDate: "Nabeul -2019",
    title: "Baccalaureate",
    titleFR: "Baccalauréat",
    description: "After the sports test in Baccalaureate 2019",
    descriptionFR: "Après le test de sport au baccalauréat 2019",
    file: image1,
  },
  {
    id: 1,
    type: "image",
    placeDate: "Sousse - 2019",
    title: "Hackathon",
    titleFR: "Hackathon",
    description: "My first hackathon with new friends and teammates",
    descriptionFR: "Mon premier hackathon avec de nouveaux amis et coéquipiers",
    file: image2,
  },
  {
    id: 2,
    type: "image",
    placeDate: "Sousse - 2019",
    title: "Hackathon",
    titleFR: "Hackathon",
    description:
      "Exhausted after the hackathon, just wanting to sleep (me and my friends)",
    descriptionFR:
      "Épuisé après le hackathon, juste envie de dormir (moi et mes amis)",
    file: image3,
  },
  {
    id: 3,
    type: "image",
    placeDate: "Nabeul -2020",
    title: "Internship",
    titleFR: "Stage",
    description: "My first internship at Neopolis with my roommate and mentor",
    descriptionFR:
      "Mon premier stage chez Neopolis avec mon colocataire et mon mentor",
    file: image4,
  },
  {
    id: 4,
    type: "image",
    placeDate: "Sousse -2022",
    title: "Last day",
    titleFR: "Dernier jour",
    description: "Last day at university before graduation",
    descriptionFR: "Dernier jour à l'université avant la remise des diplômes",
    file: image5,
  },
  {
    id: 5,
    type: "image",
    placeDate: "Sousse -2022",
    title: "Graduation",
    titleFR: "Graduationr",
    description: "Discussing with the jury during my end-of-study internship",
    descriptionFR: "Discussion avec le jury lors de mon stage de fin d'études",
    file: image6,
  },
  {
    id: 6,
    type: "video",
    placeDate: "Sousse -2022",
    title: "Graduation",
    titleFR: "Graduationr",
    description: "Waiting for the judges' results",
    descriptionFR: "En attente des résultats des juges",
    file: video1,
  },
  {
    id: 7,
    type: "image",
    placeDate: "Sousse -2022",
    title: "Graduation",
    titleFR: "Graduationr",
    description: "Me and my colleague after excelling with distinction",
    descriptionFR: "Moi et mon collègue après avoir excellé avec distinction",
    file: image7,
  },
  {
    id: 8,
    type: "image",
    placeDate: "Sousse -2022",
    title: "Graduation",
    titleFR: "Graduationr",
    description: "Me and my classmates during graduation",
    descriptionFR:
      "Moi et mes camarades de classe lors de la remise des diplômes",
    file: image8,
  },
  {
    id: 9,
    type: "image",
    placeDate: "Sousse -2022",
    title: "Graduation",
    titleFR: "Graduationr",
    description: "Another moment with my classmates",
    descriptionFR: "Un autre moment avec mes camarades de classe",
    file: image9,
  },
  {
    id: 10,
    type: "image",
    placeDate: "Sousse -2022",
    title: "Graduation",
    titleFR: "Graduationr",
    description: "With friends who made university life memorable",
    descriptionFR: "Avec des amis qui ont rendu la vie universitaire mémorable",
    file: image10,
  },
  {
    id: 11,
    type: "video",
    placeDate: "Sousse -2022",
    title: "Graduation",
    titleFR: "Graduationr",
    description:
      "Throwing my hat in the air after graduation, celebrating success",
    descriptionFR:
      "Lancer mon chapeau en l'air après la remise des diplômes, célébrant le succès",
    file: video2,
  },
  {
    id: 12,
    type: "image",
    placeDate: "Tunis -2024",
    title: "Semi-finals",
    titleFR: "Demi-finales",
    description:
      "Celebrating our success in reaching the semi-finals of the integration project",
    descriptionFR:
      "Célébrant notre succès pour avoir atteint les demi-finales du projet d'intégration",
    file: image11,
  },
  {
    id: 13,
    type: "video",
    placeDate: "Tunis -2024",
    title: "Semi-finals",
    titleFR: "Demi-finales",
    description: "Presenting during the semi-final event",
    descriptionFR: "Présentation lors de l'événement des demi-finales",
    file: video3,
  },
];

export default media;
