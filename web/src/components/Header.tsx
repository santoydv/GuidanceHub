import Link from "next/link"
import { FaRegCircleUser } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="flex justify-between items-center gap-24  h-[5rem]  bg-[orange] sticky top-0 z-10">
        <div className="bg-[#3F51B5] h-full flex px-10 items-center justify-center text-3xl font-bold uppercase tracking-wider text-white">GuidanceHUB</div>
        <div>
            <nav className="list-none flex gap-20 text-[#3F51B5] font-semibold ">
              <Link href="/"><li className="hover:text-blue-950">Home</li></Link>  
              <Link href="#about-us"><li className="hover:text-blue-950">About Us</li></Link>  
              <Link href="/"><li className="hover:text-blue-950">Contact Us</li></Link>  
              <Link href="/"><li className="hover:text-blue-950">Privacy Policy</li></Link>  
              <Link href="/"><li className="hover:text-blue-950">Disclaimer</li></Link>  
            </nav>
        </div>
        <div className="flex gap-3 items-center text-[#3F51B5] hover:text-blue-950 pr-12 cursor-pointer" >
            <FaRegCircleUser className="text-md" />
            My Account
        </div>
    </header>
  )
}

export default Header