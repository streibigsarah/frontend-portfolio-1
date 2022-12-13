import { Link, NavLink } from "react-router-dom";

//navigationbar and funkfions changes when loggedin
export default function Nav({ isAuth, setIsAuth }) {
  function handleSignOut() {
    setIsAuth(false);
    localStorage.removeItem("isAuth"); // reset localStorage
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
