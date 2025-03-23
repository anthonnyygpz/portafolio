import Default from "../layouts/default";
import { Projects } from "../sections/projects";
import { Skills } from "../sections/skills";
import { TitleMain } from "../sections/titleMain";
import { Contact } from "../sections/contact";

const Main = () => {
  return (
    <Default>
      <TitleMain />
      <Skills />
      <Projects />
      <Contact />
    </Default>
  );
};

export default Main;
