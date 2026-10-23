import { portfolioProjects } from "./portfolio";
import { vlogArticles } from "./vlog";

export function normalizePath(pathname) {
  if (!pathname || pathname === "/index.html") return "/";
  return pathname.replace(/\/+$/, "") || "/";
}

export function legacyToCanonicalPath(pathname) {
  const path = normalizePath(pathname);

  if (path === "/vlog") return "/blog";
  if (path.startsWith("/vlog/")) return path.replace("/vlog/", "/blog/");

  return path;
}

export const staticRoutes = ["/", "/proyectos", "/blog", "/contacto"];

export const projectRoutes = portfolioProjects.map(
  (project) => `/proyectos/${project.slug}`,
);

export const blogRoutes = vlogArticles.map((article) => `/blog/${article.slug}`);

export const legacyRoutes = [
  "/vlog",
  ...vlogArticles.map((article) => `/vlog/${article.slug}`),
];

export const prerenderRoutes = [
  ...staticRoutes,
  ...projectRoutes,
  ...blogRoutes,
  ...legacyRoutes,
];

export function isKnownRoute(pathname) {
  const path = legacyToCanonicalPath(pathname);

  return (
    staticRoutes.includes(path) ||
    projectRoutes.includes(path) ||
    blogRoutes.includes(path)
  );
}
