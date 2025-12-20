import { ArrowRight, Github, Linkedin, Mail, Instagram, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/50 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">Data Science & AI Club</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              here <span className="text-gradient">Data Science</span>
              <br />
              converges with <span className="text-gradient">AI</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              Join our community of passionate data scientists and AI enthusiasts. 
              Learn, build, and innovate together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/projects">
                <Button size="lg" className="gradient-primary glow-primary text-primary-foreground font-semibold gap-2">
                  View our Projects
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/community">
                <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary">
                  Meet the Team
                </Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-muted-foreground">Our Socials</span>
              <div className="flex gap-2">
                {[Github, Linkedin, Mail, Instagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="relative">
            <div className="space-y-4">
              {/* Stats Card 1 */}
              <div className="glass-card rounded-xl p-6 max-w-sm ml-auto animate-float" style={{ animationDelay: '0s' }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">200%</p>
                    <p className="text-sm text-muted-foreground">Growth in AI Jobs</p>
                  </div>
                </div>
              </div>

              {/* Stats Card 2 */}
              <div className="glass-card rounded-xl p-6 max-w-xs animate-float" style={{ animationDelay: '1s' }}>
                <p className="text-3xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Active Members</p>
              </div>

              {/* Stats Card 3 */}
              <div className="glass-card rounded-xl p-6 max-w-sm ml-auto animate-float" style={{ animationDelay: '2s' }}>
                <p className="text-3xl font-bold text-foreground">15+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
