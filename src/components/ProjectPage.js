import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProjectPage() {
  const [project, setProject] = useState([]); // state to handle the data (project)
  const params = useParams();
  const url = `https://portfolio-1d6ff-default-rtdb.europe-west1.firebasedatabase.app/projects/${params.id}.json`;
  const navigate = useNavigate();

  //the side effect - fetch project
  useEffect(() => {
    async function getProject() {
      const response = await fetch(url); // read one project from firebase
      const data = await response.json();
      setProject(data); // set the state with fetched data
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
      <div>
        <h1>Project details</h1>
        <article className="project-detail">
          <h4>Customer:</h4>
          <p>{project.customer}</p>
          <h4>Location:</h4>
          <p>{project.location}</p>
          <h4>Period:</h4>
          <p>Period{project.period}</p>
          <h4>Description:</h4>
          <p>Description{project.description}</p>
          <h4>Responsibilities:</h4>
          <p>responsibilities{project.responsibilities}</p>
          <h4>Technologies:</h4>
          <p>Technologies{project.technologies}</p>
          <h4>Roles:</h4>
          <p>Roles{project.roles}</p>
          <button className="btn-outline" onClick={deleteProject}>
            Delete project
          </button>
        </article>
      </div>
    </section>
  );
}
