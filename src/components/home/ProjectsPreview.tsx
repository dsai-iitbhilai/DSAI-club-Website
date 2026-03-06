import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const statusColors: Record<string, string> = {
  Active: "bg-chart-2/20 text-chart-2",
  Completed: "bg-primary/20 text-primary",
};

const ProjectsPreview = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12 animate-slide-up">
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
          {projects.slice(0, 3).map((project, index) => (
            <div
              key={index}
              className="group glass-card rounded-xl p-6 hover:glow-primary hover:-translate-y-2 transition-all duration-300 animate-slide-up flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
                  {project.status}
                </span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>

              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Button asChild variant="link" className="text-primary p-0 h-auto gap-1 w-fit">
                <a href={project.github} target="_blank" rel="noreferrer">
                  View Details <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
