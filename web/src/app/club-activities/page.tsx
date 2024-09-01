import Link from "next/link"

const ClubActivities = () => {
  return (
    <section className="flex flex-col gap-5 px-11 my-5">
      <h1 className="text-3xl uppercase font-semibold">Club Mentorship</h1>
      <div className="flex flex-col items-center gap-10 my-10">
        <div className="grid grid-cols-4 gap-5 ">
          <div className="w-[22rem] h-[17rem] flex justify-center items-center p-2 rounded-md shadow-[0px_0px_10px_1px_#ccc] overflow-hidden">
            <Link href="/club-activities/explore-clubs">
              <img src="/club-mentorship/13.jpg" alt="" className="rounded-md transition-all duration-300 cursor-pointer  hover:scale-105" />
            </Link>
          </div>
          <div className="w-[22rem] h-[17rem] flex justify-center items-center p-2 rounded-md shadow-[0px_0px_10px_1px_#ccc] overflow-hidden">
            <img src="/club-mentorship/14.jpg" alt="" className="rounded-md transition-all duration-300 cursor-pointer  hover:scale-105" />
          </div>
        </div>

      </div>

    </section>
  )
}

export default ClubActivities