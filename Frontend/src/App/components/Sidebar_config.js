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
    children: [],
  },
  {
    name: "Charts",
    label: "Charts",
    icon: "fa fa-chart-bar",
    link: "/charts",
    children: [],
  },
  {
    name: "Cards",
    label: "Cards",
    icon: "fa fa-credit-card",
    link: "/cards",
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
    children: [],
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
