import { Book, ArrowUp } from "lucide-react";

interface ProjectCardProps {
  title: string;
  // issueNumber: string;
  // pageNumber: string;
  languages: string[];
  imageSrc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  // issueNumber,
  // pageNumber,
  languages,
  imageSrc,
}) => {
  return (
    <div className="relative group">
      <div className="bg-deep hover:bg-brown-500 text-brown-500 hover:text-deep transition-all group-hover:translate-y-[-21px] rounded-lg overflow-hidden shadow-lg">
        <div className="relative">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-56 object-cover  filter grayscale"
          />
          <div className="absolute bottom-0 left-0 w-full p-2 flex justify-between text-xs">
            {/* <span className="bg-deep">Issue {issueNumber}</span> */}
            {/* <span className="bg-deep">Page {pageNumber}</span> */}
          </div>
        </div>

        <div className="flex flex-col gap-4 p-4">
          <h3 className="text-2xl font-bold">{title}</h3>
          <div className="flex gap-2">
            {languages.map((lang: string, index: number) => (
              <p
                key={index}
                className="inline-flex items-center h-8 px-[18px] text-sm font-medium border border-brown-300 rounded-full"
              >
                {lang}
              </p>
            ))}
          </div>
          <div className="flex flex-rows gap-[6px] px-1 mt-[-4px]">
            <a
              href="https://github.com/HaaruuKI/OasisVirtualNew"
              className="flex flex-1 items-center justify-between group-hover:bg-blue-900 px-[18px] py-[12px] border border-brown-300  rounded-full font-semibold transition-colors"
            >
              <span className="flex items-center gap-2">
                <Book className="opacity-75" size={18} />
                Repositorio
              </span>
            </a>
            <a
              href="https://github.com/HaaruuKI/OasisVirtualNew"
              className="flex flex-1 items-center justify-between group-hover:bg-blue-900 px-[18px] py-[12px] border border-brown-300  rounded-full font-semibold transition-colors"
            >
              <span className="flex items-center gap-2 ">Pagina</span>

              <ArrowUp className="opacity-45" size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Oasis Virtual",
      issueNumber: "XX",
      pageNumber: "YY",
      languages: ["React", "FastApi", "python"],
      imageSrc: "https://picsum.photos/1280/900", // Using placeholder for demo
    },
    {
      id: 2,
      title: "Project Title 2",
      issueNumber: "XX",
      pageNumber: "YY",
      languages: ["React", "FastApi", "python"],
      imageSrc: "https://picsum.photos/1280/900", // Using placeholder for demo
    },

    {
      id: 3,
      title: "Project Title 3",
      issueNumber: "XX",
      pageNumber: "YY",
      languages: ["React", "FastApi", "python"],
      imageSrc: "https://picsum.photos/1280/900", // Using placeholder for demo
    },
  ];

  return (
    <section id="projects">
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              languages={project.languages}
              imageSrc={project.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
