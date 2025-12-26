import React, { useState } from "react";

function Quiz() {
  const questions = [
    {
      id: "q1",
      text: "When faced with a challenge, you usually:",
      options: [
        "Take charge and lead",
        "Analyze quietly before acting",
        "Adapt and go with the flow",
        "Support others emotionally",
      ],
    },
    {
      id: "q2",
      text: "In a group, you are most likely to:",
      options: [
        "Lead the discussion",
        "Observe and contribute later",
        "Crack jokes and lighten the mood",
        "Make sure everyone feels included",
      ],
    },
    {
      id: "q3",
      text: "What motivates you the most?",
      options: [
        "Power and achievement",
        "Knowledge and understanding",
        "Freedom and adventure",
        "Love and connection",
      ],
    },
    {
      id: "q4",
      text: "Your biggest strength is:",
      options: ["Confidence", "Wisdom", "Creativity", "Empathy"],
    },
    {
      id: "q5",
      text: "How do you handle stress?",
      options: [
        "Face it head-on",
        "Withdraw and reflect",
        "Distract yourself with new experiences",
        "Talk it out with someone you trust",
      ],
    },
    {
      id: "q6",
      text: "People often describe you as:",
      options: ["Strong-willed", "Thoughtful", "Spontaneous", "Caring"],
    },
    {
      id: "q7",
      text: "In conflict situations, you tend to:",
      options: [
        "Assert dominance",
        "Seek logical resolution",
        "Avoid and move on",
        "Mediate and heal",
      ],
    },
    {
      id: "q8",
      text: "Your ideal weekend looks like:",
      options: [
        "Working on personal goals",
        "Reading or learning something new",
        "Exploring new places",
        "Spending time with loved ones",
      ],
    },
    {
      id: "q9",
      text: "What scares you the most?",
      options: [
        "Losing control",
        "Being misunderstood",
        "Feeling trapped",
        "Being alone",
      ],
    },
    {
      id: "q10",
      text: "What role do you naturally take in life?",
      options: ["Leader", "Thinker", "Explorer", "Caregiver"],
    },
  ];

  const archetypeMap = ["Leader", "Thinker", "Explorer", "Caregiver"];

  const archetypeDescriptions = {
    Leader: {
      title: "The Leader",
      description:
        "You are driven by purpose and power. You naturally take charge, shaping chaos into direction. Others look to you when clarity is needed. Your shadow lies in control — learning to trust others is your growth.",
    },
    Thinker: {
      title: "The Thinker",
      description:
        "You seek truth beneath the surface. Your mind is your sanctuary, where ideas are refined and meanings are questioned. Wisdom is your weapon. Your challenge is to not disappear into thought and forget action.",
    },
    Explorer: {
      title: "The Explorer",
      description:
        "Freedom is your oxygen. You grow through experience, movement, and discovery. Rules feel like cages, routines like chains. Your lesson is learning when to stay, not just when to run.",
    },
    Caregiver: {
      title: "The Caregiver",
      description:
        "Your strength is compassion. You heal, protect, and nurture the emotional world around you. People feel safe with you. Your shadow is self-neglect — remember, you matter too.",
    },
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [scores, setScores] = useState({
    Leader: 0,
    Thinker: 0,
    Explorer: 0,
    Caregiver: 0,
  });

  if (currentIndex >= questions.length) {
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const dominant = sorted[0][0];
    const friend = sorted[1][0];
    const enemy = sorted[sorted.length - 1][0];

    return (
      <div style={{ maxWidth: "600px", margin: "80px auto", textAlign: "center", color: "#f5f5f5" }}>
        <h1>🌟 {archetypeDescriptions[dominant].title}</h1>
        <p>{archetypeDescriptions[dominant].description}</p>

        <hr />

        <h3>🤝 Friend Archetype</h3>
        <p>{archetypeDescriptions[friend].description}</p>

        <hr />

        <h3>⚔️ Enemy Archetype</h3>
        <p>{archetypeDescriptions[enemy].description}</p>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at top, #1f1f3a, #0b0b1a)",
        color: "#f5f5f5",
      }}
    >
      <h1
        style={{
          position: "absolute",
          top: "40px",
          fontSize: "2.4rem",
          fontWeight: "700",
          letterSpacing: "1px",
          color: "#ffd369",
        }}
      >
        Archetype Mirror
      </h1>

      <div
        style={{
          maxWidth: "600px",
          width: "100%",
          height: "520px",
          padding: "40px",
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* ✅ STEP 3: WRAPPED QUESTION + OPTIONS */}
        <div>
          <p
            style={{
              letterSpacing: "1px",
              opacity: 0.8,
              marginBottom: "10px",
            }}
          >
            Question {currentIndex + 1} / {questions.length}
          </p>

          <h2>{currentQuestion.text}</h2>

          {currentQuestion.options.map((option, index) => (
            <label
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "14px 18px",
                marginBottom: "14px",
                borderRadius: "14px",
                cursor: "pointer",
                background:
                  selectedOption === index
                    ? "rgba(255, 211, 105, 0.18)"
                    : "rgba(255,255,255,0.05)",
                border:
                  selectedOption === index
                    ? "1px solid #ffd369"
                    : "1px solid transparent",
                transition: "all 0.25s ease",
              }}
            >
              <input
                type="radio"
                name="option"
                value={index}
                checked={selectedOption === index}
                onChange={() => setSelectedOption(index)}
                style={{ transform: "scale(1.2)" }}
              />
              <span style={{ fontSize: "1rem" }}>{option}</span>
            </label>
          ))}
        </div>

        <button
          disabled={selectedOption === null}
          onClick={() => {
            const archetype = archetypeMap[selectedOption];
            setScores(prev => ({
              ...prev,
              [archetype]: prev[archetype] + 1,
            }));
            setSelectedOption(null);
            setCurrentIndex(currentIndex + 1);
          }}
        >
          Next →
        </button>
      </div>
    </div>
  );
}

export default Quiz;
