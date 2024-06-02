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

const data = [
  {
    id: 0,
    title: "1st internship",
    subtitle:
      "This was the first time i've been able to put into practice my theoretical knowledge acquired during my studies career and face the difficulties of the world of work. It was very enriching",
    about:
      "One of my key achievements during this internship was the creation of a native movie website using HTML5, CSS3, Bootstrap, and other relevant technologies.\n In addition, I also had the chance to work with Python and utilized the pandas library to organize and manipulate an XML file efficiently.",
    subtitleFR:
      "C'était la première fois que j'ai pu mettre en pratique mes connaissances théoriques acquises tout au long de ma carrière d'études et faire face aux difficultés du monde du travail. Cela a été très enrichissant.",
    aboutFR:
      "L'une de mes réalisations clés lors de ce stage a été la création d'un site web de films natif en utilisant HTML5, CSS3, Bootstrap et d'autres technologies pertinentes. De plus, j'ai également eu l'occasion de travailler avec Python et j'ai utilisé la bibliothèque pandas pour organiser et manipuler efficacement un fichier XML.",
    technologies: ["HTML/CSS/BootStrap/javascript/PHP", "Panda(Python)"],
    screenshots: [...images0],
    showcase: ["", "https://github.com/helmi003/1st-internship"],
  },
  {
    id: 1,
    title: "Hackathon",
    subtitle:
      "In 2019, I participated in a hackathon at my university (ISET Sousse) with a team of four people. The objective of the hackathon was to develop a (machine/game/mobile app/website...) that could assist parents in raising their children in a more effective manner in 12h from. This was motivated by the significant influence technology has on children nowadays.",
    about:
      "Since we were learning software development, we made the decision to create a website for our hackathon project utilizing various programming languages. The objective of the website was to offer a range of resources, including books, time management tools, and educational games.",
    subtitleFR:
      "En 2019, j'ai participé à un hackathon dans mon université(ISET Sousse) avec une équipe de quatre personnes. L'objectif du hackathon était de développer une (machine/jeu/application mobile/site web...) qui pourrait aider les parents à élever leurs enfants de manière plus efficace en seulement 12 heures. Cette initiative était motivée par l'influence considérable que la technologie exerce sur les enfants de nos jours.",
    aboutFR:
      "Étant donné que nous étions en train d'apprendre le développement de logiciels, nous avons pris la décision de créer un site web pour notre projet de hackathon en utilisant différents langages de programmation. L'objectif du site web était d'offrir une gamme de ressources, comprenant des livres, des outils de gestion du temps et des jeux éducatifs.",
    technologies: ["HTML/CSS/BootStrap/PHP/javascript"],
    screenshots: [...images1],
    showcase: ["", "https://github.com/helmi003/hackathon-2019"],
  },
  {
    id: 2,
    title: "RipShark",
    subtitle:
      "This website was developed as part of my second year in university for a course called 'Project Integration'. As per our professor's recommendation, each student was required to create and develop a website based on the subjects he requested.",
    about:
      "My project involved developing a surf website that aimed to showcase surfing locations across Tunisia. The website included information about each surfing spot, categories, and clubs where people could join. Additionally, there was an admin page for managing the website's content, as well as an online store where visitors could purchase items such as clothing, accessories, and other related products.",
    subtitleFR:
      "Ce site web a été développé dans le cadre de ma deuxième année au université pour un cours appelé 'Intégration de projet'. Conformément à la recommandation de notre professeur, chaque étudiant devait créer et développer un site web en fonction des sujets qu'il avait demandés.",
    aboutFR:
      "Mon projet consistait à développer un site web sur le surf qui avait pour objectif de présenter les spots de surf en Tunisie. Le site web incluait des informations sur chaque spot de surf, des catégories et des clubs auxquels les gens pouvaient se joindre. De plus, il y avait une page d'administration pour gérer le contenu du site web, ainsi qu'une boutique en ligne où les visiteurs pouvaient acheter des articles tels que des vêtements, des accessoires et d'autres produits connexes.",
    technologies: ["HTML/CSS/BootStrap/PHP/javascript"],
    screenshots: [...images2],
    showcase: ["", "https://github.com/helmi003/ripshark"],
  },
  {
    id: 3,
    title: "2nd internship",
    subtitle:
      "This internship provided me with another opportunity to confront the challenges of the professional world. It allowed me to gain valuable experience and further develop my skills while encountering the realities and complexities of the workplace.",
    about:
      "I was assigned the task of enhancing the performance of a website called 'BLP', which was already under development. My responsibilities include: \nImplementing multi-language support to ensure the website is available in various languages.\nEnhancing the website's layout to create a pleasing user experience.\nCreating a dedicated 'Contact Us' page to facilitate communication with users.\nIntegrating a database system to efficiently manage and store website data.",
    subtitleFR:
      "Ce stage m'a offert une nouvelle occasion de faire face aux défis du monde professionnel. Il m'a permis d'acquérir une expérience précieuse et de développer davantage mes compétences tout en faisant face aux réalités et aux complexités du milieu de travail.",
    aboutFR:
      "On m'a confié la tâche d'améliorer les performances d'un site web appelé 'BLP', qui était déjà en cours de développement. Mes responsabilités comprenaient :\nMise en place d'un support multilingue pour rendre le site web disponible dans différentes langues.\nAmélioration de la mise en page du site web afin de créer une expérience utilisateur agréable.\nCréation d'une page dédiée 'Contactez-nous' pour faciliter la communication avec les utilisateurs.\nIntégration d'un système de base de données pour gérer et stocker efficacement les données du site web.",
    technologies: ["Next-js", "Django", "Nodemailer", "PostgreSQL"],
    screenshots: [...images3],
    showcase: ["https://blp.tn/en", "https://github.com/helmi003/blp-Frontend"],
  },
  {
    id: 4,
    title: "Learneur",
    subtitle:
      "Developing a mobile application during my third year in university was a new experience for me, especially since it was my first time working with the Flutter framework. I dedicated my efforts to create a functional and user-friendly mobile application, leveraging the capabilities provided by Flutter to build a cross-platform solution. This project allowed me to explore the world of mobile app development and apply my skills in a practical setting.",
    about:
      "The mobile application I developed during my third year of university was a course app that catered to both students and professors. As a professor, the app allowed me to add new courses, enabling students to stay updated with the latest information and announcements. On the other hand, as a student, I could access the app to view course details, including information about assignments, schedules, and other relevant materials. In addition to course-related features, the app also incorporated a real-time chat feature using Firebase. This chat functionality facilitated communication and collaboration among students and professors within the app, enhancing the overall learning experience.",
    aboutFR:
      "Le développement d'une application mobile pendant ma troisième année au université a été une nouvelle expérience pour moi, surtout parce que c'était la première fois que je travaillais avec le framework Flutter. J'ai consacré mes efforts à créer une application mobile fonctionnelle et conviviale, en exploitant les capacités offertes par Flutter pour construire une solution multiplateforme. Ce projet m'a permis d'explorer le monde du développement d'applications mobiles et d'appliquer mes compétences dans un cadre pratique.",
    subtitleFR:
      "L'application mobile que j'ai développée pendant ma troisième année d'université était une application de cours qui répondait aux besoins des étudiants et des professeurs. En tant que professeur, l'application me permettait d'ajouter de nouveaux cours, permettant aux étudiants de rester informés des dernières informations et annonces. D'un autre côté, en tant qu'étudiant, je pouvais accéder à l'application pour consulter les détails des cours, y compris les informations sur les devoirs, les horaires et d'autres documents pertinents. En plus des fonctionnalités liées aux cours, l'application intégrait également une fonctionnalité de chat en temps réel utilisant Firebase. Cette fonctionnalité de chat facilitait la communication et la collaboration entre les étudiants et les professeurs au sein de l'application, améliorant ainsi l'expérience d'apprentissage globale.",
    technologies: ["Fluter", "Firebase"],
    screenshots: [...images4],
    showcase: ["", "https://github.com/helmi003/learneur"],
  },
  {
    id: 5,
    title: "Movie App",
    subtitle:
      "This second mobile application was developed during my third year of university.",
    about:
      "The app provides two user roles: client and seller/cinema owner. \nAs a client, users could log in to the app and browse through the available movies with the option to view movie details. Additionally, clients could make reservations for specific movie showtimes on their preferred dates.\nOn the other hand, the seller or cinema owner have access to additional functionalities. Add movies to the platform, including details like title, genre, duration, and showtimes. Also consult the reservations made by clients, review them, and confirm or manage them accordingly.",
    subtitleFR:
      "Cette deuxième application mobile a été développée pendant ma troisième année à l'université.",
    aboutFR:
      "L'application offre deux rôles d'utilisateurs : client et vendeur/propriétaire de cinéma.\nEn tant que client, les utilisateurs peuvent se connecter à l'application et parcourir les films disponibles avec la possibilité de consulter les détails des films. De plus, les clients peuvent effectuer des réservations pour des séances de cinéma spécifiques à leurs dates préférées.\nEn revanche, le vendeur ou le propriétaire du cinéma a accès à des fonctionnalités supplémentaires. Il peut ajouter des films à la plateforme, y compris des détails tels que le titre, le genre, la durée et les horaires de projection. Il peut également consulter les réservations effectuées par les clients, les examiner et les confirmer ou les gérer en conséquence.",
    technologies: ["Flutter", "Firebase"],
    screenshots: [...images5],
    showcase: ["", "https://github.com/helmi003/MovieApp"],
  },
  {
    id: 6,
    title: "3rd internship",
    subtitle:
      "This internship stands out as one of the most exceptional experiences I have had in a long time, as it allowed me to undertake a full-scale project from inception to completion.",
    about:
      "I was entrusted with the development of a mobile application exclusively designed for the delivery process, targeting the delivery man.This application provides a Voi-IP (Voice over IP) to secure customers' personal information, Providing a simpler GPS tracking, Send SMS code verification and taking photos for the order to confirm the reception.",
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
    screenshots: [...images6],
    showcase: ["", ""],
  },
  {
    id: 7,
    title: "Whisper",
    subtitle:
      "During the summer, I took the initiative to enhance my development skills by creating multiple apps and websites. My goal was to gain practical experience and expand my knowledge in the field",
    about:
      "I have developed a mobile application called 'Whisper'. This app combines features similar to both Facebook and Messenger. Here are some of the functionalities I implemented:\nSign in and sign up: Users could create a new account or sign in to an existing account, providing a personalized experience.\nwith the ability to edit their profiles.\nUsers could scroll through the available posts in the app. These posts would include updates, photos, and other shared content.\nwith the possibility to create their own posts and share them with their friends.\nUsers could like and comment on posts.\nUsers had the ability to chat with their friends through personal messages or participate in group conversations. This enabled both one-on-one and group communication within the app.",
    subtitleFR:
      "Durant l'été, j'ai pris l'initiative d'améliorer mes compétences en développement en créant plusieurs applications et sites web. Mon objectif était d'acquérir une expérience pratique et d'élargir mes connaissances dans le domaine.",
    aboutFR:
      "J'ai développé une application mobile appelée 'Whisper'. Cette application combine des fonctionnalités similaires à la fois à Facebook et à Messenger. Voici quelques fonctionnalités que j'ai implémentées :\nLes utilisateurs peuvent créer un nouveau compte ou se connecter à un compte existant, offrant ainsi une expérience personnalisée, avec la possibilité de modifier leurs profils.\nLes utilisateurs peuvent parcourir les publications disponibles dans l'application. Ces publications peuvent inclure des mises à jour, des photos et d'autres contenus partagés.\nLes utilisateurs peuvent créer leurs propres publications et les partager avec leurs amis.\nLes utilisateurs peuvent aimer et commenter les publications.\nLes utilisateurs peuvent discuter avec leurs amis via des messages personnels ou participer à des conversations de groupe. Cela permet à la fois la communication individuelle et en groupe au sein de l'application.",
    technologies: ["Fluter", "Firebase"],
    screenshots: [...images7],
    showcase: ["", "https://github.com/helmi003/whisper"],
  },
  {
    id: 8,
    title: "Castflix",
    subtitle:
      "During my master's degree, I undertook a freelance project to develop an application called 'Castflix.' This application is available for download on the Play Store.",
    about:
      "Castflix is a video streaming platform that provides users with a diverse selection of content. To access the app, users need to follow these instructions:\nInstall the Castflix app from the app store.\nOnce the app is installed, read the instructions provided on the screen.\nRetrieve the unique code displayed on the screen.\nNavigate to the Castflix dashboard.\nEnter the code obtained earlier in the designated area of the dashboard.\nIn the dashboard, users can create lists of content that they want to stream.\nKey features of Castflix include:\nVideo Streaming: Users can stream videos once they have added them to their lists in the dashboard.\nSubscription: Users can opt for a monthly subscription by confirming it with the app manager. This subscription allows them to stream videos and pictures without any interruptions.\nCastflix offers a convenient and user-friendly platform for video streaming, enabling users to manage their content and enjoy a seamless viewing experience.",
    subtitleFR:
      "Pendant ma maîtrise, j'ai entrepris un projet en freelance pour développer une application appelée 'Castflix'. Cette application est disponible en téléchargement sur le Play Store.",
    aboutFR:
      "Castflix est une plateforme de streaming vidéo qui offre aux utilisateurs une sélection diversifiée de contenu. Pour accéder à l'application, les utilisateurs doivent suivre les instructions suivantes :\nInstaller l'application Castflix depuis le magasin d'applications.\nUne fois l'application installée, lire les instructions fournies à l'écran.\nRécupérer le code unique affiché à l'écran.\nAccéder au tableau de bord Castflix.\nSaisir le code obtenu précédemment dans la zone désignée du tableau de bord.\nDans le tableau de bord, les utilisateurs peuvent créer des listes de contenu qu'ils souhaitent diffuser en continu.\nLes principales fonctionnalités de Castflix comprennent :\nStreaming vidéo : les utilisateurs peuvent diffuser des vidéos une fois qu'ils les ont ajoutées à leurs listes dans le tableau de bord.\nAbonnement : les utilisateurs peuvent opter pour un abonnement mensuel en le confirmant auprès du gestionnaire de l'application. Cet abonnement leur permet de diffuser des vidéos et des images sans interruptions.\nCastflix offre une plateforme pratique et conviviale pour le streaming vidéo, permettant aux utilisateurs de gérer leur contenu et de profiter d'une expérience de visionnage fluide.",
    technologies: ["Fluter"],
    screenshots: [...images8],
    showcase: [
      "https://play.google.com/store/apps/details?id=com.pixigrad.castflix&hl=en&gl=US",
      "",
    ],
  },
  {
    id: 9,
    title: "Eat me",
    subtitle:
      "During my master's degree, I took the initiative to enhance my development skills in web development so i decided to develop an application called 'Eat me'.",
    about:
      "Eat Me is a restaurant website that provides comprehensive information about the establishment, including its location, menu, contact details, and more. Users can visit the website to explore the various dishes offered, learn about the restaurant's ambiance, and gather all the necessary information before planning a visit.\nAdditionally, Eat Me offers an online ordering system that allows customers to place their orders directly through the website. Users can browse the menu, select their desired dishes, specify any customizations or dietary preferences, and provide the necessary details for delivery, such as address and contact information. This convenient feature saves customers time and offers a seamless ordering experience.\nMoreover, the website provides a reservation functionality, enabling users to reserve a table for a specific date and time. Users can select their preferred date and time slot, enter their contact information, and receive a confirmation of their reservation. As the reserved date approaches, users can opt to receive notifications as a reminder, ensuring they don't miss their reservation.",
    subtitleFR:
      "Pendant ma maîtrise, j'ai pris l'initiative d'améliorer mes compétences en développement web, j'ai donc décidé de développer une application appelée 'Eat me'.",
    aboutFR:
      "Eat Me est un site web de restaurant qui fournit des informations complètes sur l'établissement, y compris son emplacement, son menu, ses coordonnées, et bien plus encore. Les utilisateurs peuvent visiter le site web pour explorer les différents plats proposés, en apprendre davantage sur l'ambiance du restaurant et rassembler toutes les informations nécessaires avant de planifier une visite.\nDe plus, Eat Me propose un système de commande en ligne qui permet aux clients de passer leurs commandes directement via le site web. Les utilisateurs peuvent parcourir le menu, sélectionner les plats souhaités, spécifier des adaptations ou des préférences alimentaires spécifiques, et fournir les informations nécessaires pour la livraison, telles que l'adresse et les coordonnées de contact. Cette fonctionnalité pratique permet de gagner du temps aux clients et offre une expérience de commande fluide.\nDe plus, le site web offre une fonctionnalité de réservation, permettant aux utilisateurs de réserver une table pour une date et une heure spécifiques. Les utilisateurs peuvent sélectionner leur date et leur créneau horaire préférés, saisir leurs informations de contact et recevoir une confirmation de leur réservation. À l'approche de la date réservée, les utilisateurs peuvent choisir de recevoir des notifications en rappel, afin de s'assurer de ne pas manquer leur réservation.",
    technologies: ["Stack MERN"],
    screenshots: [...images9],
    showcase: ["", "https://github.com/helmi003/EatMe-Frontend"],
  },
  {
    id: 10,
    title: "Tacos Korner app",
    subtitle:
      "During my master's degree, I undertook a freelance project to develop an application called 'Tacos Korner'.",
    about:
      "Tacos Korner is a restaurant ordering kiosk that offers users a wide range of food categories to choose from. The utilization of restaurant ordering kiosks has become increasingly popular in the industry, as it eliminates issues arising from inaccurately taken orders. By using the ordering kiosk, customers have complete control in selecting the products they desire without any difficulties. After making their selections, they proceed to the cashier to pay the bill. This streamlined process enhances the overall dining experience, reducing errors and ensuring customer satisfaction at Tacos Korner.",
    subtitleFR:
      "Pendant ma maîtrise, j'ai entrepris un projet en freelance pour développer une application appelée 'Tacos Korner'.",
    aboutFR:
      "Tacos Korner est une borne de commande de restaurant qui propose aux utilisateurs un large choix de catégories de plats. L'utilisation des bornes de commande de restaurant est de plus en plus populaire dans l'industrie, car elle élimine les problèmes liés aux commandes mal prises. En utilisant la borne de commande, les clients ont un contrôle total pour sélectionner les produits qu'ils désirent sans difficulté. Après avoir fait leurs choix, ils se dirigent vers la caisse pour régler la facture. Ce processus simplifié améliore l'expérience globale des clients, réduit les erreurs et garantit leur satisfaction chez Tacos Korner.",
    technologies: ["Fluter", "MongoDB", "Node-JS"],
    screenshots: [...images10],
    showcase: ["", ""],
  },
  {
    id: 11,
    title: "Tacos Korner dashboard",
    subtitle:
      "During my master's degree, I undertook a freelance project to develop a dashboard for the application 'Tacos Korner'.",
    about:
      "As part of the development process for Tacos Korner, I also created a dashboard to efficiently manage the products available in the application. This dashboard provides an intuitive interface that allows administrators or restaurant staff to easily add, edit, and remove products from the menu.",
    subtitleFR:
      "Pendant ma maîtrise, j'ai entrepris un projet en freelance pour développer un tableau de bord pour l'application 'Tacos Korner'.",
    aboutFR:
      "Dans le cadre du processus de développement de Tacos Korner, j'ai également créé un tableau de bord pour gérer efficacement les produits disponibles dans l'application. Ce tableau de bord offre une interface intuitive qui permet aux administrateurs ou au personnel du restaurant d'ajouter, de modifier et de supprimer facilement des produits du menu.",
    technologies: ["Stack MERN"],
    screenshots: [...images11],
    showcase: ["", ""],
  },
  {
    id: 12,
    title: "Sales management",
    subtitle:
      "During my master's degree, I undertook a freelance project to develop a website called 'Sales management(L-Mobile)'.",
    about:
      "L-Mobile is a comprehensive website designed for sales management, providing users with the opportunity to sell their own products, similar to the platform 'Tayara.tn'. The website offers different user roles, including regular users and salesmen.\nUpon logging into the website, users can explore the wide range of products available for purchase. Each product listing includes three types of offers: purchase, rent, and trade (limited to transactions between salesmen).\nSalesmen have additional privileges and access on the website. They can review the offers that clients have made, and have the ability to either confirm or delete those offers. Once an offer is confirmed, the salesman can proceed to create a contract, which solidifies the agreement between the salesman and the client. This contract ensures that both parties are in agreement regarding the terms and conditions of the offer.\nSalesmen also have the capability to add, delete, or edit product listings on the website. This empowers them to effectively manage their inventory and keep their product information up to date.",
    subtitleFR:
      "Pendant ma maîtrise, j'ai entrepris un projet en freelance pour développer un site web appelé 'Gestion des ventes (L-Mobile)'.",
    aboutFR:
      "L-Mobile est un site web complet conçu pour la gestion des ventes, offrant aux utilisateurs la possibilité de vendre leurs propres produits, de manière similaire à la plateforme 'Tayara.tn'. Le site web propose différents rôles d'utilisateurs, notamment les utilisateurs réguliers et les vendeurs.\nUne fois connectés au site web, les utilisateurs peuvent explorer la large gamme de produits disponibles à l'achat. Chaque annonce de produit comprend trois types d'offres : achat, location et échange (limité aux transactions entre vendeurs).\nLes vendeurs ont des privilèges et des accès supplémentaires sur le site web. Ils peuvent consulter les offres faites par les clients et ont la possibilité de les confirmer ou de les supprimer. Une fois qu'une offre est confirmée, le vendeur peut procéder à la création d'un contrat, qui consolide l'accord entre le vendeur et le client. Ce contrat garantit que les deux parties sont d'accord sur les termes et conditions de l'offre.\nLes vendeurs ont également la capacité d'ajouter, de supprimer ou de modifier des annonces de produits sur le site web. Cela leur permet de gérer efficacement leur inventaire et de maintenir à jour les informations sur leurs produits.",
    technologies: ["Stack MEAN"],
    screenshots: [...images12],
    showcase: ["", ""],
  },
  {
    id: 13,
    title: "Hand rehab",
    subtitle:
      "During my engeenering studies, I undertook a freelance project to develop a mobile application called 'Hand rehab'.",
    about:
      "Hand Rehab is an application designed for doctors and their patients. The app connects via Bluetooth to a specialized glove used by patients to test different hand movements. Whenever a patient makes a movement, the glove sends a signal to the application through an ESP32 microcontroller. The data is then transmitted via Bluetooth to the app. Doctors can review these signals, take notes, and proceed to the next step in the rehabilitation process. The app supports three languages: English, French, and Arabic, making it accessible to a wider audience.",
    subtitleFR:
      "Pendant mes études d'ingénieur, j'ai entrepris un projet en freelance pour développer une application mobile appelée 'Hand Rehab'.",
    aboutFR:
      "Hand Rehab est une application conçue pour les médecins et leurs patients. L'application se connecte via Bluetooth à un gant spécialisé utilisé par les patients pour tester différents mouvements de la main. Chaque fois qu'un patient effectue un mouvement, le gant envoie un signal à l'application via un microcontrôleur ESP32. Les données sont ensuite transmises via Bluetooth à l'application. Les médecins peuvent examiner ces signaux, prendre des notes et passer à l'étape suivante du processus de rééducation. L'application prend en charge trois langues : anglais, français et arabe, ce qui la rend accessible à un plus large public.",
    technologies: ["Flutter","Firebase","Bluetooth","ESP32"],
    screenshots: [...images13],
    showcase: ["", ""],
  },
  {
    id: 14,
    title: "HFBatiment application",
    subtitle:
      "During my engeenering studies, I undertook a freelance project to develop a mobile application called 'HFBatiment'.",
    about:
      "HFBatiment is a mobile application designed to assist construction site managers in efficiently managing resources, including materials, machinery, and labor. The app provides comprehensive tracking and management capabilities, such as: Materials Management to Monitor the consumption of construction materials, Machinery Utilization to Track the operational hours of various machines, Labor Management: Record and manage work hours for different types of construction workers, such as masons, plumbers, and heavy equipment operators. Additionally, if additional resources are needed, site managers can send a formal request (FRS) through the app, which will automatically notify and email the relevant administrators for approval and action. HFBatiment also enables site managers to check the daily consumption of resources, view the progress of ongoing projects, fill out and submit daily reports on the quantity of work executed, And lastly To ensure timely reporting, the app sends reminders to the site managers if the daily report is not submitted by 8 PM. If no action is taken by 9 PM, a notification and an email are sent to the administrators. Administrators can use HFBatiment to consult the overall progress of projects and analyze the daily consumption of resources.",
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
    screenshots: [...images14],
    showcase: ["", ""],
  },
  {
    id: 15,
    title: "HFBatiment dasboard",
    subtitle:
      "During my engeenering studies, I undertook a freelance project to develop a dashbord called 'HFBatiment'.",
    about:
      "HFBatiment Dashboard, created mainly for the admin, allows them to add, modify, delete, and view multiple resources such as materials, engines, and construction workers. Additionally, the admin can assign projects to construction site managers with the progress timeline they should follow. Construction workers can consult the entries they have made, either for the current day or previous ones.",
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
    screenshots: [...images15],
    showcase: ["", ""],
  },
  {
    id: 16,
    title: "Esprit piazza",
    subtitle:
      "During my engineering studies, I undertook a project with my colleagues at Esprit University, a team of 7 called 'Glitch Mavens'.",
    about:
      "Esprit Piazza is our enterprise forum management platform, designed to foster seamless collaboration between ESPRIT University and businesses. Acting as a virtual nexus, it transcends physical boundaries, facilitating efficient event coordination and mutual benefit for all stakeholders. The platform engages eight distinct user roles, each with specialized functionalities. Key features include comprehensive user management overseen by administrators, streamlined forum organization capabilities for committees, logistical support for event supplies managed by suppliers, and extensive application and offer management tools benefiting exhibitors, students, alumni, and teachers. Security and user management, central to the platform's operation, ensure smooth and protected interactions across all functionalities. Our team, 'Glitch Mavens', achieved recognition by being selected among 8 groups from 10 classes in SAE and advancing to the semifinals.",
    subtitleFR:
      "Pendant mes études d'ingénierie, j'ai entrepris un projet avec mes collègues de l'Université Esprit, une équipe de 7 appelée 'Glitch Mavens'.",
    aboutFR:
      "Esprit Piazza est notre plateforme de gestion de forums d'entreprise, conçue pour favoriser une collaboration harmonieuse entre l'Université ESPRIT et les entreprises. Agissant comme un point de rencontre virtuel, elle transcende les frontières physiques, facilitant une coordination efficace des événements et des bénéfices mutuels pour toutes les parties prenantes. La plateforme engage huit rôles d'utilisateurs distincts, chacun avec des fonctionnalités spécialisées. Les principales caractéristiques incluent une gestion complète des utilisateurs supervisée par les administrateurs, des capacités organisatives de forum optimisées pour les comités, un soutien logistique pour l'approvisionnement en événements géré par les fournisseurs, ainsi que des outils étendus de gestion des candidatures et des offres bénéficiant aux exposants, aux étudiants, aux anciens élèves et aux enseignants. La sécurité et la gestion des utilisateurs, essentielles au fonctionnement de la plateforme, garantissent des interactions fluides et sécurisées à travers toutes les fonctionnalités. Notre équipe, les 'Glitch Mavens', a été sélectionnée parmi 8 groupes de 10 classes en SAE et a réussi à atteindre les demi-finales.",
    link: "https://www.youtube.com/watch?v=95Ub-Nd_h8s",
    technologies: ["Angular", "Spring boot", "Keycloack", "MySQL"],
    screenshots: [...images16],
    showcase: ["https://www.youtube.com/watch?v=95Ub-Nd_h8s", ""],
  },
];
export default data;
