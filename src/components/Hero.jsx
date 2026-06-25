export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero-inner reveal">
        <img className="profile-image" src="/assets/munees.png" alt="Profile of Muneeswaran" />
        <h1>
          Muneeswaran
          <span>Full Stack Developer (MERN + TypeScript)</span>
        </h1>
        <p>
          I'm a fresher passionate about building modern, responsive web applications using the MERN stack and TypeScript. I
          love turning ideas into real projects and continuously improving my skills.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#contact">
            Hire Me
          </a>
          <a className="secondary-button" href="#work">
            My Projects
          </a>
        </div>
      </div>
    </section>
  );
}
