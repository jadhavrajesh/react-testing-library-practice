import "./App.css";
import { Skills } from "./components/Skills/Skills";
import { skills as SkillsData } from "./components/Skills/data/";
import { Application } from "./components/Application/Application";

function App() {
  return (
    <>
      {/* <Skills skills={SkillsData} />; */}
      <Application />
    </>
  );
}

export default App;
