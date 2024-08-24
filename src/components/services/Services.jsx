import "./services.scss";
import { motion, useInView } from "framer-motion";
import {useRef} from "react"


const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef()

  const isInView = useInView(ref,{margin:"-100px"})

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer">
        <p>
          I focus on helping your brand grow <br /> and move forward.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title" variants={variants}>
          <h1>
          <motion.b whileHover={{color:"orange"}}>For your</motion.b> Business.
          </h1>
          <button>WHAT WE DO</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Quisque aliquet magna in metus ultrices, vel fermentum turpis
            dictum. Donec pulvinar sit amet lectus sed feugiat. Integer vitae
            enim at est tincidunt consequat. Nulla facilisi. Phasellus a lacinia
            erat. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Sed ante erat, ornare ut laoreet pellentesque, ornare sit amet
            libero. Fusce tortor urna, bibendum tincidunt tortor venenatis,
            vulputate lacinia lacus.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Quisque aliquet magna in metus ultrices, vel fermentum turpis
            dictum. Donec pulvinar sit amet lectus sed feugiat. Integer vitae
            enim at est tincidunt consequat. Nulla facilisi. Phasellus a lacinia
            erat. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Sed ante erat, ornare ut laoreet pellentesque, ornare sit amet
            libero. Fusce tortor urna, bibendum tincidunt tortor venenatis,
            vulputate lacinia lacus.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Quisque aliquet magna in metus ultrices, vel fermentum turpis
            dictum. Donec pulvinar sit amet lectus sed feugiat. Integer vitae
            enim at est tincidunt consequat. Nulla facilisi. Phasellus a lacinia
            erat. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Sed ante erat, ornare ut laoreet pellentesque, ornare sit amet
            libero. Fusce tortor urna, bibendum tincidunt tortor venenatis,
            vulputate lacinia lacus.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Quisque aliquet magna in metus ultrices, vel fermentum turpis
            dictum. Donec pulvinar sit amet lectus sed feugiat. Integer vitae
            enim at est tincidunt consequat. Nulla facilisi. Phasellus a lacinia
            erat. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Sed ante erat, ornare ut laoreet pellentesque, ornare sit amet
            libero. Fusce tortor urna, bibendum tincidunt tortor venenatis,
            vulputate lacinia lacus.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
