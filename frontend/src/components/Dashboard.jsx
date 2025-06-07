import React from "react";
import {
  Trophy,
  Flame,
  Heart,
  Target,
  Calendar,
  ChevronRight,
  Award,
  Star,
  TrendingUp,
  Brain,
} from "lucide-react";

const Home = ({ user, setCurrentPage }) => (
  <div className="dashboard-bg">
    <div className="dashboard-container">
      {/* Welcome Section */}
      <div className="dashboard-welcome">
        <h1 className="dashboard-title">Welcome back, {user.name}! 👋</h1>
        <p className="dashboard-subtitle">
          Ready to continue your mental wellness journey?
        </p>
      </div>

      {/* Stats Cards */}
      <div className="dashboard-stats">
        {/* Level Card */}
        <div className="dashboard-card dashboard-card-level">
          <div className="dashboard-card-header">
            <Trophy className="dashboard-card-icon" />
            <span className="dashboard-card-value">Lv.{user.level}</span>
          </div>
          <p className="dashboard-card-label">Current Level</p>
          <div className="dashboard-progress-bg">
            <div
              className="dashboard-progress"
              style={{ width: `${(user.xp / user.nextLevelXP) * 100}%` }}
            ></div>
          </div>
          <p className="dashboard-card-xp">
            {user.xp}/{user.nextLevelXP} XP
          </p>
        </div>
        {/* Streak Card */}
        <div className="dashboard-card dashboard-card-streak">
          <div className="dashboard-card-header">
            <Flame className="dashboard-card-icon" />
            <span className="dashboard-card-value">{user.streak}</span>
          </div>
          <p className="dashboard-card-label">Day Streak</p>
          <p className="dashboard-card-xp">Keep it going! 🔥</p>
        </div>
        {/* Calmness Meter */}
        <div className="dashboard-card dashboard-card-calm">
          <div className="dashboard-card-header">
            <Heart className="dashboard-card-icon" />
            <span className="dashboard-card-value">{user.calmnessMeter}%</span>
          </div>
          <p className="dashboard-card-label">Calmness Meter</p>
          <div className="dashboard-progress-bg dashboard-progress-bg-calm">
            <div
              className="dashboard-progress"
              style={{ width: `${user.calmnessMeter}%` }}
            ></div>
          </div>
        </div>
        {/* Tasks Completed */}
        <div className="dashboard-card dashboard-card-tasks">
          <div className="dashboard-card-header">
            <Target className="dashboard-card-icon" />
            <span className="dashboard-card-value">{user.totalTasks}</span>
          </div>
          <p className="dashboard-card-label">Tasks Completed</p>
          <p className="dashboard-card-xp">Amazing progress! 🎯</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="dashboard-actions">
        {/* Daily Check-in */}
        <div className="dashboard-action-card">
          <h3 className="dashboard-action-title">
            <Calendar className="dashboard-action-icon" />
            Daily Check-in
          </h3>
          <p className="dashboard-action-desc">How are you feeling today?</p>
          <button
            onClick={() => setCurrentPage("mood")}
            className="dashboard-action-btn"
          >
            <Heart className="dashboard-action-btn-icon" />
            <span>Start Check-in</span>
            <ChevronRight className="dashboard-action-btn-icon" />
          </button>
        </div>
        {/* Badges */}
        <div className="dashboard-action-card">
          <h3 className="dashboard-action-title">
            <Award className="dashboard-action-icon dashboard-action-icon-badge" />
            Recent Badges
          </h3>
          <div className="dashboard-badges">
            {user.badges.slice(0, 3).map((badge, index) => (
              <div key={index} className="dashboard-badge">
                <Star className="dashboard-badge-icon" />
                <span className="dashboard-badge-label">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="dashboard-activity">
        <h3 className="dashboard-activity-title">
          <TrendingUp className="dashboard-activity-icon" />
          Recent Activity
        </h3>
        <div className="dashboard-activity-list">
          <div className="dashboard-activity-item dashboard-activity-item-meditation">
            <div className="dashboard-activity-item-icon-bg">
              <Brain className="dashboard-activity-item-icon" />
            </div>
            <div>
              <p className="dashboard-activity-item-title">
                Completed meditation session
              </p>
              <p className="dashboard-activity-item-desc">
                +50 XP • 2 hours ago
              </p>
            </div>
          </div>
          <div className="dashboard-activity-item dashboard-activity-item-breathing">
            <div className="dashboard-activity-item-icon-bg dashboard-activity-item-icon-bg-green">
              <Heart className="dashboard-activity-item-icon" />
            </div>
            <div>
              <p className="dashboard-activity-item-title">
                Finished breathing exercise
              </p>
              <p className="dashboard-activity-item-desc">
                +30 XP • 5 hours ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
