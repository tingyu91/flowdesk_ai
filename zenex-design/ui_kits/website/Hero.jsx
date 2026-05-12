// ui_kits/website/Hero.jsx
function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <div className="hero-eyebrow"><span className="dot"></span>AI-driven IT automation</div>
          <h1>
            Intelligent automation<br/>
            for the modern <span className="editorial">IT desk.</span>
          </h1>
          <p className="lede">
            Route, resolve, and report on every ticket — faster, with fewer hands. Zenex Flow pipes your support, infrastructure, and security signals through one orchestration layer.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary btn-lg" href="#contact">Book a demo →</a>
            <a className="btn btn-secondary btn-lg" href="#how">See how it works</a>
          </div>
        </div>
        <div className="hero-illustration">
          <img src="../../assets/illustration-flow.svg" alt="Orchestration diagram" />
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
