const Admin = [
  {
    name: "Dashboard",
    label: "Dashboard",
    icon: "fa fa-tachometer",
    link: "/dashboard",
    children: [],
  },
  {
    name: "Users",
    label: "Users",
    icon: "fa fa-users",
    link: "/users",
    children: [
      {
        name: "All Users",
        label: "All Users",
        link: "/users",
      },
      {
        name: "Add User",
        label: "Add User",
        link: "/users/add",
      },
      {
        name: "Edit User",
        label: "Edit User",
        link: "/users/edit/:id",
      },
    ],
  },
  {
    name: "Tables",
    label: "Tables",
    icon: "fa fa-table",
    link: "/tables",
    children: [
      {
        name: "Basic Table",
        label: "Basic Table",
        link: "/tables/basic",
      },
      {
        name:"React Table",
        label:"React Table",
        link:"/tables/reacttable",
      },
      {
        name: "Bordered Table",
        label: "Bordered Table",
        link: "/tables/bordered",
      },
      {
        name: "Striped Table",
        label: "Striped Table",
        link: "/tables/striped",

      },
      {
        name: "Hover Table",
        label: "Hover Table",
        link: "/tables/hover",
      },
      {
        name: "Card Table",
        label: "Card Table",
        link: "/tables/card",
      }

    ],
  },
  {
    name: "Charts",
    label: "Charts",
    icon: "fa fa-chart-bar",
    link: "/charts",
    children: [],
  },

  {
    name: "Modals",
    label: "Modals",
    icon: "fa fa-window-restore",
    link: "/modals",
    children: [],
  },
  {
    name: "Forms",
    label: "Forms",
    icon: "fa fa-file",
    link: "/forms",
    children: [
      {
        name: "Basic Form",
        label: "Basic Form",
        link: "/forms/classic",
      },
      {
        name: "Modern  Form",
        label: "Modern  Form",
        link: "/forms/Modern ",
      },
      {
        name: "Glassmorphism Form",
        label: "Glassmorphism Form",
        link: "/forms/Glassmorphism",
      },
      {
        name: "Floating  Form",
        label: "Floating  Form",
        link: "/forms/Floating ",
      },
      {
        name: "Dark theme  Form",
        label: "Dark theme  Form",
        link: "/forms/Darktheme",
      }
    ],
  },
  {
    name: "Orders",
    label: "Orders",
    icon: "fa fa-shopping-cart",
    link: "/orders",
    children: [],
  },
  {
    name: "Products",
    label: "Products",
    icon: "fa fa-product-hunt",
    link: "/products",
    children: [],
  },
  {
    name: "Settings",
    label: "Settings",
    icon: "fa fa-cog",
    link: "/settings",
    children: [],
  },
];
module.exports = { Admin };
