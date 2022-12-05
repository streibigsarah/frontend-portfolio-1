import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProjectPage() {
  const [project, setProjects] = useState([]); // state to handle the data (project)
  const params = useParams();
  const url = `https://portfolio-1d6ff-default-rtdb.europe-west1.firebasedatabase.app/projects${params.id}.json`;
  const navigate = useNavigate();

  //the side effect - fetch project
  useEffect(() => {
    async function getProject() {
      const response = await fetch(url); // read one project from firebase
      const data = await response.json();
      setProjects(data); // set the state with fetched data
    }
    getProject();
  }, [url]); // <--- "[]" VERY IMPORTANT!!!

  async function deleteProject() {
    const response = await fetch(url, { method: "DELETE" });

    if (response.ok) {
      navigate("/"); // navigate back to home page
    }
  }

  return (
    <section className="page">
      <article className="project-detail">
        <section>
          <h1>{project.customer}</h1>
          <p>{project.location}</p>
          <p>{project.period}</p>
          <p>{project.description}</p>
          <p>{project.responsibilities}</p>
          <p>{project.technologies}</p>
          <p>{project.roles}</p>
          <button className="btn-outline" onClick={deleteProject}>
            Delete project
          </button>
        </section>
      </article>
    </section>
  );
}
