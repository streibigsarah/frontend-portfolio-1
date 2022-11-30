import { useEffect, useState } from "react";
import Project from "../components/Project";

export default function HomePage() {
  const [projects, setProjects] = useState([]); // state to handle the data (users)
  // users: name of the state
  // setProjects: name of the function to set the state

  //the side effect - fetch projects
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://portfolio-1d6ff-default-rtdb.europe-west1.firebasedatabase.app/projects.json"
      ); // read all projects from firebase
      const data = await response.json();
      const array = Object.keys(data).map((key) => ({ id: key, ...data[key] })); // from object to array
      setProjects(array); // set the state with fetched data
    }
    getData();
  }, []); // <--- "[]" VERY IMPORTANT!!!

  return (
    <section className="page">
      <h1>Torben Streibig Nielsen</h1>
      <h2>Summery</h2>
      <p>
        Very experienced PL/SQL developer and designer with focus on
        implementation, analysis, ETL and performance optimization and tuning.
        Strong background in Financial Services and Telecom. I have strong
        analytical skills and focus on business integration. Routine in working
        with agile methods like Scrum, Kanban and LEAN. Technologies:
      </p>
      <ul>
        <li>Oracle 10g, 11g, 12c,</li>
        <li>PL/SQL</li>
        <li>SQL</li>
        <li>Quest Toad</li>
        <li>Shell Script</li>
      </ul>
      <h3>Projects</h3>

      <section className="grid-container">
        {projects.map((projectObj) => (
          <Project project={projectObj} key={projectObj.id} />
        ))}
      </section>
    </section>
  );
}
