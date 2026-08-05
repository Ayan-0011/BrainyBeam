import { useEffect, useRef, useState } from "react";
import { Menu, Bell, ChevronDown, LogOut, User } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar({ user, role, onMenuClick, onLogout }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const initials = (user?.name || "?")
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <header className={styles.navbar}>
      <button
        className={styles.menuBtn}
        onClick={onMenuClick}
        aria-label="Toggle menu"
      >
        <Menu size={22} />
      </button>

      <div className={styles.spacer} />

      <button className={styles.iconBtn} aria-label="Notifications">
        <Bell size={20} />
        <span className={styles.dot} />
      </button>

      <div className={styles.profileWrap} ref={dropdownRef}>
        <button
          className={styles.profileBtn}
          onClick={() => setDropdownOpen((o) => !o)}
        >
          <span className={styles.avatar}>{initials}</span>
          <span className={styles.profileText}>
            <span className={styles.name}>{user?.name || "User"}</span>
            <span className={styles.roleBadge}>{user?.role}</span>
          </span>
          <ChevronDown size={16} />
        </button>

        {dropdownOpen && (
          <div className={styles.dropdown}>
            <div className={styles.dropdownItem}>
              <User size={16} />
              <span>Profile</span>
            </div>
            <button className={styles.dropdownItem} onClick={onLogout}>
              <LogOut size={16} />
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
