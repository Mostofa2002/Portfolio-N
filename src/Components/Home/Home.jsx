import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
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
      <div id="Skills">
        <Skills />
      </div>
      <div id="Education">
        <Education />
      </div>
      <div id="Experience">
        <Experience />
      </div>
      <Contact />
    </div>
  );
};

export default Home;
