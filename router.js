const path = window.location.pathname;

const routes = {
  "/about": "/about.html",
  "/services": "/services.html",
  "/contact": "/contact.html",
  "/meet_the_team": "/meet_the_team.html"
};

if (routes[path]) {
  window.location.replace(routes[path]);
} 