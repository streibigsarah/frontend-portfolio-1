import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignInPage({ setIsAuth }) {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function signIn(event) {
    //Onsubmit starts signIn event
    event.preventDefault();
    const mail = event.target.mail.value;
    const password = event.target.password.value;

    if (mail === "admin@mail.dk" && password === "torben") {
      //if sign in information i correct (true)- navigates to HomePage
      setIsAuth(true);
      localStorage.setItem("isAuth", true);
      navigate("/");
    } else {
      setErrorMessage("Wrong mail or password.");
    }
  }
  return (
    <section className="page">
      <h1>Sign In</h1>
      <form onSubmit={signIn}>
        <input type="email" name="mail" placeholder="Type your mail" />
        <input
          type="password"
          name="password"
          placeholder="Type your password"
        />
        <p className="text-error">{errorMessage}</p>
        <button id="">Sign in</button>
      </form>
    </section>
  );
}
