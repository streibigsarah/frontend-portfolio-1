import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import ProjectPage from "./components/ProjectPage";
import CreatePage from "./components/CreatePage";
import HomePage from "./components/HomePage";
import UpdatePage from "./components/UpdatePage";
import "./App.css";

function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/update" element={<UpdatePage />} />
        <Route path="project/:id" element={<ProjectPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
}

export default App;
