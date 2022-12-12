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

//function to display the SPA in browser - isAuth will display either the logged in or out UI - The code to be executed, by the function, is placed inside curly brackets: {} - Function parameters are listed inside the parentheses () in the function definition.
//Function expressions will execute automatically if the expression is followed by ().
//React Router DOM is an npm package that enables you to implement dynamic routing in a web app.
//It allows you to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React.
function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth")); // default value comes from localStorage -localStorage: data stored in the browser will remain even when the browser window is closed. Like login data. usestate contains the login data

  return (
    <main>
      <Nav isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/update/:id" element={<UpdatePage />} />
        <Route path="projects/:id" element={<ProjectPage />} />
        <Route path="/sign-in" element={<SignInPage setIsAuth={setIsAuth} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
}

export default App;
