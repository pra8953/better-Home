import { useState } from "react";
import { motion } from "framer-motion";
import Logo from "/Logo.svg"; // Ensure this path is correct
import { FaPhone } from "react-icons/fa6";

function Navbar({ isScrolled }) {
  const [isBuyOpen, setIsBuyOpen] = useState(false);
  const [isRefinanceOpen, setIsRefinanceOpen] = useState(false);
  const [isHELOCOpen, setIsHELOCOpen] = useState(false);
  const [isRatesOpen, setIsRatesOpen] = useState(false);
  const [isBetterOpen, setIsBetterOpen] = useState(false);
  const [isPhoneTooltipOpen, setIsPhoneTooltipOpen] = useState(false);

  const dropdownAnimation = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  };

  return (
    <div
      className={`sticky top-0 w-full flex justify-between items-center h-[85px] px-8 z-[1000] ${
        isScrolled ? "bg-white" : "bg-[#044f36]"
      } transition-all duration-300`}
    >
      {/* Left Section - Logo & Menu */}
      <div className="flex items-center gap-7 ml-[-13px]">
        {/* Logo */}
        <img
          src={Logo}
          alt="Better Logo"
          className={`w-[65px] h-auto ${
            !isScrolled ? "custom-logo" : ""
          }`} // Add custom-logo class only when not scrolled
        />

        {/* Menu Items */}
        <div className="flex gap-[30px] text-lg relative top-[-3px]">
          {/* Reusable Dropdown */}
          {[
            {
              label: "Buy",
              state: isBuyOpen,
              setState: setIsBuyOpen,
              items: [
                "Apply now",
                "Purchase rates",
                "Affordability calculator",
                "Mortgage calculator",
                "Rent vs buy calculator",
                "Find an agent",
                "VA loans",
                "Learning center",
              ],
            },
            {
              label: "Refinance",
              state: isRefinanceOpen,
              setState: setIsRefinanceOpen,
              items: [
                "Apply Now",
                "Refinance rates",
                "Cash-out refinance calculator",
                "Learning Center",
              ],
            },
            {
              label: "HELOC",
              state: isHELOCOpen,
              setState: setIsHELOCOpen,
              items: [
                "Apply Now",
                "Calculate your cash",
                "HELOC vs. Cash-out Refinance",
                "Learning Center",
              ],
            },
            {
              label: "Rates",
              state: isRatesOpen,
              setState: setIsRatesOpen,
              items: [
                "Purchase mortgage rates",
                "Refinance rates",
                "Refinance cash-out rates",
                "HELOC rates",
                "Purchase VA rates",
              ],
            },
            {
              label: "Better+",
              state: isBetterOpen,
              setState: setIsBetterOpen,
              items: [
                "Get Insurance",
                "Title and Closing",
                "Better Attorney Match",
                "Learning Center",
                "Better Agent Match",
                "Better Duo",
              ],
            },
          ].map(({ label, state, setState, items }) => (
            <div
              key={label}
              className={`relative cursor-pointer px-4 py-2 rounded-full transition-all duration-300 ${
                isScrolled
                  ? "text-[#044f36] hover:bg-[#044f36] hover:text-white"
                  : "text-white hover:bg-white hover:text-[#044f36]"
              }`}
              onMouseEnter={() => setState(true)}
              onMouseLeave={() => setState(false)}
            >
              {label}
              {state && (
                <motion.div
                  {...dropdownAnimation}
                  className="absolute left-0 mt-3 w-[250px] bg-white text-[#044f36] shadow-lg rounded-lg py-3"
                >
                  {items.map((item, index) => (
                    <div
                      key={index}
                      className="px-5 py-2 hover:bg-gray-200 cursor-pointer"
                    >
                      {item}
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Section - Phone Icon & Sign In */}
      <div className="flex items-center gap-8 mr-[38px] relative">
        {/* Phone Icon with Tooltip */}
        <div
          className={`relative flex items-center justify-center w-10 h-10 border rounded-full cursor-pointer transition-all duration-300 ${
            isScrolled
              ? "border-[#044f36] text-[#044f36] hover:bg-[#044f36] hover:text-white"
              : "border-white text-white hover:bg-white hover:text-[#044f36]"
          }`}
          onMouseEnter={() => setIsPhoneTooltipOpen(true)}
          onMouseLeave={() => setIsPhoneTooltipOpen(false)}
        >
          <FaPhone className="text-lg" />

          {isPhoneTooltipOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-12 right-[-20px] bg-white text-[#044f36] text-sm shadow-lg rounded-lg py-2 px-4 whitespace-nowrap"
            >
              Call us anytime at{" "}
              <a href="tel:4155238837" className="text-blue-600 underline">
                415-523-8837
              </a>
            </motion.div>
          )}
        </div>

        <div
          className={`text-lg cursor-pointer px-4 py-2 rounded-full transition-all duration-300 ${
            isScrolled
              ? "text-[#044f36] hover:bg-[#044f36] hover:text-white"
              : "text-white hover:bg-white hover:text-[#044f36]"
          }`}
        >
          Sign in
        </div>
      </div>
    </div>
  );
}

export default Navbar;