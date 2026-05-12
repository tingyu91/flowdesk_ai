// ui_kits/website/StatsStrip.jsx
function StatsStrip() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="stats-strip">
          <div className="stat stat--accent">
            <div className="num">↓ 62<span className="unit">%</span></div>
            <span className="label">Mean time to resolution</span>
          </div>
          <div className="stat">
            <div className="num">11.4<span className="unit">s</span></div>
            <span className="label">Average first response</span>
          </div>
          <div className="stat">
            <div className="num">98.7<span className="unit">%</span></div>
            <span className="label">Platform uptime · 12 mo.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
window.StatsStrip = StatsStrip;
