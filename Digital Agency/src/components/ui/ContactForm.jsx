import { useId, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { brand } from '../../config/brand.js';
import { services } from '../../data/services.js';
import { sendInquiry, submitMode, validate } from '../../utils/inquiry.js';

const TIMELINES = ['As soon as possible', 'Within 1\u20133 months', 'In 3\u20136 months', 'Flexible / still exploring'];

const RULES = {
  compact: {
    name: { required: true, label: 'your name' },
    email: { required: true, email: true, label: 'your email' },
    message: { required: true, min: 10, label: 'a few words about the project' },
  },
  full: {
    name: { required: true, label: 'your name' },
    email: { required: true, email: true, label: 'your email' },
    service: { required: true, label: 'the service you are interested in' },
    timeline: { required: true, label: 'a rough timeline' },
    message: { required: true, min: 20, label: 'a few words about the project' },
  },
};

const EMPTY = { name: '', email: '', company: '', service: '', budget: '', timeline: '', message: '', website: '' };

/**
 * variant "compact": the original three-field form used inside ContactSection (case studies, legal).
 * variant "full":    the Contact page form with company, service, budget and timeline.
 * Validation is shared. Submission goes through utils/inquiry.js (see there for what "sent" means).
 */
export default function ContactForm({ variant = 'compact' }) {
  const full = variant === 'full';
  const rules = RULES[variant];
  const uid = useId();
  const formRef = useRef(null);
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | opened | error
  const [failure, setFailure] = useState('');

  const update = event => {
    const { name, value } = event.target;
    setValues(current => ({ ...current, [name]: value }));
    if (errors[name]) setErrors(current => ({ ...current, [name]: undefined }));
  };

  const onSubmit = async event => {
    event.preventDefault();
    if (status === 'sending') return;

    const found = validate(values, rules);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      formRef.current?.querySelector(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    if (values.website) { setStatus('sent'); return; } // hidden honeypot field: bots fill it, people never see it

    setStatus('sending');
    setFailure('');
    try {
      const { mode } = await sendInquiry(values);
      setStatus(mode === 'endpoint' ? 'sent' : 'opened');
    } catch (error) {
      setFailure(error.message);
      setStatus('error');
    }
  };

  const reset = () => { setValues(EMPTY); setErrors({}); setStatus('idle'); setFailure(''); };

  const field = (name, label, control) => (
    <div className={`ct-field ${errors[name] ? 'has-error' : ''}`}>
      <label htmlFor={`${uid}-${name}`}>{label}</label>
      {control}
      {errors[name] && <span className="ct-error" id={`${uid}-${name}-err`} role="alert">{errors[name]}</span>}
    </div>
  );
  const aria = name => ({
    id: `${uid}-${name}`,
    name,
    value: values[name],
    onChange: update,
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `${uid}-${name}-err` : undefined,
  });

  // ---------- result states ----------
  if (status === 'sent' || status === 'opened') {
    return (
      <div className={full ? 'ct-form ct-result' : 'contact-form'} role="status">
        <div className="form-success">
          <span>{status === 'sent' ? 'MESSAGE SENT \u2713' : 'ALMOST THERE'}</span>
          <h3>{status === 'sent' ? <>Thank you.<br /><em>We&rsquo;ll be in touch.</em></> : <>One last step.<br /><em>Press send.</em></>}</h3>
          <p>
            {status === 'sent'
              ? 'Your message is on its way to the studio. We read every note and reply with next steps.'
              : <>Your email app should have opened with your message ready. It hasn&rsquo;t been sent until you press send there. Nothing opened? Write to us at <a href={`mailto:${brand.email}`}>{brand.email}</a>.</>}
          </p>
          <button type="button" onClick={reset}>SEND ANOTHER <ArrowRight size={15} /></button>
        </div>
      </div>
    );
  }

  const sending = status === 'sending';
  const submitLabel = sending ? 'SENDING\u2026' : submitMode === 'mailto' ? 'OPEN EMAIL WITH MY MESSAGE' : 'SEND THE FIRST NOTE';

  // ---------- compact (original markup and classes) ----------
  if (!full) {
    return (
      <form className="contact-form" onSubmit={onSubmit} noValidate ref={formRef}>
        <label>01 — YOUR NAME
          <input {...aria('name')} placeholder="What should we call you?" autoComplete="name" />
          {errors.name && <span className="ct-error" role="alert">{errors.name}</span>}
        </label>
        <label>02 — YOUR EMAIL
          <input {...aria('email')} type="email" placeholder="you@somewhere.com" autoComplete="email" />
          {errors.email && <span className="ct-error" role="alert">{errors.email}</span>}
        </label>
        <label>03 — THE STARTING POINT
          <textarea {...aria('message')} placeholder="A little about what you have in mind..." rows="3" maxLength={1500} />
          {errors.message && <span className="ct-error" role="alert">{errors.message}</span>}
        </label>
        {status === 'error' && <p className="ct-alert" role="alert">{failure} Or write to <a href={`mailto:${brand.email}`}>{brand.email}</a>.</p>}
        <button className="submit-btn" type="submit" disabled={sending}>{sending ? 'SENDING\u2026' : 'SEND THE FIRST NOTE'} <ArrowUpRight size={17} /></button>
      </form>
    );
  }

  // ---------- full (Contact page) ----------
  return (
    <form className="ct-form" onSubmit={onSubmit} noValidate ref={formRef} aria-busy={sending}>
      <div className="ct-row">
        {field('name', '01 — Full name', <input {...aria('name')} placeholder="What should we call you?" autoComplete="name" />)}
        {field('email', '02 — Email address', <input {...aria('email')} type="email" placeholder="you@somewhere.com" autoComplete="email" />)}
      </div>
      <div className="ct-row">
        {field('company', '03 — Company (optional)', <input {...aria('company')} placeholder="Where do you work?" autoComplete="organization" />)}
        {field('service', '04 — Service interested in', (
          <select {...aria('service')}>
            <option value="">Choose one</option>
            {services.map(service => <option key={service.n} value={service.title}>{service.title}</option>)}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        ))}
      </div>
      <div className="ct-row">
        {field('budget', '05 — Project budget (optional)', <input {...aria('budget')} placeholder="A range, or “still figuring it out”" />)}
        {field('timeline', '06 — Project timeline', (
          <select {...aria('timeline')}>
            <option value="">Choose one</option>
            {TIMELINES.map(option => <option key={option} value={option}>{option}</option>)}
          </select>
        ))}
      </div>
      {field('message', '07 — Tell us about the project', <textarea {...aria('message')} rows="5" maxLength={1500} placeholder="Goals, audience, links, anything that helps us understand what you have in mind…" />)}

      {/* honeypot: hidden from people, tempting for bots */}
      <div className="ct-hp" aria-hidden="true">
        <label>Website<input name="website" value={values.website} onChange={update} tabIndex={-1} autoComplete="off" /></label>
      </div>

      {status === 'error' && <p className="ct-alert" role="alert">{failure} Or write to <a href={`mailto:${brand.email}`}>{brand.email}</a>.</p>}

      <div className="ct-submit">
        <button className="ct-btn" type="submit" disabled={sending}>
          <span className="ct-btn-label">{submitLabel}</span>
          <span className="ct-btn-icon"><ArrowUpRight size={20} /></span>
        </button>
        <p className="ct-note">
          {submitMode === 'mailto'
            ? 'This opens your email app with the message ready to send. Nothing is sent until you press send there.'
            : 'We read every note and reply with next steps.'}
        </p>
      </div>
    </form>
  );
}
