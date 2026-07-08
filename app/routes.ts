import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("portfolio", "routes/portfolio.tsx"),
  route("project", "routes/project.tsx"),
  route("*", "routes/reroute.tsx"),
] satisfies RouteConfig;
