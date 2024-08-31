import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <>
      <section id="hero-section" className="h-[85vh] w-full px-32 flex items-center">
        <div className="flex flex-col gap-3">
          <h1 className="text-[#F8D287] text-8xl font-bold capitalize">GuidanceHUB</h1>
          <p className="text-4xl text-white max-w-[40rem] text-wrap">One Stop Solution for Success in Academics, Skills and Beyond.</p>
        </div>
      </section>
      <section className="bg-[#FFFFFF]">
        <div className="flex mb-10" id="#about-us">
          {/* <div className="w-[15rem] bg-white flex flex-col gap-5 m-5 items-center">
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
          </div> */}
          <div className="flex flex-col w-full overflow-hidden" >
            <div className="bg-[#3F51B5] h-[10rem] w-full flex justify-center items-center">
              <h1 className="capitalize text-white text-5xl  font-bold ">WECLOME TO GUIDANCEHUB</h1>
            </div>
            <div className="h-[75vh] w-full bg-[#F8D287] grid grid-cols-2">
              <div className="my-10 mx-32 flex justify-center  flex-col gap-5">
                <h2 className="text-[#3F51B5] text-3xl">A One Stop Solution for Fresher Students.</h2>
                <p className="text-[#3F51B5] text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui minima velit quo nostrum reprehenderit porro, non architecto ipsa maiores excepturi commodi a, illo sit suscipit nobis, exercitationem magni corporis accusantium.</p>
                <div>
                  <button className="bg-[#3F51B5] px-3 py-2 text-white ">Know More</button>
                </div>
              </div>
              <div>
                <Image
                  src="/boyphoto.webp"
                  alt=""
                  width={700}
                  height={700}
                />

              </div>
            </div>
          </div>
        </div>


        <div className="bg-white pb-10">
          <div className="py-5">
            <h2 className="text-[#3F51B5] text-5xl font-bold px-12">Our Features</h2>
          </div>
          <div className="grid grid-cols-4 px-10 gap-5">
            <div className="flex flex-col gap-5">
              <div className="w-[22rem] h-[17rem] relative overflow-hidden group">
                <img src="/boyphoto.webp" className="w-full h-full object-cover" alt="Boy Photo" />
                <div className="absolute px-2 text-[#3F51B5] top-[90%] bg-white h-full w-full transition-all duration-500 ease-in-out group-hover:top-0 flex flex-col gap-5">
                  <h1 className="text-2xl  font-bold">Academics</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit fugit, quas deleniti provident unde repudiandae inventore dolorem? Numquam labore quae, culpa, assumenda velit rerum sapiente praesentium adipisci repellat itaque voluptates.</p>
                </div>
              </div>
              <button className="py-2 px-3 border-2 border-[#3F51B5] text-[#3F51B5] font-bold hover:bg-[#3F51B5] transition-all duration-200 hover:text-white text-xl outline-none">View more</button>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-[22rem] h-[17rem] relative overflow-hidden group">
                <img src="/boyphoto.webp" className="w-full h-full object-cover" alt="Boy Photo" />
                <div className="absolute text-[#3F51B5] px-2 top-[90%] bg-white h-full w-full transition-all duration-500 ease-in-out group-hover:top-0 flex flex-col gap-5">
                  <h1 className="text-2xl  font-bold">UpSkill</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit fugit, quas deleniti provident unde repudiandae inventore dolorem? Numquam labore quae, culpa, assumenda velit rerum sapiente praesentium adipisci repellat itaque voluptates.</p>
                </div>
              </div>
              <button className="py-2 px-3 border-2 border-[#3F51B5] text-[#3F51B5] font-bold hover:bg-[#3F51B5] transition-all duration-200 hover:text-white text-xl outline-none">View more</button>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-[22rem] h-[17rem] relative overflow-hidden group">
                <img src="/boyphoto.webp" className="w-full h-full object-cover" alt="Boy Photo" />
                <div className="absolute text-[#3F51B5] px-2 top-[90%] bg-white h-full w-full transition-all duration-500 ease-in-out group-hover:top-0 flex flex-col gap-5">
                  <h1 className="text-2xl  font-bold">Club Activities</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit fugit, quas deleniti provident unde repudiandae inventore dolorem? Numquam labore quae, culpa, assumenda velit rerum sapiente praesentium adipisci repellat itaque voluptates.</p>
                </div>
              </div>
              <button className="py-2 px-3 border-2 border-[#3F51B5] text-[#3F51B5] font-bold hover:bg-[#3F51B5] transition-all duration-200 hover:text-white text-xl outline-none">View more</button>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-[22rem] h-[17rem] relative overflow-hidden group">
                <img src="/boyphoto.webp" className="w-full h-full object-cover" alt="Boy Photo" />
                <div className="absolute px-2 text-[#3F51B5] top-[90%] bg-white h-full w-full transition-all duration-500 ease-in-out group-hover:top-0 flex flex-col gap-5">
                  <h1 className="text-2xl  font-bold">Alumni Intraction</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit fugit, quas deleniti provident unde repudiandae inventore dolorem? Numquam labore quae, culpa, assumenda velit rerum sapiente praesentium adipisci repellat itaque voluptates.</p>
                </div>
              </div>
              <button className="py-2 px-3 border-2 border-[#3F51B5] text-[#3F51B5] font-bold hover:bg-[#3F51B5] transition-all duration-200 hover:text-white text-xl outline-none">View more</button>
            </div>

          </div>
        </div>
        <footer className="bg-[#3F51B5] text-white grid grid-cols-3 py-14 justify-items-start">
          <div className="h-full flex px-10 items-center justify-center text-3xl font-bold uppercase tracking-wider text-white">
            GuidanceHUB
          </div>
          <div>
            <ul>
              <Link href="/"><li>Home</li></Link>
              <Link href="/about"><li>About us</li></Link>
              <Link href="/contact"><li>Contact us</li></Link>
              <Link href="/privacy-policy"><li>Privacy Policy</li></Link>
              <Link href="/disclaimer"><li>Disclaimer</li></Link>
            </ul>
          </div>
          <div>
            <ul>
              <Link href="/"><li>Home</li></Link>
              <Link href="/about"><li>About us</li></Link>
              <Link href="/contact"><li>Contact us</li></Link>
              <Link href="/privacy-policy"><li>Privacy Policy</li></Link>
              <Link href="/disclaimer"><li>Disclaimer</li></Link>
            </ul>
          </div>
        </footer>

      </section>
    </>
  );
}
