export const effortColor = (e) =>
  ({ Low: "#4ade80", Medium: "#facc15", High: "#f87171" }[e] || "#94a3b8");

export const typeColor = (t) =>
  ({
    SaaS: "#818cf8",
    Freelance: "#38bdf8",
    Product: "#fb923c",
    Service: "#a78bfa",
    Content: "#34d399",
    Partnership: "#f472b6",
    Grant: "#fbbf24",
  }[t] || "#94a3b8");

export const scoreColor = (s) =>
  s >= 8 ? "#4ade80" : s >= 6 ? "#facc15" : s >= 4 ? "#fb923c" : "#f87171";
