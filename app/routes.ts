import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("project", "routes/project.tsx"),
  route("about-me", "routes/about-me.tsx"),
  route("experiments", "routes/experiments.tsx"),
  route("tag/:tag", "routes/tag.tsx"),
  route("system/:system", "routes/system.tsx"),
  route("*", "routes/reroute.tsx"),
] satisfies RouteConfig;
