import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
/* import { AiFillGithub } from "react-icons/ai";*/

export const links = [
  { id: 1, link: "#", title: "Home" },
  { id: 2, link: "#about", title: "About" },
  { id: 3, link: "#Experience", title: "Experience" },
  { id: 4, link: "#portfolio", title: "Projects" },
  { id: 5, link: "#contact", title: "Contact" },
];

export const socials = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/jay-janodia-46b266ab/",
    icon: <AiOutlineLinkedin size={28} />,
  },
  {
    id: 2,
    link: "https://github.com/jayjanodia/",
    icon: <AiOutlineGithub size={28} />,
  },
  {
    id: 3,
    link: "https://instagram.com/j_j_1998/?igshid=YmMyMTA2M2Y=",
    icon: <AiOutlineInstagram size={28} />,
  },
  {
    id: 4,
    link: "https://www.facebook.com/jayjanodia/",
    icon: <AiOutlineFacebook size={28} />,
  },
];
