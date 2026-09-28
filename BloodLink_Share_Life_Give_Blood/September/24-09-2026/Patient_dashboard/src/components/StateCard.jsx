import React from "react";
import "./StatCard.css";

function StatCard({ title, value, icon: Icon, trend, trendDirection = "up" }) {
  return (
    <div className="stat-card">
      <div className="stat-card-top">
        <p>{title}</p>
        {Icon && (
          <span className="stat-card-icon">
            <Icon size={16} strokeWidth={1.8} />
          </span>
        )}
      </div>

      <h2>{value}</h2>

      {trend && (
        <span className={`stat-card-trend ${trendDirection}`}>{trend}</span>
      )}
    </div>
  );
}

export default StatCard;