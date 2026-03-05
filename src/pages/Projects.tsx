import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const projects = [
  {
    title: "IntelliView",
    description:
      "AI-powered interview platform being built by the DSAI Club to simulate technical interviews and help students practice.",
    tags: ["TypeScript", "AI", "Web App"],
    status: "Active",
    github: "https://github.com/dsai-iitbhilai/IntelliView",
  },
  {
    title: "Cloudphysician",
    description:
      "Project aimed at addressing challenges in ICU care by leveraging machine learning and computer vision to extract vital signs from patient monitor images.",
    tags: ["Python", "Computer Vision", "Healthcare"],
    status: "Active",
    github: "https://github.com/dsai-iitbhilai/Cloudphysician",
  },
  {
    title: "FaceRec",
    description:
      "Face recognition system to be implemented in IIT Bhilai for secure identification and attendance use-cases.",
    tags: ["Jupyter Notebook", "Deep Learning", "Face Recognition"],
    status: "Completed",
    github: "https://github.com/dsai-iitbhilai/FaceRec",
  },
  {
    title: "yolov7-deepsort-tracking",
    description:
      "Modular codebase for object detection and tracking in videos using YOLOv7 and DeepSORT, ready for real-world deployment.",
    tags: ["Jupyter Notebook", "YOLOv7", "Tracking"],
    status: "Active",
    github: "https://github.com/dsai-iitbhilai/yolov7-deepsort-tracking",
  },
  {
    title: "Photo-Sharing-App",
    description:
      "Photo sharing web app that uses ML to group faces, organize group photos automatically, and make sharing easier.",
    tags: ["HTML", "Machine Learning", "Web App"],
    status: "Completed",
    github: "https://github.com/dsai-iitbhilai/Photo-Sharing-App",
  },
];

const statusColors: Record<string, string> = {
  Active: "bg-chart-2/20 text-chart-2",
  Completed: "bg-primary/20 text-primary",
};

const Projects = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Work</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2">
              Club <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Explore the innovative projects built by DSAI Club members. 
              From AI research to real-world applications.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 hover:glow-primary hover:-translate-y-2 transition-all duration-300 group flex flex-col animate-slide-up"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
                    {project.status}
                  </span>
                  <a
                    href={project.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>

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

                <Button variant="link" className="text-primary p-0 h-auto gap-1 w-fit">
                  View Details <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
