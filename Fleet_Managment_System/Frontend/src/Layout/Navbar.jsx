import { useEffect, useRef, useState } from "react";
import { Menu, Bell, ChevronDown, LogOut, User, Search, CalendarDays, X,} from "lucide-react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function getInitials(name = "") {
  return (
    name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((w) => w[0]?.toUpperCase())
      .join("") || "U"
  );
}

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
}

export default function Navbar({
  user,
  onMenuClick,
  onLogout,
  onSearch,
  notificationCount = 0,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    function handleEsc(e) {
      if (e.key === "Escape") setDropdownOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const firstName = user?.name?.split(" ")[0] || "there";
  const showImage = user?.profileImage && !imgFailed;

  return (
    <header className={styles.navbar}>
      <button
        className={styles.menuBtn}
        onClick={onMenuClick}
        aria-label="Toggle menu" >
        <Menu size={22} />
      </button>

      <div className={styles.greeting}>
        <p className={styles.greetingTitle}>
          {getGreeting()}, <span className={styles.greetingName}>{firstName}</span>
        </p>
        <span className={styles.greetingDate}>
          <CalendarDays size={13} aria-hidden="true" />
          {today}
        </span>
      </div>

      <div className={styles.spacer} />

      <label className={`${styles.search} ${searchOpen ? styles.searchOpen : ""}`} >
        <Search size={16} aria-hidden="true" />
        <input
          type="search"
          placeholder="Search vehicles, drivers, trips"
          aria-label="Search vehicles, drivers, trips"
          onChange={(e) => onSearch?.(e.target.value)}
        />
      </label>

      <button
        className={`${styles.iconBtn} ${styles.searchToggle}`}
        onClick={() => setSearchOpen((o) => !o)}
        aria-label={searchOpen ? "Close search" : "Open search"}
        aria-expanded={searchOpen} >
        {searchOpen ? <X size={20} /> : <Search size={20} />}
      </button>

      <button className={styles.iconBtn}
        aria-label={
          notificationCount
            ? `${notificationCount} unread notifications`
            : "Notifications"
        } >
        <Bell size={20} />
        {notificationCount > 0 && (
          <span className={styles.badge}>
            {notificationCount > 9 ? "9+" : notificationCount}
          </span>
        )}
      </button>

      <span className={styles.divider} aria-hidden="true" />

      <div className={styles.profileWrap} ref={dropdownRef}>
        <button className={styles.profileBtn} onClick={() => setDropdownOpen((o) => !o)} aria-haspopup="menu" aria-expanded={dropdownOpen}  >
          <span className={styles.avatar}>
            {showImage ? (
              <img src={user.profileImage} alt="" onError={() => setImgFailed(true)} />
            ) : (
              getInitials(user?.name)
            )}
          </span>
          <span className={styles.profileText}>
            <span className={styles.name}>{user?.name}</span>
            <span className={styles.role}>{user?.role}</span>
          </span>
          <ChevronDown
            size={16}
            className={`${styles.chevron} ${dropdownOpen ? styles.chevronOpen : ""}`}
          />
        </button>

        {dropdownOpen && (
          <div className={styles.dropdown} role="menu">
            <div className={styles.dropdownHead}>
              <span className={styles.dropdownName}>{user?.name}</span>
              {user?.email && (
                <span className={styles.dropdownEmail}>{user.email}</span>
              )}
            </div>

         
          
            <button className={`${styles.dropdownItem} ${styles.danger}`} role="menuitem"
              onClick={onLogout}  >
              <LogOut size={16} />
              <span>Log out</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}