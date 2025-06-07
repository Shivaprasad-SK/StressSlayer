import React from "react";
import { User, Award, Star, TrendingUp, Heart, Trophy } from "lucide-react";

const Profile = ({ user }) => (
  <div className="profile-bg">
    <div className="profile-container">
      <div className="profile-header">
        <h1 className="profile-title">Your Progress Dashboard 📊</h1>
        <p className="profile-subtitle">Track your mental wellness journey</p>
      </div>

      {/* Profile Overview */}
      <div className="profile-overview">
        <div className="profile-overview-row">
          <div className="profile-avatar">
            <User className="profile-avatar-icon" />
          </div>
          <div className="profile-overview-info">
            <h2 className="profile-name">{user.name}</h2>
            <p className="profile-role">Mental Wellness Champion</p>
            <div className="profile-stats">
              <div className="profile-stat profile-stat-level">
                <span>Level {user.level}</span>
              </div>
              <div className="profile-stat profile-stat-streak">
                <span>{user.streak} Day Streak</span>
              </div>
              <div className="profile-stat profile-stat-tasks">
                <span>{user.totalTasks} Tasks Done</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Badges Section */}
      <div className="profile-badges-section">
        <h3 className="profile-badges-title">
          <Award className="profile-badges-title-icon" />
          Your Achievements
        </h3>
        <div className="profile-badges-grid">
          {user.badges.map((badge, index) => (
            <div key={index} className="profile-badge-card">
              <Star className="profile-badge-icon" />
              <h4 className="profile-badge-name">{badge}</h4>
              <p className="profile-badge-desc">Earned this achievement</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="profile-stats-grid">
        {/* Weekly Progress */}
        <div className="profile-stats-card">
          <h3 className="profile-stats-card-title">
            <TrendingUp className="profile-stats-card-title-icon" />
            Weekly Progress
          </h3>
          <div className="profile-weekly-progress-list">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
              (day, index) => (
                <div key={day} className="profile-weekly-progress-row">
                  <span className="profile-weekly-progress-day">
                    {day}
                    {index}
                  </span>
                  <div className="profile-weekly-progress-bar-bg">
                    <div
                      className="profile-weekly-progress-bar"
                      style={{ width: `${Math.random() * 100}%` }}
                    ></div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Recent Mood History */}
        <div className="profile-stats-card">
          <h3 className="profile-stats-card-title">
            <Heart className="profile-stats-card-title-icon-heart" />
            Recent Mood History
          </h3>
          <div className="profile-mood-history-list">
            {[
              {
                date: "2024-06-05",
                mood: "😊",
                level: "Low",
                color: "profile-mood-low",
              },
              {
                date: "2024-06-04",
                mood: "😐",
                level: "Moderate",
                color: "profile-mood-moderate",
              },
              {
                date: "2024-06-03",
                mood: "😰",
                level: "High",
                color: "profile-mood-high",
              },
              {
                date: "2024-06-02",
                mood: "😊",
                level: "Low",
                color: "profile-mood-low",
              },
              {
                date: "2024-06-01",
                mood: "😐",
                level: "Moderate",
                color: "profile-mood-moderate",
              },
            ].map((entry, index) => (
              <div key={index} className="profile-mood-history-row">
                <div className="profile-mood-history-row-left">
                  <span className="profile-mood-history-emoji">
                    {entry.mood}
                  </span>
                  <div>
                    <p className="profile-mood-history-date">{entry.date}</p>
                    <span
                      className={`profile-mood-history-level ${entry.color}`}
                    >
                      {entry.level} Stress
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="profile-leaderboard">
        <h3 className="profile-leaderboard-title">
          <Trophy className="profile-leaderboard-title-icon" />
          Global Leaderboard
        </h3>
        <div className="profile-leaderboard-list">
          {[
            { rank: 1, name: "Sarah Johnson", xp: 3450, avatar: "🏆" },
            { rank: 2, name: "Mike Chen", xp: 3200, avatar: "🥈" },
            {
              rank: 3,
              name: "Alex Chen (You)",
              xp: 2450,
              avatar: "🥉",
              isUser: true,
            },
            { rank: 4, name: "Emma Wilson", xp: 2100, avatar: "👤" },
            { rank: 5, name: "David Kim", xp: 1950, avatar: "👤" },
          ].map((player) => (
            <div
              key={player.rank}
              className={`profile-leaderboard-row${
                player.isUser ? " profile-leaderboard-row-user" : ""
              }`}
            >
              <div className="profile-leaderboard-row-left">
                <span className="profile-leaderboard-rank">#{player.rank}</span>
                <span className="profile-leaderboard-avatar">
                  {player.avatar}
                </span>
                <div>
                  <p
                    className={`profile-leaderboard-name${
                      player.isUser ? " profile-leaderboard-name-user" : ""
                    }`}
                  >
                    {player.name}
                  </p>
                  <p className="profile-leaderboard-xp">{player.xp} XP</p>
                </div>
              </div>
              {player.isUser && (
                <span className="profile-leaderboard-you">You</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
