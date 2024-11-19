import instagram from "./icons/instagram.svg";
import twitter from "./icons/twitter.svg";
import linkedin from "./icons/linkedin.svg";
import facebook from "./icons/facebook.svg";
import snapchat from "./icons/snapchat.svg";
import github from "./icons/github.svg";
import phone from "./icons/phone.svg";
import mail from "./icons/mail.svg";
import sholom_vcs from "./assets/Sholom-Perman.vcf";
import sholomperman from "./assets/sholom-profile.jpeg";

export const arr = [
  {
    id: 1,
    name: "Sholom Perman",
    route: '/sholomperman',
    avatar: sholomperman,
    bio: "Full Stack Developer",
    contact: sholom_vcs,
    hashtags:
      "HTML CSS JavaScript reactJS nodeJS (sass tailwind materialUI bootstrap)",
    links: [
      // {
      //   id: 1,
      //   url: "https://instagram.com/sholomperman",
      //   icon: instagram,
      // },
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
        url: "https://twitter.com/MendelTenenbaum",
        icon: twitter,
      },
      {
        id: 5,
        url: "https://github.com/sholomperman",
        icon: github,
      },
      // {
      //   id: 6,
      //   url: "https://www.snapchat.com/add/sholomperman?share_id=vwOHV8Nv3HE&locale=en-US",
      //   icon: snapchat,
      // },
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
    ],
  },
];
