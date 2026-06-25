import SectionHeading from "./SectionHeading.jsx";

const services = [
  {
    icon: "WEB",
    title: "Web Development",
    description:
      "I build responsive and high-performance websites using modern technologies like React, Node.js, and MongoDB.",
  },
  {
    icon: "UI",
    title: "Frontend Development",
    description:
      "I create user-friendly interfaces using React, Tailwind CSS, and modern UI/UX design principles.",
  },
  {
    icon: "API",
    title: "Backend Development",
    description:
      "I develop secure and scalable server-side applications with Node.js, Express, and MongoDB.",
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container reveal">
        <SectionHeading title="Services">
          I offer high-quality web development services focused on building fast, secure, and user-friendly applications tailored
          to your needs.
        </SectionHeading>
        <div className="card-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="card-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
