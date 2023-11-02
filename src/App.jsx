import CardLayout from "./CardLayout.jsx";
import {useState} from "react";
import notificationData from './data.json'

function App() {
    const [notifications, setNotifications] = useState(notificationData)
    const [unReadCount, setUnReadCount] = useState(notifications.filter(notification => notification.hasBeenRead === false).length)

    function markAllAsRead(){
        const newNotifications = notifications.map(notification => {
            return {...notification, hasBeenRead: true}
        })
        setNotifications(newNotifications)
        setUnReadCount(0)
    }
    function increaseUnReadCount(){
        setUnReadCount(unReadCount + 1)
    }

    function decreaseUnReadCount(){
        setUnReadCount(unReadCount - 1)
    }


  return (
    <>
        <div className={"bg-black min-h-screen flex items-center justify-center"}>
            <main className={"max-w-screen-sm min-h-[900px]  bg-white font-Plus-Jakarta-Sans px-4 py-[22.5px]"}>
                {/*Header*/}
                <div className={"flex gap-x-2 items-center"}>
                    <h1 className={"text-[20px] font-extrabold text-very-dark-blue"}>Notifications</h1>
                    <div className={"rounded-md bg-primary-blue w-[32px] h-[25px] text-light-grayish-blue-1 flex items-center justify-center font-bold"}><span>{unReadCount}</span></div>
                    <button className={"ml-auto"} onClick={markAllAsRead}>
                        <span className={"text-dark-grayish-blue text-[14.2px] "}>Mark all as read</span>
                    </button>
                </div>

                <CardLayout notifications={notifications} increaseUnReadCount={increaseUnReadCount} decreaseUnReadCount={decreaseUnReadCount} />


            </main>

        </div>
    </>
  )
}

export default App
