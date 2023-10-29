import mark from '/src/assets/images/avatar-mark-webber.webp'
import { VscCircleFilled } from "react-icons/vsc";

function App() {


  return (
    <>
        <div className={"bg-black min-h-screen flex items-center justify-center"}>
            <main className={"max-w-screen-sm min-h-[900px]  bg-white font-Plus-Jakarta-Sans px-4 py-6"}>
                <div className={"flex gap-x-2"}>
                    <h1 className={"text-xl font-bold"}>Notifications</h1>
                    <div className={"rounded-lg bg-primary-blue w-[32px] h-[28px] text-neutral-white flex items-center justify-center font-bold"}><span>3</span></div>
                    <button className={"ml-auto"}>
                        <span className={"text-dark-grayish-blue text-sm "}>Mark all as read</span>
                    </button>
                </div>

                {/*Cards Container*/}
                <div className={"pt-6"}>

                    {/*Card*/}
                    <div className={"flex bg-unread-gray p-4 gap-x-[13px] rounded-xl "}>
                        <img className={"w-[40px] h-[40px]"} src={mark} alt={""} />
                        <div className={"text-[14px] text-dark-grayish-blue leading-[1.2rem]"}>
                            <div className={"space-x-2 text-dark-grayish-blue"}>
                                <span className={"font-extrabold text-black"}>Mark Webber</span>
                                <span className={"text-dark-grayish-blue"}>reacted to your recent post</span>
                                <span className={"text-dark-grayish-blue font-semibold"}>My first tournament today!</span>
                                <VscCircleFilled size={"1rem"} style={{display: "inline", color: "hsl(1, 90%, 64%)", verticalAlign: 'text-bottom', marginLeft: "2px"}}/>
                            </div>
                            <span className={"text-grayish-blue"}>1m ago</span>
                        </div>
                    </div>


                </div>


            </main>

        </div>
    </>
  )
}

export default App
