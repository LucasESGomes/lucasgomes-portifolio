import SectionTitle from "../ui/SectionTitle.jsx";

const Section = ({ number, title, children }) => {
  return (
    <section className="w-[75%] mt-30 mx-auto">
      <div className="w-full flex flex-col items-start text-left">
        <SectionTitle number={number} title={title} />
        <div className="w-full">{children}</div>
      </div>
    </section>
  );
};

export default Section;