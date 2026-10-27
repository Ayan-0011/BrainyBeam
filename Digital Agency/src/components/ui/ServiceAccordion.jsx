import { useState } from 'react';
import { Plus, X, ArrowUpRight } from 'lucide-react';
import { services } from '../../data/services.js';

export default function ServiceAccordion({ full = false }) {
  const [active, setActive] = useState(full ? 0 : -1);

  return (
    <div className="service-list">
      {services.map((s, i) => (
        <div className={`service-row ${active === i ? 'active' : ''}`} key={s.n}>
          <button onClick={() => setActive(active === i ? -1 : i)} aria-expanded={active === i}>
            <span className="service-no">{s.n}</span>
            <span className="service-title">{s.title}</span>
            <span className="service-plus">{active === i ? <X size={17} /> : <Plus size={17} />}</span>
          </button>
          <div className="service-detail" style={{ gridTemplateRows: active === i ? '1fr' : '0fr' }}>
            <div className="service-detail-inner">
              <p>{s.desc}</p>
              <div className="service-tags">
                {(full ? s.items : s.items.slice(0, 5)).map(item => <span key={item}>{item}<ArrowUpRight size={12} /></span>)}
              </div>
              <span className="service-count">{s.count}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
