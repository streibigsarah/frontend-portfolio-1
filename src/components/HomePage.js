import { useEffect, useState } from "react";
import Project from "../components/Project";

//() function automaticly set
export default function HomePage() {
  const [projects, setProjects] = useState([]); // state to handle the data (projects)
  // project: name of the state
  // setProjects: name of the function to set the state
  const [showDenmark, setShowDenmark] = useState(true);
  const [showForeignCountry, setShowForeignCountry] = useState(true);

  //the side effect - fetch projects -  By using this Hook, you tell React that your component needs to do something after render(gengivelse).
  useEffect(() => {
    getData();
  }, []); // <--- "[]" VERY IMPORTANT!!!

  async function getData() {
    const response = await fetch(
      "https://portfolio-1d6ff-default-rtdb.europe-west1.firebasedatabase.app/projects.json"
    ); // read all projects from firebase
    const data = await response.json();
    const array = Object.keys(data).map((key) => ({ id: key, ...data[key] })); // from object to array
    setProjects(array); // set the state with fetched data
  }
  //checkbox filter
  let projectsToDisplay = [...projects];
  if (showDenmark === false) {
    projectsToDisplay = projectsToDisplay.filter(
      (project) => project.location.includes("Denmark") === false
    );
  }
  if (showForeignCountry === false) {
    projectsToDisplay = projectsToDisplay.filter((project) =>
      project.location.includes("Denmark")
    );
  }

  return (
    <section className="page">
      <div className="tile" id="simple">
        <h1>Torben Streibig Nielsen</h1>
        <img
          src="https://static.wixstatic.com/media/8233f0_6f10c4899e4e4a8590b6e3a42bb37cf4~mv2.jpg"
          alt="portrait torben"
        />
      </div>
      <div className="tile">
        <h2>Senior PL/SQL developer</h2>
        <p>
          Very experienced PL/SQL developer and designer with focus on
          implementation, analysis, ETL and performance optimization and tuning.
          Strong background in Financial Services and Telecom. I have strong
          analytical skills and focus on business integration. Routine in
          working with agile methods like Scrum, Kanban and LEAN. Technologies:
        </p>
        <ul>
          <li>Oracle 10g, 11g, 12c,</li>
          <li>PL/SQL</li>
          <li>SQL</li>
          <li>Quest Toad</li>
          <li>Shell Script</li>
        </ul>
      </div>
      <div className="tile">
        <h3>Projects</h3>
        <section className="checkbox">
          <label id="checkbox">
            <input
              type="checkbox"
              checked={showDenmark}
              onChange={() => setShowDenmark(!showDenmark)}
            />
            Denmark
          </label>
          <label id="checkbox">
            <input
              type="checkbox"
              checked={showForeignCountry}
              onChange={() => setShowForeignCountry(!showForeignCountry)}
            />
            Foreign Country
          </label>
        </section>

        <section className="grid-container">
          {projectsToDisplay.map((projectObj) => (
            <Project project={projectObj} key={projectObj.id} />
          ))}
        </section>
      </div>
    </section>
  );
}
