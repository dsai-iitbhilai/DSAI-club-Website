import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Face Recognition System",
    description: "AI-powered facial recognition for campus security and attendance.",
    tags: ["Computer Vision", "Deep Learning"],
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Sentiment Analysis",
    description: "NLP model to analyze social media sentiment for brand monitoring.",
    tags: ["NLP", "Machine Learning"],
    color: "from-chart-2/20 to-chart-2/5",
  },
  {
    title: "Stock Price Predictor",
    description: "Time series forecasting model for stock market predictions.",
    tags: ["Deep Learning", "Finance"],
    color: "from-chart-3/20 to-chart-3/5",
  },
];

const ProjectsPreview = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Projects</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              We always strive towards the benefit
              <br className="hidden md:block" />
              of society with our projects.
            </h2>
          </div>
          <Link to="/projects">
            <Button variant="outline" className="border-border text-foreground hover:bg-secondary gap-2">
              View all Projects
              <ExternalLink className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass-card rounded-xl overflow-hidden hover:glow-primary transition-all duration-300"
            >
              <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                  <span className="text-2xl font-bold text-primary-foreground">{index + 1}</span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="link" className="text-primary p-0 h-auto gap-1">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
