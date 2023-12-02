const routes = [
  {
    path: "/dash",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/employees",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/EmployeesGroup.vue") },
    ],
  },
  {
    path: "/clients",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/ClientsAutocare.vue") },
    ],
  },
  {
    path: "/cars",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/CarsAutocare.vue") }],
  },
  {
    path: "/services",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/ServicesAutocare.vue") },
    ],
  },
  {
    path: "/fact",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/FactAutocare.vue") }],
  },
  {
    path: "/history",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/HistoryAutocare.vue") },
    ],
  },
  {
    path: "/products",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/ProductAutocare.vue") },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it

  {
    path: "/",
    component: () => import("components/auth/Login_ACM.vue"),
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
