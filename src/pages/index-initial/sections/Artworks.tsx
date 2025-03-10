import Art from "@/assets/work2.jpg"

const Artworks = () => {
  return (
  

    <div className="hero min-h-screen flex flex-col sm:flex-col md:flex-row items-center justify-center gap-8 md:gap-56 lg:gap-96 p-10">
  
  {/* Text container (On top for sm, right for md and larger) */}
  <div className="text-center md:text-right md:order-2">
    <h1 className="text-3xl font-bold mb-2 drop-shadow-md">ARTWORKS</h1>
    <h2 className="text-2xl">2024-2025</h2>
  </div>

  {/* Image container (On bottom for sm, left for md and larger) */}
  <div className="p-6 md:p-0 md:order-1">
    <img
      src={Art}
      alt="artworks"
      className="max-w-sm lg:max-w-md shadow-2xl"
    />
  </div>

</div>


  )
}

export default Artworks