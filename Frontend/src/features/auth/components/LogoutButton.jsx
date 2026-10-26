import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

const LogoutButton = () => {
  const { handleLogout } = useAuth();
  const navigate = useNavigate();
  const [loggingOut, setLoggingOut] = useState(false);
  const [error, setError] = useState("");

  const onLogout = async () => {
    setLoggingOut(true);
    setError("");

    try {
      await handleLogout();
      navigate("/login", { replace: true });
    } catch {
      setError("Sign out failed. Please try again.");
    } finally {
      setLoggingOut(false);
    }
  };

  return (
    <div className="logout-control">
      <button
        type="button"
        className="logout-button"
        onClick={onLogout}
        disabled={loggingOut}
        title="Sign out"
      >
        <svg
          aria-hidden="true"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 17l5-5-5-5" />
          <path d="M15 12H3" />
          <path d="M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6" />
        </svg>
        <span>{loggingOut ? "Signing out..." : "Sign out"}</span>
      </button>
      {error && <span className="logout-error" role="alert">{error}</span>}
    </div>
  );
};

export default LogoutButton;