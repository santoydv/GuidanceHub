import Link from "next/link";

export default function Home() {

  return (
    <>
      <section id="hero-section" className="h-[100vh] w-full px-32 flex items-center  ">
        <div className="flex flex-col justify-center gap-3 w-full">
          <h1 className="text-[#F8D287] block text-8xl text-center font-bold capitalize text-sh w-full">GuidanceHUB</h1>
          <p className="text-4xl text-white block  text-center text-wrap">One Stop Solution for Success in Academics, Skills and Beyond.</p>
        </div>
      </section>


      <section className="bg-[#FFFFFF]">
        <div className="flex mb-10" id="#about-us">

          <div className="flex flex-col w-full overflow-hidden" >
            <div className="bg-[#3F51B5] h-[10rem] w-full flex justify-center items-center">
              <h1 className="capitalize text-white text-5xl  font-bold ">WECLOME TO GUIDANCEHUB</h1>
            </div>
            <div className="h-[75vh] w-full bg-[#F8D287] grid grid-cols-2">
              <div className="mx-32 flex justify-center  flex-col gap-5">
                <h2 className="text-[#3F51B5] text-3xl">A One Stop Solution for Fresher Students.</h2>
                <p className="text-[#3F51B5] text-lg">Welcome to Guidance Hub, your go-to platform for navigating student life at NIT Rourkela. From academics to skills development, club activities to alumni connections, we’re here to guide your journey with the power of AI and full-stack development. Let’s grow and succeed together!</p>
                <div>
                  <button className="bg-[#3F51B5] px-3 py-2 text-white ">Know More</button>
                </div>
              </div>
              <div className="h-full w-full">
                <img src="/about-sec.jpg" className="object-cover w-full h-full" alt="" />

              </div>
            </div>
          </div>
        </div>


        <div className="bg-white pb-10">
          <div className="py-5">
            <h2 className="text-[#3F51B5] text-5xl font-bold px-9">Our Features</h2>
          </div>
          <div className="grid grid-cols-4 px-10 gap-5">
            <div className="flex flex-col gap-5">
              <div className="w-[22rem] h-[17rem] relative overflow-hidden group">
                <img src="/academics.jpg" className="w-full h-full object-cover" alt="Boy Photo" />
                <div className="absolute px-2 text-[#3F51B5] top-[85%] bg-white h-full w-full transition-all duration-500 ease-in-out group-hover:top-0 flex flex-col gap-5">
                  <h1 className="text-2xl  font-bold">Academics</h1>
                  <p>Unlock access to curated study materials, essential books, and online resources. We help you navigate the myths and truths about CGPA, empowering you to excel in your academic pursuits.
                  </p>
                </div>
              </div>
              <Link href="/academics" className="min-w-full">
                <button className="w-full py-2 px-3 border-2 border-[#3F51B5] text-[#3F51B5] font-bold hover:bg-[#3F51B5] transition-all duration-200 hover:text-white text-xl outline-none">
                  View more
                </button>
              </Link>

            </div>
            <div className="flex flex-col gap-5">
              <div className="w-[22rem] h-[17rem] relative overflow-hidden group">
                <img src="/up-skilling.jpg" className="w-full h-full object-cover" alt="Boy Photo" />
                <div className="absolute text-[#3F51B5] px-2 top-[85%] bg-white h-full w-full transition-all duration-500 ease-in-out group-hover:top-0 flex flex-col gap-5">
                  <h1 className="text-2xl  font-bold">Up-Skilling</h1>
                  <p>Stay ahead with our comprehensive resources for programming, web development, AI/ML, and more. Whether you are a beginner or looking for advanced opportunities, we help you build the skills that matter.
                  </p>
                </div>
              </div>
              <Link href="/upskill" className="min-w-full">
                <button className="w-full py-2 px-3 border-2 border-[#3F51B5] text-[#3F51B5] font-bold hover:bg-[#3F51B5] transition-all duration-200 hover:text-white text-xl outline-none">
                  View more
                </button>
              </Link>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-[22rem] h-[17rem] relative overflow-hidden group">
                <img src="/club-guidance.jpg  " className="w-full h-full object-cover" alt="Boy Photo" />
                <div className="absolute text-[#3F51B5] px-2 top-[85%] bg-white h-full w-full transition-all duration-500 ease-in-out group-hover:top-0 flex flex-col gap-5">
                  <h1 className="text-2xl  font-bold">Club Guidance</h1>
                  <p>Club’s Guidance
                  Discover the dynamic world of student clubs. Our AI-driven insights rank club activities, helping you choose where to get involved, learn, and grow.</p>
                </div>
              </div>
              <Link href="/club-activities" className="min-w-full">
                <button className="w-full py-2 px-3 border-2 border-[#3F51B5] text-[#3F51B5] font-bold hover:bg-[#3F51B5] transition-all duration-200 hover:text-white text-xl outline-none">
                  View more
                </button>
              </Link>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-[22rem] h-[17rem] relative overflow-hidden group">
                <img src="/mentorship.jpg" className="w-full h-full object-cover" alt="Boy Photo" />
                <div className="absolute px-2 text-[#3F51B5] top-[85%] bg-white h-full w-full transition-all duration-500 ease-in-out group-hover:top-0 flex flex-col gap-5">
                  <h1 className="text-2xl  font-bold">Mentorship</h1>
                  <p>Connect with experienced alumni and motivational speakers. Access career insights, watch past sessions, and find guidance from those who’ve been in your shoes.</p>
                </div>
              </div>
              <Link href="/alumni-interaction" className="min-w-full">
                <button className="w-full py-2 px-3 border-2 border-[#3F51B5] text-[#3F51B5] font-bold hover:bg-[#3F51B5] transition-all duration-200 hover:text-white text-xl outline-none">
                  View more
                </button>
              </Link>
            </div>

          </div>
        </div>
        


      </section>
    </>
  );
}
