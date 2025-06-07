import React from "react";
import { Brain, Play } from "lucide-react";

const MoodCheck = ({
  moodInput,
  setMoodInput,
  handleMoodSubmit,
  stressLevel,
  currentTask,
  completeTask,
  setCurrentTask,
  setStressLevel,
}) => (
  <div className="mood-bg">
    <div className="mood-container">
      <div className="mood-header">
        <h1 className="mood-title">How are you feeling today? 💭</h1>
        <p className="mood-subtitle">
          Share your thoughts and let AI help you feel better
        </p>
      </div>

      <div className="mood-form">
        <div className="mood-form-group">
          <label className="mood-form-label">
            Tell me about your mood today:
          </label>
          <textarea
            value={moodInput}
            onChange={(e) => setMoodInput(e.target.value)}
            placeholder="I feel anxious about work today, or I'm feeling great and energetic..."
            className="mood-form-textarea"
          />
        </div>
        <button
          onClick={handleMoodSubmit}
          disabled={!moodInput.trim()}
          className="mood-form-btn"
        >
          <Brain className="mood-form-btn-icon" />
          <span>Analyze My Mood</span>
        </button>
      </div>

      {/* Stress Level Results */}
      {stressLevel && (
        <div className="mood-result animate-fadeIn">
          <h3 className="mood-result-title">AI Analysis Results</h3>
          <div className="mood-result-summary">
            <span className="mood-result-emoji">{stressLevel.emoji}</span>
            <div>
              <p className="mood-result-label">Stress Level:</p>
              <div className="mood-result-level">
                <div className={`mood-result-dot ${stressLevel.color}`}></div>
                <span className="mood-result-level-text">
                  {stressLevel.level}
                </span>
              </div>
            </div>
          </div>
          <div className="mood-result-bar-group">
            <div className="mood-result-bar-labels">
              <span>Low</span>
              <span>Moderate</span>
              <span>High</span>
            </div>
            <div className="mood-result-bar-bg">
              <div
                className={`mood-result-bar ${stressLevel.color}`}
                style={{
                  width:
                    stressLevel.level === "Low"
                      ? "25%"
                      : stressLevel.level === "Moderate"
                      ? "60%"
                      : "90%",
                }}
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* Task Recommendation */}
      {currentTask && (
        <div className="mood-task animate-slideUp">
          <h3 className="mood-task-title">Recommended Calming Task 🎯</h3>
          <div className="mood-task-card">
            <div className="mood-task-card-header">
              <div className="mood-task-card-icon-bg">
                <currentTask.icon className="mood-task-card-icon" />
              </div>
              <div>
                <h4 className="mood-task-card-type">{currentTask.type}</h4>
                <p className="mood-task-card-duration">
                  {currentTask.duration}
                </p>
              </div>
            </div>
            <p className="mood-task-card-desc">{currentTask.description}</p>
          </div>
          <div className="mood-task-actions">
            <button onClick={completeTask} className="mood-task-btn">
              <Play className="mood-task-btn-icon" />
              <span>Start Task (+50 XP)</span>
            </button>
            <button
              onClick={() => {
                setCurrentTask(null);
                setStressLevel(null);
              }}
              className="mood-task-btn-skip"
            >
              Skip
            </button>
          </div>
        </div>
      )}
    </div>
  </div>
);

export default MoodCheck;
