import Default from "../layouts/default";
import { Projects } from "../sections/projects";
import { Skills } from "../sections/skills";
import { TitleMain } from "../sections/titleMain";
import { Contact } from "../sections/contact";
import AboutMe from "../sections/aboutMe";

const Main = () => {
  return (
    <Default>
      <TitleMain />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </Default>
  );
};

export default Main;
