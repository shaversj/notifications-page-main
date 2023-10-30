import mark from '/src/assets/images/avatar-mark-webber.webp'
import CardLayout from "./CardLayout.jsx";

function App() {


  return (
    <>
        <div className={"bg-black min-h-screen flex items-center justify-center"}>
            <main className={"max-w-screen-sm min-h-[900px]  bg-white font-Plus-Jakarta-Sans px-4 py-[22.5px]"}>
                {/*Header*/}
                <div className={"flex gap-x-2 items-center"}>
                    <h1 className={"text-[20px] font-extrabold text-very-dark-blue"}>Notifications</h1>
                    <div className={"rounded-md bg-primary-blue w-[32px] h-[25px] text-light-grayish-blue-1 flex items-center justify-center font-bold"}><span>3</span></div>
                    <button className={"ml-auto"}>
                        <span className={"text-dark-grayish-blue text-[14.2px] "}>Mark all as read</span>
                    </button>
                </div>


                <CardLayout />


            </main>

        </div>
    </>
  )
}

export default App
