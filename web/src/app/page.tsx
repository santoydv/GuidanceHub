
export default function Home() {

  return (
    <>
      <section id="hero-section" className="h-[85vh] w-full px-32 flex items-center">
        <div className="flex flex-col gap-3">
          <h1 className="text-[#F8D287] text-8xl font-bold capitalize">GuidanceHUB</h1>
          <p className="text-4xl text-white">One Stop Solution.</p>
        </div>
      </section>
      <section className="bg-[#FFFFFF]">
        <div className="flex ">
          <div className="w-[15rem] bg-white flex flex-col gap-5 m-5 items-center">
            <div className="flex w-[10rem] h-[10rem] rounded-xl justify-center items-center  border-2 border-[#3F51B5] text-xl text-center">
              Academic
            </div>
            <div className="flex w-[10rem] h-[10rem] rounded-xl justify-center items-center  border-2 border-[#3F51B5] text-xl text-center">
              UpSkill
            </div>
            <div className="flex w-[10rem] h-[10rem] rounded-xl justify-center items-center  border-2 border-[#3F51B5] text-xl text-center">
              Club Activities
            </div>
            <div className="flex w-[10rem] h-[10rem] rounded-xl justify-center items-center  border-2 border-[#3F51B5] text-xl text-center">
              Alumni Interaction
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="bg-[#3F51B5] h-[10rem] w-full flex justify-center items-center">
              <h1 className="capitalize text-white text-5xl  font-bold ">WECLOME TO GUIDANCEHUB</h1>
            </div>
            <div className="h-[75vh] w-full bg-[#F8D287] grid grid-cols-2">
                <div className="my-10 mx-32 flex justify-center items-center flex-col gap-5">
                  <h2 className="text-[#3F51B5] text-3xl">A One Stop Solution for Fresher Students.</h2>
                  <p className="text-[#3F51B5] text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui minima velit quo nostrum reprehenderit porro, non architecto ipsa maiores excepturi commodi a, illo sit suscipit nobis, exercitationem magni corporis accusantium.</p>
                  <button>Know More</button>
                </div>
                <div></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
