export default function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${form.get("name")}\nEmail: ${form.get("email")}\nPhone: ${form.get("phone")}\nBudget: ${form.get(
        "budget"
      )}\n\nMessage:\n${form.get("message")}`
    );
    window.location.href = `mailto:muneeswarann27@email.com?subject=${subject}&body=${body}`;
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container reveal">
        <div className="section-heading">
          <h2>
            Let's discuss <span>Your Project</span>
          </h2>
          <p>
            Have an idea or project in mind? I'm always open to new opportunities and collaborations. Let's connect and bring
            your vision to life!
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-list">
            <article>
              <strong>Call Me</strong>
              <a href="tel:+916382493680">+91 6382493680</a>
            </article>
            <article>
              <strong>Email</strong>
              <a href="mailto:muneeswarann27@email.com">muneeswarann27@email.com</a>
            </article>
            <article>
              <strong>Address</strong>
              <span>Theni , Andipatti</span>
            </article>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Full name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="tel" name="phone" placeholder="Phone Number" />
            <input type="text" name="budget" placeholder="Budget" />
            <textarea name="message" placeholder="Message" rows="5" required />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}
