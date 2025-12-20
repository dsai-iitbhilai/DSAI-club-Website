import { Github, Linkedin } from "lucide-react";
import Layout from "@/components/layout/Layout";

const coordinators = [
  { name: "Rahul Sharma", role: "Club President", github: "#", linkedin: "#" },
  { name: "Priya Patel", role: "Vice President", github: "#", linkedin: "#" },
  { name: "Amit Kumar", role: "Technical Lead", github: "#", linkedin: "#" },
  { name: "Sneha Reddy", role: "Events Coordinator", github: "#", linkedin: "#" },
];

const coreMembers = [
  { name: "Vikash Singh", role: "ML Engineer", github: "#", linkedin: "#" },
  { name: "Ananya Gupta", role: "Data Analyst", github: "#", linkedin: "#" },
  { name: "Rohan Verma", role: "Backend Developer", github: "#", linkedin: "#" },
  { name: "Kavya Joshi", role: "Research Lead", github: "#", linkedin: "#" },
  { name: "Arjun Nair", role: "UI/UX Designer", github: "#", linkedin: "#" },
  { name: "Meera Iyer", role: "Content Lead", github: "#", linkedin: "#" },
  { name: "Siddharth Menon", role: "DevOps", github: "#", linkedin: "#" },
  { name: "Neha Saxena", role: "Community Manager", github: "#", linkedin: "#" },
];

const MemberCard = ({ name, role, github, linkedin }: { name: string; role: string; github: string; linkedin: string }) => (
  <div className="glass-card rounded-xl p-6 hover:glow-primary transition-all duration-300 group">
    <div className="w-20 h-20 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-primary-foreground">
      {name.split(' ').map(n => n[0]).join('')}
    </div>
    <h3 className="text-lg font-semibold text-foreground text-center group-hover:text-primary transition-colors">
      {name}
    </h3>
    <p className="text-muted-foreground text-sm text-center mb-4">{role}</p>
    <div className="flex justify-center gap-3">
      <a
        href={github}
        className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
      >
        <Github className="w-4 h-4" />
      </a>
      <a
        href={linkedin}
        className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
      >
        <Linkedin className="w-4 h-4" />
      </a>
    </div>
  </div>
);

const Community = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Team</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2">
              Meet Our <span className="text-gradient">Community</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              The passionate minds behind DSAI Club who work tirelessly to create 
              amazing learning experiences.
            </p>
          </div>

          {/* Coordinators */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Coordinators</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coordinators.map((member, index) => (
                <MemberCard key={index} {...member} />
              ))}
            </div>
          </div>

          {/* Core Members */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Core Members</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {coreMembers.map((member, index) => (
                <MemberCard key={index} {...member} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Community;
