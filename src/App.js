import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//import of all pages and the navigation component
import Nav from "./components/Nav";
import ProjectPage from "./components/ProjectPage";
import CreatePage from "./components/CreatePage";
import HomePage from "./components/HomePage";
import UpdatePage from "./components/UpdatePage";
import SignInPage from "./components/SigInPage";

//Import of stylesheet
import "./App.css";

//Displaying the SPA in browser - isAuth will display either the Signed in or out UI version

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth")); // sign in information from "./components/SigInPage"

  return (
    <main>
      <Nav isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/update/:id" element={<UpdatePage />} />
        <Route path="projects/:id" element={<ProjectPage isAuth={isAuth} />} />
        <Route path="/sign-in" element={<SignInPage setIsAuth={setIsAuth} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
}

export default App;
