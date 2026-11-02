/**
 * Paragraph whose words can be revealed one by one on scroll (the animation lives in the page that
 * uses it, selecting `.pg-word`). Wrap a phrase in *asterisks* to set it in the serif accent.
 * Screen readers get the plain sentence; the split words are hidden from them.
 */
export default function Words({ children, as: Tag = 'p', className = '' }) {
  const text = String(children);
  const words = [];

  text.split(/(\*[^*]+\*)/).filter(Boolean).forEach(part => {
    const em = part.startsWith('*') && part.endsWith('*') && part.length > 2;
    (em ? part.slice(1, -1) : part).split(/\s+/).filter(Boolean).forEach(word => words.push({ word, em }));
  });

  return (
    <Tag className={`pg-words ${className}`.trim()}>
      <span className="pg-sr">{text.replace(/\*/g, '')}</span>
      <span aria-hidden="true">
        {words.map(({ word, em }, i) => (
          <span className={`pg-word ${em ? 'pg-word--em' : ''}`.trim()} key={i}>{word}{' '}</span>
        ))}
      </span>
    </Tag>
  );
}
