const Card = ({notification, decreaseUnReadCount, increaseUnReadCount}) => {
    function toggleUnRead(){
        notification.hasBeenRead = false
        increaseUnReadCount()
    }

    function toggleRead(){
        notification.hasBeenRead = true
        decreaseUnReadCount()
    }

    return (
        <>
            {notification.hasBeenRead ? (
                <button className={"flex bg-neutral-white p-4 gap-x-[13px] rounded-md w-full text-left lg:gap-x-[19px] lg:px-5 lg:py-4"} onClick={toggleUnRead}>
                    <img className={"w-[40px] h-[40px] lg:w-[45px] lg:h-[45px]"} src={notification.avatar} alt={""} />
                    <div className={"text-[14px] lg:text-[16px] text-dark-grayish-blue leading-[1.2rem] lg:leading-[1.5rem]"}>
                        <div className={"space-x-2 text-dark-grayish-blue"}>
                            <span className={"font-bold text-black empty:hidden hover:text-primary-blue"}>{notification.name}</span>
                            <span className={"text-dark-grayish-blue empty:hidden"}>{notification.message}</span>
                            <span className={"text-dark-grayish-blue font-semibold empty:hidden hover:text-primary-blue lg:font-bold"}>{notification.message_location}</span>
                        </div>
                        <span className={"text-grayish-blue"}>{notification.timestamp}</span>
                        <div className={"empty:hidden border rounded-md px-5 py-3 mt-2 lg:py-[20px] leading-5 lg:text-[16.3px]"}>
                            {notification.reply}
                        </div>
                    </div>
                    <img className={"w-[39px] h-[39px] lg:w-[45px] lg:h-[47px] ml-auto [&:not([src])]:hidden"} src={notification.commented_picture} alt={""} />
                </button>
            ):
                (
                    <button className={"flex bg-unread-gray p-4 gap-x-[13px] rounded-md w-full text-left lg:gap-x-[19px] lg:px-5 lg:py-4"} onClick={toggleRead}>
                        <img className={"w-[40px] h-[40px] lg:w-[45px] lg:h-[45px] "} src={notification.avatar} alt={""} />
                        <div className={"text-[14px] lg:text-[16.15px] text-dark-grayish-blue leading-[1.2rem] lg:leading-[1.5rem]"}>
                            <div className={"space-x-2 text-dark-grayish-blue"}>
                                <span className={"font-bold text-black empty:hidden hover:text-primary-blue"}>{notification.name}</span>
                                <span className={"text-dark-grayish-blue empty:hidden"}>{notification.message}</span>
                                <span className={"text-dark-grayish-blue font-semibold empty:hidden hover:text-primary-blue lg:font-bold"}>{notification.message_location}</span>
                                <div className={"w-[8px] h-[8px] bg-primary-red rounded-full inline-flex align-middle mb-1"}></div>
                            </div>
                            <span className={"text-grayish-blue"}>{notification.timestamp}</span>
                        </div>
                        <img className={"w-[40px] h-[40px] lg:w-[45px] lg:h-[47px] ml-auto [&:not([src])]:hidden"} src={notification.commented_picture} alt={""} />
                    </button>
            )}
        </>


    );
};

export default Card;