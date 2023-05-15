import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
/* import { AiFillGithub } from "react-icons/ai";*/

const data = [
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

export default data;
