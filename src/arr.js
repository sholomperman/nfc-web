import instagram from "./assets/instagram.svg";
import twitter from "./assets/twitter.svg";
import linkedin from "./assets/linkedin.svg";
import facebook from "./assets/facebook.svg";
import snapchat from "./assets/snapchat.svg";
import github from "./assets/github.svg";
import phone from "./assets/phone.svg";
import contact from "./assets/Sholom-Perman.vcf";
import mail from "./assets/mail.svg";
import resume from "./assets/resume.svg";
import pdf from "./assets/Sholom-Perman-Resume.pdf";
import sholomperman from "./assets/profile01.jpg";
import teny from "./assets/teny.jpeg";

export const arr = [
  {
    id: 1,
    name: "Sholom Perman",
    avator: sholomperman,
    bio: "Full Stack Developer",
    contact: contact,
    hashtags:
      "HTML CSS JavaScript reactJS nodeJS (sass tailwind metirialUI bootstrap)",
    links: [
      {
        id: 1,
        url: "https://instagram.com/sholomperman",
        icon: instagram,
      },
      {
        id: 2,
        url: "https://linkedin.com/in/sholom-perman",
        icon: linkedin,
      },
      {
        id: 3,
        url: "https://www.facebook.com/profile.php?id=100072370041022",
        icon: facebook,
      },
      {
        id: 4,
        url: "https://twitter.com/sholomperman",
        icon: twitter,
      },
      {
        id: 5,
        url: "https://github.com/sholomperman",
        icon: github,
      },
      {
        id: 6,
        url: "https://www.snapchat.com/add/sholomperman?share_id=vwOHV8Nv3HE&locale=en-US",
        icon: snapchat,
      },
      {
        id: 7,
        url: "tel:3473789160",
        icon: phone,
      },
      {
        id: 8,
        url: "mailto:sholomperman",
        icon: mail,
      },
      {
        id: 8,
        url: pdf,
        icon: resume,
      },
    ],
  },
  {
    id: 2,
    name: 'Mendel "Tenny" Tenenbaum',
    avator: teny,
    bio: "Aspiring aviation enthusiast and future pilot",
    contact: "7076990731",
    hashtags:
      "Rabbinic ordination, real estate developer, investor, web developer.",
    links: [
      {
        id: 1,
        url: "",
        icon: instagram,
      },
      {
        id: 3,
        url: "",
        icon: facebook,
      },
      {
        id: 4,
        url: "",
        icon: twitter,
      },
      {
        id: 5,
        url: "",
        icon: github,
      },
      {
        id: 7,
        url: "tel:",
        icon: phone,
      },
      {
        id: 8,
        url: "mailto:",
        icon: mail,
      },
    ],
  },
];
