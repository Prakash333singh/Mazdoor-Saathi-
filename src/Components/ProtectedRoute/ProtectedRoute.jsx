import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children, user }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (user === null) {
      navigate("/otp-verify", { replace: true });
    }
  }, [navigate, user]);
  return children;
}
