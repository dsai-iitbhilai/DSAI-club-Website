import { Target, Users, Lightbulb, Trophy, Calendar, MapPin } from "lucide-react";
import Layout from "@/components/layout/Layout";

const stats = [
  { value: "50+", label: "Active Members" },
  { value: "15+", label: "Projects" },
  { value: "20+", label: "Events Hosted" },
  { value: "5+", label: "Hackathon Wins" },
];

const values = [
  {
    icon: Target,
    title: "Mission Driven",
    description: "We aim to democratize data science and AI education, making it accessible to all students.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Building a supportive community where members learn from each other and grow together.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Encouraging creative solutions and cutting-edge research in AI and data science.",
  },
  {
    icon: Trophy,
    title: "Excellence",
    description: "Striving for excellence in everything we do, from workshops to project delivery.",
  },
];

const activities = [
  { title: "Weekly Workshops", description: "Hands-on sessions on ML, DL, and data analysis techniques." },
  { title: "Guest Lectures", description: "Industry experts sharing real-world experiences and insights." },
  { title: "Hackathons", description: "Regular participation in national and international competitions." },
  { title: "Paper Reading", description: "Discussion sessions on latest research papers in AI/ML." },
  { title: "Project Sprints", description: "Collaborative building of impactful real-world projects." },
  { title: "Mentorship", description: "Senior members guiding juniors in their learning journey." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2">
              The <span className="text-gradient">DSAI Club</span> Story
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Data Science and Artificial Intelligence Club is a student-run organization 
              dedicated to fostering a culture of learning, innovation, and collaboration 
              in the field of AI and data science.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center">
                <p className="text-4xl font-bold text-gradient">{stat.value}</p>
                <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="glass-card rounded-xl p-6 hover:glow-primary transition-all group">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:gradient-primary transition-all">
                    <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">What We Do</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activities.map((activity, index) => (
                <div key={index} className="glass-card rounded-xl p-6 border-l-4 border-primary">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{activity.title}</h3>
                  <p className="text-muted-foreground text-sm">{activity.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Meeting Schedule</p>
                  <p className="text-foreground font-medium">Every Saturday, 4:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">Room 301, CS Department</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
