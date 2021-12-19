export const BrowserCmds: { [key: string]: string } = {
  os: "navigator.platform",
  userAgent: "navigator.userAgent",
  plugins: "navigator.plugins",
  url: "window.location.href",
  cookie: "document.cookie",
  localStorage: "document.localStorage",
  sessionStorage: "document.sessionStorage",
  resource: "performance.getEntriesByType('resource')",
};
