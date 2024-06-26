import Image1 from "../../assets/img/portfolio1.png";
import Image2 from "../../assets/img/portfolio2.png";
import Image3 from "../../assets/img/portfolio3.png";
import Image4 from "../../assets/img/portfolio4.png"

const data = [
  {
    id: 1,
    category: "UIUX",
    categories: ["UIUX", "HTML", "CSS", "JavaScript"],
    image: Image1,
    title: "User Creation Form",
    desc: "Front-End exercise for Fetch (https://fetch-hiring.s3.amazonaws.com/frontend.html). Created a User form and got occupation and state from https://frontend-take-home.fetchrewards.com/form using a GET request and submitted the results to the same form using a POST request",
    demo: "https://jayjanodia.github.io/usercreationform.github.io/",
    github: "https://github.com/jayjanodia/usercreationform.github.io",
  },
  {
    id: 2,
    category: "Frontend",
    categories: ["Frontend", "HTML", "CSS", "JavaScript", "React"],
    image: Image2,
    title: "Mock Portfolio",
    desc: "Created a mock portfolio website that looks good but is missing some functionality",
    demo: "https://jayjanodia-visual.netlify.app/",
    github: "https://github.com/jayjanodia/Personal-Website",
  },
  {
    id: 3,
    category: "Frontend",
    categories: ["Frontend", "HTML", "CSS", "JavaScript", "Bootstrap"],
    image: Image3,
    title: "Pizza Order Application",
    desc: "My first frontend website with fully functional Sign In and Login boxes",
    demo: "https://jayjanodia.github.io/Pizza_order_application/",
    github: "https://github.com/jayjanodia/Pizza_order_application",
  },
  {
    id: 4,
    category: "Backend",
    categories: ["Backend", "Flask", "HTML"],
    image: Image4,
    title: "Flask Blog Website",
    desc: "Application is hosted on a static website, it might be better to test using github link",
    demo: "https://blog-website-o19m.onrender.com/",
    github: "https://github.com/jayjanodia/Blog-Website",
  }
];

export default data;
