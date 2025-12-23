import SectionTitle from "../ui/SectionTitle.jsx";

const Section = ({ id, number, title, children }) => {
  return (
    <section id={id} className="w-[75%] mx-auto">
        <SectionTitle number={number} title={title} />
      <div className="w-full flex flex-col items-start text-left">
        <div className="w-full">{children}</div>
      </div>
    </section>
  );
};

export default Section;