import SectionHeading from "./SectionHeading.jsx";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container reveal">
        <SectionHeading title="About Me">
          I'm a passionate and motivated fresher who is currently focused on full-stack development using the MERN stack and
          TypeScript. I enjoy learning by building real-world projects and constantly improving my skills through hands-on
          experience.
        </SectionHeading>
        <div className="about-grid">
          <img className="profile-image" src="/assets/munees.png" alt="About Muneeswaran" />
          <p>
            I started my web development journey recently and have built multiple frontend and full-stack projects using
            technologies like React, Node.js, Express, MongoDB, and TypeScript. I'm always eager to learn new things and excited
            to kickstart my career as a developer.
          </p>
        </div>
        <div className="stats">
          <article>
            <strong>4+</strong>
            <span>MERN Projects I have Made</span>
          </article>
          <article>
            <strong>10+</strong>
            <span>JavaScript & Frontend Projects</span>
          </article>
          <article>
            <strong>1+</strong>
            <span>Year of Learning</span>
          </article>
        </div>
      </div>
    </section>
  );
}
