import React from "react";
import {
  Brain,
  Home,
  Heart,
  BarChart3,
  Zap,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const Navigation = ({
  currentPage,
  setCurrentPage,
  user,
  setIsLoggedIn,
  showMobileMenu,
  setShowMobileMenu,
}) => (
  <nav className="nav-bar">
    <div className="nav-container">
      <div className="nav-row">
        <div className="nav-brand">
          <div className="nav-logo-bg">
            <Brain className="nav-logo" />
          </div>
          <span className="nav-title">Stress Slayer</span>
        </div>

        <div className="nav-links">
          <button
            onClick={() => setCurrentPage("dashboard")}
            className={`nav-link${
              currentPage === "dashboard" ? " nav-link-active" : ""
            }`}
          >
            <Home className="nav-link-icon" />
            <span>Dashboard</span>
          </button>
          <button
            onClick={() => setCurrentPage("mood")}
            className={`nav-link${
              currentPage === "mood" ? " nav-link-active" : ""
            }`}
          >
            <Heart className="nav-link-icon" />
            <span>Mood Check</span>
          </button>
          <button
            onClick={() => setCurrentPage("profile")}
            className={`nav-link${
              currentPage === "profile" ? " nav-link-active" : ""
            }`}
          >
            <BarChart3 className="nav-link-icon" />
            <span>Profile</span>
          </button>
        </div>

        <div className="nav-actions">
          <div className="nav-xp">
            <Zap className="nav-xp-icon" />
            <span className="nav-xp-text">{user.xp} XP</span>
          </div>
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="nav-mobile-toggle"
          >
            {showMobileMenu ? (
              <X className="nav-mobile-icon" />
            ) : (
              <Menu className="nav-mobile-icon" />
            )}
          </button>
          <button onClick={() => setIsLoggedIn(false)} className="nav-logout">
            <LogOut className="nav-link-icon" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="nav-mobile-menu">
          <div className="nav-mobile-links">
            <button
              onClick={() => {
                setCurrentPage("dashboard");
                setShowMobileMenu(false);
              }}
              className="nav-mobile-link"
            >
              <Home className="nav-link-icon" />
              <span>Dashboard</span>
            </button>
            <button
              onClick={() => {
                setCurrentPage("mood");
                setShowMobileMenu(false);
              }}
              className="nav-mobile-link"
            >
              <Heart className="nav-link-icon" />
              <span>Mood Check</span>
            </button>
            <button
              onClick={() => {
                setCurrentPage("profile");
                setShowMobileMenu(false);
              }}
              className="nav-mobile-link"
            >
              <BarChart3 className="nav-link-icon" />
              <span>Profile</span>
            </button>
          </div>
        </div>
      )}
    </div>
  </nav>
);

export default Navigation;
