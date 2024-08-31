import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="px-40">
      <div className="flex items-center gap-5">
        <Image src="/Academics-Badge.png" alt="" width={400} height={100} />
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold uppercase tracking-wider">Academic</h1>
          <p className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi soluta cum, excepturi numquam molestias facilis eaque corrupti earum odit, deserunt libero voluptatibus cupiditate doloremque quisquam blanditiis. Temporibus ut atque illo!</p>
          <Link href="/academics">
            <button className="px-3 py-2 bg-white border-2 text-xl border-blue-600 w-[10rem] hover:bg-blue-600 hover:text-white">Know More</button>
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold uppercase tracking-wider">UpSkill</h1>

          <p className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi soluta cum, excepturi numquam molestias facilis eaque corrupti earum odit, deserunt libero voluptatibus cupiditate doloremque quisquam blanditiis. Temporibus ut atque illo!</p>
          <Link href="/upskill">
            <button className="px-3 py-2 bg-white border-2 text-xl border-blue-600 w-[10rem] hover:bg-blue-600 hover:text-white">Know More</button>
          </Link>        </div>
        <Image src="/Academics-Badge.png" alt="" width={400} height={100} />
      </div>
      <div className="flex items-center gap-5">
        <Image src="/Academics-Badge.png" alt="" width={400} height={100} />
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold uppercase tracking-wider">Club Activities</h1>

          <p className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi soluta cum, excepturi numquam molestias facilis eaque corrupti earum odit, deserunt libero voluptatibus cupiditate doloremque quisquam blanditiis. Temporibus ut atque illo!</p>
          <Link href="/club-activites">
            <button className="px-3 py-2 bg-white border-2 text-xl border-blue-600 w-[10rem] hover:bg-blue-600 hover:text-white">Know More</button>
          </Link>           </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold uppercase tracking-wider">Academic</h1>

          <p className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi soluta cum, excepturi numquam molestias facilis eaque corrupti earum odit, deserunt libero voluptatibus cupiditate doloremque quisquam blanditiis. Temporibus ut atque illo!</p>
          <button className="px-3 py-2 bg-white border-2 text-xl border-blue-600 w-[10rem] hover:bg-blue-600 hover:text-white">Know More</button>
        </div>
        <Image src="/Academics-Badge.png" alt="" width={400} height={100} />
      </div>
    </section>
  );
}
