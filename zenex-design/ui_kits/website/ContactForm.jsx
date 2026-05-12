// ui_kits/website/ContactForm.jsx
function ContactForm() {
  const [form, setForm] = React.useState({ name: '', email: '', company: '', size: '50 – 200', message: '' });
  const [errors, setErrors] = React.useState({});
  const [sent, setSent] = React.useState(false);

  function update(k, v) {
    setForm(f => ({ ...f, [k]: v }));
    setErrors(e => ({ ...e, [k]: undefined }));
  }
  function submit(e) {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = 'Required';
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(form.email)) errs.email = 'Enter a valid work email';
    if (!form.company.trim()) errs.company = 'Required';
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-shell">
          <div className="contact-intro">
            <span className="section-eyebrow" style={{ marginBottom: 14, display: 'block' }}>Contact</span>
            <h2>Tell us about your stack.</h2>
            <p>We'll get back within one business day with a scoped demo and a fit assessment. No deck-led calls.</p>
            <div className="contact-details">
              <div className="row"><span style={{color:'var(--accent-soft-fg)'}}>→</span><span className="mono">hello@zenexflow.ai</span></div>
              <div className="row"><span style={{color:'var(--accent-soft-fg)'}}>→</span><span>Mon – Fri · 9am – 6pm PT</span></div>
              <div className="row"><span style={{color:'var(--accent-soft-fg)'}}>→</span><span>SOC 2 · GDPR · HIPAA ready</span></div>
            </div>
          </div>
          <form onSubmit={submit} noValidate>
            {sent && (
              <div className="success-banner" style={{ marginBottom: 18 }}>
                <span>✓</span>
                <div>
                  <div style={{fontWeight:600}}>Thanks — we'll be in touch.</div>
                  <div style={{fontSize:13, marginTop:2, color:'var(--jade-700)'}}>Reply lands at {form.email} within one business day.</div>
                </div>
              </div>
            )}
            <div className="field-row">
              <div className={`field ${errors.name ? 'field--error' : ''}`}>
                <label>Full name</label>
                <input type="text" value={form.name} onChange={e => update('name', e.target.value)} placeholder="Jordan Lee" />
                {errors.name && <span className="err">{errors.name}</span>}
              </div>
              <div className={`field ${errors.email ? 'field--error' : ''}`}>
                <label>Work email</label>
                <input type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="you@company.com" />
                {errors.email && <span className="err">{errors.email}</span>}
              </div>
            </div>
            <div className="field-row">
              <div className={`field ${errors.company ? 'field--error' : ''}`}>
                <label>Company</label>
                <input type="text" value={form.company} onChange={e => update('company', e.target.value)} placeholder="Acme Corp" />
                {errors.company && <span className="err">{errors.company}</span>}
              </div>
              <div className="field">
                <label>Team size</label>
                <select value={form.size} onChange={e => update('size', e.target.value)}>
                  <option>1 – 49</option>
                  <option>50 – 200</option>
                  <option>200 – 1,000</option>
                  <option>1,000+</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label>What are you hoping to automate?</label>
              <textarea value={form.message} onChange={e => update('message', e.target.value)} placeholder="A short sentence is plenty — we'll dig in on the call."></textarea>
            </div>
            <button className="btn btn-primary btn-lg" type="submit">Book a demo →</button>
          </form>
        </div>
      </div>
    </section>
  );
}
window.ContactForm = ContactForm;
