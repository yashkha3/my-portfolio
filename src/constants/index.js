import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.webp";
import project8 from "../assets/projects/project-8.png";
import project9 from "../assets/projects/project-9.png";



export const NAME = `Yash Khatri`;

export const POST = `Full Stack Developer`;

export const LINKS = {
  linkedIn: 'https://www.linkedin.com/in/iamyashkhatri/',
  github: 'https://github.com/yashkha3',
  instagram: 'https://www.instagram.com/yashpannel',
  codeWars: 'https://www.codewars.com/users/ykhatri'
}

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 3.5 years of hands-on experience, I have honed my skills in back-end technologies like Node.js, MySQL, PostgreSQL, MongoDB and Redis, as well as front-end technologies like React. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `Full Stack Engineer with a strong foundation in Node.js and JavaScript, excelling in scalable game engine development and backend optimization. With a solid track record of driving innovation and adhering to best practices, I have successfully led teams to deliver complex projects on time, earning consistent client accolades for performance and quality. I thrive in cross-functional collaboration, ensuring alignment between stakeholders and technical teams through clear, strategic communication. My work reflects a meticulous focus on every stage of the development lifecycle, from architecting efficient solutions to seamless deployment. I am deeply committed to leveraging cutting-edge technology to not only enhance user experiences but also drive measurable business growth. By fostering a feedback-driven development culture, I continuously refine and adapt solutions to stay ahead of evolving client and market demands.`;

export const EXPERIENCES = [
  {
    year: "May 2023 - Present",
    role: "Solution Engineer",
    company: "Gammastack",
    description: `As a Solution Engineer, I design and implement scalable solutions that enhance system performance and streamline workflows. I have experience creating fast, high-performance betting games, building robust backend architectures, optimizing data management, and delivering intuitive user interfaces for a seamless user experience.`,
    technologies: ["Javascript", "Node.js", "BullQueue", "Kafka", "RabbitMQ", "AWS", "MongoDB", "React.js"],
  },
  {
    year: "July 2021 - May 2023",
    role: "Backend Developer",
    company: "Sofmen Technologies",
    description: `As a Backend Developer, I specialize in building dynamic and scalable server-side applications, optimizing data management, and developing real-time communication systems. I’ve created robust backend architectures and integrated intelligent processing solutions, ensuring high performance and seamless integration with various services.`,
    technologies: ["JavaScript", "Node.js", "Express.js", "GraphQL", "PostgreSQL", "BitBucket", "Socket.io", "NLP", "AWS"],
  }
];

export const PROJECTS = [
  {
    title: "Golden7 - Card Game",
    image: project1,
    description:
      "Engineered and designed the database architecture and game engine for SHAN KOE MEE, a multiplayer game in Myanmar, enhancing user experience and supporting over 3,000 concurrent players seamlessly.",
    technologies: ["Node.js", "BullQueue", "React", "Docker", "Postgresql", "Redis"],
  },
  {
    title: "Payment Report - Rent Payment Service",
    image: project2,
    description:
      "Optimized a Node.js serverless application on AWS Amplify for generating monthly rental payment reports, streamlining tenant payment data submission to Credit Bureaus for credit score updates, achieving 60% faster data transactions, and reducing RDS costs by 50%.",
    technologies: ["AWS Amplify", "Material UI", "React", "GraphQL", "Stripe", "ElastiSearch"],
  },
  {
    title: "Ezugi - Games Collection",
    image: project3,
    description:
      "Used existing games and converted it into B2B services in which games providers can share games to operators.",
    technologies: ["Node.js", "BullQueue", "React", "Postgresql", "Redis", "Socket.io"],
  },
  {
    title: "Living Pixel - Solitaire",
    image: project9,
    description:
      "Designed and developed a multiplayer Solitaire game where multiple players can compete in tournament-style rounds. The game features real-time synchronous multiplayer functionality, round-based progression, and a structured tournament format. The system supports multiple players engaging in competitive rounds simultaneously, enhancing the traditional single-player Solitaire experience with a dynamic and competitive element.",
    technologies: ["Node.js", "Framer Motion", "Postgresql", "Docker", "Socket.io"],
  },
  {
    title: "AliBaba - Tower Game",
    image: project4,
    description:
      "Engineered the integration of pre-existing games and developed the innovative Tower Game, enhancing the gaming portfolio.",
    technologies: ["Node.js", "BullQueue", "Postgresql", "Redis", "Socket.io"],
  },
  {
    title: "Enigma Holdings",
    image: project5,
    description:
      "Integrated existing games and leveraged client provided libraries to align with industry trends, optimizing transaction processes and effectively managing game rounds on the operator's platform (RGS). Contributed to a streamlined gaming experience that increased user engagement and transaction efficiency.",
    technologies: ["Node.js", "BullQueue", "Postgresql", "Redis", "Socket.io", "RGS"],
  },
  {
    title: "Badhombre - Game Provider Platform",
    image: project6,
    description:
      "Integrated multiple fast-paced games and introduced unique titles, including Roller Coaster. Developed and implemented crypto betting features and utilized best practices such as Memoization to significantly enhance system speed and performance.",
    technologies: ["Node.js", "GCP", "MongoDB", "Docker", "Redis", "Socket.io"],
  },
  {
    title: "Tootle",
    image: project7,
    description:
      "Developed a note-taking app with an NLP-powered backend, enabling quick searches, data-driven targeted ads, and sentiment analysis of user generated content.",
    technologies: ["Node.js", "Kafka", "MongoDB", "Redis", "Socket.io", "NLP", "Square"],
  },
  {
    title: "Yeet",
    image: project8,
    description:
      "Engineered the Yolo Game, a unique gaming experience, from concept to launch.",
    technologies: ["Node.js", "Postgresql", "Docker", "Socket.io"],
  },
];

export const CONTACT = {
  phoneNo: "+91 9144 818 318",
  email: "yashpannel@gmail.com",
};
