import { motion } from "framer-motion"
import { CONTACT } from "../constants"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h1
            whileInView={{opacity: 1, y: 0 }}
            initial={{ opacity:0, y: -50 }}
            transition={{ delay: 0.5 }}
            className="my-10 text-center text-4xl"
        >
            Say Hello to Me
        </motion.h1>
        <div className="text-center tracking-tighter">
        <motion.p
            whileInView={{opacity: 1, x: 0 }}
            initial={{ opacity:0, x: -100 }}
            transition={{ delay: 1 }}
            className="my-4"
        >
            {CONTACT.email}
        </motion.p>
        <motion.p
            whileInView={{opacity: 1, x: 0 }}
            initial={{ opacity:0, x: 100 }}
            transition={{ delay: 1 }}
            className="my-4"
        >
            {CONTACT.phoneNo}
        </motion.p>
        </div>
    </div>
  )
}

export default Contact
