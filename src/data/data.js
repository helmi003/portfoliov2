import images0 from "./1st internship/images";
import images1 from "./hackathon/images";
import images2 from "./ripshark/images";
import images3 from "./2nd internship/images";
import images4 from "./learneur/images";
import images5 from "./movie app/images";
import images6 from "./grabit/images";
import images7 from "./whisper/images";
import images8 from "./castflix/images";
import images9 from "./eat me/images";
import images10 from "./tacos korner app/images";
import images11 from "./tacos korner dashboard/images";
import images12 from "./sales management/images";
import images13 from "./rehabilitation/images";
import images14 from "./hfbatiment app/images";
import images15 from "./hfbatiment dasboard/images";
import images16 from "./esprit piazza/images";
import images17 from "./bmp tunisie/images";
import images18 from "./trutech/images";
import images19 from "./truetech dashboard/images";
import images20 from "./maggy/images";
import images21 from "./winshot/images";
import images22 from "./tacos korner cashier app/images";

const data = [
  {
    id: 0,
    date: "January-February 2020",
    type: "Internship - Neopolis",
    place: "Nabeul",
    placeFR: "Nabeul",
    title: "The launch of my journey",
    subtitle:
      "This was the first time i've been able to put into practice my theoretical knowledge acquired during my studies career and face the difficulties of the world of work. It was very enriching",
    about:
      "One of my key achievements during this internship was the creation of a native movie website using HTML5, CSS3, Bootstrap, and other relevant technologies.\n In addition, I also had the chance to work with Python and utilized the pandas library to organize and manipulate an XML file efficiently.",
    dateFR: "Janvier-Février 2020",
    typeFR: "Stage - Neopolis",
    subtitleFR:
      "C'était la première fois que j'ai pu mettre en pratique mes connaissances théoriques acquises tout au long de ma carrière d'études et faire face aux difficultés du monde du travail. Cela a été très enrichissant.",
    aboutFR:
      "L'une de mes réalisations clés lors de ce stage a été la création d'un site web de films natif en utilisant HTML5, CSS3, Bootstrap et d'autres technologies pertinentes. De plus, j'ai également eu l'occasion de travailler avec Python et j'ai utilisé la bibliothèque pandas pour organiser et manipuler efficacement un fichier XML.",
    technologies: ["HTML/CSS/BootStrap/javascript/PHP", "Panda(Python)"],
    tasks: [
      "Creating a native website for movies.",
      "Reorganizing XML files to improve readability.",
    ],
    screenshots: [...images0],
    showcase: ["", "https://github.com/helmi003/1st-internship"],
  },
  {
    id: 1,
    date: "December 2019",
    type: "Academic project - ISET",
    place: "Sousse",
    placeFR: "Sousse",
    title: "Kids world",
    subtitle:
      "In 2019, I participated in a hackathon at my university (ISET Sousse) with a team of four people. The objective of the hackathon was to develop a (machine/game/mobile app/website...) that could assist parents in raising their children in a more effective manner in 12h from. This was motivated by the significant influence technology has on children nowadays.",
    about:
      "Since we were learning software development, we made the decision to create a website for our hackathon project utilizing various programming languages. The objective of the website was to offer a range of resources, including books, time management tools, and educational games.",
    dateFR: "Décembre 2019",
    typeFR: "Projet académique - ISET",
    subtitleFR:
      "En 2019, j'ai participé à un hackathon dans mon université(ISET Sousse) avec une équipe de quatre personnes. L'objectif du hackathon était de développer une (machine/jeu/application mobile/site web...) qui pourrait aider les parents à élever leurs enfants de manière plus efficace en seulement 12 heures. Cette initiative était motivée par l'influence considérable que la technologie exerce sur les enfants de nos jours.",
    aboutFR:
      "Étant donné que nous étions en train d'apprendre le développement de logiciels, nous avons pris la décision de créer un site web pour notre projet de hackathon en utilisant différents langages de programmation. L'objectif du site web était d'offrir une gamme de ressources, comprenant des livres, des outils de gestion du temps et des jeux éducatifs.",
    technologies: ["HTML/CSS/BootStrap/PHP/javascript"],
    tasks: [
      "Created a responsive user interface that works for both web and mobile scales.",
      "Added online educational games for kids.",
      "Developed a time management screen to schedule children's daily activities.",
      "Provided advice on how to treat and educate children effectively.",
    ],
    tasksFR: [
      "Création d'une interface utilisateur responsive fonctionnant à la fois sur des échelles web et mobiles.",
      "Ajout de jeux éducatifs en ligne pour les enfants.",
      "Mise en place d'un écran de gestion du temps permettant de planifier les activités quotidiennes des enfants.",
      "Proposition de conseils pratiques sur la manière de traiter et d'éduquer ses enfants.",
    ],
    screenshots: [...images1],
    showcase: ["", "https://github.com/helmi003/hackathon-2019"],
  },
  {
    id: 2,
    date: "September-December 2019",
    type: "Academic project - ISET",
    place: "Sousse",
    placeFR: "Sousse",
    title: "RipShark",
    subtitle:
      "This website was developed as part of my second year in university for a course called 'Project Integration'. As per our professor's recommendation, each student was required to create and develop a website based on the subjects he requested.",
    about:
      "My project involved developing a surf website that aimed to showcase surfing locations across Tunisia. The website included information about each surfing spot, categories, and clubs where people could join. Additionally, there was an admin page for managing the website's content, as well as an online store where visitors could purchase items such as clothing, accessories, and other related products.",
    dateFR: "Septembre-Décembre 2019",
    typeFR: "Projet académique - ISET",
    subtitleFR:
      "Ce site web a été développé dans le cadre de ma deuxième année au université pour un cours appelé 'Intégration de projet'. Conformément à la recommandation de notre professeur, chaque étudiant devait créer et développer un site web en fonction des sujets qu'il avait demandés.",
    aboutFR:
      "Mon projet consistait à développer un site web sur le surf qui avait pour objectif de présenter les spots de surf en Tunisie. Le site web incluait des informations sur chaque spot de surf, des catégories et des clubs auxquels les gens pouvaient se joindre. De plus, il y avait une page d'administration pour gérer le contenu du site web, ainsi qu'une boutique en ligne où les visiteurs pouvaient acheter des articles tels que des vêtements, des accessoires et d'autres produits connexes.",
    technologies: ["HTML/CSS/BootStrap/PHP/javascript"],
    tasks: [
      "Implemented authentication management, including login, logout, session management, and user sign-up.",
      "Developed a management system for a small shop to sell surfing equipment such as shorts, boards, and clothing.",
      "Created a user management module allowing users to register and join surf clubs.",
      "Designed and implemented an admin dashboard to manage website content, products, and user activities.",
    ],
    tasksFR: [
      "Mise en œuvre de la gestion de l'authentification, incluant la connexion, la déconnexion, la gestion des sessions et l'inscription des utilisateurs.",
      "Développement d'un système de gestion pour une petite boutique vendant des équipements de surf tels que des shorts, des planches et des vêtements.",
      "Création d'un module de gestion des utilisateurs permettant aux utilisateurs de s'inscrire et de rejoindre des clubs de surf.",
      "Conception et mise en œuvre d'un tableau de bord d'administration pour gérer le contenu du site web, les produits et les activités des utilisateurs.",
    ],
    screenshots: [...images2],
    showcase: ["", "https://github.com/helmi003/ripshark"],
  },
  {
    id: 3,
    date: "July-August 2021",
    type: "Internship - AfterCode",
    place: "Nabeul",
    placeFR: "Nabeul",
    title: "BLP Tunisie",
    subtitle:
      "This internship provided me with another opportunity to confront the challenges of the professional world. It allowed me to gain valuable experience and further develop my skills while encountering the realities and complexities of the workplace.",
    about:
      "I was assigned the task of enhancing the performance of a website called 'BLP', which was already under development. My responsibilities include: \nImplementing multi-language support to ensure the website is available in various languages.\nEnhancing the website's layout to create a pleasing user experience.\nCreating a dedicated 'Contact Us' page to facilitate communication with users.\nIntegrating a database system to efficiently manage and store website data.",
    dateFR: "Juillet-Août 2021",
    typeFR: "Stage - AfterCode",
    subtitleFR:
      "Ce stage m'a offert une nouvelle occasion de faire face aux défis du monde professionnel. Il m'a permis d'acquérir une expérience précieuse et de développer davantage mes compétences tout en faisant face aux réalités et aux complexités du milieu de travail.",
    aboutFR:
      "On m'a confié la tâche d'améliorer les performances d'un site web appelé 'BLP', qui était déjà en cours de développement. Mes responsabilités comprenaient :\nMise en place d'un support multilingue pour rendre le site web disponible dans différentes langues.\nAmélioration de la mise en page du site web afin de créer une expérience utilisateur agréable.\nCréation d'une page dédiée 'Contactez-nous' pour faciliter la communication avec les utilisateurs.\nIntégration d'un système de base de données pour gérer et stocker efficacement les données du site web.",
    technologies: ["Next-js", "Django", "Nodemailer", "PostgreSQL"],
    tasks: [
      "Adding a contact screen.",
      "Implementing internationalization (FR/EN/AR).",
      "Integrating with the database.",
      "Enhancing interfaces.",
    ],
    tasksFR: [
      "Ajout d'une page de contact.",
      "Implémentation de l'internationalisation (FR/EN/AR).",
      "Intégration de la  base de données.",
      "Amélioration des interfaces.",
    ],
    screenshots: [...images3],
    showcase: ["https://blp.tn/en", "https://github.com/helmi003/blp-Frontend"],
  },
  {
    id: 4,
    date: "Obtober-Decembre 2021",
    type: "Academic project - ISET",
    place: "Sousse",
    placeFR: "Sousse",
    title: "Learneur",
    subtitle:
      "Developing a mobile application during my third year in university was a new experience for me, especially since it was my first time working with the Flutter framework. I dedicated my efforts to create a functional and user-friendly mobile application, leveraging the capabilities provided by Flutter to build a cross-platform solution. This project allowed me to explore the world of mobile app development and apply my skills in a practical setting.",
    dateFR: "Obtobre-Décembre 2021",
    typeFR: "Projet académique - ISET",
    about:
      "The mobile application I developed during my third year of university was a course app that catered to both students and professors. As a professor, the app allowed me to add new courses, enabling students to stay updated with the latest information and announcements. On the other hand, as a student, I could access the app to view course details, including information about assignments, schedules, and other relevant materials. In addition to course-related features, the app also incorporated a real-time chat feature using Firebase. This chat functionality facilitated communication and collaboration among students and professors within the app, enhancing the overall learning experience.",
    aboutFR:
      "Le développement d'une application mobile pendant ma troisième année au université a été une nouvelle expérience pour moi, surtout parce que c'était la première fois que je travaillais avec le framework Flutter. J'ai consacré mes efforts à créer une application mobile fonctionnelle et conviviale, en exploitant les capacités offertes par Flutter pour construire une solution multiplateforme. Ce projet m'a permis d'explorer le monde du développement d'applications mobiles et d'appliquer mes compétences dans un cadre pratique.",
    subtitleFR:
      "L'application mobile que j'ai développée pendant ma troisième année d'université était une application de cours qui répondait aux besoins des étudiants et des professeurs. En tant que professeur, l'application me permettait d'ajouter de nouveaux cours, permettant aux étudiants de rester informés des dernières informations et annonces. D'un autre côté, en tant qu'étudiant, je pouvais accéder à l'application pour consulter les détails des cours, y compris les informations sur les devoirs, les horaires et d'autres documents pertinents. En plus des fonctionnalités liées aux cours, l'application intégrait également une fonctionnalité de chat en temps réel utilisant Firebase. Cette fonctionnalité de chat facilitait la communication et la collaboration entre les étudiants et les professeurs au sein de l'application, améliorant ainsi l'expérience d'apprentissage globale.",
    technologies: ["Fluter", "Firebase"],
    tasks: [
      "Development of course management.",
      "Implementation of message and online call management.",
      "Implementation of profile management and authentication.",
    ],
    tasksFR: [
      "Développement de la gestion des cours.",
      "Mise en place de la gestion des messages et des appels en ligne.",
      "Implémentation de la gestion des profils et de l'authentification.",
    ],
    screenshots: [...images4],
    showcase: ["", "https://github.com/helmi003/learneur"],
  },
  {
    id: 5,
    date: "Decembre 2021",
    type: "Academic project - ISET",
    place: "Sousse",
    placeFR: "Sousse",
    title: "Movie App",
    subtitle:
      "This second mobile application was developed during my third year of university.",
    about:
      "The app provides two user roles: client and seller/cinema owner. \nAs a client, users could log in to the app and browse through the available movies with the option to view movie details. Additionally, clients could make reservations for specific movie showtimes on their preferred dates.\nOn the other hand, the seller or cinema owner have access to additional functionalities. Add movies to the platform, including details like title, genre, duration, and showtimes. Also consult the reservations made by clients, review them, and confirm or manage them accordingly.",
    dateFR: "Décembre 2021",
    typeFR: "Projet académique - ISET",
    subtitleFR:
      "Cette deuxième application mobile a été développée pendant ma troisième année à l'université.",
    aboutFR:
      "L'application offre deux rôles d'utilisateurs : client et vendeur/propriétaire de cinéma.\nEn tant que client, les utilisateurs peuvent se connecter à l'application et parcourir les films disponibles avec la possibilité de consulter les détails des films. De plus, les clients peuvent effectuer des réservations pour des séances de cinéma spécifiques à leurs dates préférées.\nEn revanche, le vendeur ou le propriétaire du cinéma a accès à des fonctionnalités supplémentaires. Il peut ajouter des films à la plateforme, y compris des détails tels que le titre, le genre, la durée et les horaires de projection. Il peut également consulter les réservations effectuées par les clients, les examiner et les confirmer ou les gérer en conséquence.",
    technologies: ["Flutter", "Firebase"],
    tasks: [
      "Implemented role management to differentiate between clients and sellers/cinema owners.",
      "Developed authentication features including user login and role-based access control.",
      "Designed a movie management module for sellers to add, update, and remove movies with details such as title, genre, duration, and showtimes.",
      "Created a reservation management system allowing clients to reserve movie showtimes and sellers to review and manage reservations.",
    ],
    tasksFR: [
      "Mise en œuvre de la gestion des rôles pour différencier les clients des vendeurs/propriétaires de cinéma.",
      "Développement de fonctionnalités d'authentification, incluant la connexion des utilisateurs et le contrôle d'accès basé sur les rôles.",
      "Conception d'un module de gestion des films permettant aux vendeurs d'ajouter, de mettre à jour et de supprimer des films avec des détails tels que le titre, le genre, la durée et les horaires de projection.",
      "Création d'un système de gestion des réservations permettant aux clients de réserver des séances de cinéma et aux vendeurs de consulter et de gérer les réservations.",
    ],
    screenshots: [...images5],
    showcase: ["", "https://github.com/helmi003/MovieApp"],
  },
  {
    id: 6,
    date: "February-June 2022",
    type: "Internship - MetaService",
    place: "Remotely | Sousse",
    placeFR: "Télétravail|Sousse",
    title: "Grabit",
    subtitle:
      "This internship stands out as one of the most exceptional experiences I have had in a long time, as it allowed me to undertake a full-scale project from inception to completion.",
    about:
      "I was entrusted with the development of a mobile application exclusively designed for the delivery process, targeting the delivery man.This application provides a Voi-IP (Voice over IP) to secure customers' personal information, Providing a simpler GPS tracking, Send SMS code verification and taking photos for the order to confirm the reception.",
    dateFR: "février-juin 2022",
    typeFR: "Stage - MetaService",
    subtitleFR:
      "Cet stage se démarque comme l'une des expériences les plus exceptionnelles que j'ai vécues depuis longtemps, car il m'a permis de mener à bien un projet à grande échelle, de sa conception à sa réalisation complète.",
    aboutFR:
      "On m'a confié le développement d'une application mobile exclusivement conçue pour le processus de livraison, ciblant le livreur. Cette application fournit une communication VoIP (Voice over IP) pour sécuriser les informations personnelles des clients. Elle offre également un suivi GPS simplifié, l'envoi d'un code de vérification par SMS, et la possibilité de prendre des photos de la commande pour confirmer la réception.",
    technologies: [
      "Fluter",
      "TSOA",
      "Twilio",
      "Firebase",
      "MongoDB",
      "CheckMobi",
      "Rest-API",
    ],
    tasks: [
      "Implementing GPS location tracking.",
      "Managing notifications via SMS, phone calls with VoIP, and emails.",
      "Set up a QR code system.",
      "Creating a chat system between users.",
    ],
    tasksFR: [
      "Implémentation du suivi de localisation par GPS.",
      "Gestion des notifications via SMS, appels téléphoniques avec VoIP et emails.",
      "Mise en place d'un système de QR code",
      "Création d'un système de chat entre les utilisateurs.",
    ],
    screenshots: [...images6],
    showcase: ["", ""],
  },
  {
    id: 7,
    date: "July-September 2022",
    type: "Personal Project",
    place: "Nabeul",
    placeFR: "Nabeul",
    title: "Whisper",
    subtitle:
      "During the summer, I took the initiative to enhance my development skills by creating multiple apps and websites. My goal was to gain practical experience and expand my knowledge in the field",
    about:
      "I have developed a mobile application called 'Whisper'. This app combines features similar to both Facebook and Messenger. Here are some of the functionalities I implemented:\nSign in and sign up: Users could create a new account or sign in to an existing account, providing a personalized experience.\nwith the ability to edit their profiles.\nUsers could scroll through the available posts in the app. These posts would include updates, photos, and other shared content.\nwith the possibility to create their own posts and share them with their friends.\nUsers could like and comment on posts.\nUsers had the ability to chat with their friends through personal messages or participate in group conversations. This enabled both one-on-one and group communication within the app.",
    dateFR: "Juillet-Septembre 2022",
    typeFR: "projet personnel",
    subtitleFR:
      "Durant l'été, j'ai pris l'initiative d'améliorer mes compétences en développement en créant plusieurs applications et sites web. Mon objectif était d'acquérir une expérience pratique et d'élargir mes connaissances dans le domaine.",
    aboutFR:
      "J'ai développé une application mobile appelée 'Whisper'. Cette application combine des fonctionnalités similaires à la fois à Facebook et à Messenger. Voici quelques fonctionnalités que j'ai implémentées :\nLes utilisateurs peuvent créer un nouveau compte ou se connecter à un compte existant, offrant ainsi une expérience personnalisée, avec la possibilité de modifier leurs profils.\nLes utilisateurs peuvent parcourir les publications disponibles dans l'application. Ces publications peuvent inclure des mises à jour, des photos et d'autres contenus partagés.\nLes utilisateurs peuvent créer leurs propres publications et les partager avec leurs amis.\nLes utilisateurs peuvent aimer et commenter les publications.\nLes utilisateurs peuvent discuter avec leurs amis via des messages personnels ou participer à des conversations de groupe. Cela permet à la fois la communication individuelle et en groupe au sein de l'application.",
    technologies: ["Fluter", "Firebase"],
    tasks: [
      "Implementation of post management.",
      "Development of messaging group management.",
      "Implementation of private message management.",
      "User profile management.",
      "Integration of an authentication system.",
    ],
    tasksFR: [
      "Mise en place de la gestion des publications.",
      "Développement de la gestion des groupes de messagerie.",
      "Implémentation de la gestion des messages privés.",
      "Gestion des profils utilisateurs.",
      "Intégration d'un système d'authentification.",
    ],
    screenshots: [...images7],
    showcase: ["", "https://github.com/helmi003/whisper"],
  },
  {
    id: 8,
    date: "December 2022",
    type: "Freelance",
    place: "Remotely | France",
    placeFR: "Télétravail | France",
    title: "Castflix",
    subtitle:
      "During my master's degree, I undertook a freelance project to develop an application called 'Castflix.' This application is available for download on the Play Store.",
    about:
      "Castflix is a video streaming platform that provides users with a diverse selection of content. To access the app, users need to follow these instructions:\nInstall the Castflix app from the app store.\nOnce the app is installed, read the instructions provided on the screen.\nRetrieve the unique code displayed on the screen.\nNavigate to the Castflix dashboard.\nEnter the code obtained earlier in the designated area of the dashboard.\nIn the dashboard, users can create lists of content that they want to stream.\nKey features of Castflix include:\nVideo Streaming: Users can stream videos once they have added them to their lists in the dashboard.\nSubscription: Users can opt for a monthly subscription by confirming it with the app manager. This subscription allows them to stream videos and pictures without any interruptions.\nCastflix offers a convenient and user-friendly platform for video streaming, enabling users to manage their content and enjoy a seamless viewing experience.",
    dateFR: "Decembre 2022",
    typeFR: "Freelance",
    subtitleFR:
      "Pendant ma maîtrise, j'ai entrepris un projet en freelance pour développer une application appelée 'Castflix'. Cette application est disponible en téléchargement sur le Play Store.",
    aboutFR:
      "Castflix est une plateforme de streaming vidéo qui offre aux utilisateurs une sélection diversifiée de contenu. Pour accéder à l'application, les utilisateurs doivent suivre les instructions suivantes :\nInstaller l'application Castflix depuis le magasin d'applications.\nUne fois l'application installée, lire les instructions fournies à l'écran.\nRécupérer le code unique affiché à l'écran.\nAccéder au tableau de bord Castflix.\nSaisir le code obtenu précédemment dans la zone désignée du tableau de bord.\nDans le tableau de bord, les utilisateurs peuvent créer des listes de contenu qu'ils souhaitent diffuser en continu.\nLes principales fonctionnalités de Castflix comprennent :\nStreaming vidéo : les utilisateurs peuvent diffuser des vidéos une fois qu'ils les ont ajoutées à leurs listes dans le tableau de bord.\nAbonnement : les utilisateurs peuvent opter pour un abonnement mensuel en le confirmant auprès du gestionnaire de l'application. Cet abonnement leur permet de diffuser des vidéos et des images sans interruptions.\nCastflix offre une plateforme pratique et conviviale pour le streaming vidéo, permettant aux utilisateurs de gérer leur contenu et de profiter d'une expérience de visionnage fluide.",
    technologies: ["Fluter"],
    tasks: [
      "Adding a subscription management module.",
      "Enhancing UI/UX.",
      "Integrating video streaming and screen sharing connected to the dashboard.",
      "Consuming APIs.",
    ],
    tasksFR: [
      "Ajout d’un module de gestion des abonnements",
      "Amelioration de UI/UX",
      "Ajout du streaming vidéo et du partage d’écran connecté au tableau de bord",
      "Consommation des Apis",
    ],
    screenshots: [...images8],
    showcase: [
      "https://play.google.com/store/apps/details?id=com.pixigrad.castflix&hl=en&gl=US",
      "",
    ],
  },
  {
    id: 9,
    date: "June-December 2023",
    type: "Personal Project",
    place: "Nabeul",
    placeFR: "Nabeul",
    title: "Eat me",
    subtitle:
      "During my master's degree, I took the initiative to enhance my development skills in web development so i decided to develop an application called 'Eat me'.",
    about:
      "Eat Me is a restaurant website that provides comprehensive information about the establishment, including its location, menu, contact details, and more. Users can visit the website to explore the various dishes offered, learn about the restaurant's ambiance, and gather all the necessary information before planning a visit.\nAdditionally, Eat Me offers an online ordering system that allows customers to place their orders directly through the website. Users can browse the menu, select their desired dishes, specify any customizations or dietary preferences, and provide the necessary details for delivery, such as address and contact information. This convenient feature saves customers time and offers a seamless ordering experience.\nMoreover, the website provides a reservation functionality, enabling users to reserve a table for a specific date and time. Users can select their preferred date and time slot, enter their contact information, and receive a confirmation of their reservation. As the reserved date approaches, users can opt to receive notifications as a reminder, ensuring they don't miss their reservation.",
    dateFR: "Juin-Decembre 2023",
    typeFR: "projet personnel",
    subtitleFR:
      "Pendant ma maîtrise, j'ai pris l'initiative d'améliorer mes compétences en développement web, j'ai donc décidé de développer une application appelée 'Eat me'.",
    aboutFR:
      "Eat Me est un site web de restaurant qui fournit des informations complètes sur l'établissement, y compris son emplacement, son menu, ses coordonnées, et bien plus encore. Les utilisateurs peuvent visiter le site web pour explorer les différents plats proposés, en apprendre davantage sur l'ambiance du restaurant et rassembler toutes les informations nécessaires avant de planifier une visite.\nDe plus, Eat Me propose un système de commande en ligne qui permet aux clients de passer leurs commandes directement via le site web. Les utilisateurs peuvent parcourir le menu, sélectionner les plats souhaités, spécifier des adaptations ou des préférences alimentaires spécifiques, et fournir les informations nécessaires pour la livraison, telles que l'adresse et les coordonnées de contact. Cette fonctionnalité pratique permet de gagner du temps aux clients et offre une expérience de commande fluide.\nDe plus, le site web offre une fonctionnalité de réservation, permettant aux utilisateurs de réserver une table pour une date et une heure spécifiques. Les utilisateurs peuvent sélectionner leur date et leur créneau horaire préférés, saisir leurs informations de contact et recevoir une confirmation de leur réservation. À l'approche de la date réservée, les utilisateurs peuvent choisir de recevoir des notifications en rappel, afin de s'assurer de ne pas manquer leur réservation.",
    technologies: ["Stack MERN"],
    tasks: [
      "Designed user-friendly interfaces for the website using Figma to ensure an intuitive user experience.",
      "Developed a table reservation system allowing users to select a date and time and receive confirmation and reminders.",
      "Implemented a food delivery system that supports menu browsing, customization, and order placement with address management.",
      "Built a robust food management module for adding, updating, and organizing menu items.",
      "Developed a contact page with dynamic form submission and location display using Google Maps.",
    ],
    tasksFR: [
      "Conception d'interfaces conviviales pour le site web à l'aide de Figma pour garantir une expérience utilisateur intuitive.",
      "Développement d'un système de réservation de table permettant aux utilisateurs de sélectionner une date et une heure et de recevoir des confirmations et des rappels.",
      "Mise en œuvre d'un système de livraison de repas qui prend en charge la navigation dans le menu, la personnalisation et le passage de commandes avec gestion des adresses.",
      "Création d'un module de gestion des plats robuste pour ajouter, mettre à jour et organiser les éléments du menu.",
      "Développement d'une page de contact avec soumission dynamique de formulaire et affichage de l'emplacement à l'aide de Google Maps.",
    ],
    screenshots: [...images9],
    showcase: ["", "https://github.com/helmi003/EatMe-Frontend"],
  },
  {
    id: 10,
    date: "February 2023 -> Today",
    type: "LayaFood - Freelance",
    place: "Remotely | France",
    placeFR: "Télétravail | France",
    title: "Tacos Korner app",
    subtitle:
      "During my master's degree, I undertook a freelance project to develop an application called 'Tacos Korner'.",
    dateFR: "Février 2023 -> Aujourd'hui",
    typeFR: "LayaFood - Freelance",
    about:
      "Tacos Korner is a self-service restaurant ordering kiosk designed to streamline the customer experience and enhance operational efficiency. The system allows users to browse a wide range of food categories, customize their orders, and complete transactions seamlessly. By digitizing the ordering process, the app eliminates errors caused by manual order-taking and significantly improves customer satisfaction. \n\nCurrently, the kiosk solution is deployed and in active use across multiple restaurants in France (4+ locations), demonstrating its scalability and real-world reliability. The platform also includes multi-restaurant management and supports NFC-based online payments through PayWish Market Pay.",
    subtitleFR:
      "Pendant ma maîtrise, j'ai entrepris un projet en freelance pour développer une application appelée 'Tacos Korner'.",
    aboutFR:
      "Tacos Korner est une borne de commande autonome conçue pour optimiser l’expérience client et améliorer l’efficacité opérationnelle des restaurants. L’application permet aux utilisateurs de parcourir une large gamme de catégories de plats, de personnaliser leurs commandes et d’effectuer leurs achats en toute simplicité.\nEn digitalisant le processus de commande, elle élimine les erreurs liées à la prise de commande manuelle et garantit une meilleure satisfaction client.\n\nLa solution est actuellement déployée et utilisée dans plusieurs restaurants en France (plus de 4 établissements), démontrant sa fiabilité et sa capacité à s’adapter à différents environnements. Elle intègre également une gestion multi-restaurants et prend en charge les paiements en ligne via NFC grâce à PayWish Market Pay.",
    technologies: ["Fluter", "MongoDB", "Node-JS", "Epson m30 series", "Rest-API", "Figma"],
    tasks: [
      "Designed the UI/UX and prepared the project requirements documentation.",
      "Developed responsive user interfaces and integrated RESTful APIs.",
      "Implemented authentication and session management for secure user access.",
      "Integrated Epson m30 series Printer for real-time ticket printing of orders and reservations.",
      "Implemented functionality to send order tickets via email for customer convenience.",
      "Developed the product selection and customization flow, enabling ingredient selection and order finalization.",
      "Contributed to the deployment and maintenance of the app in production environments for multiple restaurants."
    ],
    tasksFR: [
      "Conception de l’interface utilisateur (UI/UX) et rédaction du document de spécifications fonctionnelles.",
      "Développement des interfaces utilisateurs et intégration des API RESTful.",
      "Mise en place du système d’authentification et de gestion des sessions.",
      "Intégration de l’imprimante Epson m30 series pour l’impression instantanée des tickets de commande et de réservation.",
      "Implémentation de la fonctionnalité d’envoi des tickets de commande par email pour plus de commodité.",
      "Développement du processus de sélection et de personnalisation des produits, incluant la gestion des ingrédients et la finalisation des commandes.",
      "Contribution au déploiement et à la maintenance de l’application dans plusieurs restaurants en production."
    ],
    screenshots: [...images10],
    showcase: ["", ""],
  },
  {
    id: 11,
    date: "February 2023 -> Today",
    type: "LayaFood - Freelance",
    place: "Remotely | France",
    placeFR: "Télétravail | France",
    title: "Tacos Korner Dashboard",
    subtitle:
      "Freelance project during my master's degree to develop an advanced dashboard for managing Tacos Korner restaurants.",
    about:
      "As part of the Tacos Korner ecosystem, I developed a comprehensive dashboard to efficiently manage restaurants, menus, and operations. The dashboard provides an intuitive interface for administrators and staff to handle multi-restaurant management, track orders, manage products and ingredients, configure promotions, and analyze statistics for better decision-making.",
    dateFR: "Février 2023 -> Aujourd'hui",
    typeFR: "LayaFood - Freelance",
    subtitleFR:
      "Projet freelance réalisé pendant ma maîtrise pour développer un tableau de bord avancé pour la gestion des restaurants Tacos Korner.",
    aboutFR:
      "Dans le cadre de l'écosystème Tacos Korner, j'ai développé un tableau de bord complet pour gérer efficacement les restaurants, les menus et les opérations. Ce tableau de bord offre une interface intuitive aux administrateurs et au personnel pour gérer plusieurs restaurants, suivre les commandes, gérer les produits et ingrédients, configurer des promotions et analyser les statistiques pour une meilleure prise de décision.",
    technologies: ["Stack MERN", "Rest-API", "Figma", "MongoDB", "NodeJS", "ReactJS"],
    tasks: [
      "Multi-restaurant management – Secure management of multiple restaurants from a single dashboard.",
      "Categories, products, ingredients, options, and variations management – Add, edit, and remove items, define type variations, and configure options.",
      "User management – Control access and roles for staff and administrators.",
      "History and media management – Track past orders and display images/videos in carousel mode when the user is idle.",
      "Currency and settings configuration – Adjust currencies, app settings, and preferences.",
      "Coupons and promotions – Apply discounts or promotions on specific products.",
      "Backup and mail options – Ensure data safety and email communications.",
      "Filtering and advanced statistics – Analyze sales, revenue, top-selling products, and visual insights similar to the cashier app."
    ],
    tasksFR: [
      "Gestion multi-restaurants – Administration sécurisée de plusieurs restaurants depuis un seul tableau de bord.",
      "Gestion des catégories, produits, ingrédients, options et variations – Ajouter, modifier ou supprimer des éléments, définir les types de variations et configurer les options.",
      "Gestion des utilisateurs – Contrôle des rôles et accès pour le personnel et les administrateurs.",
      "Gestion de l’historique et des médias – Suivi des commandes passées et affichage des images/vidéos en mode carrousel lorsque l’utilisateur n’interagit pas.",
      "Configuration de la monnaie et des paramètres – Ajustement des devises, paramètres de l’application et préférences.",
      "Coupons et promotions – Application de réductions ou promotions sur certains produits.",
      "Options de sauvegarde et mail – Garantir la sécurité des données et la communication par email.",
      "Filtres et statistiques avancées – Analyse des ventes, chiffre d’affaires, produits les plus vendus et visualisation claire des informations, comme sur l’application caisse."
    ],
    screenshots: [...images11],
    showcase: ["", ""],
  },
  {
    id: 12,
    date: "May-June 2023",
    type: "Freelance",
    place: "Nabeul",
    placeFR: "Nabeul",
    title: "Sales management",
    subtitle:
      "During my master's degree, I undertook a freelance project to develop a website called 'Sales management(L-Mobile)'.",
    about:
      "L-Mobile is a comprehensive website designed for sales management, providing users with the opportunity to sell their own products, similar to the platform 'Tayara.tn'. The website offers different user roles, including regular users and salesmen.\nUpon logging into the website, users can explore the wide range of products available for purchase. Each product listing includes three types of offers: purchase, rent, and trade (limited to transactions between salesmen).\nSalesmen have additional privileges and access on the website. They can review the offers that clients have made, and have the ability to either confirm or delete those offers. Once an offer is confirmed, the salesman can proceed to create a contract, which solidifies the agreement between the salesman and the client. This contract ensures that both parties are in agreement regarding the terms and conditions of the offer.\nSalesmen also have the capability to add, delete, or edit product listings on the website. This empowers them to effectively manage their inventory and keep their product information up to date.",
    dateFR: "Mai-Juin 2023",
    typeFR: "Freelance",
    subtitleFR:
      "Pendant ma maîtrise, j'ai entrepris un projet en freelance pour développer un site web appelé 'Gestion des ventes (L-Mobile)'.",
    aboutFR:
      "L-Mobile est un site web complet conçu pour la gestion des ventes, offrant aux utilisateurs la possibilité de vendre leurs propres produits, de manière similaire à la plateforme 'Tayara.tn'. Le site web propose différents rôles d'utilisateurs, notamment les utilisateurs réguliers et les vendeurs.\nUne fois connectés au site web, les utilisateurs peuvent explorer la large gamme de produits disponibles à l'achat. Chaque annonce de produit comprend trois types d'offres : achat, location et échange (limité aux transactions entre vendeurs).\nLes vendeurs ont des privilèges et des accès supplémentaires sur le site web. Ils peuvent consulter les offres faites par les clients et ont la possibilité de les confirmer ou de les supprimer. Une fois qu'une offre est confirmée, le vendeur peut procéder à la création d'un contrat, qui consolide l'accord entre le vendeur et le client. Ce contrat garantit que les deux parties sont d'accord sur les termes et conditions de l'offre.\nLes vendeurs ont également la capacité d'ajouter, de supprimer ou de modifier des annonces de produits sur le site web. Cela leur permet de gérer efficacement leur inventaire et de maintenir à jour les informations sur leurs produits.",
    technologies: ["Stack MEAN"],
    tasks: [
      "Designing the app and preparing the project requirements document.",
      "Creating user interfaces for the platform.",
      "Implementing the management of different user roles: admin, seller, and client.",
      "Managing products: adding, editing, and deleting product listings.",
      "Developing invoice management system for generating and tracking invoices.",
      "Setting up email notifications for users: order confirmations, invoice details, and updates.",
      "Integrating payment gateways for order processing.",
      "Developing the feature for sellers to confirm or delete offers and create contracts.",
    ],
    tasksFR: [
      "Conception de l'application et préparation du document des exigences du projet.",
      "Création des interfaces utilisateur pour la plateforme.",
      "Mise en œuvre de la gestion des différents rôles utilisateurs : admin, vendeur et client.",
      "Gestion des produits : ajout, modification et suppression des annonces de produits.",
      "Développement du système de gestion des factures pour générer et suivre les factures.",
      "Configuration des notifications par e-mail pour les utilisateurs : confirmations de commande, détails des factures et mises à jour.",
      "Intégration des passerelles de paiement pour le traitement des commandes.",
      "Développement de la fonctionnalité permettant aux vendeurs de confirmer ou supprimer des offres et de créer des contrats.",
    ],
    screenshots: [...images12],
    showcase: ["", ""],
  },
  {
    id: 13,
    date: "December-April 2023",
    type: "Freelance",
    place: "Remotely | Sousse",
    placeFR: "Télétravail | Sousse",
    title: "Hand rehab",
    subtitle:
      "During my engeenering studies, I undertook a freelance project to develop a mobile application called 'Hand rehab'.",
    about:
      "Hand Rehab is an application designed for doctors and their patients. The app connects via Bluetooth to a specialized glove used by patients to test different hand movements. Whenever a patient makes a movement, the glove sends a signal to the application through an ESP32 microcontroller. The data is then transmitted via Bluetooth to the app. Doctors can review these signals, take notes, and proceed to the next step in the rehabilitation process. The app supports three languages: English, French, and Arabic, making it accessible to a wider audience.",
    dateFR: "Decembre-Avril 2023",
    typeFR: "Freelance",
    subtitleFR:
      "Pendant mes études d'ingénieur, j'ai entrepris un projet en freelance pour développer une application mobile appelée 'Hand Rehab'.",
    aboutFR:
      "Hand Rehab est une application conçue pour les médecins et leurs patients. L'application se connecte via Bluetooth à un gant spécialisé utilisé par les patients pour tester différents mouvements de la main. Chaque fois qu'un patient effectue un mouvement, le gant envoie un signal à l'application via un microcontrôleur ESP32. Les données sont ensuite transmises via Bluetooth à l'application. Les médecins peuvent examiner ces signaux, prendre des notes et passer à l'étape suivante du processus de rééducation. L'application prend en charge trois langues : anglais, français et arabe, ce qui la rend accessible à un plus large public.",
    technologies: ["Flutter", "Firebase", "Bluetooth", "ESP32"],
    tasks: [
      "Designing the app and preparing the project requirements document.",
      "Implementing authentication management for doctors and patients.",
      "Developing a task management system for patients to track rehabilitation activities.",
      "Integrating Bluetooth functionality to connect the app with a specialized glove.",
      "Ensuring communication between the glove and app via ESP32 microcontroller to record movements.",
      "Displaying the patient's movements in real-time within the app.",
      "Allowing doctors to review patient movements, take notes, and plan the next steps in the rehabilitation process.",
      "Supporting multilingual functionality (English, French, and Arabic) for broader accessibility.",
    ],
    tasksFR: [
      "Conception de l'application et préparation du document des exigences du projet.",
      "Mise en œuvre de la gestion de l'authentification pour les médecins et les patients.",
      "Développement d'un système de gestion des tâches pour que les patients suivent les activités de rééducation.",
      "Intégration de la fonctionnalité Bluetooth pour connecter l'application à un gant spécialisé.",
      "Assurer la communication entre le gant et l'application via un microcontrôleur ESP32 pour enregistrer les mouvements.",
      "Affichage des mouvements du patient en temps réel dans l'application.",
      "Permettre aux médecins d'examiner les mouvements des patients, de prendre des notes et de planifier les étapes suivantes du processus de rééducation.",
      "Prise en charge de la fonctionnalité multilingue (anglais, français et arabe) pour une accessibilité plus large.",
    ],
    screenshots: [...images13],
    showcase: ["", ""],
  },
  {
    id: 14,
    date: "October-February 2024",
    type: "Freelance",
    place: "Remotely | Djerba",
    placeFR: "Télétravail | Djerba",
    title: "HFBatiment application",
    subtitle:
      "During my engeenering studies, I undertook a freelance project to develop a mobile application called 'HFBatiment'.",
    about:
      "HFBatiment is a mobile application designed to assist construction site managers in efficiently managing resources, including materials, machinery, and labor. The app provides comprehensive tracking and management capabilities, such as: Materials Management to Monitor the consumption of construction materials, Machinery Utilization to Track the operational hours of various machines, Labor Management: Record and manage work hours for different types of construction workers, such as masons, plumbers, and heavy equipment operators. Additionally, if additional resources are needed, site managers can send a formal request (FRS) through the app, which will automatically notify and email the relevant administrators for approval and action. HFBatiment also enables site managers to check the daily consumption of resources, view the progress of ongoing projects, fill out and submit daily reports on the quantity of work executed, And lastly To ensure timely reporting, the app sends reminders to the site managers if the daily report is not submitted by 8 PM. If no action is taken by 9 PM, a notification and an email are sent to the administrators. Administrators can use HFBatiment to consult the overall progress of projects and analyze the daily consumption of resources.",
    dateFR: "Octobre-Février 2024",
    typeFR: "Freelance",
    subtitleFR:
      "Pendant mes études d'ingénieur, j'ai entrepris un projet en freelance pour développer une application mobile appelée 'HFBatiment'.",
    aboutFR:
      "HFBatiment est une application mobile conçue pour aider les chefs de chantier à gérer efficacement les ressources, y compris les matériaux, les machines et la main-d'œuvre. L'application offre des capacités de suivi et de gestion complètes, telles que : Gestion des matériaux pour surveiller la consommation des matériaux de construction, Utilisation des machines pour suivre les heures de fonctionnement des différentes machines, Gestion de la main-d'œuvre : enregistrer et gérer les heures de travail pour différents types de travailleurs de la construction, tels que les maçons, les plombiers et les opérateurs d'équipements lourds. De plus, si des ressources supplémentaires sont nécessaires, les chefs de chantier peuvent envoyer une demande formelle (FRS) via l'application, qui notifiera et enverra automatiquement un e-mail aux administrateurs concernés pour approbation et action. HFBatiment permet également aux chefs de chantier de vérifier la consommation quotidienne des ressources, de visualiser l'avancement des projets en cours, de remplir et de soumettre des rapports quotidiens sur la quantité de travail exécutée. Enfin, pour garantir une soumission en temps voulu des rapports, l'application envoie des rappels aux chefs de chantier si le rapport quotidien n'est pas soumis avant 20h. Si aucune action n'est entreprise avant 21h, une notification et un e-mail sont envoyés aux administrateurs. Les administrateurs peuvent utiliser HFBatiment pour consulter l'avancement global des projets et analyser la consommation quotidienne des ressources.",
    technologies: [
      "Flutter",
      "Node-js",
      "MongoDB",
      "Firebase push notification",
      "Node-mailer",
    ],
    tasks: [
      "Developing modules for managing inventory, equipment, human resources, and materials, along with user management.",
      "Implemented a calendar to track project progress against time.",
      "Developed a notification system.",
      "Implemented authentication management.",
    ],
    tasksFR: [
      "Développement des modules de gestion des articles, matériels, ressources humaines et matériaux, ainsi que de la gestion des utilisateurs.",
      "Implémentation d'un calendrier pour le suivi de l'avancement du projet par rapport au temps.",
      " Développement d'un système de notifications.",
      " Implémentation de la gestion d’authentification",
    ],
    screenshots: [...images14],
    showcase: ["", ""],
  },
  {
    id: 15,
    date: "October-February 2024",
    type: "Freelance",
    place: "Remotely | Djerba",
    placeFR: "Télétravail | Djerba",
    title: "HFBatiment dasboard",
    subtitle:
      "During my engeenering studies, I undertook a freelance project to develop a dashbord called 'HFBatiment'.",
    about:
      "HFBatiment Dashboard, created mainly for the admin, allows them to add, modify, delete, and view multiple resources such as materials, engines, and construction workers. Additionally, the admin can assign projects to construction site managers with the progress timeline they should follow. Construction workers can consult the entries they have made, either for the current day or previous ones.",
    dateFR: "Octobre-Février 2024",
    typeFR: "Freelance",
    subtitleFR:
      "Pendant mes études d'ingénieur, j'ai entrepris un projet en freelance pour développer une application mobile appelée 'HFBatiment'.",
    aboutFR:
      "Le dashbord HFBatiment, conçu principalement pour l'administrateur, lui permet d'ajouter, de modifier, de supprimer et de consulter diverses ressources telles que les matériaux, les machines et les travailleurs de la construction. De plus, l'administrateur peut attribuer des projets aux chefs de chantier avec le calendrier de progression qu'ils doivent suivre. Les travailleurs de la construction peuvent consulter les entrées qu'ils ont faites, que ce soit pour le jour en cours ou les jours précédents.",
    technologies: [
      "React-js",
      "Node-js",
      "MongoDB",
      "Firebase push notification",
      "Node-mailer",
    ],
    tasks: [
      "Developed modules for managing items, equipment, human resources, materials, and user management.",
      "Implemented a calendar for tracking project progress over time.",
      "Integrated email and notification systems.",
      "Implemented authentication management.",
    ],
    tasksFR: [
      "Développement des modules de gestion des articles, matériels, ressources humaines et matériaux, ainsi que de la gestion des utilisateurs.",
      "Implémentation d'un calendrier pour le suivi de l'avancement du projet par rapport au temps.",
      "Envoi des email et des notification.",
      "Implémentation de la gestion d’authentification.",
    ],
    screenshots: [...images15],
    showcase: ["", ""],
  },
  {
    id: 16,
    date: "February-June 2024",
    type: "Academic project",
    place: "Tunis",
    placeFR: "Tunis",
    title: "Esprit piazza",
    subtitle:
      "During my engineering studies, I undertook a project with my colleagues at Esprit University, a team of 7 called 'Glitch Mavens'.",
    about:
      "Esprit Piazza is our enterprise forum management platform, designed to foster seamless collaboration between ESPRIT University and businesses. Acting as a virtual nexus, it transcends physical boundaries, facilitating efficient event coordination and mutual benefit for all stakeholders. The platform engages eight distinct user roles, each with specialized functionalities. Key features include comprehensive user management overseen by administrators, streamlined forum organization capabilities for committees, logistical support for event supplies managed by suppliers, and extensive application and offer management tools benefiting exhibitors, students, alumni, and teachers. Security and user management, central to the platform's operation, ensure smooth and protected interactions across all functionalities. Our team, 'Glitch Mavens', achieved recognition by being selected among 8 groups from 10 classes in SAE and advancing to the semifinals.",
    dateFR: "Février-Juin 2024",
    typeFR: "Academic project",
    subtitleFR:
      "Pendant mes études d'ingénierie, j'ai entrepris un projet avec mes collègues de l'Université Esprit, une équipe de 7 appelée 'Glitch Mavens'.",
    aboutFR:
      "Esprit Piazza est notre plateforme de gestion de forums d'entreprise, conçue pour favoriser une collaboration harmonieuse entre l'Université ESPRIT et les entreprises. Agissant comme un point de rencontre virtuel, elle transcende les frontières physiques, facilitant une coordination efficace des événements et des bénéfices mutuels pour toutes les parties prenantes. La plateforme engage huit rôles d'utilisateurs distincts, chacun avec des fonctionnalités spécialisées. Les principales caractéristiques incluent une gestion complète des utilisateurs supervisée par les administrateurs, des capacités organisatives de forum optimisées pour les comités, un soutien logistique pour l'approvisionnement en événements géré par les fournisseurs, ainsi que des outils étendus de gestion des candidatures et des offres bénéficiant aux exposants, aux étudiants, aux anciens élèves et aux enseignants. La sécurité et la gestion des utilisateurs, essentielles au fonctionnement de la plateforme, garantissent des interactions fluides et sécurisées à travers toutes les fonctionnalités. Notre équipe, les 'Glitch Mavens', a été sélectionnée parmi 8 groupes de 10 classes en SAE et a réussi à atteindre les demi-finales.",
    link: "https://www.youtube.com/watch?v=95Ub-Nd_h8s",
    technologies: ["Angular", "Spring boot", "Keycloack", "MySQL"],
    tasks: [
      "Implementation of authentication and profile management.",
      "Management of passwords (modification, reset, email confirmation).",
      "User administration.",
      "Sentiment analysis using Roberta.",
      "QR code scanning and generation.",
    ],
    tasksFR: [
      "Implémentation de l'authentification et de la gestion des profils.",
      "Gestion des mots de passe (modification, réinitialisation, confirmation par email).",
      "Administration des utilisateurs.",
      "Analyse des sentiments avec Roberta.",
      "Scannage et génération de codes QR.",
    ],
    screenshots: [...images16],
    showcase: ["https://www.youtube.com/watch?v=95Ub-Nd_h8s", ""],
  },
  {
    id: 17,
    date: "January 2024 / January 2025",
    type: "Freelance",
    place: "Nabeul",
    placeFR: "Nabeul",
    title: "BMP Tunisie",
    subtitle:
      "Development of BMP Tunisie (Bon, Mauvais Plan), a mobile app for rating Facebook and Instagram pages.",
    about:
      "BMP Tunisie is a mobile application that allows users to share feedback on Facebook and Instagram pages. The goal is to help consumers identify trustworthy sellers and avoid deceptive ones. Users can leave feedback, categorized as either good or bad, based on their experiences. The platform also highlights exceptional pages that deliver on their promises. It provides authentication and role management, allowing users to register as customers or administrators. Feedback management is at the core of the app, with support for adding comments and tracking feedback history. Notifications keep users informed about new reviews or important updates, fostering a transparent community of buyers and sellers.",
    dateFR: "Janvier 2024 / Janvier 2025",
    typeFR: "Freelance",
    subtitleFR:
      "Développement de BMP Tunisie (Bon, Mauvais Plan), une application mobile pour évaluer les pages Facebook et Instagram.",
    aboutFR:
      "BMP Tunisie est une application mobile qui permet aux utilisateurs de partager leurs avis sur les pages Facebook et Instagram. L'objectif est d'aider les consommateurs à identifier les vendeurs fiables et à éviter ceux qui sont trompeurs. Les utilisateurs peuvent laisser des avis, classés comme bons ou mauvais, en fonction de leurs expériences. La plateforme met également en avant les pages exceptionnelles qui tiennent leurs promesses. Elle propose la gestion de l'authentification et des rôles, permettant aux utilisateurs de s'inscrire en tant que clients ou administrateurs. La gestion des avis est au cœur de l'application, avec la possibilité d'ajouter des commentaires et de suivre l'historique des avis. Les notifications informent les utilisateurs des nouveaux avis ou des mises à jour importantes, favorisant une communauté transparente d'acheteurs et de vendeurs.",
    technologies: [
      "Flutter",
      "MongoDB",
      "NodeJS",
      "Firebase",
      "Push Notifications",
      "Figma",
    ],
    tasks: [
      "Designing the app and preparing the project requirements document.",
      "Implementing authentication and role management for customers and administrators.",
      "Developing feedback management features to categorize feedback as good or bad.",
      "Building a comments management system for users to share detailed opinions.",
      "Integrating notification management to inform users about new feedback and updates.",
      "Ensuring smooth user experience with an intuitive UI/UX design.",
      "Testing and deploying the application for public use.",
    ],
    tasksFR: [
      "Conception de l'application et préparation du document des exigences du projet.",
      "Mise en œuvre de la gestion de l'authentification et des rôles pour les clients et les administrateurs.",
      "Développement des fonctionnalités de gestion des avis pour classer les retours comme bons ou mauvais.",
      "Création d'un système de gestion des commentaires pour que les utilisateurs partagent leurs opinions détaillées.",
      "Intégration d'une gestion des notifications pour informer les utilisateurs des nouveaux avis et mises à jour.",
      "Assurer une expérience utilisateur fluide avec un design UI/UX intuitif.",
      "Test et déploiement de l'application pour une utilisation publique.",
    ],
    screenshots: [...images17],
    showcase: ["", ""],
  },
  {
    id: 18,
    date: "August-December 2024",
    type: "Freelance",
    place: "Remotely | Monastir",
    placeFR: "Télétravail | Monastir",
    title: "TrueTech",
    subtitle:
      "Development of TrueTech, a mobile app for buying and repairing phones.",
    about:
      "TrueTech is an e-commerce mobile application designed for clients and sellers specializing in phones and related services. It serves as a one-stop shop for purchasing phones, accessories, and spare parts, as well as booking phone repair services. The platform features robust authentication and role management for both clients and sellers, ensuring a seamless and secure experience. A dedicated contact page connects users to support or sellers for queries. TrueTech simplifies the shopping experience with categorized listings, a user-friendly interface, and real-time updates on product availability.",
    dateFR: "Août-Décembre 2024",
    typeFR: "Freelance",
    subtitleFR:
      "Développement de TrueTech, une application mobile pour l'achat et la réparation de téléphones.",
    aboutFR:
      "TrueTech est une application mobile de commerce électronique conçue pour les clients et les vendeurs spécialisés dans les téléphones et les services associés. Elle propose une solution complète pour l'achat de téléphones, d'accessoires et de pièces détachées, ainsi que pour la réservation de services de réparation de téléphones. La plateforme intègre une gestion robuste de l'authentification et des rôles pour les clients et les vendeurs, garantissant une expérience fluide et sécurisée. Une page de contact dédiée permet aux utilisateurs de joindre le support ou les vendeurs pour toute question. TrueTech simplifie l'expérience d'achat avec des listes catégorisées, une interface conviviale et des mises à jour en temps réel sur la disponibilité des produits.",
    technologies: [
      "Flutter",
      "MySQL",
      "Spring Boot",
      "Angular",
      "Figma",
      "SMTP Notifications",
    ],
    tasks: [
      "Designed and structured the app layout for seamless navigation.",
      "Implemented authentication and role management for clients and sellers.",
      "Developed modules to manage products, repairs, invoices, and categories.",
      "Added a sales module for phones, accessories, and spare parts.",
      "Integrated a contact page for support and seller communication.",
      "Ensured data security and implemented user-friendly UI/UX designs.",
    ],
    tasksFR: [
      "Conception et structuration de la mise en page de l'application pour une navigation fluide.",
      "Mise en œuvre de la gestion de l'authentification et des rôles pour les clients et les vendeurs.",
      "Développement des modules pour la gestion des produits, des réparations, des factures et des catégories.",
      "Ajout d'un module de vente pour les téléphones, accessoires et pièces détachées.",
      "Intégration d'une page de contact pour le support et la communication avec les vendeurs.",
      "Sécurisation des données et conception d'interfaces utilisateur intuitives.",
    ],
    screenshots: [...images18],
    showcase: ["", ""],
  },
  {
    id: 19,
    date: "August-December 2024",
    type: "Freelance",
    place: "Remotely | Monastir",
    placeFR: "Télétravail | Monastir",
    title: "TrueTech Dashboard",
    subtitle:
      "Development of a dashboard for managing products, invoices, and sales.",
    about:
      "The TrueTech Dashboard is an administrative platform tailored for sellers and administrators to efficiently manage phone sales and repair services. It includes modules for adding and managing products, creating and organizing invoices, and printing invoices seamlessly. The dashboard provides role-based access control, ensuring secure management for sellers and administrators. With a focus on user-friendly designs and automation, it streamlines inventory, sales, and invoice generation, enabling smooth operations for phone-related businesses.",
    dateFR: "Août-Décembre 2024",
    typeFR: "Freelance",
    subtitleFR:
      "Développement d’un tableau de bord pour la gestion des produits, factures et ventes.",
    aboutFR:
      "Le tableau de bord TrueTech est une plateforme administrative conçue pour les vendeurs et administrateurs afin de gérer efficacement les ventes et services de réparation de téléphones. Il comprend des modules pour l'ajout et la gestion des produits, la création et l'organisation des factures, ainsi que l'impression de ces dernières. Le tableau de bord offre un contrôle d'accès basé sur les rôles, garantissant une gestion sécurisée pour les vendeurs et administrateurs. Avec une attention particulière portée à des designs conviviaux et à l’automatisation, il simplifie la gestion des stocks, des ventes et des factures pour une opération fluide des entreprises liées aux téléphones.",
    technologies: [
      "Flutter",
      "MySQL",
      "Spring Boot",
      "Angular",
      "Figma",
      "SMTP Notifications",
    ],
    tasks: [
      "Designed and implemented modules for adding and managing products.",
      "Developed an invoicing system with support for organizing and printing invoices.",
      "Implemented role-based access control for administrators and sellers.",
      "Streamlined inventory management with real-time updates on stock.",
      "Optimized dashboard UI/UX for efficient workflows and task automation.",
    ],
    tasksFR: [
      "Conception et mise en œuvre de modules pour l'ajout et la gestion des produits.",
      "Développement d'un système de facturation avec support pour l'organisation et l'impression des factures.",
      "Mise en place d'un contrôle d'accès basé sur les rôles pour les administrateurs et les vendeurs.",
      "Rationalisation de la gestion des stocks avec des mises à jour en temps réel.",
      "Optimisation de l'interface utilisateur du tableau de bord pour des flux de travail efficaces et l'automatisation des tâches.",
    ],
    screenshots: [...images19],
    showcase: ["", ""],
  },
  {
    id: 20,
    date: "June-September 2024",
    type: "Internship - ShopMyInfluence",
    place: "Nabeul",
    placeFR: "Nabeul",
    title: "Maggy",
    subtitle:
      "Development of Maggy, a mobile app for buying and selling secondhand clothing with virtual currency",
    about:
      "Maggy was created to address this challenge by providing a platform that connects sellers and buyers, enabling the exchange of second-hand clothing without unnecessary waste. The app allows users to make offers, reserve and finalize transactions securely through a verification code system. In addition, users can add items to their favourites, follow each other, and navigate to nearby sellers using a map feature, streamlining the process of buying and selling second-hand clothes. Maggy also enables users to list their own products for sale, making the platform a comprehensive solution for second-hand clothing exchanges.",
    dateFR: "Juin-Septembre 2024",
    typeFR: "Stage - ShopMyInfluence",
    subtitleFR:
      "Développement de Maggy, une application mobile pour l'achat et la vente de vêtements d'occasion avec une monnaie virtuelle.",
    aboutFR:
      "Maggy a été créée pour répondre au défi de la consommation excessive en offrant une plateforme connectant vendeurs et acheteurs pour l'échange de vêtements d'occasion de manière responsable. L'application permet aux utilisateurs de faire des offres, de réserver et de finaliser des transactions en toute sécurité grâce à un système de code de vérification. Les utilisateurs peuvent également ajouter des articles à leurs favoris, se suivre mutuellement et localiser des vendeurs proches via une fonction de carte, simplifiant ainsi l'achat et la vente de vêtements d'occasion. Maggy offre également la possibilité de mettre en vente ses propres produits, faisant de la plateforme une solution complète pour les échanges de vêtements d'occasion.",
    technologies: ["React Native", "NodeJS", "Firebase"],
    tasks: [
      "Integrated a personalized recommendation system for each user.",
      "Implemented multilingual support (FR/EN).",
      "Enable seamless navigation, whether by product list or a map.",
      "Set up multi-factor authentication.",
      "Provide historical tracking features for users who wish to monitor their articles.",
      "Integrated geolocation features.",
      "Developed modules for profile and item management.",
      "Designed responsive interfaces for Android, iOS, and tablet/iPad.",
    ],
    tasksFR: [
      "Intégration d'un système de recommandations personnalisées pour chaque utilisateur.",
      "Mise en place de la prise en charge multilingue (FR/EN).",
      "Optimisation de la navigation, que ce soit via une liste de produits ou une carte.",
      "Mise en œuvre de l'authentification à plusieurs facteurs.",
      "Ajout de fonctionnalités de suivi historique pour permettre aux utilisateurs de surveiller leurs articles.",
      "Intégration de fonctionnalités de géolocalisation.",
      "Développement de modules pour la gestion des profils et des articles.",
      "Conception d'interfaces responsives pour Android, iOS et tablettes/iPad.",
    ],
    screenshots: [...images20],
    showcase: ["", ""],
  },
  {
    id: 21,
    date: "February–July 2025",
    type: "Internship – Gofield",
    place: "Tunis",
    placeFR: "Tunis",
    title: "Winshot",
    subtitle:
      "Development of an intelligent web and mobile streaming module within Winshot (a retail-focused platform).",
    about:
      "During my internship at Gofield, I contributed to the development of an advanced real-time streaming module integrated into Winshot, a digital platform dedicated to retail performance management. The project focused on enabling smooth and reliable video sessions between retailers, consultants, and clients, while enhancing interactivity and automation throughout the streaming lifecycle.",
    dateFR: "Février–Juillet 2025",
    typeFR: "Stage – Gofield",
    subtitleFR:
      "Développement d’un module intelligent de streaming web et mobile intégré à Winshot, une plateforme dédiée à la performance des enseignes de retail.",
    aboutFR:
      "Au cours de mon stage chez Gofield, j’ai participé au développement d’un module de streaming en temps réel avancé intégré à la plateforme Winshot, spécialisée dans la gestion de la performance des réseaux de magasins. Le projet visait à offrir une expérience de visioconférence fluide et interactive entre les enseignes, les consultants et les clients, tout en automatisant la gestion complète du cycle de vie des sessions.",
    technologies: ["MERN Stack", "React Native", "Firebase", "AWS", "Flask", "GitLab"],
    tasks: [
      "Implemented multilingual support using i18n.",
      "Integrated LiveKit for real-time video streaming and chat.",
      "Automated attendee tracking and session lifecycle (start/end) using webhooks.",
      "Automated recording and storage of sessions on AWS S3 via webhook triggers.",
      "Enabled push notifications and calendar reminders to boost user engagement.",
      "Built support for instant and recurring conference sessions.",
      "Developed a feedback and survey system using RoBERTa sentiment analysis for insights.",
      "Created a certificate generation and management module for participants."
    ],
    tasksFR: [
      "Mise en place du support multilingue via i18n.",
      "Intégration de LiveKit pour le streaming vidéo et la messagerie en temps réel.",
      "Automatisation du suivi des participants et du cycle de vie des sessions (démarrage/fin) à l’aide de webhooks.",
      "Automatisation de l’enregistrement et du stockage des sessions sur AWS S3 via déclencheurs webhook.",
      "Activation des notifications push et des rappels calendrier pour renforcer l’engagement des utilisateurs.",
      "Ajout de la gestion des sessions instantanées et récurrentes avec planification des conférences.",
      "Développement d’un système de feedback et de sondage intégrant une analyse de sentiments avec RoBERTa.",
      "Création d’un module de génération et de gestion des certificats pour les participants."
    ],
    screenshots: [...images21],
    showcase: ["", ""],
  },
  {
    id: 22,
    date: "March 2025 -> Today",
    type: "LayaFood - Freelance",
    place: "Tunis",
    placeFR: "Tunis",
    title: "Tacos Korner Cashier App",
    subtitle:
      "Development of a real-time mobile cashier management system integrated with the Tacos Korner restaurant platform.",
    about:
      "The Tacos Korner Cashier App is a mobile application developed to streamline order management and improve coordination between restaurant staff and customers. Designed as a companion to the self-ordering kiosk, this app enables cashiers to efficiently manage incoming orders, payments, and product statuses in real time. It is currently in active use across several restaurants in France, supporting multi-restaurant management with reliable performance and user-friendly design.",
    dateFR: "Mars 2025 -> Aujourd'hui",
    typeFR: "LayaFood - Freelance",
    subtitleFR:
      "Développement d’une application mobile de caisse en temps réel intégrée à la plateforme de gestion Tacos Korner.",
    aboutFR:
      "L’application mobile de caisse Tacos Korner a été développée afin d’optimiser la gestion des commandes et d’améliorer la coordination entre le personnel du restaurant et les clients. Conçue comme un complément du kiosque de commande libre-service, elle permet aux caissiers de gérer efficacement les commandes, les paiements et les statuts des produits en temps réel. Déployée dans plusieurs restaurants en France, elle offre une gestion multi-établissements fluide, des performances fiables et une interface conviviale.",
    technologies: [
      "Firebase push notification",
      "Flutter",
      "Epson",
      "Epson m30 series",
      "NodeJS",
      "WebSocket",
      "Rest-API",
      "MongoDB",
      "Figma"
    ],
    tasks: [
      "Authentification et gestion multi-restaurants – Connexion sécurisée et accès différencié selon le rôle et l’établissement.",
      "Commandes et notifications en temps réel – Intégration de WebSocket et Firebase pour recevoir instantanément les nouvelles commandes et leurs mises à jour.",
      "Impression de tickets – Intégration d’imprimantes Epson pour générer les tickets de commandes et de réservations.",
      "Statistiques de ventes et revenus – Analyse détaillée des ventes quotidiennes, du chiffre d’affaires et des produits les plus vendus.",
      "Gestion des produits – Consultation des fiches produits et mise à jour du statut des commandes (en cours, terminée, annulée, etc.) en temps réel.",
      "UI/UX et cahier des charges – Conception complète de l’interface utilisateur et rédaction du cahier des charges fonctionnel et technique."
    ],
    tasksFR: [
      "Authentification et gestion multi-restaurants – Connexion sécurisée et accès différencié selon le rôle et l’établissement.",
      "Commandes et notifications en temps réel – Intégration de WebSocket et Firebase pour recevoir instantanément les nouvelles commandes et leurs mises à jour.",
      "Impression de tickets – Intégration d’imprimantes Epson pour générer automatiquement les tickets de commandes et de réservations.",
      "Statistiques de ventes et revenus – Analyse détaillée des ventes quotidiennes, du chiffre d’affaires et des produits les plus vendus.",
      "Gestion des produits – Consultation des fiches produits et mise à jour du statut des commandes (en cours, terminée, annulée, etc.) en temps réel.",
      "UI/UX et cahier des charges – Conception complète de l’interface utilisateur et rédaction du cahier des charges fonctionnel et technique."
    ],
    screenshots: [...images22],
    showcase: ["", ""],
  }
];
export default data;
