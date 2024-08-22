import { motion } from "framer-motion"

const Test = () => {
  return (
    <div className="course">
        <motion.div 
            className="box" 
            initial={{opacicty:0.5 ,scale:0.5}}
            // animate={{opacicty:1 ,scale:1, x:200, y:500}}
            transition={{duration:2 }}
            whileTap={{opacicty:1 ,scale:2}}
            drag
         ></motion.div>
    </div>
  )
}

export default Test