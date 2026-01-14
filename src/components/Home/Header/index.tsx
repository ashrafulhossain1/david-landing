import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import discoverLogo from "@/assets/images/home/discoverLogo.svg";

const Header: React.FC = () => {
  // one images
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll effect
  useEffect(() => {
    let timer: number;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add scroll background/rounded logic
      setScrolled(currentScrollY > 100);

      // Hide/show on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true); // scrolling down → hide
      } else {
        setHidden(false); // scrolling up → show
      }

      clearTimeout(timer);
      timer = setTimeout(() => setHidden(false), 500);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [lastScrollY]);
  return (
    <>
      {/* NAVBAR */}
      <AnimatePresence>
        <motion.nav
          initial={{ y: -120, opacity: 0 }}
          animate={{ y: hidden ? -120 : 0, opacity: hidden ? 0 : 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 25 }}
          className={`w-full sticky top-0 z-50 transition-all border-b border-[#2B2B2F]
            ${scrolled ? "bg-[#0C0B10] backdrop-blur-xl rounded-br-3xl rounded-bl-3xl" : "bg-background rounded-none"}`}
        >
          {/* CENTERED CONTENT */}
          <div className="max-w-312 w-full mx-auto px-4 py-3 flex items-center justify-between">
            {/* Logo */}
            <Link to="/">
              <img src={discoverLogo} alt="logo" className="w-32 sm:w-42" />
            </Link>

            {/* Desktop Right Side */}
            <div className="hidden sm:flex items-center gap-4">
              {/* Free Button */}
              <span className="cursor-pointer select-none px-4 py-2 border border-primary rounded-full text-primary hover:bg-foreground transition">
                100% Free Forever
              </span>

              {/* Sign In Button */}
              <Button className="py-2 px-5 rounded-full text-base md:text-lg">
                Sign In
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="sm:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all flex-shrink-0"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.nav>
      </AnimatePresence>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 25,
                opacity: { duration: 0.2 },
              }}
              className="fixed right-0 top-0 bottom-0 z-50 w-[75%] bg-[#000000] backdrop-blur-2xl shadow-2xl overflow-y-auto p-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-white hover:text-orange-400 transition-all p-2 hover:bg-white/10 rounded-full"
              >
                <X size={28} strokeWidth={2.5} />
              </button>

              {/* Mobile Menu Content */}
              <div className="mt-16 flex flex-col gap-4">
                <span className="cursor-pointer select-none px-4 py-3 border border-primary rounded-full text-primary hover:bg-foreground transition block text-center">
                  100% Free Forever
                </span>

                <Button className="w-full py-3 px-5 rounded-full text-base md:text-lg">
                  Sign In
                </Button>
              </div>
            </motion.div>

            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
