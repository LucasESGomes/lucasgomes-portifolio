const SkillCard = ({colorRight = "bg-white", colorLeft = "bg-gray-900", imgLeft, imgRight, titleLeft, TitleRight, childrenLeft, childrenRight}) => {
    return(
        <div className="flex justify-center  w-[80%] h-150 border-1 border-gray-900">
            <div className={`${colorRight} h-full w-[50%]`}>
                <img src={imgLeft} />
                {titleLeft}
                {childrenLeft}
            </div>
            <div className={`${colorLeft} h-full w-[50%]`}>
                <img src={`${imgRight}`} />
                {TitleRight}
                {childrenRight}
            </div>
        </div>
    );
}

export default SkillCard;