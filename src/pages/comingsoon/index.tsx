import EmailIcon from "@/assets/mail.svg"
import LinkedInIcon from "@/assets/linkedin.svg"
import InstagramIcon from "@/assets/instagram.svg"
import FacebookIcon from "@/assets/facebook.svg"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import { LinkType } from "@/shared/types"
import CSLinks from "./CSLinks"
import { useEffect, useState } from "react"

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
}

const links: Array<LinkType> = [
  {
    icon: <img src={EmailIcon} alt="email icon"/>,
    link: <a href="mailto:info@bobbykurb.com" target="_blank">info@bobbykurb.com</a>
  },
  {
    icon: <img src={LinkedInIcon} alt="linkedin icon"/>,
    link: <a href="https://nz.linkedin.com/in/bobby-kurb-a30940263" target="_blank">linkedin.com/bobbykurb</a>
  },
  {
    icon: <img src={InstagramIcon} alt="instagram icon"/>,
    link: <a href="https://www.instagram.com/bobby.kurb/" target="_blank">instagram.com/bobby.kurb</a>
  },
  {
    icon: <img src={FacebookIcon} alt="facebook icon"/>,
    link: <a href="https://www.facebook.com/people/Bobby-Kurb/61553565725790/" target="_blank">facebook.com/bobby-kurb</a>
  },
]

const ComingSoon = () => {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "../../assets/comingsoon-bg.png"
    img.onload = () => {
      setBgLoaded(true);
    };
  }, []);

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  
  const onSubmit = async (e:any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  }  

  return (
    <div className={`min-h-screen ${
      bgLoaded ? "cs-bg-placeholder" : "cs-bg-comingsoon"
    } bg-no-repeat bg-cover lm:bg-center grid max-lg:grid-rows-2 lg:grid-cols-2`}>
      <div className="text-white pt-48 xl:pt-40 mx-8 xs:mx-auto lm:ml-40 ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once:true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0}
          }}
        >
          <h1 className="italic text-[3rem] xs:text-[4rem] sm:text-[5rem] xl:text-[5.5rem] xs:tracking-[-0.05em]">Coming Soon</h1>
          <h2 className="text-[1.2rem] sm:text-[1.5rem] xl:text-[1.7rem] font-comfortaa font-light tracking-[0.01em] -mt-2 xs:-mt-4">Bobby Kurb</h2>
        </motion.div>
        <motion.div 
          className="mt-16 sm:mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once:true, amount: 0.5 }}
          transition={{ delay: 0.2,duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0}
          }}
        >
          <p className="mb-2 text-sm sm:hidden">Notify me when the website is launched</p>
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input
              type="hidden"
              name="access_key"
              value="e3744ef7-2c9a-4cfe-90d3-7a1ee8b9d100"
            />
            <input
              type="text"
              placeholder="Email"
              className="p-3 sm:mr-6 xl:mr-10 w-full sm:w-[22em] xl:w-[25em] opacity-70 text-black"       
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z-9.-]+\.[A-Z]{2,}$/i,
            })}       
            />
            {errors.email && (
              <p className="mt-1 text-primary-500">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}
            <button 
              className="bg-white text-black sm:text-sm py-4 sm:py-3.5  px-16 sm:px-12 rounded-lg transition duration-500 hover:bg-pink-200 hover:text-gray-600 mt-5 sm:mt-0"
              type="submit"
            >
                Notify Me
            </button>
          </form>
          <p className="mt-5 text-xs hidden sm:visible">Notify me when the website is launched</p>
        </motion.div>
      </div>
      <div className="flex flex-col-reverse text-white">
        <motion.div 
          className="py-12 font-light mx-auto sm:ml-40 lg:pl-24 xxl:pl-14 text-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once:true, amount: 0.5 }}
          variants={container}
        >
          {links.map((link: LinkType) => (
            <CSLinks
              icon={link.icon}
              link={link.link}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default ComingSoon