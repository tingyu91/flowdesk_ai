// ui_kits/website/Nav.jsx
function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#" aria-label="Zenex Flow home" style={{display:'flex'}}>
          <img src="../../assets/logo.svg" width="160" height="38" alt="Zenex Flow" />
        </a>
        <div className="nav-links">
          <a className="nav-link" href="#solutions">Solutions</a>
          <a className="nav-link" href="#how">How it works</a>
          <a className="nav-link" href="#pricing">Pricing</a>
          <a className="nav-link" href="#docs">Docs</a>
        </div>
        <div className="nav-cta">
          <a className="btn btn-ghost btn-sm" href="#signin">Sign in</a>
          <a className="btn btn-primary btn-sm" href="#contact">Book a demo →</a>
        </div>
      </div>
    </nav>
  );
}
window.Nav = Nav;
