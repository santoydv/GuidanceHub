
const AlumniInteraction = () => {
    return (
        <section className="flex flex-col gap-5">
            <h1 className="text-3xl uppercase font-semibold">Alumni Interaction</h1>
            <div className="grid grid-cols-4 gap-3 justify-center">
                <div className="h-[18rem] w-[20rem] shadow-lg flex justify-center items-center text-2xl font-semibold border-2 border-red-600 hover:bg-red-600 hover:text-white transition-all duration-500 cursor-pointer">
                    Talk Sessions
                </div>
                <div className="h-[18rem] w-[20rem] shadow-lg flex justify-center items-center text-2xl font-semibold border-2 border-red-600 hover:bg-red-600 hover:text-white transition-all duration-500 cursor-pointer">
                    Motivational Sessions
                </div>
                <div className="h-[18rem] w-[20rem] shadow-lg flex justify-center items-center text-2xl font-semibold border-2 border-red-600 hover:bg-red-600 hover:text-white transition-all duration-500 cursor-pointer">
                    Connect With Alumni
                </div>
            </div>
        </section>
    )
}

export default AlumniInteraction