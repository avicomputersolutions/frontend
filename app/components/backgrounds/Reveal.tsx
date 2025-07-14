import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
interface Props {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
}
const Reveal = ({ children, width = "fit-content" }: Props) => {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })
    const mainControl = useAnimation();
    const slideControl = useAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (inView) {
            mainControl.start("visible")
            slideControl.start("visible")
        }
    }, [inView])
    return (
        <div ref={ref} className={`relative overflow-hidden ${width}`}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.25 }}
            >{children}</motion.div>
            <motion.div variants={
                {
                    hidden: { left: 0 },
                    visible: { left: "100%" }
                }
            }
                initial="hidden"
                animate={slideControl}
                transition={{ duration: 0.5, ease: "easeIn" }}
                className='absolute top-[4] bottom-[4] left-0 right-0 bg-[#03001417] z-[20]'>

            </motion.div>
        </div>
    )
}

export default Reveal