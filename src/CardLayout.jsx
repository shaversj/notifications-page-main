import Card from "./Card.jsx";
const CardLayout = ({notifications, increaseUnReadCount, decreaseUnReadCount}) => {
    return (
        <div className={"pt-[20px] lg:pt-[32px] space-y-2 "}>
            {notifications && notifications.map((notification) =>
                <Card
                    key={notification.id}
                    notification={notification}
                    increaseUnReadCount={increaseUnReadCount}
                    decreaseUnReadCount={decreaseUnReadCount}/>)}
        </div>
    );
};

export default CardLayout;