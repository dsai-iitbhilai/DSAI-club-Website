import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Community", path: "/community" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Resources", path: "/resources" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/logo.jpeg"
              alt="DSAI Club logo"
              className="w-10 h-10 md:w-11 md:h-11 rounded-lg object-contain bg-white/90 p-1 shadow-sm transition-all group-hover:scale-105"
            />
            <span className="text-xl font-bold text-foreground">DSAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  location.pathname === link.path
                    ? "text-primary bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="mailto:dsai_club@iitbhilai.ac.in"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              dsai_club@iitbhilai.ac.in
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-slide-up">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-all",
                    location.pathname === link.path
                      ? "text-primary bg-secondary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="mailto:dsai_club@iitbhilai.ac.in"
                className="px-4 py-3 text-sm font-medium text-primary hover:bg-secondary/50 rounded-lg transition-all mt-2"
              >
                dsai_club@iitbhilai.ac.in
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
