import Link from "next/link"

const Header = () => {
  return (
    <header className="flex items-center gap-24  h-[5rem] sticky top-0 bg-[#F8D287] z-10">
        <div className="bg-[#3F51B5] h-full flex px-10 items-center justify-center text-3xl font-bold uppercase tracking-wider text-white">GuidanceHUB</div>
        <div>
            <nav className="list-none flex gap-20 text-[#3F51B5] font-semibold ">
              <Link href="/"><li className="hover:text-blue-950">Home</li></Link>  
              <Link href="/"><li className="hover:text-blue-950">Academic</li></Link>  
              <Link href="/"><li className="hover:text-blue-950">UpSkill</li></Link>  
              <Link href="/"><li className="hover:text-blue-950">Club Activities</li></Link>  
              <Link href="/"><li className="hover:text-blue-950">Alumni Intraction</li></Link>  
            </nav>
        </div>
    </header>
  )
}

export default Header