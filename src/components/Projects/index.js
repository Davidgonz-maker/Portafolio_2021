import { ProjectsList } from "./ProjectsList";
import { ProjectsDesc } from "./ProjectsDesc";
import "./projects.css";

const Projects = () => {
  return (
    <section className="projects">
      <ProjectsDesc />
      <ProjectsList />
    </section>
  );
};

export { Projects };
