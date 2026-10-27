import { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', project: '' });
  const update = e => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <form className="contact-form" onSubmit={e => { e.preventDefault(); setSent(true); }}>
      {sent ? (
        <div className="form-success">
          <span>MESSAGE READY ✓</span>
          <h3>Good start.<br /><em>Let's keep talking.</em></h3>
          <p>This is a prototype. Connect a form service or backend before launch.</p>
          <button type="button" onClick={() => setSent(false)}>SEND ANOTHER <ArrowRight size={15} /></button>
        </div>
      ) : (
        <>
          <label>01 — YOUR NAME<input name="name" value={form.name} onChange={update} placeholder="What should we call you?" required /></label>
          <label>02 — YOUR EMAIL<input name="email" type="email" value={form.email} onChange={update} placeholder="you@somewhere.com" required /></label>
          <label>03 — THE STARTING POINT<textarea name="project" value={form.project} onChange={update} placeholder="A little about what you have in mind..." rows="3" required /></label>
          <button className="submit-btn" type="submit">SEND THE FIRST NOTE <ArrowUpRight size={17} /></button>
        </>
      )}
    </form>
  );
}
