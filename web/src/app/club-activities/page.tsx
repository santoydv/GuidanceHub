
const ClubActivities = () => {
  return (
    <section className="flex flex-col gap-5 px-11 my-5">
      <h1 className="text-3xl uppercase font-semibold">Club's Mentorship</h1>
      <div className="flex flex-col items-center gap-10 my-10">
        <div className="grid grid-cols-4 gap-5">
          <div className="w-[22rem] h-[17rem] flex justify-center items-center p-2 rounded-md shadow-[0px_0px_10px_1px_#ccc] overflow-hidden">
            <img src="/upskilling/5.jpg" alt="" className="rounded-md hover:scale-105 overflow-hidden transition-all duration-300 cursor-pointer" />
          </div>
          <div className="w-[22rem] h-[17rem] flex justify-center items-center p-2 rounded-md shadow-[0px_0px_10px_1px_#ccc] overflow-hidden">
            <img src="/upskilling/6.jpg" alt="" className="rounded-md hover:scale-105 overflow-hidden transition-all duration-300 cursor-pointer" />
          </div>
          
        </div>
      </div>

    </section>
  )
}

export default ClubActivities