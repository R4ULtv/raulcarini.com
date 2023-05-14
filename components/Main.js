import { motion } from "framer-motion";

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
        const delay = i * 0.5;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "tween", duration: 3, bounce: 0 },
                opacity: { delay, duration: 0.5 },
            }
        };
    }
};
const spawn = {
    hidden: { opacity: 0, scale: 0.75 },
    visible: (i) => {
        const delay = 4.75
        return{ opacity: 1, scale: 1, transition: { opacity: {delay, duration: 0.5}, scale: {delay, duration: 0.5}}}
    }
}
export default function Main() {
    return(
        <div className="bg-gradient-to-b from-blue-200 to-blue-50">
            <div className="grid grid-cols-1 content-center max-w-7xl h-screen lg:m-auto p-4 gap-20">
                <div className="self-center flex flex-col items-center">
                    <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 50 874.04 100" initial="hidden" animate="visible" className="hidden md:block">
                        <g>
                            <motion.path variants={draw} custom={1} className="cls-1" d="M65.31,65.8c13.54-.15,25.03,11.24,24.84,24.84,0,4.94-1.32,9.44-3.96,13.44-2.59,3.96-6.06,6.99-10.36,9l14.32,18.43h-27.28l-12.37-16.04H27.62v16.04H2V65.8h63.31Zm-37.69,19.21v11.2h31.24c1.56,0,2.88-.54,3.96-1.61,1.12-1.12,1.66-2.44,1.66-3.96,0-3.13-2.49-5.62-5.62-5.62H27.62Z"/>
                            <motion.path variants={draw} custom={1.5} className="cls-1" d="M127.35,65.85h30.46l35.25,65.71h-28.84l-5.18-11.24h-32.9l-5.18,11.24h-28.84l35.25-65.71Zm6.21,38.43h18.04l-9-19.41-9.04,19.41Z"/>
                            <motion.path variants={draw} custom={2} className="cls-1" d="M252.9,65.75h25.67v35.3c.1,24.84-20.24,31.97-44.88,32.02-24.64-.05-44.98-7.19-44.88-32.02v-35.3h25.62v33.68c-.1,10.8,8.75,12.66,19.26,12.81,10.46-.15,19.36-2,19.21-12.81v-33.68Z"/>
                            <motion.path variants={draw} custom={2.5} className="cls-1" d="M315.73,65.75v44.88h51.28v20.83h-76.9V65.75h25.62Z"/>
                        </g>
                        <g>
                            <motion.path variants={draw} custom={3} className="cls-1" d="M507.47,104.23c-1.61,22.2-21.07,28.84-44.73,28.84-24.64-.05-44.98-7.19-44.88-32.07v-4.79c-.1-24.84,20.24-31.97,44.88-32.07,23.66,.05,43.12,6.7,44.73,28.84h-26.25c-2.4-6.45-9.68-7.97-18.48-7.97-10.46,.15-19.36,2-19.21,12.81v1.61c-.15,10.71,8.75,12.66,19.21,12.81,8.8,0,16.13-1.56,18.48-8.02h26.25Z"/>
                            <motion.path variants={draw} custom={3.5} className="cls-1" d="M538.81,65.85h30.46l35.25,65.71h-28.84l-5.18-11.24h-32.9l-5.18,11.24h-28.84l35.25-65.71Zm6.21,38.43h18.04l-9-19.41-9.04,19.41Z"/>
                            <motion.path variants={draw} custom={4} className="cls-1" d="M669.79,65.8c13.54-.15,25.03,11.24,24.84,24.84,0,4.94-1.32,9.44-3.96,13.44-2.59,3.96-6.06,6.99-10.36,9l14.32,18.43h-27.28l-12.37-16.04h-22.88v16.04h-25.62V65.8h63.31Zm-37.69,19.21v11.2h31.24c1.56,0,2.88-.54,3.96-1.61,1.12-1.12,1.66-2.44,1.66-3.96,0-3.13-2.49-5.62-5.62-5.62h-31.24Z"/>
                            <motion.path variants={draw} custom={4.5} className="cls-1" d="M728.16,65.75v65.71h-25.62V65.75h25.62Z"/>
                            <motion.path variants={draw} custom={5} className="cls-1" d="M805.85,65.75h25.67v65.71h-28.84l-35.3-40.14v40.14h-25.62V65.75h35.25l28.84,34.81v-34.81Z"/>
                            <motion.path variants={draw} custom={5.5} className="cls-1" d="M872.04,65.75v65.71h-25.62V65.75h25.62Z"/>
                        </g>
                    </motion.svg>
                    <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 458.19 213.07"  initial="hidden" animate="visible" className="md:hidden mb-10">
                        <g>
                            <motion.path variants={draw} custom={1} className="cls-1" d="M115.45,51.8c13.54-.15,25.03,11.24,24.84,24.84,0,4.94-1.32,9.44-3.96,13.44-2.59,3.96-6.06,6.99-10.36,9l14.32,18.43h-27.28l-12.37-16.04h-22.88v16.04h-25.62V51.8h63.31Zm-37.69,19.21v11.2h31.24c1.56,0,2.88-.54,3.96-1.61,1.12-1.12,1.66-2.44,1.66-3.96,0-3.13-2.49-5.62-5.62-5.62h-31.24Z"/>
                            <motion.path variants={draw} custom={1.5} className="cls-1" d="M177.5,51.85h30.46l35.25,65.71h-28.84l-5.18-11.24h-32.9l-5.18,11.24h-28.84l35.25-65.71Zm6.21,38.43h18.04l-9-19.41-9.04,19.41Z"/>
                            <motion.path variants={draw} custom={2} className="cls-1" d="M303.04,51.75h25.67v35.3c.1,24.84-20.24,31.97-44.88,32.02-24.64-.05-44.98-7.19-44.88-32.02V51.75h25.62v33.68c-.1,10.8,8.75,12.66,19.26,12.81,10.46-.15,19.36-2,19.21-12.81V51.75Z"/>
                            <motion.path variants={draw} custom={2.5} className="cls-1" d="M365.87,51.75v44.88h51.28v20.83h-76.9V51.75h25.62Z"/>
                        </g>
                        <g>
                            <motion.path variants={draw} custom={3} className="cls-1" d="M91.61,182.23c-1.61,22.2-21.07,28.84-44.73,28.84-24.64-.05-44.98-7.19-44.88-32.07v-4.79c-.1-24.84,20.24-31.97,44.88-32.07,23.66,.05,43.12,6.7,44.73,28.84h-26.25c-2.4-6.45-9.68-7.97-18.48-7.97-10.46,.15-19.36,2-19.21,12.81v1.61c-.15,10.71,8.75,12.66,19.21,12.81,8.8,0,16.13-1.56,18.48-8.02h26.25Z"/>
                            <motion.path variants={draw} custom={3.5} className="cls-1" d="M122.95,143.85h30.46l35.25,65.71h-28.84l-5.18-11.24h-32.9l-5.18,11.24h-28.84l35.25-65.71Zm6.21,38.43h18.04l-9-19.41-9.04,19.41Z"/>
                            <motion.path variants={draw} custom={4} className="cls-1" d="M253.93,143.8c13.54-.15,25.03,11.24,24.84,24.84,0,4.94-1.32,9.44-3.96,13.44-2.59,3.96-6.06,6.99-10.36,9l14.32,18.43h-27.28l-12.37-16.04h-22.88v16.04h-25.62v-65.71h63.31Zm-37.69,19.21v11.2h31.24c1.56,0,2.88-.54,3.96-1.61,1.12-1.12,1.66-2.44,1.66-3.96,0-3.13-2.49-5.62-5.62-5.62h-31.24Z"/>
                            <motion.path variants={draw} custom={4.5} className="cls-1" d="M312.3,143.75v65.71h-25.62v-65.71h25.62Z"/>
                            <motion.path variants={draw} custom={5} className="cls-1" d="M389.99,143.75h25.67v65.71h-28.84l-35.3-40.14v40.14h-25.62v-65.71h35.25l28.84,34.81v-34.81Z"/>
                            <motion.path variants={draw} custom={5.5} className="cls-1" d="M456.19,143.75v65.71h-25.62v-65.71h25.62Z"/>
                        </g>
                    </motion.svg>
                    <motion.p initial="hidden" variants={spawn} animate="visible" className="mt-2 text-lg font-medium text-center">Hi, my name is Raul, I'm a Developer, I'm working on several private projects.</motion.p>
                    <motion.p initial="hidden" variants={spawn} animate="visible" className="mt-2 text-lg font-medium text-center">Who I am ? Do you want to contact me?</motion.p>
                </div>
                <motion.div initial="hidden" variants={spawn} animate="visible" className="self-center flex items-center justify-center flex-col md:flex-row">
                    <a className="border-2 border-blue-600 py-3 px-10 rounded-lg font-bold shadow-lg shadow-blue-500/50 w-50 m-2 hover:scale-105 duration-150" href="#about">About Me</a>
                    <a className="border-2 border-blue-600 bg-blue-600 py-3 px-10 rounded-lg text-white font-bold shadow-lg shadow-blue-500/50 w-50 m-2 hover:scale-105 duration-150" href="#contacts">Contact Me</a>
                </motion.div>
            </div>
        </div>
        
    )
}