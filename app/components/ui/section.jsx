// Wrapper section dengan spacing vertikal lega (whitespace = kesan mewah).
export default function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 lg:py-32 ${className}`}>
      {children}
    </section>
  );
}
