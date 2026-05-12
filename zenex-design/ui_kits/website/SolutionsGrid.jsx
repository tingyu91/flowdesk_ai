// ui_kits/website/SolutionsGrid.jsx
const FD_SOLUTIONS = [
  { icon: 'support',     title: 'IT support & service management', body: 'Automate the noisy 60% of your service desk. Classification, routing, and resolution — pre-handled.' },
  { icon: 'chatbot',     title: 'AI chatbots & virtual assistants', body: 'Conversational agents trained on your runbooks, knowledge base, and policy docs.' },
  { icon: 'workflow',    title: 'Workflow & process automation',   body: 'Compose runbooks visually. Trigger from any event in any tool you already run.' },
  { icon: 'cloud',       title: 'Cloud infrastructure management', body: 'Provision, monitor, and right-size across AWS, Azure, and GCP from a single control plane.' },
  { icon: 'security',    title: 'Cybersecurity monitoring',         body: 'Continuous signal, real-time response, audit-ready trails. SOC 2 Type II from day one.' },
  { icon: 'analytics',   title: 'Data analytics & predictive insights', body: 'Track every KPI that matters. Anomaly detection that calls you before customers do.' },
  { icon: 'integration', title: 'System integration & transformation',  body: '180+ native connectors. Bring your stack into one orchestration graph.' },
];

function SolutionIcon({ name }) {
  return <img src={`../../assets/icons/${name}.svg`} width="22" height="22" alt="" style={{ filter: 'none' }} />;
}

function SolutionsGrid() {
  return (
    <section className="section" id="solutions" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Solutions</span>
          <h2 className="section-title">A single orchestration layer for every IT signal.</h2>
          <p className="section-subtitle">Seven product surfaces. One data graph. Pick the ones you need today — extend them when you're ready.</p>
        </div>
        <div className="solutions-grid">
          {FD_SOLUTIONS.map(s => (
            <div className="solution-card" key={s.icon}>
              <div className="solution-icon"><SolutionIcon name={s.icon} /></div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.SolutionsGrid = SolutionsGrid;
