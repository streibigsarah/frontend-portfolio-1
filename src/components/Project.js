import { useNavigate } from "react-router-dom";

export default function Project({ project }) {
  const navigate = useNavigate();
  // project is a prop containing project data, ex:
  // {id: "...", customer, period etc "..."}

  //user action -click on a project prom the array on HomePage invokes function to navigate to the onclicked project(component) and display all proerties from the oncliked project id in projectPage.js
  function handleClick() {
    navigate(`projects/${project.id}`);
  }

  return (
    <article onClick={handleClick}>
      <h4>{project.customer}</h4>
      <p>{project.location}</p>
      <p>{project.period}</p>
      <h4>Project:</h4>
      <p>{project.description}</p>
      <h4>Responsibilities:</h4> <p>{project.responsibilities}</p>
      <h4>Technologies:</h4> <p>{project.technologies}</p>
      <h4>Roles:</h4> <p>{project.roles}</p>
    </article>
  );
}
