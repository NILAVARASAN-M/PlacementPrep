import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const onClickSignUp = () =>{
    navigate("/signup")
  }
  const onClickSignIn = () =>{
    navigate("/signin")
  }
  return (
    <nav className="bg-gradient-to-r from-gray-900 via-blue-900 to-black shadow-lg shadow-cyan-500/50 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 no-underline hover:no-underline focus:no-underline">
  <img src="/logo.jpg" alt="Logo" className="h-10 w-auto" />
  <span className="text-cyan-400 text-xl font-semibold tracking-wide drop-shadow-[0_0_8px_#4fa3d1]">
    Solo Leveling
  </span>
</a>



          {/* Navbar Links */}
          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Services"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white text-sm uppercase font-medium tracking-wide transition-all duration-300 hover:text-cyan-400 hover:drop-shadow-[0_0_10px_#4fa3d1] focus-visible:outline-none"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-5 py-2 border border-cyan-400 text-cyan-400 text-sm font-semibold rounded-lg transition-all duration-300 
              hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_15px_#4fa3d1] 
              focus:bg-[#00ffff] focus:text-black focus:shadow-[0_0_20px_#00ffff]" onClick={onClickSignIn}>
              Sign In
            </button>

            <button className="px-5 py-2 bg-cyan-500 text-black text-sm font-semibold rounded-lg transition-all duration-300 
              hover:bg-cyan-400 hover:shadow-[0_0_15px_#4fa3d1] 
              focus:bg-[#00ffff] focus:text-black focus:shadow-[0_0_20px_#00ffff]" onClick={onClickSignUp}>
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cyan-400 hover:text-cyan-300 transition-all duration-300 focus-visible:outline-none"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu Animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-gray-900 px-6 py-3 space-y-3 shadow-lg shadow-cyan-500/30"
          >
            {["Home", "About", "Services"].map((item) => (
              <a
                key={item}
                href="#"
                className="block text-white text-sm uppercase font-medium tracking-wide transition-all duration-300 hover:text-cyan-400 hover:drop-shadow-[0_0_10px_#4fa3d1] focus-visible:outline-none"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};



export default Navbar;
