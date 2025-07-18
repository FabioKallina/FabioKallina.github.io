import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Health Simple",
    description: "A simpler way of staying on top of your wellbeing",
    image: "/projects/project1.png",
    tags: ["React", "Node.js", "Express", "JWT", "Recharts", "MongoDB"],
    demoUrl: "https://healthsimple.onrender.com/",
    githubUrl: "https://github.com/FabioKallina/HealthSimple-Capstone",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "A weather app to display the current weather, hourly forecasts, and 5-day forecasts for any city in the world.",
    image: "/projects/project2.png",
    tags: ["React", "Recharts", "OpenWeatherMap API"],
    demoUrl: "https://xweather.onrender.com/",
    githubUrl: "https://github.com/FabioKallina/WeatherApp",
  },
  {
    id: 3,
    title: "HealthGPT",
    description: "Your personal AI Health Assistant.",
    image: "/projects/project5.png",
    tags: ["React", "OpenAPI", "Vite", "Node.js", "Express", "JWT", "MongoDB"],
    demoUrl: "https://xhealthgpt.onrender.com/",
    githubUrl: "https://github.com/FabioKallina/HealthGPT",
  },
  {
    id: 4,
    title: "Notes Nest",
    description: "Full-featured notes platform with user authentication.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Express", "Auth0", "EJS", "MongoDB"],
    demoUrl: "https://notesnest-jm3z.onrender.com/",
    githubUrl: "https://github.com/FabioKallina/NoteTakingApp",
  },
  {
    id: 5,
    title: "Go Lift",
    description: "Full-featured workout mobile app.",
    image: "/projects/project4.jpeg",
    tags: ["ReactNative", "Expo", "Vite"],
    githubUrl: "https://github.com/FabioKallina/goLift-ReactNative",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-sx card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500  group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20}/>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20}/>
                  </a>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/FabioKallina" target="_blank">
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
