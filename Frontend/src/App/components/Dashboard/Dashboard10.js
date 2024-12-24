/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Dashboard1 = ({ data }) => {
  
  let arr = [
    {
      index: 1,
      name: "Total  Client",
      value: data && data.total_client,
      icon: 'la la-users',
      route: "/admin/allclients",
      visible: false
    },
    {
      index: 2,
      name: "Total Active Client",
      value: data && data.total_active_client,
      icon: 'la la-users',
      route: '/admin/allclients?filter=111',
      visible: true

    },
    {
      index: 3,
      name: "Total Expired Client",
      value: data && data.total_expired_client,
      icon: 'la la-users',
      route: "/admin/expiredclients?filter=000",
      visible: true
    },
    {
      index: 4,
      name: "Total Live Client",
      value: data && data.total_live_client,
      icon: 'la la-users',
      route: "/admin/allclients?filter=2",
      visible: true
    },
    {
      index: 5,
      name: "Active Live Client",
      value: data && data.total_active_live,
      icon: 'la la-users',
      route: "/admin/allclients?filter=21",
      visible: true
    },
    {
      index: 6,
      name: "Expired Live Client",
      value: data && data.total_expired_live,
      icon: 'la la-users',
      route: "/admin/allclients?filter=20",
      visible: true
    },
    {
      index: 7,
      name: "Total Demo Client",
      value: data && data.total_demo_client,
      icon: 'la la-users',
      route: "/admin/allclients?filter=1",
      visible: true
    },
    {
      index: 8,
      name: "Active Demo Client",
      value: data && data.total_active_demo,
      icon: 'la la-users',
      route: "/admin/allclients?filter=11",
      visible: true
    },
    {
      index: 9,
      name: "Expired Demo Client",
      value: data && data.total_expired_demo,
      icon: 'la la-users',
      route: "/admin/allclients??filter=10",
      visible: true

    },
    {
      index: 10,
      name: "Total 2 Days Client",
      value: data && data.total_two_days,
      icon: 'la la-users',
      route: "/admin/allclients?filter=0",
      visible: true

    },
    {
      index: 11,
      name: "Active 2 Days Client",
      value: data && data.total_active_two_days,
      icon: 'la la-users',
      route: "/admin/allclients?filter=01",
      visible: true

    },
    {
      index: 12,
      name: "Expired 2 Days Client",
      value: data && data.total_expired_two_days,
      icon: 'la la-users',
      route: "/admin/allclients?filter=00",
      visible: true

    },
    {
      index: 13,
      name: "Total License",
      value: data && data.all_licence,
      icon: 'la la-users',
      route: "/admin/allLicence?filter=0",
      visible: true
    }, {
      index: 14,
      name: "Remaining  License",
      value: data && data.remaining_licence,
      icon: 'la la-users',
      route: "/admin/allLicence",
      visible: false
    }, {
      index: 15,
      name: "Used  License",
      value: data && data.used_licence,
      icon: 'la la-users',
      route: "/admin/allLicence?filter=1",
      visible: true
    },

  ]

  return <>

    <div className="theme-10-dashboard">
      <div className="row">
        {arr.map((item, index) => {
          return <React.Fragment key={index}>
            <div className="col-xl-3 col-lg-3 col-xxl-3 col-md-4">
              <div className="card widget-stat border-0 sixth-dashboard-card">
                <div className="card-header border-0 pb-0">
                  <div className="media w-100">
                    <span className="me-3 bg-primary">
                      <i className="la la-users  text-white" />
                    </span>
                    <div className="media-body text-end">
                      <p className="mb-1">{item.name}</p>
                      <h3 className="">{item.value}</h3>
                      {item.visible ? <>

                        <h6>
                          <Link className="" to={item.route}>
                          <i className="fa-regular fa-eye pe-1" ></i>View</Link></h6>
                      </> : ""}

                    </div>
                  </div>
                </div>
                <div className=" text-center">
                  <img
                    src="../assets/images/dash_icon/dash-6-icon.png"
                    className=""
                  />
                </div>
              </div>
            </div>
          </React.Fragment>
        })}
      </div>
    </div>
  </>
}


export default Dashboard1




