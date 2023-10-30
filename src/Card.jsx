const Card = ({avatar, name, notification, message_location, timestamp}) => {
    return (
        <div className={"flex bg-unread-gray p-4 gap-x-[13px] rounded-xl "}>
            <img className={"w-[40px] h-[40px]"} src={avatar} alt={""} />
            <div className={"text-[14px] text-dark-grayish-blue leading-[1.2rem]"}>
                <div className={"space-x-2 text-dark-grayish-blue"}>
                    <span className={"font-bold text-black"}>{name}</span>
                    <span className={"text-dark-grayish-blue "}>{notification}</span>
                    <span className={"text-dark-grayish-blue font-semibold"}>{message_location}</span>
                    <div className={"w-[8px] h-[8px] bg-primary-red rounded-full inline-flex align-middle mb-1"}></div>
                </div>
                <span className={"text-grayish-blue"}>{timestamp}</span>
            </div>
        </div>
    );
};

export default Card;