import Art from "@/assets/work1.jpg"

const Artworks = () => {
  return (
  

    <div className="hero  min-h-screen">
  <div className="hero-content flex flex-col md:flex-row items-center justify-between gap-8 md:gap-72 lg:gap-96">
    {/* Sculptures Heading */}
    <h1 className="text-3xl font-bold mb-4 md:hidden">ARTWORKS</h1>

    {/* Image Section */}
    <div className="mb-6 md:mb-0 md:mr-8">
      <img
        src={Art}
        alt="artworks"
        className="max-w-sm lg:max-w-lg shadow-2xl"
      />
    </div>

    {/* Text Section */}
    <div className="text-center md:text-left">
      {/* Sculptures Heading (for medium and larger screens) */}
      <h1 className="text-3xl font-bold mb-4 hidden md:block">ARTWORKS</h1>

      {/* Subheading and Year */}
      <div className="flex flex-col sm:items-center md:items-start">
        <h2 className="text-2xl mb-2">In Search of What is Lost</h2>
        <p className="mb-2">2024</p>
        
      </div>
    </div>
  </div>
</div>
  )
}

export default Artworks