import { motion } from "framer-motion";

type Props = {
    icon: JSX.Element;
    link: JSX.Element;
}

const childVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
}

const CSLinks = ({ icon, link }: Props) => {
  return (
    <motion.div
        variants={childVariant}
    >
          <div className="comingsoon-links">
            {icon}
            {link}
          </div>          
    </motion.div>
  )
}

export default CSLinks