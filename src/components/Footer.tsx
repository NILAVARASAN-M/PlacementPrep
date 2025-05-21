import React from "react";

interface FooterProps {
  isFixed?: boolean; // Prop to control fixed positioning
}

const Footer: React.FC<FooterProps> = ({ isFixed }) => {
  return (
    <footer
      className={`bg-gradient-to-r from-gray-900 via-blue-900 to-black shadow-lg shadow-cyan-500/50 h-12 flex items-center
        ${isFixed ? "absolute bottom-0 w-full" : ""} `}
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
        {/* Footer Branding */}
        <p className="text-cyan-400 text-sm font-medium tracking-wide drop-shadow-[0_0_8px_#4fa3d1]">
          © 2025 Solo Leveling. All rights reserved.
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          {[
            { href: "#", icon: "fa-facebook-f" },
            { href: "#", icon: "fa-x-twitter" },
            { href: "#", icon: "fa-instagram" },
            { href: "#", icon: "fa-github" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="text-cyan-400 text-sm transition-all duration-300 
          hover:text-white hover:drop-shadow-[0_0_12px_#4fa3d1] focus-visible:outline-none"
            >
              <i className={`fa-brands ${social.icon}`}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;