import SectionHeading from "./SectionHeading.jsx";

const projects = [
  {
    title: "Twitter Clone",
    image: "/assets/twitter.png",
    stack: "React | Node.js | Express | MongoDB",
    description:
      "A full-stack social media application with authentication, tweet posting, likes, and a clean responsive interface inspired by Twitter/X.",
    link: "https://twitter-clone-bbi4.onrender.com",
  },
  {
    title: "Chat App",
    image: "/assets/chat.png",
    stack: "React | Socket.io | Node.js | MongoDB",
    description:
      "A real-time messaging platform with JWT authentication, secure communication, and a modern UI designed for fast and smooth conversations.",
    link: "https://chat-app-5zuc.onrender.com",
  },
  {
    title: "E-Commerce App",
    image: "/assets/ecommerce.png",
    stack: "React | Express | MongoDB | Razorpay",
    description:
      "A modern e-commerce application featuring secure login, cart management, online payments, coupon support, and a seamless shopping experience.",
    link: "https://e-commers-6lox.onrender.com",
  },
 /*  {
    title: "Task-Manager",
    image: "/assets/taskmanager.png",
    stack: "React | Express | MongoDB | TypeScript",
    description:
      "Built a MERN + TypeScript based task management application to efficiently create, update, and track tasks with a clean and responsive UI.",
    link: "https://taskmanager27052006.netlify.app/",
  }, */
];

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="container reveal">
        <SectionHeading title="Work">
          A selection of projects that reflect my experience building responsive full-stack applications with modern frontend
          design and practical backend features.
        </SectionHeading>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <img src={project.image} alt={`${project.title} screenshot`} />
              <div className="project-body">
                <p className="stack">{project.stack}</p>
                <h3>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    {project.title}
                  </a>
                </h3>
                <p>{project.description}</p>
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                  View Project
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
