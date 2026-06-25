export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>&copy; {new Date().getFullYear()} Copyright Reserved</p>
        <strong>Munees</strong>
        <div className="socials">
          <a href="https://www.linkedin.com/in/muneeswaran-n-447a93339/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:muneeswarann27@email.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
