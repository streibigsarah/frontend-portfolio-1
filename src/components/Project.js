import { useNavigate } from "react-router-dom";

export default function Project({ project }) {
  const navigate = useNavigate();
  // person is a prop containing person data, ex:
  // {id: "...", image: "...", mail: "...", name: "...", phone: "...", title: "..."}

  function handleClick() {
    navigate(`projects/${project.id}`);
  }

  return (
    <article onClick={handleClick}>
      <h4>{project.customer}</h4>
      <p>{project.period}</p>
      <p>{project.description}</p>
      <p>{project.technologies}</p>
      <p>{project.roles}</p>
    </article>
  );
}
