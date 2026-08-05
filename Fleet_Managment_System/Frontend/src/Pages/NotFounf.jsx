import { Compass } from "lucide-react";
import { Link } from "react-router-dom";
import '../Style/NotFound.css'

export default function NotFound() {
  return (
    <div className="wrap">
      <Compass size={40} className="icon" />
      <h1 className="title">Page not found</h1>
      <p className="text">
        The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="link">
        Back to login
      </Link>
    </div>
  );
}
