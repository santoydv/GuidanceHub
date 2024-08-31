
const UpSkill = () => {
  return (
    <section className="flex flex-col gap-5">
      <h1 className="text-3xl uppercase font-semibold">UpSkill</h1>
      <div>
        <li className="bg-red-500 relative inline-block px-5 py-2 w-[30rem] rounded-lg text-white text-lg"><div className="flex justify-between"><p>Begin Path / Guidance</p><span>&rArr;</span></div></li>
        <div className="relative left-7 bg-white">
          <ul className="list-none my-7 text-lg flex flex-col gap-5">
            <li className="arrow-li bg-white flex justify-between items-center"><p>DSA/CP</p><span>&rArr;</span></li>
            <li className="arrow-li bg-white flex justify-between items-center"><p>Web Development</p><span>&rArr;</span></li>
            <li className="arrow-li bg-white flex justify-between items-center"><p>AI/ML</p><span>&rArr;</span></li>
            <li className="arrow-li bg-white flex justify-between items-center"><p>DevOPS</p><span>&rArr;</span></li>
          </ul>
        </div>

        <li className="bg-red-500 relative inline-block px-5 py-2 w-[30rem] rounded-lg text-white text-lg"><div className="flex justify-between"><p>Off-Campus Opportunities</p><span>&rArr;</span></div></li>
      </div>
    </section>
  )
}

export default UpSkill