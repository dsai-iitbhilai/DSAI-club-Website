import { ExternalLink, BookOpen, Code, Brain, Database, BarChart3, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const roadmaps = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "From basics of statistics to advanced ML algorithms",
    steps: ["Python Basics", "Statistics & Probability", "Scikit-learn", "Model Evaluation", "Feature Engineering"],
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Cpu,
    title: "Deep Learning",
    description: "Neural networks, CNNs, RNNs, and Transformers",
    steps: ["Neural Network Basics", "TensorFlow/PyTorch", "CNNs", "RNNs & LSTMs", "Transformers"],
    color: "from-chart-2/20 to-chart-2/5",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "ETL pipelines, data warehousing, and big data",
    steps: ["SQL Mastery", "ETL Concepts", "Apache Spark", "Data Warehousing", "Cloud Platforms"],
    color: "from-chart-3/20 to-chart-3/5",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    description: "Exploratory analysis and visualization",
    steps: ["Pandas & NumPy", "Data Cleaning", "EDA Techniques", "Visualization", "Statistical Testing"],
    color: "from-chart-4/20 to-chart-4/5",
  },
];

const resources = [
  {
    category: "Courses",
    items: [
      { title: "Andrew Ng's ML Course", type: "Course", link: "#" },
      { title: "Fast.ai Deep Learning", type: "Course", link: "#" },
      { title: "CS229 Stanford", type: "Course", link: "#" },
    ],
  },
  {
    category: "Books",
    items: [
      { title: "Hands-On ML with Scikit-Learn", type: "Book", link: "#" },
      { title: "Deep Learning by Goodfellow", type: "Book", link: "#" },
      { title: "Python for Data Analysis", type: "Book", link: "#" },
    ],
  },
  {
    category: "Practice",
    items: [
      { title: "Kaggle Competitions", type: "Platform", link: "#" },
      { title: "LeetCode ML Track", type: "Platform", link: "#" },
      { title: "HackerRank AI", type: "Platform", link: "#" },
    ],
  },
  {
    category: "Tools",
    items: [
      { title: "Google Colab", type: "Tool", link: "#" },
      { title: "Jupyter Notebooks", type: "Tool", link: "#" },
      { title: "Weights & Biases", type: "Tool", link: "#" },
    ],
  },
];

const Resources = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Learn & Grow</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2">
              Resources & <span className="text-gradient">Roadmaps</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Curated learning paths and resources to help you master 
              data science and artificial intelligence.
            </p>
          </div>

          {/* Roadmaps */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
              <Code className="w-6 h-6 text-primary" />
              Learning Roadmaps
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {roadmaps.map((roadmap, index) => (
                <div
                  key={index}
                  className="glass-card rounded-xl overflow-hidden hover:glow-primary transition-all group"
                >
                  <div className={`p-6 bg-gradient-to-br ${roadmap.color}`}>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center">
                        <roadmap.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{roadmap.title}</h3>
                        <p className="text-muted-foreground text-sm">{roadmap.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 flex-wrap">
                      {roadmap.steps.map((step, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="px-3 py-1 text-xs rounded-full bg-secondary text-foreground">
                            {step}
                          </span>
                          {i < roadmap.steps.length - 1 && (
                            <span className="text-muted-foreground">→</span>
                          )}
                        </div>
                      ))}
                    </div>
                    <Button variant="link" className="text-primary p-0 h-auto gap-1 mt-4">
                      View Full Roadmap <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resources Grid */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary" />
              Recommended Resources
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((category, index) => (
                <div key={index} className="glass-card rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li key={i}>
                        <a
                          href={item.link}
                          className="flex items-center justify-between group"
                        >
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors text-sm">
                            {item.title}
                          </span>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
