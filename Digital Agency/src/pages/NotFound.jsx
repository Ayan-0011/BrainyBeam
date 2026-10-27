import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="not-found">
      <span className="eyebrow">404 / WRONG TURN</span>
      <h1>Nothing<br /><em>here. Yet.</em></h1>
      <Link className="text-link" to="/">BACK TO THE START <ArrowUpRight size={15} /></Link>
    </section>
  );
}
