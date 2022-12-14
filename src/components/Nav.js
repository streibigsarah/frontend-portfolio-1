import { Link, NavLink } from "react-router-dom";

//navigation bar changes with authentication
export default function Nav({ isAuth, setIsAuth }) {
  function handleSignOut() {
    setIsAuth(false);
    localStorage.removeItem("isAuth");
  }

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isAuth ? (
        <>
          <NavLink to="/create">Create</NavLink>
          <Link onClick={handleSignOut}>Sign Out</Link>
        </>
      ) : (
        <NavLink to="/sign-in">Sign In</NavLink>
      )}
    </nav>
  );
}
