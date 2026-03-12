
function Info() {
  return (
    <header className="info">
      <h1 className="info--name">Awosanya Ifeoluwa</h1>
      <h4 className="info--role">Frontend Developer</h4>
      <div className="info--buttons">
        <button className="btn-email">
          <i className="fa-solid fa-envelope"></i>{" "}
          <a  className="links linka" href="mailto:awosanyavictor9@gmail.com">Email</a>
        </button>
        <button className="btn-linkedin">
          <i className="fa-brands fa-linkedin"></i>{" "}
          <a className="links"
            href="https://www.linkedin.com/in/awosanya-ifeoluwavictor/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            LinkedIn
          </a>
        </button>
      </div>
    </header>
  );
}

function About() {
  return (
    <section className="about">
      <h3>About</h3>
      <p>I am a developer who loves React</p>
    </section>
  );
}

function Interests() {
  return (
    <section className="interests">
      <h3>Interests</h3>
      <p>Gaming, Coding, and Reading</p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <a
        className="links linka"
        href="https://x.com/awosanya_ife"
        target="_blank"
      >
        {" "}
        <i className="fa-brands fa-twitter"></i>
      </a>
      <a
        className="links linka"
        href="https://github.com/viipzy"
        target="_blank"
      >
        {" "}
        <i className="fa-brands fa-github"></i>
      </a>
    </footer>
  );
}


export default function App() {
  return (
    <div className="card-container">
      <Info />
      <div className="card-content">
        <About />
        <Interests />
      </div>
      <Footer />
    </div>
  );
}
