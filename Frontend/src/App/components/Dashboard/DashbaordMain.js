/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Dashboard1 from "./Dashboard1";
import Dashboard2 from "./Dashboard2";
import Dashboard3 from "./Dashboard3";
import Dashboard4 from "./Dashboard4";
import Dashboard5 from "./Dashboard5";
import Dashboard6 from "./Dashboard6";
import Dashboard7 from "./Dashboard7";
import Dashboard8 from "./Dashboard8";
import Dashboard9 from "./Dashboard9";
import Dashboard10 from "./Dashboard10";

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

const Dashboard = () => {
  var GetThemeId = JSON.parse(localStorage.getItem("theme"));

  useEffect(() => {
    console.log("themeId", GetThemeId.themeId);
    if (GetThemeId.themeId == 19) {
    }
  }, [GetThemeId.themeId]);

  return (
    <>
      <div>
        <div className="content-body">
          <div className="container-fluid">
            {CallDashboard(GetThemeId.themeId)}{" "}
          
          </div>
        </div>
      </div>
    </>
  );
};

const CallDashboard = (id) => {
  if (id == 1) {
    return <Dashboard1 data={DashboardData} />;
  } else if (id == 2) {
    return <Dashboard2 data={DashboardData} />;
  } else if (id == 3) {
    return <Dashboard3 data={DashboardData} />;
  } else if (id == 4) {
    return <Dashboard4 data={DashboardData} />;
  } else if (id == 5) {
    return <Dashboard5 data={DashboardData} />;
  } else if (id == 6) {
    return <Dashboard6 data={DashboardData} />;
  } else if (id == 7) {
    return <Dashboard7 data={DashboardData} />;
  } else if (id == 8) {
    return <Dashboard8 data={DashboardData} />;
  } else if (id == 9) {
    return <Dashboard9 data={DashboardData} />;
  } else if (id == 10) {
    return <Dashboard10 data={DashboardData} />;
  } else {
    return <Dashboard1 data={DashboardData} />;
  }
};

export default Dashboard;
