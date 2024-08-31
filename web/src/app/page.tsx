import Image from "next/image";

export default function Home() {
  return (
    <section className="px-40">
      <div className="flex items-center gap-5">
        <Image src="/Academics-Badge.png" alt="" width={400} height={100} />
        <div className="flex flex-col gap-5">
          <p className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi soluta cum, excepturi numquam molestias facilis eaque corrupti earum odit, deserunt libero voluptatibus cupiditate doloremque quisquam blanditiis. Temporibus ut atque illo!</p>
          <button className="px-3 py-2 bg-white border-2 text-xl border-blue-600 w-[10rem] hover:bg-blue-600 hover:text-white">Know More</button>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <p className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi soluta cum, excepturi numquam molestias facilis eaque corrupti earum odit, deserunt libero voluptatibus cupiditate doloremque quisquam blanditiis. Temporibus ut atque illo!</p>
        <Image src="/Academics-Badge.png" alt="" width={400} height={100} />
      </div>
      <div className="flex items-center gap-5">
        <Image src="/Academics-Badge.png" alt="" width={400} height={100} />
        <p className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi soluta cum, excepturi numquam molestias facilis eaque corrupti earum odit, deserunt libero voluptatibus cupiditate doloremque quisquam blanditiis. Temporibus ut atque illo!</p>
      </div>
      <div className="flex items-center gap-5">
        <p className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi soluta cum, excepturi numquam molestias facilis eaque corrupti earum odit, deserunt libero voluptatibus cupiditate doloremque quisquam blanditiis. Temporibus ut atque illo!</p>
        <Image src="/Academics-Badge.png" alt="" width={400} height={100} />
      </div>
    </section>
  );
}
