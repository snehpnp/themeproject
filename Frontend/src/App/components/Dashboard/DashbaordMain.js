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
  return (
    <>
      <div>
        <div className="content-body">
          <div className="container-fluid">
            <Dashboard1 data={DashboardData} />
            <Dashboard2 data={DashboardData} />
            <Dashboard3 data={DashboardData} />
            <Dashboard4 data={DashboardData} />
            <Dashboard5 data={DashboardData} />
            <Dashboard6 data={DashboardData} />
            <Dashboard7 data={DashboardData} />
            <Dashboard8 data={DashboardData} />
            <Dashboard9 data={DashboardData} />
            <Dashboard10 data={DashboardData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
