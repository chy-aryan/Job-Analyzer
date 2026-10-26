import { Link, Outlet, useLocation } from "react-router";
import { useAuth } from "../hooks/useAuth";
import LogoutButton from "./LogoutButton";

const AppLayout = () => {
  const { user, loading } = useAuth();
  const { pathname } = useLocation();

  return (
    <>
      <header className="app-navbar">
        <Link className="app-navbar__brand" to={user ? "/" : "/login"}>
          <span className="app-navbar__mark" aria-hidden="true">IP</span>
          <span>Interview Prep</span>
        </Link>

        <nav className="app-navbar__links" aria-label="Main navigation">
          {loading ? (
            <span className="app-navbar__status" role="status">Checking session...</span>
          ) : user ? (
            <>
              <Link
                className={`app-navbar__link ${pathname === "/" || pathname.startsWith("/interview/") ? "is-active" : ""}`}
                to="/"
                aria-current={pathname === "/" || pathname.startsWith("/interview/") ? "page" : undefined}
              >
                My plans
              </Link>
              <span className="app-navbar__username">{user.username}</span>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link className={`app-navbar__link ${pathname === "/login" ? "is-active" : ""}`} to="/login">
                Sign in
              </Link>
              <Link className="app-navbar__signup" to="/register">Create account</Link>
            </>
          )}
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default AppLayout;