import Banner from "../Banner/Banner";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Projects from "./../Projects/Projects";
import Skills from "./../Skills/Skills";

const Home = () => {
  return (
    <div>
      <Banner />
      <div id="Project">
        <Projects />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Education />
      </div>
      <div>
        <Experience />
      </div>
    </div>
  );
};

export default Home;
