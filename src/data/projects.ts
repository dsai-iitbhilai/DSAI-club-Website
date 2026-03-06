export type ProjectStatus = "Active" | "Completed";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  github: string;
};

export const projects: Project[] = [
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
