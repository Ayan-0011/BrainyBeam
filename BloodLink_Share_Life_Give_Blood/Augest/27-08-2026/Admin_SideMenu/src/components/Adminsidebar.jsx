import "./AdminSidebar.css";
import { BarChart3, Bell, Droplets, FileText, HeartPlus, LayoutDashboard, LogOut, ThumbsUp, User, Users, Warehouse,} from "lucide-react";

const AdminSidebar = () => {
  return (
    <aside className="admin-sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">
          <HeartPlus size={25} />
        </div>

        <div>
          <h2>Blood Share</h2>
          <span>ADMIN PANEL</span>
        </div>
      </div>

      <div className="sidebar-menu">
        <a href="/admin/dashboard" className="sidebar-link active">
          <LayoutDashboard size={19} />
          <span>Dashboard</span>
        </a>

        <a href="/admin/users" className="sidebar-link">
          <Users size={19} />
          <span>Users</span>
        </a>

        <a href="/admin/donors" className="sidebar-link">
          <ThumbsUp size={19} />
          <span>Donors</span>
        </a>


        <div className="sidebar-accordion">

          <div className="accordion"
            id="bloodAccordion" >
            <div className="accordion-item">
              <h2 className="accordion-header">

                <button
                  className="accordion-button collapsed sidebar-link"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#bloodMenu"
                  aria-expanded="false"
                  aria-controls="bloodMenu"
                >
                  <Droplets size={19} />
                  <span>Blood Management</span>
                </button>

              </h2>

              <div
                id="bloodMenu"
                className="accordion-collapse collapse"
                data-bs-parent="#bloodAccordion"
              >

                <div className="submenu">
                  <a href="/admin/blood-stock">
                    <Warehouse size={16} />
                    Blood Stock
                  </a>

                  <a href="/admin/blood-requests">
                    <Bell size={16} />
                    Blood Requests
                  </a>

                  <a href="/admin/donations">
                    <Droplets size={16} />
                    Donations
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="/admin/reports" className="sidebar-link">
          <FileText size={19} />
          <span>Reports</span>
        </a>



      </div>

      {/* Bottom Profile */}
      <div className="sidebar-bottom">

        <a href="/logout" className="logout-btn">
          <LogOut size={18} />
          <span>Logout</span>
        </a>

      </div>

    </aside>
  );
};

export default AdminSidebar;