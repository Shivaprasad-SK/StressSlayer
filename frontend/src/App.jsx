import React, { useState } from "react";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import Home from "./components/Dashboard";
import MoodCheck from "./components/MoodCheck";
import Profile from "./components/Profile";
import { Brain, Heart, BookOpen, Droplets, Quote } from "lucide-react";
import "./components/styles1.css";

const initialUser = {
  name: "Alex Chen",
  xp: 2450,
  level: 7,
  nextLevelXP: 2600,
  streak: 12,
  calmnessMeter: 78,
  totalTasks: 34,
  badges: [
    "Mindful Starter",
    "Streak Master",
    "Calm Guru",
    "Task Slayer",
    "Mood Tracker",
  ],
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [user, setUser] = useState(initialUser);

  // Mood Check state
  const [moodInput, setMoodInput] = useState("");
  const [stressLevel, setStressLevel] = useState(null);
  const [currentTask, setCurrentTask] = useState(null);

  const analyzeStress = (text) => {
    const anxietyWords = [
      "anxious",
      "worried",
      "stressed",
      "overwhelmed",
      "panic",
    ];
    const sadWords = ["sad", "depressed", "down", "lonely", "tired"];
    const positiveWords = ["good", "great", "happy", "calm", "peaceful"];

    const lowerText = text.toLowerCase();
    let score = 0;

    anxietyWords.forEach((word) => {
      if (lowerText.includes(word)) score += 2;
    });
    sadWords.forEach((word) => {
      if (lowerText.includes(word)) score += 1.5;
    });
    positiveWords.forEach((word) => {
      if (lowerText.includes(word)) score -= 1;
    });

    if (score >= 3) return { level: "High", color: "bg-red-500", emoji: "😰" };
    if (score >= 1.5)
      return { level: "Moderate", color: "bg-yellow-500", emoji: "😐" };
    return { level: "Low", color: "bg-green-500", emoji: "😊" };
  };

  const getTaskRecommendation = (stressLevel) => {
    const tasks = {
      High: [
        {
          type: "Meditation",
          icon: Brain,
          duration: "10 min",
          description: "Deep breathing meditation",
        },
        {
          type: "Breathing",
          icon: Heart,
          duration: "5 min",
          description: "4-7-8 breathing exercise",
        },
      ],
      Moderate: [
        {
          type: "Breathing",
          icon: Heart,
          duration: "5 min",
          description: "Box breathing technique",
        },
        {
          type: "Journal",
          icon: BookOpen,
          duration: "3 min",
          description: "Gratitude journaling",
        },
      ],
      Low: [
        {
          type: "Hydrate",
          icon: Droplets,
          duration: "1 min",
          description: "Drink a glass of water",
        },
        {
          type: "Quote",
          icon: Quote,
          duration: "2 min",
          description: "Read inspirational quotes",
        },
      ],
    };

    const levelTasks = tasks[stressLevel] || tasks["Low"];
    return levelTasks[Math.floor(Math.random() * levelTasks.length)];
  };

  // Dummy mood analysis and task recommendation
  const handleMoodSubmit = () => {
    if (!moodInput.trim()) return;

    const analysis = analyzeStress(moodInput);
    setStressLevel(analysis);
    const task = getTaskRecommendation(analysis.level);
    setCurrentTask(task);
  };

  const completeTask = () => {
    setUser((prev) => ({
      ...prev,
      xp: prev.xp + 50,
      streak: prev.streak + 1,
      calmnessMeter: Math.min(100, prev.calmnessMeter + 5),
      totalTasks: prev.totalTasks + 1,
    }));
    setCurrentTask(null);
    setStressLevel(null);
    setMoodInput("");
  };

  if (!isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        user={user}
        setIsLoggedIn={setIsLoggedIn}
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />

      {/* Page Content */}
      <main>
        {currentPage === "dashboard" && (
          <Home user={user} setCurrentPage={setCurrentPage} />
        )}
        {currentPage === "mood" && (
          <MoodCheck
            moodInput={moodInput}
            setMoodInput={setMoodInput}
            handleMoodSubmit={handleMoodSubmit}
            stressLevel={stressLevel}
            currentTask={currentTask}
            completeTask={completeTask}
            setCurrentTask={setCurrentTask}
            setStressLevel={setStressLevel}
          />
        )}
        {currentPage === "profile" && <Profile user={user} />}
      </main>

      {/* Success Toast (when task is completed) */}
      {user.xp > 2400 && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg animate-bounce">
          <p className="font-medium">🎉 Task completed! +50 XP earned</p>
        </div>
      )}
    </div>
  );
};

export default App;
