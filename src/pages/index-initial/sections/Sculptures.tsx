import Sculpture from "@/assets/sculpt1.png"

const Sculptures = () => {
  return (
    

<div className="hero min-h-screen flex flex-col sm:flex-col md:flex-row items-center justify-center gap-20 md:gap-56 gap lg:gap-96 p-10 bg-zinc-800">
  {/* Text container (left on md and bigger) */}
  <div className="text-center md:text-left text-zinc-300">
    <h1 className="text-3xl font-bold mb-2 drop-shadow-2xl shadow-zinc-400">SCULPTURES</h1>
    <h2 className="text-2xl">Available Soon</h2>
  </div>

  {/* Image container (right on md and bigger) */}
  <div className="mb-6 md:mb-0">
    <img
      src={Sculpture}
      alt="sculpture"
     className="max-w-sm md:max-w-lg shadow-2xl shadow-zinc-700"
    />
  </div>
</div>



  )
}

export default Sculptures