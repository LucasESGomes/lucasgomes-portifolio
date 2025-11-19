const Photo = ({ height = "8" }) => {
  const Dimension = {
    8: "h-8",
    16: "h-16",
    24: "h-24",
    32: "h-32",
    64: "h-66",
  };

  return (
    <img
      className={`${
        Dimension[height] || "h-8"
      } aspect-square rounded-full object-cover object-center overflow-hidden border-[#000000] border-1`}
      src="../../public/img/Gomes.webp"
      alt="Minha foto"
    />
  );
};

export default Photo;
