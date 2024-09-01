
const UpSkill = () => {
  return (
    <section className="flex flex-col gap-5 px-11 my-5">
      <h1 className="text-3xl uppercase font-semibold">Up-Skilling</h1>
      <div className="flex flex-col items-center gap-10 my-10">
        <h2 className="text-3xl capitalize font-bold text-center gap-10">Begineer Path Guidance</h2>
        <div className="grid grid-cols-4 gap-5 ">
          <div className="w-[22rem] h-[17rem] flex justify-center items-center p-2 rounded-md shadow-[0px_0px_10px_1px_#ccc] overflow-hidden">
            <img src="/upskilling/5.jpg" alt="" className="rounded-md transition-all duration-300 cursor-pointer  hover:scale-105" />
          </div>
          <div className="w-[22rem] h-[17rem] flex justify-center items-center p-2 rounded-md shadow-[0px_0px_10px_1px_#ccc] overflow-hidden">
            <img src="/upskilling/6.jpg" alt="" className="rounded-md transition-all duration-300 cursor-pointer  hover:scale-105" />
          </div>
          <div className="w-[22rem] h-[17rem] flex justify-center items-center p-2 rounded-md shadow-[0px_0px_10px_1px_#ccc] overflow-hidden">
            <img src="/upskilling/7.jpg" alt="" className="rounded-md transition-all duration-300 cursor-pointer  hover:scale-105" />
          </div>
          <div className="w-[22rem] h-[17rem] flex justify-center items-center p-2 rounded-md shadow-[0px_0px_10px_1px_#ccc] overflow-hidden">
            <img src="/upskilling/8.jpg" alt="" className="rounded-md transition-all duration-300 cursor-pointer  hover:scale-105" />
          </div>
        </div>

        <div className="flex justify-center items-center hover:scale-105 duration-300 transition-all bg-[#3F51B5] w-[15rem] h-[3rem] text-white rounded-md font-semibold darr">
          <h3 className="flex justify-center items-center h-full ">View More</h3>
        </div>
        <div className="flex justify-center items-center hover:scale-105 duration-300 transition-all bg-[orange] w-[30rem] h-[5rem] text-white rounded-md font-semibold ">
          <h3 className="flex justify-center gap-10 items-center h-full text-2xl "><p>Explore Career Options</p><span className="text-2xl">&rArr;</span></h3>
        </div>
      </div>

    </section>
  )
}

export default UpSkill