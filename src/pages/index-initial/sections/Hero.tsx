// import HeroImg from "@/assets/landinghero.jpg"

const Hero = () => {
  return (
    

<div className="hero bg-heroImg  min-h-screen "  >
<div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-neutral-content text-center">
    {/* <div>
      <img
      src={HeroImg} alt="Hero Image"
      className=" max-w-sm lg:max-w-lg shadow-2xl" />
      </div> */}
    
    <div>
      <div className=" text-gray-200">
        <h1 className="text-5xl lg:text-8xl ">Bobby Kurb</h1>
        <p className="py-8 text-md lg:text-2xl">
          Currently based in New Zealand.
        </p>
      </div>
    </div>

  </div>
</div>
    
  )
}

export default Hero
