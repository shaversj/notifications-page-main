import Card from "./Card.jsx";
const CardLayout = ({notifications, increaseUnReadCount, decreaseUnReadCount}) => {
    return (
        <div className={"pt-5 space-y-3 "}>
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