import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdatePage() {
  const params = useParams();
  const [customer, setCustomer] = useState("");
  const [period, setPeriod] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [roles, setRoles] = useState("");
  const navigate = useNavigate();
  const url = `https://portfolio-1d6ff-default-rtdb.europe-west1.firebasedatabase.app/projects${params.id}.json`;

  useEffect(() => {
    async function getProject() {
      const response = await fetch(url); // read one project from firebase
      const project = await response.json();
      setCustomer(project.customer);
      setPeriod(project.period);
      setDescription(project.description);
      setTechnologies(project.technologies);
      setRoles(project.roles);
      // set the state with fetched data
    }
    getProject();
  }, [url]); // <--- "[]" VERY IMPORTANT!!!

  async function updateProject(event) {
    event.preventDefault();
    const newProject = {
      // key/model: value from state
      customer: customer,
      period: period,
      description: description,
      technologies: technologies,
      roles: roles,
    };
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(newProject),
    });
    if (response.ok) {
      navigate("/");
    }
  }

  return (
    <section className="page">
      <h1>Update project</h1>
      <form>
        <input
          type="text"
          value={customer}
          placeholder="Type customer"
          onChange={(e) => setCustomer(e.target.value)}
        />
        <input
          type="text"
          value={period}
          placeholder="Type period"
          onChange={(e) => setPeriod(e.target.value)}
        />
        <input
          type="text"
          value={description}
          placeholder="Type description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          value={technologies}
          placeholder="Type technologies"
          onChange={(e) => setTechnologies(e.target.value)}
        />
        <input
          type="text"
          value={roles}
          placeholder="Type roles"
          onChange={(e) => setRoles(e.target.value)}
        />
        <button classmodel="btn-save" onClick={updateProject}>
          Save
        </button>
      </form>
    </section>
  );
}
