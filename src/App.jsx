import { useState } from "react";
import notificationData from "./data.json";
import Card from "./Card.jsx";

function App() {
  const [notifications, setNotifications] = useState(notificationData);
  const [unReadCount, setUnReadCount] = useState(notifications.filter((notification) => notification.hasBeenRead === false).length);

  function markAllAsRead() {
    const newNotifications = notifications.map((notification) => {
      return { ...notification, hasBeenRead: true };
    });
    setNotifications(newNotifications);
    setUnReadCount(0);
  }

  function increaseUnReadCount() {
    setUnReadCount(unReadCount + 1);
  }

  function decreaseUnReadCount() {
    setUnReadCount(unReadCount - 1);
  }

  return (
    <>
      <div className={"bg-black min-h-screen flex items-center justify-center"}>
        <div className={"lg:w-full lg:max-w-screen-lg lg:min-h-[990px] lg:bg-lg-background-color lg:flex lg:items-center"}>
          <main className={"max-w-screen-sm lg:mx-auto lg:max-w-[732px] bg-white font-Plus-Jakarta-Sans px-4 py-[22.5px] lg:py-0 lg:px-8 lg:rounded-2xl shadow-sm"}>
            <div className={"flex gap-x-2 items-center lg:pt-7"}>
              <h1 className={"text-[20px] lg:text-[24px] lg:font-bold font-extrabold text-very-dark-blue"}>Notifications</h1>
              <div className={"rounded-md bg-primary-blue w-[32px] h-[25px] lg:ml-1 text-light-grayish-blue-1 flex items-center justify-center font-bold"}>
                <span>{unReadCount}</span>
              </div>
              <button className={"ml-auto"} onClick={markAllAsRead}>
                <span className={"text-dark-grayish-blue text-[14.2px] lg:text-[16.2px] hover:text-primary-blue"}>Mark all as read</span>
              </button>
            </div>

            <div className={"pt-[20px] lg:pt-[29px] space-y-[10px]"}>
              {notifications &&
                notifications.map((notification) => <Card key={notification.id} notification={notification} increaseUnReadCount={increaseUnReadCount} decreaseUnReadCount={decreaseUnReadCount} />)}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
