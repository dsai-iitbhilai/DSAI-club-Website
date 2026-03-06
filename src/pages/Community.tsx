import { Github, Linkedin } from "lucide-react";
import Layout from "@/components/layout/Layout";

type Member = {
  name: string;
  role: string;
  github?: string;
  linkedin?: string;
  imageUrl: string;
};

const coordinators: Member[] = [
  {
    name: "Kesav Patneedi",
    role: "Coordinator",
    imageUrl: "/community/coordinators/Kesav Patneedi.jpg",
  },
  {
    name: "Varun Rao",
    role: "Coordinator",
    imageUrl: "/community/coordinators/Varun Rao.jpeg",
  },
];

const coreMembers: Member[] = [
  {
    name: "Farhan",
    role: "Core Member",
    imageUrl: "/community/core/Farhan.jpeg",
  },
  {
    name: "Vatsal Yadav",
    role: "Core Member",
    imageUrl: "/community/core/Vatsal Yadav.jpg",
  },
  {
    name: "Pranay",
    role: "Core Member",
    imageUrl: "/community/core/Pranay.jpeg",
  },
  {
    name: "Shashank Yadav",
    role: "Core Member",
    imageUrl: "/community/core/ShashankYadav.jpg",
  },
  {
    name: "Sarthak",
    role: "Core Member",
    imageUrl: "/community/core/Sarthak.jpg",
  },
  {
    name: "Himanshu",
    role: "Core Member",
    imageUrl: "/community/core/Himanshu.jpg",
  },
  {
    name: "Rudra Mehul Dudhat",
    role: "Core Member",
    imageUrl: "/community/core/Rudra Mehul Dudhat.jpg",
  },
  {
    name: "Devanshu",
    role: "Core Member",
    imageUrl: "/community/core/Devanshu.jpg",
  },
  {
    name: "Siddhesh Bansal",
    role: "Core Member",
    imageUrl: "/community/core/Siddhesh Bansal.jpg",
  },
];

const contributors: Member[] = [
  {
    name: "Viresh Koli",
    role: "Contributor",
    imageUrl: "/community/contributors/Viresh Koli.jpg",
  },
  {
    name: "Neha Bharti",
    role: "Contributor",
    imageUrl: "/community/contributors/Neha Bharti.jpeg",
  },
  {
    name: "Shri",
    role: "Contributor",
    imageUrl: "/community/contributors/Shri.jpg",
  },
  {
    name: "Akhilesh Kumar Yadav",
    role: "Contributor",
    imageUrl: "/community/contributors/Akhilesh Kumar Yadav.jpg",
  },
  {
    name: "Rahul Raj",
    role: "Contributor",
    imageUrl: "/community/contributors/Rahul Raj.jpg",
  },
  {
    name: "Kinshuk Gupta",
    role: "Contributor",
    imageUrl: "/community/contributors/Kinshuk Gupta.jpg",
  },
];

const MemberCard = ({ name, role, github, linkedin, imageUrl }: Member) => (
  <div className="glass-card rounded-xl p-6 hover:glow-primary hover:-translate-y-2 transition-all duration-300 group">
    {imageUrl ? (
      <img
        src={imageUrl}
        alt={name}
        className="w-24 h-24 md:w-28 md:h-28 rounded-full mx-auto mb-4 object-cover border-2 border-primary/60 shadow-lg transform transition-transform duration-300 group-hover:scale-105"
      />
    ) : (
      <div className="w-20 h-20 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-primary-foreground">
        {name
          .split(" ")
          .map((n) => n[0])
          .join("")}
      </div>
    )}
    <h3 className="text-lg font-semibold text-foreground text-center group-hover:text-primary transition-colors">
      {name}
    </h3>
    <p className="text-muted-foreground text-sm text-center mb-4">{role}</p>
    {(github || linkedin) && (
      <div className="flex justify-center gap-3 mt-2">
        {github && (
          <a
            href={github}
            className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
          >
            <Github className="w-4 h-4" />
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        )}
      </div>
    )}
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
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {coordinators.map((member, index) => (
                <MemberCard key={index} {...member} />
              ))}
            </div>
          </div>

          {/* Core Members */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Core Members</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {coreMembers.map((member, index) => (
                <MemberCard key={index} {...member} />
              ))}
            </div>
          </div>

          {/* Contributors */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Contributors</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {contributors.map((member, index) => (
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
