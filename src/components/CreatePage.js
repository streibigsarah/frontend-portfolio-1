import { useState } from "react";
import { useNavigate } from "react-router-dom";

//customer: name of the state
//setCustemer: name of the function to set the state
export default function CreatePage() {
  const [customer, setCustomer] = useState("");
  const [period, setPeriod] = useState("");
  const [description, setDescription] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [roles, setRoles] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  async function createProject(event) {
    //event: a HTML button was clicked
    //async:function with callback
    event.preventDefault();

    const newProject = {
      // property value from state equals property value of new state
      customer: customer,
      period: period,
      description: description,
      responsibilities: responsibilities,
      technologies: technologies,
      roles: roles,
      location: location,
    };

    const response = await fetch(
      //whaiting for the new object (project) to be posted
      "https://portfolio-1d6ff-default-rtdb.europe-west1.firebasedatabase.app/projects.json",
      {
        method: "POST",
        body: JSON.stringify(newProject), //converts a JavaScript value to a JSON string
      }
    );
    if (response.ok) {
      navigate("/"); //When the new project is posted you return to HomePage
    }
  }
  //form to fill with new project details - onClick submit new project to database
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
