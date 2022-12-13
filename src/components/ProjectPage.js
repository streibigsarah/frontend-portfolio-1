import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProjectPage({ isAuth }) {
  const [project, setProject] = useState([]); // state to handle the data (project)
  const params = useParams(); //handle data with a specific parameter: project id
  const url = `https://portfolio-1d6ff-default-rtdb.europe-west1.firebasedatabase.app/projects/${params.id}.json`; //???Back-Tics Syntax ``defines a string $løse en ligning-beregne noget udfra id parameteret
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

  function showDeleteDialog() {
    const shouldDelete = window.confirm(
      `Do you want to delete "${project.name}"?`
    );
    if (shouldDelete) {
      deleteProject();
    }
  }

  async function deleteProject() {
    const response = await fetch(url, { method: "DELETE" });
    if (response.ok) {
      navigate("/"); // navigate back to home page
    }
  }

  //showing update form or page??
  function showUpdate() {
    navigate(`/update/${params.id}`);
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
          <p>{project.period}</p>
          <h4>Description:</h4>
          <p>Description{project.description}</p>
          <h4>Responsibilities:</h4>
          <p>{project.responsibilities}</p>
          <h4>Technologies:</h4>
          <p>{project.technologies}</p>
          <h4>Roles:</h4>
          <p>{project.roles}</p>
          {isAuth && (
            <>
              <button id="btn-outline" onClick={showUpdate}>
                Update project
              </button>
              <button id="btn-outline" onClick={showDeleteDialog}>
                Delete project
              </button>
            </>
          )}
        </article>
      </div>
    </section>
  );
}
