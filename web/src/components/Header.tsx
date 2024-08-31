const Header = () => {
  return (
    <header className="flex items-center justify-between px-20 h-[5rem] shadow-md sticky top-0 bg-white z-10">
        <div>
            <h1 className="font-bold text-2xl">GuidanceHUB</h1>
        </div>
        <div>
            <nav className="flex gap-2 list-none">
                <li className="py-2 px-3">Home</li>
                <li className="py-2 px-3">About</li>
                <li className="py-2 px-3">Contact</li>
                <li><button className="py-2 px-3 bg-[#228B22] text-white rounded-md">Account</button></li>
            </nav>
        </div>
    </header>
  )
}

export default Header