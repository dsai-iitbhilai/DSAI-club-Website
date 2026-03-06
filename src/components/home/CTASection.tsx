import { Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative glass-card rounded-3xl p-8 md:p-16 overflow-hidden animate-slide-up hover:glow-primary hover:-translate-y-2 transition-all duration-300">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-chart-2/10 blur-3xl" />
          
          <div className="relative z-10 text-center max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Join the Revolution</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Ready to Start Your
              <br />
              <span className="text-gradient">Data Science Journey?</span>
            </h2>
            
            <p className="text-muted-foreground text-lg">
              Join our vibrant community of learners and innovators. 
              Get access to exclusive resources, workshops, and mentorship.
            </p>
            
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-2">Contact us at</p>
              <a
                href="mailto:dsai_club@iitbhilai.ac.in"
                className="text-lg md:text-xl font-semibold text-primary hover:text-primary/80 transition-colors break-all"
              >
                dsai_club@iitbhilai.ac.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
