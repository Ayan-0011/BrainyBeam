import React from "react";
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import "./Alert.css";

const Alert = ({ type, message }) => {
  const getIcon = () => {
    if (type === "success") {
      return <CheckCircle size={20} />;
    }

    if (type === "error") {
      return <XCircle size={20} />;
    }

    return <AlertTriangle size={20} />;
  };

  return (
    <div className={`alert alert-${type}`}>
      <div className="alert-icon">
        {getIcon()}
      </div>

      <span>{message}</span>
    </div>
  );
};

export default Alert;