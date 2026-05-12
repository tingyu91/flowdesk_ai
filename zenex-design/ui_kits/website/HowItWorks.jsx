// ui_kits/website/HowItWorks.jsx
function HowItWorks() {
  const steps = [
    { n: '01', title: 'Connect your stack',  body: 'Pipe in tickets, alerts, and signals from Jira, ServiceNow, Slack, Datadog, and 180+ more.' },
    { n: '02', title: 'Compose your agents', body: 'Build runbooks visually or import from YAML. Test in sandbox; promote to production in one click.' },
    { n: '03', title: 'Ship and observe',    body: 'Every action is logged, scored, and replayable. Roll back any change in seconds.' },
  ];
  return (
    <section className="section" id="how" style={{ background: 'var(--bg-sunken)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">How it works</span>
          <h2 className="section-title">Three steps from chaos to control.</h2>
        </div>
        <div className="steps">
          {steps.map(s => (
            <div className="step" key={s.n}>
              <div className="step-num">STEP · {s.n}</div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.HowItWorks = HowItWorks;
