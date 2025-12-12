const techItem = ({img, children}) => {
    return (
      <div
        className="flex justify-center items-center px-3 py-1.5 gap-2
         bg-zinc-950 font-semibold"
      >
        <img src={img} className="h-auto w-5"/>
        <span className="text-white text-[1.1em]">{children}</span>
      </div>
    );
}

export default techItem;