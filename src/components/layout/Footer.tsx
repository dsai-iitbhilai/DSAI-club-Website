import { Github, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/logo.jpeg"
                alt="DSAI Club logo"
                className="w-10 h-10 md:w-11 md:h-11 rounded-lg object-contain bg-white/90 p-1 shadow-sm"
              />
              <span className="text-xl font-bold text-foreground">DSAI Club</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Data Science and Artificial Intelligence Club - Where innovation meets intelligence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Community", "Projects", "About", "Resources"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              {["Roadmaps", "Tutorials", "Documentation", "Blog"].map((item) => (
                <li key={item}>
                  <Link
                    to="/resources"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {[
                {
                  icon: Github,
                  href: "https://github.com/dsai-iitbhilai",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/company/dsai-club-iit-bhilai",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/dsai_iitbhilai",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <a
              href="mailto:dsai_club@iitbhilai.ac.in"
              className="inline-block mt-4 text-sm text-primary hover:text-primary/80 transition-colors break-all"
            >
              dsai_club@iitbhilai.ac.in
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 DSAI Club. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Made with <span className="text-primary">♥</span> Rahul
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
