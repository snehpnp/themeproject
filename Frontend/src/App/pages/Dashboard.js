import React from "react";
import { FaInfoCircle } from "react-icons/fa";

// Main Dashboard Component
function Dashboard() {
  const DashboardData = [
    {
      title: "Total Clients",
      total: 10,
    },

    {
      title: "Total Revenue",
      total: "$1000",
    },
    {
      title: "Total Users",
      total: 10,
    },
    {
      title: "Total Empoyees",
      total: 100,
    },
    {
      title: "Active Empoyees",
      total: 10,
    },
    {
      title: "Total Projects",
      total: 10,
    },
    {
      title: "Total Empoyees",
      total: 100,
    },
    {
      title: "Active Empoyees",
      total: 10,
    },
    {
      title: "Total Projects",
      total: 10,
    },
  ];

  return (
    <>
      <div className="content-body">
        <div className="container-fluid">
          {/* <GradientCard data={DashboardData} />

          <StatisticCard data={DashboardData} />

          <RoundCard data={DashboardData} />

          <BorderedCard data={DashboardData} />

          <IconCard data={DashboardData} />

          <OutlinedGradientCard data={DashboardData} />

          <DarkCard data={DashboardData} /> */}
        </div>
      </div>
    </>
  );
}

export default Dashboard;

const GradientCard = ({ DashboardDataParam }) => {
  const cardStyle = {
    background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    color: "white",
    textAlign: "center",
    maxWidth: "300px",
    transition: "transform 0.3s ease, boxShadow 0.3s ease",
    cursor: "pointer",
    padding: "20px",
    margin: "10px",
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Dashboard 1 GradientCard
      </h2>
      <div className="row">
        {DashboardDataParam &&
          DashboardDataParam.data.map((data, index) => (
            <div className="col-md-3 col-sm-6 d-flex" key={index}>
              <div style={cardStyle}>
                <FaInfoCircle size={40} color="#fff" />
                <h3>{data.title}</h3>
                <p>{data.total}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

const RoundCard = ({ DashboardDataParam }) => {
  const outerCardStyle = {
    background: "#f0f0f0",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    color: "#333",
    padding: "40px",
    textAlign: "center",
    margin: "20px auto",
    maxWidth: "300px",
    transition: "transform 0.3s ease, boxShadow 0.3s ease",
    cursor: "pointer",
  };

  const cardStyle = {
    background: "#ffffff",
    borderRadius: "50%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    color: "#333",
    padding: "30px",
    textAlign: "center",
    width: "200px",
    height: "200px",
    margin: "10px auto",
    transition: "transform 0.3s ease, boxShadow 0.3s ease",
    cursor: "pointer",
  };

  return (
    <div style={outerCardStyle}>
      <h2 style={{ marginBottom: "20px" }}>Dashboard - Nested Round Cards</h2>
      <div className="row justify-content-center">
        {DashboardDataParam &&
          DashboardDataParam.data.map((data, index) => (
            <div
              className="col-md-3 col-sm-6 d-flex justify-content-center"
              key={index}
            >
              <div style={cardStyle}>
                <h3>{data.title}</h3>
                <p>{data.total}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

const BorderedCard = (DashboardDataParam) => {
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

  return (
    <>
      {DashboardDataParam &&
        DashboardDataParam.data.map((data, index) => (
          <div style={cardStyle} key={index}>
            <h3>{data.title}</h3>
            <p>{data.total}</p>
          </div>
        ))}
    </>
  );
};

const IconCard = (DashboardDataParam) => {
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

  return (
    <>
      {DashboardDataParam &&
        DashboardDataParam.data.map((data, index) => (
          <div style={cardStyle} key={index}>
            <h3>{data.title}</h3>
            <p>{data.total}</p>
            <FaInfoCircle style={{ fontSize: "24px", color: "#4facfe" }} />
          </div>
        ))}
    </>
  );
};

const OutlinedGradientCard = (DashboardDataParam) => {
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

  return (
    <>
      {DashboardDataParam &&
        DashboardDataParam.data.map((data, index) => (
          <div style={cardStyle} key={index}>
            <h3>{data.title}</h3>
            <p>{data.total}</p>
          </div>
        ))}
    </>
  );
};

const DarkCard = (DashboardDataParam) => {
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

  return (
    <>
      {DashboardDataParam &&
        DashboardDataParam.data.map((data, index) => (
          <div style={cardStyle} key={index}>
            <h3>{data.title}</h3>
            <p>{data.total}</p>
          </div>
        ))}
    </>
  );
};

const StatisticCard = (DashboardDataParam) => {
  console.log(DashboardDataParam.data);
  const cardStyle = {
    background: "#4facfe",
    borderRadius: "8px",
    color: "white",
    padding: "20px",
    textAlign: "center",
    width: "250px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    transition: "transform 0.3s ease, boxShadow 0.3s ease",
  };

  const cardHoverStyle = {
    transform: "scale(1.05)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
  };

  return (
    <>
      {DashboardDataParam &&
        DashboardDataParam.data.map((data, index) => (
          <div
            key={index}
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
            <h3>{data.title}</h3>
            <h2>{data.total}</h2>
          </div>
        ))}
    </>
  );
};

const ProgressCard = (DashboardDataParam) => {
  const cardStyle = {
    background: "#feb47b",
    borderRadius: "12px",
    color: "white",
    padding: "20px",
    textAlign: "center",
    width: "250px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    transition: "transform 0.3s ease, boxShadow 0.3s ease",
  };

  const cardHoverStyle = {
    transform: "scale(1.05)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
  };

  return (
    <>
      {DashboardDataParam &&
        DashboardDataParam.data.map((data, index) => (
          <div
            key={index}
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
            <h3>{data.title}</h3>
            <h2>{data.total}</h2>
          </div>
        ))}
    </>
  );
};
