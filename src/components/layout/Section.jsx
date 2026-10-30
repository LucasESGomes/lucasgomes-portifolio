const Section = ({ id, className = "", children }) => {
  return (
    <section id={id} className={`relative w-full py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">{children}</div>
    </section>
  );
};

export default Section;
