import { Database, Cpu, LineChart, BrainCircuit } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Data Scraping",
    description: "Learn techniques to extract and process data from various sources efficiently.",
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    description: "Build and deploy ML models for real-world applications and research.",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "Forecast trends and make data-driven decisions with statistical models.",
  },
  {
    icon: BrainCircuit,
    title: "Deep Learning",
    description: "Explore neural networks, computer vision, and natural language processing.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Our Expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass-card rounded-xl p-6 hover:glow-primary transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:gradient-primary transition-all">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
