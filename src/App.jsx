import mark from '/src/assets/images/avatar-mark-webber.webp'

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

                {/*Cards Container*/}
                <div className={"pt-5"}>

                    {/*Card*/}
                    <div className={"flex bg-unread-gray p-4 gap-x-[13px] rounded-xl "}>
                        <img className={"w-[40px] h-[40px]"} src={mark} alt={""} />
                        <div className={"text-[14px] text-dark-grayish-blue leading-[1.2rem]"}>
                            <div className={"space-x-2 text-dark-grayish-blue"}>
                                <span className={"font-bold text-black"}>Mark Webber</span>
                                <span className={"text-dark-grayish-blue "}>reacted to your recent post</span>
                                <span className={"text-dark-grayish-blue font-semibold"}>My first tournament today!</span>
                                <div className={"w-[8px] h-[8px] bg-primary-red rounded-full inline-flex align-middle mb-1"}></div>
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
