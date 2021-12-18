import * as WS from "ws";
import * as Read from "readline";
import * as Http from "http";
import * as Services from "@src/services";

export const Shell = (Server: Http.Server) => {
  const wss = new WS.Server({ server: Server, path: "/shell" });

  wss.on("connection", (ws) => {
    ws.on("message", Services.Print);

    const ReadLine = Read.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    ReadLine.on("line", (line) => Services.Executor(line, ws));
  });
};
