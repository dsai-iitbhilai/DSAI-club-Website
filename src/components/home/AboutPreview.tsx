import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const highlights = [
  "Hands-on workshops and bootcamps",
  "Industry expert sessions",
  "Collaborative project building",
  "Research paper discussions",
  "Hackathon participation",
  "Career guidance and mentorship",
];

const AboutPreview = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              We are The Best
              <br />
              <span className="text-gradient">DATA</span> Analysts
            </h2>
            <p className="text-muted-foreground">
              Whether you're a beginner curious about data science or an experienced 
              practitioner looking to expand your skills, DSAI Club provides the perfect 
              environment to grow. We believe in learning by doing, and our community 
              thrives on collaboration and innovation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Link to="/about">
              <Button className="gradient-primary glow-primary text-primary-foreground font-semibold gap-2 mt-4">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div className="glass-card rounded-2xl p-8 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Club Stats</span>
                <span className="text-xs text-primary">2024</span>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "50+", label: "Members" },
                  { value: "15+", label: "Projects" },
                  { value: "20+", label: "Events" },
                  { value: "5+", label: "Hackathons" },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-xl bg-secondary">
                    <p className="text-3xl font-bold text-gradient">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
              
              <div className="h-32 rounded-xl bg-secondary/50 flex items-end p-4 gap-2">
                {[40, 65, 45, 80, 55, 90, 70, 85].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t gradient-primary"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
            
            {/* Decorative */}
            <div className="absolute -z-10 top-4 -right-4 w-full h-full rounded-2xl border border-primary/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
