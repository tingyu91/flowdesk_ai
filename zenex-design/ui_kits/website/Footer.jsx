// ui_kits/website/Footer.jsx
function Footer() {
  const cols = [
    { title: 'Product',  links: ['Solutions', 'Pricing', 'Integrations', 'Changelog'] },
    { title: 'Company',  links: ['About', 'Careers', 'Customers', 'Contact'] },
    { title: 'Resources', links: ['Docs', 'Trust center', 'Status', 'Blog'] },
  ];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <img src="../../assets/logo-on-dark.svg" width="170" height="40" alt="Zenex Flow" />
            <p className="footer-tag">Intelligent automation for the modern IT desk. Built for teams that ship.</p>
          </div>
          {cols.map(c => (
            <div className="footer-col" key={c.title}>
              <div className="footer-col-title">{c.title}</div>
              {c.links.map(l => <a key={l} href="#">{l}</a>)}
            </div>
          ))}
        </div>
        <div className="footer-fine">
          <span>© 2026 Zenex Flow. All rights reserved.</span>
          <span className="mono">v2.18.3 · build a7f3c1</span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
