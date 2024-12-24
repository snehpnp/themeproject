import React from "react";

import { FaInfoCircle } from "react-icons/fa";

function Dashboard() {
  return (
    <>
      <div>Dashboard</div>

   
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
 
        <div style={{ flex: "1 1 calc(50% - 20px)" }}>
          <GradientCard />
        </div>

        <div style={{ flex: "1 1 calc(50% - 20px)" }}>
          <RoundCard />
        </div>

        <div style={{ flex: "1 1 calc(50% - 20px)" }}>
          <BorderedCard />
        </div>
        <div style={{ flex: "1 1 calc(50% - 20px)" }}>
          <IconCard />
        </div>
        <div style={{ flex: "1 1 calc(50% - 20px)" }}>
          <OutlinedGradientCard />
        </div>
        <div style={{ flex: "1 1 calc(50% - 20px)" }}>
          <DarkCard />
        </div>
      </div>
    </>
  );
}
export default Dashboard;

const GradientCard = () => {
  const cardStyle = {
    background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    color: "white",
    padding: "20px",
    textAlign: "center",
    maxWidth: "300px",
    margin: "20px auto",
    transition: "transform 0.3s ease, boxShadow 0.3s ease",
    cursor: "pointer",
  };

  const cardHoverStyle = {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
  };

  const buttonStyle = {
    background: "white",
    color: "#4facfe",
    border: "none",
    padding: "8px 16px",
    fontSize: "1rem",
    borderRadius: "20px",
    cursor: "pointer",
    transition: "background 0.3s ease, color 0.3s ease",
  };

  const buttonHoverStyle = {
    background: "#4facfe",
    color: "white",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = cardHoverStyle.transform;
        e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
        Gradient Card
      </h2>
      <p style={{ fontSize: "1rem", marginBottom: "20px" }}>
        This is an example of a card with a beautiful gradient background.
      </p>
      <button
        style={buttonStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = buttonHoverStyle.background;
          e.currentTarget.style.color = buttonHoverStyle.color;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = buttonStyle.background;
          e.currentTarget.style.color = buttonStyle.color;
        }}
      >
        Learn More
      </button>
    </div>
  );
};

const RoundCard = () => {
  const cardStyle = {
    background: "#ffffff",
    borderRadius: "50%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    color: "#333",
    padding: "30px",
    textAlign: "center",
    width: "200px",
    height: "200px",
    transition: "transform 0.3s ease, boxShadow 0.3s ease",
    cursor: "pointer",
  };

  const cardHoverStyle = {
    transform: "scale(1.05)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = cardHoverStyle.transform;
        e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      <h3>Round Card</h3>
      <p>Unique circular design for the card.</p>
    </div>
  );
};

const BorderedCard = () => {
  const cardStyle = {
    background: "#f9f9f9",
    border: "2px solid #4facfe",
    borderRadius: "8px",
    color: "#333",
    padding: "20px",
    textAlign: "center",
    width: "250px",
    transition: "transform 0.3s ease, boxShadow 0.3s ease",
    cursor: "pointer",
  };

  const cardHoverStyle = {
    transform: "scale(1.03)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = cardHoverStyle.transform;
        e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      <h3>Bordered Card</h3>
      <p>This card has a simple border effect with shadow hover.</p>
    </div>
  );
};

const IconCard = () => {
  const cardStyle = {
    background: "#f0f4f8",
    borderRadius: "10px",
    color: "#333",
    padding: "20px",
    textAlign: "center",
    width: "280px",
    transition: "transform 0.3s ease, boxShadow 0.3s ease",
    cursor: "pointer",
  };

  const cardHoverStyle = {
    transform: "translateY(-5px)",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = cardHoverStyle.transform;
        e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      <FaInfoCircle size={40} color="#4facfe" />
      <h3>Info Card</h3>
      <p>Click for more information.</p>
    </div>
  );
};

const OutlinedGradientCard = () => {
  const cardStyle = {
    background: "linear-gradient(45deg, #ff7e5f, #feb47b)",
    borderRadius: "12px",
    color: "white",
    padding: "20px",
    textAlign: "center",
    width: "280px",
    border: "3px solid #feb47b",
    transition: "transform 0.3s ease, boxShadow 0.3s ease",
    cursor: "pointer",
  };

  const cardHoverStyle = {
    transform: "scale(1.05)",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = cardHoverStyle.transform;
        e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      <h3>Outlined Gradient Card</h3>
      <p>Featuring a unique border and gradient background.</p>
    </div>
  );
};
const DarkCard = () => {
  const cardStyle = {
    background: "#333",
    borderRadius: "12px",
    color: "white",
    padding: "20px",
    textAlign: "center",
    width: "300px",
    transition: "transform 0.3s ease, boxShadow 0.3s ease",
    cursor: "pointer",
  };

  const cardHoverStyle = {
    transform: "scale(1.05)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = cardHoverStyle.transform;
        e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      <h3>Dark Card</h3>
      <p>This card has a dark background with light text.</p>
    </div>
  );
};
