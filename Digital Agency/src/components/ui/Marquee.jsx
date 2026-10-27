export default function Marquee({ children, dark = false }) {
  return (
    <div className={`marquee ${dark ? 'marquee-dark' : ''}`} aria-hidden="true">
      <div className="marquee-track">
        {Array.from({ length: 4 }, (_, i) => <span key={i}>{children} <b>✳</b></span>)}
      </div>
    </div>
  );
}
