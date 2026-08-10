import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/login.css";
import { toast } from "react-toastify";
import { useAuth } from "../Context/AuthContext";
import Logo from "../Components/Logo";
import { AlertCircle, LogIn } from "lucide-react";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
    general: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError((prev) => ({
      ...prev,
      [name]: "",
      general: "",
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    let newError = {
      email: "",
      password: "",
      general: "",
    };

    if (!formData.email.trim()) {
      newError.email = "Please enter your email.";
    }

    if (!formData.password.trim()) {
      newError.password = "Please enter your password.";
    } 

    if (newError.email || newError.password) {
      setError(newError);
      return;
    }


    setLoading(true);

    const result = await login(formData);

    //console.log(result)
    if (result.success) {
      toast.success(result.message);
      navigate("/dashboard");
    } else {
      toast.error(result.message);
    }

  };

  return (
    <div className="fm-login fm-root">
      <section className="fm-login-hero">
        <Logo onDark />

        <div>
          <h2>Keep every vehicle, driver and trip in one place.</h2>

          <p>
            Real-time fleet visibility, dispatch control and maintenance
            tracking for teams that move fast.
          </p>
        </div>

        <div className="fm-hero-stats">
          <div>
            <span className="n">24/7</span>
            <span className="l">Live tracking</span>
          </div>

          <div>
            <span className="n">4</span>
            <span className="l">Role workspaces</span>
          </div>

          <div>
            <span className="n">99.9%</span>
            <span className="l">Uptime target</span>
          </div>
        </div>
      </section>

      <section className="fm-login-panel">
        <div className="fm-login-card">
          <Logo />

          <h1>Sign in to your workspace</h1>

          <p className="sub">
            Use your company credentials to continue.
          </p>

          <form onSubmit={handleLogin}>
            <div className="fm-field">
              <label htmlFor="email">Email address</label>

              <input id="email" name="email" type="email" className="fm-input" placeholder="you@company.com"
                value={formData.email} onChange={handleChange} />

              {error.email && (
                <small className="error-text">{error.email}</small>
              )}
            </div>

            <div className="fm-field">
              <label htmlFor="password">Password</label>

              <div className="fm-input-wrap">
                <input id="password" name="password" type="password" className="fm-input has-action" placeholder="*******"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                />
              </div>

              {error.password && (
                <small className="error-text">{error.password}</small>
              )}
            </div>

            <button className="fm-btn" type="submit" >
              <LogIn size={18} />
              Sign In
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;