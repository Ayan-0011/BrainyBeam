import { Truck } from "lucide-react";
import "../Style/Login.css"

export default function Logo({ onDark = false, subtitle = "Fleet Management" }) {
  return (
    <span className={onDark ? "fm-logo on-dark" : "fm-logo"}>
      <span className="fm-logo-mark">
        <Truck size={20} />
      </span>
      <span className="fm-logo-text">
        FleetOps
        <small>{subtitle}</small>
      </span>
    </span>
  );
}
