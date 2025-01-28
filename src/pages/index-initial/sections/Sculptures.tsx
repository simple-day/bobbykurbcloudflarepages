import Sculpture from "@/assets/sculpt1.png"

const Sculptures = () => {
  return (
    

<div className="hero min-h-screen">
<div className="hero-content flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-72 lg:gap-96">
    {/* Sculptures Heading */}
    <h1 className="text-3xl font-bold mb-4 md:hidden">SCULPTURES</h1>

    {/* Image Section */}
    <div className="mb-6 md:mb-0 md:ml-8">
      <img
        src={Sculpture}
        alt="sculpture"
        className="max-w-sm md:max-w-lg shadow-2xl"
      />
    </div>

    {/* Text Section */}
    <div className="text-center md:text-left">
      {/* Sculptures Heading (for medium and larger screens) */}
      <h1 className="text-3xl font-bold mb-4 hidden md:block ">SCULPTURES</h1>

      {/* Subheading and Year */}
      <div className="flex flex-col sm:items-center md:items-start">
        <h2 className="text-2xl mb-2">Man of Steel</h2>
        <p className="text-gray-600">2021</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Sculptures