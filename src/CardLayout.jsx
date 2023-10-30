import data from './data.json'
import Card from "./Card.jsx";
const CardLayout = () => {
    return (
        <div className={"pt-5 space-y-3"}>
            {data && data.map((item) =>
                <Card
                    key={item.id}
                    avatar={item.avatar}
                    name={item.name}
                    notification={item.notification}
                    message_location={item.message_location}
                    timestamp={item.timestamp} />)}
        </div>
    );
};

export default CardLayout;