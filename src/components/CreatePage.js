import { useState } from "react";
import { useNavigate } from "react-router-dom";

//a variable for each property value of the project is difined
export default function CreatePage() {
  const [customer, setCustomer] = useState(""); //holding the customer data and setting the new customer data
  const [period, setPeriod] = useState("");
  const [description, setDescription] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [roles, setRoles] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  async function createProject(event) {
    //a function with callback- event: An HTML button was clicked
    event.preventDefault();

    const newProject = {
      // key/name: value from state-the customer data is going in the customer value
      customer: customer,
      period: period,
      description: description,
      responsibilities: responsibilities,
      technologies: technologies,
      roles: roles,
      location: location,
    };

    const response = await fetch(
      //whaiting for the new peoject to be posted to database
      "https://portfolio-1d6ff-default-rtdb.europe-west1.firebasedatabase.app/projects.json",
      {
        method: "POST",
        body: JSON.stringify(newProject),
      }
    );
    if (response.ok) {
      navigate("/"); //When the new project is posted the user is returned to the homepage
    }
  }

  return (
    <section className="page">
      <div className="tile">
        <h1>Create new project</h1>
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
          <button className="btn-save" onClick={createProject}>
            Save
          </button>
        </form>
      </div>
    </section>
  );
}

//user action, onclick will save new project
