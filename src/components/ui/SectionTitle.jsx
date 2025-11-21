const NumberSection = ({number, title}) => {
    return (
      <div className=" flex justify-start gap-4 items-end">
        <h1 className="text-8xl text-gray-300">
          {number}
        </h1>
        <p className="mb-1 font-light text-gray-900 text-6xl">{title}</p>
      </div>
    );
}

export default NumberSection;