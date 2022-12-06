import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreatePage() {
  const navigate = useNavigate();
  const [customer, setCustomer] = useState("");
  const [period, setPeriod] = useState("");
  const [description, setDescription] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [roles, setRoles] = useState("");
  const [location, setLocation] = useState("");

  async function createProject(event) {
    event.preventDefault();

    const newProject = {
      // key/name: value from state
      customer: customer,
      period: period,
      description: description,
      responsibilities: responsibilities,
      technologies: technologies,
      roles: roles,
      location: location,
    };

    const response = await fetch(
      "https://portfolio-1d6ff-default-rtdb.europe-west1.firebasedatabase.app/projects.json",
      {
        method: "POST",
        body: JSON.stringify(newProject),
      }
    );
    if (response.ok) {
      navigate("/");
    }
  }

  return (
    <section className="page">
      <div className="tile">
        <h1>Create New project</h1>
        <form onSubmit={createProject}>
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
            value={responsibilities}
            placeholder="Type responsibilities"
            onChange={(e) => setResponsibilities(e.target.value)}
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
          <input
            type="text"
            value={location}
            placeholder="Type location"
            onChange={(e) => setLocation(e.target.value)}
          />
          <button>Create</button>
        </form>
      </div>
    </section>
  );
}
